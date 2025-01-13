import { Inputs } from "@/app/works/create-problem/components/CreateProblemForm";
import React from "react";
import { UseFormRegister } from "react-hook-form";
interface Prop {
  // setFormat: (value: string) => void;
  // format: string;
  register: UseFormRegister<Inputs>;
}
const ProblemFormat = ({ register }: Prop) => {
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setFormat(e.target.value);
  // }
  return (
    <div>
      <label className="font-bold">問題形式</label>
      <div className="flex justify-start items-center space-x-4">
        <div className="flex justify-start space-x-2">
          <input
            type="radio"
            // name="format"
            id="select"
            value={"select"}
            {...register("format")}
            // onChange={handleChange}
            // defaultChecked={'true}
            // defaultChecked={format === "select" ? true : false}
          />
          <label htmlFor="select">4択式</label>
        </div>
        <div className="flex justify-start space-x-2">
          <input
            type="radio"
            // name="format"
            id="write"
            value={"write"}
            {...register("format")}
            // onChange={handleChange}
            // defaultChecked={format === "write" ? true : false}
          />
          <label htmlFor="write">記述式</label>
        </div>
      </div>
    </div>
  );
};

export default ProblemFormat;
