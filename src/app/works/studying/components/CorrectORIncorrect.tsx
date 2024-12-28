import { Answer_History_Model } from "@/types/types";
import React from "react";

interface Prop {
  currentProblem: Answer_History_Model;
  checkAnswer: string;
}
const CorrectORIncorrect = ({ currentProblem, checkAnswer }: Prop) => {
  return (
    <div className="space-y-2">
      <div>
        <p className="text-sm">あなたの解答</p>
        <div className="flex justify-start items-center space-x-2 font-bold">
          <p>{checkAnswer}</p>
        </div>
      </div>
      <div className="text-red-600">
        <p className="text-sm">正解の選択肢</p>
        <div className="flex justify-start items-center space-x-2 font-bold ">
          <p>{currentProblem.problem.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default CorrectORIncorrect;
