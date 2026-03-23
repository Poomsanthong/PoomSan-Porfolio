"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBg from "@/components/AnimatedBg";
export default function Loader({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 500);
          return 100;
        }
        return p + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden">
      <AnimatedBg blur={20} />

      {/* percentage */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm tracking-widest text-zinc-400 mb-4 font-mono"
      >
        {progress}%
      </motion.div>

      {/* name animation */}
      {/* <motion.h1
        layoutId="hero-name"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-[10vw] font-black uppercase text-white tracking-tight text-center"
      >
        {" "}
      </motion.h1> */}

      {/* progress bar */}
      <div className="w-64 h-[2px] bg-white/10 mt-8 overflow-hidden">
        <motion.div
          className="h-full bg-orange-500"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
