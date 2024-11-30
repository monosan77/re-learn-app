import ButtonLarge from "@/components/buttons/ButtonLarge";
import React from "react";

const StartBtn = () => {
  return (
    <div className="w-full md:w-[calc(100%-256px)] mx-auto px-5 fixed bottom-8 ">
      <div className="max-w-1000 mx-auto">
        <ButtonLarge type="button" buttonText="復習を始める" />
      </div>
    </div>
  );
};

export default StartBtn;
