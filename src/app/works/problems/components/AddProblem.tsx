import Image from "next/image";
import React from "react";

const AddProblem = () => {
  return (
    <div className="flex justify-start items-center h-fit min-w-60 text-white bg-slate-400 p-3 rounded-md box-shadow space-x-2">
      <Image
        src={"/icon/plus-white2.svg"}
        alt="アイコン"
        width={18}
        height={18}
      />
      <p className="text-sm">カテゴリーを追加</p>
    </div>
  );
};

export default AddProblem;
