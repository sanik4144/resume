"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { SocialIcon } from "react-social-icons";

const links = [
  {
    label: "GitHub",
    href: portfolioData.socials.github,
  },
  {
    label: "LeetCode",
    href: portfolioData.socials.leetcoode,
  },
  {
    label: "LinkedIn",
    href: portfolioData.socials.linkedin,
  },
  {
    label: "Facebook",
    href: portfolioData.socials.facebook,
  },
];

export function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed inset-x-0 top-4 z-50 px-4 lg:inset-x-auto lg:left-2 lg:top-1/2 lg:z-30 lg:-translate-y-1/2 lg:px-0 xl:left-3 2xl:left-4"
    >
      <div className="social-rail-shell glass-panel mx-auto flex w-fit items-center gap-2 rounded-full p-1.5 lg:mx-0 lg:flex-col">
        {links.map(({ label, href }) => (
          <SocialIcon
            key={label}
            url={href}
            target="_blank"
            rel="noreferrer"
            label={label}
            title={label}
            bgColor="transparent"
            fgColor="currentColor"
            className="focus-ring !h-8 !w-8 rounded-full text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950 sm:!h-9 sm:!w-9 lg:!h-8 lg:!w-8 xl:!h-9 xl:!w-9"
          />
        ))}
        <span className="mx-0.5 h-px w-10 bg-slate-950/12 hidden dark:bg-white/14 lg:block lg:mx-0 lg:my-0.5 lg:h-10 lg:w-px" />
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="focus-ring hidden rounded-full px-1.5 py-2 text-[12px] font-bold tracking-[0.16em] text-slate-500 transition hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-200 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180"
        >
          {portfolioData.personal.email}
        </a>
      </div>
    </aside>
  );
}
