import React, { useState, useEffect } from 'react';

// Client data
const clientsData = [
  { name: 'Ziffity', domain: 'ziffity.com' },
  { name: 'Accenture', domain: 'accenture.com' },
  { name: 'CleverTap', domain: 'clevertap.com' },
  { name: 'Keka', domain: 'keka.com' },
  { name: 'Fyle', domain: 'fylehq.com' },
  { name: 'Codewave', domain: 'codewave.com' },
  { name: 'Tvisha Technologies', domain: 'tvishatech.com' },
  { name: 'Prompt Softech', domain: 'promptsoftech.com' },
  { name: 'Chargebee', domain: 'chargebee.com' },
  { name: 'Octal IT Solution', domain: 'octalsoftware.com' },
  { name: 'Techuz', domain: 'techuz.com' },
  { name: 'AasaanJobs', domain: 'aasaanjobs.com' },
  { name: 'Happay', domain: 'happay.com' },
  { name: 'AgroStar', domain: 'agrostar.in' },
  { name: 'Tech Mahindra', domain: 'techmahindra.com' },
  { name: 'NowFloats', domain: 'nowfloats.com' }
];

// Individual Client Card Component
const ClientCard = ({ client, index, isFlipped, onFlip }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const animationDelay = index * 50;
  const transitionDelay = index * 30;

  return (
    <div className="flex justify-center items-center">
      <div 
        className="group relative perspective-1000 cursor-pointer"
        style={{
          animationDelay: `${animationDelay}ms`,
          transitionDelay: `${transitionDelay}ms`
        }}
        onClick={() => onFlip(index)}
      >
        <div 
          className={`relative transition-transform duration-1200 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : 'rotate-y-0'
          }`}
        >
          {/* Mobile View */}
          <div className="block md:hidden w-20 h-20 aspect-square">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-lg transition-all duration-700 p-1 border border-white/20 flex flex-col relative z-10 w-full h-full group-hover:scale-105">
              <div className="relative overflow-hidden rounded-lg flex-1 flex items-center justify-center bg-white">
                {!imageError ? (
                  <img 
                    src={`https://logo.clearbit.com/${client.domain}`}
                    alt={client.name}
                    className={`w-16 h-16 min-w-[70%] min-h-[70%] object-contain transition-opacity duration-300 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                ) : (
                  <div className="w-16 h-16 flex items-center justify-center text-xs text-gray-600 font-semibold text-center">
                    {client.name}
                  </div>
                )}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                  {client.name}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:flex flex-col relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 p-3 border border-white/20 hover:border-purple-400/50 group-hover:scale-110 transform hover:-translate-y-2">
            <div className="relative overflow-hidden rounded-xl flex-1 flex items-center justify-center bg-white min-h-[80px]">
              {!imageError ? (
                <img 
                  src={`https://logo.clearbit.com/${client.domain}`}
                  alt={client.name}
                  className={`w-full h-full min-w-[70%] min-h-[70%] object-contain max-h-20 lg:max-h-24 xl:max-h-28 transition-opacity duration-300 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                />
              ) : (
                <div className="flex items-center justify-center text-sm text-gray-600 font-semibold text-center p-2">
                  {client.name}
                </div>
              )}
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                {client.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Pagination Dots Component
const PaginationDots = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <div className="flex justify-center mt-8 space-x-2 relative z-10">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index)}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            currentPage === index 
              ? 'bg-purple-400 scale-125' 
              : 'bg-gray-500 hover:bg-gray-400'
          }`}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Background Effects Component
const BackgroundEffects = () => {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
    </>
  );
};

// Section Header Component
const SectionHeader = () => {
  return (
    <div className="text-center mb-8 md:mb-16">
      <h2 
        className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-cyan-300 mb-2 md:mb-4 tracking-tight leading-tight relative z-10"
        style={{ fontFamily: 'Poppins, Arial, sans-serif' }}
      >
        Our Clients
      </h2>
      <div className="w-12 md:w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-3 md:mb-8 rounded-full relative z-10"></div>
      <p className="text-xs md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed relative z-10">
        Trusted by industry leaders and innovative companies worldwide
      </p>
    </div>
  );
};

// Client Grid Component
const ClientGrid = ({ clients, flippedCards, onCardFlip }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 md:gap-6 lg:gap-8">
      {clients.map((client, index) => (
        <ClientCard
          key={`${client.name}-${index}`}
          client={client}
          index={index}
          isFlipped={flippedCards.includes(index)}
          onFlip={onCardFlip}
        />



      ))}
    </div>
  );
};

// Main Clients Section Component
const ClientsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState([]);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  
  const totalPages = 2;
  const clientsPerPage = 8;
  
  // Get current clients based on page
  const getCurrentClients = () => {
    const startIndex = (currentPage ) * clientsPerPage;
    return clientsData.slice(startIndex, startIndex + clientsPerPage);
  };

  // Handle card flip
  const handleCardFlip = (cardIndex) => {
    setFlippedCards(prev => {
      if (prev.includes(cardIndex)) {
        return prev.filter(index => index !== cardIndex);
      } else {
        return [...prev, cardIndex];
      }
    });
  };


  // Handle page change
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    setFlippedCards([]); // Reset flipped cards when changing pages
  };

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setCurrentPage(prev => prev === 0 ? 1 : 0);
      setFlippedCards([]);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // Pause auto-rotation on user interaction
  const handleUserInteraction = () => {
    setIsAutoRotating(false);
    setTimeout(() => setIsAutoRotating(true), 2000); 
  };

  return (
    <section 
      className="py-4 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      onMouseEnter={handleUserInteraction}
      onClick={handleUserInteraction}
    >
      <BackgroundEffects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        <ClientGrid 
          clients={getCurrentClients()}
          flippedCards={flippedCards}
          onCardFlip={handleCardFlip}
        />
        
        <PaginationDots 
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(pageIndex) => {
            handlePageChange(pageIndex);
            handleUserInteraction();
          }}
        />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .duration-1200 {
          transition-duration: 1200ms;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;

