"use client";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ButtonContents from "../../create-problem/components/ButtonContents";
import { ProblemModel } from "@/types/types";
import { arrayNothingValidation, nothingValidation } from "@/utils/validation";

interface Prop {
  category_id: string;
  problemSetId: string;
  problemData?: ProblemModel;
  problem_id?: string;
}

const EditProblemForm = ({
  category_id,
  problemSetId,
  problemData,
  problem_id,
}: Prop) => {
  console.log(problemData);
  const router = useRouter();
  const [title, setTitle] = useState(problemData?.title ?? "");
  const [format, setFormat] = useState(problemData?.format ?? "");
  const [statement, setStatement] = useState(problemData?.statement ?? "");
  const [answer, setAnswer] = useState(problemData?.answer ?? "");
  const [otherAnswer, setOtherAnswer] = useState(
    problemData?.otherOptions ? problemData.otherOptions : new Array(3).fill("")
  );
  const [explanation, setExplanation] = useState(
    problemData?.explanation ?? ""
  );

  const [titleError, setTitleError] = useState("");
  const [statementError, setStatementError] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [incorrectError, setIncorrectError] = useState("");

  async function handleSubmit() {
    setTitleError("");
    setStatementError("");
    setAnswerError("");
    setIncorrectError("");
    let isErrorValidation = 0;
    isErrorValidation += nothingValidation(
      title,
      setTitleError,
      "※必須入力です"
    );
    isErrorValidation += nothingValidation(
      statement,
      setStatementError,
      "※必須入力です"
    );
    isErrorValidation += nothingValidation(
      answer,
      setAnswerError,
      "※必須入力です"
    );
    if (format === "select") {
      isErrorValidation += arrayNothingValidation(
        otherAnswer,
        setIncorrectError,
        "※必須入力です"
      );
    }
    if (isErrorValidation > 0) {
      return;
    }

    try {
      const res = await fetch("/api/editProblem", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          format,
          statement,
          answer,
          otherAnswer,
          explanation,
          category_id,
          problem_id,
        }),
      });
      if (!res.ok) {
        throw new Error("api error");
      }
      return router.push(`/works/problems?id=${problemSetId}`);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form action="" className=" pt-4 space-y-6">
      <InputText
        title="問題タイトル"
        value={title}
        setFn={setTitle}
        error={titleError}
      />

      {/* 出題形式 */}
      <ProblemFormat setFormat={setFormat} />

      <InputTextArea
        title="問題文"
        setFn={setStatement}
        value={statement}
        error={statementError}
      />

      <InputText
        title="答え"
        value={answer}
        setFn={setAnswer}
        error={answerError}
      />

      {/* 不正解選択肢 */}
      {format === "select" && (
        <IncorrectAnswer
          statement={statement}
          answer={answer}
          otherAnswer={otherAnswer}
          setOtherAnswer={setOtherAnswer}
          incorrectError={incorrectError}
          setIncorrectError={setIncorrectError}
        />
      )}

      <InputTextArea
        title="解説（任意）"
        setFn={setExplanation}
        value={explanation}
        error={""}
      />

      <ButtonContents handleSubmit={handleSubmit} />
    </form>
  );
};

export default EditProblemForm;
