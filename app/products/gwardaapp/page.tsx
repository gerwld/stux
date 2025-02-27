"use client";
import Footer from "@/components/Footer/Footer";
import React from "react";
import CTASection from "@/components/sections/CTASection/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection";
import HeroProduct from "@/components/HeroProduct/HeroProduct";
import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";
import MoreSection from "@/components/sections/MoreSection/MoreSection";

const GWPage = () => {
  const PRODUCT_KEY:string = "GWARDAAPP";

  return (
    <div>
      <HeroProduct productAlias={PRODUCT_KEY}/>
      <main>
        <FeaturesSection productAlias={PRODUCT_KEY}/>
        <TestimonialSection productAlias={PRODUCT_KEY}/>
        <MoreSection excludeAlias={PRODUCT_KEY}/>
        <CTASection/>
      </main>
      <Footer productAlias={PRODUCT_KEY}/>
    </div>
  );
};

export default GWPage;
