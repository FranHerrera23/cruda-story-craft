const AlignmentCheck = () => {
  return (
    <section className="py-30 px-6 md:px-30 bg-background border-y border-charcoal/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-subsection font-semibold mb-12 tracking-tight text-center">
          Before you reach out — a quick alignment check:
        </h2>

        <div className="bg-charcoal/5 border border-charcoal/10 p-10 md:p-12 mb-12">
          <div className="space-y-6 max-w-xl mx-auto">
            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1.5 w-6 h-6 text-signal-red border-charcoal/30 rounded-sm focus:ring-signal-red focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-lg group-hover:text-foreground transition-colors select-none">
                I've been building for at least 2+ years
              </span>
            </label>

            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1.5 w-6 h-6 text-signal-red border-charcoal/30 rounded-sm focus:ring-signal-red focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-lg group-hover:text-foreground transition-colors select-none">
                I know my work is strong, but I struggle to explain it
              </span>
            </label>

            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1.5 w-6 h-6 text-signal-red border-charcoal/30 rounded-sm focus:ring-signal-red focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-lg group-hover:text-foreground transition-colors select-none">
                I'm ready to invest in clarity, not just visibility
              </span>
            </label>

            <label className="flex items-start gap-4 cursor-pointer group">
              <input 
                type="checkbox" 
                className="mt-1.5 w-6 h-6 text-signal-red border-charcoal/30 rounded-sm focus:ring-signal-red focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-lg group-hover:text-foreground transition-colors select-none">
                I value depth over speed
              </span>
            </label>
          </div>
        </div>

        <p className="font-display text-2xl font-medium text-center">
          If you checked 3 or more — let's talk.
        </p>
      </div>
    </section>
  );
};

export default AlignmentCheck;
