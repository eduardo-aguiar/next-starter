import { getQuestions } from "app/db/service";

export default async function Home() {
  const questions = await getQuestions();
  return (
    <div className="p-24">
      <h1 className="text-center text-3xl">This is the Starter Pack</h1>
      {questions.map((question) => (
        <>
          <h1>{question.question}</h1>
          <h3>{question.answers}</h3>
        </>
      ))}
    </div>
  );
}
