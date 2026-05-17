"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSent(false);
    setSending(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSent(true);
      form.reset();
    } catch (requestError) {
      setError(
        requestError instanceof Error
          ? requestError.message
          : "Failed to send message. Please try again.",
      );
    } finally {
      setSending(false);
    }
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
            placeholder="Tell me about the role, project or idea."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={sending}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-teal-700/20 transition hover:-translate-y-1 hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 dark:bg-teal-400 dark:text-slate-950 dark:hover:bg-teal-300"
      >
        <Send className="h-4 w-4" />
        {sending ? "Sending..." : "Send Message"}
      </button>
      {sent ? (
        <p className="mt-4 text-center text-sm font-semibold text-teal-700 dark:text-teal-200">
          Thanks. I will get back to you soon.
        </p>
      ) : null}
      {error ? (
        <p className="mt-4 text-center text-sm font-semibold text-red-600 dark:text-red-300">
          {error}
        </p>
      ) : null}
    </motion.form>
  );
}
