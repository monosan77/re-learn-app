"use client";
import React, { ReactNode } from "react";
import NavList from "./NavList";
import DropdownCard from "@/components/Card/DropdownCard";
interface Prop {
  handleFn: () => void;
  openBool: boolean;
  navName: string;
  iconPath: string;
  children: ReactNode;
}
const DropDownList = ({
  handleFn,
  openBool,
  navName,
  iconPath,
  children,
}: Prop) => {
  return (
    <div className="relative">
      <button onClick={handleFn}>
        <NavList imgPath={iconPath} categoryName={navName} />
      </button>
      <DropdownCard openBool={openBool} navName={navName} handleFn={handleFn}>
        {children}
      </DropdownCard>
    </div>
  );
};

export default DropDownList;
