'use client';
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------A PROPERTY OF SWITCHIIFY----------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Authors: Mushinzimana Jean Baptiste
// Date Created: 2026-2-1
// Date Modified: 2026-2-1
// Description: Theme toggle button component to switch between light and dark themes.
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: (theme?: Theme) => void;
}>({ theme: "system", toggle: () => { } });

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  // Load saved preference
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    let classToAdd: "light" | "dark";
    if (theme === "system") {
      classToAdd = getSystemTheme();
    } else {
      classToAdd = theme;
    }

    // Remove both classes
    root.classList.remove("dark", "light");

    // Add the correct class
    root.classList.add(classToAdd);

    // Save to localStorage
    localStorage.setItem("theme", theme);

  }, [theme, mounted]);

  // Set specific theme or cycle: system → light → dark → system
  function toggle(theme?: Theme) {
    if (theme) {
      setTheme(theme);
    } else {
      setTheme((prev) => {
        const next = prev === "system" ? "light" : prev === "light" ? "dark" : "system";
        return next;
      });
    }
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export type { Theme };
export const useTheme = () => useContext(ThemeContext);