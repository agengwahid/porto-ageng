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
    <section id="certificates" className="py-24 md:py-32 px-6 border-b border-[#1e2638]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            <span>03</span>
            <span>/</span>
            <span>VERIFIED CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Industry & Academic Credentials
          </h2>
          <p className="text-zinc-400 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
            {certificates.length} verified certificates spanning Cloud Architecture, Backend Engineering, and Academic Teaching Assistantships. Click any certificate to inspect the full credential.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Certificate categories">
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
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium border transition-colors flex items-center gap-2 ${
                  isSelected
                    ? "bg-[#162235] text-sky-300 border-sky-500/60 shadow-sm"
                    : "bg-[#0f141f] text-zinc-400 border-[#1e2638] hover:text-white hover:border-zinc-700"
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 text-zinc-400">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* CERTIFICATE GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, index) => (
            <button
              key={index}
              onClick={() => setPreview(cert)}
              className="text-left rounded-xl bg-[#0f141f] border border-[#1e2638] hover:border-[#2b374e] transition duration-200 overflow-hidden flex flex-col justify-between group focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:outline-none"
            >
              <div className="relative h-44 w-full bg-[#090b10] p-4 flex items-center justify-center border-b border-[#1e2638]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-2 group-hover:scale-[1.02] transition duration-200"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold tracking-wider bg-[#151c2c] border border-[#232c3f] text-sky-300 uppercase">
                      {cert.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{cert.date}</span>
                  </div>

                  <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-sky-300 transition">
                    {cert.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 mt-3 pt-3 border-t border-[#1e2638]/60 flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-sky-400 font-mono text-[11px]">Inspect ↗</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ACCESSIBLE MODAL PREVIEW (Antislop R-26, R-32) */}
      {preview && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreview(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div
            className="relative max-w-3xl w-full bg-[#0f141f] rounded-2xl overflow-hidden border border-[#2b374e] shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="p-4 sm:p-6 border-b border-[#1e2638] flex items-start justify-between gap-4">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#151c2c] text-sky-300 border border-[#232c3f]">
                  {preview.category}
                </span>
                <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white mt-2">
                  {preview.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-mono">
                  Issued by {preview.issuer} · {preview.date}
                </p>
              </div>

              <button
                onClick={() => setPreview(null)}
                className="w-10 h-10 rounded-lg bg-[#151c2c] border border-[#232c3f] text-zinc-300 hover:text-white hover:border-zinc-500 flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-sky-400"
                aria-label="Close modal preview"
              >
                ✕
              </button>
            </div>

            {/* CERTIFICATE IMAGE CANVAS */}
            <div className="relative w-full aspect-[4/3] bg-[#07090e] p-2 sm:p-4">
              <Image
                src={preview.image}
                alt={preview.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 bg-[#0c0f17] border-t border-[#1e2638] flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono text-[11px]">Press ESC or click backdrop to close</span>
              <button
                onClick={() => setPreview(null)}
                className="px-4 py-2 rounded-lg bg-[#151c2c] text-zinc-200 hover:text-white text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

