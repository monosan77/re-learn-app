import React from "react";

interface Props {
  type: "button" | "reset" | "submit" | undefined;
  buttonText: string;
}

const ButtonMedium = ({ type, buttonText }: Props) => {
  return (
    <button
      type={type}
      className="w-full py-3  bg-mainColor hover:bg-mainColorHover hover:scale-105 rounded shadow-lg shadow-gray-500 transition-all duration-200"
    >
      <span className="text-white font-bold text-xl">{buttonText}</span>
    </button>
  );
};

export default ButtonMedium;
