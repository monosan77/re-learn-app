"use client";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import React, { useState } from "react";

const Layout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      {children}
      {modal}
    </>
  );
};

export default Layout;
