"use client";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import React, { useState } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="">
      <SideBar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 transition-all duration-300">
        <Header handleMenuOpen={handleMenuOpen} />
        <div className="w-full mt-12">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
