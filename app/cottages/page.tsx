import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Users, BedDouble, CheckCircle2, Calendar } from 'lucide-react';
import { cottagesData } from '@/config/cottages';
import VideoPlayer from '@/components/ui/VideoPlayer';

export const metadata: Metadata = {
  title: 'Our Cottages | Secret Garden Kalam',
  description: 'Explore our three private mountain cottages tucked in the pine forests of Kalam Valley.',
};

export default function CottagesPage() {
  return (
    <div className="pt-24 bg-pine-950 text-cream">
      
      {/* Page Hero with room.mp4 interior atmosphere */}
      <section className="relative py-24 md:py-32 bg-pine-950 border-b border-amber/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pine-900 border border-amber/30 text-[11px] font-sans tracking-widest text-amber uppercase">
              <span>Boutique Accommodations</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl font-light leading-tight">
              Three Cottages. <br />
              <span className="italic font-normal text-amber">One Quiet Escape.</span>
            </h1>

            <p className="font-sans text-base md:text-lg text-mist font-light leading-relaxed max-w-xl">
              Each cottage is designed as an intimate sanctuary in the mountains—blending natural stone, dark timber, and warm ambient light with secluded garden vistas.
            </p>

            <div className="pt-4 flex items-center gap-6 text-xs text-cream/70 font-sans">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>3 Private Cottages</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>Private Verandas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber" />
                <span>Pine Forest Surroundings</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-amber/20">
            <VideoPlayer
              src="/assets/secret-garden/room.mp4"
              poster="/assets/secret-garden/04-veranda-sofa-night.jpg"
              ariaLabel="Interior room view video loop"
              className="w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* Cottages List Details */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {cottagesData.map((cottage, idx) => (
          <div
            key={cottage.id}
            id={cottage.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 md:p-12 rounded-3xl bg-pine-900/40 border border-amber/15 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Cottage Image & Gallery Thumbnails */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber/20 shadow-xl">
                <Image
                  src={cottage.image}
                  alt={cottage.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-pine-950/80 backdrop-blur-md border border-amber/30 text-amber font-serif text-sm font-semibold">
                  Cottage {cottage.number}
                </div>
              </div>

              {/* Gallery Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {cottage.gallery.map((imgSrc, i) => (
                  <div key={i} className="relative aspect-video rounded-lg overflow-hidden border border-amber/10">
                    <Image
                      src={imgSrc}
                      alt={`${cottage.name} view detail ${i + 1}`}
                      fill
                      sizes="180px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Cottage Details & Editable Spec Placeholders */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-sans text-xs uppercase tracking-[0.25em] text-amber font-semibold">
                  {cottage.subtitle}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-cream font-medium mt-1">
                  {cottage.name}
                </h2>
              </div>

              <p className="font-sans text-sm md:text-base text-mist font-light leading-relaxed">
                {cottage.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-amber/10 text-xs font-sans">
                <div className="space-y-1">
                  <span className="text-amber/80 font-medium flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-amber" /> Capacity
                  </span>
                  <p className="text-cream">{cottage.capacity}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-amber/80 font-medium flex items-center gap-1.5">
                    <BedDouble className="w-3.5 h-3.5 text-amber" /> Bed Arrangement
                  </span>
                  <p className="text-cream">{cottage.bedType}</p>
                </div>

                <div className="space-y-1">
                  <span className="text-amber/80 font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber" /> Availability
                  </span>
                  <p className="text-cream">Year-Round Stays</p>
                </div>

                <div className="space-y-1">
                  <span className="text-amber/80 font-medium flex items-center gap-1.5">
                    Pricing
                  </span>
                  <p className="text-cream">{cottage.price}</p>
                </div>
              </div>

              {/* Verified Amenities */}
              <div className="space-y-2">
                <span className="font-sans text-xs uppercase tracking-[0.2em] text-amber font-semibold block">
                  Cottage Features
                </span>
                <div className="flex flex-wrap gap-2">
                  {cottage.amenities.map((amenity, aIdx) => (
                    <span
                      key={aIdx}
                      className="px-3 py-1 rounded-md bg-pine-950 border border-amber/20 text-xs font-sans text-mist"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/contact?cottage=${cottage.id}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-amber hover:bg-amber-light text-pine-950 font-sans text-xs tracking-[0.15em] uppercase font-bold transition-all shadow-warm-glow"
                >
                  <span>Inquire For Cottage {cottage.number}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
