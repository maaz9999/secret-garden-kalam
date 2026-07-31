import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone, Mail, Instagram } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-pine-950 border-t border-amber/15 relative overflow-hidden text-cream/80 pt-20 pb-12">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-amber/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <Link href="/" className="inline-block group mb-4">
                <span className="font-serif tracking-[0.25em] text-2xl font-medium text-cream group-hover:text-amber transition-colors">
                  SECRET GARDEN
                </span>
                <span className="block font-sans text-xs tracking-[0.4em] uppercase text-amber/90 font-light mt-1">
                  KALAM
                </span>
              </Link>
              <p className="font-sans text-sm text-mist leading-relaxed max-w-sm font-light mt-2">
                A boutique mountain retreat of three private cottages tucked into the quiet pine forests of Kalam Valley.
              </p>
            </div>

            <div className="pt-2">
              <span className="block text-[10px] tracking-[0.25em] uppercase text-amber/80 font-medium mb-1">
                LOCATION
              </span>
              <p className="text-xs text-cream/70 font-light flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber shrink-0" />
                {siteConfig.location}
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-amber font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase font-sans">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-mist hover:text-cream transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Inquiries & Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-amber font-semibold">
              Reservations & Inquiries
            </h4>
            <p className="text-xs text-mist font-light leading-relaxed">
              We invite you to reach out for cottage availability and seasonal arrangements.
            </p>
            
            <div className="space-y-2 pt-2 text-xs font-sans">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-2.5 text-cream/80 hover:text-amber transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-cream/80 hover:text-amber transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>{siteConfig.contact.email}</span>
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-cream/80 hover:text-amber transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>{siteConfig.contact.instagram}</span>
              </a>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-amber hover:text-cream transition-colors group"
              >
                <span>Send Booking Inquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-stone tracking-wider font-light">
          <p>© {new Date().getFullYear()} Secret Garden Kalam. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Quiet Hospitality • Kalam Valley, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
