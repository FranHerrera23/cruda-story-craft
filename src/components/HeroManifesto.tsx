import franCallImage from "@/assets/call-hero-image.png";
import { Link } from "react-router-dom";

const HeroManifesto = () => {
  return (
    <section 
      className="py-[100px] px-[60px] min-h-screen flex items-center"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-[100px] items-center">
          {/* Left Side - Copy */}
          <div className="md:pr-[40px]">
            <div 
              className="uppercase tracking-[2px] mb-[40px]"
              style={{ 
                fontSize: '11px',
                color: 'rgba(61, 56, 53, 0.5)'
              }}
            >
              FRAN HERRERA, FOUNDER OF CRUDA
            </div>
            
            <h1 
              className="font-bold mb-[32px]"
              style={{ 
                fontSize: '48px',
                lineHeight: '1.2',
                color: '#3D3835'
              }}
            >
              We're a narrative studio for founders and executives.
            </h1>
            
            <p 
              className="mb-[48px]"
              style={{ 
                fontSize: '20px',
                lineHeight: '1.8',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We help you see <span style={{ color: '#FF2E63' }}>what's already there</span>. The gap between what you've built and what people understand—that's where we work.
            </p>
            
            <Link 
              to="/book-call"
              className="inline-block font-semibold transition-all duration-300 hover:-translate-y-[2px]"
              style={{ 
                background: '#FF2E63',
                color: '#FFFFFF',
                fontSize: '18px',
                padding: '18px 48px',
                borderRadius: '8px',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#E61E53';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FF2E63';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              Start a Conversation
            </Link>
          </div>
          
          {/* Right Side - Photo */}
          <div className="relative order-first md:order-last">
            <img
              src={franCallImage}
              alt="Fran Herrera on strategy call with Mike Kaeding"
              className="w-full h-auto block"
              style={{
                borderRadius: '16px',
                boxShadow: '0 12px 48px rgba(61, 56, 53, 0.2)'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1024px) {
          section {
            padding: 80px 40px !important;
          }
          
          h1 {
            font-size: 36px !important;
            text-align: center;
          }
          
          p {
            font-size: 18px !important;
            text-align: center;
          }
          
          .uppercase {
            text-align: center;
          }
          
          a {
            display: block !important;
            text-align: center;
          }
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
