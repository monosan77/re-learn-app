import React from "react";
interface Props {
  title: string;
}
const InputTextArea = ({ title }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="problemText" className="font-bold">
        {title}
      </label>
      <textarea
        name="problemText"
        id="problemText"
        rows={3}
        className="bg-white outline outline-gray-400 focus:outline-black outline-1 focus:outline-2 rounded-sm"
      />
    </div>
  );
};

export default InputTextArea;
