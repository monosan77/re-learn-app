import React from "react";
import ProblemList from "./ProblemList";
import Image from "next/image";
import { CategoryModel, ProblemModel } from "@/types/types";
import Link from "next/link";
import { getProblemList } from "@/actions/getProblem";
interface Prop {
  problemSet_id: string;
  category: CategoryModel;
  name: string;
}

const Category = async ({ problemSet_id, category, name }: Prop) => {
  const problems: ProblemModel[] | null = await getProblemList(category.id);
  if (!problems) return <p>データを取得できませんでした。</p>;
  return (
    <div
      className="min-w-60 h-fit  p-3 rounded-md box-shadow"
      style={{ background: category.color, color: category.text_color }}
    >
      <h3 className="border-solid border-b font-bold mb-2">{category.name}</h3>
      <ul className="pace-y-0.5">
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link
              href={`/works/edit-problem?problemSetId=${problemSet_id}&categoryId=${category.id}&problemSetName=${name}&problemId=${problem.id}`}
            >
              <ProblemList problemName={problem.title} />
            </Link>
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
    </div>
  );
};

export default Category;
