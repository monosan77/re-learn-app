import React from "react";
import SigninForm from "./components/SigninForm";
import LogoAndTitle from "@/components/Title/LogoAndTitle";

const Page = () => {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <LogoAndTitle title="Create Account" />
        <SigninForm />
      </div>
    </div>
  );
};

export default Page;
