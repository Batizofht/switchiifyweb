'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

// ─── Metadata is handled in layout; this is a client component ───────────────

const features = [
  {
    title: 'Input Design',
    description:
      'Controls that dissolve into instinct. Gamingar maps your intent — gesture, gaze, haptic — so the gap between thought and action closes to nothing.',
    detail: 'Next-gen input layer',
  },
  {
    title: 'Immersive Worlds',
    description:
      'Environments built at a level of density that makes the real world feel flat. Every surface, every distance, every ambient frequency is authored.',
    detail: 'Full-density 3D rendering',
  },
  {
    title: 'Adaptive Game Engine',
    description:
      'A Switchiify-built engine that reads player behavior in real time and adjusts physics, AI difficulty, and narrative pacing without a seam.',
    detail: 'Behavioral real-time engine',
  },
];

// ─── Countdown display (static zeros as specified) ───────────────────────────
const countdownUnits = [
  { label: 'Days', value: '00' },
  { label: 'Hours', value: '00' },
  { label: 'Minutes', value: '00' },
  { label: 'Seconds', value: '00' },
];

// ─── Reveal animation config ─────────────────────────────────────────────────
const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// ─── Main page ────────────────────────────────────────────────────────────────
export default function GamingarPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const whatRef = useRef(null);
  const whatInView = useInView(whatRef, { once: true, margin: '-80px' });

  const featRef = useRef(null);
  const featInView = useInView(featRef, { once: true, margin: '-60px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: '-60px' });

  function handleWaitlist(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <div className="bg-black min-h-screen">

      {/* ─── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-end">

        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="/vid/gamingar.mp4" type="video/mp4" />
        </video>

        {/* Dark gradient: heavier at bottom so text reads */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.92) 100%)',
          }}
          aria-hidden="true"
        />

        {/* CRT scanline texture — the aesthetic risk: adds broadcast/gaming patina */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.018) 3px, rgba(255,255,255,0.018) 4px)',
            mixBlendMode: 'overlay',
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-green-400 mb-4"
          >
            Switchiify Gaming
          </motion.p>

          {/* Massive heading — the GTA/Rockstar moment */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-black text-white leading-[0.9] tracking-[-0.04em] mb-8 select-none"
            style={{ fontSize: 'clamp(4rem, 15vw, 18rem)' }}
          >
            GAMINGAR
          </motion.h1>

          {/* Tagline + buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="max-w-xl"
          >
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
              Gamingar is Switchiify&apos;s vision of the next-generation gaming interface — where input becomes instinctive and immersion feels natural.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#access"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Get Easy Access
              </Link>
              <Link
                href="#trailer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M6 3.5l7 4.5-7 4.5V3.5z" />
                </svg>
                Watch Trailer
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-1.5"
          aria-hidden="true"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 rotate-90 origin-center mb-3">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-600 to-transparent" />
        </motion.div>
      </section>


      {/* ─── 2. WHAT IS GAMINGAR ─────────────────────────────────────────────── */}
      <section id="trailer" className="py-24 md:py-32" ref={whatRef}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: copy */}
            <motion.div
              initial={reveal.initial}
              animate={whatInView ? reveal.animate : {}}
              transition={reveal.transition}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
                What is Gamingar
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] mb-7">
                The interface disappears.<br />
                The world stays.
              </h2>
              <p className="text-zinc-400 text-base leading-relaxed mb-5">
                Every gaming interface today asks you to manage it. Menus, bindings, pause states, overlays — a second job layered on top of the experience. Gamingar removes that layer entirely.
              </p>
              <p className="text-zinc-500 text-base leading-relaxed mb-10">
                Built on Switchiify&apos;s adaptive engine, Gamingar reads physical input, predicts intent, and renders response before the controller registers the release. The result feels less like playing a game and more like inhabiting one.
              </p>

              <div className="flex gap-10">
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">60fps</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Native render floor</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">&lt;4ms</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Input response target</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-400 mb-1">3D</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider">Full-density worlds</p>
                </div>
              </div>
            </motion.div>

            {/* Right: inline video card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={whatInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="rounded-md overflow-hidden bg-white/[0.03] border border-white/10">
                <video
                  className="w-full aspect-video object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/vid/gamingar.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Floating label */}
              <div className="absolute -bottom-4 -left-4 bg-black border border-white/10 rounded-md px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-medium">Live engine preview</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* ─── 3. FEATURE GRID ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 border-t border-zinc-900" ref={featRef}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <motion.div
            initial={reveal.initial}
            animate={featInView ? reveal.animate : {}}
            transition={reveal.transition}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Core technology
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-xl">
              Built different from the ground up.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                animate={featInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors group"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-3">
                  {feat.detail}
                </p>
                <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-green-400 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ─── 4. COMING SOON / WAITLIST ───────────────────────────────────────── */}
      <section
        id="access"
        className="py-24 md:py-32 border-t border-zinc-900 relative overflow-hidden"
        ref={ctaRef}
      >
        {/* Single background glow — one gradient maximum */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(74,222,128,0.06) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.div
            initial={reveal.initial}
            animate={ctaInView ? reveal.animate : {}}
            transition={reveal.transition}
            className="text-center mb-16"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Release window
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] mb-6">
              Gamingar is Coming.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto">
              We&apos;re finalizing the engine. Early access spots are reserved for people who register now — no commitment, first in line when it ships.
            </p>
          </motion.div>

          {/* Countdown display */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center gap-4 md:gap-8 mb-16"
            aria-label="Countdown to Gamingar launch"
          >
            {countdownUnits.map((unit) => (
              <div
                key={unit.label}
                className="flex flex-col items-center gap-2 w-16 md:w-24"
              >
                <div className="w-full aspect-square rounded-md bg-white/[0.03] border border-white/10 flex items-center justify-center">
                  <span className="text-2xl md:text-4xl font-black text-white font-mono tabular-nums">
                    {unit.value}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                  {unit.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Waitlist form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-md mx-auto"
          >
            {submitted ? (
              <div className="text-center py-6">
                <div className="w-2 h-2 rounded-full bg-green-400 mx-auto mb-4" />
                <p className="text-white font-medium mb-1">You&apos;re on the list.</p>
                <p className="text-zinc-500 text-sm">We&apos;ll reach you at {email} when early access opens.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
                <label htmlFor="waitlist-email" className="sr-only">Email address</label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-5 py-2.5 rounded-sm bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/30 transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300 shrink-0"
                >
                  Join the Waitlist
                </button>
              </form>
            )}

            <p className="text-center text-zinc-700 text-xs mt-4">
              No spam. Unsubscribe any time. For eligible territories only.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
