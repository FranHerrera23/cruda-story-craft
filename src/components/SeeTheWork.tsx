'use client';

import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import pezetHero from "@/assets/pezet-hero.jpg";
import saadiyatHero from "@/assets/saadiyat-hero-new.jpg";
import mikeKaeding from "@/assets/mike-kaeding.webp";
import girishLinkedin from "@/assets/girish-golden-rule-post.png";

const workItems = [
  {
    id: 1,
    slug: "/projects/karen-mannheim/pezet",
    name: "PEZET",
    location: "Lima, Peru",
    tag: "World-class partnerships",
    tagline: "Robert A.M. Stern Architects",
    image: pezetHero.src,
  },
  {
    id: 2,
    slug: "/projects/karen-mannheim/saadiyat-music-festival",
    name: "Saadiyat Music Festival",
    location: "Abu Dhabi, UAE",
    tag: "International expansion",
    tagline: "Jennifer Lopez · Christina Aguilera",
    image: saadiyatHero.src,
  },
  {
    id: 3,
    slug: "/clients/mike-kaeding",
    name: "Norhart",
    location: "Minneapolis, USA",
    tag: "Construction → thought leadership",
    tagline: "$200M multifamily development",
    image: mikeKaeding.src,
  },
  {
    id: 4,
    slug: "/clients/girish-sehgal",
    name: "The Golden Rule Still Wins",
    location: "Girish Sehgal · SSMC Abu Dhabi",
    tag: "Executive content strategy",
    tagline: "184 reactions · 23 comments",
    image: girishLinkedin.src,
  },
];

const SeeTheWork = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="see-the-work" 
      ref={elementRef} 
      className="py-20 md:py-28 px-6 md:px-20"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Headline */}
        <h2 
          className="mb-12 md:mb-16"
          style={{ 
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 600,
            color: '#0A0A0A',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          See the work
        </h2>

        {/* Project Grid - 4 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.slug}
              className="group relative flex flex-col transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms, transform 600ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`,
              }}
            >
              {/* Image */}
              <div 
                className="relative overflow-hidden mb-4"
                style={{ 
                  aspectRatio: '16/10',
                  borderRadius: '8px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: item.id === 3 ? 'center 20%' : item.id === 4 ? 'center 15%' : 'center' }}
                />
                
              </div>
              
              {/* Title */}
              <h3 
                className="mb-1"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                }}
              >
                {item.name}
              </h3>
              
              {/* Location */}
              <p 
                className="mb-2"
                style={{ 
                  fontSize: '14px',
                  color: 'rgba(10, 10, 10, 0.4)',
                }}
              >
                {item.location}
              </p>
              
              {/* Tag */}
              <p 
                style={{ 
                  fontSize: '14px',
                  color: '#E8623A',
                  fontWeight: 500
                }}
              >
                {item.tag}
              </p>
              
              {/* Tagline */}
              <p 
                className="mt-1"
                style={{ 
                  fontSize: '14px',
                  color: 'rgba(10, 10, 10, 0.6)',
                }}
              >
                {item.tagline}
              </p>
              
              {/* Hover lift effect */}
              <style>
                {`
                  .group:hover {
                    transform: translateY(-4px) !important;
                  }
                `}
              </style>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeTheWork;
