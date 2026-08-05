'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ui/Card/ProductCard';
import { motion } from 'framer-motion';

const products = [
  { title: 'Gamingar', description: 'Next-level interactive 3D play.', href: '/gamingar' },
  { title: 'OpenSpace', description: 'Business spaces re-imagined.', href: '/openspace' },
  { title: 'Neuro AI', description: 'Intelligent human-tech interaction.', href: '/neuroai' },
];

const videos = ['/vid/rwanda.mp4', '/vid/first.mp4'];

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      if (isPlaying) videoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  const togglePlayPause = () => {
    const next = !isPlaying;
    setIsPlaying(next);
    if (videoRef.current) next ? videoRef.current.play().catch(() => {}) : videoRef.current.pause();
  };

  return (
    <section className="min-h-screen w-full relative flex flex-col overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videos[activeVideo]} type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 lg:px-20 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-5"
        >
          Switchiify Technology
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight max-w-3xl mb-6"
        >
          Build, Change &<br />Grow Through<br />Our Technology.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-zinc-400 text-base md:text-lg max-w-lg leading-relaxed mb-8"
        >
          Advanced systems that help people and businesses connect, grow, and achieve more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex flex-wrap items-center gap-3"
        >
          <Link
            href="/openspace"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
          >
            Get Started
          </Link>
          <Link
            href="/enterprise"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Enterprise Solutions
          </Link>
        </motion.div>
      </div>

      {/* Bottom: product cards */}
      <div className="relative z-10 px-8 mt-4 md:mt-0 md:px-16 lg:px-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5"
        >
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </motion.div>
      </div>

      {/* Play/Pause + video dots */}
      <div className="hidden md:flex absolute bottom-24 right-8 z-20 flex-col items-center gap-3">
        <button
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="w-9 h-9 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
        >
          {isPlaying ? (
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="flex gap-1.5">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveVideo(i)}
              aria-label={`Show video ${i + 1}`}
              className="w-4 h-3 flex items-center justify-center"
            >
              <span
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeVideo ? 'bg-white w-4' : 'bg-zinc-600 hover:bg-zinc-400 w-1.5'
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
