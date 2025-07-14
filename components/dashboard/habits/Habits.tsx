import { db } from '@/db'

import { habits, users } from '@/db/schema'
import Habit from './Habit'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { eq } from 'drizzle-orm'
import { selectUserOrCreate } from '@/app/actions/actions'

export default async function Habits() {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  if (!kindeUser) return <main>No user</main>

  const user = await selectUserOrCreate(kindeUser.id)
  const data = await db.select().from(habits).where(eq(habits.userId, user.id))

  return (
    <main className='even-grid'>
      {data.map((item) => {
        return <Habit key={item.id} {...item} />
      })}
    </main>
  )
}
