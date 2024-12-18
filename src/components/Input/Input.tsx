import React from "react";

interface Props {
  type: string;
  name: string;
  id: string;
  value: string | undefined;
  setFn: ((value: string) => void) | undefined;
}
const Input = ({ type, name, id, value, setFn }: Props) => {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (setFn !== undefined) {
      setFn(e.target.value);
    }
    return;
  }
  return (
    <input
      type={type}
      name={name}
      id={id}
      value={value ? value : ""}
      onChange={setFn ? handleChange : undefined}
      className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
    />
  );
};

export default Input;
