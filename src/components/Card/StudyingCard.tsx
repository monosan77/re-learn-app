import React, { ReactNode } from "react";
import ProblemTitle from "../ProblemForm/ProblemTitle";
import { CategoryModel } from "@/types/types";
interface Prop {
  children: ReactNode;
  categoryData: CategoryModel;
  name: string;
}
const StudyingCard = async ({ children, categoryData, name }: Prop) => {
  return (
    <div>
      <ProblemTitle
        title={categoryData.name}
        bgColor={categoryData.color}
        textColor={categoryData.text_color}
        name={name}
      />
      <div className="w-[calc(100%-32px)] mx-4 p-6 mt-28 mb-24 max-w-750 md:mx-auto rounded-md border border-solid  border-gray-300  card-shadow space-y-4">
        {children}
      </div>
    </div>
  );
};

export default StudyingCard;
