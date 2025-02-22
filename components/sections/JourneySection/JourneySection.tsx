"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/HeaderSection/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";

export interface JourneyBlock {
  iconUrl: string,
  value: string,
  desc: string
}

const JourneySection = () => {
  const [posts, setPosts] = useState<JourneyBlock[]>([
    {desc:'Active weekly users', value: '30 000+', iconUrl: '/icons/jos/1.svg'},
    {desc:'Monthly Installations', value: '4k+', iconUrl: '/icons/jos/2.svg'},
    {desc:'User reviews', value: '2200+', iconUrl: '/icons/jos/3.svg'},
    {desc:'Resolved Github issues', value: '50+', iconUrl: '/icons/jos/4.svg'},
  ])
  return (
    <section>
      <SectionHeader
        title="Our Journey of User Engagement"
        desc="Enhancing Digital Experiences Through User-Centric Innovations"
        dashTitle="journey"
      />
      <div className={style.content}>
        {posts.map(post => <Block key={post.iconUrl} desc={post.desc} iconUrl={post.iconUrl} value={post.value}/>)}
      </div>
    </section>
  );
};

export default JourneySection;
