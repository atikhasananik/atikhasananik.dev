"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

type ContactToastProps = {
  open: boolean;
  /** Changes on every submit so a second submit replays the entrance. */
  toastKey: number;
  onClose: () => void;
};

const ContactToast = ({ open, toastKey, onClose }: ContactToastProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="pointer-events-none fixed inset-x-4 bottom-5 z-[120] flex justify-end sm:inset-x-auto sm:right-6 sm:bottom-6"
    >
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key={toastKey}
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="pointer-events-auto w-full border-2 border-black bg-black p-4 text-white shadow-[6px_6px_0_0_#0a0a0a] sm:w-[360px]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/35">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    aria-hidden="true"
                  >
                    <path d="M4 12.5 9.5 18 20 6.5" />
                  </svg>
                </span>

                <div>
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                    Transmission {"//"} Ready
                  </p>
                  <p className="mt-1 text-base font-black uppercase leading-tight tracking-tight">
                    Message ready
                  </p>
                  <p className="mt-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.08em] text-white/65">
                    Thanks for reaching out. I&apos;ll reply within 24 hours.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Dismiss notification"
                className="-mr-1 -mt-1 flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center text-white/60 transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M6 6 18 18M18 6 6 18" />
                </svg>
              </button>
            </div>

            <div className="mt-3 h-px w-full bg-white/20" />
            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
              Auto-dismiss {"//"} 06s
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactToast;
