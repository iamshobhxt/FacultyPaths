import { Users, Award, TrendingUp, Globe } from "lucide-react";

function ReviewSection() {
  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "100+",
      label: "Happy Clients",
      delay: "0ms",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "250+",
      label: "Projects Completed",
      delay: "200ms",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "98%",
      label: "Success Rate",
      delay: "400ms",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: "20+",
      label: "Countries Served",
      delay: "600ms",
    },
  ];

  return (
    <section
      className="relative overflow-hidden pt-8 pb-20 text-white md:py-20"
      style={{
        height: "300px",
        background:
          "linear-gradient(45deg, rgb(147, 88, 247), rgb(97, 151, 238), rgb(16, 215, 226))",
      }}
    >
      {/* Floating circles */}
      <div className="absolute inset-0 hidden opacity-10 md:block">
        <div className="animate-float absolute top-10 left-10 h-32 w-32 rounded-full bg-white"></div>
        <div
          className="animate-float absolute right-10 bottom-10 h-24 w-24 rounded-full bg-white"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="animate-float absolute top-1/2 left-1/4 h-16 w-16 rounded-full bg-white"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-red-900/20"></div>

      <div className="relative z-10 mx-auto h-full max-w-7xl px-2 sm:px-4 lg:px-8">
        <div className="grid h-full grid-cols-2 items-center gap-4 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-fade-in group text-center"
              style={{ animationDelay: stat.delay }}
            >
              {/* Icon wrapper */}
              <div className="bg-opacity-20 group-hover:bg-opacity-30 animate-pulse-glow mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white text-black backdrop-blur-sm transition-all duration-300 group-hover:scale-110 md:mb-4 md:h-20 md:w-20">
                {stat.icon}
              </div>
              {/* Number */}
              <div className="mb-1 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-2xl font-bold text-transparent md:mb-2 md:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              {/* Label */}
              <div className="text-xs font-medium opacity-90 md:text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default ReviewSection

