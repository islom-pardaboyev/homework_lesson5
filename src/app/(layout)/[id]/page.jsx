"use client";
import { Rate } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function About({ params }) {
  const [singleData, setSingleData] = useState([]);

  useEffect(() => {
    axios(`https://dummyjson.com/products/${params.id}`).then((res) =>
      setSingleData([res.data])
    );
  }, [params.id]);
  console.log(singleData);

  return (
    <section className="my-[105px]">
      <div className="container grid grid-cols-12 gap-[105px]">
        <div className="col-span-6 grid grid-cols-12 gap-[31px]">
          <div className="flex items-center gap-8 col-span-2 flex-col">
            {singleData[0]?.reviews.map((_, index) => (
              <img
                key={index}
                className="rounded-[10px] bg-primary"
                src={singleData[0].images[0]}
              />
            ))}
          </div>
          <div className="col-span-10 bg-primary w-fit">
            <img src={singleData[0]?.images[0]} className="h-[500px]" alt="" />
          </div>
        </div>
        <div className="col-span-6">
          {singleData.map((item, index) => (
            <div key={index}>
              <h1 className="text-[42px] leading-[63px]">{item.title}</h1>
              <p className="text-gray font-medium text-2xl">
                Rs. <span>{item.price}</span>
              </p>
              <div className="flex items-center space-x-[22px]">
                <Rate disabled defaultValue={item.rating} />
                <span className="w-[2px] h-[30px] bg-gray"></span>
                <p className="text-[13px] text-gray">{item.reviews.length} Customer Review</p>
              </div>
              <p className="w-[424px] mt-[13px]">{item.description}</p>
              <span className="w-full h-px block bg-gra mt-[60px] mb-[41px]"></span>
              <div className="flex flex-col space-y-3 text-gray">
                <p className="capitalize">Category: {item.category}</p>
                <p className="capitalize">Tags: {item.tags?.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
