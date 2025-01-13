import { Inputs } from "@/app/works/create-problem/components/CreateProblemForm";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface Prop {
  title: string;
  name: keyof Inputs;
  register:UseFormRegister<Inputs>
  error: FieldErrors<Inputs>;
}
const InputText = ({ title,  name, error,register }: Prop) => {
  return (
    <div>
      <label htmlFor="title" className="font-bold">
        {title} <span className="text-red-500 text-sm">{error[name]?.message && error[name]?.message}</span>
      </label>
      <input
        type={"text"}
        id={title}
        {...register(name,{required:'必須入力です'})}
        className="w-full border text-black border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
      />{" "}
    </div>
  );
};

export default InputText;
