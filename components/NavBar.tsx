"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type links = {
  name: string;
  num: string;
};

const smoothEase = [0.16, 1, 0.3, 1] as const;
const quickEase = [0.4, 0, 1, 1] as const;

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: {
      duration: 0.2,
      ease: quickEase,
      when: "afterChildren",
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.28,
      ease: smoothEase,
      when: "beforeChildren",
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

const mobileItemVariants = {
  closed: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.16, ease: quickEase },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.24, ease: smoothEase },
  },
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

  const handleSmoothScroll = (sectionId: string) => {
    const target = document.getElementById(sectionId);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    // Main Navbar Container with animation
    <motion.nav
      initial={false}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 text-white transition-colors md:px-16 ${
        isOpen
          ? "bg-zinc-950/96 backdrop-blur-xl md:bg-transparent md:backdrop-blur-0"
          : "mix-blend-difference"
      }`}
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
              className="w-30 h-30 rounded"
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
            onClick={(e) => {
              e.preventDefault();
              handleSmoothScroll(link.name.toLowerCase());
            }}
          >
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-orange-400 transition-colors">
              {`// ${link.num}`}
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-full left-0 right-0 border-b border-white/10 bg-zinc-950 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={i}
                  variants={mobileItemVariants}
                  href={`#${link.name.toLowerCase()}`}
                  className="flex items-center justify-between text-xl"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSmoothScroll(link.name.toLowerCase());
                  }}
                >
                  <span className="uppercase tracking-widest">{link.name}</span>
                  <span className="text-xs font-mono text-orange-500">
                    /{link.num}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
