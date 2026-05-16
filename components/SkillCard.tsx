"use client";

import type { SkillGroup } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  return (
    <motion.article
      className="glass-panel group relative overflow-hidden rounded-[28px] p-6"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl transition group-hover:bg-teal-400/20" />
      <div className="relative">
        <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">
          {group.category}
        </p>
        <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {group.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {group.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-950/10 bg-white/70 px-3 py-1.5 text-sm font-semibold text-slate-700 transition group-hover:border-teal-500/35 group-hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:group-hover:text-teal-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
