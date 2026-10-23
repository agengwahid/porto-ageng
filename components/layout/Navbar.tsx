"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Skills", href: "#skills", code: "CODEX" },
  { label: "Projects", href: "#projects", code: "MISSIONS" },
  { label: "Experience", href: "#about", code: "CHRONICLES" },
  { label: "Certifications", href: "#certificates", code: "MASTERY" },
  { label: "Contact", href: "#contact", code: "HIRE" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#070709]/95 backdrop-blur-md border-b border-[#22222a] z-50 transition-colors">
      {/* CHAKRA SCROLL PROGRESS BAR WITH GLOWING TRAVELING MARKER */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-[#131318] overflow-visible">
        <div
          className="relative h-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Animated Glowing Marker at the Scroll Edge */}
          {scrollProgress > 1 && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3.5 h-3.5 rounded-full bg-orange-400 border border-white shadow-[0_0_12px_#f97316] flex items-center justify-center pointer-events-none">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* SHINOBI BRAND */}
        <a
          href="#"
          className="group flex items-center gap-3 text-zinc-100 font-semibold tracking-tight hover:text-orange-400 transition"
          aria-label="Ageng Wahid Portfolio Home"
        >
          <span className="w-9 h-9 rounded-xl bg-[#131318] border border-orange-500/50 flex items-center justify-center font-mono text-xs text-orange-400 font-bold group-hover:border-orange-400 group-hover:bg-orange-950/40 transition shadow-[0_0_15px_rgba(249,115,22,0.18)]">
            AW
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-orange-400 transition">
                Ageng Wahid
              </span>
              <span className="px-1.5 py-0.2 rounded bg-orange-950/60 border border-orange-700/50 text-[10px] font-mono text-orange-400 font-semibold tracking-wider">
                S.Kom
              </span>
            </div>
            <p className="text-[10px] font-mono text-zinc-400">BACKEND & CLOUD</p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 font-mono" aria-label="Main Navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-xs font-medium text-zinc-300 hover:text-orange-400 hover:bg-orange-950/20 rounded-lg transition duration-150 flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              <span className="text-[10px] text-orange-400/70 font-semibold">[{link.code}]</span>
            </a>
          ))}
        </nav>

        {/* HUD ACTIONS & RESUME TRIGGER */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-orange-300 bg-orange-950/40 border border-orange-500/50 hover:bg-orange-500 hover:text-zinc-950 rounded-lg transition duration-200 shadow-[0_0_14px_rgba(249,115,22,0.15)]"
          >
            <span>UNDUH RESUME</span>
            <span className="text-xs">📜</span>
          </a>
        </div>

        {/* MOBILE TOGGLE (Tap Target >= 48px) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl border border-[#22222a] bg-[#131318] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label={open ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE HUD MENU FLYOUT */}
      {open && (
        <div className="lg:hidden border-t border-[#22222a] bg-[#0d0d11] px-5 py-6 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="min-h-[48px] px-3.5 text-sm font-mono font-medium text-zinc-200 hover:text-orange-400 hover:bg-orange-950/30 rounded-xl transition flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs text-orange-400/80">[{link.code}]</span>
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-[#22222a]">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="min-h-[48px] flex items-center justify-center w-full py-3.5 text-sm font-mono font-semibold text-zinc-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-xl transition shadow-lg"
            >
              Unduh Curriculum Vitae (PDF) 📜
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


