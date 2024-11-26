import Image from "next/image";
import React from "react";

const PageTitle = () => {
  return (
    <div className="mb-6">
      <Image
        src={"/logo/ReLearn.png"}
        alt=""
        width={200}
        height={50}
        className="m-auto mb-2"
      />
      <h1 className="text-2xl text-center font-bold text-mainColor">
        Create Account
      </h1>
    </div>
  );
};

export default PageTitle;
