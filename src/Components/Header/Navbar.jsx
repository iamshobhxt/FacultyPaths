// Navbar.jsx
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { href } from "react-router";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    dropdown: [
      { name: "Web Development" },
      { name: "Mobile Apps" },
      { name: "Cloud Services" },
      { name: "Consulting" },
    ],
  },
  {
    name: "Technologies",
    dropdown: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Python" },
      { name: "AWS" },
      { name: "Azure" },
    ],
  },
  {
    name: "Sessions",href :"/session"},
  // { name: "Portfolio", href: "/portfolio" },
  { name: "Learnig Hub", href: "/learning-hub" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // activeDropdown can be 'Services' or 'mobile-Services', etc.
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  const toggleDropdown = (key) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  // Close on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-white text-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/">
              <img src="/images/icon.png" alt="logo" className="h-9 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdown;
              return (
                <div key={item.name} className="relative group">
                  {hasDropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={activeDropdown === item.name}
                        className="flex items-center px-3 py-2 text-sm font-medium text-black hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200"
                      >
                        {item.name}
                        <ChevronDown
                          className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu (desktop) */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.dropdown.map((d) => (
                            <a
                              key={d.name}
                              href={d.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                            >
                              {d.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-black hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/account"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              My Account
            </a>

            {/* <button className="hidden md:block text-black hover:text-black transition-colors duration-200" aria-label="search">
              <Search className="h-5 w-5" />
            </button> */}

            {/* Mobile menu button */}
            <button className="lg:hidden text-black hover:text-black" onClick={() => { setIsMenuOpen((v) => !v); setActiveDropdown(null); }}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2">
              {navItems.map((item) => {
                const hasDropdown = !!item.dropdown;
                const mobileKey = `mobile-${item.name}`;
                return (
                  <div key={item.name}>
                    {hasDropdown ? (
                      <>
                        <button
                          className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-black hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                          onClick={() => toggleDropdown(mobileKey)}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transform transition-transform duration-200 ${
                              activeDropdown === mobileKey ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {activeDropdown === mobileKey && (
                          <div className="ml-4 mt-1 space-y-1">
                            {item.dropdown.map((d) => (
                              <a
                                key={d.name}
                                href={d.href}
                                onClick={() => {
                                  setIsMenuOpen(false);
                                  setActiveDropdown(null);
                                }}
                                className="block px-3 py-2 text-sm text-black hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                              >
                                {d.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 text-base font-medium text-black hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                );
              })}

              {/* <div className="pt-2 mt-2 border-t border-slate-200">
                <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200">
                  <Search className="inline h-5 w-5 mr-2" />
                  Search
                </button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
