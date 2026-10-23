"use client";

import { useEffect, useState } from "react";

export default function ScrollKunai() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
        setScrollProgress(progress);
        setVisible(window.scrollY > 150);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  // Kunai rotation based on scroll depth
  const kunaiRotation = -45 + (scrollProgress / 100) * 90;

  return (
    <aside
      aria-label="Navigasi cepat ke atas"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-1.5 select-none"
      style={{ filter: "drop-shadow(0 0 14px rgba(249, 115, 22, 0.28))" }}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0d0d11]/95 border border-[#22222a] hover:border-orange-500 hover:bg-orange-950/40 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-label="Kembali ke bagian atas halaman"
        title="Kembali ke atas"
      >
        {/* Dynamic spinning chakra background ring */}
        <div
          className="absolute inset-0 rounded-xl border border-orange-500/25 group-hover:border-orange-500/70 transition"
          style={{
            transform: `rotate(${scrollProgress * 3.6}deg)`,
            transition: "transform 0.1s linear",
          }}
        />

        {/* Cyber Kunai SVG with scroll-reactive tilt */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-150"
          style={{ transform: `rotate(${kunaiRotation}deg)` }}
          aria-hidden="true"
        >
          {/* Kunai Blade */}
          <path
            d="M24 4L28 18H20L24 4Z"
            fill="#f97316"
            className="group-hover:fill-orange-400 transition"
          />
          <path
            d="M24 4L26 18H24V4Z"
            fill="#ea580c"
          />
          {/* Kunai Blade Body */}
          <path
            d="M20 18L22 28H26L28 18H20Z"
            fill="#eab308"
          />
          {/* Handle */}
          <rect x="23" y="28" width="2" height="10" fill="#a1a1aa" />
          <line x1="22" y1="30" x2="26" y2="30" stroke="#ea580c" strokeWidth="1" />
          <line x1="22" y1="33" x2="26" y2="33" stroke="#ea580c" strokeWidth="1" />
          <line x1="22" y1="36" x2="26" y2="36" stroke="#ea580c" strokeWidth="1" />
          {/* Ring Pommel */}
          <circle cx="24" cy="42" r="3.5" stroke="#a1a1aa" strokeWidth="2" fill="none" />
        </svg>

        {/* Glowing chakra beacon dot */}
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-500 animate-ping" />
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-orange-400" />
      </button>

      {/* Telemetry scroll depth readout */}
      <div className="px-2 py-0.5 rounded-md bg-[#0d0d11]/90 border border-[#22222a] text-[10px] font-mono text-orange-400 font-semibold tracking-wider">
        {Math.round(scrollProgress)}%
      </div>
    </aside>
  );
}
