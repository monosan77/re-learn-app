import React, { ReactNode } from "react";
interface Prop {
  iconElem: ReactNode;
  categoryName: string;
}
const NavList = ({ iconElem, categoryName }: Prop) => {
  return (
    <div className="flex justify-end items-center space-x-2 hover:opacity-80">
      {iconElem}
      <p className="text-base leading-none">{categoryName}</p>
    </div>
  );
};

export default NavList;
