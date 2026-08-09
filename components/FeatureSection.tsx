const PROOF_POINTS = [
  {
    title: `Walk-ins get seen.`,
    detail:
      'Daisy has squeezed guests in before her own appointment, same clean work either way.',
  },
  {
    title: `They check in the whole session.`,
    detail:
      'Ramiro and Pablo both stop mid-tattoo to make sure you are still comfortable.',
  },
  {
    title: `Honest about anatomy.`,
    detail:
      'Kitty tells you what your ear or rook can actually hold before she pierces it.',
  },
  {
    title: `First tattoo or fifth, same care.`,
    detail:
      'Kenneth got his first ink here, Dalis has been coming back for years. Both get the same attention.',
  },
];

export default function FeatureSection() {
  return (
    <section id="feature" className="bg-brand-background">
      <div className="border-y border-brand-accent py-16 pl-4 pr-6 sm:pl-8 lg:pl-10 lg:pr-16">
        <h2 className="font-heading uppercase leading-[0.95] tracking-tight text-brand-text [text-wrap:balance] text-[clamp(2.75rem,12vw,7rem)]">
          Thank The Stars For Kitty
        </h2>
        <p className="mt-6 max-w-2xl font-body text-[1.05rem] leading-relaxed text-brand-secondary">
          the selection, and the{' '}
          <span className="text-brand-accent">attention to detail</span> by
          their piercer, exceeded my expectations.
        </p>
        <p className="mt-4 font-body text-xs uppercase tracking-widest text-brand-secondary">
          Kitty&apos;s client, Dallas
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
              Why This Shop
            </p>
            <h3 className="mt-3 font-heading text-3xl uppercase tracking-tight text-brand-text sm:text-4xl">
              What Customers Notice
            </h3>
            <div className="mt-8 space-y-8">
              {PROOF_POINTS.map((point) => (
                <div key={point.title}>
                  <p className="font-heading text-xl uppercase tracking-wide text-brand-text">
                    {point.title}
                  </p>
                  <p className="mt-1 max-w-prose font-body text-sm leading-relaxed text-brand-secondary">
                    {point.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-brand-secondary/15 pt-10 lg:col-span-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="font-heading text-3xl uppercase leading-tight tracking-tight text-brand-text sm:text-4xl">
              The session was painless and enjoyable, I&apos;ll be back.
            </p>
            <p className="mt-4 font-body text-xs uppercase tracking-widest text-brand-secondary">
              Everett
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
