"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ---------------------------------- art ---------------------------------- */

const NightRoadArt = () => (
  <svg
    viewBox="0 0 120 100"
    preserveAspectRatio="xMidYMid slice"
    className="h-full w-full"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="night-road-sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#242424" />
        <stop offset="55%" stopColor="#0d0d0d" />
        <stop offset="100%" stopColor="#000000" />
      </linearGradient>
      <filter id="night-road-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="2.4" />
      </filter>
    </defs>
    <rect width="120" height="100" fill="url(#night-road-sky)" />
    <g filter="url(#night-road-glow)" strokeLinecap="round" fill="none">
      <path d="M58 44 L2 100" stroke="#f4f4f5" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M58 44 L118 100" stroke="#f4f4f5" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M58 44 L34 100" stroke="#f4f4f5" strokeOpacity="0.2" />
      <path d="M58 44 L84 100" stroke="#f4f4f5" strokeOpacity="0.2" />
      <path d="M58 44 L16 42" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2.5" />
      <path d="M58 44 L104 38" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2.5" />
    </g>
    <g fill="#ffffff">
      <rect x="57.2" y="50" width="1.6" height="6" opacity="0.85" />
      <rect x="57" y="62" width="2" height="8" opacity="0.7" />
      <rect x="56.6" y="76" width="2.8" height="12" opacity="0.55" />
    </g>
  </svg>
);

const WireframeArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="3.5" y="3.5" width="113" height="93" fill="none" stroke="#a1a1aa" />
    <line x1="3.5" y1="15" x2="116.5" y2="15" stroke="#a1a1aa" />
    <g fill="#a1a1aa">
      <circle cx="9" cy="9.2" r="1.2" />
      <circle cx="13.2" cy="9.2" r="1.2" />
      <circle cx="17.4" cy="9.2" r="1.2" />
    </g>
    <rect x="8" y="21" width="58" height="34" fill="#f4f4f5" stroke="#a1a1aa" />
    <line x1="8" y1="21" x2="66" y2="55" stroke="#a1a1aa" />
    <line x1="66" y1="21" x2="8" y2="55" stroke="#a1a1aa" />
    <g fill="#d4d4d8">
      <rect x="72" y="21" width="40" height="4" />
      <rect x="72" y="29" width="32" height="3" fill="#e4e4e7" />
      <rect x="72" y="35" width="36" height="3" fill="#e4e4e7" />
      <rect x="72" y="41" width="26" height="3" fill="#e4e4e7" />
      <rect x="72" y="49" width="18" height="6" fill="#a1a1aa" />
    </g>
    <line x1="8" y1="62" x2="112" y2="62" stroke="#e4e4e7" />
    <g fill="#e4e4e7">
      <rect x="8" y="69" width="30" height="20" />
      <rect x="44" y="69" width="30" height="20" />
      <rect x="80" y="69" width="30" height="20" />
    </g>
    <g fill="none" stroke="#a1a1aa">
      <rect x="8" y="69" width="30" height="20" />
      <rect x="44" y="69" width="30" height="20" />
      <rect x="80" y="69" width="30" height="20" />
    </g>
  </svg>
);

const SchemaArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <g fill="none" stroke="#a1a1aa" strokeWidth="0.8">
      <path d="M30 26 L60 26 L60 40" />
      <path d="M60 58 L60 68 L30 68 L30 78" />
      <path d="M72 26 L92 26 L92 40" />
      <path d="M92 58 L92 68 L72 68" />
    </g>
    <g>
      <rect x="6" y="16" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="48" y="16" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="80" y="16" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="6" y="40" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="48" y="40" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="80" y="40" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="18" y="78" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
      <rect x="60" y="78" width="24" height="12" fill="#ffffff" stroke="#27272a" strokeWidth="0.8" />
    </g>
    <g fill="#71717a" fontFamily="monospace" fontSize="3">
      <text x="9" y="23.5">USERS</text>
      <text x="51" y="23.5">ORDERS</text>
      <text x="83" y="23.5">ITEMS</text>
      <text x="9" y="47.5">AUTH</text>
      <text x="51" y="47.5">CART</text>
      <text x="83" y="47.5">PAY</text>
      <text x="21" y="85.5">LOGS</text>
      <text x="63" y="85.5">JOBS</text>
    </g>
  </svg>
);

export type ProjectArt = "road" | "wireframe" | "schema";

export type Project = {
  index: string;
  title: string;
  version: string;
  stats: string[];
  meta?: string;
  art: ProjectArt;
};

const artByKey: Record<ProjectArt, ReactNode> = {
  road: <NightRoadArt />,
  wireframe: <WireframeArt />,
  schema: <SchemaArt />,
};

/* --------------------------------- card ---------------------------------- */

const EASE = [0.22, 1, 0.36, 1] as const;

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
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
          {project.index}
        </span>

        <h2 className="text-[1.75rem] font-black uppercase leading-[0.9] tracking-tighter sm:text-5xl xl:text-6xl">
          {project.title} {"//"} {project.version}
        </h2>

        <div className="mt-5 flex flex-1 items-start gap-5 sm:mt-7 sm:gap-6">
          <ul className="font-mono text-[10px] font-semibold uppercase leading-[1.9] tracking-tight sm:text-[11px] xl:text-sm">
            {project.stats.map((stat) => (
              <li key={stat}>{stat}</li>
            ))}
          </ul>

          <div className="ml-auto aspect-[6/5] w-[36%] max-w-36 shrink-0 overflow-hidden border border-black">
            <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]">
              {artByKey[project.art]}
            </div>
          </div>
        </div>

        {project.meta && (
          <p className="mt-6 border-t-2 border-black pt-3 font-mono text-[9px] uppercase leading-relaxed text-secondary sm:text-[10px]">
            {project.meta}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
