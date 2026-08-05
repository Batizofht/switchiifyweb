'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: 'Behavioral Adaptation',
    desc: 'Understands your communication style and decision patterns, adapting to how you think and work.',
  },
  {
    title: 'Predictive Assistance',
    desc: 'Recognizes recurring patterns in your work and proactively surfaces relevant information.',
  },
  {
    title: 'Persistent Memory',
    desc: 'An intelligence that never forgets — every conversation and context is always available.',
  },
];

export function NeuroAISection() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-80px' });

  return (
    <section className="relative">
      {/* Sticky background */}
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <img
          src="/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content over sticky bg */}
      <div className="-mt-screen relative z-10">
        {/* First viewport: title */}
        <div className="h-dvh flex flex-col justify-end px-4 sm:px-8 md:px-16 lg:px-24 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400 mb-4 font-medium">
            Switchiify Intelligence
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter">
            Neuro AI
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-sm">
            The AI that learns from you.
          </p>
        </div>

        {/* Second viewport: content over black */}
        <div
          ref={contentRef}
          className="min-h-screen bg-black px-4 sm:px-8 md:px-16 lg:px-24 pt-24 pb-32"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6 max-w-lg">
                  The only AI that adapts<br />to the way you work.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md">
                  Neuro AI understands your voice, habits, and decisions — building a persistent model of how you think. Smarter every second. Genuinely useful.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/neuroai"
                    className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
                  >
                    Talk to Neuro
                  </Link>
                  <Link
                    href="/neuroai"
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
                  <p className="text-4xl font-bold text-cyan-400 mb-1">&lt;200ms</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Response Time</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-cyan-400 mb-1">100%</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Private</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {features.map((f) => (
                <div
                  key={f.title}
                  className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
                >
                  <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
