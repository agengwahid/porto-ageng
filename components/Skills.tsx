interface ElementalAffinity {
  element: string;
  kanji: string;
  icon: string;
  jutsuCategory: string;
  description: string;
  techniques: string[];
  borderGlow: string;
  badgeBg: string;
  accentColor: string;
}

const affinities: ElementalAffinity[] = [
  {
    element: "Lightning Release (Raiton)",
    kanji: "雷遁",
    icon: "⚡",
    jutsuCategory: "HIGH-THROUGHPUT BACKEND & APIS",
    description: "High-speed server execution, asynchronous event loops, and clean RESTful API endpoint routing.",
    techniques: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful API", "MVC Architecture", "Async/Await"],
    borderGlow: "hover:border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.08)]",
    badgeBg: "bg-cyan-950/40 border-cyan-800/40 text-cyan-300",
    accentColor: "text-cyan-400",
  },
  {
    element: "Earth Release (Doton)",
    kanji: "土遁",
    icon: "⛰️",
    jutsuCategory: "CLOUD PLATFORMS & RESILIENT INFRASTRUCTURE",
    description: "Rock-solid cloud infrastructure, serverless containers, and enterprise computing on Google Cloud Platform.",
    techniques: ["Google Cloud Platform", "Compute Engine", "Cloud Run", "Cloud Storage", "Linux Shell", "GCP IAM & VPC"],
    borderGlow: "hover:border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.08)]",
    badgeBg: "bg-orange-950/40 border-orange-800/40 text-orange-300",
    accentColor: "text-orange-400",
  },
  {
    element: "Sealing Jutsu (Fuinjutsu)",
    kanji: "封印術",
    icon: "📜",
    jutsuCategory: "DATABASE SCHEMA & SECURE PERSISTENCE",
    description: "Immutable data persistence, relational database normalization, indexed queries, and document store modeling.",
    techniques: ["MySQL", "Relational Schema Normalization", "Firestore NoSQL", "Query Optimization", "Data Integrity"],
    borderGlow: "hover:border-amber-400/80 shadow-[0_0_15px_rgba(245,158,11,0.08)]",
    badgeBg: "bg-amber-950/40 border-amber-800/40 text-amber-300",
    accentColor: "text-amber-400",
  },
  {
    element: "Wind Release (Futon)",
    kanji: "風遁",
    icon: "🌪️",
    jutsuCategory: "DEV WORKFLOW & ACADEMIC MENTORSHIP",
    description: "Seamless version control, API contract testing, and technical mentorship across 100+ lab students.",
    techniques: ["Git & GitHub", "Postman", "CI/CD Concepts", "Lab Practicum Teaching", "Analytical Problem Solving", "Teamwork"],
    borderGlow: "hover:border-emerald-400/80 shadow-[0_0_15px_rgba(52,211,153,0.08)]",
    badgeBg: "bg-emerald-950/40 border-emerald-800/40 text-emerald-300",
    accentColor: "text-emerald-400",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 border-b border-[#232a3d] relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>01</span>
            <span>//</span>
            <span>KEAHLIAN TEKNIS & STACK ARSITEKTUR</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Kompetensi Inti & Pilar Teknologi
              </h2>
              <p className="text-zinc-300 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
                Dikelompokkan berdasarkan 4 pilar arsitektur: Lightning/Raiton (API & Backend), Earth/Doton (Sistem Cloud GCP), Sealing/Fuinjutsu (Database Relasional & NoSQL), dan Wind/Futon (Tools & Kepemimpinan Teknis).
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 border border-[#232a3d] px-3 py-1.5 rounded-lg bg-[#0e111a]">
              STATUS: 4_STACKS_ACTIVE
            </div>
          </div>
        </div>

        {/* AFFINITIES GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {affinities.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#0e111a] border border-[#232a3d] ${item.borderGlow} transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* HEADER OF CARD WITH KANJI STAMP */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-[#151926] border border-[#232a3d]">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition flex items-center gap-2">
                        <span>{item.element}</span>
                      </h3>
                      <p className={`text-[11px] font-mono font-semibold tracking-wider mt-0.5 ${item.accentColor}`}>
                        {item.jutsuCategory}
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-bold text-zinc-700/60 group-hover:text-zinc-500 transition font-mono select-none">
                    {item.kanji}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* TECHNIQUES BADGE LIST */}
              <div className="mt-8 pt-5 border-t border-[#232a3d]">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
                  TEKNOLOGI & TOOLS:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.techniques.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-md text-xs font-mono font-medium border ${item.badgeBg} transition`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


