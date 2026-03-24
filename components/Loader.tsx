"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBg from "./AnimatedBg";
export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onFinish();
          }, 15);

          return 100;
        }

        return p + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="fixed inset-0   flex flex-col items-center justify-center z-50 overflow-hidden">
      {" "}
      {/* BACKGROUND BLOBS */}
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-neutral-950 pointer-events-auto"
      >
        <AnimatedBg blur={20} scale={1} opacity={1} />
      </motion.div>
      {/* NAME Logo */}
      <motion.img
        src="/images/Poom_Logo.png"
        layoutId="poom-logo"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="w-40 md:w-48 z-10"
      />
      <motion.div
        exit={{
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
        }}
        transition={{
          duration: 0.3,
          ease: "easeIn",
        }}
        className="flex flex-col items-center"
      >
        {/* PERCENT */}
        <motion.div
          className="mt-6 text-sm text-zinc-400 font-mono tracking-widest z-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.div>

        {/* PROGRESS BAR */}
        <div className="w-64 h-[2px] bg-white/10 mt-4 overflow-hidden z-10">
          <motion.div
            className="h-full bg-orange-500"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
