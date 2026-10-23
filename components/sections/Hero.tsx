import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-28 px-4 sm:px-6 border-b border-[#22222a] overflow-hidden">
      {/* WARM CHAKRA FLAME LIGHTING (NO CYAN, NO BLUE SLOP) */}
      <div className="absolute top-1/4 right-0 w-[420px] sm:w-[560px] h-[420px] sm:h-[560px] bg-orange-600/[0.09] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT COLUMN: RECRUITER VALUE & PROFILE (7 COLS) */}
          <div className="lg:col-span-7">
            {/* HIRING AVAILABILITY BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0d0d11] border border-orange-500/40 text-xs font-mono text-zinc-300 mb-5 sm:mb-6 shadow-[0_0_18px_rgba(249,115,22,0.12)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-orange-400 font-bold tracking-wider">TERSEDIA UNTUK BEKERJA</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-300 text-[11px] sm:text-xs">Backend & Cloud · Remote / On-Site</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Muhammad Ageng Zayem Wahid
            </h1>

            <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2.5">
              <span className="text-lg sm:text-2xl font-mono font-bold text-orange-400">
                Backend & Cloud Developer
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#131318] border border-[#22222a] text-zinc-300 font-medium">
                Sarjana Komputer
              </span>
            </div>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl font-sans">
              Lulusan S1 Informatika Universitas Ahmad Dahlan dengan <strong className="text-orange-300 font-semibold">IPK 3.91/4.00 (lulus akselerasi 3.5 tahun)</strong> dan alumnus program <strong className="text-amber-300 font-semibold">Bangkit Academy Cloud Computing (Google, GoTo, Traveloka)</strong>. Berpengalaman 2 tahun sebagai <strong className="text-white font-semibold">Asisten Praktikum Lab Informatika</strong> membimbing 100+ mahasiswa. Menguasai arsitektur RESTful API (Node.js, Express, Laravel), database relasional, dan deployment cloud di Google Cloud Platform.
            </p>

            {/* ACTION TRIGGERS (Mobile thumb-friendly layout) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-7 sm:mt-8 font-mono">
              <a
                href="#projects"
                className="min-h-[48px] px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 shadow-[0_0_20px_rgba(249,115,22,0.25)] flex items-center justify-center gap-2"
              >
                <span>Lihat Portfolio Proyek</span>
                <span>⚔️</span>
              </a>

              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[48px] px-6 py-3.5 bg-[#131318] border border-orange-500/40 hover:border-orange-400 text-orange-300 hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Unduh Curriculum Vitae (PDF)</span>
                <span>📜</span>
              </a>

              <a
                href="#contact"
                className="min-h-[48px] px-5 py-3.5 bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/60 text-zinc-300 hover:text-orange-300 font-bold text-xs uppercase tracking-wider rounded-xl transition duration-200 flex items-center justify-center gap-2"
              >
                <span>Hubungi / Rekrut</span>
                <span>⚡</span>
              </a>
            </div>

            {/* METRIC COUNTERS (Clean 2x2 grid on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-6 sm:pt-8 border-t border-[#22222a]">
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/40 transition">
                <p className="text-xl sm:text-2xl font-mono font-extrabold text-orange-400">3.91</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase mt-0.5">IPK / 4.00</p>
                <p className="text-[10px] text-zinc-500">3.5 Thn Akselerasi</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/40 transition">
                <p className="text-xl sm:text-2xl font-mono font-extrabold text-amber-400">BANGKIT</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase mt-0.5">CLOUD COMPUTING</p>
                <p className="text-[10px] text-zinc-500">Google · GoTo · Traveloka</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/40 transition">
                <p className="text-xl sm:text-2xl font-mono font-extrabold text-orange-400">17+</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase mt-0.5">SERTIFIKASI</p>
                <p className="text-[10px] text-zinc-500">Dicoding & Google Cloud</p>
              </div>

              <div className="p-3 sm:p-3.5 rounded-xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/40 transition">
                <p className="text-xl sm:text-2xl font-mono font-extrabold text-white">2 THN</p>
                <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 uppercase mt-0.5">ASISTEN LAB</p>
                <p className="text-[10px] text-zinc-500">100+ Mahasiswa Dibimbing</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: REAL PHOTO WITH ETHEREAL KURAMA SPIRIT (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-[370px]">
              {/* CHAKRA FLAME GLOW BEHIND AVATAR */}
              <div className="absolute -inset-3 bg-gradient-to-r from-orange-600/25 via-amber-600/15 to-orange-600/25 rounded-3xl blur-2xl pointer-events-none" />

              {/* SUMI INK FRAME WITH CORNER ACCENTS */}
              <div className="relative rounded-2xl bg-[#0d0d11] border-2 border-orange-500/60 p-2.5 sm:p-3 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                {/* CORNER BRACKETS */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-orange-400" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-orange-400" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-orange-400" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-orange-400" />

                {/* AVATAR IMAGE CANVAS */}
                <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#070709] border border-[#22222a]">
                  <Image
                    src="/images/shinobi-avatar.jpg"
                    alt="Muhammad Ageng Zayem Wahid: Backend & Cloud Developer with Kurama Chakra Stand"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, 370px"
                  />
                </div>

                {/* TELEMETRY FOOTER */}
                <div className="mt-3 px-3 py-2 rounded-lg bg-[#131318] border border-[#22222a] flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                    <span className="text-orange-400 font-bold">KURAMA CHAKRA STAND</span>
                  </span>
                  <span className="text-amber-300 font-semibold">GCP · NODE · LARAVEL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


