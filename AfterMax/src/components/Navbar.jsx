import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const normalizedPath = location.pathname.replace(/\/+$/, '') || '/';
  const isPricingPage = normalizedPath === '/pricing';

  const navItems = [
    { label: 'Home', path: '/', isRouter: true },
    { label: 'Services', path: '/services', isRouter: true },
    { label: 'About', path: '/about', isRouter: true, hideOnMobile: true },
    { label: 'Portfolio', path: '/portfolio', isRouter: true,hideOnMobile: true },
    { label: 'Pricing', path: '/pricing', isRouter: true },
    // { label: 'Reviews', path: '/reviews', isRouter: true, hideOnMobile: true },
    { label: 'Contact', path: '/contact', isRouter: true },
  ];

  // Helper function to figure out which tab is currently active
  const getActiveIndex = () => {
    const foundIndex = navItems.findIndex((item) => {
      if (item.isRouter) {
        if (item.path === '/') {
          return normalizedPath === '/';
        }

        return normalizedPath === item.path || normalizedPath.startsWith(`${item.path}/`);
      }

      return location.hash === item.path;
    });

    return foundIndex !== -1 ? foundIndex : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getActiveIndex);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef([]);

  // Sync active index whenever route/hash changes
  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location]);

  // Recalculate sliding pill coordinates whenever active tab or screen size changes
  useEffect(() => {
    const updatePillPosition = () => {
      const currentTab = tabRefs.current[activeIndex];
      if (currentTab) {
        setPillStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };

    updatePillPosition();
    window.addEventListener('resize', updatePillPosition);
    return () => window.removeEventListener('resize', updatePillPosition);
  }, [activeIndex]);

  return (
    <nav className="mb-5 flex absolute top-5 left-1/2 z-50 -translate-x-1/2 justify-center md:mb-8">
      <div
        className={`relative flex flex-nowrap items-center gap-1 rounded-full border p-1.5 text-xs uppercase tracking-wide backdrop-blur-md sm:gap-2 sm:text-sm ${
          isPricingPage
            ? 'border-blue-200/70 bg-blue-50/90 shadow-lg shadow-blue-200/60'
            : 'border-white/20 bg-white/10 shadow-2xl shadow-blue-800'
        }`}
      >
        {/* Animated Sliding Blur Pill */}
        <div
          className={`absolute top-1.5 bottom-1.5 rounded-full border backdrop-blur-md shadow-md pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            isPricingPage
              ? 'border-blue-300/60 bg-blue-600/15 shadow-blue-200/70'
              : 'border-white/30 bg-white/20'
          }`}
          style={{
            left: `${pillStyle.left}px`,
            width: `${pillStyle.width}px`,
          }}
        />

        {/* Navigation Tabs */}
        {navItems.map((item, index) => {
          const isActive = activeIndex === index;
          const baseStyles = `relative z-10 rounded-full px-3 py-2 transition-colors duration-400 ease-[cubic-bezier(0.65,0,0.35,1)] sm:px-4 select-none ${
            item.hideOnMobile ? 'hidden sm:inline-flex' : 'inline-flex'
          } ${
            isActive
              ? isPricingPage
                ? 'font-bold text-blue-700'
                : 'font-bold text-white'
              : isPricingPage
                ? 'text-blue-700/70 hover:text-blue-700'
                : 'text-white/70 hover:text-white'
          }`;

          if (item.isRouter) {
            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === '/'}
                ref={(el) => (tabRefs.current[index] = el)}
                onClick={() => setActiveIndex(index)}
                className={baseStyles}
              >
                {item.label}
              </NavLink>
            );
          }

          return (
            <a
              key={item.label}
              href={item.path}
              ref={(el) => (tabRefs.current[index] = el)}
              onClick={() => setActiveIndex(index)}
              className={baseStyles}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;