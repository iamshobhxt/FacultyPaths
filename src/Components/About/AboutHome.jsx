import React from "react";

const AboutHome = () => {
  return (
    <section
      className="pt-28 pb-20 md:pt-44 md:pb-32"
      style={{
        backgroundImage:
        "url('/images/expain.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-white drop-shadow-lg sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl">
            ABOUT FACULTYPATHS
          </h1>
          <p className="mb-2 text-base font-medium tracking-wide text-white sm:text-lg md:text-xl">
            We are a passionate team dedicated to delivering innovative technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHome

