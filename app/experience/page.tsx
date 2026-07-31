import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Mountain, Trees, Waves } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Explore Kalam | Secret Garden Kalam',
  description: 'Discover the rivers, alpine lakes, pine forests and surrounding mountain valleys of Kalam, Swat.',
};

const destinationHighlights = [
  {
    category: 'Mountain Roads & Slopes',
    title: 'Winding Paths & Deep Valleys',
    description: 'Kalam Valley unfolds across dramatic mountain slopes where clouds drift slowly through ancient pine ridges.',
    image: '/assets/secret-garden/11-kalam-mountain-slope-aerial.jpg',
    icon: Mountain,
    badge: 'Elevation & Vistas',
  },
  {
    category: 'Rivers & Bridges',
    title: 'Rushing Glacial Waters',
    description: 'Timber bridges cross the crystal-clear Swat River, connecting quiet mountain villages along the water’s edge.',
    image: '/assets/secret-garden/12-kalam-river-wooden-bridge.jpg',
    icon: Waves,
    badge: 'Swat River Basin',
  },
  {
    category: 'Alpine Waters & Lakes',
    title: 'Emerald Alpine Reserves',
    description: 'High-altitude mountain lakes reflect snow-capped summits and dense evergreen forests in absolute solitude.',
    image: '/assets/secret-garden/14-kalam-lake-tall-pines.jpg',
    icon: Compass,
    badge: 'High Altitude Lakes',
  },
  {
    category: 'Quiet Pastoral Meadows',
    title: 'Unrushed Mountain Life',
    description: 'Misty morning pastures where cattle graze peacefully beneath the towering valley precipices.',
    image: '/assets/secret-garden/17-kalam-misty-meadow-cow.jpg',
    icon: Trees,
    badge: 'Valley Pastures',
  },
  {
    category: 'Waterfalls & Cliffs',
    title: 'Cascades of the North',
    description: 'Pure glacial streams plunge over rocky cliffs, creating serene natural sounds throughout the surrounding pine trails.',
    image: '/assets/secret-garden/20-kalam-waterfall-cliff.jpg',
    icon: Waves,
    badge: 'Glacial Falls',
  },
  {
    category: 'Reflective Sanctuaries',
    title: 'Mirror Summit Waters',
    description: 'On quiet mornings, the surface of Kalam lake holds the exact reflection of the snow-capped mountain peaks.',
    image: '/assets/secret-garden/16-kalam-reflective-water-snow-peak.jpg',
    icon: Compass,
    badge: 'Reflective Peaks',
  },
];

export default function ExploreKalamPage() {
  return (
    <div className="pt-24 bg-pine-950 text-cream">
      
      {/* Editorial Destination Hero */}
      <section className="relative py-28 md:py-36 bg-pine-950 border-b border-amber/15 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/secret-garden/15-kalam-valley-lake-wide.jpg"
            alt="Panoramic view of Kalam Valley and alpine lake"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/70 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pine-900/80 border border-amber/30 backdrop-blur-md">
            <span className="font-sans text-xs uppercase tracking-[0.25em] text-amber font-semibold">
              The Valley & Surroundings
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light leading-tight">
            Explore <span className="italic font-normal text-amber">Kalam</span>
          </h1>

          <p className="font-sans text-base md:text-lg text-mist font-light leading-relaxed max-w-2xl mx-auto">
            Beyond the quiet grounds of Secret Garden lies the raw, majestic landscape of Kalam Valley—a haven of alpine lakes, river trails, and snow-draped horizons.
          </p>

          <p className="font-serif italic text-xs text-amber/80">
            * Note: These imagery collections showcase the surrounding landscape of Kalam Valley.
          </p>
        </div>
      </section>

      {/* Destination Feature Cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-pine-900/40 border border-amber/15 overflow-hidden hover:border-amber/40 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-pine-950/80 backdrop-blur-md border border-amber/30 text-amber font-sans text-xs tracking-wider">
                    {item.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-transparent" />
                </div>

                <div className="p-6 md:p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber text-xs font-sans tracking-widest uppercase">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.category}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-cream font-medium group-hover:text-amber transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-sans text-xs md:text-sm text-mist font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Destination Booking Banner */}
      <section className="py-20 bg-pine-900/60 border-t border-amber/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-cream font-light">
            Return to Warmth After a Day in the Valley
          </h2>
          <p className="font-sans text-sm text-mist font-light max-w-xl mx-auto">
            After exploring the river bridges and alpine waters of Kalam, retire to the private seclusion of your cottage.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-amber text-pine-950 font-sans text-xs tracking-[0.15em] uppercase font-bold shadow-warm-glow transition-all"
          >
            <span>Plan Your Stay</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
