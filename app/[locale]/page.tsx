"use client"
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import CTASection from "@/components/sections/CTASection/CTASection";
import JourneySection from "@/components/sections/JourneySection/JourneySection";
import TestimonialSection from "@/components/sections/TestimonialSection/TestimonialSection";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Hero />
      <main className="main-page">
        <JourneySection />
        <TestimonialSection productAlias="IGPLUS" isMainPage={true} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
