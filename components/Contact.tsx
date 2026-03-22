"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "hello@poom.dev",
    href: "mailto:hello@poom.dev",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Based in Netherlands, available worldwide",
    href: "#",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-neutral-950 px-8 py-32 text-white md:px-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-5xl font-light text-zinc-600">
              04
            </span>
            <div className="h-[2px] w-16 bg-orange-500" />
          </div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-orange-400">
            Contact
          </p>
          <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">
            Let's build something sharp.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            If you need a frontend developer for product work, polished UI, or
            interactive experiences, let's talk through the details.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-900/60 p-8 backdrop-blur md:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="group rounded-2xl border border-zinc-800 bg-black/30 p-6 transition-colors duration-300 hover:border-orange-500/60 hover:bg-black/50"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
                    <Icon size={20} />
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {label}
                  </p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <span className="text-lg font-medium leading-snug text-white">
                      {value}
                    </span>
                    {href !== "#" && (
                      <ArrowUpRight className="mt-1 text-zinc-500 transition-colors group-hover:text-orange-400" />
                    )}
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <a
                href="mailto:hello@poom.dev"
                className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
