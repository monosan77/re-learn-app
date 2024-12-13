import React from "react";
import ProblemHistory from "./components/ProblemHistory";
import ProblemLists from "./components/ProblemLists";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (!session) return redirect("/session-error");

  console.log(session);
  return (
    <div className="w-full lg:max-w-1000 mx-auto mb-10">
      <ProblemHistory />
      <ProblemLists />
    </div>
  );
};

export default Page;
