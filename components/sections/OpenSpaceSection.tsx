'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    title: 'OpenSpace for Business',
    img: '/designing_images_support/55efb200a4d135e0643e3adcd64d0f7ddd200650.png',
    desc: 'Collaborative tools built for modern teams.',
  },
  {
    title: 'Design & Architecture',
    img: '/designing_images_support/d6f2f0257bd6d10a7a0f2a6b97d6b36dd117cbea.png',
    desc: 'Spaces designed for creative professionals.',
  },
  {
    title: 'Research Environments',
    img: '/designing_images_support/8bf4e5a95ca1f8f7420629a049ac50a82730cdd9.png',
    desc: 'Intelligent workspaces for deep focus.',
  },
];

export function OpenSpaceSection() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { once: true, margin: '-80px' });

  return (
    <section className="relative">
      {/* Sticky background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <img
          src="/designing_images_support/9e07b2c911929de5c523877a2ee3071f017b3893.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content over sticky bg */}
      <div className="-mt-screen relative z-10">
        {/* First viewport: title */}
        <div className="h-screen flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 mb-4 font-medium">
            Switchiify Platform
          </p>
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
            OpenSpace
          </h2>
          <p className="text-zinc-400 text-base mt-4 max-w-sm">
            Business spaces re-imagined.
          </p>
        </div>

        {/* Second viewport: content over black */}
        <div
          ref={contentRef}
          className="min-h-screen bg-black px-8 md:px-16 lg:px-24 pt-24 pb-32"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white text-2xl md:text-3xl font-medium leading-snug mb-6 max-w-lg">
                  From teams of two<br />to enterprises of thousands.
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 max-w-md">
                  OpenSpace gives businesses, designers, and researchers one shared environment to collaborate, build, and grow — powered by Switchiify intelligence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/openspace"
                    className="inline-flex items-center px-7 py-3 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
                  >
                    Explore OpenSpace
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center px-7 py-3 rounded-sm border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/50 hover:bg-white/8 transition-all duration-300"
                  >
                    Sign Up Free
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="flex gap-12 lg:justify-end pt-4"
              >
                <div>
                  <p className="text-4xl font-bold text-white mb-1">16+</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Countries</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-white mb-1">10M+</p>
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">Users</p>
                </div>
              </motion.div>
            </div>

            {/* Image cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {cards.map((card) => (
                <div key={card.title} className="group relative overflow-hidden rounded-2xl h-56">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-semibold text-sm mb-0.5">{card.title}</h3>
                    <p className="text-zinc-400 text-xs">{card.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
