"use client";
import React from "react";
import ShopBg from "../../assets/shop-bg.png";
import MeubelHouseLogo from "../../assets/Meubel House_Logos-05.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import BlogImgOne from "../../assets/blog-img-1.png";
import { CalendarIcon, PersonIcon, TagIcon } from "../../assets/svgs";

function Blog() {
  const currentPage = usePathname();
  return (
    <section className="mt-[85px]">
      <div className="h-[344px] relative">
        <Image src={ShopBg} alt="Shop_background" className="w-screen" />
        <div className="absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
          <Image className="mx-auto" src={MeubelHouseLogo} />
          <h1 className="capitalize font-medium text-center text-black text-5xl leading-[72px]">
            {currentPage.split("/").filter((item) => item)}
          </h1>
          <p className="flex justify-center items-center gap-[6px]">
            <span className="font-medium">Home</span> <FaAngleRight />{" "}
            <span className="capitalize opacity-50">
              {currentPage.split("/").filter((item) => item)}
            </span>
          </p>
        </div>
      </div>
      <div className="container mt-[106px]">
        <div className="grid grid-cols-12">
          <div className="col-span-8 flex flex-col gap-[54px]">
            <div>
              <Image src={BlogImgOne} />
              <div className="flex items-center mt-[17px] gap-[35px] text-gray ">
                <p className="flex items-center gap-[11px]">
                  <PersonIcon />
                  <span>Admin</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <CalendarIcon />
                  <span>14 Oct 2022</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <TagIcon />
                  <span>Wood</span>
                </p>
              </div>
              <h1 className="mt-[15px] text-[30px] font-medium leading-[45px]">
                Going all-in with millennial design
              </h1>
              <p className="mt-[12px] text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="flex items-center gap-[12px] mt-[30px] flex-col">
                <p>Read more</p>
                <span className="w-[90%] h-px bg-black"></span>
              </button>
            </div>
            <div>
              <Image src={BlogImgOne} />
              <div className="flex items-center mt-[17px] gap-[35px] text-gray ">
                <p className="flex items-center gap-[11px]">
                  <PersonIcon />
                  <span>Admin</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <CalendarIcon />
                  <span>14 Oct 2022</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <TagIcon />
                  <span>Wood</span>
                </p>
              </div>
              <h1 className="mt-[15px] text-[30px] font-medium leading-[45px]">
                Going all-in with millennial design
              </h1>
              <p className="mt-[12px] text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="flex items-center gap-[12px] mt-[30px] flex-col">
                <p>Read more</p>
                <span className="w-[90%] h-px bg-black"></span>
              </button>
            </div>
            <div>
              <Image src={BlogImgOne} />
              <div className="flex items-center mt-[17px] gap-[35px] text-gray ">
                <p className="flex items-center gap-[11px]">
                  <PersonIcon />
                  <span>Admin</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <CalendarIcon />
                  <span>14 Oct 2022</span>
                </p>
                <p className="flex items-center gap-[11px]">
                  <TagIcon />
                  <span>Wood</span>
                </p>
              </div>
              <h1 className="mt-[15px] text-[30px] font-medium leading-[45px]">
                Going all-in with millennial design
              </h1>
              <p className="mt-[12px] text-gray">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
              <button className="flex items-center gap-[12px] mt-[30px] flex-col">
                <p>Read more</p>
                <span className="w-[90%] h-px bg-black"></span>
              </button>
            </div>
          </div>
          <div className="col-span-4"></div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
