import React from 'react';
import { 
  Check, 
  Sparkles, 
  Scale, 
  Palette, 
  Info, 
  ArrowRight, 
  Calendar, 
  Zap, 
  Star, 
  Image, 
//   Vector, 
  FileText, 
  Layout 
} from 'lucide-react';
import Navbar from '../components/Navbar';

const Pricing = () => {
  // Plan Cards Data
  const plans = [
    {
      name: "Starter",
      badge: "Essential",
      price: "$299",
      target: "Perfect for businesses with no online presence",
      featured: false,
      features: [
        "3–5 page website",
        "Mobile friendly",
        "Contact / booking form",
        "Google-ready local SEO basics",
        "Delivered in 7 days",
        "You own it fully"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200"
    },
    {
      name: "Growth",
      badge: "Recommended",
      price: "$499",
      target: "Perfect for businesses ready to scale online",
      featured: true,
      features: [
        "Everything in Starter",
        "Up to 8 pages",
        "Booking system with deposit collection",
        "Portfolio / gallery section",
        "Team / artist pages",
        "Priority delivery in 5 days"
      ],
      buttonText: "Choose Growth",
      buttonStyle: "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25"
    },
    {
      name: "Custom",
      badge: "Enterprise",
      price: "Let's Talk",
      target: "For businesses with specific needs",
      featured: false,
      features: [
        "Everything in Growth",
        "Custom features built for your business",
        "Advanced booking and automation",
        "Ongoing maintenance option",
        "Dedicated support"
      ],
      buttonText: "Contact Us",
      buttonStyle: "bg-slate-900 hover:bg-blue-600 text-white"
    }
  ];

  // Price Comparison Data
  const comparisonData = [
    { service: "New Website", agency: "$3,000 – $8,000", ours: "Starting at $299" },
    { service: "Website Redesign", agency: "$2,000 – $5,000", ours: "Starting at $199" },
    { service: "Booking System", agency: "$2,000 – $6,000", ours: "Starting at $249" },
    { service: "Logo Design", agency: "$500 – $2,000", ours: "Starting at $80" },
    { service: "Banner Design", agency: "$200 – $500", ours: "Starting at $40" },
    { service: "Poster Design", agency: "$300 – $800", ours: "Starting at $50" },
    { service: "Social Media Pack", agency: "$500 – $1,500", ours: "Starting at $120" },
  ];

  // Graphic Design Cards Data
  const graphicServices = [
    {
      title: "Logo Design",
      subtitle: "Custom logo designed for your brand",
      price: "Starting at $80",
      includes: "3 concepts, 2 revisions, final files in all formats",
      turnaround: "3–5 days"
    },
    {
      title: "Banner Design",
      subtitle: "Digital banners for web, social, or print",
      price: "Starting at $40 / banner",
      includes: "1 design, 1 revision, final files",
      turnaround: "1–2 days"
    },
    {
      title: "Poster Design",
      subtitle: "Event, promotional, or business posters",
      price: "Starting at $50",
      includes: "1 design, 2 revisions, print-ready PDF + web PNG",
      turnaround: "2–3 days"
    },
    {
      title: "Social Media Pack",
      subtitle: "5–10 branded social media post designs",
      price: "Starting at $120",
      includes: "Consistent style, your branding, all post sizes",
      turnaround: "3–5 days"
    }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-b from-[#2748d9] via-[#eaf1ff] to-[#ffffff] text-slate-800 font-sans selection:bg-blue-500 selection:text-white pb-24 relative overflow-hidden">
      <Navbar />
      {/* Import Light Font Stack */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* Ambient Blue Background Glows (Matching Reference Image) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-200/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[15%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* --- HERO SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-white text-xs font-medium border border-blue-200/60 shadow-sm mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Transparent Pricing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.15] mb-6">
          Agency Quality.<br className="hidden sm:inline" /> 
          <span className="font-normal text-white px-2 py-0.5 rounded-lg  inline-block mt-1">
            Without the Agency Price Tag.
          </span>
        </h1>

        <p className="text-base sm:text-lg font-light text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Most web agencies charge thousands for work that takes days. We cut the overhead and pass the savings directly to you — without cutting corners on quality.
        </p>
      </section>

      {/* --- 3 PRICING PLAN CARDS --- */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative backdrop-blur-md ${
                plan.featured 
                  ? 'bg-white border-2 border-blue-500 shadow-2xl shadow-blue-500/15 md:-translate-y-3 z-10' 
                  : 'bg-white/80 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-medium tracking-wider uppercase shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-normal text-slate-900">{plan.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-light ${plan.featured ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                    {plan.badge}
                  </span>
                </div>
                
                <p className="text-xs text-slate-500 mb-6 font-light">{plan.target}</p>

                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-normal text-slate-900">{plan.price}</span>
                    {plan.price.startsWith('$') && (
                      <span className="text-xs text-slate-500 font-light">/ one-time</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3.5 text-sm text-slate-600 mb-8 font-light">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3.5 px-4 rounded-2xl font-normal text-sm transition-all text-center block ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Call-to-Action Box below Plans */}
        <div className="mt-12 text-center bg-white/70 backdrop-blur-md rounded-2xl p-6 border border-slate-200/80 max-w-3xl mx-auto shadow-sm">
          <p className="text-slate-600 font-light mb-4 text-sm sm:text-base">
            Not sure which plan? Book a free call and we'll tell you exactly what you need — honestly.
          </p>
          <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-normal text-sm sm:text-base transition-all shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95">
            <Calendar className="w-4 h-4" />
            <span>Book a Free Zoom Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* --- PRICING COMPARISON TABLE SECTION --- */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-medium border border-blue-200/60 mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            <span>Cost Comparison</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">
            Compare Agency vs Our Cost
          </h2>
          <p className="text-sm text-slate-600 font-light mt-2">See how much you save without compromising on quality.</p>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-slate-900 font-normal text-sm">
                  <th className="py-5 px-6">Service</th>
                  <th className="py-5 px-6 text-slate-400 font-light">Big Agency Cost</th>
                  <th className="py-5 px-6 bg-blue-500/10 text-blue-800 font-normal border-l border-blue-200/50">
                    <span className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-600" /> Our Cost
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-light">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                    <td className="py-4 px-6 font-normal text-slate-900">{row.service}</td>
                    <td className="py-4 px-6 text-slate-400 line-through">{row.agency}</td>
                    <td className="py-4 px-6 bg-blue-50/40 text-blue-700 font-normal border-l border-blue-100">{row.ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-900 text-white p-5 text-center font-light text-xs sm:text-sm flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-cyan-400" /> All prices are one-time</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-cyan-400" /> No monthly fees</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-cyan-400" /> No hidden costs</span>
            <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-cyan-400" /> You own everything</span>
          </div>
        </div>
      </section>

      {/* --- GRAPHIC DESIGN PRICING SECTION --- */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-700 text-xs font-medium border border-blue-200/60 shadow-sm mb-4">
            <Palette className="w-3.5 h-3.5 text-blue-600" />
            <span>Graphic Design Services</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight mb-4">
            Professional Designs. Delivered Digitally.
          </h2>
        </div>

        {/* IMPORTANT NOTE DISCLAIMER BOX */}
        <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-indigo-50 border border-blue-200/80 rounded-2xl p-6 mb-10 shadow-sm max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-blue-500/20">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-normal text-slate-900 text-base mb-1">Important Note: Digital Studio</h4>
              <p className="text-sm text-slate-700 leading-relaxed font-light">
                We are a digital design studio. We design your graphics and deliver all files digitally. We do not handle printing or physical production.
              </p>
              <p className="text-xs text-blue-700 mt-2 font-normal">
                <strong className="font-medium">What you get:</strong> High quality digital files ready for web, social media, or print — PNG, PDF, SVG, or any format you need.
              </p>
            </div>
          </div>
        </div>

        {/* 4 GRAPHIC DESIGN CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {graphicServices.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-blue-400 hover:-translate-y-1">
              <div>
                <h3 className="text-lg font-normal text-slate-900 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-500 font-light mb-4">{item.subtitle}</p>
                <div className="text-xl font-normal text-blue-600 mb-4">{item.price}</div>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-4 font-light">
                  <p><strong class="font-normal text-slate-900">Includes:</strong> {item.includes}</p>
                  <p><strong class="font-normal text-slate-900">Turnaround:</strong> {item.turnaround}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-blue-600 text-white font-normal text-sm transition-all shadow-md hover:shadow-blue-500/20">
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* --- GRAPHIC DESIGN — ADD TO SERVICES SECTION --- */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-light tracking-wider bg-blue-500/20 text-cyan-300 border border-blue-500/30">
                Service 4 — Graphic Design
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white leading-tight">
                Your brand is more than a website.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                We design logos, banners, posters, and social media graphics that make your business look professional everywhere your customers see you.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed italic border-l-2 border-blue-400 pl-3 py-1 font-light">
                We deliver all designs as high-quality digital files ready for any use. We do not handle printing or physical production — just world-class designs you can use anywhere.
              </p>
            </div>

            <div className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="font-normal text-xs uppercase tracking-wider text-cyan-300 mb-4">What We Design:</h4>
              <ul className="space-y-3 text-sm text-slate-200 font-light">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Logos and brand identity</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Banners (web and print-ready files)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Event and promotional posters</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Social media graphics and packs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Pricing;