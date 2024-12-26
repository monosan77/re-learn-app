"use client";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loading/Loader";
import Mask_Gray from "@/components/Mask/Mask_Gray";
import Mask_Transparent from "@/components/Mask/Mask_Transparent";
import SideBar from "@/components/SideBar/SideBar";
import React, { createContext, useState } from "react";

export const LoadingPopup = createContext<{
  loading: boolean;
  setLoading: (value: boolean) => void;
}>({ loading: false, setLoading: () => {} });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }

  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <SideBar handleMenuOpen={handleMenuOpen} isOpen={isOpen} />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 transition-all duration-300">
        <Header handleMenuOpen={handleMenuOpen} />
        <div className="w-full pt-12">
          {/* <div>{children}</div> */}
          <LoadingPopup.Provider value={{ loading, setLoading }}>
            {children}
            {loading && (
              <div>
                <Loader />
                <Mask_Transparent />
              </div>
            )}
          </LoadingPopup.Provider>
        </div>
      </div>
    </div>
  );
};

export default Layout;
