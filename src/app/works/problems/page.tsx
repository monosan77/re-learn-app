import React from "react";
import ProblemTitle from "./components/ProblemTitle";
import Category from "./components/Category";
import AddProblem from "./components/AddProblem";
import StartBtn from "./components/StartBtn";

const Page = () => {
  return (
    <div>
      <ProblemTitle />
      <div className="p-4  flex justify-start   space-x-4 overflow-hidden hover:overflow-x-auto hover:scrollbar-thin">
        <Category />
        <Category />
        <AddProblem />
      </div>
      <StartBtn />
    </div>
  );
};

export default Page;
