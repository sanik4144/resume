"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="glass-panel rounded-[30px] p-6 sm:p-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Name
          <input
            required
            name="name"
            className="focus-ring rounded-2xl border border-slate-950/10 bg-white/70 px-4 py-3 font-medium text-slate-950 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Email
          <input
            required
            type="email"
            name="email"
            className="focus-ring rounded-2xl border border-slate-950/10 bg-white/70 px-4 py-3 font-medium text-slate-950 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          Message
          <textarea
            required
            name="message"
            rows={5}
            className="focus-ring resize-none rounded-2xl border border-slate-950/10 bg-white/70 px-4 py-3 font-medium text-slate-950 transition placeholder:text-slate-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
            placeholder="Tell me about the role, project, or idea."
          />
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-1 hover:bg-teal-800 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        <Send className="h-4 w-4" />
        Send Message
      </button>
      {sent ? (
        <p className="mt-4 text-center text-sm font-semibold text-teal-700 dark:text-teal-200">
          Thanks. This demo form is ready to connect to your backend or form service.
        </p>
      ) : null}
    </motion.form>
  );
}
