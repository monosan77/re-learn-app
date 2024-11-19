import React from "react";
interface Props {
  buttonText: string;
}
const ButtonSmall = ({ buttonText }: Props) => {
  return (
    <button className="bg-mainColor py-1.5 px-5 rounded shadow-md shadow-gray-500 hover:bg-mainColorHover hover:scale-105 transition-all duration-200 ">
      <span className="text-white font-bold">{buttonText}</span>
    </button>
  );
};

export default ButtonSmall;
