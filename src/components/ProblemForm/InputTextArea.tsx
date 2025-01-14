import { Inputs } from "@/app/works/create-problem/components/CreateProblemForm";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
interface Props {
  title: string;
  register: UseFormRegister<Inputs>;
  name: "statement" | "explanation";
  error: FieldErrors<Inputs>;
}
const InputTextArea = ({ title, error, name, register }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="statement" className="font-bold">
        {title}{" "}
        <span className="text-red-500 text-sm">
          {error[name]?.message && error[name].message}
        </span>
      </label>
      <textarea
        id="problemText"
        rows={3}
        {...register(name, {
          required: name === "statement" && "必須入力です。",
        })}
        className="bg-white outline outline-gray-400 focus:outline-black outline-1 focus:outline-2 rounded-sm"
      />
    </div>
  );
};

export default InputTextArea;
