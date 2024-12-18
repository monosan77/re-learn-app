"use client";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import React, { useState } from "react";
import ButtonContents from "./ButtonContents";

export function arrayNothingValidation(
  elem: string[],
  setFn: (value: string) => void,
  errorText: string
) {
  let check = 0;
  elem.map((item) => {
    check = nothingValidation(item, setFn, errorText);
  });
  return check;
}
export function nothingValidation(
  elem: string,
  setFn: (value: string) => void,
  errorText: string
) {
  if (!elem || elem.trim().length === 0) {
    setFn(errorText);
    return 1;
  }
  return 0;
}

const CreateProblemForm = () => {
  const [title, setTitle] = useState("");
  const [format, setFormat] = useState("select");
  const [statement, setStatement] = useState("");
  const [answer, setAnswer] = useState("");
  // const [incorrect, setIncorrect] = useState();
  const [otherAnswer, setOtherAnswer] = useState(new Array(3).fill(""));

  const [explanation, setExplanation] = useState("");
  const [titleError, setTitleError] = useState("");
  const [statementError, setStatementError] = useState("");
  const [answerError, setAnswerError] = useState("");
  const [incorrectError, setIncorrectError] = useState("");
  const [isErrorValidation, setIsErrorValidation] = useState(false);
  const [explanationError, setExplanationError] = useState("");

  function handleSubmit() {
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
    if (isErrorValidation === 0) {
      return console.log("エラーは発生しませんでした。");
    }
    console.log("エラー発生");
    // if (!title || title.trim().length === 0) {
    //   setTitleError("※必須入力です");
    // }
  }
  console.log(format);
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

export default CreateProblemForm;
