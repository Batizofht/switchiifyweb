'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const roles = [
  { title: 'Senior Rendering Engineer', team: 'Gamingar', location: 'Kigali · Remote' },
  { title: 'Behavioral AI Researcher', team: 'Neuro AI', location: 'Kigali' },
  { title: 'Product Designer, Collaboration', team: 'OpenSpace', location: 'Remote' },
  { title: 'Platform Reliability Engineer', team: 'Infrastructure', location: 'Kigali · Remote' },
  { title: 'Robotics Controls Engineer', team: 'Research', location: 'Kigali' },
  { title: 'Enterprise Account Executive', team: 'Business', location: 'Remote' },
];

const values = [
  { title: 'Ship every two weeks', desc: 'We work in short cycles so decisions stay reversible and feedback stays fast.' },
  { title: 'Own it end-to-end', desc: 'Every engineer owns at least one thing from idea to production.' },
  { title: 'Build from anywhere', desc: 'Our headquarters is in Kigali, but our team spans twelve countries.' },
];

export default function CareersPage() {
  const rolesRef = useRef(null);
  const rolesInView = useInView(rolesRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative min-h-[55vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #3f3f46 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-20 pt-40">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Careers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Build the future with us.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            We&apos;re a team of builders, dreamers, and engineers working across gaming, AI, and business infrastructure — from Kigali to the world.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-white font-semibold text-base mb-2">{v.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section ref={rolesRef} className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={rolesInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-12"
          >
            Open Roles
          </motion.h2>
          <div className="flex flex-col">
            {roles.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 12 }}
                animate={rolesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 border-b border-zinc-900"
              >
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">{r.title}</p>
                  <p className="text-zinc-500 text-xs">{r.team} · {r.location}</p>
                </div>
                <Link href="/contact" className="text-zinc-500 hover:text-white text-xs transition-colors shrink-0">
                  Apply
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Don&apos;t see a role that fits? We&apos;d still like to hear from you.</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
