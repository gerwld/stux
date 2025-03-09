"use client"
import React from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/[locale]/products/preloaded";
import { useTranslations } from "next-intl";

export interface TestimonialBlock {
  iconUrl: string,
  name: string,
  desc: string
}

const TestimonialSection:React.FC<{productAlias: Product["alias"], isMainPage?: boolean}> = ({productAlias, isMainPage}) => {
  const t = useTranslations();
  const ITEM = products.find((p) => p.alias === productAlias);
  const TESTIMONIALS = ITEM?.details.preview_reviews;

  if (!TESTIMONIALS) return null;

  const COLUMNS_COUNT = 3;
  const PER_COLUMN = Math.ceil(TESTIMONIALS.length / COLUMNS_COUNT);

  const columnsWithContent = Array.from({ length: COLUMNS_COUNT }, (_, i) => {
    const lastIndex = PER_COLUMN * (i + 1);
    const firstIndex = PER_COLUMN * i;
    
    const columnPosts = TESTIMONIALS.slice(firstIndex, lastIndex); // gets posts for this column

    return (
    <div className={style.column} key={`tscolumn_${i}`}>
      {columnPosts.map(tsm => {
       const index = TESTIMONIALS.indexOf(tsm);
       return <Block 
          key={tsm.author} 
          author={tsm.author} 
          avatarUrl={tsm.avatarUrl} 
          description={
            t(`PRODUCTS.${productAlias}.preview_reviews.${index}.description`) == `PRODUCTS.${productAlias}.preview_reviews.${index}.description` 
            ? tsm.description
            : t(`PRODUCTS.${productAlias}.preview_reviews.${index}.description`)} 
        />
      }
        )}
    </div>)
  })

  return (
    <section className="content_wrapper">
      <SectionHeader
        title={isMainPage ? t("TestimonialSection.header.title") : t("TestimonialSection.header.title_product") + " " + ITEM.title.split(" ")[0]}
        desc={isMainPage ? t("TestimonialSection.header.description") : t("TestimonialSection.header.description_product")}
        dashTitle={t("TestimonialSection.header.dash")}
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
        {columnsWithContent}
      </div>
    </section>
  );
};

export default TestimonialSection;
