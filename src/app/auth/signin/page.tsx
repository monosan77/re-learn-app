import React from "react";
import LogoAndTitle from "@/components/Title/LogoAndTitle";
import SnsForm from "./components/SnsForm";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="w-full min-w-60 flex justify-center mb-11">
        <div className="mt-20">
          <LogoAndTitle title="Signin" />
          <SnsForm />
        </div>
      </div>
      <div className="hidden  w-full md:flex justify-center ">
        <Image
          src={"/images/study-img1.png"}
          alt="image"
          width={550}
          height={300}
        />
        <Image
          src={"/images/study-img2.png"}
          alt="image"
          width={550}
          height={300}
          className=" hidden lg:block"
        />
      </div>
    </>
  );
};

export default Page;
