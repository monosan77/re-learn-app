import React from "react";
interface Props {
  type: "submit" | "reset" | "button" | undefined;
  buttonText: string;
}
const ButtonSmallWhite = ({ type, buttonText }: Props) => {
  return (
    <button
      type={type}
      className="bg-white py-1.5 px-5 border border-mainColor rounded shadow-md shadow-gray-500  hover:scale-105 transition-all duration-200 "
    >
      <span className="text-mainColor font-bold">{buttonText}</span>
    </button>
  );
};

export default ButtonSmallWhite;
