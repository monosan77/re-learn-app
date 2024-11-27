import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center fixed top-0 left-0 px-4 h-12 bg-white ">
      <div className="cursor-pointer">
        <Image src="/icon/menu2.svg" alt="" width={25} height={25} />
      </div>
      <Link href={"/works"}>
        <Image src={"/logo/ReLearn.png"} alt="" width={110} height={30} />
      </Link>
    </header>
  );
};

export default Header;
