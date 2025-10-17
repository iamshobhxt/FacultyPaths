import React, { useState } from 'react';

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    subCategory: '',
    details: '',
    message: ''
  });

  const [subjectOptions] = useState({
    services: [
      { value: 'web-development', label: 'Web Development' },
      { value: 'mobile-apps', label: 'Mobile Applications' },
      { value: 'cloud-solutions', label: 'Cloud Solutions' },
      { value: 'consulting', label: 'IT Consulting' }
    ],
    technologies: [
      { value: 'react', label: 'React Development' },
      { value: 'nodejs', label: 'Node.js Solutions' },
      { value: 'ai-ml', label: 'AI/ML Integration' },
      { value: 'blockchain', label: 'Blockchain Development' }
    ]
  });

  const [detailsPlaceholders] = useState({
    'web-development': 'Describe your website requirements, features, and timeline',
    'mobile-apps': 'Tell us about your mobile app concept, platform preferences, and key features',
    'cloud-solutions': 'Outline your cloud infrastructure needs and scalability requirements',
    'consulting': 'Describe the areas where you need IT consulting and guidance',
    'react': 'Specify your React project requirements and complexity',
    'nodejs': 'Detail your backend requirements and API specifications',
    'ai-ml': 'Explain your AI/ML use case and data requirements',
    'blockchain': 'Describe your blockchain project scope and requirements'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset dependent fields when subject changes
      ...(name === 'subject' && {
        subCategory: '',
        details: ''
      })
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Message sent successfully!");
      handleReset();
    } else {
      alert("❌ Failed to send message: " + data.error);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("⚠️ Something went wrong. Try again later.");
  }
};

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      subCategory: '',
      details: '',
      message: ''
    });
  };

  const currentSubOptions = formData.subject ? subjectOptions[formData.subject] || [] : [];
  const currentDetailsPlaceholder = formData.subCategory ? 
    detailsPlaceholders[formData.subCategory] || 'Enter project details' : 
    'Select subject first';

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-6" 
         style={{background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'}}>
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 h-32 w-32 animate-pulse rounded-full bg-blue-400/5 blur-3xl" 
           style={{animationDuration: '4s'}}></div>
      <div className="absolute bottom-0 left-0 h-40 w-40 animate-bounce rounded-full bg-purple-400/5 blur-3xl" 
           style={{animationDelay: '2s', animationDuration: '6s'}}></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-8 flex items-center">
          <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 shadow-lg md:h-12 md:w-12">
            <svg className="h-5 w-5 text-white md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </div>
          <div>
            <h2 className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-lg font-bold text-transparent md:text-2xl">Send us a message</h2>
            <p className="text-sm text-gray-300">We'd love to hear from you</p>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
            <div className="group">
              <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Subject and Sub Category */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="group w-full md:w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
                Subject *
              </label>
              <select
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                <option value="" className="bg-gray-800">Select a subject</option>
                <option value="services" className="bg-gray-800">Services</option>
                <option value="technologies" className="bg-gray-800">Technologies</option>
              </select>
            </div>
            <div className="group w-full md:w-1/2">
              <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
                Sub Category *
              </label>
              <select
                name="subCategory"
                required
                disabled={!formData.subject}
                value={formData.subCategory}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" className="bg-gray-800">
                  {formData.subject ? 'Select sub category' : 'Select subject first'}
                </option>
                {currentSubOptions.map(option => (
                  <option key={option.value} value={option.value} className="bg-gray-800">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Details */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
              Details *
            </label>
            <input
              type="text"
              name="details"
              required
              disabled={!formData.subCategory}
              value={formData.details}
              onChange={handleInputChange}
              placeholder={currentDetailsPlaceholder}
              className="w-full rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Message */}
          <div className="group">
            <label className="mb-2 block text-sm font-medium text-gray-200 transition-colors group-focus-within:text-emerald-400">
              Message *
            </label>
            <textarea
              rows="5"
              name="message"
              required
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project, requirements, and how we can help you achieve your goals..."
              className="w-full resize-none rounded-xl border border-gray-600 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-4 pt-2">
            <button
              type="button"
              onClick={handleSubmit}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-xl shadow-lg hover:shadow-emerald-500/25 hover:scale-105 active:scale-95"
            >
              Send Message
              <svg className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
              </svg>
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-xl border border-gray-600 px-6 py-4 text-gray-300 transition-all duration-300 hover:bg-white/5 hover:scale-105 active:scale-95"
            >
              Reset
            </button>
          </div>

          <p className="mt-2 text-center text-xs text-gray-400">
            * Required fields. We'll get back to you within 24 hours.
          </p>

          <div style={{height: '2.5rem'}}></div>          
        </div>
      </div>
    </div>
  );
};

// Contact Info Item Component
const ContactInfoItem = ({ icon, title, content, description, gradient, hoverShadow }) => {
  return (
    <div className="group flex items-start space-x-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:scale-105 hover:bg-white/10">
      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${gradient} shadow-lg transition-all duration-300 ${hoverShadow}`}>
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="mb-1 text-sm font-semibold text-white md:text-base">{title}</h4>
        <div className="text-sm font-medium md:text-base">
          {content}
        </div>
        {description && (
          <p className="text-xs opacity-70 mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

// Contact Information Component
const ContactInfo = () => {
  const contactItems = [
    {
      icon: (
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: 'Phone',
      content: <p className="text-blue-200">+91 9336592235</p>,
      description: 'Reach us during business hours for prompt assistance.',
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-600',
      hoverShadow: 'group-hover:shadow-blue-500/25'
    },
    {
      icon: (
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      ),
      title: 'Email',
      content: <p className="text-purple-200">director@facultypaths.info</p>,
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-600',
      hoverShadow: 'group-hover:shadow-purple-500/25'
    },
    {
      icon: (
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: 'Address',
      content: (
        <p className="text-emerald-200 leading-relaxed">
         Panchsheel Marg , Barra -8 <br />Kanpur Nagar - 208027 , Uttar Pradesh.
        </p>
      ),
      gradient: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
      hoverShadow: 'group-hover:shadow-emerald-500/25'
    },
    {
      icon: (
        <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Business Hours',
      content: (
        <div className="space-y-1">
          <p className="text-orange-200">
            <span className="text-orange-300">Mon - Fri:</span> 9:00 AM - 6:00 PM
          </p>
          <p className="text-orange-200">
            <span className="text-orange-300">Sat:</span> 10:00 AM - 2:00 PM
          </p>
        </div>
      ),
      description: 'Sunday: Closed',
      gradient: 'bg-gradient-to-r from-orange-500 to-orange-600',
      hoverShadow: 'group-hover:shadow-orange-500/25'
    }
  ];

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8" 
           style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)'}}>
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 h-32 w-32 animate-pulse rounded-full bg-blue-400/10 blur-3xl" 
             style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-0 left-0 h-40 w-40 animate-bounce rounded-full bg-purple-400/10 blur-3xl" 
             style={{animationDelay: '2s', animationDuration: '6s'}}></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg md:h-12 md:w-12">
              <svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-white md:h-6 md:w-6">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div>
              <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent md:text-2xl">Contact Information</h3>
              <p className="text-sm text-blue-200">Get in touch with our team</p>
            </div>
          </div>

          {/* Contact Items */}
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <ContactInfoItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Contact Section Component
const Contact = () => {
  return (
    <section className="relative pt-12 pb-8 md:pt-20 md:pb-16 bg-[url('/images/imagep.jpg')]  bg-cover bg-center w-full min-h-screen">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center md:mb-16">
          <h1 className="mb-3 pt-8 text-2xl font-bold text-white md:mb-6 md:pt-16 md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-xs text-base text-blue-100 sm:max-w-md md:max-w-3xl md:text-xl">
            Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-4 md:gap-12 lg:grid-cols-2">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default Contact;