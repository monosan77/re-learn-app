"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import List from "./List";
import NavList from "./NavList";
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
      <div
        className={`${openBool ? "block" : "hidden"} w-48 p-3 text-white rounded bg-background absolute top-full right-0 2xl:left-0 2xl:right-auto z-20`}
      >
        <div className="flex items-center justify-between text-center mb-3">
          <h3>{navName}</h3>
          <button onClick={handleFn}>
            <Image
              src={"/icon/batu-white.svg"}
              alt="アイコン"
              width={14}
              height={14}
              className="hover:opacity-70"
            />
          </button>
        </div>
        {children}
        {/* <ul className="space-y-2 text-sm">
          <List text="問題集の設定" />
          <List text="サインアウト" />
        </ul> */}
      </div>
      <div
        className="fixed w-screen h-screen top-0 left-0"
        onClick={handleFn}
        style={{ display: openBool ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default DropDownList;
