'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SlowEvenings() {
  return (
    <section className="py-28 md:py-40 bg-pine-950 text-cream relative overflow-hidden">
      {/* Subtle ambient amber light orbs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-12 w-96 h-96 bg-amber/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1px] bg-amber/50" />
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber font-semibold">
              The Evening Atmosphere
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight"
          >
            Evenings Glow <br />
            <span className="italic font-normal text-amber">Differently Here</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base text-mist font-light leading-relaxed max-w-xl"
          >
            As twilight settles over the Kalam valley, warm amber rope lights illuminate stone pathways, wooden verandas, and quiet arrival passages.
          </motion.p>
        </div>

        {/* Cinematic Overlapping Image Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
          
          {/* 1. Passage Image (Enters First - Left Tall) */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -1.5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-amber/20"
          >
            <Image
              src="/assets/secret-garden/05-veranda-passage-night.jpg"
              alt="Veranda passage lit with warm lights at Secret Garden Kalam"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 z-10 max-w-xs">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-amber font-semibold block mb-1">
                Passage Walkway
              </span>
              <p className="font-serif italic text-cream text-lg">
                Soft timber passages under nightfall
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-transparent" />
          </motion.div>

          {/* 2. Veranda Sofa Image (Overlaps from Right - Center Large) */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-amber/30 lg:-ml-12 z-20"
          >
            <Image
              src="/assets/secret-garden/04-veranda-sofa-night.jpg"
              alt="Veranda sofa seating at night with glowing lights"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 z-10 max-w-md">
              <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-amber font-semibold block mb-1">
                Veranda Lounge
              </span>
              <p className="font-serif italic text-cream text-2xl">
                Unwind under warm amber light
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/80 via-transparent to-transparent" />
          </motion.div>

          {/* 3. Covered Driveway Image (Contextual Frame Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:absolute -bottom-16 right-4 w-full lg:w-80 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-amber/30 z-30"
          >
            <Image
              src="/assets/secret-garden/09-covered-driveway-view.jpg"
              alt="Covered driveway arrival view at Secret Garden"
              fill
              sizes="320px"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-4 z-10">
              <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-amber font-medium block">
                Arrival Driveway
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-pine-950/70 via-transparent to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
