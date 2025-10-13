
// src/components/StatsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { Users, Target, TrendingUp, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: 30, label: "Team Members" },
  { icon: Target, value: 15, label: "Projects Completed" },
  { icon: TrendingUp, value: 3, label: "Years in Business" },
  { icon: Globe, value: 5, label: "Countries Served" },
];

function AboutReview() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-16"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.9) 50%, rgba(6, 182, 212, 0.85) 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Floating background blobs */}
      <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
      <div className="absolute top-10 left-10 h-32 w-32 animate-bounce rounded-full bg-blue-400/20 blur-3xl"></div>
      <div className="absolute right-10 bottom-10 h-40 w-40 animate-bounce rounded-full bg-purple-400/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-cyan-400/20 blur-2xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="grid w-full grid-cols-2 md:grid-cols-4">
          {stats.map((item, index) => (
            <StatCard
              key={index}
              icon={item.icon}
              value={item.value}
              label={item.label}
              run={visible}
              borderLeft={index !== 0}
              borderTop={index >= 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, run, borderLeft, borderTop }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (run && count < value) {
      const duration = 2000;
      const step = Math.max(1, Math.floor(value / 100));
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev + step < value) return prev + step;
          clearInterval(timer);
          return value;
        });
      }, 15);
      return () => clearInterval(timer);
    }
  }, [run]);

  return (
    <div
      className={`flex flex-col items-center justify-center py-4 text-center md:py-0
        ${borderLeft ? "md:border-l md:border-blue-300/30" : ""}
        ${borderTop ? "border-t border-blue-300/30 md:border-t-0" : ""}
      `}
    >
      <div className="mx-auto mb-2 flex h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16 transform items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-slate-800 via-blue-600 to-cyan-500 shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:shadow-blue-500/50 sm:mb-4">
        <Icon className="h-5 w-5 sm:h-8 sm:w-8 text-white drop-shadow-lg" />
      </div>
      <div className="mb-1 text-xl font-bold text-white drop-shadow-lg sm:mb-2 sm:text-2xl md:text-3xl">
        {count}+
      </div>
      <div className="text-xs font-medium text-blue-100 sm:text-base">{label}</div>
    </div>
  );
}

export default AboutReview