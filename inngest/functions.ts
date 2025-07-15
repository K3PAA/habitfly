import { db } from '@/db'
import { users, habits, habitEntries } from '@/db/schema'
import { inngest } from './client'
import { eq } from 'drizzle-orm'

export const createDailyHabit = inngest.createFunction(
  { id: 'create-daily-habit' },
  { cron: '0 0 * * *' },
  async ({ step }) => {
    const allUsers = await step.run('fetch-users', async () => {
      return await db.select().from(users)
    })

    for (const user of allUsers) {
      const userHabits = await step.run(`fetch-habits-${user.id}`, async () => {
        return db.select().from(habits).where(eq(habits.userId, user.id))
      })

      for (const habit of userHabits) {
        const [previousHabitEntry] = await db
          .select()
          .from(habitEntries)
          .where(eq(habitEntries.habitId, habit.id))
          .orderBy(habitEntries.date)

        await step.run(`create-entry-${user.id}-${habit.id}`, async () => {
          return db.insert(habitEntries).values({
            progressCurrent: 0,
            progressToGo: previousHabitEntry.progressToGo || 1,
            date: new Date(),
            habitId: habit.id,
          })
        })
      }
    }
  },
)
