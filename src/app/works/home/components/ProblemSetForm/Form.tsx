"use client";
import Input from "@/components/Input/Input";
import React from "react";
import { Problem_SetModel } from "@/types/types";
import Buttons from "./Buttons";

interface Prop {
  problemData?: Problem_SetModel | undefined;
  modalOpenFn: () => void;
  handleSubmit?: (value: FormData) => void;
  errors?: string;
}
const Form = ({ problemData, modalOpenFn, handleSubmit, errors }: Prop) => {
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

        <Input type="text" name="title" id="title" value={problemData?.name} />
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
          defaultValue={problemData?.color}
        />
      </div>
      <Buttons modalOpenFn={modalOpenFn} />
    </form>
  );
};

export default Form;
