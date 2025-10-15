import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import verticalArchitecture from "@/assets/vertical-architecture.jpg";
import verticalHospitality from "@/assets/vertical-hospitality.jpg";
import verticalAthletes from "@/assets/vertical-athletes.jpg";

const verticals = [
  {
    id: "construction",
    title: "Construction, Architecture, Design & Materials",
    image: verticalArchitecture,
    openingLine: "You build spaces that shape how people live.",
    body: [
      "You've spent years perfecting your craft — understanding materials, timelines, and the details that turn vision into structure. Now you're ready to show the world who's behind the work.",
      "Whether you're positioning for international expansion, attracting larger projects, or inspiring the next generation of builders — your story needs to match the caliber of what you create."
    ],
    closing: "We help you articulate it."
  },
  {
    id: "hospitality",
    title: "Hospitality & Healthcare Leaders",
    image: verticalHospitality,
    openingLine: "You've mastered the art of crafting experiences that improve lives.",
    body: [
      "Whether it's a guest who feels truly cared for or a patient who receives better outcomes — you know what excellence looks like in practice.",
      "Now it's time to turn that expertise into a story that builds brand equity, attracts the right partners, and makes people want to be part of what you're building."
    ],
    closing: "We help you identify and articulate it."
  },
  {
    id: "athletes",
    title: "Professional Athletes & Sports Executives",
    image: verticalAthletes,
    openingLine: "You pursued your dream and made it real.",
    body: [
      "That's why people admire you. You know what it takes to perform under pressure, build teams, and create legacy.",
      "But athletic careers are finite. Building your personal brand now helps you diversify your portfolio, attract the right opportunities, and extend your influence long after you leave the field."
    ],
    closing: "We help you build that foundation."
  }
];

const WhoWeWorkWith = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll('.vertical-card');
      if (cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        setActiveIndex(index);
      }
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < verticals.length - 1) {
      scrollToCard(activeIndex + 1);
    }
  };

  return (
    <section className="py-20 md:py-30 px-6 md:px-20" style={{ backgroundColor: 'hsl(36, 25%, 86%)' }}>
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[32px] md:text-[42px] font-display font-semibold leading-[1.2] tracking-tight-2 mb-8 max-w-[750px] mx-auto" style={{ color: 'hsl(21, 7%, 23%)' }}>
            If explaining your work feels harder than doing it — you're not alone.
          </h2>
          
          <p className="text-lg md:text-xl leading-[1.6] max-w-[650px] mx-auto" style={{ color: 'hsl(21, 7%, 23%, 0.85)' }}>
            We work with builders who've mastered their craft but need help translating it into words that land.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="relative">
          {/* Desktop Arrow Navigation */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            style={{ backgroundColor: 'rgba(61, 56, 53, 0.8)' }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-signal-red" />
          </button>

          <button
            onClick={handleNext}
            disabled={activeIndex === verticals.length - 1}
            className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center rounded-full transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110"
            style={{ backgroundColor: 'rgba(61, 56, 53, 0.8)' }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-signal-red" />
          </button>

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-x-auto pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide scroll-smooth"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-8 items-start">
              {verticals.map((vertical, index) => (
                <div
                  key={vertical.id}
                  className="vertical-card flex-shrink-0 w-[85vw] md:w-[900px] mx-auto"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[50vh] md:h-[600px] min-h-[400px] md:min-h-[600px] overflow-hidden mb-1">
                    <img
                      src={vertical.image}
                      alt={vertical.title}
                      className="w-full h-full object-cover transition-all duration-500"
                      style={{ 
                        filter: 'grayscale(100%) contrast(1.1)',
                        objectPosition: 'center center'
                      }}
                    />
                  </div>

                  {/* Red Accent Line */}
                  <div className="w-full h-[2px] bg-signal-red mb-10"></div>

                  {/* Text Section */}
                  <div className="px-6 md:px-12 space-y-6">
                    <h3 className="font-display text-[28px] md:text-[36px] font-bold leading-[1.2] tracking-tight-2" style={{ color: 'hsl(21, 7%, 23%)' }}>
                      {vertical.title}
                    </h3>

                    <p className="text-xl md:text-2xl font-medium leading-[1.4]" style={{ color: 'hsl(21, 7%, 23%)' }}>
                      {vertical.openingLine}
                    </p>

                    {vertical.body.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-lg md:text-xl leading-[1.7]" style={{ color: 'hsl(21, 7%, 23%, 0.85)' }}>
                        {paragraph}
                      </p>
                    ))}

                    <p className="text-xl md:text-2xl font-semibold pt-4 text-signal-red">
                      {vertical.closing}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {verticals.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: activeIndex === index ? 'hsl(347, 100%, 59%)' : 'rgba(61, 56, 53, 0.3)',
                  transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
