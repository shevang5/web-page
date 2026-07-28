import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesData = [
    {
      id: 1,
      icon: " ",
      title: "Web Development",
      description: "Fast, modern websites built to get your business found on Google and turn visitors into paying customers.",
      link: "/services"
    },
    {
      id: 2,
      icon: " ",
      title: "Online Booking System",
      description: "Smart booking forms that capture leads, collect deposits, and send automatic notifications — no more lost DMs.",
      link: "/services"
    },
    {
      id: 3,
      icon: " ",
      title: "Graphic Design & Branding",
      description: "Logos, banners, and posters that make your business look professional everywhere customers see you.",
      link: "/services"
    },
    {
      id: 4,
      icon: " ",
      title: "Website Redesign",
      description: "Outdated site holding you back? We rebuild it faster, cleaner, and optimized to actually convert.",
      link: "/services"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-16 max-w-[1600px] mx-auto font-[arial]">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Dark Anchoring Card */}
        <div className="bg-[url('./images/hero_bg.png')] rounded-3xl p-8 lg:p-12 text-white flex-1 lg:max-w-md xl:max-w-lg flex flex-col justify-between min-h-[400px] relative overflow-hidden">
          {/* Optional: You can add a background image here like in the reference */}
          <div className="absolute inset-0 opacity-20  bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
          
          <div className="relative z-10">
            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-sm uppercase tracking-wider mb-8">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight">
              Everything Your Business Needs to Grow Online.
            </h2>
          </div>

          <div className="relative z-10 mt-12 lg:mt-0">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg font-medium"
            >
              View All Services 
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Service Cards Stack */}
        <div className="flex-1 flex flex-col gap-4 relative ">
          {servicesData.map((service) => (
            <div 
              key={service.id} 
              className="relative bg-[#f2f3f5] rounded-3xl p-6 flex flex-col overflow-hidden md:flex-row md:items-center gap-6 md:gap-12 transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Giant Blue Number */}
              <div className="pointer-events-none absolute left-6 top-4 text-[#1a44e5] text-7xl md:text-[10vw] font-[arial] font-light leading-none">
                {service.id}
              </div>

              {/* Content Grid */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start md:items-start">
                
                {/* Title */}
                <div>
                  <h3 className="text-xl ml-10 md:ml-40 md:text-2xl font-medium text-gray-900 mb-2 flex items-top gap-3">
                    <span className="text-2xl" aria-hidden="true">{service.icon}</span>
                    {service.title}
                  </h3>
                </div>

                {/* Description & Link */}
                <div className="flex flex-col gap-3">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center gap-1 text-gray-900 font-medium hover:text-[#1a44e5] transition-colors w-fit text-sm mt-1"
                  >
                    Learn More 
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
