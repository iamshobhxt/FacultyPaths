function IndustriesSection() {
  const industries = [
    "Education",
    "EdTech Companies",
    "Ecommerce",
    "IT Companies",
    "Teachers",
    "Students",
    "AI-powered Solution",
    "Colleges",
  ];

  return (
    <section className="bg-[linear-gradient(to_right,_#0a223a,_#0154b4)] py-20 text-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-8 text-center md:mb-12">
          <h2
            className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-2xl font-extrabold leading-tight tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: "Exo, Arial, sans-serif" }}
          >
            Industries We Serve
          </h2>
          <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400"></div>
          <p className="mx-auto max-w-xs text-base text-white/80 sm:max-w-md md:max-w-3xl md:text-xl">
            We deliver tailored solutions for a wide range of industries,
            helping businesses innovate and grow.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 justify-center gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="block rounded-xl border border-white/60 bg-white/10 p-3 text-center text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:border-white hover:bg-white/20 hover:shadow-lg md:p-6 md:text-lg"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection