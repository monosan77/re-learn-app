import Input from "@/components/Input/Input";
import React from "react";
interface Prop {
  title: string;
}
const InputText = ({ title }: Prop) => {
  return (
    <div>
      <label htmlFor="title" className="font-bold">
        {title}
      </label>
      <Input type="text" name="title" id="title" />
    </div>
  );
};

export default InputText;
