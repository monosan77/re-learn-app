import React from "react";
import { Problem_SetModel } from "@/types/types";
import Nav from "./Nav/Nav";

interface Prop {
  problemData: Problem_SetModel;
}
const ProblemTitle = async ({ problemData }: Prop) => {
  return (
    <div className="w-ful" style={{ background: `${problemData?.color}` }}>
      <div
        className=" px-4 pt-5 pb-2 w-full max-w-1000 mx-auto"
        style={{ color: `${problemData?.text_color}` }}
      >
        <h1 className="font-bold text-xl mb-4">{problemData?.name}</h1>
        <Nav problemData={problemData} />
      </div>
    </div>
  );
};

export default ProblemTitle;
