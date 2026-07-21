'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const divisions = [
  {
    name: 'Robotics',
    href: '/research/robotics',
    color: 'bg-orange-400',
    desc: 'Adaptive locomotion, tactile feedback, and swarm coordination for machines that move like they understand.',
  },
  {
    name: 'Electronics',
    href: '/research/electronics',
    color: 'bg-blue-400',
    desc: 'Custom silicon and low-power circuit design for the hardware behind every Switchiify product.',
  },
  {
    name: 'Laboratory',
    href: '/research/laboratory',
    color: 'bg-purple-400',
    desc: 'The shared testing ground where every Switchiify prototype meets real-world conditions.',
  },
];

export default function ResearchIndexPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-40 pb-20 px-6 md:px-10">
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
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
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
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {divisions.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={d.href}
                className="group block p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors h-full"
              >
                <div className={`w-1.5 h-1.5 ${d.color} mb-6`} />
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
    </div>
  );
}
