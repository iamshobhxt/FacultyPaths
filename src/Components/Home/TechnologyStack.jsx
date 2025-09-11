import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Technology data organized by categories
const techCategories = [
  {
    id: 'ui-cloud',
    sections: [
      {
        title: 'UI Design',
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
        title: 'Server Side Scripting',
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
  },
  {
    id: 'cloud-db',
    sections: [
      {
        title: 'Cloud Computing',
        technologies: [
          { name: 'AWS', description: 'Cloud computing services by Amazon.', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', gradient: 'from-yellow-400 via-yellow-500 to-orange-500', link: '/technologies/aws' },
          { name: 'Google Cloud', description: 'Cloud platform by Google.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', gradient: 'from-blue-400 via-red-400 to-yellow-400', link: '/technologies/google-cloud' },
          { name: 'Docker', description: 'Containerization platform for apps.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', gradient: 'from-blue-400 via-cyan-400 to-blue-600', link: '/technologies/deployment-automation' },
          { name: 'Azure', description: 'Microsoft cloud computing platform.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', gradient: 'from-blue-500 via-blue-700 to-cyan-400', link: '/technologies/aws' },
          { name: 'Kubernetes', description: 'Container orchestration platform.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', gradient: 'from-blue-400 via-blue-500 to-cyan-400', link: '/technologies/deployment-automation' },
          { name: 'Heroku', description: 'Cloud platform for deploying apps.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg', gradient: 'from-purple-400 via-indigo-500 to-blue-500', link: '/technologies/deployment-automation' }
        ]
      },
      {
        title: 'Database & Analytics',
        technologies: [
          { name: 'Oracle', description: 'Enterprise database management system.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', gradient: 'from-red-500 via-orange-400 to-yellow-400', link: '/technologies/oracle' },
          { name: 'MongoDB', description: 'NoSQL document database.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', gradient: 'from-green-400 via-green-600 to-teal-500', link: '/technologies/mongodb' },
          { name: 'Redis', description: 'In-memory data structure store.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', gradient: 'from-red-400 via-pink-500 to-orange-400', link: '/technologies/redis' },
          { name: 'MySQL', description: 'Popular open-source relational database.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', gradient: 'from-blue-400 via-blue-500 to-cyan-400', link: '/technologies/sql-database' },
          { name: 'PostgreSQL', description: 'Advanced open-source relational database.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', gradient: 'from-blue-400 via-blue-600 to-indigo-500', link: '/technologies/sql-database' },
          { name: 'Elasticsearch', description: 'Search and analytics engine.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg', gradient: 'from-yellow-400 via-yellow-500 to-orange-400', link: '/technologies/sql-database' }
        ]
      }
    ]
  },
  {
    id: 'server-testing',
    sections: [
      {
        title: 'Web Server Technology',
        technologies: [
          { name: 'Apache', description: 'Widely-used web server software.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', gradient: 'from-red-400 via-orange-400 to-yellow-400', link: '/technologies/apache' },
          { name: 'Tomcat', description: 'Java servlet container and web server.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg', gradient: 'from-yellow-400 via-orange-400 to-red-400', link: '/technologies/tomcat' },
          { name: 'Nginx', description: 'High-performance web server.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', gradient: 'from-green-400 via-green-600 to-teal-500', link: '/technologies/apache' },
          { name: 'IIS', description: 'Microsoft web server.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg', gradient: 'from-blue-400 via-blue-600 to-gray-400', link: '/technologies/iis' },
          { name: 'Caddy', description: 'Automatic HTTPS web server.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', gradient: 'from-green-400 via-green-600 to-teal-500', link: '/technologies/apache' },
          { name: 'Lighttpd', description: 'Lightweight web server.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg', gradient: 'from-gray-400 via-gray-500 to-gray-700', link: '/technologies/apache' }
        ]
      },
      {
        title: 'Testing & Process',
        technologies: [
          { name: 'Jest', description: 'JavaScript testing framework.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', gradient: 'from-pink-400 via-red-400 to-yellow-400', link: '/technologies/unit-testing' },
          { name: 'Selenium', description: 'Browser automation for testing.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg', gradient: 'from-green-400 via-green-600 to-gray-400', link: '/technologies/system-testing' },
          { name: 'Git', description: 'Version control system for code.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', gradient: 'from-orange-400 via-red-400 to-yellow-400', link: '/technologies/software-testing' },
          { name: 'Jenkins', description: 'Automation server for CI/CD.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', gradient: 'from-orange-400 via-yellow-400 to-red-400', link: '/technologies/software-testing' },
          { name: 'Travis CI', description: 'Continuous integration service.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/travis/travis-plain.svg', gradient: 'from-green-400 via-gray-400 to-red-400', link: '/technologies/software-testing' },
          { name: 'Mocha', description: 'JavaScript test framework.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg', gradient: 'from-yellow-700 via-yellow-500 to-yellow-400', link: '/technologies/unit-testing' }
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
          <span className="text-[10px] font-medium text-white/90 drop-shadow md:text-xs" style={{ textShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 8px' }}>
            {tech.description}
          </span>
        </div>
        <button 
          className="mt-auto w-fit rounded-lg bg-white/90 px-2 py-1 text-[10px] font-semibold text-gray-900 shadow transition-all duration-200 hover:bg-white hover:scale-105 md:px-3 md:py-1.5 md:text-xs"
          style={{ textShadow: 'none' }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

// Category Section Component
const CategorySection = ({ section, isVisible }) => {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center">
      <div className="w-full">
        <div className={`flex h-[600px] w-full flex-col rounded-md bg-slate-800/90 p-6 shadow-2xl md:rounded-3xl md:p-8 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="mb-6 flex justify-center">
            <div className="rounded-md border-2 border-white/20 bg-transparent px-4 py-2 transition-colors duration-300 hover:bg-white/5">
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

// Pagination Dots Component
const PaginationDots = ({ total, current, onDotClick }) => {
  return (
    <div className="mt-8 flex items-center justify-center gap-3">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-3 w-3 rounded-full transition-all duration-300 ${
            index === current 
              ? 'scale-125 bg-blue-400' 
              : 'bg-white/40 hover:bg-white/60'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Main Technology Stack Component
const TechnologyStack = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleCategoryChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentCategory(newIndex);
    setTimeout(() => setIsAnimating(false), 700);
  };
  
  const handleNext = () => {
    const nextIndex = (currentCategory + 1) % techCategories.length;
    handleCategoryChange(nextIndex);
  };
  
  const handlePrev = () => {
    const prevIndex = currentCategory === 0 ? techCategories.length - 1 : currentCategory - 1;
    handleCategoryChange(prevIndex);
  };
  
  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [currentCategory]);
  
  return (
    <section className="technology-stack relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Header */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center md:mb-8">
          <h2 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text pt-2 text-2xl leading-tight font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl animate-pulse" 
              style={{ fontFamily: 'Orbitron, Arial, sans-serif' }}>
            TECHNOLOGY STACK
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-white to-cyan-300"></div>
          <p className="mx-auto max-w-2xl text-base font-light tracking-wide text-white/90 md:text-lg">
            We leverage cutting-edge technologies to build robust, scalable, and efficient solutions across all domains.
          </p>
        </div>
      </div>
      
      {/* Category Carousel */}
      <div className="relative flex min-h-[600px] w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 z-30 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Previous category"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 z-30 rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
          aria-label="Next category"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Category Content */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
            {techCategories[currentCategory].sections.map((section, idx) => (
              <CategorySection 
                key={section.title} 
                section={section} 
                isVisible={!isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <PaginationDots 
        total={techCategories.length} 
        current={currentCategory} 
        onDotClick={handleCategoryChange}
      />
    </section>
  );
};

export default TechnologyStack;