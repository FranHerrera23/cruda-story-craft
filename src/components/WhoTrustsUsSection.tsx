import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";
import girishPhoto from "@/assets/girish-sehgal.jpeg";
import juanPabloPhoto from "@/assets/juan-pablo-romero.jpeg";

interface Client {
  slug: string;
  name: string;
  title: string;
  photo?: string;
  photoPosition?: string;
  quote: string;
  isConfidential?: boolean;
}

const clients: Client[] = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer · TRAZZO",
    photo: karenPhoto,
    photoPosition: "center 25%",
    quote: "Fran helped us articulate what made our work different in a way our clients finally understood."
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO · Norhart",
    photo: mikePhoto,
    photoPosition: "center 20%",
    quote: "The narrative system we built together works whether I'm on stage, on a podcast, or in a pitch meeting."
  },
  {
    slug: "girish-sehgal",
    name: "Girish Sehgal",
    title: "Chief Patient Experience Officer · SSMC Abu Dhabi",
    photo: girishPhoto,
    photoPosition: "center 30%",
    quote: "CRUDA helped me translate twenty-five years of hospitality leadership into a voice that travels."
  },
  {
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    title: "Regional Sales Manager, US & Caribbean · UNIK Parquet",
    photo: juanPabloPhoto,
    photoPosition: "center 25%",
    quote: "CRUDA helped me position a brand nobody knew into the choice for architects who care about quality."
  },
  {
    slug: "nitin-passi",
    name: "[Name Redacted]",
    title: "Founder & CEO · Fashion/Retail · Dubai",
    isConfidential: true,
    quote: "Strategic positioning for a second-time founder scaling to $500M."
  }
];

const WhoTrustsUsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 0'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingLeft: '80px', paddingRight: '80px' }}>
        {/* Section header with navigation */}
        <div className="flex items-center justify-between mb-12">
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Who trusts us with their story
          </p>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: canScrollPrev ? '#0A0A0A' : 'rgba(10, 10, 10, 0.1)',
                cursor: canScrollPrev ? 'pointer' : 'not-allowed'
              }}
            >
              <ChevronLeft size={20} color={canScrollPrev ? '#FFFFFF' : 'rgba(10, 10, 10, 0.3)'} />
            </button>
            <button
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: canScrollNext ? '#0A0A0A' : 'rgba(10, 10, 10, 0.1)',
                cursor: canScrollNext ? 'pointer' : 'not-allowed'
              }}
            >
              <ChevronRight size={20} color={canScrollNext ? '#FFFFFF' : 'rgba(10, 10, 10, 0.3)'} />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel container - full width for edge-to-edge feel */}
      <div 
        className="overflow-hidden"
        ref={emblaRef}
        style={{ paddingLeft: '80px' }}
      >
        <div className="flex gap-8">
          {clients.map((client, index) => (
            <Link
              key={index}
              to={`/clients/${client.slug}`}
              className="group block transition-all duration-300 flex-shrink-0"
              style={{
                width: '340px',
                minWidth: '340px',
                maxWidth: '380px',
                background: '#FFFFFF',
                border: '1px solid #E5E5E5',
                borderRadius: '8px',
                padding: '40px',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#FF2E63';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#E5E5E5';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Photo circle */}
              <div 
                style={{ 
                  width: '80px',
                  height: '80px',
                  overflow: 'hidden',
                  borderRadius: '50%',
                  marginBottom: '24px'
                }}
              >
                {client.isConfidential ? (
                  <div 
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: '#0A0A0A'
                    }}
                  >
                    <span style={{ 
                      fontSize: '24px', 
                      fontWeight: '600',
                      color: 'rgba(255,255,255,0.4)' 
                    }}>
                      NP
                    </span>
                  </div>
                ) : (
                  <img
                    src={client.photo}
                    alt={client.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: client.photoPosition,
                      filter: 'grayscale(100%)'
                    }}
                  />
                )}
              </div>

              {/* Name */}
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: client.isConfidential ? '#666666' : '#0A0A0A',
                  marginBottom: '4px'
                }}
              >
                {client.name}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  marginBottom: '20px'
                }}
              >
                {client.title}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontStyle: client.isConfidential ? 'normal' : 'italic',
                  color: client.isConfidential ? 'rgba(10, 10, 10, 0.7)' : 'rgba(10, 10, 10, 0.8)',
                  lineHeight: '1.6'
                }}
              >
                {client.isConfidential ? client.quote : `"${client.quote}"`}
              </p>
            </Link>
          ))}
          {/* Spacer for right padding */}
          <div className="flex-shrink-0" style={{ width: '48px' }} />
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 0 !important;
          }
          section > div:first-child {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }
          section .overflow-hidden {
            padding-left: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoTrustsUsSection;
