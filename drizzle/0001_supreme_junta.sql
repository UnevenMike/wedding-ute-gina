CREATE TABLE IF NOT EXISTS "wedding_rsvp" (
	"id" serial PRIMARY KEY NOT NULL,
	"reservation_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"first_name" varchar(64) NOT NULL,
	"last_name" varchar(64) NOT NULL,
	"email" varchar(128) NOT NULL,
	"address" varchar(512) NOT NULL,
	"phoneNumber" varchar(16) NOT NULL,
	"attending_india" boolean NOT NULL,
	"num_india_attendees" integer NOT NULL,
	"num_houston_attendees" integer NOT NULL,
	"additional_info" varchar(512)
);
--> statement-breakpoint
DROP TABLE "auth_otp";--> statement-breakpoint
DROP TABLE "users";--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "email_idx" ON "wedding_rsvp" ("email");