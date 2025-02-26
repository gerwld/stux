"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/products/preloaded";

export interface TestimonialBlock {
  iconUrl: string,
  name: string,
  desc: string
}

const TestimonialSection:React.FC<{productAlias: Product["alias"]}> = ({productAlias}) => {
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
      {columnPosts.map(tsm => 
        <Block key={tsm.author} 
          author={tsm.author} 
          avatarUrl={tsm.avatarUrl} 
          description={tsm.description} 
        />)}
    </div>)
  })

  return (
    <section className="content_wrapper">
      <SectionHeader
        title="What Our Users Say"
        desc="Our projects receive over 150 reviews every month, with more than 4,000 reviews in total"
        dashTitle="testimonial"
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
        {columnsWithContent}
      </div>
    </section>
  );
};

export default TestimonialSection;
