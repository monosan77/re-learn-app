import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProblemList from "./ProblemList";
import { CategoryModel, ProblemModel } from "@/types/types";
import AddIcon from "@mui/icons-material/Add";

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
        <li key={problem.id} className="border-b border-transparent hover:opacity-80 hover:border-b hover:border-solid hover:border-current">
          <ProblemList
            problemName={problem.title}
            problemSet_id={problemSet_id}
            category_id={category.id}
            problem_id={problem.id}
            name={name}
          />
        </li>
      ))}
      <li className="pt-1 hover:opacity-80">
        <Link
          href={`/works/create-problem?categoryId=${category.id}&problemSetId=${problemSet_id}&problemSetName=${name}`}
          className="flex justify-start items-center space-x-2"
        >
          <AddIcon sx={{ fontSize: "18px" }} />
          <p className="text-base ">問題を追加</p>
        </Link>
      </li>
    </ul>
  );
};

export default ProblemLists;
