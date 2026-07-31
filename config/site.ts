export const siteConfig = {
  name: "Secret Garden Kalam",
  tagline: "A Boutique Mountain Retreat",
  subtitle: "Where the Mountains Let Time Slow Down",
  location: "Kalam Valley, Swat, Khyber Pakhtunkhwa, Pakistan",
  description: "Discover warm cottage stays, peaceful gardens and the surrounding wild beauty of Kalam at Secret Garden Kalam.",
  url: "https://secretgardenkalam.com", // Placeholder
  ogImage: "/assets/secret-garden/hero.jpeg",
  
  // Primary Navigation
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Cottages", href: "/cottages" },
    { label: "Explore Kalam", href: "/experience" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  cta: {
    label: "Book Your Stay",
    href: "/contact",
  },

  // Editable Contact Details (Placeholders)
  contact: {
    phone: "+92 300 0000000", // TODO: Replace with official resort phone number
    whatsapp: "+92 300 0000000", // TODO: Replace with official WhatsApp link/number
    email: "info@secretgardenkalam.com", // TODO: Replace with official email
    instagram: "@secretgardenkalam", // TODO: Replace with official Instagram handle
    instagramUrl: "https://instagram.com/secretgardenkalam", // TODO: Replace with official URL
    address: "Upper Kalam, Swat Valley, Khyber Pakhtunkhwa, Pakistan", // TODO: Replace with precise address
    mapsUrl: "https://maps.google.com/?q=Kalam+Swat+Pakistan", // TODO: Replace with official Google Maps pin link
  },

  // Structured Data Template (LocalBusiness / LodgingBusiness)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Secret Garden Kalam",
    "description": "A boutique mountain retreat with three cottages in Kalam, Pakistan.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kalam",
      "addressRegion": "Khyber Pakhtunkhwa",
      "addressCountry": "PK"
    },
    "image": "https://secretgardenkalam.com/assets/secret-garden/03-cottage-night-exterior.jpg",
    "url": "https://secretgardenkalam.com"
  }
};
