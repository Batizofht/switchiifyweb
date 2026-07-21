'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '10M+', label: 'Innovators' },
  { value: '50+', label: 'Cities' },
  { value: '100K+', label: 'Forum Posts' },
];

export function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-zinc-950 border-t border-white/5">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24 py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6 font-medium"
            >
              Global Community
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] mb-6"
            >
              Join where builders
              <br />
              <span className="text-zinc-400">meet the future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md"
            >
              Be part of the community shaping Switchiify. Builders, creators, and visionaries — solving problems together and sharing what they learn.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/community"
                className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Join Community
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center px-7 py-3 rounded-sm border border-white/15 text-zinc-300 text-xs font-semibold uppercase tracking-[0.1em] hover:bg-white/5 hover:border-white/30 transition-all duration-300"
              >
                Read the Blog
              </Link>
            </motion.div>
          </div>

          {/* Right: stats + note */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-px bg-white/10 rounded-md overflow-hidden border border-white/10">
              {stats.map((s) => (
                <div key={s.value} className="bg-black px-6 py-8 text-center">
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-5 rounded-md border border-white/10 bg-white/[0.03]">
              <p className="text-zinc-400 text-sm leading-relaxed">
                <span className="text-white font-medium">Switchiify welcomes everyone.</span>{' '}
                Whether you&apos;re building your first project or shipping to millions — there&apos;s a place for you here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
