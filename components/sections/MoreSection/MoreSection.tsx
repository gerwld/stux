"use client"
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import ProductBlock from "@/components/ProductBlock/ProductBlock";
import { Product, products } from "@/app/[locale]/products/preloaded";
import {Link} from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".ctt>*").forEach((group, index) => {
      if (!(group instanceof HTMLElement)) return;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: group,
            start: `top-=${index * 180} 80%`,
            end: `bottom+=200 20%`,
            scrub: 2,
            // markers: true,
          },
        })
        .fromTo(
          group,
          { scale: 0.8, opacity: 0, x: 500 },
          { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power2.out" }
        )
        .to(group, { opacity: 0, y: -100, duration: 1, ease: "power2.in" });
    });
  }, [data]); 
  

  return (
    <section className={`content_wrapper ${style.section}`}>
      <SectionHeader
        title={t("MoreSection.header.title")}
        desc={t("MoreSection.header.description")}
        dashTitle={t("MoreSection.header.dash")}
        parentClassName={style.header_gap}
      />
      <div className={clsx("ctt", style.content)}>
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
