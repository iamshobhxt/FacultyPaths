
// import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

// // Contact Information Component
// const ContactInfo = ({ isMobile = false }) => {
//   const iconSize = isMobile ? "h-4 w-4" : "h-6 w-6";
//   const textSize = isMobile ? "text-xs" : "text-lg";
//   const spacing = isMobile ? "space-x-2" : "space-x-3";
//   const justify = isMobile ? "justify-center" : "";

//   return (
//     <div className="space-y-2 mt-2">
//       <div className={`flex items-center ${spacing} ${justify}`}>
//         <Phone className={`${iconSize} text-blue-500`} />
//         <span className={`text-gray-200 ${textSize} font-medium`}>+91 9336592235</span>
//       </div>
//       <div className={`flex items-center ${spacing} ${justify}`}>
//         <Mail className={`${iconSize} text-blue-500`} />
//         <span className={`text-gray-200 ${textSize} font-medium`}>facultypaths.info</span>
//       </div>
//       <div className={`flex items-center ${spacing} mb-1 ${justify}`}>
//         <MapPin className={`${isMobile ? "h-2 w-2" : "h-7 w-6"} text-blue-500`} />
//         <span className={`text-gray-200 ${textSize} font-medium ${isMobile ? 'text-center break-words' : ''}`}>
//           {isMobile ? (
//             "Panchsheel Marg , Barra -8 ,Kanpur Nagar - 208027 , Uttar Pradesh."
//           ) : (
//             <>
//               Panchsheel Marg , Barra -8 <br />
//               Kanpur Nagar - 208027 , Uttar Pradesh.
//             </>
//           )}
//         </span>
//       </div>
//     </div>
//   );
// };

// // Logo and Description Component
// const CompanyBranding = ({ isMobile = false }) => {
//   const logoSize = isMobile ? "h-16 sm:h-24" : "h-24 md:h-28";
//   const textSize = isMobile ? "text-xs sm:text-sm" : "text-base md:text-lg";
//   const textAlign = isMobile ? "text-center" : "";

//   return (
//     <div className="flex flex-col space-y-4 lg:col-span-3">
//       <div className={`w-full h-full flex ${isMobile ? 'justify-center' : 'justify-center'} items-center`}>
//         <img 
//           src="/logo.png" 
//           alt="Infocera Logo" 
//           className={`${logoSize} w-auto object-contain`}
//           draggable="false"
//         />
//       </div>
//       <p className={`text-gray-100 ${textSize} font-medium leading-snug max-w-2xl drop-shadow mt-2 ${textAlign}`}>
//         Leading IT services provider delivering{' '}
//         <span className="text-blue-500 font-bold">innovative technology solutions</span>{' '}
//         that drive business growth and digital transformation.
//       </p>
//       <ContactInfo isMobile={isMobile} />
//     </div>
//   );
// };

// // Navigation Section Component
// const NavigationSection = ({ title, items, hasButtons = false, isMobile = false }) => {
//   const headerStyle = isMobile 
//     ? "text-lg font-bold mb-1 pb-1 bg-gradient-to-r from-[#0154b4] to-[#7deff6] bg-clip-text text-transparent"
//     : "text-lg font-bold mb-1 pb-1";

//   const borderStyle = isMobile 
//     ? { borderBottom: '3px solid', borderImage: 'linear-gradient(to right, rgb(1, 84, 180), rgb(125, 239, 246)) 1 / 1 / 0 stretch' }
//     : { color: 'rgb(37, 99, 235)', borderBottom: '3px solid rgb(37, 99, 235)' };

//   return (
//     <div>
//       <h3 className={headerStyle} style={borderStyle}>
//         {title}
//       </h3>
//       <ul className="text-xs sm:text-sm md:text-base lg:text-lg space-y-1 list-none m-0 p-0">
//         {items.map((item, index) => (
//           <li key={index} className={hasButtons ? "relative m-0 p-0" : ""}>
//             {hasButtons ? (
//               <button
//                 className="footer-name-popover-trigger w-full flex items-center gap-1 text-left text-gray-300 hover:text-blue-500 transition-colors focus:outline-none font-semibold leading-tight"
//                 aria-label={item}
//                 title={item}
//                 style={{ padding: '0px', background: 'none', border: 'none', margin: '0px' }}
//               >
//                 <span className="whitespace-nowrap">{item}</span>
//                 <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
//               </button>
//             ) : item.href ? (
//               <a 
//                 className="text-gray-300 hover:text-blue-500 transition-colors font-semibold" 
//                 href={item.href}
//               >
//                 <span className="whitespace-nowrap">{item.text}</span>
//               </a>
//             ) : (
//               <span className="text-gray-300 font-semibold">
//                 <span className="whitespace-nowrap">{item}</span>
//               </span>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// // Desktop Footer Layout
// const DesktopFooter = () => {
//   const services = [
//     'Online Marketing', 'Web Design & Development', 'Mobile Application', 
//     'Software', 'Creative Design', 'Consultant', 'Data Science', 'Testing'
//   ];

//   const industries = [
//     'Automotive', 'Ecommerce', 'Education', 'Finance', 'Gaming',
//     'Healthcare', 'Manufacturing', 'Real Estate', 'Retail'
//   ];

//   const technologies = [
//     'UI Design', 'Server Side Scripting', 'Cloud Computing', 
//     'Data Mining and Analytics', 'Web Server Technology', 'Testing', 'Software Process'
//   ];

//   const companyLinks = [
//     { text: 'About Us', href: '/about' },
//     { text: 'Team', href: '/about#leadership-team' },
//     { text: 'Culture', href: '/about' },
//     { text: 'Careers', href: '/careers' },
//     { text: 'Portfolio', href: '/portfolio' },
//     { text: 'Contact', href: '/contact' },
//     { text: 'Privacy Policy', href: '/contact' },
//     { text: 'Terms of Service', href: '/contact' }
//   ];

//   const products = [
//     { text: 'CloudSync Pro', href: '/products' },
//     { text: 'SecureGuard Enterprise', href: '/products' },
//     { text: 'AI Analytics Suite', href: '/products' },
//     { text: 'MobileFlow Builder', href: '/products' },
//     { text: 'DataVault Pro', href: '/products' },
//     { text: 'DevOps Accelerator', href: '/products' },
//     { text: 'TeamConnect Hub', href: '/products' },
//     { text: 'BusinessIntel Dashboard', href: '/products' },
//     { text: 'WebForce CMS', href: '/products' },
//     { text: 'AutoFlow Engine', href: '/products' }
//   ];

//   const resources = [
//     { text: 'Blog', href: '/blog' },
//     { text: 'News', href: '/news' },
//     { text: 'Documentation', href: '/contact' },
//     { text: 'FAQ', href: '/contact' },
//     { text: 'Products', href: '/products' },
//     { text: 'Technical Support', href: '/contact' }
//   ];

//   return (
//     <div className="hidden lg:block max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
//       <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 items-start">
//         <CompanyBranding />
        
//         <div className="hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-gray-700/60 to-transparent mx-2 lg:col-span-1" />
        
//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[auto,auto,auto,auto,auto] grid-rows-2 gap-x-4 md:gap-x-10 gap-y-4 md:gap-y-0 col-span-2 lg:col-span-5">
//           <div className="row-start-1 col-start-1">
//             <NavigationSection title="Services" items={services} hasButtons={true} />
//           </div>
//           <div className="row-start-1 col-start-2">
//             <NavigationSection title="Industries" items={industries} />
//           </div>
//           <div className="row-start-1 col-start-3">
//             <NavigationSection title="Technologies" items={technologies} hasButtons={true} />
//           </div>
//           <div className="row-start-2 col-start-1">
//             <NavigationSection title="Company" items={companyLinks} />
//           </div>
//           <div className="row-start-2 col-start-2">
//             <NavigationSection title="Products" items={products} />
//           </div>
//           <div className="row-start-2 col-start-3">
//             <NavigationSection title="Resources & Support" items={resources} />
//           </div>
//         </div>
//       </div>
      
//       <hr className="border-t border-gray-700 w-full mt-20 mb-2" />
//       <div className="flex flex-col text-center md:flex-row justify-between items-center w-full">
//         <p className="text-gray-400 text-center text-sm">Facultypaths © 2025. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// // Mobile Footer Layout
// const MobileFooter = () => {
//   const services = [
//     'Online Marketing', 'Web Design & Development', 'Mobile Application', 
//     'Software', 'Creative Design', 'Consultant', 'Data Science', 'Testing'
//   ];

//   const industries = [
//     'Automotive', 'Ecommerce', 'Education', 'Finance', 'Gaming',
//     'Healthcare', 'Manufacturing', 'Real Estate', 'Retail'
//   ];

//   const technologies = [
//     'UI Design', 'Server Side Scripting', 'Cloud Computing', 
//     'Data Mining and Analytics', 'Web Server Technology', 'Testing', 'Software Process'
//   ];

//   const companyLinks = [
//     { text: 'About Us', href: '/about' },
//     { text: 'Team', href: '/about#leadership-team' },
//     { text: 'Culture', href: '/about' },
//     { text: 'Careers', href: '/careers' },
//     { text: 'Portfolio', href: '/portfolio' },
//     { text: 'Contact', href: '/contact' },
//     { text: 'Privacy Policy', href: '/contact' },
//     { text: 'Terms of Service', href: '/contact' }
//   ];

//   const products = [
//     { text: 'CloudSync Pro', href: '/products' },
//     { text: 'SecureGuard Enterprise', href: '/products' },
//     { text: 'AI Analytics Suite', href: '/products' },
//     { text: 'MobileFlow Builder', href: '/products' },
//     { text: 'DataVault Pro', href: '/products' },
//     { text: 'DevOps Accelerator', href: '/products' },
//     { text: 'TeamConnect Hub', href: '/products' },
//     { text: 'BusinessIntel Dashboard', href: '/products' },
//     { text: 'WebForce CMS', href: '/products' },
//     { text: 'AutoFlow Engine', href: '/products' }
//   ];

//   const resources = [
//     { text: 'Blog', href: '/blog' },
//     { text: 'News', href: '/news' },
//     { text: 'Documentation', href: '/contact' },
//     { text: 'FAQ', href: '/contact' },
//     { text: 'Products', href: '/products' },
//     { text: 'Technical Support', href: '/contact' }
//   ];

//   return (
//     <div className="block lg:hidden max-w-7xl mx-auto px-2 sm:px-4 py-10 relative z-10 w-full">
//       <div className="flex flex-col gap-y-8">
//         <div className="flex flex-col space-y-6 mb-6">
//           <div className="flex items-center justify-center">
//             <div className="text-4xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
//               <img 
//                 src="/logo.png" 
//                 alt="Infocera Logo" 
//                 className="h-16 sm:h-24 w-auto object-contain" 
//                 draggable="false"
//               />
//             </div>
//           </div>
//           <p className="text-gray-100 text-xs sm:text-sm font-medium leading-snug max-w-2xl drop-shadow text-center">
//             Leading IT services provider delivering{' '}
//             <span className="text-blue-500 font-bold">innovative technology solutions</span>{' '}
//             that drive business growth and digital transformation.
//           </p>
//           <ContactInfo isMobile={true} />
//         </div>
        
//         <div className="flex flex-col gap-y-8">
//           <NavigationSection title="Services" items={services} hasButtons={true} isMobile={true} />
//           <NavigationSection title="Industries" items={industries} isMobile={true} />
//           <NavigationSection title="Technologies" items={technologies} hasButtons={true} isMobile={true} />
//           <NavigationSection title="Products" items={products} isMobile={true} />
//           <NavigationSection title="Company" items={companyLinks} isMobile={true} />
//           <NavigationSection title="Resources & Support" items={resources} isMobile={true} />
//         </div>
//       </div>
      
//       <hr className="border-t border-gray-700 w-full mt-10 mb-2" />
//       <div className="flex flex-col text-center items-center w-full gap-y-4">
//         <p className="text-gray-400 text-xs text-center">Facultypaths © 2025 . All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// // Main Footer Component
// const Footer = () => {
//   return (
//     <footer className="bg-black text-white relative overflow-hidden w-full">
//       <DesktopFooter />
//       <MobileFooter />
//     </footer>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import {Instagram ,Youtube , Facebook , Twitter ,LetterTextIcon} from "lucide-react";

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }
    
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <input 
          type="email" 
          placeholder="Email address" 
          className="flex-1 px-4 py-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button 
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-black rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Joining...' : 'Join our community ✉️'}
        </button>
      </div>
    </div>
  );
};

// Footer Group Component
const FooterGroup = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{title}</h3>
      <div className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.href || '#'} 
            className="text-gray-600 hover:text-blue-600 transition-colors text-sm cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              if (link.onClick) link.onClick();
              console.log(`Clicked: ${link.text}`);
            }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

// Social Links Component
const SocialLinks = () => {
  const socialLinks = [
    { platform: 'instagram', url: 'https://www.instagram.com/yourusername', icon: <Instagram className="h-8 w-8" />, label: 'Instagram' },
    { platform: 'youtube', url: 'https://www.youtube.com/yourchannel', icon:<Youtube className="h-8 w-8" /> , label: 'YouTube' },
    { platform: 'linkedin', url: 'https://www.linkedin.com/in/yourusername', icon: <Facebook className="h-8 w-8" />, label: 'LinkedIn' },
    { platform: 'twitter', url: 'https://twitter.com/yourusername', icon: <Twitter className="h-8 w-8" />, label: 'Twitter' }
  ];

  const handleSocialClick = (platform, url) => {
    console.log(`Opening ${platform}: ${url}`);
    alert(`Would open ${platform} in new tab`);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">SOCIALS</h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <button 
            key={social.platform}
            onClick={() => handleSocialClick(social.platform, social.url)}
            className="flex flex-col items-center  justify-center p-3 bg-white rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
            title={social.label}
          >
            <span className="text-xl mb-1">{social.icon}</span>
            <span className="text-xs text-black">{social.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// Main Footer Component
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const footerData = {
    resources: [
      { text: 'Contact Us', href: '/contact' },
      { text: 'Technical Support', href: '/support' },
      { text: 'Search Site', href: '/search' },
      { text: 'Terms of Use', href: '/terms' },
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Safeguarding Commitments', href: '/safeguarding' }
    ],
    product: [
      { text: 'Features', href: '/features' },
      { text: 'Use Cases', href: '/use-cases' },
      { text: 'Testimonials', href: '/testimonials' },
      { text: 'Book a Demo', href: '/demo', onClick: () => alert('Demo booking form would open here') },
      { text: 'facultypaths Campus', href: '/campus' },
      { text: 'CareerCon Monthly', href: '/careercon' }
    ],
    conversations: [
      { text: 'Advice & Inspiration', href: '/advice' },
      { text: 'Expert Interviews', href: '/interviews' },
      { text: 'News & Updates', href: '/news' },
      { text: 'Climate Convos', href: '/climate' },
      { text: 'Work Technology', href: '/work-tech' },
      { text: 'Artificial Intelligence', href: '/ai' }
    ]
  };

  return (
    <div className="bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Newsletter Section */}
        <Newsletter />
        
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-3">
            <h2 className="text-3xl font-bold text-white">FacultyPaths</h2>
            <p className="text-sm text-white">Empowering academic careers worldwide.</p>
          </div>
          
          {/* Links Sections */}
          <FooterGroup title="RESOURCES" links={footerData.resources} />
          <FooterGroup title="PRODUCT" links={footerData.product} />
          <FooterGroup title="CONVERSATIONS" links={footerData.conversations} />
          
          {/* Social Links */}
          <SocialLinks />
        </div>
        
        {/* Footer Bottom */}
        <hr className="border-gray-300 mb-6" />
        <div className="text-center">
          <p className="text-sm text-white">
            Facultypaths © {currentYear} | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;