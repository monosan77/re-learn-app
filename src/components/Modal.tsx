import React, { ReactNode } from "react";
import Mask_Transparent from "./Mask/Mask_Transparent";

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
  //  <div className="w-500 bg-black h-16">{children}</div>;
};

export default Modal;
