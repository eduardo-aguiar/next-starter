import {
  pgTable,
  serial,
  timestamp,
  uniqueIndex,
  text,
} from "drizzle-orm/pg-core";

export const questions = pgTable(
  "questions",
  {
    id: serial("id").primaryKey().notNull(),
    question: text("question").notNull(),
    answers: text("answers"),
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
