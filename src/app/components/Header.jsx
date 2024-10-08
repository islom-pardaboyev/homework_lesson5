"use client";
import React, { useContext } from "react";
import Logo from "../../app/assets/logo.png";
import Image from "next/image";
import { NavbarItems } from "../../app/assets";
import Link from "next/link";
import { NavbarIsActive, NavbarStyles } from "../../app/utils";
import { usePathname } from "next/navigation";
import { BasketIcon, LikeIcon, ProfileIcon, SearchIcon } from "../assets/svgs";
import { Context } from "../context/MainContext";
function Header() {
  const { savedProducts, showSidebar, setShowSidebar } = useContext(Context);
  const currentPath = usePathname();
  const NavbarIsActiveFn = (path) => {
    if (path === currentPath) {
      return NavbarIsActive;
    }
  };
  return (
    <header className="px-[54px] fixed z-20 top-0 left-0 right-0 bg-white py-6">
      <div className="flex items-center container  justify-between">
        <Image src={Logo} width={185} alt="logo" />
        <nav className="space-x-[75px]">
          {NavbarItems.map((item) => (
            <Link
              key={item.id}
              className={`${NavbarStyles} ${NavbarIsActiveFn(item.link)}`}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-[45px]">
          <ProfileIcon />
          <SearchIcon />
          <LikeIcon />
          <p className="relative" onClick={() => setShowSidebar(!showSidebar)}>
            <span className="absolute bg-rose-500 text-white -top-3 -right-3 size-[20px] rounded-full flex items-center justify-center">{savedProducts.length}</span>
            <BasketIcon />
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
