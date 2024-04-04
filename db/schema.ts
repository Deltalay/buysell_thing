import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { customType } from "drizzle-orm/pg-core";

const bytea = customType<{data: string}>({
  dataType() {
    return 'bytea';
  }
})

export const users = pgTable("users_next", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 64 }).notNull(),
  email: varchar("email").notNull().unique(),
  password: varchar("password").notNull(),
  avatar: bytea('avatar').notNull(),
  createdAt: timestamp('createdAt').defaultNow()
});
