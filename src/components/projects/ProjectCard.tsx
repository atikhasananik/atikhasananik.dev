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

const NewsArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="10" y="9" width="100" height="82" fill="#ffffff" stroke="#27272a" strokeWidth="1.2" />
    <text
      x="60"
      y="22"
      textAnchor="middle"
      fontFamily="monospace"
      fontSize="6"
      fontWeight="700"
      letterSpacing="0.2"
      fill="#0a0a0a"
    >
      BANGLA NEWS 7
    </text>
    <line x1="15" y1="27" x2="105" y2="27" stroke="#27272a" strokeWidth="1" />
    <rect x="15" y="32" width="48" height="23" fill="#e4e4e7" stroke="#a1a1aa" />
    <g fill="#d4d4d8">
      <rect x="68" y="32" width="37" height="4" />
      <rect x="68" y="39" width="30" height="2.5" fill="#e4e4e7" />
      <rect x="68" y="44" width="34" height="2.5" fill="#e4e4e7" />
      <rect x="68" y="49" width="24" height="2.5" fill="#e4e4e7" />
    </g>
    <g fill="#a1a1aa">
      <rect x="15" y="61" width="26" height="3" />
      <rect x="15" y="68" width="26" height="2" fill="#e4e4e7" />
      <rect x="15" y="73" width="22" height="2" fill="#e4e4e7" />
      <rect x="47" y="61" width="26" height="3" />
      <rect x="47" y="68" width="26" height="2" fill="#e4e4e7" />
      <rect x="47" y="73" width="20" height="2" fill="#e4e4e7" />
      <rect x="79" y="61" width="26" height="3" />
      <rect x="79" y="68" width="26" height="2" fill="#e4e4e7" />
      <rect x="79" y="73" width="18" height="2" fill="#e4e4e7" />
    </g>
    <line x1="15" y1="81" x2="105" y2="81" stroke="#d4d4d8" />
    <rect x="15" y="84" width="90" height="2" fill="#e4e4e7" />
  </svg>
);

const FitnessArt = () => (
  <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden="true">
    <rect width="120" height="100" fill="#ffffff" />
    <rect x="22" y="12" width="76" height="76" fill="#ffffff" stroke="#27272a" strokeWidth="1.2" />
    <rect x="44" y="8" width="32" height="9" fill="#ffffff" stroke="#27272a" strokeWidth="1.2" />
    <g fill="#0a0a0a">
      <rect x="40" y="27" width="40" height="5" />
      <rect x="34" y="22" width="6" height="15" />
      <rect x="80" y="22" width="6" height="15" />
      <rect x="27" y="25" width="5" height="9" />
      <rect x="88" y="25" width="5" height="9" />
    </g>
    <g fill="none" stroke="#a1a1aa">
      <rect x="32" y="47" width="7" height="7" />
      <rect x="32" y="60" width="7" height="7" />
      <rect x="32" y="73" width="7" height="7" />
    </g>
    <path d="M34 50.5 L35.5 52 L38 49.5" fill="none" stroke="#27272a" strokeWidth="1" />
    <g fill="#d4d4d8">
      <rect x="45" y="49" width="42" height="3" />
      <rect x="45" y="62" width="34" height="3" fill="#e4e4e7" />
      <rect x="45" y="75" width="38" height="3" fill="#e4e4e7" />
    </g>
  </svg>
);

export type ProjectArt = "road" | "wireframe" | "schema" | "news" | "fitness";

export type Project = {
  index: string;
  title: string;
  version: string;
  stats: string[];
  meta?: string;
  art: ProjectArt;
  live?: string;
  repo?: string;
};

const artByKey: Record<ProjectArt, ReactNode> = {
  road: <NightRoadArt />,
  wireframe: <WireframeArt />,
  schema: <SchemaArt />,
  news: <NewsArt />,
  fitness: <FitnessArt />,
};

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

const LiveIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const actionClass =
  "flex h-8 w-8 items-center justify-center border border-black bg-white text-black transition-[background-color,color,transform] duration-300 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-safe:hover:-translate-y-0.5";

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

        {(project.meta || project.live || project.repo) && (
          <div className="mt-6 flex items-start justify-between gap-4 border-t-2 border-black pt-3">
            {project.meta ? (
              <p className="min-w-0 font-mono text-[9px] uppercase leading-relaxed text-secondary sm:text-[10px]">
                {project.meta}
              </p>
            ) : (
              <span />
            )}

            {(project.live || project.repo) && (
              <div className="flex shrink-0 items-center gap-2">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    title="View source on GitHub"
                    className={actionClass}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    title="Open live site"
                    className={actionClass}
                  >
                    <LiveIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
