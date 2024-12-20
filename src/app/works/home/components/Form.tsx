"use client";
import Input from "@/components/Input/Input";
import React, { useState } from "react";
// import Buttons from "./Buttons";
import { createProblem } from "@/actions/createProblem";
import { useRouter } from "next/navigation";
import Buttons from "../../problems/components/Buttons";

interface Prop {
  handleOpen: () => void;
}
const Form = ({ handleOpen }: Prop) => {
  const router = useRouter();
  const [errors, setErrors] = useState<string>();
  async function handleSubmit(formData: FormData) {
    setErrors("");

    try {
      const result = await createProblem(formData);
      if (result) {
        setErrors(result?.title);
      } else {
        handleOpen();
        return router.push("/works/home");
      }
    } catch (error) {
      console.log(error);
      setErrors("server error");
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
          <p className="text-xs text-red-600">{errors}</p>
        </label>
        <Input
          type="text"
          name="title"
          id="title"
          // value={undefined}
          // setFn={undefined}
        />
      </div>
      <div className="">
        <label htmlFor="color" className="text-white">
          テーマカラー
        </label>
        <input type="color" id="color" name="color" className="w-full" />
      </div>
      <Buttons modalOpenFn={handleOpen} />
    </form>
  );
};

export default Form;
