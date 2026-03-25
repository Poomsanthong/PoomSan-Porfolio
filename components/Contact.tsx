"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Linkedin, Github } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "thanapoom.santhong10@gmail.com",
    href: "#contact",
    icon: Mail,
  },
  {
    label: "Location",
    value: "Based in Netherlands",
    href: "#contact",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-[90vh] overflow-hidden bg-[#020202] px-8 pt-32 pb-16 text-white md:px-16"
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
            Let&apos;s build something sharp.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
            If you need a frontend developer for product work, polished UI, or
            interactive experiences, let&apos;s talk through the details.
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
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-zinc-800 pt-8">
              <a
                href="https://mail.google.com/mail/?view=cm&to=thanapoom.santhong10@gmail.com&su=Frontend%20Project%20Inquiry&body=Hi%20Poom,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20frontend%20project.%20Please%20let%20me%20know%20when%20you%20are%20available.%0D%0A%0D%0AThanks!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Start a conversation
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-32 flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-zinc-900 pt-8 md:flex-row">
        <div className="flex items-center gap-8">
          {[
            {
              icon: <Github size={20} />,
              label: "GitHub",
              href: "https://github.com/Poomsanthong/",
            },
            {
              icon: <Linkedin size={20} />,
              label: "LinkedIn",
              href: "www.linkedin.com/in/thanapoom-santhong",
            },
            {
              icon: <Mail size={20} />,
              label: "Email",
              href: "https://mail.google.com/mail/?view=cm&to=thanapoom.santhong10@gmail.com&su=Frontend%20Project%20Inquiry&body=Hi%20Poom,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20frontend%20project.%20Please%20let%20me%20know%20when%20you%20are%20available.%0D%0A%0D%0AThanks!",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, color: "#f97316" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="group flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-white"
            >
              {social.icon}
              <span className="absolute -top-8 text-[10px] font-mono uppercase tracking-widest opacity-0 transition-opacity group-hover:opacity-100">
                {social.label}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 font-mono text-xs uppercase tracking-widest text-zinc-600 md:flex-row md:gap-12">
          <p>&copy; {new Date().getFullYear()} Thanapoom Santhong</p>
          <div className="hidden h-1 w-1 rounded-full bg-zinc-800 md:block" />
          <p>ALL RIGHTS RESERVED</p>
          <div className="hidden h-1 w-1 rounded-full bg-zinc-800 md:block" />
          <p>DESIGNED IN NL</p>
        </div>
      </div>
    </section>
  );
}
