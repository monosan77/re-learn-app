import React from "react";
import StudyingTitle from "./StudyingTitle";
import { Answer_History_Model } from "@/types/types";
interface Prop {
  index: number;
  length: number;
  currentProblem: Answer_History_Model;
  shuffledSelectAnswer: string[];
  write: string;
  select: string;
  setWrite: (value: string) => void;
  setSelect: (value: string) => void;
}
const ProblemContent = ({
  index,
  length,
  currentProblem,
  shuffledSelectAnswer,
  write,
  select,
  setWrite,
  setSelect,
}: Prop) => {
  return (
    <>
      <StudyingTitle
        color="mainColor"
        text="問題"
        index={Number(index)}
        total={length}
      />
      <h3 className="font-bold">{currentProblem.problem.title}</h3>
      <p>{currentProblem.problem.statement}</p>
      {currentProblem.problem.format === "write" ? (
        <div>
          <label htmlFor="write">記述欄</label>
          <input
            type="text"
            name="write"
            id="write"
            value={write}
            onChange={(e) => setWrite(e.target.value)}
            className="w-full border text-black border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
          />
        </div>
      ) : (
        <ul className="space-y-3 max-w-96 mb-5">
          {shuffledSelectAnswer.map((answer, index) => (
            <li
              key={index}
              className="flex px-2 bg-gray-300 justify-start rounded-sm items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="select"
                id={`select${index}`}
                checked={answer === select}
                value={answer}
                onChange={(e) => setSelect(e.target.value)}
              />
              <label
                htmlFor={`select${index}`}
                className="w-full py-2 cursor-pointer"
              >
                {index + 1}. {answer}
              </label>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ProblemContent;
