"use client";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import React, { useState } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="">
      <SideBar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 transition-all duration-300">
        <Header handleMenuOpen={handleMenuOpen} />
        <div className="mt-12">
          <div>{children}</div>
          {/* <h1>ここから記述</h1> */}
        </div>
      </div>
    </div>
  );
};

export default layout;
