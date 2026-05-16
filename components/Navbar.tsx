"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["hero", ...portfolioData.nav.map((item) => item.href.slice(1))];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.08, 0.2, 0.45] },
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 hidden px-4 lg:block">
      <nav className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full px-3 py-2">
        <a
          href="#hero"
          className="focus-ring group flex items-center gap-3 rounded-full px-2 py-1"
          onClick={() => setOpen(false)}
          aria-label="Go to hero section"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white shadow-lg shadow-teal-500/15 dark:bg-white dark:text-slate-950">
            SA
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-slate-900 dark:text-white sm:block">
            Saifullah Anik
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {portfolioData.nav.map((item) => {
            const itemActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`focus-ring relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                  itemActive
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {itemActive ? (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-slate-950/7 dark:bg-white/10"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 bg-white/72 text-slate-800 lg:hidden dark:border-white/10 dark:bg-slate-950/72 dark:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-panel mx-auto mt-3 grid max-w-sm gap-1 rounded-3xl p-3 lg:hidden"
          >
            {portfolioData.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-950/5 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
