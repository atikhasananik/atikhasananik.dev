"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import heroImg from "../../assets/image/hero-img.webp";
import BlendWords from "./BlendWords";
import PixelImage from "./PixelImage";
import ScrambleText from "./ScrambleText";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

/**
 * The original editorial collage hero, kept for XL screens.
 * Below XL the split hero in HomePage takes over.
 */
const LegacyHero = () => {
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

  const openMenu = () => {
    window.dispatchEvent(new Event("portfolio:open-menu"));
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative hidden min-h-screen flex-col overflow-hidden xl:block"
    >
      {/* Section index */}
      <motion.div
        variants={rise}
        className="flex items-end gap-3 px-5 pt-24 lg:absolute lg:top-[4.5rem] lg:left-10 lg:p-0"
      >
        <span className="text-6xl text-primary font-bold sm:text-7xl lg:text-9xl">01</span>
        <span className="text-5xl text-primary font-bold sm:text-6xl lg:text-8xl">/</span>
        <span className="text-5xl text-primary font-bold sm:text-6xl lg:text-8xl">05</span>
      </motion.div>

      <div className="flex flex-1 flex-col lg:h-screen lg:flex-row lg:items-end">
        {/* Stats: horizontal bar on mobile, vertical rail on desktop */}
        <motion.div
          variants={slideIn}
          className="relative order-2 w-full bg-panel py-4 lg:order-none lg:h-[80%] lg:w-35 lg:py-0"
        >
          <div className="flex flex-row items-center justify-around gap-4 lg:absolute lg:inset-0 lg:flex-col lg:justify-around lg:py-6">
            <div className="flex flex-col items-center text-inverse lg:[writing-mode:vertical-rl]">
              <span className="text-muted text-base font-bold lg:text-lg">Projects</span>
              <span className="text-lg font-bold lg:text-xl">10+</span>
            </div>
            <div className="flex flex-col items-center text-inverse lg:[writing-mode:vertical-rl]">
              <span className="text-muted text-base font-bold lg:text-lg">Clients</span>
              <span className="text-lg font-bold lg:text-xl">5+</span>
            </div>
            <div className="flex flex-col items-center text-inverse lg:[writing-mode:vertical-rl]">
              <span className="text-muted text-base font-bold lg:text-lg">Experience</span>
              <span className="text-lg font-bold lg:text-xl">10+</span>
            </div>
          </div>
        </motion.div>

        <div className="relative order-1 flex flex-1 flex-col lg:order-none lg:h-screen">
          {/* Hero headings */}
          <div className="flex flex-col gap-2 px-5 pt-10 lg:flex-row lg:items-center lg:justify-center lg:gap-5 lg:px-0 lg:pt-0">
            <motion.h1
              variants={rise}
              className="whitespace-nowrap text-4xl font-bold text-primary sm:text-6xl md:text-7xl lg:mt-80 lg:text-6xl xl:text-[clamp(4rem,6.2vw,6rem)]"
            >
              <ScrambleText text="FULL STACK" />
            </motion.h1>
            <motion.h1
              variants={rise}
              className="whitespace-nowrap text-4xl font-bold text-primary sm:text-6xl md:text-7xl lg:mt-40 lg:text-6xl xl:text-[clamp(4rem,6.2vw,6rem)]"
            >
              <ScrambleText text="WEB DEVELOPER" />
            </motion.h1>
          </div>

          {/* Hero image: full-bleed on mobile, full height on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
            className="mt-8 flex w-full justify-center lg:absolute lg:bottom-0 lg:mt-0"
          >
            <div className="relative flex w-full max-w-full justify-center lg:inline-flex lg:w-auto">
              <PixelImage
                src={heroImg.src}
                alt="Portrait of Atik Hasan Anik"
                className="theme-media-filter h-auto w-full lg:h-[95vh] lg:w-auto"
              />
            </div>
          </motion.div>

          {/* Name / tagline / intro: each word inverts against its backdrop */}
          <div className="relative mx-5 mt-8 lg:absolute lg:bottom-0 lg:mx-15 lg:mt-0 lg:max-w-[40%] [@media(max-height:880px)]:pb-4">
            <p className="text-2xl font-dancing sm:text-3xl lg:text-[clamp(1.5rem,4.4vh,3rem)]">
              <BlendWords text="Yeah It's me!" />
            </p>

            <div>
              <div className="font-bold">
                <h1 className="text-4xl font-black sm:text-5xl md:text-6xl lg:text-[clamp(2rem,4.2vw,4.5rem)]">
                  <BlendWords text="ATIK HASAN ANIK" scramble />
                </h1>
                <h2 className="mt-2 text-2xl sm:text-3xl lg:text-[clamp(1.25rem,3.4vh,2.25rem)]">
                  <BlendWords text="Turning Ideas Into Powerful Digital Experiences" />
                </h2>
              </div>
              <div className="mt-5 text-base font-semibold sm:text-lg lg:mt-[clamp(1.5rem,4vh,2.5rem)] lg:text-[clamp(0.95rem,1.9vh,1.25rem)]">
                <p>
                  <BlendWords text="I create engaging, user-friendly websites and applications that help businesses stand out in the digital landscape." />
                </p>
              </div>
            </div>

            {/* CTAs: left, directly under the intro copy */}
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                ease: EASE,
                delay: reduceMotion ? 0 : 0.75,
              }}
              className="mt-4 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 border-2 border-black bg-black px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Latest project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border-2 border-black bg-white px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact
              </Link>
            </motion.div>

            <p className="mt-8 text-6xl font-bold sm:text-7xl lg:mt-[clamp(1rem,3.5vh,2.75rem)] lg:text-[clamp(3.5rem,9vh,6rem)] [@media(max-height:880px)]:hidden">
              <BlendWords text="100" />
            </p>
          </div>

          {/* Live readouts */}
          <div className="mx-5 mt-10 space-y-2 text-2xl font-black uppercase sm:text-3xl lg:absolute lg:top-100 lg:right-10 lg:mx-0 lg:mt-0">
            <h3>
              <BlendWords text="85% COMMITS //" scramble />
            </h3>
            <h3>
              <BlendWords text="10 LIVE PROJECTS //" scramble />
            </h3>
            <h3>
              <BlendWords text="5+ SATISFIED CLIENTS //" scramble />
            </h3>
          </div>

          {/* Menu */}
          <motion.button
            variants={rise}
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            className="absolute right-5 bottom-5 flex cursor-pointer flex-col gap-2 p-2 lg:right-10 lg:bottom-10"
          >
            <svg
              width="40"
              height="40"
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
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default LegacyHero;
