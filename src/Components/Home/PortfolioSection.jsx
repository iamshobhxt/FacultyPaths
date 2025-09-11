// sections/PortfolioSection.jsx
import { Calendar, Tag } from "lucide-react";

function PortfolioSection() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
      title: "E-commerce Platform",
      year: "2023",
      category: "Web Development",
      description:
        "A modern e-commerce platform with real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      delay: 0,
    },
    {
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
      title: "Healthcare Mobile App",
      year: "2023",
      category: "Mobile Development",
      description:
        "A comprehensive healthcare app for patient management and telemedicine consultations.",
      tags: ["React Native", "Firebase", "WebRTC"],
      delay: 100,
    },
    {
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      title: "AI Analytics Dashboard",
      year: "2022",
      category: "AI & Analytics",
      description:
        "Business intelligence dashboard with predictive analytics powered by machine learning.",
      tags: ["Python", "TensorFlow", "React"],
      delay: 200,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <h2
            className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Exo, Arial, sans-serif" }}
          >
            Our Portfolio
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-white md:mb-8 md:w-24"></div>
          <p className="mx-auto max-w-xs text-base text-blue-100 sm:max-w-md md:max-w-3xl md:text-xl text-center">
            Discover our latest projects and see how we've helped businesses
            achieve their digital transformation goals.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:mb-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in overflow-hidden rounded-2xl border border-purple-100 bg-white p-2 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl md:p-0"
              style={{ animationDelay: `${project.delay}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-20 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-48 md:group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              {/* Content */}
              <div className="p-2 md:p-6">
                <div className="mb-2 flex items-center justify-between md:mb-3">
                  <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700 md:px-3 md:py-1 md:text-sm">
                    {project.category}
                  </span>
                  <div className="flex items-center text-xs text-gray-700 md:text-sm">
                    <Calendar className="mr-1 h-3 w-3 md:h-4 md:w-4" />{" "}
                    {project.year}
                  </div>
                </div>

                <h3 className="mb-2 text-sm font-bold text-gray-900 transition-colors group-hover:text-purple-700 md:mb-3 md:text-xl">
                  {project.title}
                </h3>
                <p className="mb-2 text-xs text-gray-700 md:mb-4 md:text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 md:gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="flex items-center rounded-md bg-purple-100 px-1.5 py-0.5 text-xs font-medium text-purple-700 transition-colors hover:bg-purple-200 hover:text-purple-900 md:px-2 md:py-1"
                    >
                      <Tag className="mr-1 h-2 w-2 md:h-3 md:w-3" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <ViewAllServicesButton />
      
      </div>
    </section>
  );
}

const ViewAllServicesButton = () => (
  <div className="mt-8 flex justify-center md:mt-12">
    <a 
      className="btn-shine group relative inline-flex min-w-[200px] flex-nowrap items-center rounded-xl border-2 bg-transparent px-6 py-3 text-sm font-semibold text-white shadow-none backdrop-blur-none transition-all duration-300 hover:scale-105 hover:bg-blue-900/30 md:px-8 md:py-4 md:text-base"
      href="/services"
      style={{
        boxShadow: 'none',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: '2px'
      }}
    >
      <svg 
        className="mr-2 h-8 w-8 text-blue-500 transition-all duration-300 group-hover:rotate-45"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ minWidth: '2rem', minHeight: '2rem' }}
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
      <span className="font-bold tracking-wide">View All Services</span>
    </a>
  </div>
);



export default PortfolioSection
