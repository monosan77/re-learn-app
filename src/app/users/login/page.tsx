import React from "react";
import PageTitle from "./components/PageTitle";
import LoginForm from "./components/LoginForm";

const Page = () => {
  return (
    <div className="w-full min-w-60 flex justify-center">
      <div className="mt-20">
        <PageTitle />
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
