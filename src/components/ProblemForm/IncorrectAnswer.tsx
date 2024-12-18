"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import Input from "@/components/Input/Input";
import React, { useState } from "react";
interface Prop {
  answer: string;
  statement: string;
}
const IncorrectAnswer = ({ answer, statement }: Prop) => {
  const [prompt, setPrompt] = useState("");
  const [otherAnswer1, setOtherAnswer1] = useState("");
  const [otherAnswer2, setOtherAnswer2] = useState("");
  const [otherAnswer3, setOtherAnswer3] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (loading) return;
    setLoading(true);
    setOtherAnswer1("自動生成中・・・");
    setOtherAnswer2("自動生成中・・・");
    setOtherAnswer3("自動生成中・・・");
    setError("");
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
      console.log(data);
      if (res.ok) {
        setOtherAnswer1(data.text[0]);
        setOtherAnswer2(data.text[1]);
        setOtherAnswer3(data.text[2]);
      } else {
        throw new Error("上手く生成できませんでした。");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setError("上手く生成できませんでした。");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <label className="font-bold">
        不正解選択肢 <span className="text-red-600">{error}</span>
      </label>
      <div className="space-y-3">
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="1">1</label>
          <Input
            type="text"
            name="1"
            id="1"
            value={otherAnswer1}
            setFn={setOtherAnswer1}
          />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="2">2</label>
          <Input
            type="text"
            name="2"
            id="2"
            value={otherAnswer2}
            setFn={setOtherAnswer2}
          />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="3">3</label>
          <Input
            type="text"
            name="3"
            id="3"
            value={otherAnswer3}
            setFn={setOtherAnswer3}
          />
        </div>
      </div>
      <div
        className="w-full flex justify-center items-center my-7"
        onClick={handleSubmit}
      >
        <ButtonSmall type="button" buttonText="選択肢を自動生成する" />
      </div>
    </div>
  );
};

export default IncorrectAnswer;
