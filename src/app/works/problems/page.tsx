import React from "react";
import ProblemTitle from "./components/ProblemTitle";
import Category from "./components/Category/Category";
import StudyStartContent from "./components/StudyStartContent";
import { prisma } from "@/lib/prisma";
import { Problem_SetModel } from "@/types/types";
import AddCategory from "./components/AddCategory";

async function getProblemData(id: string) {
  const data = await prisma.problem_set.findUnique({
    where: {
      id: id,
    },
    include: {
      category: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });
  if (data) {
    return data;
  }
  return null;
}

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const id = (await searchParams).id;
  console.log(id);
  if (!id) return <p>データを取得できませんでした</p>;

  const problemData: Problem_SetModel | null = await getProblemData(id);
  if (!problemData) return <p>データを取得できませんでした</p>;

  return (
    <div>
      <ProblemTitle problemData={problemData} />
      <div className="p-4 min-h-40 flex justify-start space-x-4 overflow-hidden hover:overflow-x-auto hover:scrollbar-thin">
        {problemData.category
          ? problemData.category.map((part) => (
              <Category
                problemSet_id={id}
                category={part}
                key={part.id}
                name={problemData.name}
              />
            ))
          : ""}
        <AddCategory id={id} />
      </div>
      <StudyStartContent />
    </div>
  );
};

export default Page;
