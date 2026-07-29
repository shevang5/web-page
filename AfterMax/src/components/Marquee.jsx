import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const services = [
  'Web Development',
  'Website Redesign',
  'Online Booking System',
  'Graphic Design & Branding',
  'Logo Design',
  'Banner Design',
  'Poster Design',
  'Social Media Pack',
  'american flag'
];

const duplicatedServices = [...services, ...services];

const Marquee = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const track = trackRef.current;

      if (!track) return;

      const halfWidth = track.scrollWidth / 2;

      gsap.set(track, { x: 0 });

      const tween = gsap.to(track, {
        x: -halfWidth,
        duration: 24,
        ease: 'none',
        repeat: -1
      });

      const handleResize = () => {
        const nextHalfWidth = track.scrollWidth / 2;
        tween.invalidate();
        tween.vars.x = -nextHalfWidth;
        tween.restart();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        tween.kill();
      };
    }, containerRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#447fff] md:py-4 py-2 text-white"
      aria-label="Service marquee"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a57ff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a57ff] to-transparent" />

      <div
        ref={trackRef}
        className="flex w-max items-center gap-4 whitespace-nowrap will-change-transform"
      >
        {duplicatedServices.map((service, index) => (
          <div
            key={`${service}-${index}`}
            className="flex items-center gap-4 border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] sm:text-base"
          >
            {/* <span className="text-lg leading-none" aria-hidden="true">
              🇺🇸
            </span> */}
            <span>{service}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marquee;