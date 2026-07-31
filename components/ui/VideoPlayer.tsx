'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  className?: string;
  ariaLabel?: string;
  overlayGradient?: boolean;
  children?: React.ReactNode;
}

export default function VideoPlayer({
  src,
  poster,
  className = '',
  ariaLabel = 'Retreat video reel',
  overlayGradient = true,
  children,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Intersection Observer to autoplay when in viewport and pause when out
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video
              .play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={ariaLabel}
        onLoadedData={() => setHasLoaded(true)}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />

      {/* Dark gradient for text legibility */}
      {overlayGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-pine-950/90 via-pine-950/40 to-transparent pointer-events-none" />
      )}

      {/* Embedded children (text, badges, CTAs) */}
      {children && <div className="absolute inset-0 z-10">{children}</div>}

      {/* Accessible Play/Pause Toggle Overlay Button */}
      <button
        type="button"
        onClick={togglePlayPause}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        className="absolute bottom-6 right-6 z-20 p-3 rounded-full bg-pine-950/70 border border-amber/30 text-amber hover:text-cream hover:bg-amber/20 backdrop-blur-md transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-amber"
      >
        {isPlaying ? (
          <Pause className="w-4 h-4" />
        ) : (
          <Play className="w-4 h-4 ml-0.5" />
        )}
      </button>
    </div>
  );
}
