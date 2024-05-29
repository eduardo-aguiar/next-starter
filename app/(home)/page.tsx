import { getQuestions } from "app/db/service";

export default async function Home() {
  const questions = await getQuestions();
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className=" w-full max-w-5xl items-center justify-between font-mono lg:flex">
        <h1 className="text-center text-3xl">This is the Starter Pack</h1>
        {questions.map((question) => (
          <>
            <h1>{question.question}</h1>
            <h3>{question.answers}</h3>
          </>
        ))}
      </div>
    </main>
  );
}
