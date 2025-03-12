import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useLocomotiveScroll() {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const scrollContainer = document.querySelector("[data-scroll-container]") as HTMLElement;
    if (!scrollContainer) {
      console.error("Locomotive Scroll container not found!");
      return;
    }

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 0.6,
      lerp: 0.1,
    });

    // GSAP Sync
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        if (arguments.length) {
          scroll.scrollTo(value, { duration: 0, disableLerp: true });
        }
        return scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: "transform",
    });

    // Sync Locomotive Scroll with GSAP
    scroll.on("scroll", (args) => {
      ScrollTrigger.update();
      gsap.to(".your-target", {
        y: -args.scroll.y,
        ease: "none",
      });
    });

    // Allow time for initialization
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
      ScrollTrigger.kill();
    };
  }, []);

  return scrollRef;
}