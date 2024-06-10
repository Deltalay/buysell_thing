import type { Config } from "drizzle-kit";
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER,
    port: process.env.DB_PORT as unknown as number,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME as string,
    ssl: "allow",
  },
} satisfies Config;
