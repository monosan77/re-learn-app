"use client";
import React from "react";

interface Props {
  type: "button" | "reset" | "submit" | undefined;
  buttonText: string;
  fn?: () => void | undefined;
}

const ButtonLarge = ({ type, buttonText, fn = () => {} }: Props) => {
  return (
    <button
      type={type}
      onClick={fn}
      className="w-full py-4 lg:py-6 bg-mainColor hover:bg-mainColorHover hover:scale-105 rounded shadow-lg shadow-gray-500 transition-all duration-200"
    >
      <span className="text-white font-bold text-xl">{buttonText}</span>
    </button>
  );
};

export default ButtonLarge;
