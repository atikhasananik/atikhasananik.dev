"use client";

import { motion, useReducedMotion } from "framer-motion";
import EducationCard, { type Education } from "./EducationCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const education: Education[] = [
  {
    index: "1",
    title: "DIPLOMA IN",
    version: "CSE",
    stats: ["2023 — RUNNING //", "3 ACADEMIC YEARS //"],
    meta: "[DEGREE.01].CSE // MAJOR: SOFTWARE ENGINEERING. Focus: Web Systems.",
    art: "degree",
  },
  {
    index: "2",
    title: "SSC",
    version: "SCIENCE",
    stats: ["2021 — 2023 //", "GPA 3.94 / 5.00 //", "2 ACADEMIC YEARS //"],
    meta: "[DEGREE.02].SSC // GROUP: SCIENCE. Focus: Mathematics. Physics. ICT.",
    art: "transcript",
  },
  {
    index: "03",
    title: "CERTIFICATIONS",
    version: "05",
    stats: ["5 VERIFIED CERTS //", "3 ONLINE TRACKS //", "120+ HOURS //"],
    art: "certificate",
  },
];

/* --------------------------------- stats --------------------------------- */

const railStats = [
  { label: "Degrees:", value: "02" },
  { label: "Certs:", value: "05" },
  { label: "Hours:", value: "120+" },
];

/* ---------------------------------- page --------------------------------- */

const EducationPage = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen mt-16 bg-primary text-primary sm:mt-20">
      <div className="mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        {/* 03 / EDUCATION LOGS */}
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="shrink-0 lg:mx-15"
        >
          <h1 className="text-5xl font-black uppercase leading-[0.82] tracking-tighter sm:text-7xl lg:text-8xl">
            03/ EDUCATION LOGS
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
            {education.map((item, index) => (
              <EducationCard key={item.index} education={item} index={index} />
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
            3.94
          </motion.span>
        </section>
      </div>
    </div>
  );
};

export default EducationPage;
