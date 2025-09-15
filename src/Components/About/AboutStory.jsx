// src/components/OurStorySection.jsx
import React from "react";
import AboutReview from "./AboutReview";

const AboutStory = () => {
  return (
    <section
      className="relative z-10 pt-16 pb-12 md:pt-36 md:pb-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(20, 30, 48, 0.85), rgba(20, 30, 48, 0.85)), url('/culture1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <StoryCard />
      </div>
    </section>
  );
};

const StoryCard = () => {
  return (
    <div className="group relative -mt-8 mb-8 flex w-full transform cursor-pointer flex-col items-center overflow-hidden rounded-xl border border-gray-100/50 bg-white/5 px-4 py-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 hover:shadow-cyan-500/30 hover:shadow-pink-500/20 hover:shadow-purple-500/30 md:-mt-20 md:mb-12 md:px-16 md:py-16">
      {/* gradient overlays */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 transition-all duration-500 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10"></div>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-cyan-500 via-purple-500 to-pink-500 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-30"></div>
      <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 backdrop-blur-sm"></div>

      {/* content */}
      <div className="relative z-10 w-full">
        <h2 className="mb-2 text-xl font-bold text-white transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent sm:text-2xl md:mb-4 md:text-3xl">
          Our Story
        </h2>

        <div className="space-y-4 text-justify text-base leading-relaxed text-blue-100 md:text-lg">
          <p>
           FacultyPaths revolutionizes India's educational landscape by connecting institutions with quality faculty, empowering educators to monetize their expertise, and providing students with personalized learning experiences. We are India's comprehensive educational marketplace with innovative solutions designed to bridge the gap between academic excellence and career success through seamless connections and transparent performance tracking.
          </p>
          <p>
            FacultyPaths is transforming India’s educational ecosystem by linking institutions with top-quality faculty, enabling educators to monetize their expertise, and offering students personalized learning experiences. It serves as a comprehensive educational marketplace, bridging academic excellence and career success through seamless connections and transparent performance tracking.
          </p>
          <p>
           FacultyPaths is revolutionizing India’s education system by seamlessly connecting institutions with skilled faculty, empowering educators to monetize their expertise, and delivering personalized learning experiences to students. As a comprehensive educational marketplace, FacultyPaths bridges the gap between academic excellence and career success. With innovative solutions, it ensures transparent performance tracking, fosters collaboration, and drives quality education through accessible, industry-aligned opportunities for both educators and learners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
