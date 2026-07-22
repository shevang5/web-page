import React from 'react';

const CTA = () => {
  return (
    <section 
      className="py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto select-none"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      {/* Outer Card with Gradient Background */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-900 to-slate-950 p-10 md:p-16 lg:p-20 text-white text-center shadow-2xl">
        
        {/* Subtle Decorative Background Light Flares */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your Competitor Already Has a Website. Do You?
          </h2>

          {/* Body */}
          <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-10 max-w-2xl font-normal">
            Every day without a website is a customer you're sending somewhere else. Let's fix that in 7 days — starting with a free 20-minute Zoom call where we'll show you exactly what your new site could look like.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-blue-950 hover:bg-blue-50 text-base md:text-lg font-bold px-9 py-4 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer mb-6 flex items-center gap-2 group">
            Book a Free Zoom Call
            <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
          </button>

          {/* Supporting Text */}
          <p className="text-blue-200/80 text-xs md:text-sm tracking-wide font-medium uppercase">
            Free call &middot; No commitment &middot; Live mockup included
          </p>

        </div>
      </div>
    </section>
  );
};

export default CTA;