import React from "react";
import ProblemList from "./ProblemList";
import Image from "next/image";

const Category = () => {
  return (
    <div className="min-w-60 h-fit text-white bg-slate-600 p-3 rounded-md box-shadow">
      <h3 className="border-solid border-b font-bold mb-2">Next.Js</h3>
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
          <button className="flex justify-end items-center space-x-2">
            <Image
              src={"/icon/plus-gray.svg"}
              alt="アイコン"
              width={18}
              height={18}
            />
            <p className="text-gray-200 text-sm">問題を追加</p>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Category;
