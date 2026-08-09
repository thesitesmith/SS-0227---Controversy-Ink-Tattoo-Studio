export default function Footer() {
  return (
    <footer id="footer" className="bg-brand-primary py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-8 border-t border-brand-background/10 pt-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-heading text-lg uppercase tracking-widest text-brand-background">
              Controversy Ink Tattoo Studio
            </p>
            <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-brand-background/60">
              3211 W Northwest Hwy #600, Dallas, TX
            </p>
            <a
              href="tel:+14699534615"
              className="mt-1 inline-block font-body text-sm text-brand-background/60 transition-colors hover:text-brand-accent"
            >
              (469) 953-4615
            </a>
          </div>

          <div className="flex flex-col gap-2 font-body text-sm text-brand-background/60">
            <a href="#services" className="transition-colors hover:text-brand-accent">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-brand-accent">
              About
            </a>
            <a href="#faq" className="transition-colors hover:text-brand-accent">
              FAQ
            </a>
            <a href="#contact" className="transition-colors hover:text-brand-accent">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-brand-background/10 pt-6 font-body text-xs text-brand-background/50 md:flex-row md:items-center md:justify-between">
          <p>Open daily, 12 PM to 3 AM.</p>
          <a
            href="https://thesitesmith.co"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-accent"
          >
            Website by The Sitesmith
          </a>
        </div>
      </div>
    </footer>
  );
}
