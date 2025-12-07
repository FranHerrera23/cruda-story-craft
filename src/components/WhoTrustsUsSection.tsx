import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";

const clients = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Architectural Lighting Designer · TRAZZO",
    photo: karenPhoto,
    quote: "Fran helped us articulate what made our work different in a way our clients finally understood."
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO · Norhart",
    photo: mikePhoto,
    quote: "The narrative system we built together works whether I'm on stage, on a podcast, or in a pitch meeting."
  }
];

const WhoTrustsUsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '60px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Who trusts us with their story
        </p>

        {/* Two cards grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '48px', maxWidth: '1000px' }}
        >
          {clients.map((client, index) => (
            <Link
              key={index}
              to={`/clients/${client.slug}`}
              className="group block transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 150}ms`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Photo with scale on hover */}
              <div 
                style={{ 
                  aspectRatio: '4/3', 
                  overflow: 'hidden',
                  borderRadius: '4px'
                }}
              >
                <img
                  src={client.photo}
                  alt={client.name}
                  className="transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Name */}
              <p
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginTop: '28px',
                  marginBottom: '8px'
                }}
              >
                {client.name}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.5)',
                  marginBottom: '20px'
                }}
              >
                {client.title}
              </p>

              {/* Quote */}
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  fontStyle: 'italic',
                  color: 'rgba(10, 10, 10, 0.7)',
                  lineHeight: '1.6'
                }}
              >
                "{client.quote}"
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoTrustsUsSection;
