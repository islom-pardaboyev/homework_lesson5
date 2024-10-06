
"use client";
import React from "react";
import ShopBg from "../../assets/shop-bg.png";
import MeubelHouseLogo from "../../assets/Meubel House_Logos-05.png";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { ClockIcon, LocationIcon, PhoneIcon } from "../../assets/svgs";
import SectionHeader from "../../../components/SectionHeader";

function Contact() {
  const ViewSection = [
    {
      id: 1,
      Icon: <LocationIcon />,
      title: "Address",
      description: "236 5th SE Avenue, New York NY10000, United States",
    },
    {
      id: 2,
      Icon: <PhoneIcon />,
      title: "Phone",
      description: "Mobile: +(84) 546-6789 Hotline: +(84) 456-6789",
    },
    {
      id: 3,
      Icon: <ClockIcon />,
      title: "Working Time",
      description: "Monday-Friday: 9:00 - 22:00  Saturday-Sunday:  9:00 - 21:00",
    },
  ];

  const currentPage = usePathname();

  return (
    <section className="mt-[85px]">
      <SectionHeader currentPage={currentPage}/>
      <div className="mt-[98px]">
        <h1 className="text-center font-semibold text-4xl leading-[54px]">
          Get In Touch With Us
        </h1>
        <p className="max-w-[644px] mx-auto mt-[7px] text-center text-gray">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="mt-[82px] grid grid-cols-12 gap-[30px]">
        <div className="col-span-6 ml-auto gap-[42px] flex items-center flex-col p-[46px]">
          {ViewSection.map((item) => (
            <div key={item.id} className="flex gap-[30px]">
              <span className="-mt-3">{item.Icon}</span>
              <div>
                <h1 className="font-medium text-[24px] leading-[36px]">
                  {item.title}
                </h1>
                <p className="w-[212px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <form className="col-span-6 flex mr-auto flex-col gap-9">
          <label className="flex flex-col gap-[22px]">
            <span className="leading-[24px]">Your name</span>
            <input type="text" className="rounded-[10px] border py-[25px] px-[31px] outline-none border-gray" placeholder="Abc" />
          </label>
          <label className="flex flex-col gap-[22px]">
            <span className="leading-[24px]">Email</span>
            <input type="text" className="rounded-[10px] border py-[25px] px-[31px] outline-none border-gray" placeholder="Abc@def.com" />
          </label>
          <label className="flex flex-col gap-[22px]">
            <span className="leading-[24px]">Subject</span>
            <input type="text" className="rounded-[10px] border py-[25px] px-[31px] outline-none border-gray" placeholder="This is an optional" />
          </label>
          <label className="flex flex-col gap-[22px]">
            <span className="leading-[24px]">Message</span>
            <textarea type="text" rows={3} className="rounded-[10px] resize-none border py-[25px] px-[31px] outline-none border-gray" placeholder="Hi! i’d like to ask about" />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Contact;