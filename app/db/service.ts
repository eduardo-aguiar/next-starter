import { db } from "app/db";

export async function getQuestions() {
  const questions = await db.query.questions.findMany();
  return questions;
}
