import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer",
    company: "TRAZZO Lighting · Peru & USA",
    photo: karenPhoto,
    testimonial: "Fran helped us articulate what made our work different in a way our clients finally understood."
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO, Norhart",
    company: "Residential Construction · Minneapolis",
    photo: mikePhoto,
    testimonial: "The narrative system we built together works whether I'm on stage, on a podcast, or in a pitch meeting."
  }
];

const ProofOfWork = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={elementRef} className="py-[100px] md:py-[140px] px-6 md:px-[60px]" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <h2
          className="text-[32px] md:text-[36px] font-semibold mb-16 transition-all duration-700"
          style={{
            color: '#1A1A1A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Who trusts us with their story
        </h2>
        
        {/* Two-Column Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {clients.map((client, index) => (
            <Link
              key={index}
              to={`/clients/${client.slug}`}
              className="group block transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 150}ms`
              }}
            >
              {/* Photo */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={client.photo}
                  alt={client.name}
                  className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ 
                    filter: 'grayscale(10%)',
                    maxWidth: '350px'
                  }}
                />
              </div>
              
              {/* Text Content */}
              <h3 
                className="text-[24px] font-semibold mb-1"
                style={{ color: '#1A1A1A' }}
              >
                {client.name}
              </h3>
              <p 
                className="text-[16px] mb-1"
                style={{ color: 'rgba(26, 26, 26, 0.6)' }}
              >
                {client.title}
              </p>
              <p 
                className="text-[14px] mb-5"
                style={{ color: 'rgba(26, 26, 26, 0.5)' }}
              >
                {client.company}
              </p>
              <p 
                className="text-[17px] italic leading-[1.6]"
                style={{ color: 'rgba(26, 26, 26, 0.7)' }}
              >
                "{client.testimonial}"
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
