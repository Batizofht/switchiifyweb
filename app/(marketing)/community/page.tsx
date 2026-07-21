'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/* ─── Reveal wrapper ─────────────────────────────────────────────────────── */
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

/* ─── Section header with left violet rule (the aesthetic device) ─────────── */
function SectionLabel({
  number,
  title,
  delay = 0,
}: {
  number: string;
  title: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="mb-10">
      <div className="flex items-start gap-5 pl-5 border-l-2 border-white/20">
        <span className="text-white/40 text-2xl leading-none select-none" aria-hidden="true">
          {number}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const whatWeDoItems = [
  {
    heading: 'Connect builders globally',
    body: 'Bring together developers, designers, and entrepreneurs from every region — with shared channels, real introductions, and no timezone gatekeeping.',
  },
  {
    heading: 'Share open-source projects',
    body: 'Post your work, get genuine feedback, and find collaborators who want to build alongside you — not just star your repo.',
  },
  {
    heading: 'Host live events',
    body: 'Workshops, AMAs, product demos, and community sprints — happening year-round across time zones and on Discord.',
  },
  {
    heading: 'Discuss AI, gaming, and business',
    body: 'Focused channels for the topics that shape what Switchiify builds: Neuro AI, Gamingar, OpenSpace, and the industry at large.',
  },
  {
    heading: 'Support each other\'s growth',
    body: 'Mentorship threads, job postings, co-founder matching, and honest critiques from people who have done what you are trying to do.',
  },
];

const whoIsForItems = [
  {
    role: 'Developers',
    description: 'Building products, shipping side projects, or exploring what AI can actually do inside real software.',
  },
  {
    role: 'Designers',
    description: 'Working on interfaces, design systems, motion, or the visual identity of the next generation of tools.',
  },
  {
    role: 'Gamers',
    description: 'Players, modders, and competitive community members who want a say in what gaming looks like tomorrow.',
  },
  {
    role: 'Entrepreneurs',
    description: 'Founders, operators, and early employees building companies in markets the big platforms ignore.',
  },
  {
    role: 'Students',
    description: 'Anyone learning in public — whether you are at university, self-taught, or somewhere in between.',
  },
];

const whyJoinItems = [
  'Access to Switchiify product teams before public launches',
  'Structured mentorship from practitioners, not career coaches',
  'Real collaborations that have shipped to production',
  'A community that votes on what we prioritize next',
  'No algorithms deciding who sees your work',
];

const communityActivities = [
  'Monthly product demos from the Switchiify team',
  'Open-source build-alongs every quarter',
  'Regional meetups across Africa, Asia, and Europe',
  'Annual global community summit',
  'Weekly office hours with product engineers',
];

const getItems = [
  {
    title: 'Early Access to Products',
    body: 'Community members are the first outside users of every new Switchiify platform and feature. You test before the press does.',
    accent: 'border-white/10 hover:border-white/20',
    dot: 'bg-white',
  },
  {
    title: 'Exclusive Events',
    body: 'Private workshops, closed-door AMAs with our founders, and live build sessions you cannot watch anywhere else.',
    accent: 'border-white/10 hover:border-white/20',
    dot: 'bg-white',
  },
  {
    title: 'Direct Team Access',
    body: 'Engineers, designers, and product leads are active in the community. Raise a problem. Get a real answer.',
    accent: 'border-white/10 hover:border-white/20',
    dot: 'bg-white',
  },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
export default function CommunityPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── 1. HERO ────────────────────────────────────────────────────────── */}
      <section className="relative h-screen flex flex-col justify-end overflow-hidden">
        {/* Full-bleed collaborative workspace image */}
        <Image
          src="/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png"
          alt="Switchiify community — collaborative workspace overhead"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Scrim: black at bottom, lighter at top to preserve the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 pointer-events-none" />

        {/* Hero content — bottom-left anchored */}
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-20 md:pb-28">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-5"
          >
            Switchiify Community
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-3xl mb-6"
          >
            Join the Switchiify Community
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-zinc-400 text-base leading-relaxed max-w-xl mb-10"
          >
            A global space where creators, developers, designers, and innovators
            connect, learn, and build the future of technology together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <Link
              href="https://discord.gg/switchiify"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
            >
              Become a Member Today
            </Link>
          </motion.div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. WHAT WE DO HERE ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <SectionLabel number="①" title="What We Do Here" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {whatWeDoItems.map((item, i) => (
              <Reveal key={item.heading} delay={i * 0.08}>
                <article className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 h-full">
                  <div className="w-1.5 h-1.5 bg-white mb-5" aria-hidden="true" />
                  <h3 className="text-white font-semibold text-base mb-3">{item.heading}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO IS THIS FOR ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: text */}
            <div>
              <SectionLabel number="②" title="Who This Community Is For" />

              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-base leading-relaxed mb-10">
                  Switchiify was built in Rwanda for the world. Our community follows that same logic — it is not a club for one kind of person. It is a space deliberately designed to be useful to anyone who is building, learning, or curious about where technology is going.
                </p>
              </Reveal>

              <div className="flex flex-col divide-y divide-zinc-800">
                {whoIsForItems.map((item, i) => (
                  <Reveal key={item.role} delay={0.15 + i * 0.07}>
                    <div className="py-5">
                      <div className="flex items-start gap-4">
                        <span className="w-1.5 h-1.5 bg-white mt-2 shrink-0" aria-hidden="true" />
                        <div>
                          <p className="text-white font-semibold text-sm mb-1">{item.role}</p>
                          <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right: dark card with globe/network visual */}
            <Reveal delay={0.2} className="lg:sticky lg:top-32">
              <div className="relative rounded-md bg-white/[0.03] border border-white/10 overflow-hidden">
                {/* Ambient violet glow — the single gradient this section gets */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                <div className="relative p-8 md:p-10">
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                    Community by numbers
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    {[
                      { value: '10M+', label: 'Members worldwide' },
                      { value: '50+', label: 'Cities represented' },
                      { value: '100K+', label: 'Posts on the forums' },
                      { value: '12', label: 'Events per year' },
                    ].map((stat) => (
                      <div key={stat.label} className="p-4 rounded-md bg-white/[0.03] border border-white/10">
                        <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                        <p className="text-xs text-zinc-500 leading-snug">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Decorative network grid */}
                  <div className="relative aspect-[4/3] rounded-md overflow-hidden bg-white/[0.03] border border-white/10">
                    <Image
                      src="/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png"
                      alt="Network visualization — global connectivity"
                      fill
                      className="object-cover object-center opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs text-zinc-400">
                        Members active across Africa, Asia, Europe, and the Americas — every week.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── 4. WHY JOIN + ACTIVITIES ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Why join */}
            <div>
              <SectionLabel number="③" title="Why You Should Join" />

              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  Most communities exist to grow a metric. This one exists because the people building Switchiify believe the work gets better when more kinds of people are in the room.
                </p>
              </Reveal>

              <ul className="flex flex-col gap-3">
                {whyJoinItems.map((item, i) => (
                  <Reveal key={item} delay={0.15 + i * 0.07}>
                    <li className="flex items-start gap-4 p-5 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                      <svg
                        className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Community activities */}
            <div>
              <SectionLabel number="④" title="Community Activities" />

              <Reveal delay={0.1}>
                <p className="text-zinc-400 text-base leading-relaxed mb-8">
                  We run structured programming year-round — not just a chat room. These are recurring events with dates, facilitators, and outcomes.
                </p>
              </Reveal>

              <ul className="flex flex-col gap-3">
                {communityActivities.map((item, i) => (
                  <Reveal key={item} delay={0.15 + i * 0.07}>
                    <li className="flex items-start gap-4 p-5 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors">
                      <span className="w-5 h-5 rounded-full border border-white/20 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className="text-zinc-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. WHAT YOU'LL GET ─────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <SectionLabel number="⑤" title="What You'll Get" />

          <Reveal delay={0.1}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-xl mb-12">
              Membership is free. What it gives you is not.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {getItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className={`p-6 rounded-md bg-white/[0.03] border ${item.accent} transition-colors duration-300 h-full`}>
                  <div className={`w-2 h-2 rounded-full ${item.dot} mb-6`} aria-hidden="true" />
                  <h3 className="text-white font-semibold text-base mb-4">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CTA ──────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          {/* Warm-toned interior room image as quiet backdrop */}
          <Reveal>
            <div className="relative w-full max-w-4xl mx-auto aspect-[16/7] rounded-md overflow-hidden mb-16">
              <Image
                src="/designing_images_support/d6f2f0257bd6d10a7a0f2a6b97d6b36dd117cbea.png"
                alt="Community gathering space"
                fill
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/90 pointer-events-none" />
            </div>
          </Reveal>

          <div className="text-center">
            <Reveal delay={0.05}>
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6">
                Open to everyone
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.0] max-w-2xl mx-auto mb-6">
                Ready to Join Us?
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto mb-10">
                The people who will build the next decade of technology are already in this room. Come find them.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="https://discord.gg/switchiify"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
                >
                  Join on Discord
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
                >
                  Learn about Switchiify
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-8 text-zinc-600 text-xs">
                Free to join. No spam. Leave whenever you want.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

    </div>
  );
}
