import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { customType } from "drizzle-orm/pg-core";
import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
const bytea = customType<{ data: string }>({
  dataType() {
    return "bytea";
  },
});

const users = pgTable("users_next", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 64 }).notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  avatar: bytea("avatar").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
});
const insertUserSchema = createInsertSchema(users, {
  id: (schema) => schema.id.uuid(),
  email: (schema) => schema.email.email(),
  name: z.string(),
  password: z.string(),
});
export { insertUserSchema, users };
