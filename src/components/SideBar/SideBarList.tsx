import Image from "next/image";
import Link from "next/link";
import React from "react";
interface Props {
  url: string;
  src: string;
  menuText: string;
}
const SideBarList = ({ url, src, menuText }: Props) => {
  return (
    <Link
      href={url}
      className="flex relative justify-start items-center space-x-3 leading-3"
    >
      <Image src={src} alt="" width={20} height={20} />
      <p className="absolute bottom-0.5 left-6">{menuText}</p>
    </Link>
  );
};

export default SideBarList;
