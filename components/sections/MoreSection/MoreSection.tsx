"use client"
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import ProductBlock, { Product } from "@/components/items/ProductBlock/ProductBlock";
import { products } from "@/app/products/preloaded";
import Link from "next/link";

const getRandomItems = (array: Product[], count: number, excludeTitle: string) => {
  const filteredArray = array.filter(item => item.title !== excludeTitle);
  const shuffled = [...filteredArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MoreSection:React.FC<{ excludeTitle: string }> = ({excludeTitle}) => {

  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    setData(getRandomItems(products, 3, excludeTitle)); // 3 random products in "Other Extensions" section
  }, []);
  
  return (
    <section className={`content_wrapper ${style.section}`}>
      <SectionHeader
        title="Other Extensions"
        desc="Maximize your productivity and streamline your web usage"
        dashTitle="even more"
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
      {data.map((p) => (
            <ProductBlock
              key={p.logoSrc}
              logoSrc={p.logoSrc}
              desc={p.desc}
              title={p.title}
              url={p.url}
            />
          ))}
      </div>
      <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>Explore All Products</Link>
        </div>
    </section>
  );
};

export default MoreSection;
