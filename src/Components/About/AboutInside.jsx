import React, { useEffect, useRef, useState } from "react";

const AboutInside = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="demo-video"
      ref={sectionRef}
      className="relative overflow-hidden py-16"
      style={{
        background:
          "linear-gradient(45deg, rgb(147, 88, 247), rgb(97, 151, 238), rgb(16, 215, 226))",
      }}
    >
      {/* Background Panels */}
      <div
        className="absolute top-0 bottom-0 left-0 z-0 hidden h-full lg:block"
        style={{ width: "75%" }}
      >
        <div className="h-full w-full bg-[#232433]"></div>
      </div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-0 block h-full lg:hidden">
        <div className="h-full w-full bg-[#232433]"></div>
      </div>

      {/* Curved Line */}
      <svg
        className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full"
        viewBox="0 0 1600 500"
        fill="none"
        xmlns="https://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="aboutLineGradient"
            x1="0"
            y1="0"
            x2="1600"
            y2="500"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9358f7"></stop>
            <stop offset="0.5" stopColor="#6197ee"></stop>
            <stop offset="1" stopColor="#10d7e2"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0 350 Q 400 100 900 400 Q 1300 600 1600 100"
          stroke="url(#aboutLineGradient)"
          strokeWidth="4"
          fill="none"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col items-center justify-between gap-8 transition-all duration-700 ease-out lg:flex-row lg:gap-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Text Content */}
          <div className="flex w-full flex-col items-start rounded-2xl border border-[#2a2b38] bg-[#2a2b38] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl lg:w-1/2">
            <h2 className="mb-4 text-left text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Inside FACULTYPATHS
            </h2>
            <p className="mb-6 text-left text-xl text-white md:text-2xl lg:text-3xl">
              A Glimpse into Our Vision, Values, and Innovation
            </p>
            <p className="mb-8 text-left text-base leading-relaxed text-white">
              Experience our world through this brief video, highlighting what FACULTY represents — our journey, our mission, and the dedicated minds behind our innovations. Discover how we develop intelligent, human-centered solutions that empower institutions, enhance learning, and shape the future of education.
            </p>
            <div
              className="mb-8 h-1 w-20 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgb(125, 239, 246), rgb(1, 84, 180))",
              }}
            ></div>
          </div>

          {/* Right Video Block */}
          <div className="flex w-full justify-center rounded-2xl border border-[#232433] bg-[#232433] p-8 shadow-lg lg:w-1/2">
            <video
              src="/images/demovideo.mp4"
              poster="/portfoliobg.jpg"
              controls
              className="w-full max-w-2xl rounded-2xl border-4 border-white bg-black shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInside;
