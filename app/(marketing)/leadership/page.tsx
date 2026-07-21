'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const team = [
  {
    name: 'Mushinzimana Jean Baptiste',
    title: 'Chairman',
    bio: 'Sets the long-term direction for Switchiify across Gamingar, Neuro AI, and OpenSpace.',
    photo: '',
  },
  {
    name: 'Jean de Dieu Hatangimana',
    title: 'Managing Director',
    bio: 'Leads day-to-day operations and execution across every Switchiify product line.',
    photo: '',
  },
  {
    name: 'Musoni Jules',
    title: 'Head of Stockify',
    bio: 'Leads Stockify, Switchiify\'s dedicated platform.',
    photo: '',
    externalHref: 'https://stockify.rw',
  },
];

export default function LeadershipPage() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: '-80px' });

  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
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
            Our Team
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
          >
            The Team Behind Switchiify.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed"
          >
            A team of builders, dreamers, and engineers committed to advancing technology across the world.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section ref={gridRef} className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-zinc-800 border border-zinc-700 mb-5 flex items-center justify-center overflow-hidden shrink-0">
                  {member.photo ? (
                    <Image src={member.photo} alt={member.name} width={56} height={56} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <h3 className="text-white font-semibold text-base">{member.name}</h3>
                  {member.externalHref && (
                    <a
                      href={member.externalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on Stockify`}
                      className="text-zinc-500 hover:text-white transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
                <p className="text-zinc-400 text-xs mb-3">{member.title}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-8">Our Belief</p>
          <blockquote className="text-3xl md:text-5xl font-light text-white leading-[1.2] max-w-3xl mx-auto italic mb-6">
            &ldquo;Technology should be as human as the people who use it.&rdquo;
          </blockquote>
          <p className="text-zinc-500 text-sm">— Switchiify Leadership</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-zinc-900">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <p className="text-zinc-400 text-base mb-6">
            We&apos;re always looking for exceptional people.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
          >
            See Open Roles
          </Link>
        </div>
      </section>
    </div>
  );
}
