

import { 
  Monitor, 
  Code, 
  Smartphone, 
  TrendingUp, 
  Palette, 
  Users, 
  Brain, 
  Bug,
  ArrowRight, 
  Book,
  User,
  Cloud,
  Code2
} from 'lucide-react';

// Background Triangle Component
const BackgroundTriangle = () => (
  <div className="pointer-events-none absolute top-0 left-0 z-0 hidden h-full w-full md:block">
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 1200 800" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="absolute left-0 top-0"
    >
      <defs>
        <linearGradient id="servicesTriangleGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="white" />
        </linearGradient>
      </defs>
      <polygon 
        points="-270,0 -270,800 650,400" 
        fill="url(#servicesTriangleGradient)" 
      />
    </svg>
  </div>
);

// Service Card Component
const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  image, 
  delay = 0,
  gradientColors = "from-blue-500 to-cyan-500" 
}) => {
  return (
    <div 
      className="group animate-fade-in futuristic-card relative mx-auto flex max-w-xs flex-col items-center overflow-hidden rounded-2xl border border-white bg-white/10 shadow-lg transition-all duration-500 hover:scale-105 hover:border-white hover:bg-white/20 hover:shadow-2xl"
      style={{
        animationDelay: `${delay}ms`,
        boxShadow: 'rgba(0, 255, 255, 0.08) 0px 4px 32px 0px inset, rgba(0, 0, 0, 0.18) 0px 1.5px 8px 0px'
      }}
    >
      <div className="relative h-32 w-full overflow-hidden rounded-t-2xl">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Icon */}
        <div 
          className="absolute top-2 right-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 shadow-md shadow-blue-400/20 transition-transform duration-300 group-hover:scale-110 md:h-12 md:w-12"
          style={{
            background: 'linear-gradient(45deg, rgb(30, 58, 138), rgb(30, 64, 175), rgb(29, 78, 216))'
          }}
        >
          <Icon className="h-5 w-5 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)] md:h-6 md:w-6" />
        </div>
        
        {/* Title */}
        <h3 
          className="futuristic-title absolute bottom-2 left-3 text-sm font-semibold tracking-wider text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] md:text-base"
          style={{ 
            fontFamily: 'Exo, Arial, sans-serif', 
            letterSpacing: '0.04em' 
          }}
        >
          {title}
        </h3>
      </div>
      
      <div className="flex w-full flex-col items-center px-3 py-4">
        <p 
          className="mb-2 text-center text-xs tracking-wide text-white/90 md:text-sm"
          style={{ textShadow: 'rgba(0, 255, 255, 0.08) 0px 1px 8px' }}
        >
          {description}
        </p>
        
        <button 
          type="button"
          className="group mt-auto inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium text-white shadow-md transition-all focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:outline-none"
          style={{
            fontSize: '12px',
            padding: '4px 16px',
            background: 'linear-gradient(45deg, rgb(30, 58, 138), rgb(30, 64, 175), rgb(29, 78, 216))',
            boxShadow: 'rgba(30, 58, 138, 0.3) 0px 0px 8px 2px, rgba(0, 0, 0, 0.18) 0px 1.5px 8px 0px'
          }}
        >
          View More
          <ArrowRight className="ml-2 h-4 w-4 drop-shadow-[0_0_4px_rgba(255,255,255,0.7)] transition-transform group-hover:translate-x-1" />
        </button>
      </div>
      
      {/* Hover overlay */}
      <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r ${gradientColors} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
    </div>
  );
};

// Animated dots component
const AnimatedDots = () => (
  <>
    <div className="absolute top-4 right-4 h-2 w-2 animate-pulse rounded-full bg-blue-400" />
    <div 
      className="absolute bottom-4 left-4 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400"
      style={{ animationDelay: '1s' }}
    />
    <div 
      className="absolute top-1/2 right-6 h-1 w-1 animate-pulse rounded-full bg-cyan-400"
      style={{ animationDelay: '2s' }}
    />
  </>
);

// Section Header Component
const SectionHeader = () => (
  <div className="mb-6 text-center md:mb-8">
    <h2 className="mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-2xl leading-tight font-extrabold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl">
      OUR SERVICES
    </h2>
    <div className="mx-auto mb-4 h-1 w-20 rounded-full bg-gradient-to-r from-white to-cyan-300" />
    <p className="mx-auto max-w-2xl text-base font-light tracking-wide text-white/90 md:text-lg">
      We offer comprehensive IT solutions tailored to meet your business needs and drive digital transformation.
    </p>
  </div>
);

// View All Services Button Component
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

// Main Services Section Component
const ServicesSection = () => {
  // Services data
  const services = [
    {
      icon: Book,
      title: "EDUCATIONAL INSTITUTIONS",
      description: "Transform your institution with our comprehensive faculty solutions.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=200&fit=crop&crop=center",
      delay: 0,
      gradientColors: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "ED-TECH COMPANIES",
      description: "Accelerate your growth with our specialized business solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center",
      delay: 100,
      gradientColors: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "IT COMPANIES",
      description: "Streamline your talent acquisition  campus recruitment partnerships.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop&crop=center",
      delay: 200,
      gradientColors: "from-green-500 to-teal-500"
    },
    {
      icon: TrendingUp,
      title: "EDUCATORS",
      description: "Monetize your expertise  impact on our innovative platform.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop&crop=center",
      delay: 300,
      gradientColors: "from-orange-500 to-red-500"
    },
    {
      icon: Palette,
      title: "STUDENTS",
      description: "Unlock your academic potential with experiences tailored to your needs.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop&crop=center",
      delay: 400,
      gradientColors: "from-pink-500 to-rose-500"
    },
    {
      icon: Cloud,
      title: "ECOMMERCE",
      description: "Our eCommerce platform is designed and  service offerings.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&crop=center",
      delay: 500,
      gradientColors: "from-indigo-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "AI-POWERED SOLUTION",
      description: "Experience the future  with our cutting-edge technology solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop&crop=center",
      delay: 600,
      gradientColors: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "COLLGES",
      description: "An all-in-one platform that helps  manage through Faculty.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=200&fit=crop&crop=center",
      delay: 700,
      gradientColors: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section className="relative overflow-hidden bg-black py-8">
      <BackgroundTriangle />
      
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        <div className="relative">
          <div className="relative rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-900 via-slate-800 to-black p-6 shadow-2xl backdrop-blur-sm md:p-8">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-30 blur-xl" />
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </div>
            </div>
            
            <AnimatedDots />
          </div>
        </div>
        
        <ViewAllServicesButton />
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .futuristic-card {
          backdrop-filter: blur(8px);
        }
        
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        
        .btn-shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transition: left 0.6s;
        }
        
        .btn-shine:hover::before {
          left: 100%;
        }
      `}</style>
    </section>
  );
};


export default ServicesSection;
