import React from "react";
import LoginForm from "./components/LoginForm";
import LogoAndTitle from "@/components/Title/LogoAndTitle";

const Page = () => {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <LogoAndTitle title="Login" />
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
