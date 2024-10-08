"use client";
import { usePathname } from "next/navigation";
import ShopSettings from "../../components/ShopSettings";
import SectionHeader from "../../components/SectionHeader";
import Image from "next/image";
import Image1 from "../../assets/blog-img-1.png";
import OurProducts from "../../components/OurProducts";

function Shop() {
  const currentPage = usePathname();

  return (
    <section  className="mt-[85px]">
      <SectionHeader currentPage={currentPage} />
      <ShopSettings />

      <OurProducts />
    </section>
  );
}

export default Shop;
