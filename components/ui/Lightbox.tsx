'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '@/config/gallery';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export default function Lightbox({ item, items, onClose, onNavigate }: LightboxProps) {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  const handleNext = useCallback(() => {
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  }, [currentIndex, items, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  }, [currentIndex, items, onNavigate]);

  // Keyboard navigation & Esc listener
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent background body scroll when open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose, handleNext, handlePrev]);

  // Touch Swipe Handler
  let touchStartX = 0;
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-pine-950/95 backdrop-blur-2xl p-4 md:p-8"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Lightbox"
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-pine-900/80 text-cream hover:text-amber border border-amber/20 focus:outline-none transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Image"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-pine-900/80 text-cream hover:text-amber border border-amber/20 focus:outline-none transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {items.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Image"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-pine-900/80 text-cream hover:text-amber border border-amber/20 focus:outline-none transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Main Content Area */}
          <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center">
            <motion.div
              key={item.id}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-[65vh] md:h-[75vh] rounded-2xl overflow-hidden shadow-2xl border border-amber/20"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Caption & Location Badge */}
            <div className="mt-4 text-center max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pine-900/90 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase mb-2">
                <span>{item.locationLabel}</span>
                <span>•</span>
                <span>{item.categoryLabel}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-cream font-medium">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-mist font-light mt-1">
                {item.alt}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
