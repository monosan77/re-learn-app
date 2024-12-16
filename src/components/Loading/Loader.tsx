"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-mainColor space-y-4">
      <GridLoader color="#4169E1" />
      <h1 className="text-xl">Loading・・・</h1>
    </div>
  );
};

export default Loader;
