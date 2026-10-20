"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type StatusAction = {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: "arrow" | "retry";
};

type StatusPageProps = {
  tag: string;
  code: string;
  status: string;
  title: string;
  description: string;
  log: { label: string; value: string }[];
  primary: StatusAction;
  secondary?: StatusAction;
  footnote: string;
};

const actionPrimary =
  "group inline-flex h-11 items-center justify-center gap-3 border-2 border-black bg-black px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const actionSecondary =
  "group inline-flex h-11 items-center justify-center gap-3 border-2 border-black bg-white px-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors duration-300 hover:bg-black hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const ActionIcon = ({ kind }: { kind: "arrow" | "retry" }) =>
  kind === "retry" ? (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      aria-hidden="true"
    >
      <path d="M20 11a8 8 0 1 1-2.3-5.7" />
      <path d="M20 4v7h-7" />
    </svg>
  ) : (
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

const Action = ({
  action,
  variant,
}: {
  action: StatusAction;
  variant: "primary" | "secondary";
}) => {
  const className = variant === "primary" ? actionPrimary : actionSecondary;
  const icon = (
    <span
      className={
        action.icon === "retry"
          ? "transition-transform duration-500 group-hover:rotate-180"
          : "transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
      }
    >
      <ActionIcon kind={action.icon ?? "arrow"} />
    </span>
  );

  if (action.href) {
    return (
      <Link href={action.href} className={className}>
        {action.label}
        {icon}
      </Link>
    );
  }

  return (
    <button type="button" onClick={action.onClick} className={className}>
      {action.label}
      {icon}
    </button>
  );
};

const SignalArt = () => (
  <svg viewBox="0 0 320 90" className="h-auto w-full" aria-hidden="true">
    <path
      d="M0 48h54l8-20 10 40 9-28 7 8h34"
      fill="none"
      stroke="#27272a"
      strokeWidth="2"
    />
    <path
      d="M156 48h164"
      fill="none"
      stroke="#a1a1aa"
      strokeWidth="2"
      strokeDasharray="4 6"
    />
    <path
      d="M134 36l22 24M156 36l-22 24"
      fill="none"
      stroke="#27272a"
      strokeWidth="2"
    />
    <text
      x="0"
      y="84"
      fill="#71717a"
      fontFamily="monospace"
      fontSize="7"
      letterSpacing="1.4"
    >
      SIGNAL LOST — TRACE HALTED
    </text>
  </svg>
);

const StatusPage = ({
  tag,
  code,
  status,
  title,
  description,
  log,
  primary,
  secondary,
  footnote,
}: StatusPageProps) => {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();

  return (
    <div className="relative mt-16 min-h-screen overflow-hidden bg-primary text-primary sm:mt-20">
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1680px] flex-col px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-10 lg:pt-8">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative z-10 shrink-0 lg:mx-15"
        >
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted sm:text-[10px]">
                {tag}
              </p>
              <h1 className="mt-2 text-[6rem] font-black uppercase leading-[0.78] tracking-tighter sm:text-[9rem] lg:text-[11rem]">
                {code}
                <span className="mt-3 block border-t-2 border-black pt-2 text-2xl leading-none tracking-tight sm:mt-4 sm:pt-3 sm:text-3xl lg:text-4xl">
                  {title}
                </span>
              </h1>
            </div>

            <span className="mb-2 flex items-center gap-2 border border-black px-2.5 py-1 sm:mb-4">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping bg-black opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 bg-black" />
              </span>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]">
                {status}
              </span>
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
            <p className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted">
              [RECOVERY.PROTOCOL]
            </p>
            <p className="mt-4 max-w-lg font-mono text-[11px] uppercase leading-relaxed tracking-wide text-secondary sm:text-xs">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action action={primary} variant="primary" />
              {secondary ? <Action action={secondary} variant="secondary" /> : null}
            </div>

            <p className="mt-8 font-mono text-[9px] uppercase leading-relaxed tracking-[0.18em] text-muted">
              {footnote}
            </p>
          </motion.section>

          <motion.aside
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
            className="flex flex-col border-heavy bg-white"
          >
            <div className="flex items-center justify-between gap-4 border-b-2 border-black px-4 py-3">
              <h2 className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em]">
                Trace.log
              </h2>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {code}
              </span>
            </div>

            <div className="flex-1 px-4 py-3 font-mono text-[10px] uppercase leading-relaxed tracking-wide text-secondary sm:text-[11px]">
              <div className="flex items-baseline justify-between gap-4 border-b border-black/10 py-2">
                <span className="shrink-0">Request.path</span>
                <span className="break-all text-right text-primary">{pathname || "/"}</span>
              </div>
              {log.map((line) => (
                <div
                  key={line.label}
                  className="flex items-baseline justify-between gap-4 border-b border-black/10 py-2 last:border-b-0"
                >
                  <span className="shrink-0">{line.label}</span>
                  <span className="break-all text-right text-primary">{line.value}</span>
                </div>
              ))}
            </div>

            <div className="border-t-2 border-black bg-secondary px-4 py-4">
              <SignalArt />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t-2 border-black px-4 py-3 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              <span>Dhaka // BD</span>
              <span>23.8103° N / 90.4125° E</span>
            </div>
          </motion.aside>
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 z-0 select-none text-[9rem] font-black leading-none tracking-tighter text-[#e8e8ea] sm:text-[15rem] lg:text-[21rem]"
        >
          {code}
        </span>
      </div>
    </div>
  );
};

export default StatusPage;
