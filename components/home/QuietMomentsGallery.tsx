'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Maximize2, ArrowUpRight } from 'lucide-react';
import { galleryItems, GalleryItem } from '@/config/gallery';
import Lightbox from '@/components/ui/Lightbox';

// Select 8-9 curated highlights for homepage preview
const homeGalleryItems = galleryItems.filter((item) =>
  ['g-03', 'g-04', 'g-08', 'g-10', 'g-13', 'g-16', 'g-22', 'g-25'].includes(item.id)
);

export default function QuietMomentsGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section className="py-28 md:py-36 bg-pine-900/30 text-cream relative border-t border-amber/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-amber font-semibold">
              Visual Impressions
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light">
              Quiet Moments <span className="italic font-normal text-amber">Gallery</span>
            </h2>
          </div>

          <div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-pine-800 hover:bg-amber hover:text-pine-950 border border-amber/30 text-amber font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300"
            >
              <span>Explore All Photographs</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Masonry CSS Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeGalleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-amber/15 bg-pine-950 aspect-[4/3] ${
                item.aspect === 'tall' ? 'sm:row-span-2 sm:aspect-[3/4]' : ''
              } shadow-lg hover:border-amber/40 transition-all duration-300`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.05]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-pine-900/80 border border-amber/30 flex items-center justify-center text-amber">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-amber font-medium block">
                    {item.locationLabel}
                  </span>
                  <h4 className="font-serif text-lg text-cream font-medium">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={homeGalleryItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
}
