import { useEffect } from "react";
import Lenis from "lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.5, // Adjust this for slower scrolling (higher value = slower)
        // easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing for smoother effect
        smoothWheel: true,
        wheelMultiplier: 0.5, // Lower this to reduce wheel scroll speed
        touchMultiplier: 1, // Adjust for touch devices if needed
    });

    function update(time: number) {
      lenis.raf(time);
      requestAnimationFrame(update);
    }

    requestAnimationFrame(update);

    return () => {
      lenis.destroy();
    };
  }, []);
}
