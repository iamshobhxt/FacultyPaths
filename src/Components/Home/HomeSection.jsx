// HomeSection.jsx

import { Clock, Lightbulb, Play, Rocket, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";

function HomeSection() {  
  return (
    <>
    
    <section  className="hero-section relative bg-gradient-to-br from-slate-900 via-purple-900 flex min-h-screen items-center justify-center overflow-hidden">
      <HomeBackground />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50"></div>

      <div className="absolute top-12 left-0 z-30 w-full px-2 pt-8 pb-0 text-center sm:px-4 md:px-12 md:pt-12 md:pb-16">
        <HomeHeading />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-2 pt-28 sm:px-4 md:pt-12 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:flex-row">
          <div className="flex w-full flex-col items-center space-y-8 text-center md:mt-8 md:space-x-8 md:pt-12">
            <HomeButton />
            <HomeFeatures />
          </div>
        </div>
        <ScrollDownIcon />
      </div>
    </section>
    </>
  );
}


function HomeBackground() {
  const images = [
    "/images/group_dicusses.jpeg",
    "/images/Handshake.jpeg",
    "/images/expain.jpeg",
    "/images/team_mates.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block">
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}
    </div>
  );
}


function HomeButton() {
  return (
    <>
    <ButtonSlim />

    <p className="max-w-xs text-base text-blue-100 transition-colors duration-300 sm:max-w-md md:max-w-2xl md:text-xl">
      We deliver innovative technology solutions to help your business thrive
      in a digital world.
    </p>

    <div className="flex flex-col gap-3 sm:flex-row md:gap-4">
      <ButtonCTA title='Get Started' href='about' icon={<Rocket />} />

      
      <ButtonCTA title='Watch Demo' href='about' icon={<Play />} />
    </div>
    </>
  );
}


function ButtonCTA({ title, href, icon }) {
  const handleClick = (e) => {
    const btn = e.currentTarget;
    const ripple = document.createElement("span");
    ripple.className = "absolute rounded-full bg-blue-400/40 animate-ping";
    ripple.style.left = `${e.clientX - btn.getBoundingClientRect().left}px`;
    ripple.style.top = `${e.clientY - btn.getBoundingClientRect().top}px`;
    ripple.style.width = ripple.style.height = "100px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <a
      href={`/${href}`}
      onClick={handleClick}
      className="relative group inline-flex min-w-[200px] items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-900/30 md:px-8 md:py-4 md:text-base overflow-hidden"
    >
      <span className="mr-2 h-8 w-8 text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
        {icon}
      </span>
      <span className="font-bold tracking-wide">{title}</span>
    </a>
  );
}


function ButtonSlim() {
  return     <div className="flex flex-col gap-3  sm:flex-row sm:py-3 md:gap-4">
      <a
        className="inline-flex cursor-pointer items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1.5 text-xs font-medium text-blue-800 transition-transform hover:scale-105 md:px-4 md:py-2 md:text-sm"
        href="/about"
        >
        <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600 md:h-2 md:w-2"></span>
        Leading IT Services Provider
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="lucide lucide-chevron-down ml-2 h-3 w-3 animate-bounce md:h-4 md:w-4"
          width="24" height="24" viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </a>
    </div>
}

const features = [
  { icon: <Lightbulb />, title: "Innovation", desc: "Creative Solutions, Unified Systems" },
  { icon: <Shield />, title: "Secure & Reliable", desc: "Enterprise-grade security" },
  { icon: <Clock />, title: "24/7 Support", desc: "Round-the-clock assistance" },
  { icon: <Users />, title: "Expert Team", desc: "Industry professionals" },
];

function HomeFeatures() {
  return (
    <div className="z-30 mt-10 flex w-full flex-wrap justify-center gap-2 md:mt-20 md:gap-4">
      {features.map((f, idx) => (
        <div
          key={idx}
          className="group animate-bounce-float w-32 cursor-pointer rounded-xl border border-gray-700 bg-white/10 p-3 backdrop-blur-sm transition-all duration-300 hover:translate-y-1 hover:border-blue-300 hover:shadow-lg md:w-40 md:p-4"
        >
          <span className=" mb-1 h-5 w-5 text-blue-600 transition-transform group-hover:scale-110 md:mb-2 md:h-6 md:w-6">
            {f.icon}
          </span>
          <h3 className="text-xs text-white transition-colors group-hover:text-blue-300 md:text-base">
            <span className="block font-semibold">{f.title}</span>
            {f.desc && (
              <span className="text-xs font-normal text-blue-100 md:text-sm">
                {f.desc}
              </span>
            )}
          </h3>
        </div>
      ))}
    </div>
  );
}

function HomeHeading() {
  return (
    <h1 className="w-full text-center text-2xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
      <span className="block transform transition-all duration-700 ease-in-out hover:scale-105">
        Accelerate Growth with Digital Innovation
      </span>
    </h1>
  );
}


function ScrollDownIcon() {
  const handleScroll = () => {
    const nextSection = document.querySelector("#Services"); // target section
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="mt-8 flex justify-center md:absolute md:-bottom-16 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:transform md:animate-bounce cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="lucide lucide-chevron-down h-6 w-6 text-gray-400 transition-colors hover:text-blue-600 md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6"></path>
      </svg>
    </div>
  );
}



export default HomeSection
