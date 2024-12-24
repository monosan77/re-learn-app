import React from "react";
import { CategoryModel, ProblemModel } from "@/types/types";
import CategoryTItle from "./CategoryTItle";
import ProblemLists from "./ProblemLists";
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
      className="relative min-w-60 h-fit  p-3 rounded-md box-shadow"
      style={{ background: category.color, color: category.text_color }}
    >
      <CategoryTItle category={category} problemSet_id={problemSet_id} />

      <ProblemLists
        problemSet_id={problemSet_id}
        problems={problems}
        category={category}
        name={name}
      />
    </div>
  );
};

export default Category;
