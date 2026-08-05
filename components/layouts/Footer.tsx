'use client';

import Link from 'next/link';
import Image from 'next/image';
import { footerData } from './footerData';

export function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-black border-t border-zinc-200 dark:border-white/5">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 md:px-10 pt-16 pb-10">
        {/* Top: logo + columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-8 mb-14">
          {footerData.map((section) => (
            <div key={section.title}>
              <h4 className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-[0.15em] mb-4 font-medium">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {(link as { external?: boolean }).external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs transition-colors duration-150"
                      >
                        {link.label}
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-xs transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-zinc-900 dark:text-white text-xs font-semibold mb-2">Stay Connected</h4>
            <p className="text-zinc-500 dark:text-zinc-500 text-[11px] leading-relaxed mb-4">
              Sign up to receive updates on products, breakthroughs, events, and early previews.
            </p>
            <div className="flex flex-col items-center gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-transparent border-b border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-xs py-1.5 flex-1 focus:outline-none focus:border-zinc-500 dark:focus:border-zinc-400 transition-colors placeholder:text-zinc-400"
              />
              <button className="shrink-0 w-full px-4 py-1.5 rounded-sm border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white text-[11px] font-semibold uppercase tracking-[0.1em] hover:border-zinc-500 dark:hover:border-zinc-400 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-200 dark:border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/officiallogo-mark-white.png"
              alt="Switchiify"
              width={22}
              height={12}
              className="object-contain opacity-60"
            />
            <span className="text-zinc-400 dark:text-zinc-600 text-[11px]">
              © 2026 Switchiify Platforms Inc. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 text-[11px] transition-colors">
              Terms
            </Link>
            <Link href="/legal" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 text-[11px] transition-colors">
              Privacy
            </Link>
            <Link href="/security" className="text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-400 text-[11px] transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
