import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import React from "react";
import StudyingTitle from "./components/StudyingTitle";
import StudyingCard from "@/components/Card/StudyingCard";
import { getCategory } from "@/actions/getCategory";
import { getAnswerHistory } from "@/actions/getAnserHistory";
import Input from "@/components/Input/Input";
import { createSelectAnswer } from "@/utils/shuffledArray";
import {
  Answer_History_Model,
  CategoryModel,
  Study_Session_Model,
} from "@/types/types";
import StudyContent from "./components/StudyContent";
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

  const categoryData: CategoryModel | null = await getCategory(category_id);
  const answerHistoryData: Study_Session_Model | null =
    await getAnswerHistory(id);

  if (!categoryData || !answerHistoryData || !answerHistoryData.answer_history)
    return <p>データを取得できませんでした。</p>;

  // const currentProblem = answerHistoryData.answer_history[index - 1];
  const currentProblem: Answer_History_Model =
    answerHistoryData.answer_history[2];

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
      <StudyContent
        index={index}
        length={answerHistoryData.answer_history.length}
        currentProblem={currentProblem}
        shuffledSelectAnswer={shuffledSelectAnswer}
      />
    </StudyingCard>
  );
};

export default Page;
