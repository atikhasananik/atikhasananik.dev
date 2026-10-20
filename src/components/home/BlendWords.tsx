"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const EASE = [0.22, 1, 0.36, 1] as const;

type BlendWordsProps = {
  text: string;
  className?: string;
  /** Delay before the words start moving, in seconds. */
  delay?: number;
  /** Use the scramble effect on hover, word by word. */
  scramble?: boolean;
};

/**
 * Splits a line into independent words. Each word blends with whatever is
 * behind it (white canvas, portrait, dark suit), so its color flips from
 * black to white without a text shadow or outline. The words are their own
 * motion elements, which keeps the blend working while they animate.
 */
const BlendWords = ({
  text,
  className,
  delay = 0.75,
  scramble = false,
}: BlendWordsProps) => {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: EASE,
              delay: reduceMotion ? 0 : delay,
            }}
            className="text-blend-invert inline-block"
          >
            {scramble ? <ScrambleText text={word} /> : word}
          </motion.span>
          {index < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </span>
  );
};

export default BlendWords;
