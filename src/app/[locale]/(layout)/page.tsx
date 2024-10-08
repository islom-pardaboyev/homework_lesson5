import React from "react";
import BgImage from "../../assets/bg-home.png";
import Image from "next/image";
import Button from "../../components/Button";
import Browse from '../../components/Browse'
import OurProducts from '../../components/OurProducts'
import { useTranslations } from "next-intl";

function Page() {
  const t = useTranslations("IndexPage");
  return (
    <section className="w-screen flex flex-col">
      <div className="relative">
        <Image alt="img" className="w-screen h-screen" src={BgImage} />
        <div className="w-[643px] h-fit absolute top-[28%] left-[50%] bg-primary pt-[62px] pl-[39px] pr-[43px] pb-[37px]">
          <p className="tracking-[3px] text-base text-primary_dark font-semibold">
            {t('home.title')}
          </p>
          <h1 className="font-bold leading-[65px] text-primary_text_color text-[52px]">
          {t('home.heading')}
          </h1>
          <p className="text-primary_dark  mb-[46px] mt-[17px] leading-[24px] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button
            styles={
              "text-base bg-primary_text_color text-white py-[24px] px-[72px] font-bold"
            }
            title={t('home.button_text')}
          />
        </div>
      </div>
      <Browse/>
      <OurProducts title={t('our_products.title')}/>
    </section>
  );
}

export default Page;
