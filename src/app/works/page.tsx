"use client";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import React, { useState } from "react";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      <Header handleMenuOpen={handleMenuOpen} />
      <SideBar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
    </div>
  );
};

export default Page;
