"use client";

import type { Project } from "@/lib/portfolio-data";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, KeyRound, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showCredentials, setShowCredentials] = useState(false);
  const hasCredentials = Boolean(project.credentials?.length);
  const hasActions = Boolean(project.liveUrl || project.githubUrl || hasCredentials);
  const actionCount = [project.liveUrl, project.githubUrl, hasCredentials].filter(Boolean).length;
  const actionGridClass =
    actionCount === 1
      ? "grid-cols-1"
      : actionCount === 2
        ? "grid-cols-2"
        : "grid-cols-3";

  useEffect(() => {
    if (!showCredentials) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowCredentials(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [showCredentials]);

  return (
    <>
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
          {hasActions ? (
            <div className={`mt-6 grid gap-3 ${actionGridClass}`}>
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live demo`}
                  title="Live demo"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-white transition hover:-translate-y-0.5 hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} GitHub repository`}
                  title="GitHub"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 px-4 py-3 text-slate-800 transition hover:-translate-y-0.5 hover:border-teal-500/50 dark:border-white/10 dark:text-white"
                >
                  <SocialIcon
                    as="span"
                    network="github"
                    bgColor="transparent"
                    fgColor="currentColor"
                    style={{
                      height: "28px",
                      width: "28px",
                    }}
                  />
                </a>
              ) : null}
              {hasCredentials ? (
                <button
                  type="button"
                  onClick={() => setShowCredentials(true)}
                  aria-label={`${project.title} demo credentials`}
                  title="Credentials"
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-teal-500/30 bg-teal-600/10 px-4 py-3 text-teal-800 transition hover:-translate-y-0.5 hover:border-teal-500/60 hover:bg-teal-600/15 dark:border-teal-300/25 dark:bg-teal-300/10 dark:text-teal-100 dark:hover:bg-teal-300/15"
                >
                  <KeyRound className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          ) : null}
        </div>
      </motion.article>
      <AnimatePresence>
        {showCredentials && project.credentials ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-slate-950/55 px-4 py-5 backdrop-blur-sm sm:items-center sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${project.title}-credentials-title`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCredentials(false)}
          >
            <motion.div
              className="glass-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] p-5 shadow-2xl shadow-slate-950/25 sm:p-7"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="section-kicker">Demo Access</p>
                  <h3
                    id={`${project.title}-credentials-title`}
                    className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white sm:text-3xl"
                  >
                    {project.title} Credentials
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCredentials(false)}
                  className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-950/10 bg-white/70 text-slate-700 transition hover:-translate-y-0.5 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-white"
                  aria-label="Close credentials"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 grid gap-4">
                {project.credentials.map((credential) => (
                  <div
                    key={`${credential.role}-${credential.userid}`}
                    className="rounded-3xl border border-slate-950/10 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5 sm:p-5"
                  >
                    <p className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                      {credential.role}
                    </p>
                    <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                      <div className="min-w-0 rounded-2xl bg-slate-950/5 p-3 dark:bg-white/10">
                        <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          User ID
                        </dt>
                        <dd className="mt-1 break-words font-semibold text-slate-800 dark:text-slate-100">
                          {credential.userid}
                        </dd>
                      </div>
                      <div className="min-w-0 rounded-2xl bg-slate-950/5 p-3 dark:bg-white/10">
                        <dt className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                          Password
                        </dt>
                        <dd className="mt-1 break-words font-semibold text-slate-800 dark:text-slate-100">
                          {credential.password}
                        </dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
