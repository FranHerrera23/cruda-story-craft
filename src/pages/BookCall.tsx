import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import FAQSection from "@/components/FAQSection";
import callHeroImage from "@/assets/call-hero-image.png";

const BookCall = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="absolute top-0 left-0 z-10 px-6 md:px-16 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          style={{ color: '#3D3835' }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <img 
          src={callHeroImage} 
          alt="Video call conversation example"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay at bottom */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent, #F5F1E8)'
          }}
        />
      </div>

      {/* Split Screen Container */}
      <div className="grid md:grid-cols-2 min-h-screen" style={{ marginTop: '-2rem' }}>
        {/* Left Side - Copy Section */}
        <div 
          className="flex flex-col justify-center px-10 md:px-16 py-32 md:py-20"
          style={{ backgroundColor: '#F5F1E8' }}
        >
          <div className="max-w-[600px] mx-auto">
            <h1 
              className="text-[36px] md:text-[48px] font-bold mb-10"
              style={{ color: '#3D3835' }}
            >
              Start a conversation
            </h1>
            
            <div className="space-y-8">
              <p 
                className="text-[18px]"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
                  lineHeight: '1.9'
                }}
              >
                Most conversations start the same way. You've built something worth believing in, but it's not translating the way it should.
              </p>
              
              <p 
                className="text-[18px]"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
                  lineHeight: '1.9'
                }}
              >
                The expertise is there. The work speaks for itself in person. But beyond your immediate circle, it stops.
              </p>
              
              <p 
                className="text-[18px]"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
                  lineHeight: '1.9'
                }}
              >
                We've worked with builders across luxury lighting, real estate, hospitality, retail. Different industries, same gap: mastery that doesn't travel.
              </p>
              
              <p 
                className="text-[18px]"
                style={{ 
                  color: 'rgba(61, 56, 53, 0.85)',
                  lineHeight: '1.9'
                }}
              >
                Book 45 minutes. No pitch, no pressure. If we recognize the pattern, we'll tell you. If we can help, we'll say how. If we can't, we'll say that too.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Calendly Section */}
        <div 
          className="flex items-center justify-center p-10 md:p-16"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="w-full max-w-[600px]">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/cruda-intro/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection showCTA={false} />
    </div>
  );
};

export default BookCall;
