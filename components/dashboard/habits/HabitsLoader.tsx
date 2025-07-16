import { getAllHabitEntries, getAllUserHabits } from '@/app/data/habits'

import { HabitsModeT } from '@/lib/types'
import Habits from './Habits'

type HabitsLoaderProps = {
  mode: HabitsModeT
}

export default async function HabitsLoader({ mode }: HabitsLoaderProps) {
  const userHabits = await getAllUserHabits(mode)
  const userEntries = await getAllHabitEntries(userHabits.map((h) => h.id))

  return <Habits data={{ habits: userHabits, entries: userEntries }} />
}
