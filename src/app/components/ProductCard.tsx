'use client'
import React, { useContext } from "react";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Context } from "../context/MainContext";
import { useTranslations } from "next-intl";

function ProductCard({ item, currentPath }) {
  const { id, images, discountPercentage, title, category } = item;
  const router = useRouter();
  const categoriesColors = {
    beauty: "bg-category_pink_color text-white w-fit px-2 text-xs rounded-full",
    fragrances: "bg-category_teal_color",
    furniture: "bg-category_blue_color",
    groceries: "bg-category_green_color",
    laptops: "bg-sky-500",
    "mens-shoes": "bg-rose-600",
    "skin-care": "bg-yellow-700",
    "kitchen-accessories": "bg-orange-600",
  };
  const t = useTranslations('IndexPage')
  return (
    <div
      key={item.id}
      className="col-span-1 group bg-gray_200 relative overflow-hidden"
    >
      <div className="absolute flex items-center justify-center top-[100vw] group-hover:top-0 duration-500 left-0 right-0 bottom-0 z-10 bg-black/50">
        <Button
          onClickEvent={() => router.push(`${currentPath.split('/')[1]}/${id}` )}
          title={t('our_products.button_text')}
          styles={
            "capitalize bg-white py-3 px-[52px] text-primary_text_color font-semibold"
          }
        />
      </div>
      <div className="relative">
        <Image
          width={281}
          height={301}
          className="w-[281px] mx-auto h-[301px] object-contain"
          src={images[0]}
          alt={title}
        />
        {discountPercentage >= 1 && (
          <p className="absolute top-6 right-6 bg-red rounded-full text-white font-medium size-12 flex items-center justify-center">
            -{discountPercentage.toFixed()}%
          </p>
        )}
      </div>
      <div className="pb-[30px] pr-5 pl-4 pt-4  flex flex-col gap-2">
        <h1 className="font-semibold text-2xl line-clamp-1">{title}</h1>
        <p
          className={`${
            categoriesColors[category] || "bg-emerald-400"
          } categoy_text`}
        >
          {category}
        </p>
        <div className="flex items-center justify-between">
          <b className="text-[20px] font-semibold">Rp {(item.price - 3).toFixed(2)}</b>
          <p className="text-gray_400 line-through">Rp {(item.price).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
