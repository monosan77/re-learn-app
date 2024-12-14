"use client";
import React from "react";
interface Props {
  type: "submit" | "reset" | "button" | undefined;
  buttonText: string;
  fn: () => void;
}
const ButtonSmallWhite = ({ type, buttonText, fn }: Props) => {
  return (
    <button
      type={type}
      className="bg-white py-1.5 px-5 border border-mainColor rounded shadow-md shadow-gray-500  hover:scale-105 transition-all duration-200 "
      onClick={fn}
    >
      <span className="text-mainColor font-bold">{buttonText}</span>
    </button>
  );
};

export default ButtonSmallWhite;
