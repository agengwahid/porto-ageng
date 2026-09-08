"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { certificates } from "@/data/certificates";

export default function Certificates() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [preview, setPreview] = useState<null | (typeof certificates)[number]>(
    null
  );

  const filtered =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.category === active);

  return (
    <section id="certificates" className="py-28 px-6 bg-[#09101d]">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <div className="mb-10">
          <p className="text-cyan-400 font-medium mb-3">CERTIFICATES</p>
          <h2 className="text-4xl md:text-5xl font-bold">My Certifications</h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            {certificates.length}+ certificates from Bangkit Academy,
            Dicoding, and Universitas Ahmad Dahlan. Click any card to view
            the full certificate.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition ${
                active === cat
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "border-gray-700 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((cert, index) => (
            <button
              key={index}
              onClick={() => setPreview(cert)}
              className="text-left bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition duration-300 group"
            >
              <div className="relative h-48 bg-[#0B1120]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain group-hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                  {cert.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-gray-400 mt-2 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 mt-1 text-sm">{cert.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL PREVIEW */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#111827] rounded-2xl overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] bg-black">
              <Image
                src={preview.image}
                alt={preview.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">{preview.title}</h3>
              <p className="text-gray-400 mt-1">
                {preview.issuer} · {preview.date}
              </p>
            </div>
            <button
              onClick={() => setPreview(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
              aria-label="Close preview"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
