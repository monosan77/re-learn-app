"use client";
import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import { Answer_History_Model } from "@/types/types";
import React, { useState } from "react";
import ProblemContent from "./ProblemContent";
import AnswerContent from "./AnswerContent";

interface Prop {
  index: number;
  length: number;
  currentProblem: Answer_History_Model;
  shuffledSelectAnswer: string[];
}

const StudyContent = ({
  index,
  length,
  currentProblem,
  shuffledSelectAnswer,
}: Prop) => {
  const [isProblemContent, setIsProblemContent] = useState(true);
  const [write, setWrite] = useState("");
  const [select, setSelect] = useState("");
  // function toAnswerComponent(){
  //   if(select || write.length)
  //   setIsProblemContent(!isProblemContent)
  // }
  return (
    <>
      {isProblemContent ? (
        <ProblemContent
          index={index}
          length={length}
          currentProblem={currentProblem}
          shuffledSelectAnswer={shuffledSelectAnswer}
          write={write}
          setWrite={setWrite}
          setSelect={setSelect}
        />
      ) : (
        <AnswerContent
          index={index}
          length={length}
          currentProblem={currentProblem}
          checkAnswer={
            currentProblem.problem.format === "write" ? write : select
          }
        />
      )}

      <div
        onClick={() => setIsProblemContent(!isProblemContent)}
        className="flex justify-end items-center pt-2"
      >
        <StudyingNextBtn type="button" buttonText="答え" />
      </div>
    </>
  );
};

export default StudyContent;
