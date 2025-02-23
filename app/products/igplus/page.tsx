"use client";
import Footer from "@/components/Footer/Footer";
import React from "react";
import CTASection from "@/components/sections/CTASection/CTASection";
import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection";
import HeroProduct from "@/components/HeroProduct/HeroProduct";
import FeaturesSection from "@/components/sections/FeaturesSection/FeaturesSection";

const IGPlusPage = () => {

  return (
    <div className="schema-purple">
      <HeroProduct/>
      <main>
        <FeaturesSection/>
        <TestimonialSection/>
        <CTASection/>
      </main>
      <Footer />
    </div>
  );
};

export default IGPlusPage;
