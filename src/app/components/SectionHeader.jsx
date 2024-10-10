import React from 'react'
import ShopBg from "../../app/assets/shop-bg.png";
import MeubelHouseLogo from "../../app/assets/Meubel House_Logos-05.png";
import { FaAngleRight } from 'react-icons/fa';
import Image from 'next/image';

function SectionHeader({currentPage}) {
  return (
    <div className="h-[344px] relative">
        <Image src={ShopBg} alt="Shop_background" className="w-screen" />
        <div className="absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
        <Image className="mx-auto" src={MeubelHouseLogo} alt='img'/>
          <h1 className="capitalize font-medium text-black text-5xl leading-[72px]">
          {currentPage.split("/").filter((item) => item)}
          </h1>
          <p className="flex items-center justify-center gap-[6px]">
            <span className="font-medium">Home</span> <FaAngleRight />{" "}
            <span className="capitalize opacity-50">
              {currentPage.split("/").filter((item) => item)}
            </span>
          </p>
        </div>
      </div>
  )
}

export default SectionHeader