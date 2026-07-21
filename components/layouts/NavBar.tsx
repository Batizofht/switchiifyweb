'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MegaMenu } from './MegaMenu';
import Button from '../ui/Button/Button';
import { SearchInput } from '../ui/Input';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Company', hasDropdown: true },
  { label: 'Gamingar', href: '/gamingar' },
  { label: 'OpenSpace', href: '/openspace' },
  { label: 'Neuro AI', href: '/neuroai' },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const menuTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showBg = isScrolled || isMenuOpen || isMobileOpen;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isSearchOpen) return;

    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setIsSearchOpen(false);
    }

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isSearchOpen]);

  const handleMenuEnter = () => {
    if (menuTimerRef.current) clearTimeout(menuTimerRef.current);
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    menuTimerRef.current = setTimeout(() => setIsMenuOpen(false), 150);
  };

  const textColor = showBg
    ? 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
    : 'text-white/90 hover:text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showBg
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/officiallogo-mark-white.png"
            alt="Switchiify"
            width={30}
            height={16}
            className="object-contain"
          />
          <span
            className={`text-sm font-semibold tracking-tight ${
              showBg ? 'text-zinc-900 dark:text-white' : 'text-white'
            }`}
          >
            Switchiify
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <button
                key={item.label}
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${textColor}`}
              >
                {item.label}
                <svg
                  className="w-3.5 h-3.5 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className={`text-sm font-medium transition-colors duration-200 ${textColor}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <AnimatePresence mode="wait">
            {isSearchOpen ? (
              <div ref={searchContainerRef}>
                <SearchInput
                  key="search"
                  ref={searchRef}
                  isExpanded={isSearchOpen}
                  onClose={() => setIsSearchOpen(false)}
                  variant={showBg ? 'solid' : 'glass'}
                  placeholder="Search..."
                />
              </div>
            ) : (
              <motion.div
                key="actions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <Link href="/signin">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`hidden md:inline-flex ${
                      showBg
                        ? 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10'
                        : 'border-white/30 text-white hover:bg-white/10'
                    }`}
                  >
                    Sign in
                  </Button>
                </Link>
                <Link href="/openspace" className="hidden md:block">
                  <Button variant="primary" size="sm">
                    Join OpenSpace
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    setTimeout(() => searchRef.current?.focus(), 100);
                  }}
                  className={`p-1.5 transition-colors ${textColor}`}
                  aria-label="Search"
                >
                  <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
                {/* Mobile menu toggle */}
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className={`md:hidden p-1.5 transition-colors ${textColor}`}
                  aria-label="Menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mega Menu */}
      <div onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave}>
        <MegaMenu isOpen={isMenuOpen} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href ?? '#'}
                  onClick={() => setIsMobileOpen(false)}
                  className="text-zinc-300 hover:text-white text-base font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <Link href="/signin" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="outline" size="md" className="w-full">Sign in</Button>
                </Link>
                <Link href="/openspace" onClick={() => setIsMobileOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">Join OpenSpace</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
