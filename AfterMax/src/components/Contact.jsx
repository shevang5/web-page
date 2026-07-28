import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactInfo: '',
    service: 'Web Design or Dev',
    businessType: 'Any kind of business',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const businessOptions = [
    'Lawyer',
    'Doctor',
    'Therapist',
    'Electricians',
    'Plumber',
    'Cleaning',
    'HVAC',
    'Lawn Care',
    'Petcare Service',
    'Any kind of business'
  ];

  const serviceOptions = [
    'Web Design or Dev',
    'Graphic Design',
    'Branding'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '919099086997';
    const message = [
      'New website inquiry',
      `Name: ${formData.name}`,
      `Contact: ${formData.contactInfo}`,
      `Service: ${formData.service}`,
      `Business Type: ${formData.businessType}`,
      formData.message ? `Message: ${formData.message}` : null
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section 
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto"
      style={{ fontFamily: 'Arial, sans-serif' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Contact Info Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 text-white rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between min-h-[550px] relative overflow-hidden">
          
          <div className="relative z-10">
            <span className="inline-block border border-white/30 rounded-full px-4 py-1.5 text-xs uppercase tracking-wider mb-8">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 tracking-tight">
              Let's Build Something Great Together.
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              Have a question or ready to start your project? Fill out the form or reach out directly to us.
            </p>
          </div>

          {/* Contact Details List */}
          <div className="relative z-10 flex flex-col gap-6 text-sm md:text-base border-t border-white/10 pt-8">
            
            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Location</p>
                <p className="font-bold text-white">Vancouver, Washington, USA</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                ✉️
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Email Us</p>
                <a 
                  href="mailto:shevang.io@outlook.com" 
                  className="font-bold text-white hover:text-blue-400 transition-colors"
                >
                  shevang.io@outlook.com
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                💬
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">WhatsApp</p>
                <a 
                  href="https://wa.me/919099086997" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-bold text-white hover:text-blue-400 transition-colors"
                >
                  +91 9099086997
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#f2f3f5] rounded-[2.5rem] p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-16 flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl mb-6">
                ✓
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Message Sent!</h3>
              <p className="text-gray-600 max-w-md">
                Thank you for reaching out. We will review your request and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-gray-900">
                  Your Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>

              {/* Email or Number Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="contactInfo" className="text-sm font-bold text-gray-900">
                  Email or Phone Number <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  required
                  placeholder="e.g. john@example.com or +1 (555) 000-0000"
                  value={formData.contactInfo}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>

              {/* Radio Option: Services */}
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold text-gray-900">
                  What service do you need? <span className="text-blue-600">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center justify-center p-4 rounded-2xl border text-sm font-bold cursor-pointer transition-all text-center ${
                        formData.service === service
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Select Option: Business Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="businessType" className="text-sm font-bold text-gray-900">
                  What kind of business do you have? <span className="text-blue-600">*</span>
                </label>
                <div className="relative">
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors text-sm appearance-none cursor-pointer"
                  >
                    {businessOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-900">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us a bit about what you need"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none bg-white border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:outline-none focus:border-blue-600 transition-colors text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                Send Message
                <span className="transform group-hover:translate-x-1 transition-transform" aria-hidden="true">&rarr;</span>
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
