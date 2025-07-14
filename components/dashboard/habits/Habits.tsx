import { db } from '@/db'
import { habits } from '@/db/schema'
import Habit from './Habit'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { eq, and } from 'drizzle-orm'
import { selectUserOrCreate } from '@/app/actions/actions'

type HabitsProps = {
  mode: (typeof habits.$inferSelect)['mode']
}

export default async function Habits({ mode }: HabitsProps) {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  if (!kindeUser) return <main>No user</main>

  const user = await selectUserOrCreate(kindeUser.id)
  const data = await db
    .select()
    .from(habits)
    .where(and(eq(habits.userId, user.id), eq(habits.mode, mode)))

  return (
    <main className='even-grid mt-4'>
      {data.map((item) => {
        return <Habit key={item.id} {...item} />
      })}
    </main>
  )
}
