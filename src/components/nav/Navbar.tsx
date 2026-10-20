"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;
const EMAIL = "itsatikhasananik@gmail.com";

const links = [
  { label: "Project", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

const menuLinks = [{ label: "Home", href: "/" }, ...links];

const socials = [
  { label: "GitHub", href: "https://github.com/atikhasananik" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atikhasananik/" },
  { label: "Facebook", href: "https://www.facebook.com/atikhasananik" },
  { label: "X", href: "https://x.com/atikhasananik06" },
];

const Navbar = () => {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpen(false);

  // The XL collage hero has its own menu trigger; let it open this menu.
  useEffect(() => {
    const openMenu = () => setOpen(true);
    window.addEventListener("portfolio:open-menu", openMenu);

    return () => {
      window.removeEventListener("portfolio:open-menu", openMenu);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const menuItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: EASE },
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-100 mix-blend-difference"
      >
        <div className="flex items-center justify-end px-4 py-4 sm:px-10 sm:py-5">
          <ul className="flex items-center gap-4 text-sm font-semibold text-white md:gap-8 md:text-base">
            {links.map((link) => {
              const active = pathname === link.href;

              return (
                <li key={link.href} className="hidden sm:block">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block py-1 transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-white after:transition-[width] after:duration-300 ${
                      active
                        ? "text-white after:w-full"
                        : "text-white/55 after:w-0 hover:text-white hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}

            <li className="flex items-center">
              <Link
                href="/"
                aria-label="Home"
                aria-current={pathname === "/" ? "page" : undefined}
                className={`flex h-8 w-8 items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black ${
                  pathname === "/" ? "bg-white text-black" : ""
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 10.5 12 3l9 7.5" />
                  <path d="M5 9v12h14V9" />
                  <path d="M10 21v-6h4v6" />
                </svg>
              </Link>
            </li>

            <li>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-expanded={open}
                aria-controls="site-menu"
                aria-label="Open menu"
                className="flex h-8 w-8 cursor-pointer items-center justify-center transition-colors duration-300 hover:bg-white hover:text-black"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="site-menu"
            id="site-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[60] overflow-y-auto bg-[#0a0a0a] text-white"
          >
            <div className="mx-auto flex min-h-full w-full max-w-[1680px] flex-col px-4 pt-4 pb-6 sm:px-10 sm:pt-5 sm:pb-8">
              <div className="flex items-center justify-between gap-4">
                <Link
                  href="/"
                  onClick={close}
                  className="font-mono text-[9px] uppercase tracking-[0.24em] text-white/50 transition-colors duration-300 hover:text-white"
                >
                  Atik Hasan Anik {"//"} Portfolio
                </Link>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close menu"
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center border border-white/30 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="19" y1="5" x2="5" y2="19" />
                  </svg>
                </button>
              </div>

              <motion.nav
                initial={reduceMotion ? false : "hidden"}
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
                  },
                }}
                className="mt-12 flex flex-1 flex-col justify-center sm:mt-16"
              >
                {menuLinks.map((link, index) => {
                  const active = pathname === link.href;

                  return (
                    <motion.div key={link.href} variants={menuItem}>
                      <Link
                        href={link.href}
                        onClick={close}
                        aria-current={active ? "page" : undefined}
                        className="group flex items-center justify-between gap-4 border-b border-white/15 py-3 sm:py-4"
                      >
                        <span className="flex items-baseline gap-4 sm:gap-6">
                          <span className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={`text-4xl font-black uppercase leading-[0.9] tracking-tighter transition-[color,transform] duration-300 group-hover:translate-x-2 sm:text-6xl lg:text-7xl ${
                              active
                                ? "text-white"
                                : "text-white/55 group-hover:text-white"
                            }`}
                          >
                            {link.label}
                          </span>
                        </span>

                        {active ? (
                          <span
                            aria-hidden="true"
                            className="h-2 w-2 shrink-0 bg-white"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="text-xl text-white/30 transition-[color,transform] duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white sm:text-2xl"
                          >
                            ↗
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <div className="mt-10 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {EMAIL}
                </a>

                <div className="flex gap-6">
                  {socials.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors duration-300 hover:text-white"
                    >
                      {item.label} ↗
                    </a>
                  ))}
                </div>

                <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping bg-white/60" />
                    <span className="relative inline-flex h-1.5 w-1.5 bg-white" />
                  </span>
                  Open for work
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
