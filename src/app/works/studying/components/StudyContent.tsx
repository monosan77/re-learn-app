"use client";
import StudyingNextBtn from "@/components/buttons/StudyingNextBtn";
import { Answer_History_Model } from "@/types/types";
import React, { useContext, useState } from "react";
import ProblemContent from "./ProblemContent";
import AnswerContent from "./AnswerContent";
import { LoadingPopup } from "@/components/Layout/works/WorksLayout";
import { useRouter } from "next/navigation";

interface Prop {
  studySessionId: string;
  setId: string;
  category_id: string;
  categoryName: string;
  currentIndex: number;
  problemsLength: number;
  currentProblem: Answer_History_Model;
  shuffledSelectAnswer: string[];
}

const StudyContent = ({
  studySessionId,
  setId,
  category_id,
  categoryName,
  currentIndex,
  problemsLength,
  currentProblem,
  shuffledSelectAnswer,
}: Prop) => {
  const router = useRouter();
  const [isProblemContent, setIsProblemContent] = useState(true);
  const [writeAnswer, setWriteAnswer] = useState(currentProblem.user_answer);
  const [selectAnswer, setSelectAnswer] = useState(currentProblem.user_answer);
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
          currentIndex,
          userAnswer:
            currentProblem.problem.format === "select"
              ? selectAnswer
              : writeAnswer,
        }),
      });
      if (!res.ok) {
        throw new Error("通信に失敗しました。");
      }

      // 状態をリセットしないと遷移先に初期値に値がセットされてしまうので初期化する
      setWriteAnswer("");
      setSelectAnswer("");

      // 全ての問題を解いたらresultページに遷移
      if (problemsLength === currentIndex) {
        return router.push(
          `/works/studying/result?id=${studySessionId}&category=${category_id}&setId=${setId}&name=${categoryName}`
        );
      } else {
        // 次の問題に遷移
        return router.push(
          `/works/studying?id=${studySessionId}&category=${category_id}&setId=${setId}&name=${categoryName}&index=${currentIndex + 1}`
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsProblemContent(true);
    }
  }

  return (
    <>
      {isProblemContent ? (
        <ProblemContent
          currentIndex={currentIndex}
          problemsLength={problemsLength}
          currentProblem={currentProblem}
          shuffledSelectAnswer={shuffledSelectAnswer}
          writeAnswer={writeAnswer}
          setWriteAnswer={setWriteAnswer}
          setSelectAnswer={setSelectAnswer}
        />
      ) : (
        <AnswerContent
          currentIndex={currentIndex}
          problemsLength={problemsLength}
          currentProblem={currentProblem}
          checkAnswer={
            currentProblem.problem.format === "write"
              ? writeAnswer
              : selectAnswer
          }
        />
      )}

      {isProblemContent ? (
        <div
          onClick={() => setIsProblemContent(!isProblemContent)}
          className="flex justify-end items-center pt-2"
        >
          <StudyingNextBtn type="button" buttonText="答え" />
        </div>
      ) : (
        <div
          onClick={() => updateProblemSession()}
          className="flex justify-end items-center pt-2"
        >
          <StudyingNextBtn type="button" buttonText="次へ" />
        </div>
      )}
    </>
  );
};

export default StudyContent;
