'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Filter } from 'lucide-react';
import { galleryItems, galleryCategories, GalleryItem } from '@/config/gallery';
import Lightbox from '@/components/ui/Lightbox';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="pt-24 min-h-screen bg-pine-950 text-cream">
      
      {/* Gallery Header */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine-900 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase">
          <span>Photographic Collection</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-light">
          Moments of <span className="italic font-normal text-amber">Secret Garden</span>
        </h1>

        <p className="font-sans text-base md:text-lg text-mist font-light max-w-2xl mx-auto leading-relaxed">
          A visual record of quiet veranda evenings, snow-draped cottage mornings, and the wild alpine vistas of Kalam.
        </p>

        {/* Animated Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-sans tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-amber text-pine-950 shadow-warm-glow font-bold'
                    : 'bg-pine-900/80 text-mist hover:text-cream border border-amber/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Interactive Gallery Masonry Grid */}
      <section className="pb-32 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedItem(item)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-pine-900 border border-amber/15 cursor-pointer shadow-lg hover:border-amber/40 transition-all"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.05]"
                />

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full bg-pine-950/80 backdrop-blur-md border border-amber/30 text-amber text-[10px] font-sans tracking-widest uppercase">
                      {item.locationLabel}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-pine-900/80 border border-amber/30 flex items-center justify-center text-amber">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl text-cream font-medium">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-mist font-light mt-1">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Accessible Lightbox Modal */}
      <Lightbox
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />

    </div>
  );
}
