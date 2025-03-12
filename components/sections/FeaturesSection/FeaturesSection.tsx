"use client";
import React from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/[locale]/products/preloaded";
import { useTranslations } from "next-intl";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export interface FeaturesBlock {
  iconUrl: string;
  title: string;
  desc: string;
}

const FeaturesSection: React.FC<{ productAlias: Product["alias"] }> = ({
  productAlias,
}) => {
  const t = useTranslations();
  const ITEM = products.find((p) => p.alias === productAlias);
  const FEATURES = ITEM?.details.preview_features;

  useGSAP(() => {

    gsap.utils.toArray<HTMLElement>(".glblock").forEach((group) => {
      if (!(group instanceof HTMLElement)) return;
    
      gsap.timeline({
        scrollTrigger: {
          trigger: group,
          start: `top-=180 80%`, // Offset each group’s start
          end: `bottom+=200 20%`, // Adjust exit timing
          scrub: 2,
          // markers: true
        }
      })
      .fromTo(
        group, // то что появляется (от и до)
        { scale: 0.8, opacity: 0, x: 0 }, 
        { scale: 1, opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      )
      .to(
        group,  // то что на end - завершение
        { opacity: 0, y: -100, duration: 1, ease: "power2.in" }
      );
    });
    
  })

 

  if (!FEATURES) return null;
  return (
    <section className="content_wrapper">
      <SectionHeader
        title={t("FeaturesSection.header.title")}
        desc={t("FeaturesSection.header.description")}
        dashTitle={t("FeaturesSection.header.dash")}
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
        {FEATURES.map((post, i) => {
          const tr = {
            title: t(`PRODUCTS.${productAlias}.preview_features.${i}.title`),
            description: t(`PRODUCTS.${productAlias}.preview_features.${i}.description`)
          }
         return <Block
            key={post.title}
            title={tr.title == `PRODUCTS.${productAlias}.preview_features.${i}.title` ? post.title : tr.title}
            icon={post.icon}
            description={tr.description == `PRODUCTS.${productAlias}.preview_features.${i}.description` ? post.description : tr.description}
          />
    })}
      </div>
    </section>
  );
};

export default FeaturesSection;
