import Image from "next/image";
import React from "react";
interface Prop {
  imgPath: string;
  categoryName: string;
}
const NavList = ({ imgPath, categoryName }: Prop) => {
  return (
    <div className="flex justify-end items-center space-x-1">
      <Image src={imgPath} alt="アイコン" width={18} height={18} />
      <p className="text-sm ">{categoryName}</p>
    </div>
  );
};

export default NavList;
