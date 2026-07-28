import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-[#2748d9] via-[#eaf1ff] to-[#ffffff] text-[#1a1d24] selection:bg-blue-600 selection:text-white"
      style={{ fontFamily: "'Archivo', sans-serif" }}
    >
        <Navbar />
      {/* Google Fonts - Archivo Light & Regular Weights */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* SEO META DATA */}
      <head>
        <title>About Brixweb | Web Design Agency for US Small Businesses</title>
        <meta 
          name="description" 
          content="Brixweb is a web design and development agency focused on helping US small businesses get found online and grow revenue. Learn our story." 
        />
      </head>

      {/* PAGE CONTAINER */}
      <div className="max-w-[1240px] mx-auto px-6 py-12 md:py-40">

        {/* ------------------- HEADER SECTION ------------------- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-normal text-[#e2dcc2] tracking-tight leading-[1.1]">
              Our Story, Vision, <br />
              <span className="font-semibold">and Values</span>
            </h1>
          </div>
          <div className="max-w-md">
            <p className="text-xs md:text-sm text-gray-200 font-light leading-relaxed">
              Learn about our commitment to excellence, speed, and the transparent principles that guide our web development work every day.
            </p>
          </div>
        </div>

        {/* ------------------- HERO ABSTRACT BANNER WITH NOTCH & ICON ------------------- */}
        <div className="relative w-full rounded-[2.5rem] bg-[url('https://images.unsplash.com/photo-1698429894931-fa699270a2fa?q=80&w=1700&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat bg-[#f8f8f8] overflow-hidden shadow-sm mb-16 h-[260px] md:h-[340px]">
          

          {/* Floating Emerald Action Badge */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-[#00c88c] hover:bg-[#00b07a] transition-transform hover:scale-105 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

        {/* ------------------- MIDDLE SECTION: QUOTE & BLUE CARD ------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Story Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-4xl text-gray-300 font-serif leading-none block">“</span>
              <p className="text-gray-700 text-sm md:text-base font-light leading-relaxed pr-2 md:pr-6">
                Too many great businesses are invisible online. Not because they offer a bad service — but because nobody ever built them a website that actually works. 
                <br /><br />
                We've seen it over and over. A talented contractor, a busy studio, a growing local business — all losing customers every single day simply because they don't show up on Google or their website doesn't reflect the quality of their work.
              </p>
            </div>

            {/* Sub-banner Abstract Mini Bar */}
            <div className="mt-8 h-24 w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1775217946019-0687fd8c598a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] overflow-hidden relative opacity-80 bg-cover object-center">
              
            </div>
          </div>

          {/* Right Column: Royal Blue Card (Matching Reference Layout) */}
          <div className="lg:col-span-5 bg-[#2a36cc] text-white rounded-[2rem] p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-semibold tracking-widest uppercase opacity-80">
                ABOUT US
              </span>
              <span className="text-[#00c88c] text-xl" aria-hidden="true">❇️</span>
            </div>

            {/* Content Body */}
            <div className="space-y-4 text-xs md:text-sm font-light leading-relaxed text-blue-100">
              <p>
                We believe in the power of direct execution and clarity. We're a lean, focused web design and development studio that builds websites with one single goal in mind: solving the real problems that are costing your business money.
              </p>
              <p>
                No pretty pages that sit there doing nothing — actual solutions that bring in leads, capture bookings, and help you show up where your customers are already looking.
              </p>
              <p className="pt-2 text-white font-normal">
                We don't do bloated proposals, long waiting lists, or recycled templates. You get direct communication and a fast 7-day turnaround.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-blue-400/30 text-[11px] text-blue-200 font-light">
              Brixweb Digital Studio &middot; Delivered in 7 days
            </div>
          </div>

        </div>

        {/* ------------------- STATS OUTLINE PILL BAR ------------------- */}
        <div className="w-full border border-gray-300/80 rounded-full py-6 px-8 mb-20 bg-white/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2 md:py-0">
              <span className="text-3xl md:text-4xl font-normal text-[#2a36cc] tracking-tight">7 Days</span>
              <span className="text-xs text-gray-500 font-light leading-tight">Average Turnaround<br />Time</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2 md:py-0">
              <span className="text-3xl md:text-4xl font-normal text-[#2a36cc] tracking-tight">100%</span>
              <span className="text-xs text-gray-500 font-light leading-tight">Full Website<br />Ownership</span>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-4 px-4 py-2 md:py-0">
              <span className="text-3xl md:text-4xl font-normal text-[#2a36cc] tracking-tight">$0</span>
              <span className="text-xs text-gray-500 font-light leading-tight">Hidden Fees or<br />Monthly Lock-ins</span>
            </div>

          </div>
        </div>

        {/* ------------------- VISION & MISSION CARDS ------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* VISION CARD */}
          <div className="bg-white border border-gray-200/80 rounded-[2rem] p-8 md:p-10 shadow-sm relative hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-light tracking-wide text-gray-900 uppercase">
                VISION
              </h3>
              <span className="text-[#00c88c] text-xl">❇️</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              To eliminate invisible small businesses by equipping every client with a fast, high-converting digital presence that accurately reflects the true quality of their hard work.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="bg-white border border-gray-200/80 rounded-[2rem] p-8 md:p-10 shadow-sm relative hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl md:text-2xl font-light tracking-wide text-gray-900 uppercase">
                MISSION
              </h3>
              <span className="text-[#00c88c] text-xl">❇️</span>
            </div>
            <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">
              To help every small business we work with get found, look professional, and compete online — regardless of their size or budget.
            </p>
          </div>

        </div>

        {/* ------------------- VALUES GRID SECTION ------------------- */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 tracking-tight">
              Our Core <span className="font-semibold">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm">
              <div className="text-2xl mb-4">🎯</div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Results Over Aesthetics</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                A beautiful site that doesn't bring in customers is just an expensive hobby. We build for results first.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm">
              <div className="text-2xl mb-4">⚡</div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Speed & Simplicity</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                No 3-month timelines or unnecessary complexity. Just clean, fast websites that work from day one.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm">
              <div className="text-2xl mb-4">🤝</div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Honest Communication</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                No confusing jargon, no hidden fees, no surprises. Just straight talk about what your business needs.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/70 shadow-sm">
              <div className="text-2xl mb-4">📈</div>
              <h4 className="text-base font-medium text-gray-900 mb-2">Long-Term Thinking</h4>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                We build websites that grow with your business — not ones you'll need to replace in a year.
              </p>
            </div>

          </div>
        </div>

        {/* ------------------- CTA BANNER SECTION ------------------- */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-gray-200/80 shadow-sm text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to <span className="font-semibold">Transform Your Business?</span>
          </h2>
          <p className="text-xs md:text-sm text-gray-500 font-light max-w-xl mb-8 leading-relaxed">
            Book a free 20-minute Zoom call with us. We'll tell you exactly what your business needs — honestly and with zero sales pressure.
          </p>
          <a
            href="#contact"
            className="bg-[#2a36cc] hover:bg-blue-700 text-white font-normal text-xs md:text-sm px-8 py-3.5 rounded-full shadow-md transition-all inline-flex items-center gap-2 group"
          >
            Book a Free Zoom Call
            <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
          </a>
        </div>

      </div>

      {/* ------------------- ROYAL BLUE FOOTER ------------------- */}
      <footer className="bg-[#2a36cc] text-white mt-20 py-12 px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-light text-blue-100">
          <div>
            <h5 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Office</h5>
            <p className="leading-relaxed">Brixweb Studio<br />US Small Business Services<br />info@brixweb.com</p>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Company</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Our Story</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Services</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Web Development</a></li>
              <li><a href="#" className="hover:underline">Booking Systems</a></li>
              <li><a href="#" className="hover:underline">Website Redesign</a></li>
              <li><a href="#" className="hover:underline">Graphic Design</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-white mb-3 uppercase tracking-wider text-[11px]">Resources</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Portfolio</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Support</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;