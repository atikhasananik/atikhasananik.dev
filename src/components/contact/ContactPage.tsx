"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ContactToast from "./ContactToast";

const EASE = [0.22, 1, 0.36, 1] as const;

const EMAIL = "itsatikhasananik@gmail.com";

const channels = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  {
    label: "GitHub",
    value: "/atikhasananik",
    href: "https://github.com/atikhasananik",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "/in/atikhasananik",
    href: "https://www.linkedin.com/in/atikhasananik/",
    external: true,
  },
  {
    label: "Facebook",
    value: "/atikhasananik",
    href: "https://www.facebook.com/atikhasananik",
    external: true,
  },
  {
    label: "X",
    value: "@atikhasananik06",
    href: "https://x.com/atikhasananik06",
    external: true,
  },
];

const marqueeItems = [
  "Available for freelance",
  "Open to collaboration",
  "Full stack development",
  "Let's build something",
];

const ContactPage = () => {
  const reduceMotion = useReducedMotion();
  const [time, setTime] = useState("");
  const [toast, setToast] = useState<{ id: number } | null>(null);
  const toastSequence = useRef(0);

  useEffect(() => {
    if (!toast) return;

    const id = window.setTimeout(() => setToast(null), 6_000);
    return () => window.clearTimeout(id);
  }, [toast]);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: "Asia/Dhaka",
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    event.currentTarget.reset();
    toastSequence.current += 1;
    setToast({ id: toastSequence.current });
  };

  return (
    <div className="min-h-screen mt-16 bg-primary text-primary sm:mt-20">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        {/* 05 / CONTACT */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="shrink-0 lg:mx-15"
        >
          <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
            <h1 className="text-5xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl lg:text-8xl">
              05/ CONTACT
            </h1>
            <span className="mb-2 flex items-center gap-2 border border-black px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-black opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-black" />
              </span>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]">
                Available — Q4 2026
              </span>
            </span>
          </div>
        </motion.header>

        <div className="mt-8 grid flex-1 grid-cols-1 gap-8 lg:mx-15 lg:mt-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          {/* Pitch + channels */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl font-black uppercase leading-[0.88] tracking-tighter sm:text-5xl xl:text-6xl">
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-muted">worth shipping.</span>
            </h2>

            <p className="mt-6 max-w-md font-mono text-[11px] uppercase leading-relaxed tracking-wide text-secondary sm:text-xs">
              Freelance projects, product work or long-term collaboration. Send a
              brief and you&apos;ll get a reply within 24 hours.
            </p>

            {/* Channels */}
            <div className="mt-10 border-y-2 border-black">
              {channels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 border-b border-black/20 px-1 py-4 transition-colors duration-300 last:border-b-0 hover:bg-black hover:text-white"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#52525b] transition-colors duration-300 group-hover:text-white/60">
                    {channel.label}
                  </span>
                  <span className="flex items-center gap-3 text-sm font-black uppercase tracking-tight sm:text-base">
                    {channel.value}
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1">
                      ↗
                    </span>
                  </span>
                </a>
              ))}
              <div className="flex items-center justify-between gap-4 px-1 py-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                  Base
                </span>
                <span className="text-sm font-black uppercase tracking-tight sm:text-base">
                  Dhaka, Bangladesh
                </span>
              </div>
            </div>

            {/* Local time */}
            <div className="mt-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
              <span className="h-2 w-2 border border-black" />
              <span>
                Local {"//"} {time || "--:--"} BST
              </span>
            </div>
          </motion.div>

          {/* Message terminal */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.22 }}
            className="border-heavy bg-primary p-5 sm:p-7"
          >
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <span
                id="terminal-title"
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em]"
              >
                Message terminal
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-secondary">
                01 / 01
              </span>
            </div>

            <form
              aria-labelledby="terminal-title"
              onSubmit={handleSubmit}
              className="mt-6 flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary"
                >
                  01 / Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="YOUR NAME"
                  className="mt-2 w-full border-b border-black/40 bg-transparent pb-2 font-mono text-sm uppercase tracking-wide outline-none transition-colors placeholder:text-[#b4b4bb] focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary"
                >
                  02 / Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="YOU@STUDIO.COM"
                  className="mt-2 w-full border-b border-black/40 bg-transparent pb-2 font-mono text-sm uppercase tracking-wide outline-none transition-colors placeholder:text-[#b4b4bb] focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary"
                >
                  03 / Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="WHAT ARE WE BUILDING?"
                  className="mt-2 w-full resize-none border-b border-black/40 bg-transparent pb-2 font-mono text-sm uppercase tracking-wide outline-none transition-colors placeholder:text-[#b4b4bb] focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center justify-between border-2 border-black bg-black px-4 py-3.5 text-left text-white transition-[transform,box-shadow,background-color,color] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-white hover:text-black hover:shadow-[8px_8px_0_0_#0a0a0a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.22em]">
                  Transmit message
                </span>
                <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                No data stored
              </p>
            </form>
          </motion.div>
        </div>

        {/* Marquee */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          className="mt-10 overflow-hidden border-y-2 border-black py-3 lg:mx-15"
          aria-hidden="true"
        >
          <motion.div
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 26, ease: "linear", repeat: Infinity }}
            className="flex w-max"
          >
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0">
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-6 pr-6 font-mono text-[11px] font-semibold uppercase tracking-[0.24em]"
                  >
                    {item}
                    <span className="text-muted">{"//"}</span>
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ContactToast
        open={Boolean(toast)}
        toastKey={toast?.id ?? 0}
        onClose={() => setToast(null)}
      />
    </div>
  );
};

export default ContactPage;
