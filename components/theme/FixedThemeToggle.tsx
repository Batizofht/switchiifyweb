'use client';

import React from 'react';
import { useTheme, Theme } from './theme-provider';

export function FixedThemeToggle() {
  const { theme, toggle } = useTheme();

  const themes: { value: Theme; icon: React.ReactNode }[] = [
    {
      value: 'light',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      value: 'dark',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex gap-2 bg-black/50 backdrop-blur-sm rounded-full p-2 border border-gray-800">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => toggle(t.value)}
          className={`p-2 rounded-full transition-all ${
            theme === t.value
              ? 'bg-white text-black'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
