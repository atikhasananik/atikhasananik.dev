"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------------------------- art ---------------------------------- */

const DegreeArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <path
      d="M60 22 L104 40 L60 58 L16 40 Z"
      fill="#ffffff"
      stroke="#0a0a0a"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M36 48 L36 64 C36 64 46 72 60 72 C74 72 84 64 84 64 L84 48"
      fill="none"
      stroke="#0a0a0a"
      strokeWidth="2"
    />
    <path d="M104 40 L104 60" stroke="#71717a" strokeWidth="1.5" />
    <circle cx="104" cy="63" r="2.6" fill="#0a0a0a" />
    <g fill="#e4e4e7">
      <rect x="16" y="82" width="40" height="3" />
      <rect x="16" y="88" width="28" height="3" />
    </g>
  </svg>
);

const TranscriptArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="28" y="8" width="64" height="84" fill="#ffffff" stroke="#27272a" strokeWidth="1" />
    <g fill="#a1a1aa">
      <rect x="36" y="17" width="30" height="3" />
      <rect x="36" y="24" width="48" height="2" fill="#e4e4e7" />
      <rect x="36" y="29" width="42" height="2" fill="#e4e4e7" />
      <rect x="36" y="34" width="46" height="2" fill="#e4e4e7" />
      <rect x="36" y="41" width="22" height="2" fill="#e4e4e7" />
      <rect x="64" y="41" width="20" height="2" fill="#e4e4e7" />
      <rect x="36" y="46" width="26" height="2" fill="#e4e4e7" />
      <rect x="64" y="46" width="20" height="2" fill="#e4e4e7" />
      <rect x="36" y="51" width="18" height="2" fill="#e4e4e7" />
    </g>
    <circle cx="80" cy="73" r="10" fill="none" stroke="#27272a" strokeWidth="1" />
    <circle cx="80" cy="73" r="6.5" fill="none" stroke="#a1a1aa" strokeWidth="0.8" />
    <text
      x="80"
      y="75.5"
      textAnchor="middle"
      fontFamily="monospace"
      fontSize="6"
      fill="#27272a"
    >
      A+
    </text>
  </svg>
);

const CertificateArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="14" y="20" width="92" height="54" fill="#ffffff" stroke="#27272a" strokeWidth="1" />
    <rect x="22" y="28" width="24" height="16" fill="none" stroke="#a1a1aa" />
    <g fill="#d4d4d8">
      <rect x="54" y="28" width="42" height="3" />
      <rect x="54" y="35" width="34" height="3" fill="#e4e4e7" />
      <rect x="54" y="42" width="38" height="3" fill="#e4e4e7" />
    </g>
    <rect x="22" y="54" width="76" height="1" fill="#e4e4e7" />
    <rect x="22" y="60" width="26" height="3" fill="#a1a1aa" />
    <circle cx="84" cy="62" r="6" fill="#0a0a0a" />
    <path d="M81 67 L78 80 L84 76 L90 80 L87 67" fill="#0a0a0a" />
  </svg>
);

export type EducationArt = "degree" | "transcript" | "certificate";

export type Education = {
  index: string;
  title: string;
  version: string;
  stats: string[];
  meta?: string;
  art: EducationArt;
};

const artByKey: Record<EducationArt, ReactNode> = {
  degree: <DegreeArt />,
  transcript: <TranscriptArt />,
  certificate: <CertificateArt />,
};

/* --------------------------------- card ---------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

type EducationCardProps = {
  education: Education;
  index?: number;
};

const EducationCard = ({ education, index = 0 }: EducationCardProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE, delay: index * 0.09 }}
      className="relative z-10"
    >
      <div className="group relative flex h-full flex-col border-heavy bg-primary p-4 pt-8 transition-[transform,box-shadow] duration-300 ease-out motion-safe:hover:-translate-x-1.5 motion-safe:hover:-translate-y-1.5 motion-safe:hover:shadow-[10px_10px_0_0_#0a0a0a] sm:p-6 sm:pt-10">
        <span className="absolute -top-4 left-4 flex h-8 min-w-8 items-center justify-center border border-black bg-white px-1.5 text-sm font-black leading-none text-black transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-black group-hover:text-white sm:left-6">
          {education.index}
        </span>

        <h2 className="text-[1.75rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl xl:text-6xl">
          {education.title} {"//"} {education.version}
        </h2>

        <div className="mt-5 flex flex-1 items-start gap-5 sm:mt-7 sm:gap-6">
          <ul className="font-mono text-[10px] font-semibold uppercase leading-[1.9] tracking-tight sm:text-[11px] xl:text-sm">
            {education.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>

          <div className="ml-auto aspect-[6/5] w-[36%] max-w-36 shrink-0 overflow-hidden border border-black">
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
              {artByKey[education.art]}
            </div>
          </div>
        </div>

        {education.meta && (
          <p className="mt-6 border-t-2 border-black pt-3 font-mono text-[9px] uppercase leading-relaxed text-secondary sm:text-[10px]">
            {education.meta}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default EducationCard;
