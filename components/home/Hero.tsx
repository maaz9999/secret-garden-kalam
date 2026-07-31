'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

// Dynamically import Three.js Forest Atmosphere canvas with SSR disabled
const ForestAtmosphere = dynamic(
  () => import('@/components/three/ForestAtmosphere'),
  { ssr: false }
);

export default function Hero() {
  const { scrollY } = useScroll();

  // Scroll transforms for depth and scaling
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.08]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);
  const textY = useTransform(scrollY, [0, 500], [0, -80]);

  return (
    <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-pine-950">
      {/* Background Cottage Night Exterior Image with Parallax Scale */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/assets/secret-garden/hero.jpeg"
          alt="Secret Garden Kalam retreat hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradients for ambient mood and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/50 to-black/40" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </motion.div>

      {/* Lightweight Procedural Three.js Canvas Layer */}
      <ForestAtmosphere />

      {/* Hero Foreground Content */}
      <motion.div
        style={{ opacity: heroOpacity, y: textY }}
        className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-20"
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pine-900/80 border border-amber/30 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-amber font-semibold">
            A Hidden Retreat in Kalam
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light tracking-wide leading-[1.08] max-w-4xl"
        >
          Where the Mountains <br />
          <span className="italic font-normal text-amber-light">Let Time Slow Down</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans text-sm md:text-lg text-cream/80 font-light max-w-2xl mt-6 leading-relaxed"
        >
          Warm cottages, quiet gardens and unhurried moments surrounded by the wild beauty of Kalam.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link
            href="/cottages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-amber hover:bg-amber-light text-pine-950 font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-warm-glow"
          >
            <span>Discover the Stay</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <Link
            href="/experience"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-pine-900/60 hover:bg-pine-800 border border-amber/30 text-cream font-sans text-xs tracking-[0.2em] uppercase font-medium backdrop-blur-md transition-all duration-300"
          >
            <span>Explore Kalam</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Discreet Animated "Scroll to Discover" Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 z-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-amber/70 hover:text-amber transition-colors"
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-light">
          Scroll to Discover
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
