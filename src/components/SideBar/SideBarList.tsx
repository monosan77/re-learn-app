import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  url: string;
  iconElem: ReactNode;
  menuText: string;
}
const SideBarList = ({ url, iconElem, menuText }: Props) => {
  return (
    <Link
      href={url}
      className="flex relative justify-start items-center space-x-3 leading-3"
    >
      {iconElem}
      <p className="absolute bottom-0.5 left-6">{menuText}</p>
    </Link>
  );
};

export default SideBarList;
