"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import style from "./style.module.css";
import Block from "./Block";

export interface FeaturesBlock {
  iconUrl: string,
  name: string,
  desc: string
}

const FeaturesSection = () => {
  const [posts] = useState<FeaturesBlock[]>([
    { name: 'Hide <br>Explore Page', iconUrl: '/images/features/look.png', desc: 'Turn off the Explore page to focus only on the content that matters to you.'},
    { name: 'Hide <br>Recommendations', iconUrl: '/images/features/point.png',  desc: 'See only content from accounts you follow - no more unwanted suggestions'},
    {name: 'Personalize <br>Fonts', iconUrl: '/images/features/fonts.png', desc: 'Choose from various fonts like Montserrat, Poppins, and more to suit your style.'},
    { name: 'Customize <br>Notifications', iconUrl: '/images/features/list.png', desc: 'Grayscale or disable the new message counter to reduce distractions.'},
    { name: 'Disable <br>Reels & Videos', iconUrl: '/images/features/camera.png', desc: 'Disable Reels and video content for a cleaner, distraction-free experience.'},
    { name: 'Hide Like <br>& Follower Counts', iconUrl: '/images/features/heart.png', desc: 'Make Instagram a more mindful space by hiding likes and follower numbers.'},
  ])

  return (
    <section className="content_wrapper">
      <SectionHeader
        title="Explore it Amazing Features"
        desc="Some of the key features that you might find useful"
        dashTitle="features"
        parentClassName={style.header_gap}
      />
      <div className={style.content}>
        {posts.map(post => <Block key={post.name} name={post.name} iconUrl={post.iconUrl} desc={post.desc} />)}
      </div>
    </section>
  );
};

export default FeaturesSection;
