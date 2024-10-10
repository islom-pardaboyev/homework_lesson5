"use client";
import React, { useContext } from "react";
import Logo from "../../app/assets/logo.png";
import Image from "next/image";
import { NavbarItems } from "../assets";
import { usePathname, useRouter } from "next/navigation";
import { BasketIcon, LikeIcon, ProfileIcon, SearchIcon } from "../assets/svgs";
import { Context } from "../context/MainContext";
import { useTranslations } from "use-intl";
import { Link } from "../../navigation";
import UzbIcon from '../assets/uzbekistan.png'
import USIcon from '../assets/united-states.png'
function Header() {
  const { savedProducts, showSidebar, setShowSidebar} =
    useContext(Context);
  const currentPath = usePathname();
  
  const NavbarIsActiveFn = (path:string):string => {
    if (path === `/${currentPath.split('/')[2]}`) {
      return 'text-sky-500';
    }
  };
  const router = useRouter()
  const t = useTranslations("IndexPage.header");
  return (
    <header className="px-[54px] fixed z-20 top-0 left-0 right-0 bg-white py-6">
      <div className="flex items-center container  justify-between">
        <Image src={Logo} width={185} alt="logo" />
        <nav className="space-x-[75px]">
          <Link
            className={`nav__link ${NavbarIsActiveFn("/")}`}
            href={"/"}
          >
            {t("home")}
          </Link>
          <Link
            className={`nav__link ${NavbarIsActiveFn("/shop")}`}
            href={"/shop"}
          >
            {t("shop")}
          </Link>
          <Link
            className={`nav__link ${NavbarIsActiveFn("/blog")}`}
            href={"/blog"}
          >
            {t("blog")}
          </Link>
          <Link
            className={`nav__link ${NavbarIsActiveFn("/contact")}`}
            href={"/contact"}
          >
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center space-x-[45px]">
          <ProfileIcon />
          <SearchIcon />
          <LikeIcon />
          <p className="relative" onClick={() => setShowSidebar(!showSidebar)}>
            <span className="absolute bg-rose-500 text-white -top-3 -right-3 size-[20px] rounded-full flex items-center justify-center">
              {savedProducts.length}
            </span>
            <BasketIcon />
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={UzbIcon} className="cursor-pointer" onClick={() => router.push('/uz')} alt="uzb" width={30}/>
          <Image src={USIcon} className="cursor-pointer" onClick={() => router.push('/en')} alt="uzb" width={30}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
