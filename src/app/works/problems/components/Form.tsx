"use client";
import Input from "@/components/Input/Input";
import React from "react";
import Buttons from "./Buttons";
import { CategoryModel } from "@/types/types";

interface Prop {
  // id: string;
  handleOpen: () => void;
  inputData?: CategoryModel;
  handleSubmit?: (value: FormData) => void;
  errors?: string;
}

const Form = ({ handleOpen, inputData, handleSubmit, errors }: Prop) => {
  return (
    <>
      <form action={handleSubmit} className="space-y-4">
        <h3 className="text-center  text-white text-lg  font-bold ">
          カテゴリーを作成
        </h3>
        <div>
          <label htmlFor="title" className="text-white">
            カテゴリータイトル
            <p className="text-xs text-red-600">{errors}</p>
          </label>
          <Input type="text" name="title" id="title" value={inputData?.name} />
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
            defaultValue={inputData?.color}
          />
        </div>
        <Buttons modalOpenFn={handleOpen} />
      </form>
    </>
  );
};

export default Form;
