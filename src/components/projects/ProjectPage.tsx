"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const projects: Project[] = [
  {
    index: "01",
    title: "BAZARDOR",
    version: "MARKET",
    stats: ["PRICE TRACKING //", "MARKET COMPARE //", "MONGO + AUTH //"],
    meta: "[PROJECT.V1].MARKET // ARCH: APP ROUTER. DB: MONGODB. Stack: Next.js 16. React 19. Tailwind 4.",
    art: "wireframe",
    live: "https://a07-bazardor.vercel.app/",
    repo: "https://github.com/atikhasananik/a07-bazardor",
  },
  {
    index: "02",
    title: "BANGLA NEWS 7",
    version: "FEED",
    stats: ["LIVE NEWS FEED //", "NEWS API V2 //", "BENGALI-FIRST //"],
    meta: "[PROJECT.V2].NEWS // ARCH: APP ROUTER. FEED: NEWS API V2. Stack: Next.js 16. React 19. Tailwind 4.",
    art: "news",
    live: "https://banglanews7.vercel.app/",
    repo: "https://github.com/atikhasananik/banglanews7",
  },
  {
    index: "03",
    title: "FITLOG",
    version: "PLAN",
    stats: ["EXERCISE LIBRARY //", "5 WORKOUT LIMIT //", "SAVED PLANS //"],
    meta: "[PROJECT.V3].PLAN // ARCH: APP ROUTER. DATA: WORKOUT API. Stack: Next.js 16. React 19. Tailwind 4.",
    art: "fitness",
    live: "https://a06-fitlog.vercel.app/",
    repo: "https://github.com/atikhasananik/a06-fitlog",
  },
];

/* --------------------------------- stats --------------------------------- */

const railStats = [
  { label: "Projects:", value: "10+" },
  { label: "Commits:", value: "1.2k" },
  { label: "Stacks:", value: "React. Node. GraphQL." },
];

/* ---------------------------------- page --------------------------------- */

const ProjectPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen mt-16 bg-primary text-primary sm:mt-20">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        {/* 02 / PROJECT LOGS */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="shrink-0 lg:mx-15"
        >
          <h1 className="text-5xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl lg:text-8xl">
            02/ PROJECT LOGS
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
            {projects.map((project, index) => (
              <ProjectCard key={project.index} project={project} index={index} />
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
            100
          </motion.span>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
