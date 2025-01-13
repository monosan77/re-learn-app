import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
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
      <PlayCircleIcon sx={{ color: "#fff" }} />
    </button>
  );
};

export default StudyingNextBtn;
