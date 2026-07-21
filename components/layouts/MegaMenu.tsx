'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { companyLinks, serviceLinks, researchLinks } from './megaMenuData';

interface MegaMenuProps {
  isOpen: boolean;
}

const columns = [
  { label: 'Company', links: companyLinks, seeAll: '/about' },
  { label: 'Services', links: serviceLinks, seeAll: '/services' },
  { label: 'Research', links: researchLinks, seeAll: '/research' },
];

const ExternalIcon = () => (
  <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export function MegaMenu({ isOpen }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-black border-b border-zinc-200 dark:border-white/10"
        >
          <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-3">
            {columns.map(({ label, links, seeAll }, colIndex) => (
              <div
                key={label}
                className={`pr-12 ${colIndex > 0 ? 'pl-12 border-l border-zinc-200 dark:border-white/10' : ''}`}
              >
                <span className="block text-[11px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-semibold pb-3 mb-4 border-b border-zinc-200 dark:border-white/10">
                  {label}
                </span>
                <ul className="space-y-3 mb-5">
                  {links.map((link, i) => {
                    const isExternal = (link as { external?: boolean }).external;
                    const isHighlight = (link as { highlight?: boolean }).highlight;
                    const linkClassName = `group flex items-center gap-2 text-sm py-0.5 transition-colors duration-150 ${
                      isHighlight
                        ? 'text-zinc-900 dark:text-white font-medium'
                        : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`;
                    return (
                      <motion.li
                        key={link.href + link.label}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.02, duration: 0.15 }}
                      >
                        {isExternal ? (
                          <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                            {isHighlight && <span className="w-1 h-1 bg-zinc-900 dark:bg-white shrink-0" />}
                            {link.label}
                            <ExternalIcon />
                          </a>
                        ) : (
                          <Link href={link.href} className={linkClassName}>
                            {isHighlight && <span className="w-1 h-1 bg-zinc-900 dark:bg-white shrink-0" />}
                            {link.label}
                          </Link>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
                <Link
                  href={seeAll}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] font-semibold text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                >
                  See all {label.toLowerCase()} →
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
