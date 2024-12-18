import React from "react";
import ProblemList from "./ProblemList";
import Image from "next/image";
import { CategoryModel } from "@/types/types";
import Link from "next/link";
interface Prop {
  category: CategoryModel;
}
const Category = ({ category }: Prop) => {
  return (
    <div className="min-w-60 h-fit text-white bg-slate-600 p-3 rounded-md box-shadow">
      <h3 className="border-solid border-b font-bold mb-2">{category.name}</h3>
      <ul className="pace-y-0.5">
        <li className="">
          <ProblemList problemName="SSRについて" />
        </li>
        <li>
          <ProblemList problemName="SSGについて" />
        </li>
        <li>
          <ProblemList problemName="CSRについて" />
        </li>
        <li className="pt-1">
          <Link
            href={"/works/create-problem"}
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
