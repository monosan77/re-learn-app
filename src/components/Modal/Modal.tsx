import React, { ReactNode } from "react";
import Mask_Transparent from "../Mask/Mask_Transparent";

interface Prop {
  children: ReactNode;
  openFn: () => void;
}
const Modal = ({ children, openFn }: Prop) => {
  return (
    <>
      <div
        className={`fixed  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 w-64 p-6 bg-background rounded-md text-sm`}
      >
        {children}
      </div>
      <Mask_Transparent fn={openFn} />
    </>
  );
};

export default Modal;
