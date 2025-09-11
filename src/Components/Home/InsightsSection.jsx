import { useState } from "react";

// Dummy posts (you can fetch from API later)
const posts = [
  {
    id: 1,
    category: "TECHNOLOGY",
    date: "17-06-2025",
    title: "Logistics For Leaders: Smart Strategies For Vehicle Relocation",
    description:
      "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence and strategic planning...",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=400&q=80",
    tags: ["Logistics", "Vehicle", "Strategy"],
    link: "/blog/logistics-leaders-vehicle-relocation",
  },
  {
    id: 2,
    category: "SOFTWARE TRAINING",
    date: "12-06-2025",
    title: "Discover Key Insights About The Automation Software Testing Course",
    description:
      "Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing professionals in recent years...",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    tags: ["Testing", "Automation", "Training"],
    link: "/blog/automation-software-testing-course",
  },
];

function InsightsHeader() {
  return (
    <div className="flex w-full flex-col justify-center md:w-1/3 md:pt-8 md:pb-16">
      <div className="text-left md:pl-4">
        {/* Icon Circle */}
        <div
          className="animate-pulse-glow mx-0 mb-4 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl md:mb-8 md:h-24 md:w-24"
          style={{
            background: "linear-gradient(to right, rgb(125, 239, 246), rgb(1, 84, 180))",
          }}
        >
          <svg
            className="h-8 w-8 text-white md:h-12 md:w-12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        {/* Title */}
        <h2
          className="mb-2 text-2xl font-bold text-white sm:text-3xl md:mb-6 md:text-5xl md:text-black"
          style={{ fontFamily: "Orbitron, Arial, sans-serif" }}
        >
          Our Insights
        </h2>
        <div
          className="mx-0 h-1 w-16 rounded-full md:w-24"
          style={{
            background: "linear-gradient(to right, rgb(125, 239, 246), rgb(1, 84, 180))",
          }}
        ></div>
      </div>
    </div>
  );
}

function InsightCard({ post }) {
  return (
    <article className="animate-fade-in group overflow-hidden rounded-2xl border border-purple-200/50 bg-white/95 p-2 text-gray-900 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-500/25 md:rounded-3xl md:p-0 md:hover:-translate-y-3">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-20 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48 md:group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      {/* Content */}
      <div className="p-2 md:p-6">
        <div className="mb-2 flex items-center justify-between md:mb-4">
          <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 text-xs font-semibold text-white shadow-lg md:px-3 md:py-2">
            {post.category}
          </span>
          <span className="flex items-center text-xs text-gray-500 md:text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-calendar mr-1 h-3 w-3 md:h-4 md:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            {post.date}
          </span>
        </div>
        <h3 className="mb-2 line-clamp-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-purple-600 md:mb-3 md:text-xl">
          {post.title}
        </h3>
        <p className="mb-2 line-clamp-3 text-xs text-gray-600 md:mb-4 md:text-base">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          {/* Tags */}
          <div className="flex space-x-1 md:space-x-2">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-purple-200 bg-purple-50 px-2 py-0.5 text-xs text-purple-600 md:px-3 md:py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Read More */}
          <a
            href={post.link}
            className="inline-flex items-center text-xs font-semibold text-purple-600 transition-colors transition-transform group-hover:translate-x-1 hover:text-purple-700 md:text-base"
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="lucide lucide-arrow-right ml-1 h-3 w-3 md:h-4 md:w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function InsightsSection() {
  const [current, setCurrent] = useState(0);

  const nextPost = () => {
    setCurrent((prev) => (prev + 1) % posts.length);
  };

  const prevPost = () => {
    setCurrent((prev) => (prev - 1 + posts.length) % posts.length);
  };

  return (
    <section
      className="relative overflow-hidden py-20 text-black"
      style={{ backgroundColor: "rgb(17, 17, 17)" }}
    >
      {/* Background triangle */}
      <div className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-full md:block">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          <defs>
            <linearGradient id="triangleGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#0154b4" />
              <stop offset="100%" stopColor="#7deff6" />
            </linearGradient>
          </defs>
          <polygon
            points="-270,0 -270,800 650,400"
            stroke="#111"
            strokeWidth="24"
            fill="url(#triangleGradient)"
          ></polygon>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row md:items-stretch">
          {/* Left Header */}
          <InsightsHeader />

          {/* Right Side (Posts + Controls) */}
          <div className="relative mt-6 flex w-full flex-col items-center md:mt-0 md:w-2/3">
            {/* Show current post */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <InsightCard post={posts[current]} />
              <InsightCard post={posts[(current + 1) % posts.length]} />
            </div>

            {/* Controls */}
            <div className="mt-4 flex justify-center space-x-2 md:mt-8 md:space-x-4">
              <button
                onClick={prevPost}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 md:h-10 md:w-10 md:hover:scale-110"
              >
                ◀
              </button>
              <button
                onClick={nextPost}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/30 md:h-10 md:w-10 md:hover:scale-110"
              >
                ▶
              </button>
            </div>

            {/* View All */}
            <div className="mt-6 flex justify-center">
              <a href="/blog">
                <button className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-white shadow-md transition-all hover:scale-105">
                  <span>View All</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 
                      4a.5.5 0 0 1 0 .708l-4 
                      4a.5.5 0 0 1-.708-.708L13.293 
                      8.5H1.5A.5.5 0 0 1 1 8z"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsSection
