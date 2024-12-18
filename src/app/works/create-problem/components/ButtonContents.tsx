"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { useRouter } from "next/navigation";
import React from "react";

const ButtonContents = () => {
  const router = useRouter();
  function backPage() {
    router.back();
  }
  return (
    <div className="max-w-450 flex justify-between items-center mx-auto pt-8">
      <ButtonSmall type="button" buttonText="保存する" />
      <ButtonSmallWhite type="button" buttonText="キャンセル" fn={backPage} />
    </div>
  );
};

export default ButtonContents;
