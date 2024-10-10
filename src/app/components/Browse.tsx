'use client'
import axios from 'axios';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react'

function Browse() {
    const [browseData, setBrowseData] = useState([]);
  useEffect(() => {
    axios("https://dummyjson.com/products?limit=3").then((res) =>
      setBrowseData(res.data.products)
    );
  }, []);
  const t = useTranslations("IndexPage");
  return (
    <section className="my-[58px] text-center">
        <h1 className="heading text-3xl font-bold">{t('browse.title')}</h1>
        <p className="text-gray_600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-[62px] flex justify-center gap-[20px]">
          {browseData?.map((item) => (
            <div key={item.id} className="flex flex-col gap-[30px]">
              <div className="bg-gray_500 rounded-md">
                <img
                  className="w-[341px] h-[480px] object-contain"
                  src={item.images[0]}
                />
              </div>
              <h1 className="font-semibold text-center text-[24px] leading-[36px]">{(item.title).substring(0, 6)}...</h1>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Browse