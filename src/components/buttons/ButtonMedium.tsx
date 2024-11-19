import React from "react";

interface Props {
  buttonText: string;
}

const ButtonMedium = ({ buttonText }: Props) => {
  return (
    <button className="w-full py-4 lg:py-6 bg-mainColor hover:bg-mainColorHover hover:scale-105 rounded shadow-lg shadow-gray-500 transition-all duration-200">
      <span className="text-white font-bold text-xl">{buttonText}</span>
    </button>
  );
};

export default ButtonMedium;
