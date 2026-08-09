export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Controversy Ink Tattoo Studio",
  "description": "Tattoo shop in Dallas",
  "telephone": "(469) 953-4615",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3211 W Northwest Hwy #600",
    "addressLocality": "Dallas",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "hasMap": "https://www.google.com/maps/search/?api=1&query=Controversy%20Ink%20Tattoo%20Studio&query_place_id=ChIJiS-TSKCdToYRWkwwqC4veoI",
  "image": "/images/hero.jpg",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Monday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Tuesday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Wednesday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Thursday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Friday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "12:00",
      "closes": "03:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "12:00",
      "closes": "03:00"
    }
  ]
} as const;
