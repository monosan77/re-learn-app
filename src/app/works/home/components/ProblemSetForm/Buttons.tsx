"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import React from "react";
interface Prop {
  modalOpenFn: () => void;
}
const Buttons = ({ modalOpenFn }: Prop) => {
  return (
    <div className="flex justify-between">
      <ButtonSmall type="submit" buttonText="作成" />
      <ButtonSmallWhite type="button" buttonText="閉じる" fn={modalOpenFn} />
    </div>
  );
};

export default Buttons;
