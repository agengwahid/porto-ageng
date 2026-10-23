import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6 border-b border-[#1e2638]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER (Antislop R-05, R-06) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            <span>02</span>
            <span>/</span>
            <span>ENGINEERING CASE STUDIES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Featured Technical Work
              </h2>
              <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-2xl">
                Production-oriented systems emphasizing API reliability, cloud architecture, and database integrity.
              </p>
            </div>
            <a
              href="https://github.com/agengwahid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 hover:text-sky-300 transition"
            >
              <span>Explore GitHub Repositories</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* 1. FEATURED PROJECTS: HIERARCHICAL TREATMENT (Antislop R-14) */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0f141f] border border-[#1e2638] hover:border-[#2b374e] transition duration-200 overflow-hidden"
            >
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* PREVIEW IMAGE CONTAINER */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-[#090b10] border-b lg:border-b-0 lg:border-r border-[#1e2638]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#090b10]/90 border border-[#232c3f] font-mono text-[11px] text-sky-400">
                    FEATURED CASE STUDY
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-zinc-400 mb-2">
                      <span className="text-sky-400 font-medium">{project.role}</span>
                      <span>{project.period}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-zinc-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* ARCHITECTURAL HIGHLIGHTS */}
                    <div className="mt-5 pt-4 border-t border-[#1e2638]">
                      <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-2">
                        Key Engineering Decisions:
                      </p>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-sky-400 font-mono mt-0.5">·</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* TECH STACK & LINK */}
                  <div className="mt-6 pt-4 border-t border-[#1e2638] flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#151c2c] border border-[#232c3f] text-xs font-mono text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 transition inline-flex items-center gap-1"
                      >
                        <span>View Repository</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. SUPPORTING PROJECTS GRID */}
        <div>
          <h3 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-6">
            Additional Applications & Web Portals
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-[#0f141f] border border-[#1e2638] hover:border-[#2b374e] transition duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                    <span className="text-sky-400">{project.role}</span>
                    <span>{project.period}</span>
                  </div>

                  <h4 className="text-xl font-bold text-white">
                    {project.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="mt-4 space-y-1 text-xs text-zinc-400">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-sky-400">·</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1e2638] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#151c2c] text-[11px] font-mono text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-sky-400 hover:text-sky-300 transition"
                    >
                      Source ↗
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

