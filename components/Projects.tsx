import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredMissions = projects.filter((p) => p.featured);
  const auxiliaryMissions = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 border-b border-[#22222a]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>02</span>
            <span>//</span>
            <span>PORTFOLIO PROYEK & ARSITEKTUR PRODUKSI</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Studi Kasus & Implementasi Sistem
              </h2>
              <p className="mt-3 text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Dokumentasi arsitektur sistem riil: inference API machine learning pada Google Cloud Run, aplikasi enterprise berbasis Laravel & MySQL, serta arsitektur database teroptimasi.
              </p>
            </div>
            <a
              href="https://github.com/agengwahid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-mono text-xs text-orange-400 hover:text-orange-300 transition px-4 py-2.5 rounded-xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/50 min-h-[44px]"
            >
              <span>LIHAT REPOSITORI GITHUB</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* 1. S-RANK & FEATURED MISSIONS */}
        <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
          {featuredMissions.map((mission, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/60 transition-all duration-300 overflow-hidden shadow-xl hover:-translate-y-1"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* PREVIEW IMAGE CONTAINER WITH MISSION SEAL */}
                <div className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px] lg:min-h-full bg-[#070709] border-b lg:border-b-0 lg:border-r border-[#22222a]">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  
                  {/* S-RANK OR A-RANK MISSION BADGE */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-md font-mono text-xs font-extrabold tracking-wider border shadow-md ${
                        mission.rankBadge === "S-RANK"
                          ? "bg-amber-950/90 border-amber-500 text-amber-300 shadow-amber-900/30"
                          : "bg-orange-950/90 border-orange-500 text-orange-300 shadow-orange-900/30"
                      }`}
                    >
                      {mission.rankBadge}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[#070709]/90 border border-[#22222a] font-mono text-[10px] text-zinc-300">
                      {mission.codename}
                    </span>
                  </div>
                </div>

                {/* MISSION BRIEFING CONTENT */}
                <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span className="text-orange-400 font-semibold">{mission.role}</span>
                      <span>{mission.period}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                      {mission.title}
                    </h3>

                    <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                      {mission.description}
                    </p>

                    {/* ARCHITECTURAL HIGHLIGHTS */}
                    <div className="mt-5 pt-4 border-t border-[#22222a]">
                      <p className="font-mono text-xs text-orange-400/90 uppercase tracking-wider mb-2">
                        Pencapaian Teknis & Arsitektur:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {mission.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-orange-400 font-mono mt-0.5">⚡</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* TECH STACK & ACCESS DOSSIER */}
                  <div className="mt-6 pt-5 border-t border-[#22222a] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {mission.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-[#131318] border border-[#22222a] text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {mission.link && (
                      <a
                        href={mission.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-orange-400 hover:text-orange-300 transition inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#131318] border border-orange-500/30 hover:border-orange-500 min-h-[44px]"
                      >
                        <span>Lihat Source Code</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. AUXILIARY MISSIONS (A-RANK & B-RANK) */}
        <div>
          <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">
            Proyek Sistem Informasi & Web Tambahan
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {auxiliaryMissions.map((mission, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/50 transition duration-200 p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="px-2 py-0.5 rounded-md bg-[#131318] border border-[#22222a] text-orange-400 font-semibold">
                      {mission.rankBadge}
                    </span>
                    <span>{mission.period}</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mt-2">
                    {mission.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {mission.description}
                  </p>

                  <ul className="mt-4 space-y-1 text-xs text-zinc-400">
                    {mission.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-orange-400">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#22222a] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {mission.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#131318] text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {mission.link && (
                    <a
                      href={mission.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-orange-400 hover:text-orange-300 transition px-2 py-1 min-h-[44px] flex items-center"
                    >
                      Repositori ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


