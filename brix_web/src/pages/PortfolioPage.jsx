import React from 'react';
import { 
  ExternalLink, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Search,
  Globe,
  Layers
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function PortfolioPage() {
  // Sample projects based on your template & stack expertise
  const projects = [
    {
      id: 1,
      title: "Dr. Pratosh's Dental Master's",
      industry: "Healthcare / Dental Clinic",
      problem: "Outdated web presence, reliance on phone calls for appointments, and zero local SEO visibility.",
      solution: "Modern glassmorphism UI, real-time appointment scheduling, interactive service showcase, and full local SEO optimization.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      liveLink: "#",
      tags: ["React", "Tailwind CSS", "Booking API", "SEO"]
    },
    {
      id: 2,
      title: "Bake & Coffee Express",
      industry: "Cafe & Restaurant",
      problem: "Losing online revenue to third-party delivery fees and struggling to handle peak-hour pickup orders.",
      solution: "Full-stack direct ordering platform, real-time admin dashboard, live order status tracking, and digital menu management.",
      image: "https://cdn.prod.website-files.com/69e31d0e30374e3f18255f2b/69e458e6759a0aa0c8180d84_pj-2.jpg",
      liveLink: "https://restaurant1-eight.vercel.app/",
      tags: ["Full Stack", "Node.js", "Express", "MongoDB"]
    },
    {
      id: 3,
      title: "SM fitness",
      industry: "Gym & Fitness",
      problem: "High customer churn due to manual sign-ups, lack of membership tracking, and static web pages.",
      solution: "High-energy landing page, automated membership portal, interactive class timetable, and analytics dashboard.",
      image: "https://cdn.prod.website-files.com/69e31d0e30374e3f18255f2b/69e3b752d5bc251b03b8fb98_pj-1.jpg",
      liveLink: "https://sm-fitness-eta.vercel.app/",
      tags: ["React", "Tailwind CSS", "Dashboard", "GSAP"]
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2748d9] via-[#eaf1ff] to-[#ffffff] text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Import Light Font Stack */}
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600&display=swap');
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}</style>

      {/* --- HERO SECTION (Inspired by Behance layout) --- */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        
        {/* Floating Decorative Tiles (Left Side) */}
        <div className="hidden xl:block absolute left-8 top-16 w-64 space-y-4 opacity-75 pointer-events-none">
          <div className="flex gap-4">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 p-2 shadow-sm border border-white">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
            </div>
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 p-2 shadow-sm border border-white mt-6">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
            </div>
          </div>
          <div className="w-48 h-28 rounded-2xl bg-white p-2 shadow-md border border-slate-100 ml-6">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
          </div>
        </div>

        {/* Floating Decorative Tiles (Right Side) */}
        <div className="hidden xl:block absolute right-8 top-16 w-64 space-y-4 opacity-75 pointer-events-none">
          <div className="flex gap-4 justify-end">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 p-2 shadow-sm border border-white mt-4">
              <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=200&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
            </div>
            <div className="w-28 h-28 rounded-2xl bg-white p-2 shadow-md border border-slate-100">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
            </div>
          </div>
          <div className="w-40 h-24 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 p-2 shadow-sm border border-white mr-8">
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=300&q=80" className="w-full h-full object-cover rounded-xl" alt="Preview" />
          </div>
        </div>

        {/* Hero Content Area */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-xs tracking-wider uppercase font-medium text-slate-600">
              Our Work
            </span>
          </div>

          {/* Main Headline with Highlight */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-reg text-slate-900 tracking-tight leading-[1.15] mb-6">
            Every Project Solves A <br className="hidden sm:inline" />
              Real Problem.
            
          </h1>

          {/* Subtitle / Body Copy */}
          <p className="text-lg md:text-xl font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We don't build websites for the sake of it. Every project in our portfolio started with a specific business problem — and ended with a solution that made a measurable difference.
          </p>

          <div className="flex justify-center">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-light text-sm hover:bg-blue-600 transition-all shadow-md hover:shadow-blue-500/20"
            >
              Explore Web Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* --- PORTFOLIO GRID SECTION --- */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Card Header / Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Industry Badge */}
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-light bg-slate-100 text-slate-600 border border-slate-200 mb-3">
                    {project.industry}
                  </span>

                  {/* Project Name */}
                  <h3 className="text-xl font-normal text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Problem & Solution Blocks */}
                  <div className="space-y-3 text-sm font-light text-slate-600 border-t border-slate-100 pt-4">
                    <div>
                      <strong className="font-normal text-slate-900 block mb-0.5">Problem:</strong>
                      <p className="leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <strong className="font-normal text-slate-900 block mb-0.5">Solution:</strong>
                      <p className="leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer / Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-normal text-blue-600 hover:text-blue-700 transition-colors group/link"
                  >
                    <span>View Live Site</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>

                  {/* Tech stack badges */}
                  <div className="flex gap-1.5">
                    {project.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[10px] font-light text-slate-400">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl shadow-blue-500/20">
          
          {/* Subtle Background Accent Ring */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-400/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
              Want Results Like These?
            </h2>
            
            <p className="text-base sm:text-lg font-light text-blue-100 leading-relaxed">
              Book a free 20-minute Zoom call and we'll show you exactly what we'd build for your business.
            </p>

            <div className="pt-2">
              <a 
                href="#book"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-slate-50 font-normal text-base shadow-lg transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Book a Free Zoom Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs font-light text-blue-200/80 pt-2">
              No pressure. No sales pitch. Just direct business strategy.
            </p>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}