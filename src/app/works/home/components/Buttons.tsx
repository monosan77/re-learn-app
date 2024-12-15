"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import { useRouter } from "next/navigation";
import React from "react";

const Buttons = () => {
  const router = useRouter();
  function backPage() {
    router.back();
  }
  return (
    <div className="flex justify-between">
      <ButtonSmall type="submit" buttonText="作成" />
      <ButtonSmallWhite type="button" buttonText="閉じる" fn={backPage} />
      {/* <ButtonSmallWhite type="button" buttonText="閉じる" fn={handleOpen} /> */}
    </div>
  );
};

export default Buttons;
