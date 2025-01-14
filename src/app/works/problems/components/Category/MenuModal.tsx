import React from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Prop {
  handleFn: () => void;
  deleteFn: () => void;
  handleOpenMenu: () => void;
  modalTitle: string;
}

const MenuModal = ({
  handleFn,
  deleteFn,
  handleOpenMenu,
  modalTitle,
}: Prop) => {
  return (
    <div className="w-40 text-white bg-background absolute left-full top-0 z-30 p-2 ml-1 rounded-lg">
      <div className="flex items-center justify-between  text-center mb-3">
        <h3 className="font-bold">{modalTitle}</h3>
        <button onClick={handleOpenMenu}>
          <CloseIcon />
        </button>
      </div>

      <ul className="space-y-2 ">
        <li className="border-b hover:opacity-80">
          <button type="button" onClick={handleFn}>
            編集
          </button>
        </li>
        <li className="border-b hover:opacity-80">
          <button onClick={deleteFn}>削除</button>
        </li>
      </ul>
    </div>
  );
};

export default MenuModal;
