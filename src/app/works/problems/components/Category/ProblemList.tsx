import Image from "next/image";
import React from "react";
interface Props {
  problemName: string;
}
const ProblemList = ({ problemName }: Props) => {
  return (
    <button type="button" className="w-full flex justify-between items-center">
      <p>{problemName}</p>
      <Image
        src={"/icon/pen-white.svg"}
        alt="アイコン"
        width={18}
        height={18}
      />
    </button>
  );
};

export default ProblemList;
