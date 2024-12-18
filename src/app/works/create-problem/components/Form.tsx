"use client";
import IncorrectAnswer from "@/components/ProblemForm/IncorrectAnswer";
import InputText from "@/components/ProblemForm/InputText";
import InputTextArea from "@/components/ProblemForm/InputTextArea";
import ProblemFormat from "@/components/ProblemForm/ProblemFormat";
import React, { useState } from "react";
import ButtonContents from "./ButtonContents";

const CreateProblemForm = () => {
  const [title, setTitle] = useState("");
  const [format, setFormat] = useState("");
  const [statement, setStatement] = useState("");
  const [answer, setAnswer] = useState("");
  const [incorrect, setIncorrect] = useState();
  const [explanation, setExplanation] = useState("");

  // function handleChange(setFn) {
  //   setFn();
  // }
  console.log(statement, "問題文");
  console.log(answer, "答え");
  console.log(explanation, "解説");

  return (
    <form action="" className=" pt-4 space-y-6">
      <InputText title="問題タイトル" value={title} setFn={setTitle} />

      {/* 出題形式 */}
      <ProblemFormat />

      <InputTextArea title="問題文" setFn={setStatement} value={statement} />

      <InputText title="答え" value={answer} setFn={setAnswer} />

      {/* 不正解選択肢 */}
      <IncorrectAnswer statement={statement} answer={answer} />

      <InputTextArea title="解説" setFn={setExplanation} value={explanation} />

      <ButtonContents />
    </form>
  );
};

export default CreateProblemForm;
