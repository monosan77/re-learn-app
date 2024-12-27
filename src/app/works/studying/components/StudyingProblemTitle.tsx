import { Answer_History_Model } from "@/types/types";
import Image from "next/image";
import React from "react";
interface Prop {
  currentProblem: Answer_History_Model;
  checkAnswer: string;
}
const StudyingProblemTitle = ({ currentProblem, checkAnswer }: Prop) => {
  return (
    <div className="flex justify-start items-center">
      <h3 className="font-bold">{currentProblem.problem.title}</h3>
      {currentProblem.problem.answer === checkAnswer ? (
        <>
          <Image
            src={"/icon/check.svg"}
            alt="アイコン"
            width={30}
            height={30}
          />
          <p className="text-green-400 font-bold">正解</p>
        </>
      ) : (
        <>
          <Image
            src={"/icon/x-icon.svg"}
            alt="アイコン"
            width={30}
            height={30}
          />
          <p className="text-red-600 font-bold">不正解</p>
        </>
      )}
    </div>
  );
};

export default StudyingProblemTitle;
