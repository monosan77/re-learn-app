"use client";
import Input from "@/components/Input/Input";
import React, { useState } from "react";
import { createProblem } from "@/actions/createProblem";
import { useRouter } from "next/navigation";
import Buttons from "./Buttons";
import { createCategory } from "@/actions/createCategory";

interface Prop {
  id: string;
}
const Form = ({ id }: Prop) => {
  const router = useRouter();
  const [errors, setErrors] = useState<string>();

  async function handleSubmit(formData: FormData) {
    setErrors("");

    const result = await createCategory(formData, id);
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
        カテゴリーを作成
      </h3>
      <div>
        <label htmlFor="title" className="text-white">
          カテゴリータイトル
          <p className="text-xs text-red-600">{errors}</p>
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
