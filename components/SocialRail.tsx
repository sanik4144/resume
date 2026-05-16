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
      className="fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 md:block xl:left-3 2xl:left-4"
    >
      <div className="glass-panel flex flex-col items-center gap-2 rounded-full p-1.5">
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
            className="focus-ring !h-8 !w-8 rounded-full text-slate-600 transition hover:-translate-y-0.5 hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-slate-950 xl:!h-9 xl:!w-9"
          />
        ))}
        <span className="my-0.5 h-10 w-px bg-slate-950/12 dark:bg-white/14" />
        <a
          href={`mailto:${portfolioData.personal.email}`}
          className="focus-ring [writing-mode:vertical-rl] rounded-full px-1.5 py-2 text-[12px] font-bold tracking-[0.16em] text-slate-500 transition hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-200"
        >
          {portfolioData.personal.email}
        </a>
      </div>
    </aside>
  );
}
