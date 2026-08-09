import type { Metadata } from 'next';
import { Bebas_Neue, Barlow } from 'next/font/google';
import './globals.css';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import Beacon from '../components/Beacon';

export const metadata = {
  title: "Controversy Ink Tattoo Studio | Tattoo shop in Dallas, TX",
  description: "Controversy Ink Tattoo Studio, Tattoo shop in Dallas, TX. Known for attention to detail. Call (469) 953-4615.",
  openGraph: {
    title: "Controversy Ink Tattoo Studio | Tattoo shop in Dallas, TX",
    description: "Controversy Ink Tattoo Studio, Tattoo shop in Dallas, TX. Known for attention to detail. Call (469) 953-4615.",
    type: "website",
    images: ["/images/og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Controversy Ink Tattoo Studio | Tattoo shop in Dallas, TX",
    description: "Controversy Ink Tattoo Studio, Tattoo shop in Dallas, TX. Known for attention to detail. Call (469) 953-4615.",
    images: ["/images/og.jpg"],
  },
};


const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-heading',
  display: 'swap',
});

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebasNeue.variable + ' ' + barlow.variable}>
      <body className="font-body bg-brand-background text-brand-text antialiased">
        <LocalBusinessSchema />
        <Beacon />
        {children}
      </body>
    </html>
  );
}
