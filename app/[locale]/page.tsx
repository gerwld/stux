"use client"
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import CTASection from '@/components/sections/CTASection/CTASection'
import JourneySection from '@/components/sections/JourneySection/JourneySection'
import TestimonialSection from '@/components/sections/TestimonialSection/TestimonialSection'
import React from 'react'

export function generateStaticParams() {
  return [
    { locale: 'ar' },
    { locale: 'be' },
    { locale: 'de' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'hi' },
    { locale: 'ja' },
    { locale: 'nl' },
    { locale: 'pl' },
    { locale: 'pt' },
    { locale: 'ru' },
    { locale: 'sp' },
    { locale: 'sv' },
    { locale: 'uk' },
    { locale: 'zh' }
  ];
}

const MainPage = () => {
  
  return (
    <>
    <Hero/>
    <main>
    <JourneySection/>
    <TestimonialSection productAlias='IGPLUS' isMainPage={true}/>
    <CTASection/>
    </main>
    <Footer/>
    </>
  )
}

export default MainPage