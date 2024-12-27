import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import React, { ReactNode } from "react";
import StudyingTitle from "./components/StudyingTitle";
import StudyingCard from "@/components/Card/StudyingCard";
import { getCategory } from "@/actions/getCategory";
import { getAnswerHistory } from "@/actions/getAnserHistory";
import Input from "@/components/Input/Input";
import { createSelectAnswer } from "@/utils/shuffledArray";
interface Prop {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
const Page = async ({ searchParams }: Prop) => {
  const id = (await searchParams).id;
  const category_id = (await searchParams).category;
  const name = (await searchParams).name;
  const index = Number((await searchParams).index);
  if (!id || !category_id || !name || !index)
    return <p>データを取得できませんでした。</p>;

  const categoryData = await getCategory(category_id);
  const answerHistoryData = await getAnswerHistory(id);

  if (!categoryData || !answerHistoryData)
    return <p>データを取得できませんでした。</p>;

  // const currentProblem = answerHistoryData.answer_history[index - 1];
  const currentProblem = answerHistoryData.answer_history[2];

  // 選択式の時、選択肢をランダムに並び替える
  let shuffledSelectAnswer: string[] = [];
  if (currentProblem.problem.format === "select") {
    shuffledSelectAnswer = createSelectAnswer(
      currentProblem.problem.otherOptions,
      currentProblem.problem.answer
    );
  }

  return (
    <StudyingCard categoryData={categoryData} name={name}>
      <StudyingTitle
        color="mainColor"
        text="問題"
        index={Number(index)}
        total={answerHistoryData.answer_history.length}
      />

      <h3 className="font-bold">{currentProblem.problem.title}</h3>
      <p>{currentProblem.problem.statement}</p>
      <form>
        {currentProblem.problem.format === "write" ? (
          <div>
            <label htmlFor="write">記述欄</label>
            <Input type="text" name="write" id="write" />
          </div>
        ) : (
          <ul>
            {shuffledSelectAnswer.map((answer, index) => (
              <li className="flex justify-start items-center space-x-2">
                <input
                  type="radio"
                  name="select"
                  id={`select${index}`}
                  value={answer}
                />
                <label htmlFor={`select${index}`}>
                  {index + 1}. {answer}
                </label>
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-end items-center pt-2">
          <StudyingNextBtn type="button" buttonText="答え" />
        </div>
      </form>
    </StudyingCard>
  );
};

export default Page;
