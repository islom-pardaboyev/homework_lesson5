"use client";
import Image from "next/image";
import React from "react";
import ShopBg from "../../assets/shop-bg.png";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import ShopSettings from "../../../components/ShopSettings";
import MeubelHouseLogo from '../../assets/Meubel House_Logos-05.png'

function Shop() {
  const currentPage = usePathname();

  return (
    <section className="mt-[85px]">
      <div className="h-[344px] relative">
        <Image src={ShopBg} alt="Shop_background" className="w-screen" />
        <div className="absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
        <Image className="mx-auto" src={MeubelHouseLogo}/>
          <h1 className="capitalize font-medium text-black text-5xl leading-[72px]">
            Shop
          </h1>
          <p className="flex items-center gap-[6px]">
            <span className="font-medium">Home</span> <FaAngleRight />{" "}
            <span className="capitalize opacity-50">
              {currentPage.split("/").filter((item) => item)}
            </span>
          </p>
        </div>
      </div>
      <ShopSettings />
    </section>
  );
}

export default Shop;
