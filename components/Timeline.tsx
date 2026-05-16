"use client";

import type { TimelineItem } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-slate-950/10 dark:bg-white/10 md:left-1/2" />
      <div className="grid gap-8">
        {items.map((item, index) => (
          <motion.article
            key={`${item.organization}-${item.period}`}
            className={`relative grid gap-5 md:grid-cols-[1fr_auto_1fr] ${
              index % 2 === 0 ? "" : "md:[&_.timeline-card]:col-start-3"
            }`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <div className="hidden md:block" />
            <motion.div
              className="z-10 ml-0 grid h-9 w-9 place-items-center rounded-full border border-teal-400/30 bg-white text-teal-700 shadow-lg shadow-teal-500/20 dark:bg-slate-950 dark:text-teal-200"
              whileInView={{ scale: [0.8, 1.12, 1] }}
              viewport={{ once: true }}
            >
              <CheckCircle2 className="h-4 w-4" />
            </motion.div>
            <div className="timeline-card glass-panel ml-12 rounded-[28px] p-6 transition hover:-translate-y-1 hover:border-teal-500/35 md:ml-0">
              <p className="text-sm font-bold text-teal-700 dark:text-teal-200">
                {item.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-slate-950 dark:text-white sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300 sm:text-base">
                {item.organization}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-7">
                {item.description}
              </p>
              <ul className="mt-5 grid gap-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-2 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:text-sm sm:leading-6"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
