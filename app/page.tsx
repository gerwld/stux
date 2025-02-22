import Hero from '@/components/Hero/Hero'
import JourneySection from '@/components/sections/JourneySection/JourneySection'
import TestimonialSection from '@/components/sections/TestimonialSection/TestimonialSection'
import React from 'react'

const MainPage = () => {
  return (
    <>
    <Hero/>
    <main>
    <JourneySection/>
    <TestimonialSection/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default MainPage