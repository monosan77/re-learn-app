import React from "react";

interface Prop {
  active?: boolean;
  fn?: () => void;
}

const Mask_Gray = ({ fn }: Prop) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 -z-10 bg-slate-500 opacity-40  w-full h-full`}
      // className={`${active ? "block" : "hidden"} fixed top-0 left-0 bottom-0 z-30 bg-transparent  w-full h-full`}
      onClick={fn}
    ></div>
  );
};

export default Mask_Gray;
