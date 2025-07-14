CREATE TYPE "public"."habit_type" AS ENUM('daily', 'weekly', 'monthly');--> statement-breakpoint
CREATE TYPE "public"."time_of_day" AS ENUM('morning', 'afternoon', 'evening', 'any_time');--> statement-breakpoint
CREATE TABLE "habit_entries" (
	"id" serial PRIMARY KEY NOT NULL,
	"habit_id" integer NOT NULL,
	"date" timestamp NOT NULL,
	"note" text,
	"progress_current" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "important" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "type" "habit_type" DEFAULT 'daily' NOT NULL;--> statement-breakpoint
ALTER TABLE "habits" ADD COLUMN "time_of_day" time_of_day DEFAULT 'any_time' NOT NULL;--> statement-breakpoint
ALTER TABLE "habit_entries" ADD CONSTRAINT "habit_entries_habit_id_habits_id_fk" FOREIGN KEY ("habit_id") REFERENCES "public"."habits"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "habits" DROP COLUMN "note";--> statement-breakpoint
ALTER TABLE "habits" DROP COLUMN "progress_current";--> statement-breakpoint
ALTER TABLE "habits" DROP COLUMN "timeOfDay";