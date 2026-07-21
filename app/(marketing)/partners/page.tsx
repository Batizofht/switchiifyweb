'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: 'Technology Partner',
    desc: 'Build on top of Switchiify APIs and get listed in our partner directory.',
    perks: ['API access', 'Co-marketing opportunities', 'Partner directory listing'],
  },
  {
    name: 'Solutions Partner',
    desc: 'Deliver Switchiify-powered implementations to your own clients.',
    perks: ['Implementation training', 'Dedicated partner manager', 'Lead referrals'],
    highlight: true,
  },
  {
    name: 'Reseller Partner',
    desc: 'Resell OpenSpace, Gamingar, and Neuro AI licenses to your customer base.',
    perks: ['Margin on every license', 'Sales enablement', 'Priority support'],
  },
];

export default function PartnersPage() {
  const tiersRef = useRef(null);
  const tiersInView = useInView(tiersRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-40 pb-20 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Partnership Program
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Grow with Switchiify.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Whether you build on our platform, implement it for clients, or resell it, our partnership program gives you the tools to grow alongside us.
          </motion.p>
        </div>
      </section>

      <section ref={tiersRef} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-md flex flex-col border ${
                t.highlight ? 'bg-white/[0.05] border-white/20' : 'bg-white/[0.03] border-white/10'
              }`}
            >
              <h3 className="text-white font-bold text-xl mb-2">{t.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">{t.desc}</p>
              <ul className="flex flex-col gap-3 mb-2">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-zinc-400">
                    <svg className="w-4 h-4 text-zinc-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-6">
        <p className="text-zinc-400 text-base mb-6">Ready to apply to the partnership program?</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Apply Now
        </Link>
      </section>
    </div>
  );
}
