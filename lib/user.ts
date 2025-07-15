import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { users } from '@/db/schema'

export const selectUserOrCreate = async (id: string) => {
  const [existing] = await db.select().from(users).where(eq(users.kindeId, id))
  if (existing) return existing

  const [inserted] = await db
    .insert(users)
    .values({
      kindeId: id,
    })
    .returning()
  return inserted
}
