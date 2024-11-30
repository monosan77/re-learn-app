import React from "react";

interface Prop {
  text: string;
}

const TitleText = ({ text }: Prop) => {
  return <h1 className="text-xl font-bold">{text}</h1>;
};

export default TitleText;
