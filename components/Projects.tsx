import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredMissions = projects.filter((p) => p.featured);
  const auxiliaryMissions = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-b border-[#262b3a]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER (PRD Section 4) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>02</span>
            <span>//</span>
            <span>CLASSIFIED MISSIONS SHOWCASE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                High-Stakes Technical Deployments
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Mission dossiers detailing cloud architecture, high-throughput APIs, and database engineering completed with verified operational success.
              </p>
            </div>
            <a
              href="https://github.com/agengwahid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 hover:text-orange-300 transition"
            >
              <span>ACCESS GITHUB REPOSITORIES</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* 1. S-RANK & FEATURED MISSIONS */}
        <div className="space-y-12 mb-16">
          {featuredMissions.map((mission, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0f1118] border border-[#262b3a] hover:border-orange-500/60 transition-all duration-300 overflow-hidden shadow-xl"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* PREVIEW IMAGE CONTAINER WITH MISSION SEAL */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-[#0a0b0e] border-b lg:border-b-0 lg:border-r border-[#262b3a]">
                  <Image
                    src={mission.image}
                    alt={mission.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  
                  {/* S-RANK OR A-RANK MISSION BADGE */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded font-mono text-xs font-extrabold tracking-wider border shadow-md ${
                        mission.rankBadge === "S-RANK"
                          ? "bg-amber-950/90 border-amber-500 text-amber-300 shadow-amber-900/30"
                          : "bg-orange-950/90 border-orange-500 text-orange-300 shadow-orange-900/30"
                      }`}
                    >
                      {mission.rankBadge}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#090a0f]/90 border border-[#262b3a] font-mono text-[10px] text-zinc-300">
                      {mission.codename}
                    </span>
                  </div>
                </div>

                {/* MISSION BRIEFING CONTENT */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span className="text-orange-400 font-semibold">{mission.role}</span>
                      <span>{mission.period}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {mission.title}
                    </h3>

                    <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                      {mission.description}
                    </p>

                    {/* ARCHITECTURAL HIGHLIGHTS */}
                    <div className="mt-5 pt-4 border-t border-[#262b3a]/70">
                      <p className="font-mono text-xs text-orange-400/90 uppercase tracking-wider mb-2">
                        Classified Technical Execution:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {mission.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-cyan-400 font-mono mt-0.5">⚡</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* TECH STACK & ACCESS DOSSIER */}
                  <div className="mt-6 pt-5 border-t border-[#262b3a] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {mission.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#161922] border border-[#262b3a] text-xs font-mono text-zinc-300"
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
                        className="text-xs font-mono font-semibold text-orange-400 hover:text-orange-300 transition inline-flex items-center gap-1.5"
                      >
                        <span>Access Code Scroll</span>
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
            Auxiliary Deployments & Web Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {auxiliaryMissions.map((mission, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0f1118] border border-[#262b3a] hover:border-cyan-500/50 transition duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="px-2 py-0.5 rounded bg-[#161922] border border-[#262b3a] text-cyan-400 font-semibold">
                      {mission.rankBadge}
                    </span>
                    <span>{mission.period}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white mt-2">
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

                <div className="mt-6 pt-4 border-t border-[#262b3a] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {mission.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#161922] text-[11px] font-mono text-zinc-400"
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
                      className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition"
                    >
                      Dossier ↗
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


