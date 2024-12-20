import React from "react";

interface Props {
  type: string;
  name: string;
  id: string;
  value?: string | undefined;
  setFn?: (e: React.ChangeEvent<HTMLInputElement>) => void | undefined;
}
const Input = ({ type, name, id, value, setFn }: Props) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      defaultValue={value ? value : undefined}
      // onChange={value ? setFn : undefined}
      className="w-full border text-black border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
    />
  );
};

export default Input;
