"use server";
import React, { ReactNode } from "react";

interface Prop {
  active: boolean;
  children: ReactNode;
}

const Card_Popup = ({ active, children }: Prop) => {
  return (
    <div
      className={`${active ? "block" : "hidden"} fixed  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50 w-64 p-6 bg-background rounded-md text-sm`}
    >
      {children}
    </div>
  );
};

export default Card_Popup;
