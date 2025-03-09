"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import { useTranslations } from "next-intl";
import style from "./style.module.css";
import Block from "./Block";

export interface JourneyBlock {
  iconUrl: string,
  value: string,
  desc: string,
  n18: string
}

const JourneySection = () => {
  const t = useTranslations("JourneySection.header");
  const [posts] = useState<JourneyBlock[]>([
    {desc:'Active weekly users', n18:"sect_users", value: '30 000+', iconUrl: '/icons/jos/1.svg'},
    {desc:'Monthly Installations', n18:"sect_install", value: '4k+', iconUrl: '/icons/jos/2.svg'},
    {desc:'User reviews', n18:"sect_reviews", value: '2200+', iconUrl: '/icons/jos/3.svg'},
    {desc:'Resolved Github issues', n18:"sect_gitub_issues", value: '50+', iconUrl: '/icons/jos/4.svg'},
  ])
  return (
    <section>
      <SectionHeader
        title={t("title")}
        desc={t("description")}
        dashTitle={t("dash")}
      />
      <div className={style.content}>
        {posts.map(post => <Block key={post.iconUrl} desc={post.desc} n18={post.n18} iconUrl={post.iconUrl} value={post.value}/>)}
      </div>
    </section>
  );
};

export default JourneySection;
