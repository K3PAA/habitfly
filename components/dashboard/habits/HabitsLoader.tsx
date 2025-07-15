import { db } from '@/db'
import { habitEntries, habits } from '@/db/schema'
import { selectUserOrCreate } from '@/lib/user'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { and, eq, inArray } from 'drizzle-orm'

import Habits from './Habits'

type HabitsLoaderProps = {
  mode: (typeof habits.$inferSelect)['mode']
}

export default async function HabitsLoader({ mode }: HabitsLoaderProps) {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  if (!kindeUser) return <main>No user</main>

  const user = await selectUserOrCreate(kindeUser.id)

  const userHabits = await db
    .select()
    .from(habits)
    .where(and(eq(habits.userId, user.id), eq(habits.mode, mode)))

  const habitIds = userHabits.map((h) => h.id)

  const userEntries = await db
    .select()
    .from(habitEntries)
    .where(inArray(habitEntries.habitId, habitIds))

  return <Habits data={{ habits: userHabits, entries: userEntries }} />
}
