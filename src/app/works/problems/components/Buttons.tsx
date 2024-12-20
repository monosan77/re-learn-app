"use client";
import ButtonSmall from "@/components/buttons/ButtonSmall";
import ButtonSmallWhite from "@/components/buttons/ButtonSmall-white";
import React from "react";
interface Prop {
  modalOpenFn: () => void;
}
const Buttons = ({ modalOpenFn }: Prop) => {
  // const router = useRouter();
  // function backPage() {
  //   router.back();
  // }
  return (
    <div className="flex justify-between">
      <ButtonSmall type="submit" buttonText="作成" />
      <ButtonSmallWhite type="button" buttonText="閉じる" fn={modalOpenFn} />
      {/* <ButtonSmallWhite type="button" buttonText="閉じる" fn={handleOpen} /> */}
    </div>
  );
};

export default Buttons;
