'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
          ? 'py-3 glass-nav shadow-pine-glow'
          : 'py-5 md:py-6 bg-gradient-to-b from-pine-950/80 via-pine-950/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Text-based Wordmark */}
        <Link
          href="/"
          className="group flex flex-col items-start leading-none focus:outline-none focus:ring-1 focus:ring-amber/50 rounded-sm p-1 transition-all"
        >
          <span className="font-serif tracking-[0.25em] text-lg sm:text-xl font-medium text-white group-hover:text-white transition-colors duration-300">
            SECRET GARDEN
          </span>
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-amber/90 font-light mt-1">
            KALAM
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {siteConfig.navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                  isActive
                    ? 'text-amber font-semibold'
                    : 'text-cream/80 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-amber"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href={siteConfig.cta.href}
            className="group relative inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full border border-amber/40 bg-pine-900/60 hover:bg-amber text-amber hover:text-pine-950 text-xs font-sans tracking-[0.15em] uppercase font-medium transition-all duration-300 hover:shadow-warm-glow overflow-hidden"
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
          className="md:hidden p-2 rounded-lg text-white hover:text-amber bg-pine-900/60 border border-amber/20 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden fixed inset-x-0 top-[65px] bg-pine-950/95 backdrop-blur-xl border-b border-amber/20 px-6 py-8 shadow-2xl flex flex-col space-y-6 z-40 max-h-[85vh] overflow-y-auto"
          >
            <nav className="flex flex-col space-y-4">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-serif text-2xl tracking-wider py-1 border-b border-amber/10 ${
                      isActive ? 'text-amber font-medium' : 'text-cream/90'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4">
              <Link
                href={siteConfig.cta.href}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-amber text-pine-950 font-sans text-xs tracking-[0.2em] uppercase font-bold shadow-lg"
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
