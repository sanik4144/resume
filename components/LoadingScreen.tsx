"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-slate-950 text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
        >
          <motion.div
            className="relative h-20 w-20 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-teal-300 shadow-[0_0_30px_rgba(45,212,191,0.9)]" />
          </motion.div>
          <p className="absolute mt-32 text-sm font-semibold tracking-[0.32em] text-slate-400">
            PORTFOLIO
          </p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
