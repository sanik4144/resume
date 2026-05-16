"use client";

import type { Project } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      className="glass-panel group overflow-hidden rounded-[30px]"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.58, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          width={440}
          height={600}
          className="object-cover rounded-[30px] p-8 transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 min-h-24 text-justify leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-950/5 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-white/10 dark:text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-950/10 px-4 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-500/50 dark:border-white/10 dark:text-white"
          >
            <SocialIcon
              as="span"
              network="github"
              bgColor="transparent"
              fgColor="currentColor"
              style={{ height: 16, width: 16 }}
            />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
