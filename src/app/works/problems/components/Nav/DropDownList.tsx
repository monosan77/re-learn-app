"use client";
import React, { ReactNode } from "react";
import NavList from "./NavList";
import DropdownCard from "@/components/Card/DropdownCard";
interface Prop {
  handleFn: () => void;
  openBool: boolean;
  navName: string;
  iconElem: ReactNode;
  children: ReactNode;
}
const DropDownList = ({
  handleFn,
  openBool,
  navName,
  iconElem,
  children,
}: Prop) => {
  return (
    <div className="relative ml-4">
      <button onClick={handleFn}>
        <NavList iconElem={iconElem} categoryName={navName} />
      </button>
      <DropdownCard openBool={openBool} navName={navName} handleFn={handleFn}>
        {children}
      </DropdownCard>
    </div>
  );
};

export default DropDownList;
