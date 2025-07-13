'use server'

import { db } from '@/db'
import { habits, users } from '@/db/schema'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const selectUserOrCreate = async (id: string) => {
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

export const createHabit = async (formData: FormData) => {
  const { isAuthenticated, getUser } = getKindeServerSession()

  const isLogged = await isAuthenticated()
  const kindeUser = await getUser()
  if (!isLogged || !kindeUser) return redirect('/')

  const user = await selectUserOrCreate(kindeUser.id)
  await db.insert(habits).values({
    // error in console if title not unique
    title: 'test2',
    userId: user.id,
  })

  revalidatePath('/habits')
}
