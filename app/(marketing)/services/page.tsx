'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { name: 'Business Automation', desc: 'Automate complex workflows across enterprise environments.', href: '/services/automation', color: 'bg-white' },
  { name: 'Smart Monitoring', desc: 'Real-time infrastructure monitoring powered by Neuro AI.', href: '/services/monitoring', color: 'bg-white' },
  { name: 'Emergency Response AI', desc: 'AI systems built for mission-critical emergency scenarios.', href: '/services/emergency', color: 'bg-white' },
  { name: 'AI Device Integration', desc: 'Connect any device to the Switchiify AI ecosystem.', href: '/services/ai-integration', color: 'bg-white' },
  { name: 'Game Development', desc: 'End-to-end game development powered by the Gamingar engine.', href: '/services/game-dev', color: 'bg-white', highlight: true },
  { name: 'AAA Open-World Games', desc: 'Full production services for large-scale open-world titles.', href: '/services/aaa-games', color: 'bg-white' },
  { name: '3D World Design', desc: 'Custom 3D world creation from concept to final asset.', href: '/services/3d-design', color: 'bg-white' },
  { name: 'Motion & Animation', desc: 'Cinematic animation, simulation, and motion graphics.', href: '/services/animation', color: 'bg-white' },
  { name: 'Game Engine Systems', desc: 'Custom engine development and graphics pipeline engineering.', href: '/services/game-engine', color: 'bg-white' },
];

const stats = [
  { value: '50+', label: 'Enterprise Clients' },
  { value: '3', label: 'Product Lines' },
  { value: '16+', label: 'Countries' },
  { value: '10M+', label: 'Users Reached' },
];

export default function ServicesPage() {
  const gridRef = useRef(null);
  const statsRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-3 sm:px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5"
          >
            Services
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            What We Build<br />for the World.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            From enterprise AI systems to AAA game engines — Switchiify builds technology that scales.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="py-16 px-3 sm:px-6 md:px-10 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  href={s.href}
                  className={`group block p-6 rounded-md border transition-all duration-300 ${
                    s.highlight
                      ? 'bg-white/[0.05] border-white/20 hover:border-white/30'
                      : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3 className="text-white font-semibold text-base mb-2">{s.name}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-zinc-500 group-hover:text-white text-xs transition-colors">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Switchiify */}
      <section ref={statsRef} className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-4"
              >
                Why Switchiify
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
              >
                We build differently.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={statsInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 text-base leading-relaxed"
              >
                Every service we offer is backed by our own technology platforms. When we build for you, we&apos;re using the same tools and infrastructure we trust in our own products.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="p-6 rounded-md border border-white/10 text-center"
                >
                  <p className="text-3xl font-bold text-white mb-1">{s.value}</p>
                  <p className="text-zinc-500 text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-zinc-900 text-center px-3 sm:px-6">
        <p className="text-zinc-400 text-base mb-6">Ready to work with us?</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
        >
          Start a Conversation
        </Link>
      </section>
    </div>
  );
}
