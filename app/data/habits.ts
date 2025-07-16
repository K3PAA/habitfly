import 'server-only'
import { db } from '@/db'
import { habitEntries, habits } from '@/db/schema'
import 'server-only'
import { requireUser } from '@/app/data/user'
import { and, eq, inArray } from 'drizzle-orm'
import { HabitsModeT } from '@/lib/types'
import { HabitCreationT } from '@/lib/types'
import { IncreaseButtonProps } from '@/components/dashboard/habits/habit/IncreaseButton'

export const getAllUserHabits = async (mode: HabitsModeT) => {
  const user = await requireUser()

  const userHabits = await db
    .select()
    .from(habits)
    .where(and(eq(habits.userId, user.id), eq(habits.mode, mode)))

  return userHabits
}

export const getAllHabitEntries = async (habitIds: number[]) => {
  await requireUser()

  const userEntries = await db
    .select()
    .from(habitEntries)
    .where(inArray(habitEntries.habitId, habitIds))

  return userEntries
}

export const createNewHabit = async (data: HabitCreationT) => {
  const user = await requireUser()

  const [habit] = await db
    .insert(habits)
    .values({
      ...data,
      userId: user.id,
    })
    .returning()

  return habit
}

export const createHabitEntry = async ({
  data,
  habitId,
}: {
  data: HabitCreationT
  habitId: number
}) => {
  await requireUser()
  const entry = await db
    .insert(habitEntries)
    .values({
      progressCurrent: 0,
      progressToGo: data.progressToGo,
      date: new Date(),
      habitId,
    })
    .returning()
  return entry
}

export const updateEntryProgress = async ({
  progressCurrent,
  progressToGo,
  entryId,
}: IncreaseButtonProps) => {
  await requireUser()

  await db
    .update(habitEntries)
    .set({
      progressCurrent:
        progressCurrent >= progressToGo ? 0 : progressCurrent + 1,
    })
    .where(eq(habitEntries.id, Number(entryId)))
}

export const deleteHabit = async (habitId: number) => {
  const user = await requireUser()
  await db.delete(habitEntries).where(eq(habitEntries.habitId, habitId))
  await db
    .delete(habits)
    .where(and(eq(habits.id, habitId), eq(habits.userId, user.id)))
}
