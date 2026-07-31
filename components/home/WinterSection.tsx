'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import VideoPlayer from '@/components/ui/VideoPlayer';

// Dynamically import procedural snow canvas with SSR disabled
const SnowAtmosphere = dynamic(
  () => import('@/components/three/SnowAtmosphere'),
  { ssr: false }
);

export default function WinterSection() {
  return (
    <section className="relative py-28 md:py-40 bg-[#0E1517] text-snow overflow-hidden border-t border-mist/10">
      {/* Procedural Sparse Winter Snow Canvas */}
      <SnowAtmosphere />

      {/* Season shift ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pine-950 via-[#0E1517] to-[#0A1012] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mist/10 border border-mist/20 text-[11px] font-sans tracking-widest text-mist uppercase"
          >
            <span>Winter Transformation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-snow"
          >
            When the Garden <span className="italic font-normal text-mist">Turns White</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-base md:text-lg text-mist/80 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Winter softens the landscape, quiets the roads and brings a different kind of warmth to the cottages.
          </motion.p>
        </div>

        {/* Main Reel & Layered Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Winter Video Reel Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-mist/20"
          >
            <VideoPlayer
              src="/assets/secret-garden/winter.mp4"
              poster="/assets/secret-garden/25-secret-garden-cottage-winter-exterior.png"
              ariaLabel="Winter snowfall video reel at Secret Garden Kalam"
              className="w-full h-full"
            >
              <div className="absolute bottom-6 left-6 max-w-sm">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-mist font-semibold block mb-1">
                  Snowfall in Kalam
                </span>
                <p className="font-serif italic text-snow text-xl">
                  Silent winter mornings in the valley
                </p>
              </div>
            </VideoPlayer>
          </motion.div>

          {/* Layered Supporting Image Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Image 1: 23-secret-garden-snowy-garden-seating.png */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-mist/15 group"
            >
              <Image
                src="/assets/secret-garden/23-secret-garden-snowy-garden-seating.png"
                alt="Snowy garden seating at Secret Garden Kalam"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="font-sans text-xs text-snow font-medium">
                  Snowy Garden Seating
                </span>
              </div>
            </motion.div>

            {/* Image 2: 24-secret-garden-winter-entrance-road.png & 25-secret-garden-cottage-winter-exterior.png Side by Side */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-mist/15 group"
              >
                <Image
                  src="/assets/secret-garden/24-secret-garden-winter-entrance-road.png"
                  alt="Snow covered winter entrance road to retreat"
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-sans text-[11px] text-snow font-medium">
                    Winter Road
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-mist/15 group"
              >
                <Image
                  src="/assets/secret-garden/25-secret-garden-cottage-winter-exterior.png"
                  alt="Cottage winter exterior surrounded by snow"
                  fill
                  sizes="220px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="font-sans text-[11px] text-snow font-medium">
                    Winter Cottage
                  </span>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
