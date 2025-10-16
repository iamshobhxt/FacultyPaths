import React, { useState } from 'react';

// Technology data organized by categories
const techCategories = [
  {
    id: 'ui-cloud',
    sections: [
      {
        title: 'Technical Placement Catalyst',
        technologies: [
          { name: 'HTML/HTML5', description: 'Markup language for structuring web content.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', gradient: 'from-orange-400 via-pink-500 to-red-500', link: '/technologies/html-css' },
          { name: 'CSS3', description: 'Stylesheet language for designing web pages.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', gradient: 'from-blue-400 via-blue-500 to-indigo-500', link: '/technologies/html-css' },
          { name: 'AngularJS', description: 'Framework for building dynamic web apps.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', gradient: 'from-red-400 via-pink-500 to-yellow-500', link: '/technologies/angular-js' },
          { name: 'JavaScript', description: 'Programming language for interactive web apps.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', gradient: 'from-yellow-300 via-yellow-500 to-orange-400', link: '/technologies/angular-js' },
          { name: 'jQuery', description: 'JavaScript library for DOM manipulation.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', gradient: 'from-blue-300 via-blue-500 to-cyan-400', link: '/technologies/jquery' },
          { name: 'WordPress', description: 'Popular CMS for websites and blogs.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', gradient: 'from-blue-600 via-blue-400 to-gray-400', link: '/technologies/wordpress' }
        ]
      },
      {
        title: 'Management Placement Catalyst',
        technologies: [
          { name: 'PHP', description: 'Server-side scripting language for web development.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', gradient: 'from-indigo-400 via-indigo-500 to-purple-500', link: '/technologies/php' },
          { name: 'Java', description: 'Versatile programming language for many platforms.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', gradient: 'from-yellow-700 via-yellow-500 to-orange-400', link: '/technologies/java' },
          { name: 'Spring', description: 'Java framework for building applications.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', gradient: 'from-green-400 via-green-500 to-teal-500', link: '/technologies/java-frameworks' },
          { name: 'Python', description: 'Powerful, easy-to-learn programming language.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', gradient: 'from-blue-400 via-yellow-300 to-green-300', link: '/technologies/python' },
          { name: 'Shell', description: 'Command-line scripting for automation.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', gradient: 'from-gray-700 via-gray-500 to-gray-400', link: '/technologies/shell' },
          { name: 'Perl', description: 'Text processing and scripting language.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/perl/perl-original.svg', gradient: 'from-purple-400 via-pink-400 to-blue-400', link: '/technologies/perl' }
        ]
      }
    ]
  }
];

// Individual Technology Card Component
const TechCard = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex h-[9rem] w-full max-w-[14rem] flex-shrink-0 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${tech.gradient} p-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl md:p-4 cursor-pointer`}
      style={{
        boxShadow: 'rgba(31, 38, 135, 0.1) 0px 8px 32px 0px',
        animationDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={tech.icon}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute top-2 right-2 h-14 w-14 opacity-30 brightness-50 grayscale filter select-none md:h-16 md:w-16 transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`}
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10 flex h-full flex-col justify-between p-2">
        <div className="flex flex-col gap-1">
          <span className="text-sm leading-tight font-bold text-white drop-shadow-lg md:text-base">
            {tech.name}
          </span>
          <span className="text-[10px] font-medium text-white/90 drop-shadow md:text-xs">
            {tech.description}
          </span>
        </div>
        <button
          className="mt-auto w-fit rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-900 shadow transition-all duration-200 hover:bg-white hover:scale-105 md:px-3 md:py-1.5 md:text-xs"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

// Category Section Component
const CategorySection = ({ section }) => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center">
      <div className="w-full">
        <div className="flex h-[600px] w-full flex-col rounded-md bg-slate-800/90 p-6 shadow-2xl md:rounded-3xl md:p-8">
          <div className="mb-6 flex justify-center">
            <div className="rounded-md border-2 border-white/20 bg-transparent px-4 py-2">
              <h3 className="text-lg font-semibold text-white md:text-xl">{section.title}</h3>
            </div>
          </div>
          <div className="grid h-full w-full flex-1 grid-cols-2 items-start justify-items-center gap-2 md:gap-3 overflow-y-auto">
            {section.technologies.map((tech, idx) => (
              <TechCard key={tech.name} tech={tech} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Technology Stack Component
const TechnologyStack = () => {
  const currentCategory = techCategories[0]; // Only show first category (id: 'ui-cloud')

  return (
    <section className="technology-stack relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      {/* Header */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <h2
            className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text pt-2 text-2xl leading-tight font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ fontFamily: 'Orbitron, Arial, sans-serif' }}
          >
            INTERNSHIP AND TRAINING PROGRAM
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-white to-cyan-300"></div>
          <p className="mx-auto max-w-2xl text-base font-light tracking-wide text-white/90 md:text-lg">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions across all domains.
          </p>
        </div>
      </div>

      {/* Single Category Display */}
      <div className="relative flex min-h-[600px] w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
            {currentCategory.sections.map((section, idx) => (
              <CategorySection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
