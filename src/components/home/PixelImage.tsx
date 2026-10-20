"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion, useScroll, useSpring } from "framer-motion";

type PixelImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const TILE = 16;

type Tile = {
  x: number;
  y: number;
  w: number;
  h: number;
  seedA: number;
  seedB: number;
  seedC: number;
  seedD: number;
};

/**
 * Hero image rendered on a canvas so it can shatter into tiles as the
 * page scrolls. At rest (scroll 0) it looks like a normal image; as you
 * scroll, tiles drift apart, shrink and fade — pixel by pixel.
 */
const PixelImage = ({ src, alt, className }: PixelImageProps) => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  const { scrollY } = useScroll();
  const smoothScroll = useSpring(scrollY, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let image: HTMLImageElement | null = null;
    let tiles: Tile[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const build = () => {
      const rect = container.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      const cols = Math.ceil(width / TILE);
      const rows = Math.ceil(height / TILE);
      tiles = [];

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          tiles.push({
            x: col * TILE,
            y: row * TILE,
            w: Math.min(TILE, width - col * TILE),
            h: Math.min(TILE, height - row * TILE),
            seedA: Math.random(),
            seedB: Math.random(),
            seedC: Math.random(),
            seedD: Math.random(),
          });
        }
      }
    };

    const draw = (scroll: number) => {
      if (!image) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // 0 at the top of the page, 1 after roughly one viewport of scrolling.
      const viewport = typeof window === "undefined" ? 1 : window.innerHeight;
      const raw = scroll / Math.max(1, viewport * 0.9);
      const progress = Math.min(1, Math.max(0, (raw - 0.06) / 0.9));

      const sourceW = image.naturalWidth;
      const sourceH = image.naturalHeight;

      for (const tile of tiles) {
        // Random stagger: each tile starts breaking at a slightly different
        // scroll position, so the image dissolves piece by piece.
        const local =
          reduceMotion || progress <= 0
            ? 0
            : Math.min(1, Math.max(0, (progress - tile.seedA * 0.4) / 0.6));

        if (local >= 1) continue;

        const scale = 1 - local * 0.55;
        const driftX = (tile.seedB - 0.5) * 220 * local;
        const driftY =
          -tile.seedC * 150 * local + tile.seedD * 280 * local * local;

        const destW = tile.w * scale;
        const destH = tile.h * scale;
        const centerX = tile.x + tile.w / 2 + driftX;
        const centerY = tile.y + tile.h / 2 + driftY;

        ctx.globalAlpha = 1 - local;

        ctx.drawImage(
          image,
          (tile.x / width) * sourceW,
          (tile.y / height) * sourceH,
          (tile.w / width) * sourceW,
          (tile.h / height) * sourceH,
          centerX - destW / 2,
          centerY - destH / 2,
          destW,
          destH,
        );
      }

      ctx.globalAlpha = 1;
    };

    const ro = new ResizeObserver(() => {
      build();
      draw(smoothScroll.get());
    });
    ro.observe(container);

    const unsubscribe = smoothScroll.on("change", draw);

    const img = new window.Image();
    image = img;
    img.decoding = "async";
    img.onload = () => {
      setAspectRatio(img.naturalWidth / img.naturalHeight);
      build();
      draw(smoothScroll.get());
    };
    img.src = src;

    return () => {
      ro.disconnect();
      unsubscribe();
      img.onload = null;
      image = null;
    };
  }, [src, smoothScroll, reduceMotion]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={alt}
      style={{ aspectRatio }}
      className={`relative ${className ?? ""}`}
    >
      <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />
    </div>
  );
};

export default PixelImage;
