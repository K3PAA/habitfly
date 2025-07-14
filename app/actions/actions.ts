'use server'

import { db } from '@/db'
import { habits, timeOfDayEnum, habitModeEnum, users } from '@/db/schema'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import * as z from 'zod'

export const selectUserOrCreate = async (id: string) => {
  const [existing] = await db.select().from(users).where(eq(users.kindeId, id))
  if (existing) return existing

  const inserted = await db
    .insert(users)
    .values({
      kindeId: id,
    })
    .returning()
  return inserted[0]
}

const HabitCreation = z.object({
  title: z.string().nonempty(),
  description: z.string(),
  important: z.boolean(),
  mode: z.enum(habitModeEnum.enumValues),
  progressToGo: z.number().min(1),
  timeOfDay: z.enum(timeOfDayEnum.enumValues),
})

export const createHabit = async (formData: FormData) => {
  const { isAuthenticated, getUser } = getKindeServerSession()

  const isLogged = await isAuthenticated()
  const kindeUser = await getUser()
  if (!isLogged || !kindeUser) return redirect('/')

  const user = await selectUserOrCreate(kindeUser.id)

  const rawData = {
    title: formData.get('title'),
    description: formData.get('description'),
    progressToGo: Number(formData.get('goal')),
    important: formData.get('important') === 'on',
    mode: formData.get('mode') ?? 'daily',
    timeOfDay: formData.get('timeOfDay') ?? 'any_time',
  }

  const result = await HabitCreation.safeParseAsync(rawData)

  if (!result.success) return { error: result.error }
  try {
    await db.insert(habits).values({
      ...result.data,
      userId: user.id,
    })
  } catch (error) {
    return { error: error }
  }

  revalidatePath('/habits')
}
