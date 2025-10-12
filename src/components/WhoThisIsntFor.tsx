const WhoThisIsntFor = () => {
  return (
    <section className="py-30 px-6 md:px-30 bg-background border-y border-charcoal/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold editorial-underline pb-3">
              This isn't for you if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✕</span>
                <span className="text-lg leading-relaxed">You're chasing vanity metrics or viral moments</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✕</span>
                <span className="text-lg leading-relaxed">You want content for content's sake</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✕</span>
                <span className="text-lg leading-relaxed">You're not ready to do the hard work of clarity</span>
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold editorial-underline pb-3">
              This is for you if:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-lg leading-relaxed">You've been building in silence and you're ready to speak</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-lg leading-relaxed">You value precision over performance</span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-signal-red text-2xl font-bold mt-1 group-hover:scale-110 transition-transform">✓</span>
                <span className="text-lg leading-relaxed">You're looking for a partner, not a vendor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsntFor;
