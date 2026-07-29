import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

const byPrefixAndName = {
  fas: {
    globe: faGlobe,
  },
};

const ServicesPage = () => {

    
  return (
    <div 
      className="bg-white text-gray-900 min-h-screen selection:bg-blue-500 selection:text-white"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >

        <Navbar/>
      {/* Google Font and SEO tags should be added in index.html or via a head manager like react-helmet */}

      {/* ------------------- HERO BANNER ------------------- */}
      <header className="relative flex min-h-[100vh] w-full md:items-top bg-[url('/images/services_hero.png')] bg-gradient-to-b from-[#2748d9] via-[#eaf1ff] to-[#ffffff] bg-cover bg-bottom font-sans  text-white overflow-hidden px-6 py-0 md:px-12 md:py-10 lg:px-10">
        
        {/* Abstract 3D Blue Waves Effect (Recreating visual from services.jpg) */}
        {/* <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
            <ellipse cx="900" cy="100" rx="600" ry="250" stroke="#6699ff" strokeWidth="40" className="blur-md" />
            <ellipse cx="900" cy="180" rx="650" ry="280" stroke="#00d4ff" strokeWidth="20" />
            <ellipse cx="900" cy="260" rx="700" ry="320" stroke="#0033ff" strokeWidth="30" />
            <ellipse cx="900" cy="340" rx="750" ry="360" stroke="#80b3ff" strokeWidth="15" />
          </svg>
        </div> */}

         

        <div className="relative z-10  w-full pt-0 md:pt-0  px-6 py-12 text-center md:text-center  md:py-16 lg:px-80">
          <span className="inline-block border border-white/40 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-md mt-28 md:mt-0">
            What We Do
          </span>
          <h1 className="text-5xl pt-0 md:pt-0 text-white md:text-7xl lg:text-8xl font-['Archivo'] tracking-tight leading-none mb-6">
            Our Services
          </h1>
          <div className="">
            <h2 className="text-xl md:text-2xl mx-auto font-bold text-blue-100 mb-3">
              We Don't Just Build Websites. We Solve Real Business Problems.
            </h2>
            <p className="text-blue-100/90 shadow-stone-500 text-xs md:text-base leading-relaxed">
              Every service we offer exists to fix a specific problem that's costing your business time or money.<br/> No fluff, no bloat — just focused solutions that work.
            </p>
          </div>
        </div>
      </header>
      <Marquee/>

      {/* ------------------- SERVICES CONTENT CONTAINER ------------------- */}
      <main className="max-w-[1200px] mx-auto flex flex-col gap-20 py-12 md:py-16 bg-[#ffff] text-slate-800">

      {/* ================= SERVICE 1 ================= */}
      <section className="p-10 bg-[#aad4fd] shadow-2xl shadow-slate-400  rounded-2xl border-b border-slate-200">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-slate-200/60 gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-0.5 rounded-full">
              01 &middot; Web Development
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
              Websites
            </h2>
          </div>
          <p className="text-base md:text-lg font-semibold text-slate-500">
            Design & Development
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Websites That Work as Hard as You Do.
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                A beautiful website means nothing if it doesn't bring in customers. Every site we build is fast, mobile-friendly, and optimized for Google from day one — so new clients can actually find you when they search for your service.
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-2">
              <p className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Starting at $299 &middot; <span className="text-slate-500 font-normal">Delivered in 7 days</span>
              </p>
              <a 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group"
              >
                Book a Free Zoom Call 
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: What's Included Card */}
          <div className="lg:col-span-5 bg-[#ffeea1] p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-red-500  uppercase tracking-wider mb-6">
                What's included:
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Up to 5–8 pages <span className="text-blue-800 font-normal">(Home, About, Services, Portfolio, Contact)</span></span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Mobile-first responsive design</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Contact and lead capture forms</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Local SEO basics — Google-ready from launch</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Fast load speed optimized</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pt-1 flex items-start justify-between gap-3 font-semibold text-slate-900">
                  <span>You own it fully — no monthly fees to us</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* ================= SERVICE 2 ================= */}
      <section className="p-10 bg-[#aad4fd] rounded-2xl shadow-2xl border-b border-slate-200">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-slate-200/60 gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-0.5 rounded-full">
              02 &middot; Booking System
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
              Booking System
            </h2>
          </div>
          <p className="text-base md:text-lg font-semibold text-slate-500">
            Online Booking System & Admin Panel
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Stop Losing Clients Through Your DMs.
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                If your bookings are managed through Instagram DMs or phone calls, you're losing leads every single day — missed messages, no-shows, hours wasted on the same questions. A smart booking system fixes all of this automatically.
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-2">
              <p className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Starting at $249 &middot; <span className="text-slate-500 font-normal">Delivered in 7 days</span>
              </p>
              <a 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group"
              >
                Book a Free Zoom Call 
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: What's Included Card */}
          <div className="lg:col-span-5 bg-[#fac8c8] p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-red-500  uppercase tracking-wider mb-6">
                What's included:
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Custom booking request form on your website</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Deposit collection upfront — kills no-shows instantly</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Automatic email or SMS notification when someone books</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>FAQ section to answer common questions automatically</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Mobile-friendly booking on any device</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pt-1 flex items-start justify-between gap-3 font-semibold text-slate-900">
                  <span>Integrated into your existing or new website</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* ================= SERVICE 3 ================= */}
      <section className="p-10 bg-[#aad4fd] rounded-2xl shadow-2xl border-b border-slate-200">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-slate-200/60 gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-0.5 rounded-full">
              03 &middot; Redesign
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
              Redesign
            </h2>
          </div>
          <p className="text-base md:text-lg font-semibold text-slate-500">
            Website Redesign & Speed Optimization
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Your Website Should Match the Quality of Your Work.
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                An outdated or slow website is doing more damage than having no website at all. Customers judge your business in seconds — if your site looks old, unprofessional, or is hard to use on mobile, they leave and book someone else. We rebuild it from the ground up.
              </p>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-2">
              <p className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
                Starting at $199 &middot; <span className="text-slate-500 font-normal">Delivered in 7 days</span>
              </p>
              <a 
                href="#contact" 
                className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-sm px-6 py-3 rounded-lg shadow-sm hover:shadow transition-all inline-flex items-center gap-2 group"
              >
                Book a Free Zoom Call 
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: What's Included Card */}
          <div className="lg:col-span-5 bg-[#d5bfe9] p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-6">
                What's included:
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Full redesign of all existing pages</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Modern, clean design that reflects your brand</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Mobile-first rebuild — 80% of visitors are on phones</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Faster load speed — old sites lose rankings</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Updated portfolio, services, and contact sections</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pt-1 flex items-start justify-between gap-3 font-semibold text-slate-900">
                  <span>Google-optimized so you rank higher than before</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      {/* ================= SERVICE 4 ================= */}
      <section className="p-10 bg-[#aad4fd] rounded-2xl shadow-2xl">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-8 pb-4 border-b border-slate-200/60 gap-2">
          <div className="flex flex-col items-start gap-2">
            <span className="text-[11px] font-bold uppercase tracking-widest text-red-600 bg-red-50 border border-red-100 px-3 py-0.5 rounded-full">
              04 &middot; Graphic Design
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
              Graphic Design
            </h2>
          </div>
          <p className="text-base md:text-lg font-semibold text-slate-500">
            Graphic Design & Branding
          </p>
        </div>

        {/* Main Logo & Branding Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-10">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
                Look Professional Everywhere Your Customers See You.
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                Your brand is more than a website. Every logo, banner, and poster your customers see shapes how they feel about your business. We design graphics that are clean, professional, and built to represent your brand at its best — online and in print.
              </p>

              {/* Digital Studio Notice */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-4 text-xs md:text-sm text-amber-900 mb-6 leading-relaxed">
                <span className="font-bold">⚠️ Digital Studio Notice:</span> Brixweb is a digital design studio. All designs are delivered as high-quality digital files (PNG, PDF, SVG, JPG). We do not handle printing, shipping, or physical production.
              </div>
            </div>

            {/* Logo Highlight Card */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 w-full shadow-sm">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-bold text-slate-900">🎨 Logo Design</h4>
                <span className="text-xl md:text-xl font-bold text-red-600">Starting at $80</span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-3">
                Your logo is the face of your business. We create custom logos that are clean, bold, and memorable — built specifically for your brand, not pulled from a template library.
              </p>
              <p className="text-xs font-semibold text-slate-400">
                Turnaround: 3–5 days
              </p>
            </div>
          </div>

          {/* Right Column: Logo Included Card */}
          <div className="lg:col-span-5 bg-[#96e0ce] p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold text-red-500  uppercase tracking-wider mb-6">
                Logo Design Included:
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs md:text-sm text-slate-700 font-medium">
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>3 unique logo concepts to choose from</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>2 rounds of revisions on your chosen concept</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Final files in all formats — PNG, SVG, PDF, JPG</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pb-3 border-b border-slate-100 flex items-start justify-between gap-3">
                  <span>Black, white, and full color versions</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
                <li className="pt-1 flex items-start justify-between gap-3 font-semibold text-slate-900">
                  <span>Ready for web, social media, and print use</span>
                  <span className="text-red-600 font-bold">✓</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Sub-cards Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Banner Design Box */}
          <div className="border border-slate-200/80 rounded-2xl p-6 md:p-8 bg-white hover:border-red-200 transition-colors shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-xl font-bold text-slate-900">
                  Banner Design
                </h4>
                <span className="text-xl md:text-xl font-bold text-red-600">Starting at $40 / banner</span>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                Whether it's a website header, a social media banner, or a print-ready file for a local event — your banner needs to grab attention in under 2 seconds. We design bold, clear banners that communicate instantly.
              </p>

              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                What's included:
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-600 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> 1 banner design in your chosen size & format</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> 1 round of revisions</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Final files in web & print-ready formats</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Sized for whatever platform you need</li>
              </ul>
            </div>
            <p className="text-xs font-bold text-slate-400 border-t border-slate-100 pt-4">
              Turnaround: 1–2 days
            </p>
          </div>

          {/* Poster Design Box */}
          <div className="border border-slate-200/80 rounded-2xl p-6 md:p-8 bg-white hover:border-red-200 transition-colors shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-xl font-bold text-slate-900">
                  Poster Design
                </h4>
                <span className="text-xl md:text-xl font-bold text-red-600">Starting at $50</span>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
                Promote your business, announce an event, or run a seasonal offer with a professionally designed poster that actually gets noticed. Clean layout, strong typography, your branding — ready to share anywhere.
              </p>

              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                What's included:
              </h5>
              <ul className="flex flex-col gap-2.5 text-xs text-slate-600 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> 1 poster design based on your brief</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> 2 rounds of revisions</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Print-ready PDF at full resolution</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Web-optimized PNG for digital use</li>
              </ul>
            </div>
            <p className="text-xs font-bold text-slate-400 border-t border-slate-100 pt-4">
              Turnaround: 2–3 days
            </p>
          </div>

        </div>

      </section>

    </main>

      {/* ------------------- FINAL CTA SECTION ------------------- */}
      <section id="contact" className="bg-[#111111] text-white py-20 px-6 md:px-12 lg:px-16 mt-12">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
            Not Sure Which Service You Need?
          </h2>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-2xl font-normal">
            Book a free 20-minute Zoom call and we'll tell you exactly what your business needs — honestly. No sales pressure, no confusing packages. Just a straight conversation about what will actually make a difference for your business.
          </p>

          <a 
            href="#call" 
            className="bg-[#0052ff] hover:bg-blue-600 text-white text-base md:text-lg font-bold px-9 py-4 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer mb-6 flex items-center gap-2 group"
          >
            Book a Free Zoom Call 
            <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
          </a>

          <p className="text-gray-400 text-xs md:text-sm tracking-wide font-medium uppercase">
            Free call &middot; No commitment &middot; We'll tell you exactly what you need
          </p>

        </div>
      </section>
      <Contact/>
      <Footer />

    </div>
  );
};

export default ServicesPage;
