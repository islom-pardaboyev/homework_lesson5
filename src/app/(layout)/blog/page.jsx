"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import BlogImgOne from "../../assets/blog-img-1.png";
import { CalendarIcon, PersonIcon, SearchIcon, TagIcon } from "../../assets/svgs";
import SectionHeader from "../../../components/SectionHeader";

function Blog() {
  const currentPage = usePathname();
  return (
    <section className="mt-[85px]">
      <SectionHeader currentPage={currentPage}/>
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
          <div className="col-span-4 px-[41px]">
            <label className="flex items-center relative">
            <input type="text" className="w-full border rounded-[10px] border-gray py-[17px] px-[19px]" />
              <span className="absolute right-[10px] bg-white">
              <SearchIcon/>
              </span>
            </label>
            <div className="mx-[36px] mb-[76px] mt-[43px]">
              <h1 className="font-medium mb-[33px] text-[24px]">Category</h1>
              <div className="flex flex-col gap-[41px]">
                <div className="flex text-gray items-center justify-between">
                  <span>Crafts</span>
                  <span>2</span>
                </div>
                <div className="flex text-gray items-center justify-between">
                  <span>Design</span>
                  <span>8</span>
                </div>
                <div className="flex text-gray items-center justify-between">
                  <span>Handmade</span>
                  <span>7</span>
                </div>
                <div className="flex text-gray items-center justify-between">
                  <span>Interior</span>
                  <span>1</span>
                </div>
                <div className="flex text-gray items-center justify-between">
                  <span>Wood</span>
                  <span>6</span>
                </div>
              </div>
            </div>
            <div>
              <h1>Recent Posts</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
