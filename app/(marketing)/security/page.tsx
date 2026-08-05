'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const practices = [
  { title: 'Encryption Everywhere', desc: 'Data is encrypted in transit and at rest across every Switchiify product.' },
  { title: 'Least-Privilege Access', desc: 'Internal systems are scoped so teams only access what their work requires.' },
  { title: 'Continuous Monitoring', desc: 'Our own Smart Monitoring service watches Switchiify infrastructure around the clock.' },
  { title: 'Independent Audits', desc: 'Third-party security reviews run on a recurring schedule across all platforms.' },
  { title: 'Responsible Disclosure', desc: 'We work directly with researchers who report vulnerabilities in good faith.' },
  { title: 'Data Minimization', desc: 'Neuro AI is built to learn from patterns, not to store raw personal data it doesn\'t need.' },
];

const disclosureSteps = [
  { num: '01', title: 'Report privately', desc: 'Send details to our security team through the Contact page — please don\'t disclose issues publicly before we\'ve had a chance to respond.' },
  { num: '02', title: 'We confirm and investigate', desc: 'You\'ll get an acknowledgement, typically within a few business days, while we reproduce and assess severity.' },
  { num: '03', title: 'We fix and follow up', desc: 'Once resolved, we\'ll let you know what changed and, with your permission, credit you for the report.' },
];

export default function SecurityPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      <section className="relative pt-40 pb-20 px-3 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Security
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            Built to be trusted.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Security isn&apos;t a feature we add at the end — it&apos;s a constraint we design around from the first line of code.
          </motion.p>
        </div>
      </section>

      <section ref={ref} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {practices.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="p-6 rounded-md bg-white/[0.03] border border-white/10"
            >
              <h3 className="text-white font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section ref={stepsRef} className="py-16 md:py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-10">Responsible Disclosure</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {disclosureSteps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="text-zinc-600 text-xs font-mono tracking-widest">{s.num}</span>
                <h3 className="text-white font-semibold text-base mt-3 mb-2">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-zinc-900 text-center px-3 sm:px-6">
        <p className="text-zinc-400 text-base mb-6">Found a vulnerability? We want to hear from you.</p>
        <Link
          href="/contact"
          className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Report an Issue
        </Link>
      </section>
    </div>
  );
}
