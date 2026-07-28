import React from 'react';

const Problem = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white max-w-[1600px] mx-auto font-sans">
      {/* Top Header Section */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 mt-10">
        <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight font-medium text-gray-900 mb-8">
          Every Day Without a Website Is a Customer You're Handing to Your Competitor. For Free.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
          Right now, someone in your city is Googling the exact service you offer. If your business doesn't have a website — or has one that looks outdated — they're clicking on your competitor instead. Not because they're better. Because they showed up and you didn't.
        </p>
        
        {/* Eyebrow Pill */}
        <div className="relative inline-flex items-center justify-center">
          {/* Decorative Arrow (approximating the hand-drawn arrow in the design) */}
          <svg 
            className="absolute -top-8 -left-8 w-8 h-8 text-blue-700 transform -rotate-12" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          <span className="bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide">
            The harsh truth
          </span>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Dark Box (Blue instead of Green) */}
        <div className="bg-blue-800 text-white rounded-3xl p-8 flex flex-col justify-between min-h-[300px] lg:min-h-[auto]">
          <h3 className="text-4xl font-medium tracking-tight">
            Problems
          </h3>
          <p className="text-blue-100 text-lg leading-snug max-w-[200px]">
            The harsh reality of not being online
          </p>
        </div>

        {/* Card 1 */}
        <div className="bg-[#f4f5f7] rounded-3xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 bg-white w-fit px-3 py-1.5 rounded-full shadow-sm">
            
            <span className="font-medium">Problem #1</span>
          </div>
          <h4 className="text-lg font-medium text-gray-900 border-b border-gray-300 pb-1 w-fit">
            Invisible on Google
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            No website means no Google presence. New customers simply can't find you no matter how good your work is.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f4f5f7] rounded-3xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 bg-white w-fit px-3 py-1.5 rounded-full shadow-sm">
            
            <span className="font-medium">Problem #2</span>
          </div>
          <h4 className="text-lg font-medium text-gray-900 border-b border-gray-300 pb-1 w-fit">
            Losing Leads Through DMs
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Managing bookings through Instagram DMs means missed messages, no-shows, and hours wasted answering the same questions daily.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f4f5f7] rounded-3xl p-8 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-gray-500 bg-white w-fit px-3 py-1.5 rounded-full shadow-sm">
            
            <span className="font-medium">Problem #3</span>
          </div>
          <h4 className="text-lg font-medium text-gray-900 border-b border-gray-300 pb-1 w-fit">
            Looking Unprofessional
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed">
            Clients judge your business by your website before they ever contact you. An outdated site loses the sale before it even starts.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Problem;