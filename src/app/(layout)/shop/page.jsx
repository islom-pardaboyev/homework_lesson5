"use client";
import { usePathname } from "next/navigation";
import ShopSettings from "../../../components/ShopSettings";
import SectionHeader from "../../../components/SectionHeader";
import Image from "next/image";
import Image1 from "../../assets/image1.png";

function Shop() {
  const currentPage = usePathname();
  const MAX_VIEW_PRODUCTS = 8

  return (
    <section className="mt-[85px]">
      <SectionHeader currentPage={currentPage} />
      <ShopSettings />
      <div className="grid grid-cols-4 container mt-[63px] gap-8">
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="relative">
            <Image src={Image1} className="w-full" />
            <p className="size-[48px] rounded-full absolute top-3 right-5 text-white bg-red flex items-center justify-center">
              -30%
            </p>
          </div>
          <div className="bg-gray_200 p-4 flex flex-col gap-2 w-full">
            <h1 className="font-semibold text-[24px] leading-[28.8px] text-primary_dark">Syltherine</h1>
            <p className="text-gray_300 ">Stylish cafe chair</p>
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Rp 2.500.000</p>
              <p className="text-gray_400 line-through">Rp 3.500.000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
