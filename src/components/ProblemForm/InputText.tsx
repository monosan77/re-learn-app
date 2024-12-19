import Input from "@/components/Input/Input";
import React from "react";
interface Prop {
  title: string;
  value?: string | undefined;
  setFn?: ((value: string) => void) | undefined;
  error?: string;
}
const InputText = ({ title, value, setFn, error }: Prop) => {
  return (
    <div>
      <label htmlFor="title" className="font-bold">
        {title} <span className="text-red-500 text-sm">{error}</span>
      </label>
      <Input type="text" name="title" id="title" value={value} setFn={setFn} />
    </div>
  );
};

export default InputText;
