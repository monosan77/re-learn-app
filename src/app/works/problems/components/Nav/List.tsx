import React from "react";

interface Prop {
  text: string;
}
const List = ({ text }: Prop) => {
  return <li className=" border-solid border-b">{text}</li>;
};

export default List;
