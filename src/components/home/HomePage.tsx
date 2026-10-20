"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import heroImg from "../../assets/image/hero-img.webp";
import LegacyHero from "./LegacyHero";
import PixelImage from "./PixelImage";
import ScrambleText from "./ScrambleText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const railStats = [
  { label: "Projects", value: "10+" },
  { label: "Clients", value: "5+" },
  { label: "Experience", value: "10+" },
];

const readouts = ["85% commits", "10 live projects", "5+ satisfied clients"];

const HomePage = () => {
  const reduceMotion = useReducedMotion();

  const rise: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const slideIn: Variants = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: EASE },
    },
  };

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex min-h-svh flex-col overflow-hidden bg-primary text-primary xl:hidden"
      >
      <div className="flex flex-1  flex-col lg:flex-row">
        {/* Stats rail: dark vertical strip on desktop */}
        <motion.aside
          variants={slideIn}
          aria-label="Key metrics"
          className="hidden bg-panel lg:flex lg:w-20 lg:flex-col lg:justify-center lg:gap-16 xl:w-24"
        >
          {railStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-inverse [writing-mode:vertical-rl]"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </span>
              <span className="text-sm font-bold xl:text-base">{stat.value}</span>
            </div>
          ))}
        </motion.aside>

        <div className="flex flex-1 flex-col px-5 pb-8 pt-[4.5rem] sm:px-8 sm:pt-24 lg:px-10 lg:pb-8 lg:pt-24 xl:px-14">
          {/* Section index + meta */}
          <div className="flex items-start justify-between gap-6">
            <motion.div variants={rise} className="flex items-end gap-2.5">
              <span className="text-5xl font-bold leading-none tracking-tight sm:text-6xl lg:text-7xl">
                01
              </span>
              <span className="pb-0.5 text-3xl font-bold leading-none text-muted sm:text-4xl lg:text-5xl">
                / 05
              </span>
            </motion.div>

            <motion.p
              variants={rise}
              className="hidden text-right font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-secondary lg:block"
            >
              Portfolio {"//"} 2026
              <br />
              Dhaka, BD
            </motion.p>
          </div>

          {/* Hero: copy + portrait */}
          <div className="mt-5 grid flex-1 items-center gap-9 sm:mt-7 lg:mt-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-12">
            <motion.div variants={rise} className="flex flex-col">
              <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary">
                <ScrambleText text="[System.init] // Fullstack architect" />
              </p>

              <h1 className="mt-4 text-4xl font-black uppercase leading-[0.85] tracking-tighter sm:text-6xl md:text-7xl lg:text-[clamp(3rem,4.6vw,5.75rem)]">
                <ScrambleText text="Full Stack" />
                <br />
                <span className="text-muted">
                  <ScrambleText text="Web Developer" />
                </span>
              </h1>

              <div className="mt-6 flex items-center gap-3">
                <span className="font-dancing text-2xl leading-none text-secondary sm:text-3xl">
                  Yeah It&apos;s me!
                </span>
                <span className="h-px flex-1 bg-black/15" />
              </div>
              <p className="mt-2 text-xl font-black uppercase tracking-tight sm:text-2xl">
                <ScrambleText text="Atik Hasan Anik" />
              </p>

              <h2 className="mt-4 max-w-xl text-lg font-semibold leading-snug sm:text-xl lg:text-2xl">
                Turning Ideas Into Powerful Digital Experiences
              </h2>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-secondary sm:text-base">
                I create engaging, user-friendly websites and applications that
                help businesses stand out in the digital landscape.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-3 border-2 border-black bg-black px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-white hover:text-black"
                >
                  View latest projects
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center border-2 border-black px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-200 hover:bg-black hover:text-white"
                >
                  Contact
                </Link>
              </div>
            </motion.div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 z-0 hidden select-none text-[12rem] font-black leading-none tracking-tighter text-[#e8e8ea] lg:block xl:text-[14rem]"
              >
                100
              </span>

              <div className="relative z-10 w-full max-w-sm border-2 border-black bg-white p-2 lg:max-w-[clamp(280px,52vh,560px)]">
                <div className="flex items-center justify-between gap-3 border-b border-black/15 px-1 pb-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-secondary">
                  <span>Portrait {"//"} 2026</span>
                  <span className="flex items-center gap-1.5 text-primary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping bg-black/50" />
                      <span className="relative inline-flex h-1.5 w-1.5 bg-black" />
                    </span>
                    Online
                  </span>
                </div>

                <PixelImage
                  src={heroImg.src}
                  alt="Portrait of Atik Hasan Anik"
                  className="theme-media-filter mt-2 w-full"
                />
              </div>
            </motion.div>
          </div>

          {/* Live readouts */}
          <motion.div
            variants={rise}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-1.5 border-t-2 border-black pt-3 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]"
          >
            {readouts.map((readout) => (
              <span key={readout}>
                <ScrambleText text={readout} />{" "}
                <span className="text-muted">{"//"}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      </motion.div>

      <LegacyHero />
    </>
  );
};

export default HomePage;
