import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import TitleText from "@/components/Title/TitleText";
import React from "react";
import EditProblemForm from "./components/EditProblemForm";
import { getCategory } from "@/actions/getCategory";
import { CategoryModel, ProblemModel } from "@/types/types";
import { getProblem } from "@/actions/getProblem";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const problemSetId = (await searchParams).problemSetId;
  const problemId = (await searchParams).problemId;
  const categoryId = (await searchParams).categoryId;
  const problemSetName = (await searchParams).problemSetName;
  if (!problemSetId || !categoryId || !problemSetName || !problemId)
    return <p>データを取得できませんでした</p>;
  const data = await Promise.all([
    getCategory(categoryId),
    getProblem(problemId),
  ]);
  const categoryData: CategoryModel | null = data[0];
  const problemData: ProblemModel | null = data[1];
  if (!categoryData || !problemData) return <p>データを取得できませんでした</p>;
  return (
    <div>
      <ProblemTitle
        title={categoryData.name}
        bgColor={categoryData.color}
        textColor={categoryData.text_color}
        name={problemSetName}
      />
      <div className="w-[calc(100%-32px)] mx-4 md:max-w-750 lg:mx-auto pt-24 mb-14">
        <TitleText text="問題の編集" />
        <EditProblemForm
          category_id={categoryData.id}
          problem_id={problemId}
          problemSetId={problemSetId}
          problemData={problemData}
        />
      </div>
    </div>
  );
};

export default Page;
