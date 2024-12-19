import React from "react";
interface Props {
  title: string;
  setFn?: ((value: string) => void) | undefined;
  value?: string | undefined;
  error?: string;
}
const InputTextArea = ({ title, setFn, value, error }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    if (setFn !== undefined) {
      setFn(e.target.value);
    }
    return;
  }
  return (
    <div className="flex flex-col">
      <label htmlFor="problemText" className="font-bold">
        {title} <span className="text-red-500 text-sm">{error}</span>
      </label>
      <textarea
        name="problemText"
        id="problemText"
        rows={3}
        value={value ? value : ""}
        className="bg-white outline outline-gray-400 focus:outline-black outline-1 focus:outline-2 rounded-sm"
        onChange={setFn ? handleChange : undefined}
      />
    </div>
  );
};

export default InputTextArea;
