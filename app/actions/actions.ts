'use server'

import { IncreaseButtonProps } from '@/components/dashboard/habits/habit/IncreaseButton'
import { extractFormData } from '@/lib/habits'
import { HabitCreation } from '@/lib/validation/habit'
import { revalidatePath } from 'next/cache'

import {
  createHabitEntry,
  createNewHabit,
  deleteHabit,
  updateEntryProgress,
} from '@/app/data/habits'

export const createHabit = async (formData: FormData) => {
  const rawData = extractFormData(formData)
  const result = await HabitCreation.safeParseAsync(rawData)

  if (!result.success) return { error: result.error }
  const { mode } = result.data

  try {
    const habit = await createNewHabit(result.data)
    await createHabitEntry({ data: result.data, habitId: habit.id })
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
  await updateEntryProgress({ progressToGo, progressCurrent, entryId })
}

export const deleteAllEntries = async ({ habitId }: { habitId: number }) => {
  await deleteHabit(habitId)

  revalidatePath('/habits/daily')
}
