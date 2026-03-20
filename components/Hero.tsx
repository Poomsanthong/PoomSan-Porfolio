"use client";
import { easeInOut, motion } from "framer-motion";

export default function Hero() {
  const words = "THANAPOOM SANTHONG".split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-neutral-950 px-6 sm:px-12 md:px-24 pt-24 pb-12"
    >
      {/* background elements*/}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-orange-600/30 to-rose-600/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-tr from-indigo-900/40 to-cyan-900/20 blur-[120px] rounded-full"
        />
        {/* Fake 3D block */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -15 }}
          animate={{ opacity: 0.8, y: 0, rotate: -5 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="hidden lg:block absolute top-[25%] left-[20%] w-[120px] h-[120px] bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 rounded-xl shadow-2xl backdrop-blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -50, rotate: 15 }}
          animate={{ opacity: 0.6, y: 0, rotate: 10 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="hidden lg:block absolute bottom-[25%] right-[25%] w-[80px] h-[80px] bg-gradient-to-br from-orange-500/20 to-rose-500/10 border border-orange-500/20 rounded-lg shadow-2xl backdrop-blur-xl"
        />
      </div>
      {/* Subtitle*/}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-auto md:mt-16 h-full w-full max-w7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center justify-center gap-3 w-full"
        >
          <div className="w-12 h-[1px] bg-orange-500" />

          <span className="font-mono text-xs md:text-sm tracking-[0.3em] text-orange-400 font-medium uppercase">
            Frontend Developer
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
                duration: 0.8,
                delay: 0.3 + i * 0.2,
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
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 sm:mt-12 text-zinc-400 max-w-2xl text-sm md:text-base lg:text-lg font-light tracking-wide leading-relaxed px-4 mx-auto"
        >
          FRONTEND DEVELOPER FOCUSED ON MODERN WEB TECHNOLOGIES. TURNING DESIGN
          INTO FAST, INTERACTIVE, AND RESPONSIVE EXPERIENCES.
        </motion.p>
      </div>
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
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
    </section>
  );
}
