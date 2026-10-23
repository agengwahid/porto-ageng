import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-[#1e2638]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: INTRODUCTION & VALUE PROPOSITION (7 COLS) */}
          <div className="lg:col-span-7">
            {/* REAL STATUS BADGE (Antislop R-09, R-31: marks genuine availability) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#131a28] border border-[#232c3f] text-xs font-mono text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Available for Backend & Cloud Roles · Yogyakarta / Remote</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Muhammad Ageng Zayem Wahid
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-mono text-sky-400 font-medium">
              Backend & Cloud Developer
            </p>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl">
              Informatics graduate from Universitas Ahmad Dahlan with a <span className="text-white font-medium">GPA of 3.91/4.00</span> (completed in 3.5 years) and alumnus of <span className="text-white font-medium">Bangkit Academy (Cloud Computing)</span>. Experienced in designing resilient RESTful APIs, cloud deployment on GCP, and relational database architecture.
            </p>

            {/* ACTION BUTTONS (Antislop R-15: context-specific CTAs) */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-sky-400 text-zinc-950 font-semibold text-sm rounded-lg hover:bg-sky-300 transition duration-200 shadow-sm"
              >
                View Case Studies & Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-[#111520] border border-[#232c3f] text-zinc-200 font-medium text-sm rounded-lg hover:bg-[#1a2234] hover:text-white transition duration-200"
              >
                Get in Touch
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs font-mono text-zinc-400 hover:text-sky-300 transition"
              >
                Download CV (PDF) ↗
              </a>
            </div>

            {/* REAL CREDENTIAL METRICS ROW (Antislop R-17, C-5: real verifiable data) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#1e2638]">
              <div>
                <p className="text-2xl font-mono font-bold text-white">3.91</p>
                <p className="text-xs text-zinc-400 mt-1">GPA / 4.00 (3.5 Yrs)</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-white">Bangkit</p>
                <p className="text-xs text-zinc-400 mt-1">Cloud Computing Alum</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-white">17+</p>
                <p className="text-xs text-zinc-400 mt-1">Verified Certificates</p>
              </div>
              <div>
                <p className="text-2xl font-mono font-bold text-white">2 Yrs</p>
                <p className="text-xs text-zinc-400 mt-1">Lab Teaching Asst.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REFINED ARCHITECTURAL PORTRAIT (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Decorative slate frame (R-07, R-12: structured, not neon-glowing) */}
              <div className="relative rounded-2xl bg-[#0f141f] border border-[#232c3f] p-3 shadow-xl">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#090b10]">
                  <Image
                    src="/images/profile.jpg"
                    alt="Muhammad Ageng Zayem Wahid"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>
                
                {/* Micro engineering metadata footer on the portrait card */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>DEV: BACKEND_CLOUD</span>
                  <span className="text-sky-400">STATUS: VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

