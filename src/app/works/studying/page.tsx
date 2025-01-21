import React from "react";
import StudyingCard from "@/components/Card/StudyingCard";
import { getCategory } from "@/actions/getCategory";
import { getAnswerHistory } from "@/actions/getAnserHistory";
import { createSelectAnswer } from "@/utils/shuffledArray";
import { CategoryModel, Study_Session_Model } from "@/types/types";
import StudyContent from "./components/StudyContent";
interface Prop {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
const Page = async ({ searchParams }: Prop) => {
  const studySessionId = (await searchParams).id;
  const category_id = (await searchParams).category;
  const categoryName = (await searchParams).name;
  const currentIndex = Number((await searchParams).index);
  const setId = (await searchParams).setId;
  if (
    !studySessionId ||
    !category_id ||
    !categoryName ||
    !currentIndex ||
    !setId
  )
    return <p>データを取得できませんでした。</p>;

  // カテゴリーデータと問題情報を取得
  const [categoryData, answerHistoryData]: [
    CategoryModel | null,
    Study_Session_Model | null,
  ] = await Promise.all([
    getCategory(category_id),
    getAnswerHistory(studySessionId),
  ]);

  if (!categoryData || !answerHistoryData || !answerHistoryData.answer_history)
    return <p>データを取得できませんでした。</p>;

  const currentProblem = answerHistoryData.answer_history[currentIndex - 1];

  // 選択式の時、選択肢をランダムに並び替える
  let shuffledSelectAnswer: string[] = [];
  if (currentProblem.problem.format === "select") {
    shuffledSelectAnswer = createSelectAnswer(
      currentProblem.problem.otherOptions,
      currentProblem.problem.answer
    );
  }

  return (
    <StudyingCard categoryData={categoryData} name={categoryName}>
      <StudyContent
        studySessionId={studySessionId}
        setId={setId}
        category_id={category_id}
        categoryName={categoryName}
        currentIndex={currentIndex}
        problemsLength={answerHistoryData.answer_history.length}
        currentProblem={currentProblem}
        shuffledSelectAnswer={shuffledSelectAnswer}
      />
    </StudyingCard>
  );
};

export default Page;
