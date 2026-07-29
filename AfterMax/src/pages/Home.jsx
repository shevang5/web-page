import React from 'react'
import HeroSection from '../components/HeroSection'
import Marquee from '../components/Marquee'
import Problem from '../components/Problem'
import Services from '../components/Services'
import HowItWorks from '../components/Howitworks'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import PricingSection from '../components/PricingSection'


const home = () => {
  return (
    <div>
      <HeroSection  />
      <Marquee />
      <Problem />
      <Services />
      <PricingSection />
      <HowItWorks />
      <FAQ  />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default home
