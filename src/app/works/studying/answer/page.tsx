import ProblemTitle from "@/components/ProblemForm/ProblemTitle";
import React from "react";
import StudyingTitle from "../components/StudyingTitle";
import StudyingProblemTitle from "./components/StudyingProblemTitle";
import CorrectORIncorrect from "./components/CorrectORIncorrect";
import ExplainText from "./components/ExplainText";
import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";

const Page = () => {
  return (
    <div>
      <ProblemTitle />
      <div className="w-[calc(100%-32px)] mx-4 p-6 mt-40 mb-24 max-w-750 md:mx-auto rounded-md border border-solid  border-gray-300  card-shadow space-y-4">
        <StudyingTitle color="red-600" text="答え" />
        <StudyingProblemTitle />
        <CorrectORIncorrect />
        <ExplainText />
        <div className="flex justify-end items-center pt-2">
          <StudyingNextBtn type="button" buttonText="次の問題" />
        </div>
      </div>
    </div>
  );
};

export default Page;
