import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BookCall = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
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

        <div className="max-w-[700px] mx-auto text-center">
          <h1 className="font-display text-[36px] md:text-[48px] font-bold leading-[1.15] tracking-tight-2 mb-6" style={{ color: '#3D3835' }}>
            You don't need a pitch deck. Just show up.
          </h1>
          
          <p className="text-xl leading-[1.65] mb-4" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            Book a 30-min call with Fran or the team.
          </p>
          
          <p className="text-lg leading-[1.65]" style={{ color: 'rgba(61, 56, 53, 0.7)' }}>
            We'll ask smart questions, listen to your story, and tell you what we see.
          </p>
          
          <p className="text-base mt-4 font-medium" style={{ color: '#3D3835' }}>
            No fluff. No hard sell. Just clarity.
          </p>
        </div>
      </div>

      {/* Calendly Embed */}
      <div className="max-w-[900px] mx-auto px-6 pb-20">
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/your-calendly-link"
          style={{ minWidth: '320px', height: '700px' }}
        />
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

      {/* Calendly Script */}
      <script 
        type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js" 
        async
      />
    </div>
  );
};

export default BookCall;
