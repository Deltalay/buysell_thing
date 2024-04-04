import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client(process.env.DB_STRING);

await client.connect();
const db = drizzle(client);
export { db };
