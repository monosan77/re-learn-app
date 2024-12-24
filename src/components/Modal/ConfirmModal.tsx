import React from "react";
import Mask_Transparent from "../Mask/Mask_Transparent";
import ButtonSmall from "../buttons/ButtonSmall";
import ButtonSmallWhite from "../buttons/ButtonSmall-white";

interface Prop {
  active: boolean;
  submitFn: () => void;
  backActionFn: () => void;
  confirmText: string;
}

const ConfirmModal = ({
  active,
  backActionFn,
  submitFn,
  confirmText,
}: Prop) => {
  return (
    <div style={{ display: active ? "block" : "none" }}>
      <div className="w-80 text-white bg-background rounded p-4 text-center fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <p className="">{confirmText}</p>
        <p>本当に削除しますか？</p>
        <div className="flex justify-between">
          <ButtonSmall type="button" buttonFn={submitFn} buttonText="削除" />
          <ButtonSmallWhite buttonText="戻る" type="button" fn={backActionFn} />
        </div>
      </div>
      <Mask_Transparent fn={backActionFn} />
    </div>
  );
};

export default ConfirmModal;
