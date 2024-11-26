import Link from "next/link";
import React, { ReactNode } from "react";
interface Props {
  url: string;
  children: ReactNode;
}
const LinkText = ({ url, children }: Props) => {
  return (
    <Link href={url} className="w-fit text-linkColor underline flex  my-1">
      {children}
    </Link>
  );
};

export default LinkText;
