import React from "react";
interface Prop {
  color: "mainColor" | "red-600";
  text: string;
}
const StudyingTitle = ({ color, text }: Prop) => {
  return (
    <div className="flex justify-between items-center">
      <h2 className={`text-${color} font-bold text-2xl`}>{text}</h2>
      <p>1/20</p>
    </div>
  );
};

export default StudyingTitle;
