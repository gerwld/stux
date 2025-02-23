"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";

export interface TestimonialBlock {
  iconUrl: string,
  name: string,
  desc: string
}

const TestimonialSection = () => {
  const [posts] = useState<TestimonialBlock[]>([
    { name: 'ZachHere', iconUrl: '/images/pfp/1.jpg', desc:'Very good extension. I like the ability to grayscale. One feature that would make this extension better would be the ability to disable suggested posts from the main page. They are very bothering for me'},
    { name: 'Barbora Viski', iconUrl: '/images/pfp/2.jpg', desc:'Hate falling into the shortform content trap.<br> Love the apps that allow me to forget it exists.'},
    {name: 'Cristiano Nunes', iconUrl: '/images/pfp/3.jpg', desc:'This extension is incredibly useful! It has significantly improved my productivity by removing unnecessary distractions, helping focus on what truly matters.'},
    { name: 'Akram Mohamed', iconUrl: '/images/pfp/4.jpg', desc:'Very good extension. The best and most affective one! Love all the features! Would request a similar for youtube as well'},
    { name: 'Martin Hublar', iconUrl: '/images/pfp/5.jpg', desc:'It really is an time saver, it is especially good for those people who drift off to reels section from message section unconsciously.'},
    { name: 'Cailan Wiat', iconUrl: '/images/pfp/6.jpg', desc:"This extension was a perfect investment for me, i have instagram for its intended inspiration purpose and that's it i never spend more than 30 mins a week on the app and i don't have to battle the need to be on it anymore its incredible."},
  ])

  const COLUMNS_COUNT = 3;
  const PER_COLUMN = Math.ceil(posts.length / COLUMNS_COUNT);

  const columnsWithContent = Array.from({ length: COLUMNS_COUNT }, (_, i) => {
    const lastIndex = PER_COLUMN * (i + 1);
    const firstIndex = PER_COLUMN * i;
    
    const columnPosts = posts.slice(firstIndex, lastIndex); // gets posts for this column

    return (
    <div className={style.column} key={`tscolumn_${i}`}>
      {columnPosts.map(post => <Block key={post.name} name={post.name} iconUrl={post.iconUrl} desc={post.desc} />)}
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
