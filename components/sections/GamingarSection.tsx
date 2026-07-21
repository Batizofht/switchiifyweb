'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  { title: 'Adaptive Input', desc: 'Controls that respond to how you naturally move and think.' },
  { title: 'Cinematic Worlds', desc: 'Fully rendered 3D environments for next-generation hardware.' },
  { title: 'Live Engine', desc: 'Custom engine rendering physics and lighting in real time.' },
];

export function GamingarSection() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-80px' });

  return (
    <section className="relative">
      {/* Sticky background */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/vid/gamingar.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20" />
      </div>

      {/* Content over sticky bg */}
      <div className="-mt-screen relative z-10">
        {/* First viewport: big title at bottom */}
        <div className="h-dvh flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-green-400 mb-4 font-medium">
            Switchiify Gaming
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
            GAMINGAR
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-sm">
            Next-generation gaming. Built different.
          </p>
        </div>

        {/* Second viewport: rich content over black */}
        <div
          ref={contentRef}
          className="min-h-screen bg-black px-8 md:px-16 lg:px-24 pt-24 pb-32"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6 max-w-lg">
                  Immersive worlds.<br />Limitless creativity.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md">
                  Gamingar is Switchiify's vision of the next-generation gaming interface — where input becomes instinctive and immersion feels natural. Experience gameplay powered by cinematic visuals and adaptive interactions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/gamingar"
                    className="inline-flex items-center px-7 py-3 rounded-sm bg-green-400 text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-green-300 transition-colors duration-300"
                  >
                    Explore Gamingar
                  </Link>
                  <Link
                    href="/gamingar"
                    className="inline-flex items-center px-7 py-3 rounded-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/50 hover:bg-white/8 transition-all duration-300"
                  >
                    Get Easy Access
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex gap-12 lg:justify-end pt-4"
              >
                <div>
                  <p className="text-4xl font-bold text-green-400 mb-1">60fps</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Cinematic Performance</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-green-400 mb-1">3D</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Immersive Worlds</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((card) => (
                <div
                  key={card.title}
                  className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="w-1.5 h-1.5 bg-green-400 mb-5" />
                  <h3 className="text-white font-semibold text-base mb-2">{card.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
