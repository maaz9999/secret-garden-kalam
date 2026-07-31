'use client';

import { motion } from 'framer-motion';
import { cottagesData } from '@/config/cottages';
import CottageCard from '@/components/ui/CottageCard';

export default function CottagesPreview() {
  return (
    <section className="py-28 bg-pine-900/40 text-cream relative border-y border-amber/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-xs uppercase tracking-[0.3em] text-amber font-semibold"
          >
            Accommodations
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light"
          >
            Three Private <span className="italic font-normal text-amber">Cottages</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-sm md:text-base text-mist font-light leading-relaxed"
          >
            Thoughtfully crafted mountain stays with private verandas, warm wooden accents, and direct garden vistas.
          </motion.p>
        </div>

        {/* 3 Cottage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cottagesData.map((cottage, index) => (
            <motion.div
              key={cottage.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <CottageCard cottage={cottage} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
