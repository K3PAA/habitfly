import { relations } from 'drizzle-orm'
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  boolean,
  pgEnum,
} from 'drizzle-orm/pg-core'

// Enum for time of day
export const timeOfDayEnum = pgEnum('time_of_day', [
  'morning',
  'afternoon',
  'evening',
  'any_time',
])

// Enum for habit type
export const habitModeEnum = pgEnum('habit_mode', [
  'daily',
  'weekly',
  'monthly',
])

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  kindeId: text('kinde_id').unique().notNull(),
  name: varchar('first_name'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const habits = pgTable('habits', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),

  title: varchar({ length: 25 }).unique().notNull(),
  description: text(),
  important: boolean().default(false),

  mode: habitModeEnum('mode').notNull().default('daily'),

  timeOfDay: timeOfDayEnum('time_of_day').notNull().default('any_time'),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

export const habitEntries = pgTable('habit_entries', {
  id: serial('id').primaryKey(),
  habitId: integer('habit_id')
    .notNull()
    .references(() => habits.id),
  date: timestamp('date').notNull(), // The day the entry is for
  note: text(), // How the user felt that day
  progressCurrent: integer('progress_current').notNull().default(0), // Progress for that day
  progressToGo: integer('progress_to_go').notNull().default(1),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

const goals = pgTable('goals', {
  id: serial('id').primaryKey(),

  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
})

// Create relations

// one user, many habits
export const usersRelations = relations(users, ({ many }) => ({
  habits: many(habits),
}))

export const habitsRelations = relations(habits, ({ one, many }) => ({
  users: one(users, {
    fields: [habits.userId],
    references: [users.id],
  }),
  entries: many(habitEntries),
}))

export const habitEntriesRelations = relations(habitEntries, ({ one }) => ({
  habit: one(habits, {
    fields: [habitEntries.habitId],
    references: [habits.id],
  }),
}))
