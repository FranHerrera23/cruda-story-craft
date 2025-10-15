import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BookCall = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FDFBF7' }}>
      {/* Back Button */}
      <div className="px-6 md:px-16 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-base transition-all duration-300 hover:gap-3"
          style={{ color: '#3D3835' }}
        >
          <ArrowLeft size={20} />
          <span>Back to homepage</span>
        </Link>
      </div>

      {/* Header Section */}
      <section className="px-6 md:px-16 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-display text-[42px] md:text-[56px] font-bold leading-[1.1] mb-6" style={{ color: '#3D3835' }}>
            You don't need a pitch deck.<br />Just show up.
          </h1>
          
          <div className="h-[2px] w-[80px] mx-auto mb-8" style={{ backgroundColor: '#F5B800' }} />
          
          <p className="text-xl md:text-2xl leading-[1.6] mb-6" style={{ color: 'rgba(61, 56, 53, 0.85)' }}>
            Book a 30-min call with Fran or the team.
          </p>
          
          <p className="text-lg md:text-xl leading-[1.65]" style={{ color: 'rgba(61, 56, 53, 0.75)' }}>
            We'll ask smart questions, listen to your story, and tell you what we see.
            <br />
            No fluff. No hard sell. Just clarity.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/your-calendly-link" 
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </section>

      {/* Footer Note */}
      <section className="px-6 md:px-16 py-12 text-center" style={{ backgroundColor: '#3D3835' }}>
        <p className="text-base" style={{ color: 'rgba(253, 251, 247, 0.7)' }}>
          Prefer email? Reach us at <a href="mailto:hello@cruda.studio" className="underline hover:no-underline" style={{ color: '#F5B800' }}>hello@cruda.studio</a>
        </p>
      </section>
    </main>
  );
};

export default BookCall;
