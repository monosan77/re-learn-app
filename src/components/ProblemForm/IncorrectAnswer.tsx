"use client";
import { Inputs } from "@/app/works/create-problem/components/CreateProblemForm";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import React, { useState } from "react";
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";
import { PulseLoader } from "react-spinners";

interface Prop {
  answer: string;
  otherAnswer: string[];
  statement: string;
  error: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  setError: UseFormSetError<Inputs>;
  setValue: UseFormSetValue<Inputs>;
}
const IncorrectAnswer = ({
  answer,
  otherAnswer,
  statement,
  error,
  register,
  setError,
  setValue,
}: Prop) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (loading) return;
    // 問題文と答えが入力されていないと生成できないので手動でバリデーション
    if (answer.trim().length === 0 && statement.trim().length === 0) {
      return setError("otherAnswer", {
        type: "custom",
        message: "問題文と答えを入力してください",
      });
    } else if (statement.trim().length === 0) {
      return setError("otherAnswer", {
        type: "custom",
        message: "問題文を入力してください",
      });
    } else if (answer.trim().length === 0) {
      return setError("otherAnswer", {
        type: "custom",
        message: "答えを入力してください",
      });
    }
    setError("otherAnswer", { type: "custom", message: "" });

    // 処理開始
    setLoading(true);
    try {
      const res = await fetch("/api/geminiApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer, statement }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log(data, "生成された");
        setValue("otherAnswer", data.text, {
          shouldValidate: true,
          shouldDirty: true,
        });
      } else {
        throw new Error("生成できませんでした。");
      }
    } catch (error: unknown) {
      console.error("Request failed:", error);
      setError("otherAnswer", {
        type: "custom",
        message: "答えを生成できませんでした。",
      });
    } finally {
      setLoading(false);
    }
  };
  console.log(error.otherAnswer?.message, "ddd");

  return (
    <div>
      <label className="font-bold">
        不正解選択肢{" "}
        <span className="text-red-600 text-sm">
          {error.otherAnswer?.message && error.otherAnswer?.message}
          {loading && (
            <span className="ml-5 text-mainColor">
              不正解の選択肢を生成しています。
              <PulseLoader size={7} color="#4169e1" />
            </span>
          )}
        </span>
      </label>
      <div className="space-y-3">
        {otherAnswer.map((_, index) => (
          <div
            key={index}
            className="flex justify-start items-center space-x-2"
          >
            <label htmlFor={index.toString()}>{index + 1}</label>
            <input
              type={"text"}
              id={index.toString()}
              {...register(`otherAnswer.${index}`)}
              className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center my-7">
        <div onClick={handleSubmit}>
          <ButtonSmall type="button" buttonText="選択肢を自動生成する" />
        </div>
      </div>
    </div>
  );
};

export default IncorrectAnswer;
