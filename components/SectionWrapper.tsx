"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  splitLayout?: boolean;
  children: ReactNode;
};

export function SectionWrapper({
  id,
  kicker,
  title,
  intro,
  splitLayout = false,
  children,
}: SectionWrapperProps) {
  const heading = (
    <div className={splitLayout ? "max-w-3xl lg:sticky lg:top-28 lg:m-auto lg:w-[45rem] lg:max-w-none" : "mb-10 max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );

  return (
    <motion.section
      id={id}
      className="relative scroll-mt-28 px-5 py-20 sm:px-8 lg:px-10"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto max-w-7xl">
        {splitLayout ? (
          <div className="grid gap-10 lg:grid-cols-[minmax(250px,0.8fr)_minmax(0,2.2fr)] lg:items-start lg:gap-14">
            {heading}
            <div className="min-w-0 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-3">
              {children}
            </div>
          </div>
        ) : (
          <>
            {heading}
            {children}
          </>
        )}
      </div>
    </motion.section>
  );
}
