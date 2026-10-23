"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "agngwahid123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-b border-[#1e2638]">
      <div className="max-w-5xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span>/</span>
            <span>DIRECT COMMUNICATION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Reliable
          </h2>
          <p className="text-zinc-300 mt-4 text-sm sm:text-base leading-relaxed">
            I am currently open to full-time Backend Developer and Cloud Engineer positions, contract engagements, or engineering collaborations. Reach out directly and I will respond within 24 hours.
          </p>
        </div>

        {/* INTERACTIVE COMMUNICATION CONSOLE CARD */}
        <div className="rounded-2xl bg-[#0f141f] border border-[#1e2638] p-6 sm:p-10 shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* PRIMARY EMAIL ACTION */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Primary Contact Endpoint:
              </span>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="px-4 py-3 rounded-lg bg-[#090b10] border border-[#232c3f] font-mono text-sm text-sky-300 flex-1 truncate">
                  {email}
                </div>
                <button
                  onClick={handleCopy}
                  className="px-5 py-3 rounded-lg bg-sky-400 text-zinc-950 font-semibold text-xs font-mono uppercase tracking-wider hover:bg-sky-300 transition duration-150 flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-950 font-bold">✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <span>Copy Email</span>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:${email}`}
                  className="px-4 py-2 rounded-lg bg-[#151c2c] border border-[#232c3f] text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-500 transition"
                >
                  Open in Email Client ↗
                </a>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#151c2c] border border-[#232c3f] text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-500 transition"
                >
                  Inspect Resume (PDF) ↗
                </a>
              </div>
            </div>

            {/* DIRECT CHANNELS & METADATA */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#1e2638] lg:pl-8 space-y-4 text-xs font-mono">
              <div>
                <p className="text-zinc-400">PHONE & WHATSAPP</p>
                <a
                  href="tel:+6282178040716"
                  className="text-white hover:text-sky-300 transition mt-1 inline-block text-sm"
                >
                  +62 821-7804-0716
                </a>
              </div>

              <div>
                <p className="text-zinc-400">BASE LOCATION</p>
                <p className="text-zinc-200 mt-1">Yogyakarta, Indonesia (WIB / UTC+7)</p>
              </div>

              <div>
                <p className="text-zinc-400">PROFILES & NETWORKS</p>
                <div className="flex items-center gap-4 mt-1.5 text-zinc-300">
                  <a
                    href="https://github.com/agengwahid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                  >
                    GitHub ↗
                  </a>
                  <a
                    href="https://linkedin.com/in/ageng14"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition"
                  >
                    LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

