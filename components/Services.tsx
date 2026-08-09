import Image from 'next/image';

const SERVICES = [
  {
    name: `Custom Tattoos`,
    description:
      'Your idea worked into a finished design with your artist before the needle starts.',
  },
  {
    name: `Walk-In Tattoos`,
    description:
      'No appointment needed. Stop in and an artist will see what they can do.',
  },
  {
    name: `Fine Line Work`,
    description:
      'Delicate, detailed line work for tattoos that read soft, clean and elegant.',
  },
  {
    name: `Piercings`,
    description:
      'Ears, rook, nipples and more, with an honest read on your anatomy first.',
  },
  {
    name: `Jewelry Selection`,
    description:
      'A wide jewelry selection you pick through in the shop with your piercer.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-brand-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-stretch lg:gap-16 lg:px-12">
        <div className="flex flex-col justify-center">
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
            Services
          </p>
          <h2 className="mt-3 font-heading text-4xl uppercase tracking-tight text-brand-text sm:text-5xl">
            Tattoos And Piercings
          </h2>
          <p className="mt-4 max-w-prose font-body leading-relaxed text-brand-secondary">
            Every session starts with a real conversation about what you
            want and what your skin, or your anatomy, can actually hold.
          </p>

          <ul className="mt-8 divide-y divide-brand-secondary/15">
            {SERVICES.map((service) => (
              <li key={service.name} className="py-5">
                <h3 className="font-heading text-2xl uppercase tracking-wide text-brand-text">
                  {service.name}
                </h3>
                <p className="mt-1 max-w-prose font-body text-sm leading-relaxed text-brand-secondary">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-full min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/gallery-4.jpg"
            alt="A tattoo artist at Controversy Ink Tattoo Studio working mid-session on a client"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center saturate-[.95] contrast-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
