'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '3', label: 'Product Lines' },
  { value: '16+', label: 'Countries' },
  { value: '2026', label: 'Founded' },
  { value: 'Series A', label: 'Stage' },
];

const thesis = [
  {
    title: 'Technology Leadership',
    desc: 'Switchiify operates in three high-growth markets simultaneously — gaming infrastructure, behavioral AI, and enterprise collaboration — with proprietary technology in each vertical.',
  },
  {
    title: 'Massive Market Opportunity',
    desc: 'The combined addressable market for Gamingar, Neuro AI, and OpenSpace exceeds $400B. We\'re entering at an inflection point, as users in emerging markets come online at scale.',
  },
  {
    title: 'Experienced Team',
    desc: 'Our team has built and scaled products used by tens of millions of people. We\'ve done this before — and we\'ve learned from every mistake.',
  },
];

export default function InvestorsPage() {
  const statsRef = useRef(null);
  const thesisRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });
  const thesisInView = useInView(thesisRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      {/* Hero with dot-grid background */}
      <section
        className="relative min-h-[65vh] flex flex-col justify-end overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(circle, #27272a 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Investors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Building the Future of Technology.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
          >
            Switchiify is a global technology company building the next generation of gaming, AI, and collaborative platforms — starting from Rwanda.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
            >
              Connect with Our Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-16 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 md:p-8 rounded-md border border-white/10 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{s.value}</p>
                <p className="text-zinc-500 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section ref={thesisRef} className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={thesisInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Investment Thesis</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Why Switchiify</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {thesis.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 20 }}
                animate={thesisInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-md bg-white/[0.03] border border-white/10"
              >
                <div className="w-1.5 h-1.5 bg-white mb-5" />
                <h3 className="text-white font-semibold text-base mb-3">{t.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-12">Our Products</p>
          <div className="flex flex-col gap-6">
            {[
              { color: 'bg-green-400', name: 'Gamingar', desc: 'Next-generation gaming interface with adaptive input and cinematic 3D worlds.', href: '/gamingar' },
              { color: 'bg-cyan-400', name: 'Neuro AI', desc: 'The only AI that learns from YOU — your voice, habits, and decisions.', href: '/neuroai' },
              { color: 'bg-white', name: 'OpenSpace', desc: 'Business collaboration platform built for the way modern teams actually work.', href: '/openspace' },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-5 py-5 border-b border-zinc-900">
                <div className={`w-2 h-2 rounded-full ${p.color} shrink-0`} />
                <div className="flex-1">
                  <p className="text-white font-medium text-sm mb-0.5">{p.name}</p>
                  <p className="text-zinc-500 text-sm">{p.desc}</p>
                </div>
                <Link href={p.href} className="text-zinc-500 hover:text-white text-xs transition-colors shrink-0">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Interested in Investing?
          </h2>
          <p className="text-zinc-400 text-base max-w-md mx-auto leading-relaxed mb-10">
            We&apos;re selective about our investors — we want partners who share our vision for what technology can do.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
            >
              Download Investment Deck
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
