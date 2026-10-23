import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-[#262b3a] overflow-hidden">
      {/* AMBIENT CHAKRA GLOW IN BACKGROUND */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: SHINOBI WAY & TECHNICAL VALUE (7 COLS) */}
          <div className="lg:col-span-7">
            {/* HUD TELEMETRY BADGE (Antislop R-09: real availability & identity) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#161922] border border-orange-500/40 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_15px_rgba(249,115,22,0.12)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-orange-400 font-bold tracking-wider">JONIN STATUS: ACTIVE</span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-300">Yogyakarta / Remote Available</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Muhammad Ageng Zayem Wahid
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xl sm:text-2xl font-mono font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Backend & Cloud Developer
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#1f2433] border border-cyan-500/40 text-cyan-300">
                // JONIN ARCHITECT
              </span>
            </div>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              Informatics graduate from Universitas Ahmad Dahlan with a <strong className="text-orange-300 font-semibold">GPA of 3.91/4.00</strong> (completed in 3.5 years accelerated) and alumnus of <strong className="text-cyan-300 font-semibold">Bangkit Academy (Cloud Computing)</strong>. Wielding Node.js, Google Cloud Platform, and Laravel to architect high-throughput APIs, automated cloud pipelines, and secure database schemas.
            </p>

            {/* ACTION TRIGGERS (PRD Section 4) */}
            <div className="flex flex-wrap items-center gap-4 mt-8 font-mono">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:from-orange-400 hover:to-amber-400 transition duration-200 shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center gap-2"
              >
                <span>Inspect S-Rank Missions</span>
                <span>⚔️</span>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 bg-[#161922] border border-[#262b3a] hover:border-cyan-400 text-zinc-200 font-bold text-xs uppercase tracking-wider rounded-lg hover:text-white transition duration-200 flex items-center gap-2"
              >
                <span>Summon Contact</span>
                <span className="text-cyan-400">⚡</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs text-zinc-400 hover:text-orange-300 transition"
              >
                Download Scroll (CV) ↗
              </a>
            </div>

            {/* HUD TELEMETRY METRIC COUNTERS (Antislop R-17: authentic verifiable achievements) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#262b3a]">
              <div className="p-3 rounded-lg bg-[#111319] border border-[#262b3a]/70">
                <p className="text-2xl font-mono font-extrabold text-orange-400">3.91</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">CHAKRA: GPA / 4.00</p>
                <p className="text-[10px] text-zinc-500">3.5 Yrs Accelerated</p>
              </div>

              <div className="p-3 rounded-lg bg-[#111319] border border-[#262b3a]/70">
                <p className="text-2xl font-mono font-extrabold text-cyan-400">BANGKIT</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">AFFINITY: CLOUD</p>
                <p className="text-[10px] text-zinc-500">Google · GoTo · Traveloka</p>
              </div>

              <div className="p-3 rounded-lg bg-[#111319] border border-[#262b3a]/70">
                <p className="text-2xl font-mono font-extrabold text-amber-400">17+</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">SCROLLS OF MASTERY</p>
                <p className="text-[10px] text-zinc-500">Verified Credentials</p>
              </div>

              <div className="p-3 rounded-lg bg-[#111319] border border-[#262b3a]/70">
                <p className="text-2xl font-mono font-extrabold text-white">2 YRS</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">LAB SENSEI / ASST</p>
                <p className="text-[10px] text-zinc-500">100+ Students Mentored</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CUSTOM SHINOBI KURAMA AVATAR (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* CYBERPUNK HUD FRAME WITH CORNER ACCENTS */}
              <div className="relative rounded-2xl bg-[#0f1118] border-2 border-orange-500/40 p-3 shadow-[0_0_35px_rgba(249,115,22,0.2)]">
                {/* CORNER BRACKETS */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-orange-400" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-orange-400" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {/* AVATAR IMAGE CANVAS */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#0a0b0e]">
                  <Image
                    src="/images/shinobi-avatar.jpg"
                    alt="Muhammad Ageng Zayem Wahid: Cyber Shinobi Jonin Avatar with Kurama Shadow"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  {/* Subtle scanline overlay for cyber texture */}
                  <div className="absolute inset-0 shinobi-scanlines opacity-40 pointer-events-none" />
                </div>

                {/* TELEMETRY FOOTER */}
                <div className="mt-3 px-3 py-1.5 rounded bg-[#161922] border border-[#262b3a] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    <span>CODEX: SHINOBI_KURAMA</span>
                  </span>
                  <span className="text-cyan-400 font-semibold">AFFINITY: RAITON_DOTON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


