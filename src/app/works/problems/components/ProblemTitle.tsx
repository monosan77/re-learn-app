import React from "react";
import NavList from "./NavList";

const ProblemTitle = () => {
  return (
    <div className="w-full bg-mainColor">
      <div className=" text-white px-4 pt-5 pb-2 w-full max-w-1000 mx-auto">
        <h1 className="font-bold text-xl mb-4">プログラミング</h1>
        <div className="flex justify-end items-center space-x-4">
          <NavList
            imgPath="/icon/plus-white.svg"
            categoryName="カテゴリー追加"
          />
          <NavList imgPath="/icon/filter-white.svg" categoryName="絞り込み" />
        </div>
      </div>
    </div>
  );
};

export default ProblemTitle;
