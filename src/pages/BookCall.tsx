import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

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
    <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      {/* Header */}
      <div className="py-16 px-6 md:px-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity mb-12"
          style={{ color: '#3D3835' }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Hero Section */}
        <div className="max-w-[650px] mx-auto text-center" style={{ padding: '100px 60px' }}>
          <h1 className="font-display text-[48px] md:text-[60px] font-bold leading-[1.1] tracking-tight-2 mb-16" style={{ color: '#3D3835' }}>
            Let's talk
          </h1>
          
          <div className="space-y-8 text-left">
            <p className="text-[17px] md:text-[20px] leading-[1.9]" style={{ color: '#3D3835' }}>
              Most conversations start the same way. You've built something worth believing in, but it's not translating the way it should. The expertise is there. The work speaks for itself in person. But beyond your immediate circle, it stops.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9]" style={{ color: '#3D3835' }}>
              We've worked with builders across luxury lighting, real estate, hospitality, retail. Different industries, same gap: mastery that doesn't travel.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9]" style={{ color: '#3D3835' }}>
              Book 30 minutes. No pitch, no pressure. Just a conversation about whether we recognize the pattern you're facing.
            </p>
            
            <p className="text-[17px] md:text-[20px] leading-[1.9]" style={{ color: '#3D3835' }}>
              If we can help, we'll tell you how. If we can't, we'll say that too.
            </p>
          </div>
        </div>
      </div>

      {/* Calendly Embed */}
      <div className="max-w-[1000px] mx-auto px-6 md:px-16 pb-20">
        <div 
          className="rounded-xl overflow-hidden"
          style={{ 
            backgroundColor: '#FFFFFF',
            boxShadow: '0 2px 12px rgba(61, 56, 53, 0.08)'
          }}
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/cruda-intro/30min"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="py-12 px-6 text-center border-t" style={{ borderColor: 'rgba(61, 56, 53, 0.15)' }}>
        <p className="text-sm mb-2" style={{ color: 'rgba(61, 56, 53, 0.6)' }}>
          Prefer email?
        </p>
        <a 
          href="mailto:fran@thecruda.com" 
          className="text-base font-medium hover:opacity-70 transition-opacity"
          style={{ color: '#3D3835' }}
        >
          fran@thecruda.com
        </a>
      </div>
    </div>
  );
};

export default BookCall;
