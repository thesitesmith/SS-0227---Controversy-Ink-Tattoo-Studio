import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-brand-secondary/5 py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-12">
        <div className="relative order-1 h-full min-h-[420px] w-full overflow-hidden lg:order-1">
          <Image
            src="/images/extra-1.jpg"
            alt="Close-up detail of finished tattoo linework at Controversy Ink Tattoo Studio"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top saturate-[.95] contrast-[1.03]"
          />
        </div>

        <div className="order-2 flex flex-col justify-center lg:order-2">
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
            The Studio
          </p>
          <h2 className="mt-3 font-heading text-4xl uppercase tracking-tight text-brand-text sm:text-5xl">
            What A Visit Looks Like
          </h2>
          <p className="mt-6 max-w-prose font-body leading-relaxed text-brand-secondary">
            You sit down with your artist before anything starts. Ramiro and
            Pablo talk through placement and design with you, then check in
            throughout the session so nothing feels rushed. Baldo takes a
            rough idea and works it into a clean, finished piece, walking
            you through each step as he goes.
          </p>
          <p className="mt-4 max-w-prose font-body leading-relaxed text-brand-secondary">
            On the piercing side, Kitty is straightforward about what your
            ear or your anatomy can actually support, and lays out every
            safe option before she puts in a needle. Daisy and Kai do the
            same for walk-in tattoos, fitting people in without cutting
            corners on the line work.
          </p>
          <p className="mt-6 max-w-prose border-l-2 border-brand-accent pl-4 font-body italic leading-relaxed text-brand-text">
            He has a great personality that helps you relax while he&apos;s
            working on you.
          </p>
          <p className="mt-2 font-body text-xs uppercase tracking-widest text-brand-secondary">
            Juli S, on Ubaldo
          </p>
        </div>
      </div>
    </section>
  );
}
