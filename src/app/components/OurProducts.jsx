"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import ProductCard from '../components/ProductCard'


function OurProducts() {
  

  const SHOW_MAX_LIMIT = 8;
  const [products, setProducts] = useState([]);
  const [showLimit, setShowLimit] = useState(SHOW_MAX_LIMIT);
  const [totalProductsCount, setTotalProductsCount] = useState(0);

  useEffect(() => {
    axios(`https://dummyjson.com/products?limit=${showLimit}`).then((res) => {
      setProducts(res.data.products);
      setTotalProductsCount(res.data.total);
    });
  }, [showLimit, totalProductsCount]);

  return (
    <section className="my-[56px] container">
      <h1 className="heading mb-[32px]">Our Products</h1>
      <div className="grid grid-cols-4 gap-8">
        {products?.map((item) => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
      <div className="text-center">
        <Button
          onClickEvent={() =>
            showLimit >= totalProductsCount
              ? setShowLimit(SHOW_MAX_LIMIT)
              : setShowLimit((p) => p + SHOW_MAX_LIMIT)
          }
          styles={
            "text-primary_text_color border border-primary_text_color py-3 px-20 font-semibold mt-8 capitalize"
          }
          title={showLimit >= totalProductsCount ? "show less" : "show more"}
        />
      </div>
    </section>
  );
}

export default OurProducts;
