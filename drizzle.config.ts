import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./app/db/schema.ts",
  out: "./app/db/drizzle",
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
});
