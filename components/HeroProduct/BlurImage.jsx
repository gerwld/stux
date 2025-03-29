"use client";

import { useState } from "react";
import Image from "next/image";

const BlurImage = ({ src, width, height, blurDataURL, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="image-container">
      <Image
        src={src}
        width={width}
        height={height}
        quality={80}
        alt={alt}
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority
        className={`main-image ${isLoaded ? "loaded" : ""}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className={`blur-overlay ${isLoaded ? "hidden" : ""}`}></div>
    </div>
  );
};

export default BlurImage;
