ALTER TABLE "users" RENAME TO "users_next";--> statement-breakpoint
ALTER TABLE "users_next" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "users_next" ADD CONSTRAINT "users_next_email_unique" UNIQUE("email");