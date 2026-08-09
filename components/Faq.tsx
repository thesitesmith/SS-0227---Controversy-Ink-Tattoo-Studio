const FAQS = [
  {
    question: `Do I need an appointment, or can I walk in?`,
    answer:
      'Both work here. Plenty of guests walk in and get seen the same day, and others call ahead to book with a specific artist like Daisy or Pablo. If you have your heart set on someone, calling ahead holds your spot.',
  },
  {
    question: `What are your hours?`,
    answer:
      'The shop is open every day from 12 PM to 3 AM, Monday through Sunday. A walk-in at 11 PM is normal here.',
  },
  {
    question: `Where are you located?`,
    answer:
      'Controversy Ink is at 3211 W Northwest Hwy #600 in Dallas, TX. Use the Google Maps link on this page for directions from wherever you are starting.',
  },
  {
    question: `What happens at my first visit?`,
    answer:
      'Your artist or piercer sits down with you first. For a tattoo, that means talking through placement and design before anything starts. For a piercing, Kitty and the team walk you through what your anatomy can actually support, so there are no surprises once the jewelry goes in.',
  },
  {
    question: `Will I be rushed?`,
    answer:
      'No. Guests consistently mention artists checking in throughout the session and taking the time needed to get placement and detail right, whether it is a first tattoo or a repeat visit.',
  },
  {
    question: `How does pricing work?`,
    answer:
      'Pricing is confirmed with your artist or piercer before any work begins, based on the design, placement, or jewelry you choose. Nothing starts until you know what it costs.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-brand-background py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
          Questions
        </p>
        <h2 className="mt-3 font-heading text-4xl uppercase tracking-tight text-brand-text sm:text-5xl">
          Before You Book
        </h2>

        <div className="mt-10 divide-y divide-brand-secondary/15">
          {FAQS.map((faq) => (
            <div key={faq.question} className="py-6">
              <h3 className="font-heading text-2xl uppercase tracking-wide text-brand-text">
                {faq.question}
              </h3>
              <p className="mt-2 max-w-prose font-body leading-relaxed text-brand-secondary">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
