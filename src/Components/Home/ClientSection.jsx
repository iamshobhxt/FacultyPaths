import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ashutosh Shukla",
    role: "Frontend developer Intern",
    company: "ProdeskIT",
    feedback:
      "FacultyPaths helped me secure my summer internship at Prodesk IT as a Frontend Developer! The mentorship and industry-relevant training were game-changers for my career.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rama University",
    role: "Company Institution",
    company: "College",
    feedback:
      "FacultyPaths transformed our placement record! After their training program for 120+ students and bringing IT company partnerships, we achieved 80% placement success - a historic first for our institution.",
    rating: 5,
  },
  {
    id: 3,
    name: "Himanshi Shah",
    role: "Placed",
    company: "Wipro",
    feedback:
      "After three transformative months as an intern at FacultyPaths, I was promoted to Presales Lead! The incredible learning environment and visionary leadership created the perfect growth opportunity.",
    rating: 4,
  },
  {
    id: 3,
    name: "Harshita Sharma",
    role: "Microsoft Software Engineer",
    company: "Microsoft",
    feedback:
      "Completed FacultyPaths' 100-hour training program and within 25 days, I cracked Microsoft interview with 20 LPA package! The intensive training was worth every minute.",
    rating: 4,
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-800 p-6 shadow-2xl backdrop-blur-sm">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-xl" />
      <div className="relative z-10">
        {/* Stars */}
        <div className="mb-4 flex justify-center">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-6 w-6 text-yellow-400 fill-current drop-shadow-sm"
            />
          ))}
        </div>

        {/* Feedback */}
        <blockquote className="mb-6 text-center text-base font-medium text-gray-200 leading-relaxed">
          {testimonial.feedback}
        </blockquote>

        {/* User */}
        <div className="flex items-center justify-center space-x-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
            <svg
              className="h-8 w-8 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <div className="font-bold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-300">{testimonial.role}</div>
            <div className="mt-1 rounded-full border border-blue-700/50 bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-400">
              {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ClientSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(to_right,_#0a223a,_#0154b4)] py-20">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.10),transparent_70%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.08),transparent_70%)]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent text-4xl md:text-5xl font-extrabold"
            style={{ fontFamily: "Exo, Arial, sans-serif" }}
          >
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Don't just take our word for it. Here's what industry leaders say
            about our services.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mx-auto max-w-3xl">
          <TestimonialCard testimonial={testimonials[activeIndex]} />

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="group absolute top-1/2 left-0 -translate-y-1/2 -translate-x-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-600/50 bg-gray-800/90 text-gray-300 shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-blue-500 hover:text-blue-400"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="group absolute top-1/2 right-0 -translate-y-1/2 translate-x-6 flex h-12 w-12 items-center justify-center rounded-full border border-gray-600/50 bg-gray-800/90 text-gray-300 shadow-2xl backdrop-blur-md transition-all hover:scale-110 hover:border-blue-500 hover:text-blue-400"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-4 w-4 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSection