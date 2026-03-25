"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Expertise() {
  const skills = [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: " Three.js" },
    { name: "Rest-APIs" },
    { name: "UI/UX Design" },
    { name: "Figma" },
    { name: "Zustand" },
    { name: "Supabase" },
    { name: "Performance" },
  ];
  return (
    <section
      id="expertise"
      className="relative min-h-screen py-32 px-8 md:px-16 bg-[#030303] text-white overflow-hidden"
    >
      {/* Abstract blurred background layer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-orange-600/5 blur-[200px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-start gap-16 relative z-10">
        {/* Section header */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-end border-b border-zinc-800 pb-8"
        >
          <div>
            <div className="flex gap-4 items-center mb-6">
              <span className="font-mono text-5xl font-light text-zinc-600">
                02
              </span>
              <div className="h-[2px] w-12 bg-orange-500" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              Expertise
            </h2>
          </div>
          <p className="hidden md:block max-w-[300px] text-zinc-400 text-sm font-mono leading-relaxed">
            Technologies I use to build scalable web applications. Mastered over
            years of practice.
          </p>
        </motion.div>
        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
          {skills.map((skill, i) => (
            <SkillCard key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
function SkillCard({
  skill,
  index,
}: {
  skill: { name: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      id="expertise"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative overflow-hidden group cursor-pointer"
    >
      <div className="h-full bg-zinc-900 border border-zinc-800 p-8 flex flex-col justify-between items-center text-center rounded-xl transition-all duration-300 group-hover:border-orange-500 group-hover:bg-zinc-800/80">
        {/* Fill animation matching reference 4 (vibrant orange blocks) */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: isHovered ? "0%" : "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-orange-600 to-orange-400 z-0"
        />

        <div className="relative z-10 w-full flex flex-col items-center gap-4">
          <span className="font-mono text-sm tracking-widest text-zinc-500 group-hover:text-black transition-colors duration-300">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-white group-hover:text-black transition-colors duration-300">
            {skill.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}
