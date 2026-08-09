'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const REVIEWS = [
  {
    name: `Brooke Casanova`,
    quote:
      'The line work is incredibly clean, the placement is perfect, and the final result is even better than I imagined.',
  },
  {
    name: `Alejandro Vazquez`,
    quote:
      'She was incredibly professional, gentle, and made the whole process feel easy and fun.',
  },
  {
    name: `Janell Martinez`,
    quote: `He is super detail oriented and friendly.`,
  },
  {
    name: `Katy Hensarling`,
    quote: `Her line work and detail is stunning.`,
  },
  {
    name: `Kenneth Otis`,
    quote:
      'He was friendly, professional, and very proficient at turning my rough idea into a clean, finished tattoo.',
  },
  {
    name: `Samantha L`,
    quote: `She made sure I was comfortable throughout the whole session.`,
  },
];

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="bg-brand-secondary/5 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-5 lg:gap-16 lg:px-12">
        <div className="relative h-full min-h-[320px] w-full overflow-hidden lg:col-span-2">
          <Image
            src="/images/gallery-2.jpg"
            alt="Welcoming interior seating area inside Controversy Ink Tattoo Studio in Dallas"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center saturate-[.95] contrast-[1.03]"
          />
        </div>

        <div className="lg:col-span-3">
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
            Reviews
          </p>
          <h2 className="mt-3 font-heading text-4xl uppercase tracking-tight text-brand-text sm:text-5xl">
            In Their Words
          </h2>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 grid gap-6 sm:grid-cols-2"
          >
            {REVIEWS.map((review) => (
              <div
                key={review.name}
                className="border-t border-brand-secondary/20 pt-4"
              >
                <p className="font-body text-sm leading-relaxed text-brand-secondary">
                  &quot;{review.quote}&quot;
                </p>
                <p className="mt-3 font-body text-xs uppercase tracking-widest text-brand-text">
                  {review.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
