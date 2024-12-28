"use client";
import React, { useState } from "react";
import StartBtn from "./StartBtn";
import PopupSetting from "./PopupSetting";
import { CategoryModel } from "@/types/types";

interface Prop {
  problemSetId: string;
  categoryData: CategoryModel[];
  problemSetName: string;
}

const StudyStartContent = ({
  problemSetId,
  categoryData,
  problemSetName,
}: Prop) => {
  const [isStudyPopUp, setIsStudyPopUp] = useState(false);
  function handlePopUp() {
    setIsStudyPopUp(!isStudyPopUp);
  }
  return (
    <>
      <StartBtn handlePopUp={handlePopUp} />
      <PopupSetting
        problemSetId={problemSetId}
        handlePopUp={handlePopUp}
        isStudyPopUp={isStudyPopUp}
        categoryData={categoryData}
        problemSetName={problemSetName}
      />
    </>
  );
};

export default StudyStartContent;
