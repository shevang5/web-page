import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/18322432234',
    icon: faWhatsapp,
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: faInstagram,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: faFacebookF,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: faLinkedinIn,
  },
];

const Footer = () => {
  return (
    <footer
      className="mt-10 rounded-t-[3rem] bg-gradient-to-br from-[#2372ff] via-[#0f47bd] to-[#071b4d] px-6 py-16 text-white md:px-12 lg:px-16"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em]">
              AfterMax Design & Development
            </span>
            <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-5xl">
              Building fast websites for businesses all across the US.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-blue-100 md:text-base">
              We serve clients all over the United States and are proudly based in Vancouver, WA.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm md:text-base">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-white/90 transition-colors hover:text-[#ffd24d]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-blue-100">
              Social Media
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white transition-all hover:border-white/30 hover:bg-white/15"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <FontAwesomeIcon icon={link.icon} />
                  </span>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-2 text-sm text-blue-100 md:text-base">
              <p>
                <span className="font-bold text-white">Based in:</span> Vancouver, WA
              </p>
              <p>
                <span className="font-bold text-white">Area served:</span> All over the US
              </p>
              <a
                href="mailto:shevang.io@outlook.com"
                className="block w-fit text-white transition-colors hover:text-[#ffd24d]"
              >
                shevang.io@outlook.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.18em] text-blue-100 md:flex-row md:items-center md:justify-between">
          <p>© 2026 AfterMax Design & Development. All rights reserved.</p>
          <p>Vancouver, WA based. Serving businesses across the United States.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
