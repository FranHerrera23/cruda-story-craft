import { Link } from "react-router-dom";
import pezetHero from "@/assets/pezet-hero.jpg";
import porscheGridCover from "@/assets/porsche-cover-new.jpg";
import saadiyatHero from "@/assets/saadiyat-hero-new.jpg";
import mikeCBSNews from "@/assets/mike-cbs-news.png";

const workItems = [
  {
    id: 1,
    type: "project",
    slug: "/projects/karen-mannheim/pezet",
    clientName: "KAREN MANNHEIM",
    title: "PEZET",
    subtitle: "Lima, Peru | Robert A.M. Stern Architects Partnership",
    image: pezetHero,
    description: "High-end residential tower positioning and project narrative development."
  },
  {
    id: 2,
    type: "project",
    slug: "/projects/karen-mannheim/porsche-flagship",
    clientName: "KAREN MANNHEIM",
    title: "Porsche Flagship Peru",
    subtitle: "Lighting 75 Years of Aspiration",
    image: porscheGridCover,
    description: "Storytelling & positioning for luxury retail lighting design."
  },
  {
    id: 3,
    type: "project",
    slug: "/projects/karen-mannheim/saadiyat-music-festival",
    clientName: "KAREN MANNHEIM",
    title: "Saadiyat Music Festival",
    subtitle: "Abu Dhabi · 2024",
    image: saadiyatHero,
    description: "Jennifer Lopez, Christina Aguilera. Lighting a festival for clients who'd never met her."
  },
  {
    id: 4,
    type: "video",
    clientName: "MIKE KAEDING",
    title: "The Norhart Story",
    subtitle: "Real Estate Development | Innovation in Construction",
    videoUrl: "https://www.youtube.com/embed/jjocftqFqaw",
    description: "How Norhart is revolutionizing apartment construction and affordability."
  },
  {
    id: 5,
    type: "video",
    clientName: "MIKE KAEDING",
    title: "Interview to Batman's Exec Producer",
    subtitle: "Zero to Unicorn Podcast by Mike",
    videoUrl: "https://www.youtube.com/embed/SWNppX4R1KY",
    description: "Mike interviewing people like Michael Uslan, creator and producer of Batman, who made a billion-dollar impact in the world."
  },
  {
    id: 6,
    type: "media",
    clientName: "MIKE KAEDING",
    title: "Featured on CBS News",
    subtitle: "Media Coverage | Housing Affordability Crisis",
    image: mikeCBSNews,
    externalUrl: "https://www.cbsnews.com/minnesota/news/minneapolis-rent-home-ownership-cost-gap/",
    description: "CBS News coverage on Minneapolis housing affordability and Norhart's approach."
  }
];

const SeeTheWork = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: '#FDFBF7' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[1.2] mb-2" style={{ color: '#3D3835' }}>
              See the Work
            </h2>
            {/* Red underline accent */}
            <div className="h-[2px] w-[80px] mx-auto" style={{ backgroundColor: '#FF2E63' }} />
          </div>

          {/* Horizontal Carousel */}
          <div className="relative">
            <div 
              id="work-carousel"
              className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              <div className="flex gap-8 md:gap-10">
                {workItems.map((item, index) => {
                  const cardContent = (
                    <div 
                      className="bg-white overflow-hidden"
                      style={{ 
                        borderRadius: '12px',
                        boxShadow: '0 2px 16px rgba(61,56,53,0.08)',
                        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,56,53,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 2px 16px rgba(61,56,53,0.08)';
                      }}
                    >
                      {/* Media - Image or Video */}
                      <div className="relative overflow-hidden" style={{ height: '320px' }}>
                        {item.type === 'video' ? (
                          <iframe
                            src={item.videoUrl}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        ) : (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="p-8">
                        <p className="text-xs uppercase tracking-wide mb-3" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
                          {item.clientName}
                        </p>
                        
                        <h3 className="text-2xl font-bold mb-2" style={{ color: '#3D3835' }}>
                          {item.title}
                        </h3>

                        <p className="text-sm mb-4" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
                          {item.subtitle}
                        </p>

                        <p className="text-[15px] leading-[1.6] mb-6 line-clamp-3" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
                          {item.description}
                        </p>

                        <div className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: '#3D3835' }}>
                          <span>{item.type === 'media' ? 'Read Article' : item.type === 'video' ? 'Watch Video' : 'View Project'}</span>
                          <span className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  );

                  const wrapperStyle = {
                    opacity: 0,
                    transform: 'translateX(40px)',
                    animation: `fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) ${0.15 * index}s forwards`
                  };

                  return item.type === 'media' ? (
                    <a
                      key={item.id}
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer w-[85vw] md:w-[420px] flex-shrink-0 snap-start"
                      style={wrapperStyle}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      key={item.id}
                      to={item.slug || '#'}
                      className="group cursor-pointer w-[85vw] md:w-[420px] flex-shrink-0 snap-start"
                      style={wrapperStyle}
                    >
                      {cardContent}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => {
                const carousel = document.getElementById('work-carousel');
                if (carousel) carousel.scrollBy({ left: -440, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              ←
            </button>
            <button
              onClick={() => {
                const carousel = document.getElementById('work-carousel');
                if (carousel) carousel.scrollBy({ left: 440, behavior: 'smooth' });
              }}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 z-10"
              style={{ backgroundColor: '#3D3835', color: '#FDFBF7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FF2E63'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3D3835'}
            >
              →
            </button>
          </div>
        </div>
    </section>
  );
};

export default SeeTheWork;
