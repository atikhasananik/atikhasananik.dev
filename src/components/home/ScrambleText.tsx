"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>[]{}#*+=_█░▒▓";

type ScrambleTextProps = {
  text: string;
  className?: string;
  /** How long the decode takes, in ms. */
  duration?: number;
  /** How often the scrambled tail is re-rolled, in ms. */
  tick?: number;
};

/**
 * Decodes on hover: the leading characters lock in one by one while the
 * rest flicker through terminal glyphs. The static text keeps its layout,
 * so headings never jump — only the overlay animates.
 */
const ScrambleText = ({
  text,
  className,
  duration = 850,
  tick = 45,
}: ScrambleTextProps) => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [output, setOutput] = useState(text);
  const timer = useRef<number | null>(null);
  const startedAt = useRef(0);

  const clearTimer = useCallback(() => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => clearTimer, [clearTimer]);

  const reset = useCallback(() => {
    clearTimer();
    setActive(false);
    setOutput(text);
  }, [clearTimer, text]);

  const decode = useCallback(() => {
    if (reduceMotion || timer.current !== null || text.length === 0) return;

    startedAt.current = performance.now();
    setActive(true);

    timer.current = window.setInterval(() => {
      const progress = (performance.now() - startedAt.current) / duration;
      const locked = Math.ceil(progress * text.length);

      if (progress >= 1) {
        clearTimer();
        setOutput(text);
        setActive(false);
        return;
      }

      setOutput(
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < locked) return char;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
    }, tick);
  }, [clearTimer, duration, reduceMotion, text, tick]);

  return (
    <span
      className={`relative inline-block ${className ?? ""}`}
      onMouseEnter={decode}
      onTouchStart={decode}
      onMouseLeave={reset}
    >
      {/* Keeps the line box and width stable while the overlay animates. */}
      <span
        className={`transition-opacity duration-150 ${
          active ? "opacity-0" : "opacity-100"
        }`}
      >
        {text}
      </span>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 whitespace-nowrap transition-opacity duration-150 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {output}
      </span>
    </span>
  );
};

export default ScrambleText;
