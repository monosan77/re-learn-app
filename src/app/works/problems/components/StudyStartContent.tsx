"use client";
import React, { useState } from "react";
import StartBtn from "./StartBtn";
import PopupSetting from "./PopupSetting";
import { CategoryModel } from "@/types/types";

interface Prop {
  categoryData: CategoryModel[];
}

const StudyStartContent = ({ categoryData }: Prop) => {
  const [isStudyPopUp, setIsStudyPopUp] = useState(false);
  function handlePopUp() {
    setIsStudyPopUp(!isStudyPopUp);
  }
  return (
    <>
      <StartBtn handlePopUp={handlePopUp} />
      <PopupSetting
        handlePopUp={handlePopUp}
        isStudyPopUp={isStudyPopUp}
        categoryData={categoryData}
      />
    </>
  );
};

export default StudyStartContent;
