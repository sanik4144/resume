"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Award,
  Download,
  Mail,
  MapPin,
  Phone,
  Hand
} from "lucide-react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { BackToTop } from "./BackToTop";
import { ContactForm } from "./ContactForm";
import { LoadingScreen } from "./LoadingScreen";
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard";
import { ScrollProgress } from "./ScrollProgress";
import { SectionWrapper } from "./SectionWrapper";
import { SkillCard } from "./SkillCard";
import { SocialRail } from "./SocialRail";
import { Timeline } from "./Timeline";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export function PortfolioPage() {
  const { personal, socials } = portfolioData;

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <SocialRail />
      <main className="relative isolate overflow-hidden lg:pl-12 xl:pl-14 2xl:pl-0">
        <div aria-hidden="true" className="premium-grid pointer-events-none fixed inset-0 -z-10" />
        <Hero />
        <SectionWrapper
          id="experience"
          kicker="Experience"
          title="Experience & Achievements"
          intro="Clear experience entries that show my role, responsibilities & the impact I made."
          splitLayout
        >
          <Timeline items={portfolioData.experience} />
        </SectionWrapper>
        <SectionWrapper
          id="skills"
          kicker="Skills"
          title="Tech Stack & Skills."
          intro="Tools and technologies I use to build fast, reliable, and user-friendly applications."
        >
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioData.skills.map((group, index) => (
              <SkillCard key={group.category} group={group} index={index} />
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper
          id="projects"
          kicker="Projects"
          title="Featured projects."
          intro="Each card shows the project, tools, and demo link."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper
          id="education"
          kicker="Education"
          title="Academic Foundation"
          intro="A timeline view of the formal learning and hands-on work that shaped how I think about software."
          splitLayout
        >
          <Timeline items={portfolioData.education} />
        </SectionWrapper>
        <SectionWrapper
          id="research-works"
          kicker="Research Works"
          title="Research Exploration"
          intro="Research-focused work, technical writing, and applied software exploration"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {portfolioData.researchWorks.map((researchWork, index) => (
              <ProjectCard
                key={researchWork.title}
                project={researchWork}
                index={index}
              />
            ))}
          </div>
        </SectionWrapper>
        {/* <Achievements /> */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function Hero() {
  const { personal, socials } = portfolioData;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center px-5 pt-10 pb-2 sm:px-8 lg:px-10"
    >
      <FloatingBackground />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200 mt-12 lg:mt-5"
          >
            <Hand className="h-4 w-4 text-teal-600 dark:text-teal-300" />
            Hey, Welcome. I am:
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance font-display text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-7xl lg:text-8xl"
          >
            {personal.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 font-display text-2xl font-semibold text-teal-700 dark:text-teal-200 sm:text-3xl"
          >
            {personal.title}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg leading-9 text-slate-600 dark:text-slate-300"
          >
            {personal.tagline}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-row gap-3"
          >
            <a
              href={personal.resumeUrl}
              target="_blank"
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 font-extrabold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200 px-6 py-4 text-sm"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-950/10 bg-white/60 px-6 py-4 text-sm font-extrabold text-slate-800 transition hover:-translate-y-1 hover:border-teal-500/50 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-9 flex items-center gap-4">
            <SocialLink href={socials.github} label="GitHub" />
            <SocialLink href={socials.leetcoode} label="LeetCode" />
            <SocialLink href={socials.linkedin} label="LinkedIn" />
            <SocialLink href={socials.facebook} label="Facebook" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[320px] lg:max-w-[420px]"
        >
          <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-br from-teal-400/30 via-sky-400/20 to-amber-300/25 blur-3xl" />
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-4 lg:mt-10">
            <div className="relative h-[400px] overflow-hidden rounded-[24px] bg-slate-950">
              <Image
                src={personal.avatar}
                alt={`${personal.name} avatar placeholder`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2.5 text-center">
              {[
                ["1+", "Years"],
                ["5+", "Projects"],
                ["8", "Core Tech"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-950/10 bg-white/65 p-3 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-display text-xl font-bold text-slate-950 dark:text-white">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 rounded-full border border-slate-950/10 bg-white/60 p-3 text-slate-600 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 md:inline-flex"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}

function FloatingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[8%] top-[18%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl"
        animate={{ y: [0, 24, 0], x: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[12%] h-72 w-72 rounded-full bg-sky-400/18 blur-3xl"
        animate={{ y: [0, -28, 0], x: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[12%] left-[42%] h-52 w-52 rounded-full bg-amber-300/16 blur-3xl"
        animate={{ y: [0, 18, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle_at_center,rgba(15,23,42,0.24)_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-25 dark:[background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.24)_1px,transparent_1px)]" />
    </div>
  );
}

function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      kicker="Certifications"
      title="Signals of growth and craft."
      intro="A compact record of credentials, awards, and ongoing professional development."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {portfolioData.achievements.map((achievement, index) => (
          <motion.article
            key={achievement}
            className="glass-panel rounded-[28px] p-6 transition hover:-translate-y-1 hover:border-amber-400/50"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
          >
            <Award className="h-7 w-7 text-amber-600 dark:text-amber-300" />
            <p className="mt-5 font-semibold leading-7 text-slate-800 dark:text-slate-100">
              {achievement}
            </p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Contact() {
  const { personal, socials } = portfolioData;

  return (
    <SectionWrapper
      id="contact"
      kicker="Contact"
      title="Let's build something worth using."
      intro="Share a role, project brief or collaboration idea."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass-panel rounded-[30px] p-6 sm:p-8">
          <h3 className="font-display text-2xl font-semibold text-slate-950 dark:text-white">
            Contact details
          </h3>
          <div className="mt-7 grid gap-4">
            <ContactRow icon={<Mail />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
            <ContactRow icon={<Phone />} label="Phone" value={personal.phone} href={`tel:${personal.phone}`} />
            <ContactRow icon={<MapPin />} label="Location" value={personal.location} />
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactElement<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-500/10 text-teal-700 dark:text-teal-200">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {label}
        </span>
        <span className="mt-1 block font-semibold text-slate-800 dark:text-slate-100">
          {value}
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="focus-ring flex items-center gap-4 rounded-2xl p-2 transition hover:bg-slate-950/5 dark:hover:bg-white/5">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4 rounded-2xl p-2">{content}</div>;
}

function SocialLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <SocialIcon
      url={href}
      target="_blank"
      rel="noreferrer"
      label={label}
      title={label}
      bgColor="transparent"
      fgColor="currentColor"
      className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-slate-950/10 bg-white/65 text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/50 hover:text-teal-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:text-teal-200"
      style={{ height: 44, width: 44 }}
    />
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const { socials } = portfolioData;

  return (
    <footer className="border-t border-slate-950/10 px-5 py-8 dark:border-white/10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Copyright {year} Saifullah Anik. All rights reserved.
        </p>
        <div className="flex gap-3 lg:mr-[5rem]">
          <SocialLink href={socials.github} label="GitHub" />
          <SocialLink href={socials.leetcoode} label="LeetCode" />
          <SocialLink href={socials.linkedin} label="LinkedIn" />
          <SocialLink href={socials.facebook} label="Facebook" />
        </div>
      </div>
    </footer>
  );
}
