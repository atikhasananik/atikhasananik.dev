"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

const INTERACTIVE = "a, button, [role='button'], menu, [data-cursor-hover]";

const Cursor = () => {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Dot tracks the pointer tightly, ring trails behind with a soft spring.
  const dotX = useSpring(x, { stiffness: 900, damping: 45, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 45, mass: 0.3 });
  const ringX = useSpring(x, {
    stiffness: reduceMotion ? 900 : 260,
    damping: reduceMotion ? 45 : 28,
    mass: 0.6,
  });
  const ringY = useSpring(y, {
    stiffness: reduceMotion ? 900 : 260,
    damping: reduceMotion ? 45 : 28,
    mass: 0.6,
  });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("cursor-none");

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);

      const target = event.target;
      setHovering(
        target instanceof Element && target.closest(INTERACTIVE) !== null,
      );
    };

    const hide = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", hide);
    document.documentElement.addEventListener("pointerleave", hide);

    return () => {
      document.documentElement.classList.remove("cursor-none");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", hide);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, [x, y]);

  return (
    <>
      {/* Core dot */}
      <motion.div
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[140] -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
        style={{ x: dotX, y: dotY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Trailing ring that grows over interactive elements */}
      <motion.div
        aria-hidden="true"
        className="custom-cursor pointer-events-none fixed top-0 left-0 z-[140] -mt-4 -ml-4 h-8 w-8 rounded-full border border-white mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.75 : 1,
          borderWidth: hovering ? 1.5 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Cursor;
