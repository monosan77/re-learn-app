"use client";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

interface Prop {
  handleMenuOpen: () => void;
}
const Header = ({ handleMenuOpen }: Prop) => {
  return (
    <header className="w-full md:w-[calc(100%-256px)] flex justify-between md:justify-center items-center fixed top-0 left-0 md:left-64 px-4 h-12 z-10 bg-white ">
      <button
        type="button"
        className="cursor-pointer md:hidden hover:opacity-80"
        onClick={handleMenuOpen}
      >
        <MenuIcon sx={{ fontSize: "30px" }} />
      </button>
      <Link href={"/works/home"}>
        <Image src={"/logo/ReLearn.png"} alt="" width={110} height={30} />
      </Link>
    </header>
  );
};

export default Header;
