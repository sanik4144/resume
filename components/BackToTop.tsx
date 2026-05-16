"use client";

import { motion, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => setVisible(latest > 700));
  }, [scrollY]);

  return (
    <motion.a
      href="#hero"
      aria-label="Back to top"
      className="focus-ring fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 dark:bg-white dark:text-slate-950"
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20, pointerEvents: visible ? "auto" : "none" }}
    >
      <ArrowUp className="h-5 w-5" />
    </motion.a>
  );
}
