import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-6 border-b border-[#232a3d] overflow-hidden">
      {/* CRISP AMBIENT CHAKRA LIGHTING (NO BLUR OVERLAY ON CONTENT) */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-orange-600/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-cyan-600/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN: RECRUITER VALUE & TECHNICAL PROFILE (7 COLS) */}
          <div className="lg:col-span-7">
            {/* HIRING AVAILABILITY HUD BADGE (Antislop R-09: verifiable availability) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0e111a] border border-orange-500/50 text-xs font-mono text-zinc-300 mb-6 shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-orange-400 font-bold tracking-wider">STATUS: AVAILABLE FOR HIRE</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300">Backend & Cloud Roles · Yogyakarta / Remote</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Muhammad Ageng Zayem Wahid
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="text-xl sm:text-2xl font-mono font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Backend & Cloud Developer
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#151926] border border-cyan-500/40 text-cyan-300 font-medium">
                // JONIN ARCHITECT
              </span>
            </div>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              Lulusan S1 Informatika Universitas Ahmad Dahlan dengan <strong className="text-orange-300 font-semibold">IPK 3.91/4.00 (lulus akselerasi 3.5 tahun)</strong> dan alumnus program <strong className="text-cyan-300 font-semibold">Bangkit Academy Cloud Computing (Google, GoTo, Traveloka)</strong>. Berpengalaman 2 tahun sebagai <strong className="text-amber-300 font-semibold">Asisten Praktikum Lab Informatika</strong> membimbing 100+ mahasiswa. Siap berkontribusi membangun arsitektur API berskala tinggi (Node.js, Express, Laravel), skema database teroptimasi, dan infrastruktur cloud di Google Cloud Platform.
            </p>

            {/* ACTION TRIGGERS (Optimized for Recruiters & Hiring Managers) */}
            <div className="flex flex-wrap items-center gap-4 mt-8 font-mono">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg transition duration-200 shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center gap-2"
              >
                <span>Lihat Proyek & Arsitektur</span>
                <span>⚔️</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#151926] border border-orange-500/40 hover:border-orange-400 text-orange-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg transition duration-200 shadow-[0_0_15px_rgba(249,115,22,0.1)] flex items-center gap-2"
              >
                <span>Unduh Curriculum Vitae (PDF)</span>
                <span>📜</span>
              </a>

              <a
                href="#contact"
                className="px-5 py-3.5 bg-[#0e111a] border border-[#232a3d] hover:border-cyan-400 text-zinc-300 hover:text-cyan-300 font-bold text-xs uppercase tracking-wider rounded-lg transition duration-200 flex items-center gap-2"
              >
                <span>Hubungi / Rekrut</span>
                <span className="text-cyan-400">⚡</span>
              </a>
            </div>

            {/* HUD TELEMETRY METRIC COUNTERS (Authentic Verifiable Achievements) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#232a3d]">
              <div className="p-3.5 rounded-xl bg-[#0e111a] border border-[#232a3d] hover:border-orange-500/40 transition">
                <p className="text-2xl font-mono font-extrabold text-orange-400">3.91</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">IPK / 4.00</p>
                <p className="text-[10px] text-zinc-500">3.5 Thn Akselerasi</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e111a] border border-[#232a3d] hover:border-cyan-500/40 transition">
                <p className="text-2xl font-mono font-extrabold text-cyan-400">BANGKIT</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">CLOUD COMPUTING</p>
                <p className="text-[10px] text-zinc-500">Google · GoTo · Traveloka</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e111a] border border-[#232a3d] hover:border-amber-500/40 transition">
                <p className="text-2xl font-mono font-extrabold text-amber-400">17+</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">SERTIFIKASI</p>
                <p className="text-[10px] text-zinc-500">Dicoding & Google Cloud</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0e111a] border border-[#232a3d] hover:border-zinc-500/40 transition">
                <p className="text-2xl font-mono font-extrabold text-white">2 THN</p>
                <p className="text-[11px] font-mono text-zinc-400 uppercase mt-0.5">ASISTEN LAB</p>
                <p className="text-[10px] text-zinc-500">100+ Mahasiswa Dibimbing</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REAL PHOTO WITH ETHEREAL KURAMA SPIRIT (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* CHAKRA AURA GLOW BEHIND AVATAR FRAME */}
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/30 via-amber-500/20 to-cyan-500/30 rounded-3xl blur-xl animate-chakra-breath pointer-events-none" />

              {/* CYBERPUNK HUD FRAME WITH CORNER ACCENTS & CHAKRA PULSE */}
              <div className="relative rounded-2xl bg-[#0e111a] border-2 border-orange-500/50 p-3 animate-chakra-pulse">
                {/* CORNER BRACKETS */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-orange-400" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-orange-400" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                {/* AVATAR IMAGE CANVAS (Aspect 3:4 for Full Kurama Silhouette & Professional Suit) */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#090a0f] border border-[#232a3d]">
                  <Image
                    src="/images/shinobi-avatar.jpg"
                    alt="Muhammad Ageng Zayem Wahid: Backend & Cloud Developer with Kurama Chakra Stand"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>

                {/* TELEMETRY FOOTER */}
                <div className="mt-3 px-3 py-2 rounded-lg bg-[#151926] border border-[#232a3d] flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    <span className="text-orange-400 font-bold">CHAKRA: KURAMA_SEAL</span>
                  </span>
                  <span className="text-cyan-300 font-semibold">STACK: GCP // NODE // PHP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


