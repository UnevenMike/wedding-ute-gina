import { drizzle } from 'drizzle-orm/vercel-postgres';
import { createPool } from '@vercel/postgres';
import { wedding_rsvp } from './schema';

const sql = createPool({
    connectionString: import.meta.env.POSTGRES_URL
}); 
 
export const db = drizzle(sql);

type RSVP = typeof wedding_rsvp.$inferSelect;

export const getRSVPs = async () : Promise<RSVP[]> =>{
  const selectResult = await db.select().from(wedding_rsvp);
  return selectResult
};

type NewRSVP = typeof wedding_rsvp.$inferInsert;

export const insertRSVP = async (rsvp: NewRSVP) : Promise<RSVP[]> => {
  const insertResult = await db.insert(wedding_rsvp).values(rsvp).returning();
  return insertResult;
}