import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faRocket } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const byPrefixAndName = {
  fab: {
    whatsapp: faWhatsapp,
  },
  fas: {
    gear: faGear,
  },
  far: {
    rocket: faRocket,
  },
};

const HowItWorks = () => {
  return (
    <section 
      id="process"
      className="py-24 px-6 md:px-12 overflow-hidden rounded-[3rem] lg:px-16 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 bg-cover bg-center bg-no-repeat bg-[#f8f8f8] overflow-hidden"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative">
        
        {/* Left Content Area (Header & CTA) */}
        <div className="lg:col-span-4 flex flex-col justify-center z-10">
          <span className="text-[#b9b9b9] text-xs font-bold uppercase tracking-wider mb-3">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Simple.<br />Fast.<br />No Fluff.
          </h2>
          <p className="text-[#ffffffdc] text-sm md:text-base leading-relaxed mb-8 max-w-sm">
            We don't waste your time with endless meetings or over-complicated strategies. We follow a clean, direct path straight to results.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-8 py-3.5 rounded-full w-fit shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group">
            Book Your Free Call 
            <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
          </button>
        </div>

        {/* Right Content Area (Staggered Flow Timeline) */}
        <div className="lg:col-span-8 relative w-full min-h-[500px] flex flex-col lg:flex-row justify-between gap-12 lg:gap-4 pt-8 lg:pt-0">
          
          {/* Connecting Curved Vector Line (Visible on Desktop Only) */}
          {/* <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M -20 280 Q 100 390 220 340 T 480 180 T 740 120 L 850 110" 
                stroke="#dbeafe" 
                strokeWidth="6" 
                strokeLinecap="round"
              />
              <path 
                d="M -20 280 Q 100 390 220 340 T 480 180 T 740 120 L 850 110" 
                stroke="#2563eb" 
                strokeWidth="3" 
                strokeLinecap="round"
              />
            </svg>
          </div> */}

          {/* Step 1 Component */}
          <div className="flex-1 relative z-10 lg:mt-64 flex flex-col items-start lg:px-4">
            {/* Timeline Node Dot */}
            {/* <div className="hidden lg:flex items-center justify-center absolute -top-12 left-6 w-6 h-6 rounded-full bg-white shadow-md border-4 border-blue-600 z-20" /> */}
            
            {/* Massive Faint Background Icon */}
            <div className="absolute -top-12 -left-2 text-gray-200/60 leading-none select-none pointer-events-none z-0">
              <FontAwesomeIcon
                icon={byPrefixAndName.fab['whatsapp']}
                style={{ color: 'rgb(255, 255, 255)' }}
                className="text-[7rem] opacity-20"
              />
            </div>
            
            {/* Step Card Content */}
            <div className="relative z-10 pt-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Step 1 — We Find the Real Problem
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-[240px]">
                We start with a free 20-minute Zoom call to understand your business, your goals, and exactly what's costing you customers right now.
              </p>
            </div>
          </div>

          {/* Step 2 Component */}
          <div className="flex-1 relative z-10 lg:mt-32 flex flex-col items-start lg:px-4">
            {/* Timeline Node Dot */}
            {/* <div className="hidden lg:flex items-center justify-center absolute -top-14 left-6 w-6 h-6 rounded-full bg-white shadow-md border-4 border-blue-600 z-20" /> */}
            
            {/* Massive Faint Background Icon */}
            <div className="absolute -top-12 -left-2 text-gray-200/60 leading-none select-none pointer-events-none z-0">
              
              <FontAwesomeIcon
                icon={byPrefixAndName.fas['gear']}
                style={{ color: 'rgb(255, 255, 255)' }}
                className="text-[7rem] opacity-20"
              />
            </div>
            
            {/* Step Card Content */}
            <div className="relative z-10 pt-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Step 2 — We Build the Solution
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-[240px]">
                No bloat, no unnecessary features. We build exactly what your business needs — clean, fast, and focused on getting you results.
              </p>
            </div>
          </div>

          {/* Step 3 Component */}
          <div className="flex-1 relative z-10 lg:mt-8 flex flex-col items-start lg:px-4">
            {/* Timeline Node Dot */}
            {/* <div className="hidden lg:flex items-center justify-center absolute -top-12 left-6 w-6 h-6 rounded-full bg-white shadow-md border-4 border-blue-600 z-20" /> */}
            
            {/* Massive Faint Background Icon */}
            <div className="absolute -top-12 -left-2 text-gray-200/60 leading-none select-none pointer-events-none z-0">
              <FontAwesomeIcon
                icon={byPrefixAndName.far['rocket']}
                style={{ color: 'rgb(255, 255, 255)' }}
                className="text-[7rem] opacity-20"
              />
            </div>
            
            {/* Step Card Content */}
            <div className="relative z-10 pt-4">
              <h3 className="text-lg font-bold text-white mb-2">
                Step 3 — You Go Live in 7 Days
              </h3>
              <p className="text-white text-xs md:text-sm leading-relaxed max-w-[240px]">
                Your website goes live. You own it completely — no monthly fees to us, no lock-in contracts. Just a site that works for your business every single day.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
