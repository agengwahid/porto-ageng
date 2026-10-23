"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Ninjutsu Codex", href: "#skills", code: "SKILLS" },
  { label: "Missions", href: "#projects", code: "PROJECTS" },
  { label: "Shinobi Way", href: "#about", code: "CHRONICLES" },
  { label: "Mastery Scrolls", href: "#certificates", code: "CERTS" },
  { label: "Summon Kunai", href: "#contact", code: "CONTACT" },
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
    <header className="fixed top-0 left-0 w-full bg-[#090a0f]/90 backdrop-blur-md border-b border-[#262b3a] z-50 transition-colors">
      {/* CHAKRA SCROLL PROGRESS INDICATOR (PRD Section 5) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#161922] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-400 transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* SHINOBI HUD BRAND */}
        <a
          href="#"
          className="group flex items-center gap-3 text-zinc-100 font-semibold tracking-tight hover:text-orange-400 transition"
          aria-label="Ageng Wahid Shinobi Portfolio"
        >
          <span className="w-8 h-8 rounded-lg bg-[#161922] border border-orange-500/40 flex items-center justify-center font-mono text-xs text-orange-400 font-bold group-hover:border-orange-400 group-hover:bg-orange-950/30 transition shadow-[0_0_12px_rgba(249,115,22,0.15)]">
            AW
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-orange-400 transition">
                Ageng Wahid
              </span>
              <span className="px-1.5 py-0.2 rounded bg-orange-950/60 border border-orange-700/50 text-[10px] font-mono text-orange-400 font-semibold tracking-wider">
                JONIN
              </span>
            </div>
            <p className="text-[10px] font-mono text-zinc-400">BACKEND // CLOUD</p>
          </div>
        </a>

        {/* DESKTOP HUD NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-1 font-mono" aria-label="Shinobi Navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-orange-400 hover:bg-orange-950/20 rounded-md transition duration-150 flex items-center gap-1.5"
            >
              <span className="text-[10px] text-orange-500/80">/</span>
              <span>{link.label}</span>
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
            <span>SUMMON RESUME</span>
            <span className="text-xs">📜</span>
          </a>
        </div>

        {/* MOBILE TOGGLE (Tap Target >= 44px) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-[#262b3a] bg-[#161922] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition"
          aria-label={open ? "Close Shinobi navigation" : "Open Shinobi navigation"}
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
        <div className="lg:hidden border-t border-[#262b3a] bg-[#0c0d13] px-6 py-6 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 text-sm font-mono font-medium text-zinc-200 hover:text-orange-400 hover:bg-orange-950/30 rounded-lg transition flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-xs text-orange-400/80">[{link.code}]</span>
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-zinc-800">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-3 text-sm font-mono font-semibold text-zinc-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 rounded-lg transition shadow-lg"
            >
              Summon Resume Scroll (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


