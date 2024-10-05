'use client'
import React from 'react'
import ShopBg from '../../assets/shop-bg.png'
import MeubelHouseLogo from '../../assets/Meubel House_Logos-05.png'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa6'
import { usePathname } from 'next/navigation'

function Blog() {
  const currentPage = usePathname()
  return (
    <section className='mt-[85px]'>
      <div className="h-[344px] relative">
        <Image src={ShopBg} alt="Shop_background" className="w-screen" />
        <div className="absolute top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2">
        <Image className="mx-auto" src={MeubelHouseLogo}/>
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
    </section>
  )
}

export default Blog