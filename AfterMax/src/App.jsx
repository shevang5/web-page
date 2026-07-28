import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/portfolio" element={<PortfolioPage  />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
