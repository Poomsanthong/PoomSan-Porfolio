"use client";

import { motion } from "framer-motion";

export default function AnimatedBg({
  blur = 0,
  scale = 1,
  opacity = 1,
}: {
  blur?: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      style={{
        filter: `blur(${blur}px)`,
        scale,
        opacity,
      }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* ORANGE */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          rotate: [0, 45, -45, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-gradient-to-tr from-orange-600/30 to-rose-600/10 blur-[100px] rounded-full"
      />
      {/* BLUE */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[-10%] -left-[-10%] w-[800px] h-[800px] bg-gradient-to-tr from-indigo-900/40 to-cyan-900/20 blur-[120px] rounded-full"
      />
      {/* 3d cubes */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -15 }}
        animate={{ opacity: 0.8, y: 0, rotate: -5 }}
        transition={{ duration: 1.5 }}
        className="hidden lg:block absolute top-[25%] left-[20%] w-[120px] h-[120px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 rounded-xl shadow-2xl backdrop-blur-xl"
      />{" "}
      <motion.div
        initial={{ opacity: 0, y: -50, rotate: 15 }}
        animate={{ opacity: 0.6, y: 0, rotate: 10 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="hidden lg:block absolute bottom-[25%] right-[25%] w-[80px] h-[80px] bg-gradient-to-br from-orange-500/20 to-rose-500/10 border border-orange-500/20 rounded-lg shadow-2xl backdrop-blur-xl"
      />
    </motion.div>
  );
}
