import React, { useState } from 'react';

const FAQ = () => {
  // Set first item open by default to match the design reference
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "How much does a website cost?",
      answer: "Every project is different depending on your specific needs. We offer transparent, fixed pricing with no hidden fees. Book a free call and we'll give you an exact quote within 24 hours."
    },
    {
      question: "How long does it take?",
      answer: "Most websites are delivered within 7 days from our first call. Larger projects may take up to 2 weeks."
    },
    {
      question: "Do I own my website?",
      answer: "Yes — 100%. You own your website, your domain, and all your content. No monthly fees to us, ever."
    },
    {
      question: "Do I need to know anything about websites?",
      answer: "Not at all. We handle everything from design to launch. All you need to do is tell us about your business."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes. We offer optional maintenance and support packages after launch so your site stays fast, secure, and up to date."
    },
    {
      question: "Can you help me show up on Google?",
      answer: "Absolutely. Every website we build includes local SEO basics so you start appearing in Google search results for your area right away."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq"
      className="relative z-10 mt-12 py-24 px-6 md:px-12 lg:px-16 bg-[#fafafa] scroll-mt-24"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest block mb-4">
            Common Questions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Everything You Want to Know.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-[#f0f2f8] transition-all duration-300 rounded-[2rem] px-8 py-5 cursor-pointer ${
                  isOpen ? 'shadow-sm' : 'hover:bg-[#e8ebf4]'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {/* Question & Toggle Button */}
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-gray-900 font-bold text-base md:text-lg leading-snug">
                    {faq.question}
                  </h3>
                  
                  <button
                    type="button"
                    aria-label="Toggle answer"
                    className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-gray-700 text-lg font-medium shadow-sm transition-transform duration-200"
                  >
                    {isOpen ? '✕' : '＋'}
                  </button>
                </div>

                {/* Answer Content */}
                {isOpen && (
                  <div className="mt-4 pr-10 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-200/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
