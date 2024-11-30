import React from "react";

const ProblemFormat = () => {
  return (
    <div>
      <label className="font-bold">問題形式</label>
      <div className="flex justify-start items-center space-x-4">
        <div className="flex justify-start space-x-2">
          <input type="radio" name="format" id="select" />
          <label htmlFor="select">4択式</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input type="radio" name="format" id="write" />
          <label htmlFor="write">記述式</label>
        </div>
      </div>
    </div>
  );
};

export default ProblemFormat;
