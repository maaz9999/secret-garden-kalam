'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';

export default function CottageExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Smooth frame expansion animation on scroll
  const scale = useTransform(scrollYProgress, [0.1, 0.5], [0.88, 1]);
  const borderRadius = useTransform(scrollYProgress, [0.1, 0.5], ['32px', '0px']);

  return (
    <section
      ref={containerRef}
      className="relative py-24 md:py-36 bg-pine-950 text-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine-900 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase">
            <span>Interior Ambiance</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
            Inside <span className="italic font-normal text-amber">the Garden</span>
          </h2>

          <p className="font-sans text-base md:text-lg text-mist font-light leading-relaxed">
            Warm textures, thoughtful details and spaces designed for rest after a day in the valley.
          </p>
        </div>

        <div>
          <Link
            href="/cottages"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber hover:bg-amber-light text-pine-950 font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 shadow-warm-glow"
          >
            <span>Explore Our Cottages</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Expanding Video Container */}
      <div className="w-full flex justify-center items-center px-4 md:px-0">
        <motion.div
          style={{
            scale: scale,
            borderRadius: borderRadius,
          }}
          className="relative w-full max-w-6xl aspect-[16/9] overflow-hidden shadow-pine-glow border border-amber/20"
        >
          <VideoPlayer
            src="/assets/secret-garden/room.mp4"
            poster="/assets/secret-garden/04-veranda-sofa-night.jpg"
            ariaLabel="Interior video loop of Secret Garden cottage room and mountain lounge"
            className="w-full h-full"
          >
            {/* Ambient Text Overlay inside Video Frame */}
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 max-w-md z-10 space-y-2 pointer-events-none">
              <span className="font-serif italic text-amber text-lg md:text-2xl font-light">
                Quiet Sanctuary
              </span>
              <p className="font-sans text-xs md:text-sm text-cream/90 font-light leading-snug">
                Designed for warmth, rest, and contemplative evenings in Kalam.
              </p>
            </div>
          </VideoPlayer>
        </motion.div>
      </div>
    </section>
  );
}
