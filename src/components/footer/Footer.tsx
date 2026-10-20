"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL = "itsatikhasananik@gmail.com";

const sitemap = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/atikhasananik" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atikhasananik/" },
  { label: "Facebook", href: "https://www.facebook.com/atikhasananik" },
  { label: "X", href: "https://x.com/atikhasananik06" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

const linkClass =
  "group/link relative inline-flex w-fit items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-white/70 transition-colors duration-300 hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-white after:transition-[width] after:duration-300 hover:after:w-full";

const FooterHeading = ({ children }: { children: ReactNode }) => (
  <h3 className="mb-5 font-mono text-[9px] font-semibold uppercase tracking-[0.26em] text-white/35">
    {children}
  </h3>
);

const Footer = () => {
  const reduceMotion = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-10">
        {/* CTA */}
        <motion.a
          href="/contact"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="group flex flex-col gap-8 border-b border-white/15 py-12 sm:py-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.26em] text-white/45">
              <span className="h-1.5 w-1.5 bg-white" />
              Next step
            </p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl lg:text-8xl">
              Have a project?
            </h2>
          </div>

          <span className="flex items-center gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 transition-colors duration-300 group-hover:text-white">
              Start a conversation
            </span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/40 text-xl transition-[background-color,color,transform] duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black motion-safe:group-hover:-translate-y-1 sm:h-16 sm:w-16">
              ↗
            </span>
          </span>
        </motion.a>

        {/* Sitemap */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="grid grid-cols-2 gap-x-6 gap-y-10 py-10 sm:py-14 lg:grid-cols-[1fr_1fr_1fr_1.4fr]"
        >
          <div>
            <FooterHeading>Index</FooterHeading>
            <ul className="flex flex-col items-start gap-3">
              {sitemap.map((item, index) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    <span className="text-[9px] text-white/25 transition-colors duration-300 group-hover/link:text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Elsewhere</FooterHeading>
            <ul className="flex flex-col items-start gap-3">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className={linkClass}
                  >
                    {item.label}
                    <span className="text-[9px] text-white/30 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="flex flex-col items-start gap-3">
              <li>
                <a href={`mailto:${EMAIL}`} className={linkClass}>
                  {EMAIL}
                </a>
              </li>
              <li className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-white/60" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-white" />
                </span>
                Open for work
              </li>
            </ul>
          </div>

          <div className="col-span-2 flex flex-col justify-between gap-8 sm:col-span-2 lg:col-span-1">
            <p className="max-w-[34ch] font-mono text-[10px] uppercase leading-[1.9] tracking-[0.1em] text-white/45">
              Full stack developer crafting fast, clean, human interfaces — from
              first sketch to shipped product.
            </p>
            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: reduceMotion ? "auto" : "smooth",
                })
              }
              className="group inline-flex w-fit cursor-pointer items-center gap-3 border border-white/20 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                ↑
              </span>
            </button>
          </div>
        </motion.div>

        {/* Wordmark */}
        <div className="border-t border-white/15 pt-6">
          <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.24em] text-white/35">
            <span>Design {"//"} Code</span>
            <span>Portfolio 2026</span>
          </div>
          <div className="mt-4 overflow-hidden pb-2 sm:pb-3">
            <span
              aria-hidden="true"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
              className="block whitespace-nowrap text-[clamp(2.4rem,12.5vw,13rem)] font-black uppercase leading-[0.78] tracking-tighter text-transparent transition-colors duration-500 hover:text-white"
            >
              Atik Hasan Anik
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-2 border-t border-white/15 py-5 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Atik Hasan Anik</span>
          <span>All rights reserved</span>
          <span>Built with Next.js {"//"} Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
