import { index, pgTable, serial, varchar, uuid, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

export const wedding_rsvp = pgTable('wedding_rsvp', {
  id: serial('id').primaryKey().notNull(),
  reservationId: uuid('reservation_id').defaultRandom().notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  firstName: varchar('first_name', { length: 64 }).notNull(),
  lastName: varchar('last_name', { length: 64 }).notNull(),
  email: varchar('email', { length: 128 }).notNull(),
  address: varchar('address', { length: 512 }).notNull(),
  phoneNumber: varchar('phoneNumber', { length: 16 }).notNull(),
  attendingIndia: boolean('attending_india').notNull(),
  numIndiaAttendees: integer('num_india_attendees').notNull(),
  attendingHouston: boolean('attending_houston').notNull(),
  numHoustonAttendees: integer('num_houston_attendees').notNull(),
  additionalDietaryInfo: varchar('additional_info', { length: 512 }),
}, (users) => ({
  emailIdx: index('email_idx').on(users.email),
}));
