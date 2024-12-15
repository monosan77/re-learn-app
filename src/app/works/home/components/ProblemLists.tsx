import TitleText from "@/components/Title/TitleText";
import Image from "next/image";
import React from "react";
import NewProblemContent from "./NewProblemContent";
import { prisma } from "@/lib/prisma";
import { auth } from "../../../../../auth";
import Link from "next/link";

async function getProblemSet() {
  try {
    const session = await auth();

    const problemData = prisma.problem_set.findMany({
      where: {
        profile_id: session?.user?.id,
      },
    });
    return problemData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const ProblemLists = async () => {
  const problemData = await getProblemSet();

  return (
    <>
      <div className="relative flex justify-start items-center mx-4 mt-16 mb-4 space-x-2">
        <Image
          src={"/icon/folder-black.svg"}
          alt="アイコン"
          width={20}
          height={20}
        />
        <TitleText text="問題集一覧" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {problemData &&
          problemData.map((problem) => (
            <Link
              href={`/works/problems?q=${problem.id}`}
              className="w-full px-4 py-6 rounded-md space-y-2 box-shadow  hover:scale-[1.025] transition-all duration-100"
              style={{ backgroundColor: problem.color }}
            >
              <h3
                className="font-bold text-base lg:text-lg"
                style={{ color: problem.text_color }}
              >
                {problem.name}
              </h3>
            </Link>
          ))}

        <NewProblemContent />
      </div>
    </>
  );
};

export default ProblemLists;
