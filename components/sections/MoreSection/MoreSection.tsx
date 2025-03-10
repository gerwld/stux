"use client"
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import ProductBlock from "@/components/ProductBlock/ProductBlock";
import { Product, products } from "@/app/[locale]/products/preloaded";
import {Link} from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const getRandomItems = (
  array: Product[], 
  count: number, 
  excludeAlias: Product["alias"], 
  excludeType: Product["productType"]
) => {
  const filteredArray = array.filter(item => item.alias !== excludeAlias && item.productType !== excludeType);
  const shuffled = [...filteredArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const MoreSection:React.FC<{ excludeAlias: string }> = ({excludeAlias}) => {
  const t = useTranslations();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {    
    setData(getRandomItems(products, 3, excludeAlias, "APPLICATION")); // 3 random products in "Other Extensions" section
  }, [excludeAlias]);
  
  return (
    <section className={`content_wrapper ${style.section}`}>
      <SectionHeader
        title={t("MoreSection.header.title")}
        desc={t("MoreSection.header.description")}
        dashTitle={t("MoreSection.header.dash")}
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
      {data.map((p) => (
            <ProductBlock
              id={p?.id}
              key={p.logoSrc}
              logoSrc={`/images/logos/${p.alias}.svg`}
              desc={p.desc}
              title={p.title}
              alias={p.alias}
              details={p.details}
              productType={p.productType}
            />
          ))}
      </div>
      <div className={style.btn_sect}>
          <Link href="/products" className={style.btn_1}>{t("global.explore_btn")}</Link>
        </div>
    </section>
  );
};

export default MoreSection;
