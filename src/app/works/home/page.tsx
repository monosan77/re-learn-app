import React from "react";
import ProblemHistory from "./components/ ProblemHistory";
import ProblemLists from "./components/ProblemLists";

const Page = () => {
  return (
    <div className="w-full lg:max-w-1000 mx-auto mb-10">
      <ProblemHistory />
      <ProblemLists />
    </div>
  );
};

export default Page;
