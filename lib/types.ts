import { habits } from '@/db/schema'

export type HabitT = typeof habits.$inferSelect
export type NewHabitT = typeof habits.$inferInsert
