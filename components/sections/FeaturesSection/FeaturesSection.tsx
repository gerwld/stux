"use client";
import React from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";
import { Product, products } from "@/app/[locale]/products/preloaded";
import { useTranslations } from "next-intl";

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
