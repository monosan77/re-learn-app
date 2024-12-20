import Input from "@/components/Input/Input";
import React from "react";
interface Prop {
  title: string;
  name: string;
  value?: string | undefined;
  setFn: (value: string) => void | undefined;
  error?: string;
}
const InputText = ({ title, value, setFn, name, error }: Prop) => {
  return (
    <div>
      <label htmlFor="title" className="font-bold">
        {title} <span className="text-red-500 text-sm">{error}</span>
      </label>
      <input
        type={"text"}
        name={name}
        id={title}
        value={value}
        onChange={(e) => setFn(e.target.value)}
        className="w-full border text-black border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
      />{" "}
    </div>
  );
};

export default InputText;
