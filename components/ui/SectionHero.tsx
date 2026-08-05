'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface SectionHeroProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  bgImage?: string;
  bgColor?: string;
  accentColor?: string;
  children?: React.ReactNode;
}

export function SectionHero({
  eyebrow,
  headline,
  description,
  primaryCta,
  secondaryCta,
  bgImage,
  bgColor = 'from-zinc-900/40 to-black',
  accentColor = 'text-zinc-400',
  children,
}: SectionHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
      {bgImage ? (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-b ${bgColor}`} />
        </>
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-b ${bgColor}`} />
      )}

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-3 sm:px-6 md:px-10 pb-20 pt-40">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-xs uppercase tracking-[0.25em] mb-4 ${accentColor}`}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.0] max-w-4xl mb-6"
        >
          {headline}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed mb-8"
          >
            {description}
          </motion.p>
        )}
        {(primaryCta || secondaryCta) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm bg-white text-black text-xs font-semibold uppercase tracking-[0.1em] hover:bg-zinc-200 transition-colors duration-300"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-sm border border-white/25 text-white text-xs font-semibold uppercase tracking-[0.1em] hover:border-white/60 hover:bg-white/5 transition-all duration-300"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
