import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import React from "react";
import { CategoryModel, Study_Session_Model } from "@/types/types";
import { getCategory } from "@/actions/getCategory";
import { getAnswerHistory } from "@/actions/getAnserHistory";
import StudyingProblemTitle from "../components/StudyingProblemTitle";
import CorrectORIncorrect from "../components/CorrectORIncorrect";
import Buttons from "./components/Buttons";
export const dynamic = "force-dynamic";

interface Prop {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Page = async ({ searchParams }: Prop) => {
  const id = (await searchParams).id;
  const category_id = (await searchParams).category;
  const name = (await searchParams).name;
  const setId = (await searchParams).setId;
  if (!id || !category_id || !name || !setId)
    return <p>データを取得できませんでした。1</p>;

  //各種データを並列取得
  const [categoryData, answerHistoryData]: [
    CategoryModel | null,
    Study_Session_Model | null,
  ] = await Promise.all([getCategory(category_id), getAnswerHistory(id)]);

  if (!categoryData || !answerHistoryData || !answerHistoryData.answer_history)
    return <p>データを取得できませんでした。2</p>;

  // 合計点の計算
  const score = answerHistoryData.answer_history.filter(
    (answer) => answer.is_correct === true
  ).length;
  return (
    <div>
      <ProblemTitle
        title={categoryData.name}
        bgColor={categoryData.color}
        textColor={categoryData.text_color}
        name={name}
      />
      <div className="w-full px-4 mt-28 pb-36 max-w-600 mx-auto space-y-4">
        <div className="flex justify-between items-center font-bold text-3xl">
          <h2>結果</h2>
          <h2>
            {score} / {answerHistoryData.answer_history.length}点
          </h2>
        </div>
        {answerHistoryData.answer_history.map((content) => (
          <div
            key={content.id}
            className="p-5 border rounded-md card-shadow space-y-2"
          >
            <h3 className="font-bold text-2xl">{content.index} 問目</h3>
            <StudyingProblemTitle
              currentProblem={content}
              checkAnswer={content.user_answer}
            />
            <CorrectORIncorrect
              currentProblem={content}
              checkAnswer={content.user_answer}
            />
          </div>
        ))}
      </div>
      <Buttons
        category_id={category_id}
        name={name}
        answerHistoryData={answerHistoryData}
        setId={setId}
      />
    </div>
  );
};

export default Page;
