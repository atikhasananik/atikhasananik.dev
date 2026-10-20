"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------------------------- art ---------------------------------- */

const FrontendArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="12" y="14" width="96" height="72" fill="#ffffff" stroke="#27272a" strokeWidth="1" />
    <line x1="12" y1="26" x2="108" y2="26" stroke="#a1a1aa" />
    <g fill="#a1a1aa">
      <circle cx="19" cy="20" r="1.4" />
      <circle cx="24" cy="20" r="1.4" />
      <circle cx="29" cy="20" r="1.4" />
    </g>
    <text
      x="60"
      y="52"
      textAnchor="middle"
      fontFamily="monospace"
      fontSize="14"
      fontWeight="bold"
      fill="#0a0a0a"
    >
      {"</>"}
    </text>
    <g fill="#e4e4e7">
      <rect x="22" y="60" width="40" height="2.5" />
      <rect x="22" y="66" width="52" height="2.5" />
      <rect x="22" y="72" width="30" height="2.5" />
    </g>
    <rect x="22" y="78" width="2" height="4" fill="#0a0a0a" />
  </svg>
);

const BackendArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <ellipse cx="60" cy="22" rx="26" ry="8" fill="#ffffff" stroke="#27272a" strokeWidth="1" />
    <path
      d="M34 22 V74 C34 78.4 45.6 82 60 82 C74.4 82 86 78.4 86 74 V22"
      fill="none"
      stroke="#27272a"
      strokeWidth="1"
    />
    <path
      d="M34 39 C34 43.4 45.6 47 60 47 C74.4 47 86 43.4 86 39"
      fill="none"
      stroke="#a1a1aa"
    />
    <path
      d="M34 56 C34 60.4 45.6 64 60 64 C74.4 64 86 60.4 86 56"
      fill="none"
      stroke="#a1a1aa"
    />
    <g fill="#e4e4e7">
      <rect x="44" y="30" width="32" height="2" />
      <rect x="44" y="49" width="22" height="2" />
      <rect x="44" y="66" width="28" height="2" />
    </g>
  </svg>
);

const ToolingArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <g stroke="#27272a" strokeWidth="4" strokeLinecap="round">
      <line x1="60" y1="22" x2="60" y2="31" />
      <line x1="60" y1="69" x2="60" y2="78" />
      <line x1="32" y1="50" x2="41" y2="50" />
      <line x1="79" y1="50" x2="88" y2="50" />
      <line x1="40" y1="30" x2="46" y2="36" />
      <line x1="74" y1="64" x2="80" y2="70" />
      <line x1="80" y1="30" x2="74" y2="36" />
      <line x1="46" y1="64" x2="40" y2="70" />
    </g>
    <circle cx="60" cy="50" r="19" fill="#ffffff" stroke="#27272a" strokeWidth="1.5" />
    <circle cx="60" cy="50" r="7" fill="none" stroke="#a1a1aa" strokeWidth="1.5" />
    <g fill="#e4e4e7">
      <rect x="16" y="88" width="24" height="3" />
      <rect x="46" y="88" width="16" height="3" />
      <rect x="68" y="88" width="34" height="3" />
    </g>
  </svg>
);

export type TechnologyArt = "frontend" | "backend" | "tooling";

export type Technology = {
  index: string;
  title: string;
  version: string;
  stats: string[];
  meta?: string;
  art: TechnologyArt;
};

const artByKey: Record<TechnologyArt, ReactNode> = {
  frontend: <FrontendArt />,
  backend: <BackendArt />,
  tooling: <ToolingArt />,
};

/* --------------------------------- card ---------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

type TechnologyCardProps = {
  technology: Technology;
  index?: number;
};

const TechnologyCard = ({ technology, index = 0 }: TechnologyCardProps) => {
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
          {technology.index}
        </span>

        <h2 className="text-[1.75rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl xl:text-6xl">
          {technology.title} {"//"} {technology.version}
        </h2>

        <div className="mt-5 flex flex-1 items-start gap-5 sm:mt-7 sm:gap-6">
          <ul className="font-mono text-[10px] font-semibold uppercase leading-[1.9] tracking-tight sm:text-[11px] xl:text-sm">
            {technology.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>

          <div className="ml-auto aspect-[6/5] w-[36%] max-w-36 shrink-0 overflow-hidden border border-black">
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
              {artByKey[technology.art]}
            </div>
          </div>
        </div>

        {technology.meta && (
          <p className="mt-6 border-t-2 border-black pt-3 font-mono text-[9px] uppercase leading-relaxed text-secondary sm:text-[10px]">
            {technology.meta}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default TechnologyCard;
