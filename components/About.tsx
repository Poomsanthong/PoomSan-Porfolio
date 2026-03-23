"use client";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-8 md:px-16 bg-neutral-950 text-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Background element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-[80%] h-[150%] bg-gradient-to-l from-orange-900/40 to-transparent blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-16 relative z-10">
        {/* Left side Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="col-span-1 md:col-span-4 flex flex-col"
        >
          <div className="flex gap-4 items-center mb-8">
            <span className="font-mono text-5xl font-light text-zinc-500">
              01
            </span>
            <div className="h-[2px] w-full bg-zinc-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight ">
            Who I Am<span className="text-orange-500">.</span>
          </h2>

          <div className="mt-auto hidden md:block opacity-40 font-mono text-xs tracking-widest leading-loose">
            <p>DESIGN</p>
            <p>FRONTEND</p>
            <p>ANIMATION</p>
            <p>ARCHITECTURE</p>
          </div>
        </motion.div>
        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-1 md:col-span-8 flex flex-col justify-center"
        >
          <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-zinc-300 leading-[1.3] md:leading-[1.4]">
            Frontend Developer focused on creating modern, high-performance web{" "}
            <span className="text-white">experiences.</span> {" I build  "}
            <span className="text-orange-400">responsive and interactive</span>.
            interfaces with clean code, smooth animations, and a strong
            attention to design and user experience.
          </p>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-zinc-800 pt-16">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400 font-mono tracking-widest uppercase text-sm">
                Design Philosophy
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                Every pixel matters. I believe in pixel-perfect implementation,
                smooth interactions, and thoughtful user journeys. The best
                interfaces are invisible, letting the user accomplish their
                goals without friction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-orange-400 font-mono tracking-widest uppercase text-sm">
                Technical Approach
              </h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                Modern tools for modern problems. I leverage the React
                ecosystem, strictly typed APIs with TypeScript, and robust
                styling solutions like Tailwind CSS to deliver enterprise-grade
                applications quickly and sustainably.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
