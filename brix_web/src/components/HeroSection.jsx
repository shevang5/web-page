import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Globe from './Globe';
// import Globe from './Globe'; // Adjust this import path if your Globe component is in another folder

const HeroSection = () => {
  const navLinkClassName = ({ isActive }) =>
    `rounded-full px-3 py-2 transition-colors sm:px-4 ${
      isActive ? 'bg-white/20' : 'hover:bg-white/20'
    }`;

  return (
    <div 
      id="home"
      className="min-h-screen flex flex-col px-6 py-8 md:px-12 lg:px-16 overflow-hidden rounded-b-[3rem] text-white bg-cover bg-center bg-fixed font-sans"
      style={{ backgroundImage: "url('./images/hero_bg.png')" }}
    >
      {/* 
        Injecting the Archivo font (Italic, 800 Weight). 
        Alternatively, you can move this to your globals.css or next/head. 
      */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Archivo:ital,wght@1,800&display=swap');
        `}
      </style>

      {/* Navigation */}
      <nav className="mb-5 flex z-50 justify-center overflow-x-auto md:mb-8">
        <div className="flex flex-nowrap justify-start gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[11px] uppercase tracking-wide sm:justify-center sm:gap-4 sm:px-4 sm:text-sm">
          <NavLink to="/" end className={navLinkClassName}>Home</NavLink>
          <NavLink to="/services" className={navLinkClassName}>Services</NavLink>
          <a href="#" className="hidden rounded-full px-3 py-2 transition-colors hover:bg-white/20 sm:inline-flex sm:px-4">About</a>
          <a href="#" className="rounded-full px-3 py-2 transition-colors hover:bg-white/20 sm:px-4">Portfolio</a>
          <a href="#" className="hidden rounded-full px-3 py-2 transition-colors hover:bg-white/20 sm:inline-flex sm:px-4">Reviews</a>
          <a href="#" className="rounded-full px-3 py-2 transition-colors hover:bg-white/20 sm:px-4">Contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-8 w-full max-w-[1400px] mx-auto lg:gap-12">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 pt-96 md:pt-0 max-w-2xl w-full">
          <h1 className="font-['Archivo'] italic font-[1000] text-5xl md:text-7xl lg:text-[5rem] leading-[0.95] mb-6 uppercase">
            Your <span className="text-[#FFC900]">Business</span><br />
            Deserves To Be
            Found.
          </h1>
          
          <p className="text-sm md:text-base leading-relaxed mb-12 lg:mb-16 max-w-lg font-sans uppercase">
            We build fast, modern websites that bring real customers to your door — not just pretty pages that sit there doing nothing.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <div className="text-xs leading-relaxed opacity-90 uppercase tracking-wider">
              Free 20-Minute Call &middot;<br />
              No Commitment &middot;<br />
              Live Mockup Included
            </div>
            <Link to="/services" className="bg-transparent text-white border border-white/50 px-6 py-3 rounded whitespace-nowrap text-sm cursor-pointer hover:bg-white/10 hover:border-white transition-all">
              BOOK A FREE ZOOM CALL
            </Link>
          </div>
        </div>

        {/* Right Column: 3D Globe Component */}
        <div className="relative flex w-full flex-1 items-center justify-center min-h-[80px] -mt-8 sm:min-h-[340px] sm:-mt-4 lg:mt-0 lg:h-[650px] pointer-events-auto">
          <div className="h-full w-full scale-[0.8] sm:scale-[0.9] lg:scale-100">
            <Globe
              oceanColor="rgba(255,255,255,0.08)"
              fillColor="rgba(255,255,255,0.25)"
              outlineColor="rgba(255,255,255,0.35)"
              graticuleColor="rgba(255,255,255,0.16)"
              scale={8}
              style={{ opacity: 0.85 }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
