"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const duration = prefersReducedMotion ? 500 : 1100;
    const timeout = window.setTimeout(onFinish, duration);

    return () => window.clearTimeout(timeout);
  }, [onFinish, prefersReducedMotion]);

  return (
    // Main loader container
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* backgroud */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.45,
          ease: "easeOut",
        }}
      >
        <div className="absolute inset-0 bg-neutral-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_28%)]" />
      </motion.div>
      {/* logo */}
      <motion.img
        src="/images/Poom_Logo.png"
        layoutId="poom-logo"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: prefersReducedMotion ? 0.2 : 0.45,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="z-10 w-40 md:w-48"
      />
      {/* text ui */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          delay: prefersReducedMotion ? 0 : 0.02,
          duration: prefersReducedMotion ? 0.2 : 0.45,
          ease: "easeOut",
        }}
      >
        <p className="z-10 mt-6 font-mono text-xs uppercase tracking-[0.35em] text-zinc-400">
          Loading portfolio
        </p>

        <div className="z-10 mt-4 h-[2px] w-64 overflow-hidden bg-white/10">
          <motion.div
            className="h-full origin-left bg-orange-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.45 : 0.9,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
