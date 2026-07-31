'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BrandIntro() {
  return (
    <section className="relative py-28 md:py-40 bg-cream text-charcoal overflow-hidden bg-grain">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Content Left Column */}
          <div className="lg:col-span-6 space-y-8 z-10">
            {/* Small vertical/accent label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3"
            >
              <span className="w-8 h-[1px] bg-walnut/40" />
              <span className="font-sans text-xs uppercase tracking-[0.3em] text-walnut font-medium">
                The Heritage & Ambiance
              </span>
            </motion.div>

            {/* Serif Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl text-charcoal font-light leading-[1.12]"
            >
              Not Just a Stay. <br />
              <span className="italic font-normal text-walnut">A Feeling You Return To.</span>
            </motion.h2>

            {/* Supporting Editorial Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="space-y-6 font-sans text-base md:text-lg text-charcoal/80 font-light leading-relaxed max-w-xl"
            >
              <p>
                Secret Garden is shaped around quiet mornings, glowing evenings and the comfort of slowing down in the mountains.
              </p>
              <p className="text-sm md:text-base text-stone-dark font-light">
                Tucked into Kalam’s wild pine forests, our three private cottages bring together natural stone, warm dark wood, and atmospheric rope lighting—offering a serene refuge from the fast pace of modern life.
              </p>
            </motion.div>

            {/* Quote / Sub-text feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="pt-6 border-t border-walnut/20 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-walnut/10 flex items-center justify-center font-serif text-walnut font-semibold">
                SG
              </div>
              <p className="font-serif italic text-sm text-walnut">
                “In the stillness of the trees, every evening speaks its own language.”
              </p>
            </motion.div>
          </div>

          {/* Asymmetrical Editorial Image Composition Right Column */}
          <div className="lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0">
            {/* Main Tall Image: 04-veranda-sofa-night.jpg */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[85%] md:w-[75%] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-walnut/20"
            >
              <Image
                src="/assets/secret-garden/04-veranda-sofa-night.jpg"
                alt="Secret Garden veranda sofa illuminated at night with warm ambiance"
                fill
                sizes="(max-width: 1024px) 80vw, 500px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>

            {/* Overlapping Smaller Detail Image: 10-rope-bulbs-closeup.jpg */}
            <motion.div
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-8 -left-2 md:-bottom-12 md:left-4 w-[50%] aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-cream z-20"
            >
              <Image
                src="/assets/secret-garden/10-rope-bulbs-closeup.jpg"
                alt="Close up of warm glowing rope bulbs at Secret Garden Kalam"
                fill
                sizes="(max-width: 1024px) 40vw, 250px"
                className="object-cover"
              />
            </motion.div>

            {/* Subtle decorative background outline */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-walnut/20 rounded-full pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
