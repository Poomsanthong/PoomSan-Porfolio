"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBg({
  blur = 0,
  scale = 1,
  opacity = 1,
}: {
  blur?: number;
  scale?: number;
  opacity?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const useLiteMode = prefersReducedMotion || isMobile;

  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        filter: `blur(${blur}px)`,
        scale,
        opacity,
      }}
      transition={{
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <motion.div
        animate={
          useLiteMode
            ? undefined
            : {
                x: [0, 100, -50, 0],
                y: [0, -50, 50, 0],
                rotate: [0, 45, -45, 0],
              }
        }
        transition={
          useLiteMode
            ? undefined
            : { duration: 12, repeat: Infinity, ease: "linear" }
        }
        className="absolute top-[20%] right-[10%] h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-orange-600/30 to-rose-600/10 blur-[72px] md:h-[600px] md:w-[600px] md:blur-[100px]"
      />
      <motion.div
        animate={
          useLiteMode
            ? undefined
            : {
                x: [0, -100, 50, 0],
                y: [0, 100, -50, 0],
              }
        }
        transition={
          useLiteMode
            ? undefined
            : { duration: 15, repeat: Infinity, ease: "linear" }
        }
        className="absolute -bottom-[5%] -left-[5%] h-[460px] w-[460px] rounded-full bg-gradient-to-tr from-indigo-900/35 to-cyan-900/20 blur-[84px] md:-bottom-[-10%] md:-left-[-10%] md:h-[800px] md:w-[800px] md:blur-[120px]"
      />
      {/* 3d cubes */}
      {!useLiteMode && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -15 }}
            animate={{ opacity: 0.8, y: 0, rotate: -5 }}
            transition={{ duration: 0.8 }}
            className="absolute top-[25%] left-[20%] hidden h-[120px] w-[120px] rounded-xl border border-white/5 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-2xl backdrop-blur-xl lg:block"
          />
          <motion.div
            initial={{ opacity: 0, y: -50, rotate: 15 }}
            animate={{ opacity: 0.6, y: 0, rotate: 10 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="absolute right-[25%] bottom-[25%] hidden h-[80px] w-[80px] rounded-lg border border-orange-500/20 bg-gradient-to-br from-orange-500/20 to-rose-500/10 shadow-2xl backdrop-blur-xl lg:block"
          />
        </>
      )}
    </motion.div>
  );
}
