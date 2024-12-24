import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProblemList from "./ProblemList";
import { CategoryModel, ProblemModel } from "@/types/types";

interface Prop {
  problemSet_id: string;
  problems: ProblemModel[];
  category: CategoryModel;
  name: string;
}

const ProblemLists = ({ problemSet_id, problems, category, name }: Prop) => {
  return (
    <ul className="pace-y-0.5">
      {problems.map((problem) => (
        <li key={problem.id}>
          <div>
            <ProblemList
              problemName={problem.title}
              problemSet_id={problemSet_id}
              category_id={category.id}
              problem_id={problem.id}
              name={name}
            />
          </div>
        </li>
      ))}
      <li className="pt-1">
        <Link
          href={`/works/create-problem?categoryId=${category.id}&problemSetId=${problemSet_id}&problemSetName=${name}`}
          className="flex justify-start items-center space-x-2"
        >
          <Image
            src={"/icon/plus-gray.svg"}
            alt="アイコン"
            width={18}
            height={18}
          />
          <p className="text-gray-200 text-sm">問題を追加</p>
        </Link>
      </li>
    </ul>
  );
};

export default ProblemLists;
