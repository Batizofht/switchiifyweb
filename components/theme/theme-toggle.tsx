'use client';
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------A PROPERTY OF SWITCHIIFY----------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Authors: Mushinzimana Jean Baptiste
// Date Created: 2026-2-1
// Date Modified: 2026-2-1
// Description: Theme toggle dropdown component with icons for switching between themes.
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

import { useTheme, Theme } from "./theme-provider";
import { useEffect, useState, useRef } from "react";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle click outside for dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return (
      <button className="p-2 rounded-md">
        <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded animate-pulse"></div>
      </button>
    );
  }

  const themes: { value: Theme; label: string; icon: React.ReactNode; description: string }[] = [
    {
      value: "system",
      label: "System",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: "Use system preference"
    },
    {
      value: "light",
      label: "Light",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: "Always light mode"
    },
    {
      value: "dark",
      label: "Dark",
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      description: "Always dark mode"
    }
  ];

  const currentTheme = themes.find(t => t.value === theme);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-md transition-colors ${
          isOpen
            ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
            : "text-gray-300 hover:text-white hover:bg-gray-800"
        }`}
        aria-label="Select theme"
      >
        {currentTheme?.icon}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-56 rounded-lg shadow-lg border ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}>
          <div className="p-2">
            <div className={`px-3 py-2 text-xs font-semibold uppercase tracking-wide ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}>
              Theme
            </div>
            {themes.map((themeOption) => (
              <button
                key={themeOption.value}
                onClick={() => {
                  toggle(themeOption.value as Theme);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  theme === themeOption.value
                    ? theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                    : theme === "dark"
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex-shrink-0">
                  {themeOption.icon}
                </div>
                <div className="flex-1 text-left">
                  <div className="font-medium">{themeOption.label}</div>
                  <div className={`text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>
                    {themeOption.description}
                  </div>
                </div>
                {theme === themeOption.value && (
                  <div className="flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}