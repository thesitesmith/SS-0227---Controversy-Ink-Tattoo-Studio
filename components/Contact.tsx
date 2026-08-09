import Image from 'next/image';
import { PhoneCall, MapPin, Clock, ArrowRight } from 'lucide-react';

const HOURS = [
  { day: 'Monday', hours: '12 PM to 3 AM' },
  { day: 'Tuesday', hours: '12 PM to 3 AM' },
  { day: 'Wednesday', hours: '12 PM to 3 AM' },
  { day: 'Thursday', hours: '12 PM to 3 AM' },
  { day: 'Friday', hours: '12 PM to 3 AM' },
  { day: 'Saturday', hours: '12 PM to 3 AM' },
  { day: 'Sunday', hours: '12 PM to 3 AM' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-primary py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div>
          <p className="font-body text-xs uppercase tracking-widest text-brand-accent">
            Visit Or Call
          </p>
          <h2 className="mt-3 font-heading text-4xl uppercase tracking-tight text-brand-background sm:text-5xl">
            Come In Or Call Ahead
          </h2>
          <p className="mt-4 max-w-prose font-body leading-relaxed text-brand-background/70">
            Walk-ins are welcome any time the shop is open. Call ahead if you
            want a specific artist or piercer.
          </p>

          <a
            href="tel:+14699534615"
            className="mt-8 inline-flex items-center gap-3 bg-brand-accent px-8 py-5 font-body text-base font-semibold uppercase tracking-widest text-brand-background transition-colors hover:bg-brand-accent/90"
          >
            <PhoneCall size={20} />
            Call (469) 953-4615
          </a>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-brand-accent" />
              <div>
                <p className="font-body text-sm uppercase tracking-widest text-brand-background/60">
                  Address
                </p>
                <p className="mt-1 font-body text-brand-background">
                  3211 W Northwest Hwy #600, Dallas, TX
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-1 shrink-0 text-brand-accent" />
              <div>
                <p className="font-body text-sm uppercase tracking-widest text-brand-background/60">
                  Hours
                </p>
                <ul className="mt-1 grid grid-cols-2 gap-x-6 gap-y-1 font-body text-sm text-brand-background/85">
                  {HOURS.map((item) => (
                    <li key={item.day} className="flex justify-between gap-4">
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Controversy%20Ink%20Tattoo%20Studio&query_place_id=ChIJiS-TSKCdToYRWkwwqC4veoI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm font-semibold uppercase tracking-widest text-brand-accent transition-colors hover:text-brand-background"
            >
              View on Google Maps
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="relative h-full min-h-[420px] w-full overflow-hidden">
          <Image
            src="/images/gallery-3.jpg"
            alt="Storefront exterior of Controversy Ink Tattoo Studio at 3211 W Northwest Hwy in Dallas"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center saturate-[.95] contrast-[1.03]"
          />
        </div>
      </div>
    </section>
  );
}
