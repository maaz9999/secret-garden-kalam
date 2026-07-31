import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Users, BedDouble } from 'lucide-react';
import { Cottage } from '@/config/cottages';

interface CottageCardProps {
  cottage: Cottage;
  index: number;
}

export default function CottageCard({ cottage }: CottageCardProps) {
  return (
    <div className="group relative rounded-2xl bg-pine-900/60 border border-amber/15 overflow-hidden transition-all duration-500 hover:border-amber/40 hover:shadow-warm-glow flex flex-col justify-between">
      {/* Image Header with Gentle Scale */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={cottage.image}
          alt={cottage.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.04]"
        />
        
        {/* Subtle Image Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-black/20" />

        {/* Number Badge */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-pine-950/80 backdrop-blur-md border border-amber/30 text-amber font-serif text-sm font-semibold tracking-wider">
          {cottage.number}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-2xl md:text-3xl text-cream font-medium group-hover:text-amber transition-colors">
              {cottage.name}
            </h3>
            <div className="w-8 h-8 rounded-full bg-pine-800/80 border border-amber/20 flex items-center justify-center text-amber group-hover:bg-amber group-hover:text-pine-950 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          <p className="font-sans text-xs uppercase tracking-[0.2em] text-amber/90 font-medium">
            {cottage.subtitle}
          </p>

          <p className="font-sans text-sm text-mist leading-relaxed font-light line-clamp-3">
            {cottage.description}
          </p>
        </div>

        {/* Specs Badges & Details */}
        <div className="pt-4 border-t border-amber/10 space-y-4">
          <div className="flex items-center justify-between text-xs text-cream/70 font-sans">
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber" />
              {cottage.capacity}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-amber" />
              {cottage.bedType}
            </span>
          </div>

          <Link
            href={cottage.bookingUrl || '/contact'}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-pine-800/90 border border-amber/30 text-cream group-hover:bg-amber group-hover:text-pine-950 font-sans text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-300 shadow-sm"
          >
            <span>View Cottage Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
