"use client";

import { motion, useReducedMotion } from "framer-motion";
import TechnologyCard, { type Technology } from "./TechnologyCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const technology: Technology[] = [
  {
    index: "1",
    title: "FRONTEND",
    version: "06",
    stats: ["REACT. NEXT.JS //", "TYPESCRIPT. TAILWIND //", "6 YEARS SHIPPED //"],
    meta: "[STACK.01].FE // CORE: REACT. NEXT. TYPE: SPA. SSR. Focus: UI Systems.",
    art: "frontend",
  },
  {
    index: "2",
    title: "BACKEND",
    version: "05",
    stats: ["NODE. EXPRESS //", "POSTGRES. MONGO //", "REST + GRAPHQL //"],
    meta: "[STACK.02].BE // ARCH: API. DB: POSTGRES. Focus: Scale.",
    art: "backend",
  },
  {
    index: "03",
    title: "TOOLING",
    version: "08",
    stats: ["GIT. DOCKER. CI //", "FIGMA. VERCEL //", "8 DAILY DRIVERS //"],
    art: "tooling",
  },
];

/* --------------------------------- stats --------------------------------- */

const railStats = [
  { label: "Stacks:", value: "12" },
  { label: "Years:", value: "06" },
  { label: "Tools:", value: "08" },
];

/* ---------------------------------- page --------------------------------- */

const TechnologyPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen mt-16 bg-primary text-primary sm:mt-20">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        {/* 04 / TECHNOLOGY LOGS */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="shrink-0 lg:mx-15"
        >
          <h1 className="text-5xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl lg:text-7xl xl:text-8xl">
            04/ TECHNOLOGY LOGS
          </h1>
        </motion.header>

        {/* Stats: horizontal strip on mobile */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.12 }}
          className="mt-5 grid grid-cols-3 gap-2 bg-panel px-3 py-3 text-inverse sm:px-4 lg:hidden"
        >
          {railStats.map((stat) => (
            <div key={stat.label} className="flex min-w-0 flex-col gap-1">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </span>
              <span className="truncate text-[11px] font-bold uppercase">{stat.value}</span>
            </div>
          ))}
        </motion.div>

        <section className="relative mt-5 flex-1 sm:mt-6 lg:mx-15 lg:mt-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2">
            {technology.map((item, index) => (
              <TechnologyCard key={item.index} technology={item} index={index} />
            ))}
          </div>

          <motion.span
            aria-hidden="true"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            className="pointer-events-none absolute right-0 bottom-0 z-0 select-none text-[7rem] font-black leading-none tracking-tighter text-[#e8e8ea] sm:text-[10rem] lg:text-[13rem] xl:text-[15rem]"
          >
            06
          </motion.span>
        </section>
      </div>
    </div>
  );
};

export default TechnologyPage;
