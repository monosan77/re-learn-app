import React from "react";
import LoginForm from "../../auth/signin/components/LoginForm";
import LogoAndTitle from "@/components/Title/LogoAndTitle";
import { signIn } from "../../../../auth";

const Page = () => {
  return (
    <>
      <div className="w-full min-w-60 flex justify-center">
        <div className="mt-20">
          <LogoAndTitle title="Login" />
          <LoginForm />
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/works/home" });
            }}
          >
            <button type="submit">Signin with Google</button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/works/home" });
            }}
          >
            <button type="submit">Signin with Github</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
