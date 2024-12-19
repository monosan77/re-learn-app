"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { useRouter } from "next/navigation";
import React from "react";
interface Prop {
  handleSubmit: () => void;
}
const ButtonContents = ({ handleSubmit }: Prop) => {
  const router = useRouter();
  function backPage() {
    router.back();
  }

  return (
    <div className="max-w-450 flex justify-between items-center mx-auto pt-8">
      <div onClick={handleSubmit}>
        <ButtonSmall type="button" buttonText="保存する" />
      </div>
      <ButtonSmallWhite type="button" buttonText="キャンセル" fn={backPage} />
    </div>
  );
};

export default ButtonContents;
