'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3.5 bg-pine-950/85 backdrop-blur-xl border-b border-amber/15 shadow-pine-glow'
          : 'py-5 md:py-6 bg-gradient-to-b from-pine-950/90 via-pine-950/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Luxury Brand Wordmark */}
        <Link
          href="/"
          className="group flex flex-col items-start leading-none focus:outline-none focus:ring-1 focus:ring-amber/50 rounded-sm p-1 transition-all"
        >
          <span className="font-serif tracking-[0.28em] text-lg sm:text-xl font-medium text-white group-hover:text-amber-light transition-colors duration-300 drop-shadow-sm">
            SECRET GARDEN
          </span>
          <span className="font-sans text-[10px] tracking-[0.45em] uppercase text-amber font-medium mt-1 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-amber/70 inline-block" />
            KALAM
          </span>
        </Link>

        {/* Desktop Navigation Capsule */}
        <div className="hidden md:flex items-center space-x-1 bg-pine-900/40 border border-amber/20 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 font-sans text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-amber font-semibold bg-amber/10'
                    : 'text-cream/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-amber rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href={siteConfig.cta.href}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber hover:bg-amber-light text-pine-950 text-xs font-sans tracking-[0.18em] uppercase font-bold transition-all duration-300 shadow-warm-glow hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>{siteConfig.cta.label}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-full text-white hover:text-amber bg-pine-900/80 border border-amber/30 backdrop-blur-md focus:outline-none transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[66px] bg-pine-950/95 backdrop-blur-2xl border-b border-amber/20 px-6 py-8 shadow-2xl flex flex-col space-y-6 z-40 max-h-[85vh] overflow-y-auto"
          >
            {/* Mobile Header Brand Note */}
            <div className="pb-4 border-b border-amber/15">
              <span className="font-serif tracking-[0.25em] text-lg font-medium text-white block">
                SECRET GARDEN
              </span>
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-amber font-light mt-0.5 block">
                KALAM • BOUTIQUE RETREAT
              </span>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-3">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wider py-2 flex items-center justify-between border-b border-amber/10 ${
                      isActive ? 'text-amber font-medium' : 'text-cream/90 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-amber" />}
                  </Link>
                );
              })}
            </nav>

            {/* Quick Contact Info */}
            <div className="pt-2 space-y-2 text-xs font-sans text-mist font-light">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>Kalam Valley, Swat, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber shrink-0" />
                <span>{siteConfig.contact.phone}</span>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href={siteConfig.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-amber text-pine-950 font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-warm-glow"
              >
                <span>{siteConfig.cta.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
