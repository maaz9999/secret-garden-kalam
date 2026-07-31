'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const destinationScenes = [
  {
    number: '01',
    title: 'Into the Mountains',
    caption: 'Majestic pine slopes rising high into the Swat valley haze.',
    image: '/assets/secret-garden/11-kalam-mountain-slope-aerial.jpg',
    alt: 'Aerial view of Kalam mountain slopes',
  },
  {
    number: '02',
    title: 'Across Quiet Waters',
    caption: 'Historic wooden bridges spanning glacial mountain streams.',
    image: '/assets/secret-garden/12-kalam-river-wooden-bridge.jpg',
    alt: 'Wooden bridge over Kalam river',
  },
  {
    number: '03',
    title: 'Under Snow-Capped Peaks',
    caption: 'Grand alpine vistas crowned with enduring white ridges.',
    image: '/assets/secret-garden/13-kalam-snowy-mountain-valley.jpg',
    alt: 'Snowy mountain valley in Kalam',
  },
  {
    number: '04',
    title: 'Along Alpine Lakes',
    caption: 'Deep green pine reserves edging mirror-still waters.',
    image: '/assets/secret-garden/14-kalam-lake-tall-pines.jpg',
    alt: 'Kalam alpine lake bordered by tall pines',
  },
  {
    number: '05',
    title: 'Through the Valley',
    caption: 'Sweeping basin views where cloud shadows dance across lakes.',
    image: '/assets/secret-garden/15-kalam-valley-lake-wide.jpg',
    alt: 'Wide panoramic view of Kalam valley lake',
  },
  {
    number: '06',
    title: 'Where Water Holds the Sky',
    caption: 'Crystalline reflections of towering high-altitude summits.',
    image: '/assets/secret-garden/16-kalam-reflective-water-snow-peak.jpg',
    alt: 'Reflective water showcasing snow peak in Kalam',
  },
  {
    number: '07',
    title: 'Life Moves Slowly Here',
    caption: 'Quiet pastoral meadows cradled by misty forest glades.',
    image: '/assets/secret-garden/17-kalam-misty-meadow-cow.jpg',
    alt: 'Misty meadow with grazing cow in Kalam',
  },
  {
    number: '08',
    title: 'Following the River',
    caption: 'Rushing glacial torrents cutting through ancient pine groves.',
    image: '/assets/secret-garden/18-kalam-forest-river.jpg',
    alt: 'Clear river cutting through pine forest in Kalam',
  },
  {
    number: '09',
    title: 'Beneath the Falls',
    caption: 'Pure mountain cascades pouring over stone precipices.',
    image: '/assets/secret-garden/20-kalam-waterfall-cliff.jpg',
    alt: 'Waterfall tumbling down rocky cliff in Kalam',
  },
  {
    number: '10',
    title: 'At the Edge of Green',
    caption: 'Emerald waters surrounded by high alpine summer pastures.',
    image: '/assets/secret-garden/21-kalam-green-lake-cows.jpg',
    alt: 'Green lake with grazing cattle in Kalam',
  },
];

export default function ExploreKalamSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 md:py-36 bg-pine-950 text-cream relative overflow-hidden border-t border-amber/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine-900 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase">
              <span>Explore Kalam</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Beyond the Garden, <br />
              <span className="italic font-normal text-amber">Kalam Is Waiting</span>
            </h2>

            <p className="font-sans text-base text-mist font-light leading-relaxed">
              Rivers, pine forests, alpine lakes and mountain roads unfold beyond the retreat.
            </p>
          </div>

          <div>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-pine-900 hover:bg-pine-800 border border-amber/30 text-amber font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
            >
              <span>Full Destination Journal</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Horizontal Storytelling Scroll Container Aligned with Max-W-7XL Grid */}
        <div
          ref={scrollContainerRef}
          className="w-full overflow-x-auto no-scrollbar pb-8 flex space-x-6 cursor-grab active:cursor-grabbing snap-x snap-mandatory"
        >
          {destinationScenes.map((scene, idx) => (
            <motion.div
              key={scene.number}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[380px] lg:w-[370px] aspect-[4/5] relative rounded-2xl overflow-hidden border border-amber/20 bg-pine-900/80 snap-start group shadow-xl"
            >
              <Image
                src={scene.image}
                alt={scene.alt}
                fill
                sizes="(max-width: 768px) 85vw, 380px"
                className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.04]"
              />
              
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/40 to-transparent" />

              {/* Scene Badge & Title Content */}
              <div className="absolute top-6 left-6 z-10 px-3 py-1 rounded-full bg-pine-950/80 backdrop-blur-md border border-amber/30 text-amber font-serif text-sm font-semibold">
                {scene.number}
              </div>

              <div className="absolute bottom-8 left-8 right-8 z-10 space-y-2">
                <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-amber font-semibold">
                  Destination Scene
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-cream font-medium">
                  {scene.title}
                </h3>
                <p className="font-sans text-xs text-mist font-light leading-relaxed">
                  {scene.caption}
                </p>
              </div>
            </motion.div>
          ))}
          {/* End padding spacer so final card never touches container wall */}
          <div className="w-6 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
