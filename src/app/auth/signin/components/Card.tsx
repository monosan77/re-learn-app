import React, { ReactNode } from "react";
interface Prop {
  children: ReactNode;
}
const Card = ({ children }: Prop) => {
  return (
    <div className=" px-6 py-7 mx-4 border rounded-md box-shadow bg-white">
      {children}
    </div>
  );
};

export default Card;
