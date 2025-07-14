ALTER TYPE "public"."habit_type" RENAME TO "habit_mode";--> statement-breakpoint
ALTER TABLE "habits" RENAME COLUMN "type" TO "mode";