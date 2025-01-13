import React, { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Prop {
  handleFn: () => void;
  openBool: boolean;
  navName: string;
  children: ReactNode;
}
const DropdownCard = ({ children, openBool, navName, handleFn }: Prop) => {
  return (
    <>
      <div
        className={`${openBool ? "block" : "hidden"} w-48 p-3 text-white rounded bg-background absolute top-full right-0 2xl:left-0 2xl:right-auto z-20`}
      >
        <div className="flex items-center justify-between text-center mb-3">
          <h3>{navName}</h3>
          <button onClick={handleFn}>
            <CloseIcon />
          </button>
        </div>
        {children}
      </div>
      <div
        className="fixed w-screen h-screen top-0 left-0"
        onClick={handleFn}
        style={{ display: openBool ? "block" : "none" }}
      ></div>
    </>
  );
};

export default DropdownCard;
