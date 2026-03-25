"use client";
import { motion } from "framer-motion";
import AnimatedBg from "@/components/AnimatedBg";

export default function Hero() {
  const words = "THANAPOOM SANTHONG".split(" ");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-neutral-950 px-6 sm:px-12 md:px-24 pt-24 pb-12"
    >
      {/* background elements*/}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatedBg blur={0} scale={1} opacity={1} />
      </div>
      {/* Subtitle*/}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-auto md:mt-16 h-full w-full max-w7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-6 flex items-center justify-center gap-3 w-full"
        >
          <div className="w-12 h-[1px] bg-orange-500" />

          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-orange-400 font-medium uppercase">
            Frontend Developer / Frontend Engineer
          </span>

          <div className="w-12 h-[1px] bg-orange-500" />
        </motion.div>

        {/* Main Title */}
        <div className="flex flex-col items-center w-full">
          {words.map((word, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: 0.15 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] leading-none font-black tracking-tighter text-white uppercase drop-shadow-lg overflow-hidden  w-full text-center "
            >
              {word}
            </motion.h1>
          ))}
        </div>

        {/* Small Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="mt-8 sm:mt-12 text-zinc-400 max-w-2xl text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed px-4 mx-auto"
        >
          FRONTEND. DESIGN. PERFORMANCE. BUILT WITH MODERN WEB TECHNOLOGIES.
        </motion.p>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55, duration: 0.45 }}
        className="relative z-10 w-full flex justify-between items-end mt-auto pt-14"
      >
        <div className="hidden md:flex flex-col gap-2 opacity-50 font-mono text-[10px] tracking-widest uppercase">
          <span>Based in</span>
          <span className="text-white font-medium">Apeldoorn, NL</span>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mx-auto md:mx-0 flex flex-col items-center gap-4 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono text-zinc-500">
            Scroll to explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </motion.div>

        <div className="hidden md:flex flex-col gap-2 opacity-50 font-mono text-[10px] tracking-widest uppercase text-right">
          <span>Available for</span>
          <span className="text-white font-medium"> Work</span>
        </div>
      </motion.div>
    </motion.section>
  );
}

//  still logo doesnt work properly find a way
