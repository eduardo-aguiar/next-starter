import {
  pgTable,
  index,
  serial,
  varchar,
  timestamp,
  uniqueIndex,
  text,
  json,
} from "drizzle-orm/pg-core";

export const t3Stack = pgTable(
  "t3-stack_post",
  {
    id: serial("id").primaryKey().notNull(),
    name: varchar("name", { length: 256 }),
    created_at: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true, mode: "string" }),
  },
  (table) => {
    return {
      name_idx: index("name_idx").on(table.name),
    };
  }
);

export const questions = pgTable(
  "questions",
  {
    id: serial("id").primaryKey().notNull(),
    question: text("question").notNull(),
    answers: json("answers"),
    createdAt: timestamp("createdAt", { mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => {
    return {
      unique_idxx: uniqueIndex("unique_idxx").on(table.question),
    };
  }
);
