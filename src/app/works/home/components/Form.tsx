"use client";
import Input from "@/components/Input/Input";
import React, { useState } from "react";
import Buttons from "./Buttons";
import { createProblem } from "@/actions/createProblem";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<string>();
  async function handleSubmit(formData: FormData) {
    setErrors("");

    const result = await createProblem(formData);
    if (result) {
      setErrors(result?.title);
    } else {
      router.back();
    }

    // console.log(result?.title);
  }
  return (
    <form action={handleSubmit} className="space-y-4">
      <h3 className="text-center  text-white text-lg  font-bold ">
        問題集を作成
      </h3>
      <div>
        <label htmlFor="title" className="text-white">
          問題集タイトル
          <p className="text-xs text-red-600">※{errors}</p>
        </label>
        <Input type="text" name="title" id="title" />
      </div>
      <div className="">
        <label htmlFor="color" className="text-white">
          テーマカラー
        </label>
        <input type="color" id="color" name="color" className="w-full" />
      </div>
      <Buttons />
    </form>
  );
};

export default Form;
