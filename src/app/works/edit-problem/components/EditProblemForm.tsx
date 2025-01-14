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
import { SubmitHandler, useForm } from "react-hook-form";

interface Prop {
  category_id: string;
  problemSetId: string;
  problemData: ProblemModel;
  problem_id: string;
}
export interface Inputs {
  title: string;
  format: "select" | "write";
  statement: string;
  answer: string;
  otherAnswer: string[] | [];
  explanation: string;
}
const EditProblemForm = ({
  category_id,
  problemSetId,
  problemData,
  problem_id,
}: Prop) => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setError,
    setValue,
    clearErrors,
  } = useForm<Inputs>({
    defaultValues: {
      title: problemData.title,
      format: problemData.format,
      statement: problemData.statement,
      answer: problemData.answer,
      otherAnswer:
        problemData.otherOptions.length > 0
          ? problemData.otherOptions
          : ["", "", ""],
      explanation: problemData.explanation ?? "",
    },
  });
  const [format, answer, statement, otherAnswer] = watch([
    "format",
    "answer",
    "statement",
    "otherAnswer",
  ]);
  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log({ ...data, category_id, problem_id });
    try {
    const res = await fetch("/api/editProblem", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // title,
        // format,
        // statement,
        // answer,
        // otherAnswer,
        // explanation,
        ...data,
        category_id,
        problem_id,
      }),
    });
      if (!res.ok) {
        console.log(res)
        throw new Error("api error");
      }
      return router.push(`/works/problems?id=${problemSetId}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" pt-4 space-y-6">
      <InputText
        title="問題タイトル"
        name={"title"}
        register={register}
        error={errors}
      />

      {/* 出題形式 */}
      <ProblemFormat register={register} />

      <InputTextArea
        title="問題文"
        name="statement"
        register={register}
        error={errors}
      />

      <InputText
        title="答え"
        name="answer"
        register={register}
        error={errors}
      />

      {/* 不正解選択肢 */}
      {format === "select" && (
        <IncorrectAnswer
          register={register}
          answer={answer}
          otherAnswer={otherAnswer}
          statement={statement}
          setError={setError}
          setValue={setValue}
          error={errors}
          format={format}
          clearErrors={clearErrors}
        />
      )}

      <InputTextArea
        title="解説（任意）"
        register={register}
        name={"explanation"}
        error={errors}
      />

      <ButtonContents type="submit" />
    </form>
  );
};

export default EditProblemForm;
