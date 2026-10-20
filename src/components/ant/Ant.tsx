"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Framer's useReducedMotion only samples the query once, so subscribe
// directly to react to OS-level preference changes.
const subscribeReducedMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

const getReducedMotion = () => window.matchMedia(REDUCED_MOTION).matches;
const getReducedMotionOnServer = () => false;

const RAD = Math.PI / 180;
const MARGIN = 26;
const FLEE_RADIUS = 72;
const FLEE_CLEAR = 120;
const WALK_SPEED = [46, 64] as const;
const SPRINT_SPEED = [300, 430] as const;

const rand = (min: number, max: number) => min + Math.random() * (max - min);

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

type Mode = "stand" | "walk" | "sprint";

const legs = [
  // Tripod A
  { d: "M42 21 L50 10 L60 6", origin: "42px 21px", alt: false },
  { d: "M37 28 L42 39 L48 45", origin: "37px 28px", alt: false },
  { d: "M30 20 L30 9 L28 3", origin: "30px 20px", alt: false },
  // Tripod B
  { d: "M42 27 L50 38 L60 42", origin: "42px 27px", alt: true },
  { d: "M37 20 L42 9 L48 3", origin: "37px 20px", alt: true },
  { d: "M30 28 L30 39 L28 45", origin: "30px 28px", alt: true },
] as const;

/**
 * A tiny monochrome ant that lives above the page, wanders between random
 * waypoints and bolts away when the pointer gets close. It never captures
 * clicks and respects reduced-motion preferences.
 */
const Ant = () => {
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );

  const x = useMotionValue(160);
  const y = useMotionValue(240);
  const rotate = useMotionValue(0);
  const [mode, setMode] = useState<Mode>("stand");
  const [ready, setReady] = useState(false);

  const modeRef = useRef<Mode>("stand");
  const modeUntil = useRef(0);
  const heading = useRef(0);
  const speed = useRef(54);
  const target = useRef({ x: 160, y: 240 });
  const pointer = useRef({ x: -9999, y: -9999, at: -9999 });
  const bounds = useRef({ w: 1200, h: 800 });
  const spawned = useRef(false);

  const changeMode = (next: Mode) => {
    if (modeRef.current === next) return;
    modeRef.current = next;
    setMode(next);
  };

  const startRoute = (now: number) => {
    const { w, h } = bounds.current;
    const px = x.get();
    const py = y.get();

    let nextX = px;
    let nextY = py;

    // Pick a waypoint that is actually worth walking to.
    for (let attempt = 0; attempt < 8; attempt += 1) {
      const angle = rand(0, Math.PI * 2);
      const distance = rand(150, Math.max(180, Math.min(w, h) * 0.55));
      nextX = clamp(px + Math.cos(angle) * distance, MARGIN, w - MARGIN);
      nextY = clamp(py + Math.sin(angle) * distance, MARGIN, h - MARGIN);

      if (Math.hypot(nextX - px, nextY - py) > 110) break;
    }

    target.current = { x: nextX, y: nextY };

    if (Math.random() < 0.18) {
      changeMode("sprint");
      speed.current = rand(...SPRINT_SPEED);
      modeUntil.current = now + rand(550, 1200);
    } else {
      changeMode("walk");
      speed.current = rand(...WALK_SPEED);
      modeUntil.current = now + rand(3600, 8000);
    }
  };

  useEffect(() => {
    bounds.current = { w: window.innerWidth, h: window.innerHeight };

    const spawnX = rand(
      window.innerWidth * 0.15,
      window.innerWidth * 0.85,
    );
    const spawnY = rand(
      window.innerHeight * 0.18,
      window.innerHeight * 0.8,
    );

    x.set(spawnX);
    y.set(spawnY);
    target.current = { x: spawnX, y: spawnY };
    modeUntil.current = performance.now() + 2200;
    spawned.current = true;

    // Let the first paint place the ant before fading it in.
    const reveal = requestAnimationFrame(() => setReady(true));

    const onResize = () => {
      const next = { w: window.innerWidth, h: window.innerHeight };
      bounds.current = next;
      x.set(clamp(x.get(), MARGIN, next.w - MARGIN));
      y.set(clamp(y.get(), MARGIN, next.h - MARGIN));
      target.current = {
        x: clamp(target.current.x, MARGIN, next.w - MARGIN),
        y: clamp(target.current.y, MARGIN, next.h - MARGIN),
      };
    };

    const onPointer = (event: PointerEvent) => {
      pointer.current = {
        x: event.clientX,
        y: event.clientY,
        at: performance.now(),
      };
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });

    return () => {
      cancelAnimationFrame(reveal);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [x, y]);

  useAnimationFrame((_time, delta) => {
    if (reduceMotion || !spawned.current) return;

    const dt = Math.min(delta, 48) / 1000;
    const now = performance.now();
    const { w, h } = bounds.current;

    const px = x.get();
    const py = y.get();
    const cursor = pointer.current;
    const pointerFresh = now - cursor.at < 1400;
    const cursorDistance = Math.hypot(px - cursor.x, py - cursor.y);
    const startled = pointerFresh && cursorDistance < FLEE_RADIUS;

    if (startled) {
      if (modeRef.current !== "sprint") {
        changeMode("sprint");
        speed.current = rand(...SPRINT_SPEED);
      }

      // Keep re-aiming directly away from the pointer while it is close.
      const length = Math.max(1, cursorDistance);
      target.current = {
        x: clamp(px + ((px - cursor.x) / length) * 260, MARGIN, w - MARGIN),
        y: clamp(py + ((py - cursor.y) / length) * 260, MARGIN, h - MARGIN),
      };
      modeUntil.current = now + 650;
    } else {
      const current = modeRef.current;

      if (current === "stand" && now >= modeUntil.current) {
        startRoute(now);
      } else if (
        current === "walk" &&
        (now >= modeUntil.current ||
          Math.hypot(target.current.x - px, target.current.y - py) < 7)
      ) {
        changeMode("stand");
        modeUntil.current = now + rand(500, 2400);
      } else if (
        current === "sprint" &&
        (now >= modeUntil.current ||
          (pointerFresh && cursorDistance > FLEE_CLEAR) ||
          Math.hypot(target.current.x - px, target.current.y - py) < 8)
      ) {
        changeMode("stand");
        modeUntil.current = now + rand(350, 900);
      }
    }

    if (modeRef.current === "stand") return;

    const dx = target.current.x - px;
    const dy = target.current.y - py;
    const distance = Math.hypot(dx, dy);
    if (distance < 1) return;

    const desired = Math.atan2(dy, dx) / RAD;
    const diff = ((desired - heading.current + 540) % 360) - 180;
    const maxTurn = (modeRef.current === "sprint" ? 520 : 240) * dt;
    heading.current += clamp(diff, -maxTurn, maxTurn);
    rotate.set(heading.current);

    const step = speed.current * dt;
    x.set(
      clamp(
        px + Math.cos(heading.current * RAD) * step,
        MARGIN,
        w - MARGIN,
      ),
    );
    y.set(
      clamp(
        py + Math.sin(heading.current * RAD) * step,
        MARGIN,
        h - MARGIN,
      ),
    );
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-40 -mt-2 -ml-3 text-white mix-blend-difference will-change-transform"
      style={{ x, y, rotate }}
      animate={{ opacity: ready ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        className={`ant ant--${mode}`}
        width="24"
        height="16"
        viewBox="0 0 72 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="currentColor">
          <ellipse cx="16" cy="24" rx="13" ry="9.5" />
          <ellipse cx="37" cy="24" rx="9" ry="7" />
          <ellipse cx="55" cy="24" rx="8" ry="6.8" />
        </g>

        <g
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        >
          {legs.map((leg) => (
            <path
              key={leg.d}
              d={leg.d}
              className={`ant-leg ${leg.alt ? "ant-leg--alt" : ""}`}
              style={{ transformOrigin: leg.origin }}
            />
          ))}

          <path
            d="M60 21 L70 12"
            className="ant-antenna"
            style={{ transformOrigin: "60px 21px" }}
          />
          <path
            d="M60 27 L70 36"
            className="ant-antenna"
            style={{ transformOrigin: "60px 27px" }}
          />

          <path d="M62 22 L68 20" strokeWidth="1.8" />
          <path d="M62 26 L68 28" strokeWidth="1.8" />
        </g>
      </svg>
    </motion.div>
  );
};

export default Ant;
