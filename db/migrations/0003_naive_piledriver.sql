ALTER TABLE "habit_entries" ADD COLUMN "progress_to_go" integer DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE "habits" DROP COLUMN "progress_to_go";