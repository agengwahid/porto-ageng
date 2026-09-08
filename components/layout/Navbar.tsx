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
    <nav className="fixed top-0 left-0 w-full bg-[#0B1120]/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-cyan-400">
          Ageng.
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-cyan-400 transition cursor-pointer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold text-sm hover:bg-cyan-300 transition"
        >
          Download CV
        </a>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-gray-300 hover:text-cyan-400"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0B1120] border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold text-sm text-center hover:bg-cyan-300 transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
