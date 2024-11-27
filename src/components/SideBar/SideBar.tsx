import React from "react";
import SideBarList from "./SideBarList";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 pt-4 w-64 bg-background text-white box-shadow-league">
      <div className="flex justify-between items-center px-4 mb-6">
        <h1 className="text-2xl font-bold">Menu</h1>
        <Image
          src={"/icon/batu-white.svg"}
          alt="アイコン"
          width={18}
          height={18}
        />
      </div>
      <nav>
        <ul className="mx-5 mb-10 text-lg font-bold space-y-3">
          <li>
            <SideBarList
              url="/works"
              src="/icon/home-white.svg"
              menuText="ホーム"
            />
          </li>
          <li>
            <SideBarList
              url="/works"
              src="/icon/person-white.svg"
              menuText="アカウント"
            />
          </li>
          <li>
            <SideBarList
              url="/works"
              src="/icon/gear-white.svg"
              menuText="設定"
            />
          </li>
        </ul>
        <ul className="mx-5 mb-10 text-lg font-bold space-y-3">
          <h3 className="border-b mb-4">復習記録</h3>
          <li>
            <SideBarList
              url="/works"
              src="/icon/calendar-white.svg"
              menuText="カレンダー"
            />
          </li>
          <li>
            <SideBarList
              url="/works"
              src="/icon/pencil-white.svg"
              menuText="復習履歴"
            />
          </li>
        </ul>
        <ul className="mx-5 mb-10 text-lg font-bold space-y-3">
          <h3 className="border-b mb-4">問題集</h3>
          <li>
            <SideBarList
              url="/works"
              src="/icon/book-white.png"
              menuText="プログラミング"
            />
          </li>
          <li>
            <SideBarList
              url="/works"
              src="/icon/book-white.png"
              menuText="資格試験"
            />
          </li>
          <li>
            <SideBarList
              url="/works"
              src="/icon/book-white.png"
              menuText="大学講義"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
