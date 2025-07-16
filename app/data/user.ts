import 'server-only'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import { cache } from 'react'

const findExistingUser = async (kindeId: string) => {
  const [existing] = await db
    .select()
    .from(users)
    .where(eq(users.kindeId, kindeId))

  return existing
}

const createUser = async (kindeId: string) => {
  const [newUser] = await db
    .insert(users)
    .values({
      kindeId,
    })
    .returning()

  return newUser
}

export const requireUser = cache(async () => {
  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()
  if (!kindeUser) redirect('/login')

  const findUser = findExistingUser(kindeUser.id)
  if (findUser) return findUser

  const newUser = createUser(kindeUser.id)
  return newUser
})
