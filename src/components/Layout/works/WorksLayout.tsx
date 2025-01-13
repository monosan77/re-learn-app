"use client";
// import { LoadingPopup } from "@/app/works/layout";
import Header from "@/components/Header/Header";
import Loader from "@/components/Loading/Loader";
import Mask_Gray from "@/components/Mask/Mask_Gray";
import SideBar from "@/components/SideBar/SideBar";
import { Problem_SetModel } from "@/types/types";
import React, { createContext, useState } from "react";

export const LoadingPopup = createContext<{
  loading: boolean;
  setLoading: (value: boolean) => void;
}>({ loading: false, setLoading: () => {} });

const WorksLayout = ({
  children,
  problemData,
}: {
  children: React.ReactNode;
  problemData: Problem_SetModel[]
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuOpen() {
    setIsOpen(!isOpen);
  }

  const [loading, setLoading] = useState(false);

  return (
    <div>
      <SideBar
        problemData={problemData}
        handleMenuOpen={handleMenuOpen}
        isOpen={isOpen}
      />
      <div className="w-full md:w-[calc(100%-256px)] md:ml-64 transition-all duration-300">
        <Header handleMenuOpen={handleMenuOpen} />
        <div className="w-full pt-12">
          <LoadingPopup.Provider value={{ loading, setLoading }}>
            {children}
            {loading && (
              <div className="fixed top-0 left-0 right-0 bottom-0">
                <div className="fixed top-0 left-0 right-0 z-50">
                  <Loader />
                </div>
                <Mask_Gray />
              </div>
            )}
          </LoadingPopup.Provider>
        </div>
      </div>
    </div>
  );
};

export default WorksLayout;
