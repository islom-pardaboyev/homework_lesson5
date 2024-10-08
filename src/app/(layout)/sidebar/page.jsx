"use client";
import React, { useContext } from "react";
import { Context } from "../../context/MainContext";
import { CloseSidebarIcon } from "../../assets/svgs";

function Sidebar() {
  const { showSidebar, setShowSidebar, savedProducts } = useContext(Context);
  console.log(showSidebar);
  return (
    <section
      id="wrapper"
      onClick={(e) =>
        e.target.id === "wrapper" ? setShowSidebar(!showSidebar) : ""
      }
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black/70 duration-300 z-30 ${
        showSidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="absolute top-0 right-0 w-[30%] p-[28px] bg-white">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Shoppig Card</h1>
          <span
            onClick={() => setShowSidebar(!showSidebar)}
            className="cursor-pointer"
          >
            <CloseSidebarIcon />
          </span>
        </header>
        <span className="w-full block h-px bg-gray mt-[26px] mb-[42px]"></span>
        <div className="grid grid-cols-1 space-y-[20px]">
        {savedProducts.map(item =>  
            <div className="col-span-1 flex items-center gap-2">
                <img src={item.images[0]} className="w-[108px] h-[105px] bg-primary rounded-[10px]" alt="" />
                <div className="flex flex-col ">
                    <h1 className="line-clamp-1 font-normal">{item.title}</h1>
                    <p className="font-bold text-xs text-primary_text_color">Rs. {item.price}</p>
                </div>
            </div>
        )}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
