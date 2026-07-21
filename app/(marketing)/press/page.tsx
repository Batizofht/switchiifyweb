'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const mentions = [
  { outlet: 'TechCrunch', title: 'Switchiify raises Series A to build "adaptive" gaming and AI infrastructure', date: 'Apr 2026' },
  { outlet: 'The Next Web', title: 'How a Kigali startup is rethinking human-AI interaction', date: 'Feb 2026' },
  { outlet: 'Rest of World', title: 'The African tech companies building for a global market', date: 'Dec 2025' },
];

export default function PressPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Press &amp; Media
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Switchiify in the news.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Media resources, brand assets, and coverage of Switchiify&apos;s products and research.
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">In the Press</p>
          <div className="flex flex-col">
            {mentions.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 border-b border-zinc-900"
              >
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">{m.title}</p>
                  <p className="text-zinc-500 text-xs">{m.outlet} · {m.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">For interview requests, brand assets, or press inquiries:</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Contact Media Team
        </Link>
      </section>
    </div>
  );
}
