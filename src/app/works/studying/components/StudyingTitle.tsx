import React from "react";
interface Prop {
  color: "mainColor" | "red-600";
  text: string;
  index: number;
  total: number;
}
const StudyingTitle = ({ color, text, index, total }: Prop) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className={`text-${color} font-bold text-2xl`}>{text}</h2>
      <p>
        {index} / {total}
      </p>
    </div>
  );
};

export default StudyingTitle;
