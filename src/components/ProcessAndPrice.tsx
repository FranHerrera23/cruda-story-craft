const ProcessAndPrice = () => {
  return (
    <section className="py-32 px-6 bg-bone">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-12 tracking-tighter">
          We work in phases.
        </h2>

        <div className="bg-background border-2 border-rust/20 p-12 md:p-16 mb-12">
          <div className="space-y-8">
            <div>
              <p className="text-6xl md:text-7xl font-serif text-rust mb-4">
                4 months
              </p>
              <p className="text-3xl md:text-4xl font-serif">
                $6,000
              </p>
            </div>

            <div className="border-t border-border pt-8 space-y-3 text-left max-w-md mx-auto">
              <p className="text-lg">That includes:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-rust mr-3">▪</span>
                  Narrative Strategy
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-3">▪</span>
                  Deep Founder Interviews
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-3">▪</span>
                  Story Architecture
                </li>
                <li className="flex items-start">
                  <span className="text-rust mr-3">▪</span>
                  Visibility Roadmap
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-8">
          We only work with 4 clients at a time.
        </p>

        <p className="text-lg text-foreground">
          If you're not ready for that — that's okay. But if you are…
        </p>
      </div>
    </section>
  );
};

export default ProcessAndPrice;
