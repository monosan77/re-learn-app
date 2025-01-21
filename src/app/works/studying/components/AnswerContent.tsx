import React from "react";
import StudyingTitle from "./StudyingTitle";
import StudyingProblemTitle from "./StudyingProblemTitle";
import CorrectORIncorrect from "./CorrectORIncorrect";
import ExplainText from "./ExplainText";
import { Answer_History_Model } from "@/types/types";
interface Prop {
  currentIndex: number;
  problemsLength: number;
  currentProblem: Answer_History_Model;
  checkAnswer: string;
}

const AnswerContent = ({
  currentIndex,
  problemsLength,
  currentProblem,
  checkAnswer,
}: Prop) => {
  return (
    <>
      <StudyingTitle color="red-600" text="答え" index={currentIndex} total={problemsLength} />
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
