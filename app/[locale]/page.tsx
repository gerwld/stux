"use client"
import Footer from '@/components/Footer/Footer'
import Hero from '@/components/Hero/Hero'
import CTASection from '@/components/sections/CTASection/CTASection'
import JourneySection from '@/components/sections/JourneySection/JourneySection'
import TestimonialSection from '@/components/sections/TestimonialSection/TestimonialSection'
import { useTranslations } from 'next-intl'
import React from 'react'

const MainPage = () => {
  const t = useTranslations('HomePage');
  return (
    <>
    {t("title")}
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