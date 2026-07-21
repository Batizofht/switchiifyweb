'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  { title: 'Getting Started', desc: 'Setting up your account, workspace, and first project.' },
  { title: 'OpenSpace', desc: 'Workspaces, collaboration tools, and team management.' },
  { title: 'Gamingar', desc: 'Setup, controls, and troubleshooting for the Gamingar platform.' },
  { title: 'Neuro AI', desc: 'How Neuro AI learns, privacy controls, and integrations.' },
  { title: 'Billing & Plans', desc: 'Subscriptions, invoices, and payment methods.' },
  { title: 'Account & Security', desc: 'Managing your profile, password, and account access.' },
];

export default function HelpCenterPage() {
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
            Help Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Answers, guides, and account support across every Switchiify product.
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-md bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors"
            >
              <h3 className="text-white font-semibold text-base mb-2">{c.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Can&apos;t find what you&apos;re looking for?</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Contact Support
        </Link>
      </section>
    </div>
  );
}
