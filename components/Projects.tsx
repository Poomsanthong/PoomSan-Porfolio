"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  category: string;
  image: string;
  website: string;
  github: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Reservation System",
      category: "FullStack / UI / Dashboard / Database",
      image: "images/Reservation_pic.jpg",
      website: "https://bookflow.poomsan.site/",
      github: "https://github.com/Poomsanthong/Reservation-System",
    },
    {
      title: "Restaurant Landing Page",
      category: "React / UI",
      image: "images/Landing_page.png",
      website: "https://landing-page.poomsan.site/",
      github: "https://github.com/Poomsanthong/Restaurant_Website",
    },
    {
      title: "Apple Website Clone",
      category: "Three.js / Gsap / Vite / Zustand ",
      image: "images/Apple_pic.jpg",
      website: "https://apple.poomsan.site/",
      github: "https://github.com/Poomsanthong/Apple-website",
    },
  ];
  return (
    <section
      id="work"
      className="relative py-32 bg-neutral-950 text-white min-h-screen overflow-hidden"
    >
      {/* Background  layer */}

      <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-gradient-to-bl from-zinc-800/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-16 px-8 md:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-between items-center border-b border-zinc-800 pb-8"
        >
          <div>
            <div className="flex gap-4 items-center mb-6">
              <span className="font-mono text-5xl font-light text-zinc-600">
                03
              </span>
              <div className="h-[2px] w-12 bg-white" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              SELECTED WORK
            </h2>
          </div>
          <p className="hidden md:block max-w-[200px] text-zinc-400 text-sm font-mono leading-relaxed text-right">
            A selected list of recent digital projects.
          </p>
        </motion.div>{" "}
        {/* Project List */}
        <div className="w-full flex flex-col gap-24 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
    >
      <div className="lg:col-span-8 overflow-hidden rounded-xl relative aspect-[16/9]">
        <motion.img
          style={{ y }}
          src={project.image}
          alt={project.title}
          className="w-full h-[120%] object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 origin-center filter grayscale group-hover:grayscale-0"
        />
        {/* when project is hovered  */}
        <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 opacity-100 transition-opacity duration-500 md:p-8 lg:opacity-0 lg:group-hover:opacity-100">
          <div className="flex w-full flex-wrap gap-3 opacity-100 transition-all duration-500 ease-out lg:w-auto lg:translate-y-8 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
            <a
              href={project.website}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black md:px-5 md:py-3 md:text-sm"
            >
              Website
              <ArrowUpRight size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-mono uppercase tracking-wider text-white backdrop-blur-sm transition-colors duration-300 hover:border-orange-400 hover:bg-orange-400 hover:text-black md:px-5 md:py-3 md:text-sm"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-4 h-full py-8 border-t lg:border-t-0 lg:border-l border-zinc-800 lg:pl-16">
        <span className="font-mono text-xs tracking-widest text-orange-500 mb-4 uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white group-hover:text-orange-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest mt-2">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
}
