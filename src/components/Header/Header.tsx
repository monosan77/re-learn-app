"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Prop {
  handleMenuOpen: () => void;
}
const Header = ({ handleMenuOpen }: Prop) => {
  return (
    <header className="w-full md:w-[calc(100%-256px)] flex justify-between md:justify-center items-center fixed top-0 left-0 md:left-64 px-4 h-12 bg-white ">
      <button
        type="button"
        className="cursor-pointer md:hidden"
        onClick={handleMenuOpen}
      >
        <Image src="/icon/menu2.svg" alt="" width={25} height={25} />
      </button>
      <Link href={"/works"}>
        <Image src={"/logo/ReLearn.png"} alt="" width={110} height={30} />
      </Link>
    </header>
  );
};

export default Header;
