import SideBarList from "./SideBarList";
// import Image from "next/image";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";
import PersonIcon from "@mui/icons-material/Person";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { Problem_SetModel } from "@/types/types";

interface Prop {
  handleMenuOpen: () => void;
  isOpen: boolean;
  problemData: Problem_SetModel[];
}
const SideBar = ({ handleMenuOpen, isOpen, problemData }: Prop) => {
  return (
    <div
      className={`${isOpen && "hamburgerOn"} fixed top-0 bottom-0 -left-72 md:left-0 z-20   pt-4 w-64  bg-background text-white transition-all duration-300`}
    >
      <div className="flex justify-between items-center px-4 mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <button
          type="button"
          onClick={handleMenuOpen}
          className="md:hidden hover:opacity-80"
        >
          <CloseIcon />
        </button>
      </div>
      <nav>
        <ul className="mx-5 mb-10 text-md  space-y-3">
          <li>
            <SideBarList
              url="/works/home"
              iconElem={<HomeIcon />}
              menuText="ホーム"
            />
          </li>
          <li>
            <SideBarList
              url="/works/account"
              iconElem={<PersonIcon />}
              menuText="アカウント"
            />
          </li>
          {/* <li>
            <SideBarList
              url="/works"
              src="/icon/gear-white.svg"
              menuText="設定"
            />
          </li> */}
        </ul>
        <ul className="mx-5 mb-10 text-lg  space-y-3">
          <h3 className="border-b mb-4">復習記録</h3>
          {/* <li>
            <SideBarList
              url="/works"
              src="/icon/calendar-white.svg"
              menuText="カレンダー"
            />
          </li> */}
          <li>
            <SideBarList
              url="/works"
              iconElem={<HistoryIcon />}
              menuText="復習履歴"
            />
          </li>
        </ul>
        <ul className="mx-5 mb-10 text-lg space-y-3">
          <h3 className="border-b mb-4">問題集</h3>
          {problemData.map((problem) => (
            <li key={problem.id} className="hover:opacity-80">
              <SideBarList
                url={`/works/problems?id=${problem.id}`}
                iconElem={<AutoStoriesIcon />}
                menuText={problem.name}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
