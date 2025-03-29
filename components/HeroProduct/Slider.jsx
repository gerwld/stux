import React from "react";
import EmblaCarousel from "../carousel/EmblaCarousel";
import { HeroTestimonial } from "./HeroProduct";
import { products } from "@/app/[locale]/products/preloaded";
import { useLocale } from "next-intl";
import blurData from "@/public/blurData.json"; // Import blur data
import BlurImage from "./BlurImage"; // Import the Client Component

const Slider = async ({ productAlias }) => {
  let locale = useLocale();
  const ITEM = products.find((p) => p.alias === productAlias);
  const IS_VERTICAL_SLIDE = ITEM.productType === "APPLICATION";
  const OPTIONS = { dragFree: false, loop: true };
  const SLIDES_LOCALE = ITEM?.details.available_slides_locales?.includes(locale)
    ? locale
    : "en";

  const formatter = new Intl.NumberFormat("fr-FR");
  const formattedTestimonial = ITEM?.details?.stats
    ? {
        users: formatter.format(ITEM.details.stats.users),
        reviews: formatter.format(ITEM.details.stats.reviews),
        rating: ITEM.details.stats.rating.toFixed(2),
      }
    : null;

  const SLIDES = Array.from({ length: ITEM?.details.slides_count }).map((_, i) => {
    const src = `/images/previews/${productAlias}/${SLIDES_LOCALE}/${i}.png`;
    const blurDataURL = blurData[`${productAlias}/${SLIDES_LOCALE}/${i}.png`] || "";

    return (
      <BlurImage
        key={i}
        src={src}
        width={IS_VERTICAL_SLIDE ? 240 : 495}
        height={IS_VERTICAL_SLIDE ? 416 : 317}
        blurDataURL={blurDataURL}
        alt="Product image"
      />
    );
  });

  return (
    <EmblaCarousel
      slides={SLIDES}
      options={OPTIONS}
      isVertical={IS_VERTICAL_SLIDE}
      embededItem={
        formattedTestimonial ? (
          <HeroTestimonial
            users={formattedTestimonial.users}
            reviews={formattedTestimonial.reviews}
            rating={formattedTestimonial.rating}
            isMobile={true}
          />
        ) : (
          ""
        )
      }
    />
  );
};

export default Slider;
