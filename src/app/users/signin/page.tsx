import React from "react";
import PageTitle from "./components/PageTitle";
import SigninForm from "./components/SigninForm";

const Page = () => {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <PageTitle />
        <SigninForm />
      </div>
    </div>
  );
};

export default Page;
