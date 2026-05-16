"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      suppressHydrationWarning
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="focus-ring group inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 bg-white/72 text-slate-800 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-teal-500/45 hover:text-teal-700 dark:border-white/10 dark:bg-slate-950/72 dark:text-slate-100 dark:hover:text-teal-200"
    >
      <Sun className="h-4 w-4 scale-100 rotate-0 transition dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition dark:scale-100 dark:rotate-0" />
    </button>
  );
}
