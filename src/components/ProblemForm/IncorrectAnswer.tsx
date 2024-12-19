"use client";
import { nothingValidation } from "@/app/works/create-problem/components/CreateProblemForm";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import React, { useState } from "react";
interface Prop {
  answer: string;
  statement: string;
  otherAnswer: string[];
  setOtherAnswer: (value: string[]) => void;
  incorrectError: string;
  setIncorrectError: (value: string) => void;
}
const IncorrectAnswer = ({
  answer,
  statement,
  otherAnswer,
  setOtherAnswer,
  incorrectError,
  setIncorrectError,
}: Prop) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    // ロード中のチェック
    if (loading) return;
    // バリデーション
    let isErrorValidation = 0;
    isErrorValidation += nothingValidation(
      answer,
      setIncorrectError,
      "※問題文と答えを入力してください。"
    );
    isErrorValidation += nothingValidation(
      statement,
      setIncorrectError,
      "※問題文と答えを入力してください。"
    );
    if (isErrorValidation > 0) return;

    // 処理開始
    setLoading(true);
    setIncorrectError("");
    setOtherAnswer([
      "自動生成中・・・",
      "自動生成中・・・",
      "自動生成中・・・",
    ]);
    try {
      const res = await fetch("/api/geminiApi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answer, statement }),
      });

      const data = await res.json();
      // const data1 = JSON.parse(data.text);
      if (res.ok) {
        setOtherAnswer(data.text);
      } else {
        throw new Error("上手く生成できませんでした。");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setIncorrectError("上手く生成できませんでした。");
    } finally {
      setLoading(false);
    }
  };

  function handleChange(num: number, e: React.ChangeEvent<HTMLInputElement>) {
    const prevOtherAnser = [...otherAnswer];
    prevOtherAnser[num] = e.target.value;
    setOtherAnswer(prevOtherAnser);
  }
  return (
    <div>
      <label className="font-bold">
        不正解選択肢{" "}
        <span className="text-red-600 text-sm">{incorrectError}</span>
      </label>
      <div className="space-y-3">
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="1">1</label>
          <input
            type={"text"}
            name={"1"}
            id={"1"}
            value={otherAnswer[0]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(0, e)
            }
            className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
          />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="2">2</label>
          <input
            type={"text"}
            name={"2"}
            id={"2"}
            value={otherAnswer[1]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(1, e)
            }
            className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
          />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="3">3</label>
          <input
            type={"text"}
            name={"3"}
            id={"3"}
            value={otherAnswer[2]}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(2, e)
            }
            className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
          />
        </div>
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
