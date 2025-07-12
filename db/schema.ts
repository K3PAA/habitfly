import { relations } from 'drizzle-orm'
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core'

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
  note: text(),
  progressCurrent: integer('progress_current').default(0),
  progressToGo: integer('progress_to_go').notNull().default(1),
  timeOfDay: text().default('any_time'),

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

export const habitsRelations = relations(habits, ({ one }) => ({
  users: one(users, {
    fields: [habits.userId],
    references: [users.id],
  }),
}))
