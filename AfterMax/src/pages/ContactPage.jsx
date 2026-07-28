import React from 'react'
import Contact from '../components/Contact'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#2748d9] via-[#eaf1ff] to-[#ffffff]">
        <Navbar />
      <Contact />
      <CTA />
      <Footer />
    </div>
  )
}

export default ContactPage
