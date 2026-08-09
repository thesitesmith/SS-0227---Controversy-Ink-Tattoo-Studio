'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="hero" className="grid min-h-screen lg:grid-cols-2">
      <div className="relative order-1 h-[55vh] w-full overflow-hidden lg:order-2 lg:h-auto lg:min-h-screen">
        <Image
          src="/images/hero.jpg"
          alt="Illuminated exterior sign of Controversy Ink Tattoo Studio glowing red at night in Dallas"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-center saturate-[.95] contrast-[1.03]"
        />
      </div>

      <div className="order-2 flex flex-col justify-center bg-brand-background px-8 py-16 lg:order-1 lg:px-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-body text-xs uppercase tracking-widest text-brand-secondary">
            Dallas, TX Tattoo &amp; Piercing Studio
          </p>
          <h1 className="mt-4 max-w-xl font-heading text-6xl uppercase leading-none tracking-tight text-brand-text [text-wrap:balance] sm:text-7xl lg:text-8xl">
            Ink And Piercings, Never Rushed
          </h1>
          <p className="mt-6 max-w-prose font-body text-lg leading-relaxed text-brand-secondary">
            Walk in or call ahead for tattoos and piercings from artists who
            take their time.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="bg-brand-accent px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-brand-background transition-colors hover:bg-brand-accent/90"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="border border-brand-text px-8 py-4 font-body text-sm font-semibold uppercase tracking-widest text-brand-text transition-colors hover:border-brand-accent hover:text-brand-accent"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
