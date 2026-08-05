'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const divisions = [
  {
    name: 'Robotics',
    href: '/research/robotics',
    color: 'bg-white',
    desc: 'Adaptive locomotion, tactile feedback, and swarm coordination for machines that move like they understand.',
  },
  {
    name: 'Electronics',
    href: '/research/electronics',
    color: 'bg-white',
    desc: 'Custom silicon and low-power circuit design for the hardware behind every Switchiify product.',
  },
  {
    name: 'Laboratory',
    href: '/research/laboratory',
    color: 'bg-white',
    desc: 'The shared testing ground where every Switchiify prototype meets real-world conditions.',
  },
];

export default function ResearchIndexPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-40 pb-20 px-3 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Research
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            The work behind<br />what we ship.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Three research divisions building the hardware, systems, and testing infrastructure behind Gamingar, Neuro AI, and OpenSpace.
          </motion.p>
        </div>
      </section>

      <section ref={gridRef} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {divisions.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={d.href}
                className="group block p-8 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors h-full"
              >
                <h3 className="text-white font-semibold text-xl mb-3">{d.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-4">{d.desc}</p>
                <span className="text-zinc-500 group-hover:text-white text-xs transition-colors">
                  Learn more
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-3 sm:px-6">
        <p className="text-zinc-400 text-base mb-6">Working on something that overlaps with our research? Let&apos;s talk.</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Talk to the Research Team
        </Link>
      </section>
    </div>
  );
}
