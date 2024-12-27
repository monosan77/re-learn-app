import React from "react";
import StudyingTitle from "./StudyingTitle";
import StudyingProblemTitle from "./StudyingProblemTitle";
import CorrectORIncorrect from "./CorrectORIncorrect";
import ExplainText from "./ExplainText";
import { Answer_History_Model } from "@/types/types";
interface Prop {
  index: number;
  length: number;
  currentProblem: Answer_History_Model;
  checkAnswer: string;
}
const AnswerContent = ({
  index,
  length,
  currentProblem,
  checkAnswer,
}: Prop) => {
  return (
    <>
      <StudyingTitle color="red-600" text="答え" index={index} total={length} />
      <StudyingProblemTitle
        currentProblem={currentProblem}
        checkAnswer={checkAnswer}
      />
      <CorrectORIncorrect
        currentProblem={currentProblem}
        checkAnswer={checkAnswer}
      />
      <ExplainText />
    </>
  );
};

export default AnswerContent;
