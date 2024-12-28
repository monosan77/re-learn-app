"use client";
import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import { Answer_History_Model } from "@/types/types";
import React, { useContext, useState } from "react";
import ProblemContent from "./ProblemContent";
import AnswerContent from "./AnswerContent";
import { LoadingPopup } from "../../layout";
import { useRouter } from "next/navigation";

interface Prop {
  id: string;
  category_id: string;
  name: string;
  index: number;
  length: number;
  currentProblem: Answer_History_Model;
  shuffledSelectAnswer: string[];
}

const StudyContent = ({
  id,
  category_id,
  name,
  index,
  length,
  currentProblem,
  shuffledSelectAnswer,
}: Prop) => {
  const router = useRouter();
  const [isProblemContent, setIsProblemContent] = useState(true);
  const [write, setWrite] = useState(currentProblem.user_answer);
  const [select, setSelect] = useState(currentProblem.user_answer);
  const { setLoading } = useContext(LoadingPopup);

  async function updateProblemSession() {
    setLoading(true);
    try {
      const res = await fetch("/api/studySession", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentProblem,
          index,
          userAnswer:
            currentProblem.problem.format === "select" ? select : write,
        }),
      });
      const data = await res.json();

      router.push(
        `/works/studying?id=${id}&category=${category_id}&name=${name}&index=${index + 1}`
      );
    } catch (error) {
      console.log(currentProblem);
      // console.log(data);
    } finally {
      setLoading(false);
      setIsProblemContent(true);
    }
  }

  return (
    <>
      {isProblemContent ? (
        <ProblemContent
          index={index}
          length={length}
          currentProblem={currentProblem}
          shuffledSelectAnswer={shuffledSelectAnswer}
          write={write}
          select={select}
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
        onClick={() =>
          isProblemContent
            ? setIsProblemContent(!isProblemContent)
            : updateProblemSession()
        }
        className="flex justify-end items-center pt-2"
      >
        <StudyingNextBtn type="button" buttonText="答え" />
      </div>
    </>
  );
};

export default StudyContent;
