import Input from "@/components/Input/Input";
import React from "react";
interface Prop {
  title: string;
  value: string | undefined;
  setFn: ((value: string) => void) | undefined;
}
const InputText = ({ title, value, setFn }: Prop) => {
  return (
    <div>
      <label htmlFor="title" className="font-bold">
        {title}
      </label>
      <Input type="text" name="title" id="title" value={value} setFn={setFn} />
    </div>
  );
};

export default InputText;
