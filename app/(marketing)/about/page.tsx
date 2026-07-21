'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─── reusable reveal wrapper ─────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── data ─────────────────────────────────────────────────────────────── */
const values = [
  {
    title: 'Innovation',
    body:
      'We treat every product as an open question. Each version ships because we found a better answer, not because the calendar said so.',
  },
  {
    title: 'Trust',
    body:
      'What we say in a meeting is what ends up in the product. Customers and collaborators hold us to that — and we hold ourselves to it first.',
  },
  {
    title: 'Collaboration',
    body:
      'The best ideas at Switchiify came from people talking across disciplines. We build structures that make that collision more likely, not less.',
  },
  {
    title: 'Global Impact',
    body:
      'Rwanda showed us that geography is not destiny. We build platforms for anyone, anywhere — starting with the markets the industry ignores.',
  },
];

const products = [
  {
    name: 'Gamingar',
    dot: 'bg-green-400',
    text: 'text-green-400',
    description:
      "A next-generation gaming platform built around adaptive input and cinematic 3D worlds. Gamingar is where Switchiify's real-time engine meets players who expect more from their hardware.",
    href: '/gamingar',
  },
  {
    name: 'Neuro AI',
    dot: 'bg-cyan-400',
    text: 'text-cyan-400',
    description:
      'Human-centred artificial intelligence for people and organizations. Neuro AI learns from context, not just data — making interactions feel collaborative rather than transactional.',
    href: '/neuroai',
  },
  {
    name: 'OpenSpace',
    dot: 'bg-white',
    text: 'text-white',
    description:
      'Business infrastructure reimagined as a shared environment. OpenSpace gives teams the coordination layer they never knew was missing — from scheduling to shared intelligence.',
    href: '/openspace',
  },
];

/* ─── page ─────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        {/* Full-bleed background image — the dramatic gradient wall */}
        <Image
          src="/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png"
          alt="Dramatic gradient wall — Switchiify studio"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Selective scrim: heavy at bottom so text reads, lighter at top to preserve the wall */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 pointer-events-none" />

        {/* Hero content — anchored to bottom-left */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-5"
          >
            About Switchiify
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-3xl"
          >
            We Build the Future of Technology.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-zinc-400 text-base leading-relaxed max-w-md"
          >
A global technology company, headquartered in Kigali.
          </motion.p>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <svg
              className="w-4 h-4 text-zinc-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. MISSION ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                  Our Mission
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                  Technology that changes how the world connects.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-base leading-relaxed mb-5">
                  Switchiify is a global technology company designing the platforms that power the next generation of gaming, AI, and business — headquartered in Kigali, Rwanda, with teams and customers across the world. We started with a simple observation: the most capable tools in the world were being built for the same markets, over and over.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="text-zinc-400 text-base leading-relaxed mb-5">
                  We set out to change that. Switchiify products are engineered to work everywhere — from Kigali to Seoul — and to feel like they were made for the person using them, not the company selling them.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-zinc-400 text-base leading-relaxed">
                  Today our three platforms — Gamingar, Neuro AI, and OpenSpace — are used by people who expect technology to keep up with them. We intend to keep building for exactly those people.
                </p>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal delay={0.15} className="w-full">
              <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden">
                <Image
                  src="/designing_images_support/d6f2f0257bd6d10a7a0f2a6b97d6b36dd117cbea.png"
                  alt="Switchiify workspace — warm interior"
                  fill
                  className="object-cover object-center"
                />
                {/* Subtle inner shadow to ground the image */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-md pointer-events-none" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2.5. OUR STORY / LEADERSHIP ─────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                  Our Story
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                  Led by people who build, not just manage.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-zinc-400 text-base leading-relaxed mb-5">
                  Switchiify is led by Chairman Mushinzimana Jean Baptiste and Managing Director Jean de Dieu Hatangimana, alongside the team building Stockify, our dedicated commerce platform, led by Musoni Jules.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link
                  href="/leadership"
                  className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  Meet Our Leadership
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="w-full">
              <div className="relative w-full aspect-[4/5] rounded-md overflow-hidden bg-white/[0.03] border border-white/10 flex items-center justify-center">
                <svg className="w-16 h-16 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M4 6h16v12H4V6z" />
                </svg>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
              What We Stand For
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-xl">
              Four things we refuse to compromise on.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <article className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 h-full">
                  <h3 className="text-white font-semibold text-base mb-3">{v.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. PRODUCTS ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <Reveal className="mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-xl">
              Three platforms. One direction.
            </h2>
          </Reveal>

          {/* Horizontal list with a thin divider between items */}
          <div className="flex flex-col divide-y divide-zinc-800">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.12}>
                <div className="py-8 grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-6 md:gap-12 items-start md:items-center group">
                  {/* Name + dot */}
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${p.dot}`} aria-hidden="true" />
                    <span className={`text-lg font-semibold ${p.text}`}>{p.name}</span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-base leading-relaxed max-w-xl">
                    {p.description}
                  </p>

                  {/* Arrow link */}
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors shrink-0"
                  >
                    <span>Learn about {p.name}</span>
                    <svg
                      className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. FOOTER CTA ───────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">

          {/* Collaborative workspace image as a quiet backdrop — cropped wide */}
          <Reveal>
            <div className="relative w-full max-w-3xl mx-auto aspect-[16/7] rounded-md overflow-hidden mb-16">
              <Image
                src="/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png"
                alt="Collaborative workspace overhead"
                fill
                className="object-cover object-center opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 to-zinc-950/90 pointer-events-none" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
              Work With Us
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-2xl mx-auto mb-8">
              Join Us in Building the Future.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-lg mx-auto mb-10">
              We are always looking for engineers, designers, and operators who want to solve problems that actually matter. If that sounds like you, we want to talk.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Explore Careers
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
