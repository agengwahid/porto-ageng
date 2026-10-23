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
    jutsuCategory: "ARSITEKTUR BACKEND & RESTFUL APIS",
    description: "Eksekusi server performa tinggi, arsitektur event-driven asinkron, dan perancangan endpoint RESTful API terstandarisasi.",
    techniques: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful API", "MVC Pattern", "Async/Await"],
    borderGlow: "hover:border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    badgeBg: "bg-orange-950/30 border-orange-800/40 text-orange-300",
    accentColor: "text-orange-400",
  },
  {
    element: "Earth Release (Doton)",
    kanji: "土遁",
    icon: "⛰️",
    jutsuCategory: "CLOUD PLATFORM & INFRASTRUKTUR TANGGUH",
    description: "Infrastruktur cloud handal, container serverless, dan komputasi skala enterprise di Google Cloud Platform.",
    techniques: ["Google Cloud Platform", "Cloud Run", "Compute Engine", "Cloud Storage", "Linux Shell", "GCP IAM & VPC"],
    borderGlow: "hover:border-amber-500/80 shadow-[0_0_15px_rgba(234,179,8,0.1)]",
    badgeBg: "bg-amber-950/30 border-amber-800/40 text-amber-300",
    accentColor: "text-amber-400",
  },
  {
    element: "Sealing Jutsu (Fuinjutsu)",
    kanji: "封印術",
    icon: "📜",
    jutsuCategory: "SKEMA DATABASE & PERSISTENSI DATA",
    description: "Integritas data transaksi, normalisasi skema database relasional, query terindeks efisien, dan pemodelan dokumen NoSQL.",
    techniques: ["MySQL", "Normalisasi Skema Relasional", "Firestore NoSQL", "Optimasi Query", "Integritas ACID"],
    borderGlow: "hover:border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    badgeBg: "bg-orange-950/30 border-orange-800/40 text-orange-300",
    accentColor: "text-orange-400",
  },
  {
    element: "Wind Release (Futon)",
    kanji: "風遁",
    icon: "🌪️",
    jutsuCategory: "DEVOPS TOOLS & KEPEMIMPINAN TEKNIS",
    description: "Version control kolaboratif, pengujian kontrak API terpadu, dan pembimbingan praktikum bagi 100+ mahasiswa informatika.",
    techniques: ["Git & GitHub", "Postman", "Alur CI/CD", "Asistensi Lab Praktikum", "Problem Solving", "Kolaborasi Tim"],
    borderGlow: "hover:border-zinc-500/80 shadow-[0_0_15px_rgba(255,255,255,0.05)]",
    badgeBg: "bg-[#131318] border-[#22222a] text-zinc-300",
    accentColor: "text-zinc-300",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4 sm:px-6 border-b border-[#22222a] relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-16">
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
            <div className="font-mono text-xs text-zinc-400 border border-[#22222a] px-3 py-1.5 rounded-lg bg-[#0d0d11]">
              STATUS: 4_STACKS_ACTIVE
            </div>
          </div>
        </div>

        {/* AFFINITIES GRID */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {affinities.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#0d0d11] border border-[#22222a] ${item.borderGlow} transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* HEADER OF CARD WITH KANJI STAMP */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-[#131318] border border-[#22222a]">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition flex items-center gap-2">
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
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-5 border-t border-[#22222a]">
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-3">
                  TEKNOLOGI & TOOLS:
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.techniques.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${item.badgeBg} transition`}
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


