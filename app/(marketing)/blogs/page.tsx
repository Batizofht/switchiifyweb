'use client';

import Link from 'next/link';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BlogCard } from '@/components/ui/Card/BlogCard';
import { blogPosts } from '@/lib/blogData';

/* ─── reveal wrapper ───────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── category definitions ─────────────────────────────────────────────────── */
const CATEGORIES = ['All', 'Product', 'Engineering', 'Design', 'Research', 'Company'] as const;
type Category = (typeof CATEGORIES)[number];

/* ─── page ──────────────────────────────────────────────────────────────────── */
export default function BlogsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const featured = blogPosts[0];

  const filtered =
    activeCategory === 'All'
      ? blogPosts.slice(1)
      : blogPosts.slice(1).filter((p) => p.category === activeCategory);

  return (
    <div className="bg-black dark:bg-black min-h-screen">

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[50vh] flex flex-col justify-center overflow-hidden">
        {/* Blue glow orb — the one gradient accent for this page */}
        <div
          className="pointer-events-none absolute w-[700px] h-[400px] left-1/2 -translate-x-1/2 top-0 rounded-full bg-white/5 blur-[150px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-6"
          >
            Switchiify Blog
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-3xl"
          >
            Inside Switchiify — Ideas, Updates & How We Build
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 text-zinc-400 text-base leading-relaxed max-w-xl"
          >
            Writing from the people building Gamingar, Neuro AI, and OpenSpace.
            Engineering decisions, design thinking, and what it means to build
            technology from Kigali for the world.
          </motion.p>
        </div>
      </section>

      {/* ── 2. FEATURED POST ────────────────────────────────────────────────── */}
      <section className="py-16 bg-black dark:bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal className="mb-8">
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
              Featured
            </p>
          </Reveal>

          {/*
            Aesthetic risk: diagonal clip on the image column.
            The image is clipped with a polygon that leans right, creating
            forward momentum toward the text. Justified: a blog index's job
            is to make the first post irresistible — a static rectangle
            doesn't do that.
          */}
          <Reveal>
            <Link
              href={`/blogs/${featured.slug}`}
              className="group grid md:grid-cols-2 gap-0 rounded-md overflow-hidden bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              {/* Image — diagonal clip */}
              <div className="relative h-72 md:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)',
                  }}
                />
                {/* Scrim */}
                <div
                  className="absolute inset-0 bg-black/20 pointer-events-none"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-12">
                {/* Category chip */}
                <span className="inline-block self-start mb-5 text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full text-zinc-300 bg-white/10">
                  {featured.category}
                </span>

                <h2 className="text-white font-bold text-2xl md:text-3xl leading-snug mb-4 group-hover:text-zinc-200 transition-colors">
                  {featured.title}
                </h2>

                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {featured.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 text-xs">
                    {featured.date} · {featured.readTime}
                  </span>
                  <span className="text-white text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                    Read Article
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 3. CATEGORY FILTER ──────────────────────────────────────────────── */}
      <section className="bg-black dark:bg-black border-b border-zinc-800 sticky top-0 z-20 backdrop-blur-sm bg-black/80">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex items-center gap-2 py-4 min-w-max">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      'px-4 py-1.5 rounded-sm border text-xs font-semibold uppercase tracking-[0.1em] transition-colors duration-300 cursor-pointer',
                      isActive
                        ? 'border-white text-white bg-white/10'
                        : 'border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600',
                    ].join(' ')}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. POSTS GRID ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black dark:bg-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.07}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    category={post.category}
                    date={post.date}
                    readTime={post.readTime}
                    image={post.image}
                  />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-24">
                <p className="text-zinc-500 text-base">
                  No articles in this category yet.
                </p>
                <button
                  onClick={() => setActiveCategory('All')}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-zinc-800 text-zinc-400 text-xs font-semibold uppercase tracking-[0.1em] hover:text-white hover:border-zinc-600 transition-colors duration-300"
                >
                  See all articles
                </button>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── 5. BOTTOM CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-zinc-950 dark:bg-zinc-950">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-5">
              Go Deeper
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.05] max-w-2xl mx-auto mb-6">
              Want to learn more about Switchiify?
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md mx-auto mb-10">
              See the platforms we are building and how they are changing the way
              people work, play, and connect.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/gamingar"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                Explore Products
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                About Switchiify
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
