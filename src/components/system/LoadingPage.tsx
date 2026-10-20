"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  { label: "RESOLVE.ROUTE", state: "OK" },
  { label: "FETCH.ASSETS", state: "RUN" },
  { label: "HYDRATE.VIEW", state: "WAIT" },
];

const LoadingPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="relative mt-16 min-h-screen overflow-hidden bg-primary text-primary sm:mt-20"
    >
      <span className="sr-only">Loading page</span>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 shrink-0 lg:mx-15"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted sm:text-[10px]">
                [SYS.LOAD] // ROUTE TRANSFER
              </p>
              <h1 className="mt-2 flex items-end text-[4.5rem] font-black uppercase leading-[0.78] tracking-tighter sm:text-[7rem] lg:text-[9.5rem] xl:text-[11rem]">
                LOADING
                <span
                  aria-hidden="true"
                  className="mb-2 ml-3 inline-block h-[0.62em] w-[0.09em] animate-pulse bg-black motion-reduce:animate-none"
                />
              </h1>
            </div>

            <span className="mb-2 border border-black px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] sm:mb-4">
              STANDBY
            </span>
          </div>
        </motion.header>

        <div className="relative z-10 mt-8 grid flex-1 grid-cols-1 gap-8 lg:mx-15 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.section
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <p className="max-w-lg font-mono text-[11px] uppercase leading-relaxed tracking-wide text-secondary sm:text-xs">
              Resolving the requested route and assembling the view. This usually
              takes less than a second.
            </p>

            <div className="mt-8">
              <div className="flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                <span>Transfer</span>
                <span>In progress</span>
              </div>

              <div className="mt-2 h-3 overflow-hidden border-2 border-black bg-white">
                {reduceMotion ? (
                  <div className="h-full w-1/3 bg-black" />
                ) : (
                  <motion.div
                    className="h-full w-2/5 bg-black"
                    animate={{ x: ["-100%", "250%"] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              <div className="mt-2 grid grid-cols-10 gap-1" aria-hidden="true">
                {Array.from({ length: 10 }).map((_, index) => (
                  <span key={index} className="h-1 bg-black/15" />
                ))}
              </div>
            </div>

            <div className="mt-8 border-y-2 border-black">
              {steps.map((step) => (
                <div
                  key={step.label}
                  className="flex items-center justify-between gap-4 border-b border-black/15 py-3 font-mono text-[10px] uppercase tracking-[0.16em] last:border-b-0 sm:text-[11px]"
                >
                  <span className="text-secondary">{">"} {step.label}</span>
                  <span
                    className={
                      step.state === "RUN"
                        ? "font-semibold text-primary"
                        : "text-muted"
                    }
                  >
                    {step.state}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              [SYS.LOAD] // DO NOT CLOSE THE TAB
            </p>
          </motion.section>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
            className="flex flex-col border-heavy bg-white"
          >
            <div className="flex items-center justify-between border-b-2 border-black px-4 py-3">
              <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]">
                Viewport.preview
              </h2>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                00
              </span>
            </div>

            <div className="relative flex-1 overflow-hidden bg-secondary p-4">
              <div className="h-24 border-2 border-black/20 bg-white sm:h-32" />
              <div className="mt-3 h-3 w-2/3 bg-black/15" />
              <div className="mt-2 h-3 w-1/2 bg-black/10" />

              <div className="mt-6 grid grid-cols-2 gap-3" aria-hidden="true">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-16 border border-black/20 bg-white sm:h-20"
                  />
                ))}
              </div>

              {!reduceMotion && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-black/10 to-transparent"
                  initial={{ top: "-20%" }}
                  animate={{ top: "110%" }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-black px-4 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              <span>Status: resolving</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse bg-black motion-reduce:animate-none" />
                WAIT
              </span>
            </div>
          </motion.aside>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 z-0 select-none text-[9rem] font-black leading-none tracking-tighter text-[#e8e8ea] sm:text-[15rem] lg:text-[21rem]"
        >
          00
        </span>
      </div>
    </div>
  );
};

export default LoadingPage;
