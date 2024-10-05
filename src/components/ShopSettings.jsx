import React from "react";
import { GridBigRound, SettingsIcon, ViewList } from "../app/assets/svgs";

export default function ShopSettings() {
  return (
    <div className="py-[32px] -mt-3 bg-secondary px-[98px] flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center gap-3 ">
          <SettingsIcon />
          <p>Filter</p>
        </div>
        <span className="ml-[24px]">
          <GridBigRound />
        </span>
        <span className="ml-[24px] mr-[30px]">
          <ViewList />
        </span>
        <span className="h-[37px] w-[2px] mr-[34px] bg-gray"></span>
        <p>Showing 1–16 of 32 results</p>
      </div>
      <div className="flex items-center gap-[29px]">
        <div className="flex items-center gap-[17px]">
          <span>
          Show
          </span>
          <div className="size-[55px] flex bg-white items-center justify-center">
            <p className="leadig-[30px] text-[20px] text-gray">16</p>
          </div>
        </div>
        <div className="flex items-center gap-[17px]">
          <span>
          Sort bg
          </span>
          <div className="w-[188px] h-[55px] flex bg-white items-center">
            <p className="leadig-[30px] text-[20px] text-gray ml-[30px]">Default</p>
          </div>
        </div>
      </div>
    </div>
  );
}
