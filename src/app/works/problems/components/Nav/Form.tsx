"use client";
import Input from "@/components/Input/Input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Buttons from "../Buttons";
import { updateProblem } from "@/actions/updateProblem";
import { Problem_SetModel } from "@/types/types";

interface Prop {
  problemData: Problem_SetModel;
  modalOpenFn: () => void;
}
const Form = ({ problemData, modalOpenFn }: Prop) => {
  const router = useRouter();
  const [errors, setErrors] = useState<string>();

  async function handleSubmit(formData: FormData) {
    setErrors("");

    try {
      const result = await updateProblem(formData, problemData.id);
      if (result) {
        setErrors(result?.title);
      } else {
        modalOpenFn();
        router.push(`/works/problems?id=${problemData.id}`);
      }
    } catch (error) {
      console.log(error);
      setErrors("※サーバーエラー");
    }
  }
  return (
    <form action={handleSubmit} className="space-y-4">
      <h3 className="text-center  text-white text-lg  font-bold ">
        問題集の設定
      </h3>
      <div>
        <label htmlFor="title" className="text-white">
          問題集タイトル
          <p className="text-xs text-red-600">{errors}</p>
        </label>

        <Input type="text" name="title" id="title" value={problemData.name} />
      </div>
      <div className="">
        <label htmlFor="color" className="text-white">
          テーマカラー
        </label>
        <input
          type="color"
          id="color"
          name="color"
          className="w-full"
          defaultValue={problemData.color}
        />
      </div>
      <Buttons modalOpenFn={modalOpenFn} />
    </form>
  );
};

export default Form;
