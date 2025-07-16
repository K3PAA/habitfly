import { habits } from '@/db/schema'
import z from 'zod'
import { HabitCreation } from './validation/habit'

export type HabitT = typeof habits.$inferSelect
export type NewHabitT = typeof habits.$inferInsert

export type HabitsModeT = HabitT['mode']
export type HabitCreationT = z.infer<typeof HabitCreation>
