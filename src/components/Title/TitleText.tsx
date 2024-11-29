import React from "react";

interface Prop {
  text: string;
}

const TitleText = ({ text }: Prop) => {
  return (
    <h1 className="absolute bottom-0.5 left-6 text-xl font-bold leading-3">
      {text}
    </h1>
  );
};

export default TitleText;
