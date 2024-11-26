import React from "react";

interface Props {
  type: string;
  name: string;
  id: string;
}
const Input = ({ type, name, id }: Props) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="w-full border border-gray-400 rounded-md px-1  bg-white focus:outline-black focus:border focus:rounded-sm"
    />
  );
};

export default Input;
