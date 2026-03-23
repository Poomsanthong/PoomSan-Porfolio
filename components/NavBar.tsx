"use client";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", num: "00" },
    { name: "About", num: "01" },
    { name: "Expertise", num: "02" },
    { name: "Work", num: "03" },
    { name: "Contact", num: " 04" },
  ];

  return (
    // Main Navbar Container with animation
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-6 px-8 md:px-16 flex items-center justify-between mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2 font-mono text-sm tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
        <img src="images/Poom_Logo.png" alt="Poom Logo" className="w-30" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-12">
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
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a
          href="/assets/Poom_resume.pdf"
          download="Poom_resume.pdf"
          className="border border-white/20 rounded-full px-6 py-2 text-xs font-mono tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          RESUME
        </a>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

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
