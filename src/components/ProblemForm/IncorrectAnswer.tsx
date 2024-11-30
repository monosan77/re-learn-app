import ButtonSmall from "@/components/buttons/ButtonSmall";
import Input from "@/components/Input/Input";
import React from "react";

const IncorrectAnswer = () => {
  return (
    <div>
      <label className="font-bold">不正解選択肢</label>
      <div className="space-y-3">
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="1">1</label>
          <Input type="text" name="1" id="1" />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="2">2</label>
          <Input type="text" name="2" id="2" />
        </div>
        <div className="flex justify-start items-center space-x-2">
          <label htmlFor="3">3</label>
          <Input type="text" name="3" id="3" />
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-7">
        <ButtonSmall type="button" buttonText="選択肢を自動生成する" />
      </div>
    </div>
  );
};

export default IncorrectAnswer;
