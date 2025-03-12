"use client"
import React from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/[locale]/products/preloaded";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import clsx from "clsx";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export interface TestimonialBlock {
  iconUrl: string,
  name: string,
  desc: string
}

const TestimonialSection:React.FC<{productAlias: Product["alias"], isMainPage?: boolean}> = ({productAlias, isMainPage}) => {
  const t = useTranslations();
  const ITEM = products.find((p) => p.alias === productAlias);
  const TESTIMONIALS = ITEM?.details.preview_reviews;

  useGSAP(() => {

    gsap.utils.toArray<HTMLElement>(".bblock").forEach((group, index) => {
      if (!(group instanceof HTMLElement)) return;
    
      gsap.timeline({
        scrollTrigger: {
          trigger: group,
          start: `top-=${index * 150} 80%`, // Offset each group’s start
          end: `bottom+=${index * 150} 20%`, // Adjust exit timing
          scrub: 2,
          // markers: true
        }
      })
      .fromTo(
        group, // то что появляется (от и до)
        { scale: 0.8, opacity: 0, y: 50 }, 
        { scale: 1, opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      )
      .to(
        group,  // то что на end - завершение
        { opacity: 0, y: -100, duration: 1, ease: "power2.in" }
      );
    });
    

  //  RELATED TO SCROLL APPEAR ONE BY ONE - PERFECT
  //   gsap.timeline({
  //     scrollTrigger: {
  //         trigger: "#testimonial-section",
  //         start: "-40 bottom", // Starts when the section enters the viewport
  //         end: "-40 top",
  //         scrub: 10, // Smooth scrolling effect (scrub)
  //         markers: true
  //     }
  // })
  // .from(".tblock", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 1, // Slower for a smooth effect
  //     stagger: 0.3, // Delays each block's appearance
  //     ease: "power2.out"
  // });
  
      //  RELATED TO SCROLL APPEAR NO SCRUB
  //   gsap.from(".bblock", {
  //     opacity: 0,
  //     y: 50,
  //     duration: 0.6,
  //     stagger: 0.3, // Delay between each block
  //     ease: "power2.out",
  //     scrollTrigger: {
  //         trigger: "#testimonial-section",
  //         start: "top 80%", // Triggers when the section is 80% in view
  //         toggleActions: "play none none reverse", // Reverse on scroll-up
  //         markers: true
  //     }
  // });
  
       //  OTHER
  //   gsap.timeline({
  //     scrollTrigger: {
  //         trigger: "#cl",
  //         start: "top center",
  //         toggleActions: "play none none reverse", // Play on enter, reverse on leave back
  //         markers: true
  //     }
  // })
  // .to('.jblock_icon', { scale: 1.1, translateY: -10, duration: 0.3, ease: "power2.inOut" }) // Scale up
  // .to('.jblock_icon', { 
  //     x: 5, 
  //     duration: 0.1, 
  //     repeat: 5, 
  //     yoyo: true, 
  //     ease: "power1.inOut" 
  // }) // Shake
  
       //  OTHER 2
  //   gsap.to('.jblock_icon', {
  //     scale: 1.2,
  //     translateY: -10,
  //     duration: 0.5,
  //     ease: "power2.inOut",
  //     scrollTrigger: {
  //         trigger: "#cl",
  //         start: "top center",
  //         toggleActions: "play none none reverse", // Plays on enter, reverses on leave back
  //         // markers: true
  //     }
  // });
  
  })

  if (!TESTIMONIALS) return null;

  const COLUMNS_COUNT = 3;
  const PER_COLUMN = Math.ceil(TESTIMONIALS.length / COLUMNS_COUNT);

  const columnsWithContent = Array.from({ length: COLUMNS_COUNT }, (_, i) => {
    const lastIndex = PER_COLUMN * (i + 1);
    const firstIndex = PER_COLUMN * i;
    
    const columnPosts = TESTIMONIALS.slice(firstIndex, lastIndex); // gets posts for this column



    return (
    <div className={clsx(style.column, "bblock")} key={`tscolumn_${i}`}>
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
      <div className={style.content} id="testimonial-section">
        {columnsWithContent}
      </div>
    </section>
  );
};

export default TestimonialSection;
