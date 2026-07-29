import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FLAG_ITEM = 'american-flag';
const americanFlagSrc =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 190 100'%3E%3Crect width='190' height='100' fill='%23b22234'/%3E%3Cg fill='%23fff'%3E%3Crect y='7.69' width='190' height='7.69'/%3E%3Crect y='23.07' width='190' height='7.69'/%3E%3Crect y='38.45' width='190' height='7.69'/%3E%3Crect y='53.83' width='190' height='7.69'/%3E%3Crect y='69.21' width='190' height='7.69'/%3E%3Crect y='84.59' width='190' height='7.69'/%3E%3C/g%3E%3Crect width='76' height='53.85' fill='%233c3b6e'/%3E%3Cg fill='%23fff'%3E%3Ccircle cx='8' cy='7' r='2.2'/%3E%3Ccircle cx='21' cy='7' r='2.2'/%3E%3Ccircle cx='34' cy='7' r='2.2'/%3E%3Ccircle cx='47' cy='7' r='2.2'/%3E%3Ccircle cx='60' cy='7' r='2.2'/%3E%3Ccircle cx='14.5' cy='14' r='2.2'/%3E%3Ccircle cx='27.5' cy='14' r='2.2'/%3E%3Ccircle cx='40.5' cy='14' r='2.2'/%3E%3Ccircle cx='53.5' cy='14' r='2.2'/%3E%3Ccircle cx='66.5' cy='14' r='2.2'/%3E%3Ccircle cx='8' cy='21' r='2.2'/%3E%3Ccircle cx='21' cy='21' r='2.2'/%3E%3Ccircle cx='34' cy='21' r='2.2'/%3E%3Ccircle cx='47' cy='21' r='2.2'/%3E%3Ccircle cx='60' cy='21' r='2.2'/%3E%3Ccircle cx='14.5' cy='28' r='2.2'/%3E%3Ccircle cx='27.5' cy='28' r='2.2'/%3E%3Ccircle cx='40.5' cy='28' r='2.2'/%3E%3Ccircle cx='53.5' cy='28' r='2.2'/%3E%3Ccircle cx='66.5' cy='28' r='2.2'/%3E%3Ccircle cx='8' cy='35' r='2.2'/%3E%3Ccircle cx='21' cy='35' r='2.2'/%3E%3Ccircle cx='34' cy='35' r='2.2'/%3E%3Ccircle cx='47' cy='35' r='2.2'/%3E%3Ccircle cx='60' cy='35' r='2.2'/%3E%3Ccircle cx='14.5' cy='42' r='2.2'/%3E%3Ccircle cx='27.5' cy='42' r='2.2'/%3E%3Ccircle cx='40.5' cy='42' r='2.2'/%3E%3Ccircle cx='53.5' cy='42' r='2.2'/%3E%3Ccircle cx='66.5' cy='42' r='2.2'/%3E%3C/g%3E%3C/svg%3E";

const services = [
  'Web Development',
  'Website Redesign',
  FLAG_ITEM,
  'Online Booking System',
  'Graphic Design & Branding',
  FLAG_ITEM,
  'Logo Design',
  'Banner Design',
  FLAG_ITEM,
  'Poster Design',
  'Social Media Pack',
  FLAG_ITEM
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
      

      const pixelsPerSecond = 100;
// const halfWidth = track.scrollWidth / 2;
const duration = halfWidth / pixelsPerSecond;

const tween = gsap.to(track, {
  x: -halfWidth,
  duration,
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
      className="relative overflow-hidden bg-[#1860fc] py-2 text-white md:py-4"
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
    className={
      service === FLAG_ITEM
        ? "flex items-center justify-center overflow-hidden border border-white/20 bg-white/10 p-0"
        : "flex items-center gap-4 border border-white/20 bg-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] sm:text-base"
    }
  >
    {service === FLAG_ITEM ? (
      <img
        src={americanFlagSrc}
        alt="American flag"
        className="h-auto w-14 md:w-20 object-cover"
      />
    ) : (
      <span>{service}</span>
    )}
  </div>
))}
      </div>
    </section>
  );
};

export default Marquee;