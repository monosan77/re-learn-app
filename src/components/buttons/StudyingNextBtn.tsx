import Image from "next/image";
import React from "react";
interface Props {
  type: "submit" | "reset" | "button" | undefined;
  buttonText: string;
}
const StudyingNextBtn = ({ type, buttonText }: Props) => {
  return (
    <button
      type={type}
      className="flex justify-center items-center bg-mainColor py-1.5 px-5 rounded shadow-md shadow-gray-500 hover:bg-mainColorHover hover:scale-105 transition-all duration-200 space-x-2"
    >
      <span className="text-white font-bold">{buttonText}</span>
      <Image
        src={"/icon/arrow-white.svg"}
        alt="アイコン"
        width={18}
        height={18}
      />
    </button>
  );
};

export default StudyingNextBtn;
