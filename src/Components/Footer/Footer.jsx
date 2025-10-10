import React, { useState } from "react";
import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

// ✅ Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter an email address");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail("");
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
          {isSubmitting ? "Joining..." : "Join our community ✉️"}
        </button>
      </div>
    </div>
  );
};

const FooterGroup = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-col space-y-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href || "#"}
            className="text-gray-400 hover:text-blue-400 transition-colors text-sm cursor-pointer"
            target={link.href?.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            onClick={(e) => {
              if (link.onClick) {
                e.preventDefault();
                link.onClick();
              }
            }}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};


const SocialLinks = () => {
  const socialLinks = [
    {
      platform: "instagram",
      url: "https://www.instagram.com/facultypaths/",
      icon: <Instagram className="h-8 w-8" />,
      label: "Instagram",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@facultypaths?si=ZLTUQU-YaPiMHr4c",
      icon: <Youtube className="h-8 w-8" />,
      label: "YouTube",
    },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/facultypaths/posts/?feedView=all",
      icon: <Facebook className="h-8 w-8" />,
      label: "LinkedIn",
    },
    {
      platform: "whatsapp",
      url: "https://whatsapp.com/channel/0029VaqmcXALI8YRqcXkWH0N",
      icon: (
        <MessageCircle className="h-8 w-8 text-green-500" /> 
      ),
      label: "WhatsApp",
    },
  ];

  const handleSocialClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
        SOCIALS
      </h3>
      <div className="grid grid-cols-2 gap-3">
        {socialLinks.map((social) => (
          <button
            key={social.platform}
            onClick={() => handleSocialClick(social.url)}
            className="flex flex-col items-center justify-center p-3 bg-white rounded-md hover:bg-gray-200 transition-colors cursor-pointer"
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

// ✅ Main Footer Component
const Footer = () => {
  const [currentYear] = useState(new Date().getFullYear());

  const footerData = {
    resources: [
      { text: "Contact Us" },
      { text: "Technical Support" },
      { text: "Search Site" },
      { text: "Terms of Use"},
      { text: "Privacy Policy"},
      { text: "Safeguarding Commitments"},
    ],
    product: [
      { text: "Features"},
      { text: "Use Cases"},
      { text: "Testimonials" },
      {
        text: "Book a Demo",
        onClick: () => alert("Demo booking form would open here"),
      },
      { text: "FacultyPaths Campus" },
      { text: "CareerCon Monthly" },
    ],
    conversations: [
      { text: "Advice & Inspiration"},
      { text: "Expert Interviews" },
      { text: "News & Updates"},
      { text: "Climate Convos" },
      { text: "Work Technology" },
      { text: "Artificial Intelligence" },
    ],
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
            <p className="text-sm text-white">
              Empowering academic careers worldwide.
            </p>
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
            FacultyPaths © {currentYear} | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
