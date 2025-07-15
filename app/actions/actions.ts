'use server'

import { IncreaseButtonProps } from '@/components/dashboard/habits/habit/IncreaseButton'
import { db } from '@/db'
import { habits, habitEntries } from '@/db/schema'
import { extractFormData } from '@/lib/habits'
import { selectUserOrCreate } from '@/lib/user'
import { HabitCreation } from '@/lib/validation/habit'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { eq, and } from 'drizzle-orm'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const createHabit = async (formData: FormData) => {
  const { isAuthenticated, getUser } = getKindeServerSession()
  const isLogged = await isAuthenticated()
  const kindeUser = await getUser()

  if (!isLogged || !kindeUser) return redirect('/')
  const rawData = extractFormData(formData)
  const result = await HabitCreation.safeParseAsync(rawData)

  if (!result.success) return { error: result.error }
  const { title, description, important, mode, timeOfDay, progressToGo } =
    result.data

  try {
    const user = await selectUserOrCreate(kindeUser.id)
    const [habit] = await db
      .insert(habits)
      .values({
        title,
        description,
        important,
        mode,
        timeOfDay,
        userId: user.id,
      })
      .returning()
    await db.insert(habitEntries).values({
      progressCurrent: 0,
      progressToGo,
      date: new Date(),
      habitId: habit.id,
    })
  } catch (error) {
    return { error: error }
  }

  if (mode === 'daily') revalidatePath('/habits')
  revalidatePath(`/habits/${mode}`)
}

export const buttonClickAction = async ({
  progressCurrent,
  progressToGo,
  entryId,
}: IncreaseButtonProps) => {
  'use server'
  await db
    .update(habitEntries)
    .set({
      progressCurrent:
        progressCurrent >= progressToGo ? 0 : progressCurrent + 1,
    })
    .where(eq(habitEntries.id, Number(entryId)))
}

export const deleteAllEntries = async ({ habitId }: { habitId: number }) => {
  'use server'
  const { isAuthenticated, getUser } = getKindeServerSession()
  const isLogged = await isAuthenticated()
  const kindeUser = await getUser()
  if (!isLogged || !kindeUser) return redirect('/')

  try {
    // Find user
    const user = await selectUserOrCreate(kindeUser.id)
    // Delete all entries for this habit
    await db.delete(habitEntries).where(eq(habitEntries.habitId, habitId))
    // Delete the habit itself, ensuring user owns it
    await db
      .delete(habits)
      .where(and(eq(habits.id, habitId), eq(habits.userId, user.id)))
  } catch (error) {
    return { error }
  }
  revalidatePath('/habits')
}
