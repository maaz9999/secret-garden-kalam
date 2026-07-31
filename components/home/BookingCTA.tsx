'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export default function BookingCTA() {
  return (
    <section className="relative py-32 md:py-44 bg-pine-950 text-cream overflow-hidden border-t border-amber/15">
      {/* Background Image: 16-kalam-reflective-water-snow-peak.jpg */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/secret-garden/16-kalam-reflective-water-snow-peak.jpg"
          alt="Tranquil Kalam lake reflecting mountain snow peaks"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/80 to-pine-950/60" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pine-900/80 border border-amber/30 backdrop-blur-md"
        >
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-amber font-semibold">
            Your Mountain Journey Begins
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-light leading-tight"
        >
          Leave the Noise <span className="italic font-normal text-amber">Behind</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-sans text-lg md:text-xl text-cream/90 font-light max-w-xl mx-auto leading-relaxed"
        >
          Come for the mountains. Stay for the feeling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Link
            href={siteConfig.cta.href}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-amber hover:bg-amber-light text-pine-950 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-warm-glow"
          >
            <span>Book Your Stay</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-pine-900/80 hover:bg-pine-800 border border-amber/30 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md transition-all duration-300"
          >
            <span>Contact Us</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
