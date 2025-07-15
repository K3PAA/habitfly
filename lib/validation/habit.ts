import { habitModeEnum, timeOfDayEnum } from '@/db/schema'
import * as z from 'zod'

export const HabitCreation = z.object({
  title: z.string().nonempty(),
  description: z.string(),
  important: z.boolean(),
  mode: z.enum(habitModeEnum.enumValues),
  progressToGo: z.number().min(1),
  timeOfDay: z.enum(timeOfDayEnum.enumValues),
})
