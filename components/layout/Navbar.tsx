"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#090b10]/90 backdrop-blur-md border-b border-[#1e2638] z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* BRAND / LOGO */}
        <a
          href="#"
          className="group flex items-center gap-3 text-zinc-100 font-semibold tracking-tight hover:text-sky-400 transition"
          aria-label="Ageng Wahid Portfolio Home"
        >
          <span className="w-8 h-8 rounded-lg bg-[#151c2c] border border-[#232c3f] flex items-center justify-center font-mono text-xs text-sky-400 font-bold group-hover:border-sky-500/50 transition">
            AW
          </span>
          <span className="text-base font-semibold">Ageng Wahid</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/40 rounded-lg transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-semibold tracking-wider text-sky-300 bg-sky-950/40 border border-sky-800/50 hover:bg-sky-500 hover:text-zinc-950 rounded-lg transition duration-200"
          >
            RESUME / CV
          </a>
        </div>

        {/* MOBILE MENU TOGGLE (Tap Target >= 44px) */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-[#1e2638] bg-[#0f141f] text-zinc-300 hover:text-white hover:border-zinc-600 transition"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE FLYOUT */}
      {open && (
        <div className="md:hidden border-t border-[#1e2638] bg-[#0c0f17] px-6 py-6 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 text-base font-medium text-zinc-200 hover:text-sky-400 hover:bg-zinc-800/40 rounded-lg transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-zinc-800/60">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full py-3 text-sm font-semibold text-zinc-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition"
            >
              Download Resume (CV)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

