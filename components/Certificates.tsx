"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(certificates.map((c) => c.category)));
    return ["All", ...unique];
  }, []);

  const [active, setActive] = useState("All");
  const [preview, setPreview] = useState<null | (typeof certificates)[number]>(null);

  // Close modal on Escape key press (Antislop R-32 Keyboard Accessibility)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPreview(null);
      }
    };
    if (preview) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [preview]);

  const filtered = useMemo(() => {
    return active === "All"
      ? certificates
      : certificates.filter((c) => c.category === active);
  }, [active]);

  return (
    <section id="certificates" className="py-24 md:py-32 px-6 border-b border-[#262b3a] relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER (PRD Section 4) */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>04</span>
            <span>//</span>
            <span>SCROLLS OF MASTERY & CREDENTIALS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Verified Mastery Scrolls
              </h2>
              <p className="text-zinc-400 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
                {certificates.length} verifiable certifications validating Google Cloud architecture, backend development, and academic leadership. Click any scroll to unseal and inspect.
              </p>
            </div>
            <div className="font-mono text-xs text-amber-400 border border-amber-500/30 px-3 py-1.5 rounded bg-amber-950/20">
              SEAL: 17_AUTHENTIC_CREDENTIALS
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Certificate categories">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? certificates.length
                : certificates.filter((c) => c.category === cat).length;
            const isSelected = active === cat;

            return (
              <button
                key={cat}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-all duration-150 flex items-center gap-2 ${
                  isSelected
                    ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 border-orange-500/80 shadow-[0_0_12px_rgba(249,115,22,0.15)]"
                    : "bg-[#0f1118] text-zinc-400 border-[#262b3a] hover:text-white hover:border-zinc-600"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/50 text-zinc-400">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* CERTIFICATE SCROLL GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, index) => (
            <button
              key={index}
              onClick={() => setPreview(cert)}
              className="text-left rounded-xl bg-[#0f1118] border border-[#262b3a] hover:border-orange-500/60 transition-all duration-200 overflow-hidden flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none shadow-md"
            >
              <div className="relative h-48 w-full bg-[#0a0b0e] p-4 flex items-center justify-center border-b border-[#262b3a]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 border border-zinc-800 text-[10px] font-mono text-zinc-400">
                  UNSEAL 🔍
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider bg-orange-950/40 border border-orange-700/40 text-orange-300 uppercase">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{cert.date}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-orange-300 transition">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 mt-3 pt-3 border-t border-[#262b3a]/60 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-orange-400 font-mono text-[11px]">Inspect Scroll ↗</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ACCESSIBLE MODAL PREVIEW (Antislop R-26, R-32) */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="relative max-w-3xl w-full bg-[#0f1118] rounded-2xl overflow-hidden border-2 border-orange-500/50 shadow-[0_0_50px_rgba(249,115,22,0.25)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CORNER BRACKETS */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-orange-400" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-orange-400" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-400" />

            {/* MODAL HEADER */}
            <div className="p-4 sm:p-6 border-b border-[#262b3a] flex items-start justify-between gap-4">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-orange-950/60 text-orange-300 border border-orange-700/50">
                  {preview.category}
                </span>
                <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white mt-2">
                  {preview.title}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-300 mt-1 font-mono">
                  Issued by {preview.issuer} · {preview.date}
                </p>
              </div>

              <button
                onClick={() => setPreview(null)}
                className="w-10 h-10 rounded-lg bg-[#161922] border border-[#262b3a] text-zinc-300 hover:text-white hover:border-orange-500 flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-orange-400"
                aria-label="Close modal preview"
              >
                ✕
              </button>
            </div>

            {/* CERTIFICATE IMAGE CANVAS */}
            <div className="relative w-full aspect-[4/3] bg-[#07080b] p-2 sm:p-4">
              <Image
                src={preview.image}
                alt={preview.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 bg-[#0a0b0e] border-t border-[#262b3a] flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="text-[11px] text-zinc-500">PRESS ESC OR CLICK OUTSIDE TO CLOSE</span>
              <button
                onClick={() => setPreview(null)}
                className="px-4 py-2 rounded-lg bg-[#161922] text-zinc-200 hover:text-white border border-[#262b3a] hover:border-orange-400 text-xs font-semibold"
              >
                Close Scroll
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


