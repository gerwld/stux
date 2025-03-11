"use client"
import React, { useState } from "react";
import SectionHeader from "@/components/sections/SectionHeader/SectionHeader";
import { useTranslations } from "next-intl";
import style from "./style.module.css";
import Block from "./Block";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";

export interface JourneyBlock {
  iconUrl: string,
  value: string,
  desc: string,
  n18: string
}


gsap.registerPlugin(ScrollTrigger);

const JourneySection = () => {


useGSAP(() => {

  //  RELATED TO SCROLL APPEAR ONE BY ONE - PERFECT
    gsap.timeline({
        scrollTrigger: {
            trigger: "#cl",
            start: "-20 bottom", // Starts when the section enters the viewport
            end: "-20 top",
            scrub: 1, // Smooth scrolling effect (scrub)
            // markers: true
        }
    })
    .from(".jblock", {
        opacity: 0,
        y: 50,
        duration: 1, // Slower for a smooth effect
        stagger: 0.3, // Delays each block's appearance
        ease: "power2.out"
    });


    //  RELATED TO SCROLL APPEAR NO SCRUB
//   gsap.from(".jblock", {
//     opacity: 0,
//     y: 50,
//     duration: 0.6,
//     stagger: 0.3, // Delay between each block
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: "#cl",
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
      <div
      className={clsx(style.content, "cl")} id="cl">
        {posts.map(post => <Block key={post.iconUrl} desc={post.desc} n18={post.n18} iconUrl={post.iconUrl} value={post.value}/>)}
      </div>
    </section>
  );
};

export default JourneySection;
