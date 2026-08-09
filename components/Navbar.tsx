'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '#hero', label: `Home`, id: 'hero' },
  { href: '#services', label: `Services`, id: 'services' },
  { href: '#about', label: `About`, id: 'about' },
  { href: '#feature', label: `Why Us`, id: 'feature' },
  { href: '#testimonials', label: `Reviews`, id: 'testimonials' },
  { href: '#faq', label: `FAQ`, id: 'faq' },
  { href: '#contact', label: `Contact`, id: 'contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('hero');

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-brand-primary">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        <a
          href="#hero"
          className="font-heading text-xl uppercase tracking-widest text-brand-background md:text-2xl"
        >
          Controversy Ink Tattoo Studio
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-body text-sm uppercase tracking-wide transition-colors ${
                  activeId === link.id
                    ? 'text-brand-accent'
                    : 'text-brand-background/80 hover:text-brand-background'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-brand-background lg:hidden"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-brand-background/10 bg-brand-primary lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 font-body text-base uppercase tracking-wide transition-colors ${
                    activeId === link.id
                      ? 'text-brand-accent'
                      : 'text-brand-background/85'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
