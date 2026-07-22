import React from 'react'
import HeroSection from '../components/HeroSection'
import Problem from '../components/Problem'
import Services from '../components/Services'
import HowItWorks from '../components/Howitworks'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

const home = () => {
  return (
    <div>
      <HeroSection  />
      <Problem />
      <Services />
      <Pricing />
      <HowItWorks />
      <FAQ  />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default home
