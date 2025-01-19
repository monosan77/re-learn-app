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
        include: {
          problem: true,
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
  if (!id) return <p>データを取得できませんでした</p>;

  const problemData: Problem_SetModel | null = await getProblemData(id);
  if (!problemData || !problemData.category)
    return <p>データを取得できませんでした</p>;

  return (
    <div>
      <ProblemTitle problemData={problemData} category={problemData.category} />
      <div className="px-4 pt-4 pb-52 flex justify-start space-x-4 overflow-hidden hover:overflow-x-auto hover:scrollbar-thin">
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
        <AddCategory id={id} categoryLength={problemData.category.length} />
      </div>
      <StudyStartContent
        problemSetId={id}
        categoryData={problemData.category}
        problemSetName={problemData.name}
      />
    </div>
  );
};

export default Page;
