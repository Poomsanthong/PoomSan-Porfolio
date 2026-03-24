"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type links = {
  name: string;
  num: string;
};
export default function Navbar({ loaded }: { loaded: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const links: links[] = [
    { name: "Home", num: "00" },
    { name: "About", num: "01" },
    { name: "Expertise", num: "02" },
    { name: "Work", num: "03" },
    { name: "Contact", num: " 04" },
  ];

  return (
    // Main Navbar Container with animation
    <motion.nav
      initial={false}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
        {loaded && (
          <>
            <motion.span
              initial={false}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.2, delay: loaded ? 0.25 : 0 }}
              className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"
            ></motion.span>
            <motion.img
              src="images/Poom_Logo.png"
              alt="Poom Logo"
              layoutId="poom-logo"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-30 h-30 bg-black rounded"
            />
          </>
        )}
      </div>

      {/* Desktop Links */}
      <motion.div
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.2, delay: loaded ? 0.25 : 0 }}
        className="hidden md:flex gap-12"
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.name.toLowerCase()}`}
            className="group flex flex-col items-center hover:opacity-100 opacity-60 transition-opacity"
            whileHover={{ y: -2 }}
          >
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-orange-400 transition-colors">
              // {link.num}
            </span>
            <span className="text-sm tracking-widest uppercase mt-1">
              {link.name}
            </span>
          </motion.a>
        ))}
      </motion.div>

      <motion.div
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.2, delay: loaded ? 0.25 : 0 }}
        className="hidden md:flex items-center gap-4"
      >
        <a
          href="/assets/Poom_resume.pdf"
          download="Poom_resume.pdf"
          className="border border-white/20 rounded-full px-6 py-2 text-xs font-mono tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          RESUME
        </a>
      </motion.div>

      {/* Mobile Toggle */}
      <motion.button
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.2, delay: loaded ? 0.25 : 0 }}
        className="md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-md p-8 flex flex-col gap-6 md:hidden border-b border-white/10"
        >
          {links.map((link, i) => (
            <a
              key={i}
              href={`#${link.name.toLowerCase()}`}
              className="flex justify-between items-center text-xl"
              onClick={() => setIsOpen(false)}
            >
              <span className="uppercase tracking-widest">{link.name}</span>
              <span className="text-xs font-mono text-orange-500">
                /{link.num}
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
