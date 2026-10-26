"use client";

import { useEffect, useState } from "react";

export default function SideNinjaScrollRails() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          const currentY = window.scrollY;
          if (total > 0) {
            const progress = Math.min(100, Math.max(0, (currentY / total) * 100));
            setScrollProgress(progress);
          }
          setIsScrollingDown(currentY > lastScrollY);
          setLastScrollY(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Position along the rail from 8% to 92% of the viewport height
  const topPercent = 8 + scrollProgress * 0.84;

  return (
    <>
      {/* ============================================================== */}
      {/* 1. LEFT SIDE RAIL: GLIDING SPINNING SHURIKEN (Desktop Only)     */}
      {/* ============================================================== */}
      <div
        className="hidden xl:block fixed left-6 top-28 bottom-28 w-10 pointer-events-none z-30 select-none"
        aria-hidden="true"
      >
        {/* Subtle Vertical Chakra Tether Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />

        {/* Dynamic Shuriken Moving Along the Rail */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 transition-all duration-150 ease-out"
          style={{ top: `${topPercent}%` }}
        >
          {/* Glowing Chakra Aura Halo */}
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md scale-125" />

          {/* 4-Point Ninja Shuriken SVG (Constantly spinning) */}
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 animate-shuriken-spin"
            style={{ filter: "drop-shadow(0 0 8px rgba(249, 115, 22, 0.4))" }}
          >
            {/* 4 Shuriken Curved Blades */}
            <path
              d="M20 4 C 20 12 12 20 4 20 C 12 20 20 28 20 36 C 20 28 28 20 36 20 C 28 20 20 12 20 4 Z"
              fill="#ea580c"
            />
            <path
              d="M20 7 C 20 14 14 20 7 20 C 14 20 20 26 20 33 C 20 26 26 20 33 20 C 26 20 20 14 20 7 Z"
              fill="#f97316"
            />
            {/* Center Ring Hole */}
            <circle cx="20" cy="20" r="3.5" fill="#070709" stroke="#ea580c" strokeWidth="1.5" />
          </svg>

          {/* Vertical Progress Tag */}
          <span className="text-[9px] font-mono font-bold text-orange-400/70 tracking-widest uppercase mt-0.5">
            SCROLL
          </span>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. RIGHT SIDE RAIL: DYNAMIC TRAVELING KUNAI (Desktop Only)     */}
      {/* ============================================================== */}
      <div
        className="hidden xl:block fixed right-6 top-28 bottom-28 w-12 pointer-events-none z-30 select-none"
        aria-hidden="true"
      >
        {/* Subtle Vertical Chakra Tether Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />

        {/* Dynamic Kunai Gliding Along the Rail */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 transition-all duration-150 ease-out"
          style={{ top: `${topPercent}%` }}
        >
          {/* Glowing Aura */}
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-md scale-150" />

          {/* Kunai SVG (Tilts based on scroll direction) */}
          <svg
            viewBox="0 0 32 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-12 transition-transform duration-200"
            style={{
              transform: isScrollingDown ? "rotate(0deg)" : "rotate(180deg)",
              filter: "drop-shadow(0 0 10px rgba(249, 115, 22, 0.45))",
            }}
          >
            {/* Kunai Blade Tip & Edges */}
            <path d="M16 62 L22 42 L10 42 Z" fill="#f97316" />
            <path d="M16 62 L16 42 L10 42 Z" fill="#ea580c" />
            {/* Blade Body */}
            <path d="M10 42 L12 26 L20 26 L22 42 Z" fill="#f59e0b" />
            {/* Grip Wrap */}
            <rect x="14" y="12" width="4" height="14" fill="#a1a1aa" />
            <line x1="13" y1="15" x2="19" y2="15" stroke="#ea580c" strokeWidth="1" />
            <line x1="13" y1="19" x2="19" y2="19" stroke="#ea580c" strokeWidth="1" />
            <line x1="13" y1="23" x2="19" y2="23" stroke="#ea580c" strokeWidth="1" />
            {/* Ring Pommel */}
            <circle cx="16" cy="7" r="4.5" stroke="#a1a1aa" strokeWidth="2.5" fill="none" />
          </svg>

          {/* Depth Readout */}
          <div className="px-1.5 py-0.5 rounded bg-[#0d0d11]/90 border border-[#22222a] text-[9px] font-mono text-orange-400 font-semibold tracking-wider">
            {Math.round(scrollProgress)}%
          </div>
        </div>
      </div>
    </>
  );
}
