import React from "react";
interface Prop {
  title: string;
  bgColor: string;
  textColor: string;
  name: string;
}
const ProblemTitle = ({ title, bgColor, textColor, name }: Prop) => {
  return (
    <div
      className="fixed top-12 w-full bg-mainColor"
      style={{ background: `${bgColor}` }}
    >
      <div
        className=" text-white px-4 py-3  w-full max-w-1000 mx-auto"
        style={{ color: textColor }}
      >
        <h1 className="font-bold text-xl mb-2">{name}</h1>
        <div className="flex justify-start items-center space-x-4">
          <h3 className="font-bold">カテゴリー：{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProblemTitle;
