'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const programs = [
  {
    title: 'Adaptive Locomotion',
    desc: 'Bipedal and quadrupedal control systems that adjust gait in real time across uneven terrain.',
  },
  {
    title: 'Tactile Feedback Systems',
    desc: 'Sensor arrays that let robotic manipulators feel grip pressure, texture, and slip before failure.',
  },
  {
    title: 'Swarm Coordination',
    desc: 'Distributed decision-making protocols that let fleets of robots operate without central control.',
  },
  {
    title: 'Neuro AI Integration',
    desc: 'Robotics platforms wired directly into Neuro AI for behavioral prediction and intent modeling.',
  },
];

const stats = [
  { value: '12', label: 'Active Prototypes' },
  { value: '4', label: 'Research Labs' },
  { value: '30Hz', label: 'Control Loop Rate' },
];

export default function RoboticsResearchPage() {
  const programsRef = useRef(null);
  const programsInView = useInView(programsRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'linear-gradient(#3f3f46 1px, transparent 1px), linear-gradient(90deg, #3f3f46 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-400 mb-5 font-medium"
          >
            Switchiify Research — Robotics
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Machines that move<br />like they understand.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Our robotics division builds control systems that adapt to the physical world instead of demanding the world adapt to them.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-3 divide-x divide-zinc-900">
          {stats.map((s) => (
            <div key={s.label} className="py-8 text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{s.value}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs grid */}
      <section ref={programsRef} className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4"
          >
            Research Programs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={programsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-16 max-w-2xl"
          >
            What we&apos;re building in the lab.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={programsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-white mb-6" />
                <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Explore the rest of our research divisions.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/research/electronics"
            className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Electronics Research
          </Link>
          <Link
            href="/research/laboratory"
            className="inline-flex items-center px-7 py-3 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
          >
            Laboratory Research
          </Link>
        </div>
      </section>
    </div>
  );
}
