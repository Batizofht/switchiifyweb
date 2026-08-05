'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// ─── Reveal helpers ───────────────────────────────────────────────────────────
const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function useReveal(margin: NonNullable<Parameters<typeof useInView>[1]>['margin'] = '-80px') {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: '50K+', label: 'Active Workspaces' },
  { value: '200+', label: 'Native Integrations' },
  { value: '99.9%', label: 'Uptime Guarantee' },
];

const useCases = [
  {
    title: 'OpenSpace for Business',
    subtitle: 'Ops & strategy teams',
    image: '/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png',
    href: '/contact',
  },
  {
    title: 'Design & Architecture',
    subtitle: 'Studios & agencies',
    image: '/designing_images_support/d6f2f0257bd6d10a7a0f2a6b97d6b36dd117cbea.png',
    href: '/contact',
  },
  {
    title: 'Research Environments',
    subtitle: 'Labs & academia',
    image: '/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png',
    href: '/contact',
  },
];

const features = [
  {
    title: 'Real-time Collaboration',
    description: 'Every cursor, comment, and change lands simultaneously — no refresh, no version conflicts.',
  },
  {
    title: 'AI-Powered Workflows',
    description: 'OpenSpace reads your team\'s patterns and surfaces the next action before you need to ask.',
  },
  {
    title: 'Custom Integrations',
    description: 'Connect your existing stack in minutes. Slack, Jira, Figma, Salesforce — and 190 more.',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, end-to-end encryption, and role-based access that your IT team will approve.',
  },
  {
    title: 'Mobile-First Design',
    description: 'Full-fidelity workspace on any screen. Not a stripped-down app — the real thing, everywhere.',
  },
  {
    title: 'Global CDN',
    description: 'Sub-100ms load times from any continent. Your team in Kigali and New York work at the same speed.',
  },
];

// ─── Check icon ───────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 shrink-0"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="9" stroke="#a855f7" strokeWidth="1.5" />
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function OpenSpacePage() {
  const whatRef = useReveal('-60px');
  const statsRef = useReveal('-40px');
  const useCasesRef = useReveal('-60px');
  const featuresRef = useReveal('-60px');
  const ctaRef = useReveal('-40px');

  return (
    <div className="bg-black min-h-screen">

      {/* ─── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">

        {/* Full-bleed image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png')" }}
          aria-hidden="true"
        />

        {/* Primary overlay: black 60% */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.62)' }}
          aria-hidden="true"
        />

        {/* Gradient overlay: heavier at bottom for legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.90) 85%, rgba(0,0,0,1) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Orbs — purple left, pink right — gradient 1 of 2 */}
        <div
          className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.28) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/3 -right-24 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.22) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 pb-16 md:pb-24 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-5"
          >
            Switchiify OpenSpace
          </motion.p>

          {/* Heading — aesthetic risk: each word on its own line, staggered letter-spacing expand */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-white leading-[1.0] tracking-tight select-none break-words"
              style={{ fontSize: 'clamp(2.75rem, 11vw, 9rem)' }}
            >
              Open
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Space
              </span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-zinc-300 text-lg md:text-xl font-light tracking-wide mb-10 max-w-md"
          >
            Business spaces re-imagined.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.30 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
            >
              Start OpenSpace
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              Request Demo
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 rotate-90 origin-center mb-3">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>


      {/* ─── 2. WHAT IS OPENSPACE ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32" ref={whatRef.ref}>
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <motion.div
            initial={reveal.initial}
            animate={whatRef.isInView ? reveal.animate : {}}
            transition={reveal.transition}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
              The platform
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white dark:text-white tracking-tight leading-[1.05] mb-8">
              The platform where work becomes alive.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed">
              OpenSpace is Switchiify&apos;s collaborative business platform — a single environment where your team plans, executes, and ships. Not a tool bolted onto your workflow: a workspace built around how work actually moves. Projects stay connected, people stay in context, and decisions leave a trail.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            ref={statsRef.ref}
            initial={{ opacity: 0, y: 24 }}
            animate={statsRef.isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                animate={statsRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="p-8 rounded-md bg-white/[0.03] border border-white/10 hover:border-zinc-700 dark:hover:border-zinc-700 transition-colors text-center"
              >
                <p
                  className="text-5xl font-bold mb-2 tabular-nums"
                  style={{
                    background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </p>
                <p className="text-zinc-500 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ─── 3. USE CASES GRID ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-zinc-900 dark:border-zinc-900" ref={useCasesRef.ref}>
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <motion.div
            initial={reveal.initial}
            animate={useCasesRef.isInView ? reveal.animate : {}}
            transition={reveal.transition}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Built for every team</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white tracking-tight leading-[1.05]">
              Your space. Your rules.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {useCases.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={useCasesRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.13 }}
              >
                <Link
                  href={card.href}
                  className="group relative block h-64 rounded-md overflow-hidden border border-white/10 hover:border-white/20 transition-colors"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${card.image}')` }}
                    aria-hidden="true"
                  />
                  {/* Dark overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.30) 60%, transparent 100%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Purple accent on hover */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(168,85,247,0.18) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-1">{card.subtitle}</p>
                    <h3 className="text-white dark:text-white font-semibold text-base leading-snug">{card.title}</h3>
                  </div>
                  {/* Arrow indicator */}
                  <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/40 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 11.5l9-9M5 2.5h6.5v6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 4. FEATURES LIST ────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-zinc-900 dark:border-zinc-900" ref={featuresRef.ref}>
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">

          <motion.div
            initial={reveal.initial}
            animate={featuresRef.isInView ? reveal.animate : {}}
            transition={reveal.transition}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">Everything you need</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white tracking-tight leading-[1.05] max-w-lg">
              Serious infrastructure for serious work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={featuresRef.isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.09 }}
                className="flex items-start gap-4 group"
              >
                <div className="mt-0.5">
                  <CheckIcon />
                </div>
                <div>
                  <h3 className="text-white dark:text-white font-semibold text-base mb-1 group-hover:text-zinc-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 5. CTA ──────────────────────────────────────────────────────────── */}
      <section
        className="py-24 md:py-32 border-t border-zinc-900 dark:border-zinc-900 relative overflow-hidden"
        ref={ctaRef.ref}
      >
        {/* Gradient 2 of 2: single bottom-center orb */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 110%, rgba(168,85,247,0.12) 0%, rgba(236,72,153,0.06) 40%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 text-center">
          <motion.div
            initial={reveal.initial}
            animate={ctaRef.isInView ? reveal.animate : {}}
            transition={reveal.transition}
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">Get started</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white dark:text-white tracking-tight leading-[1.0] mb-6">
              Start building with<br />OpenSpace today.
            </h2>
            <p className="text-zinc-400 dark:text-zinc-400 text-base leading-relaxed max-w-md mx-auto mb-10">
              Set up your first workspace in minutes. No credit card required. Cancel at any time.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Sign Up Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
