"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Mask_Transparent = () => {
  const router = useRouter();
  function backPage() {
    router.back();
  }
  return (
    <div
      className={` fixed top-0 left-0 bottom-0 z-30 bg-transparent  w-full h-full`}
      onClick={backPage}
    ></div>
  );
};

export default Mask_Transparent;
