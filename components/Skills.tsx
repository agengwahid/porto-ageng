interface SkillPillar {
  title: string;
  code: string;
  icon: string;
  category: string;
  description: string;
  technologies: string[];
  borderGlow: string;
  badgeBg: string;
  accentColor: string;
}

const skillPillars: SkillPillar[] = [
  {
    title: "Backend Architecture & RESTful APIs",
    code: "BACKEND",
    icon: "⚡",
    category: "RESTFUL APIS & SERVER RUNTIME",
    description: "Pengembangan arsitektur backend performa tinggi, implementasi endpoint RESTful API terstandarisasi, arsitektur MVC, dan penanganan logika server asinkron.",
    technologies: ["Node.js", "Express.js", "PHP", "Laravel", "RESTful API", "MVC Pattern", "Async/Await Architecture"],
    borderGlow: "hover:border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    badgeBg: "bg-orange-950/30 border-orange-800/40 text-orange-300",
    accentColor: "text-orange-400",
  },
  {
    title: "Cloud Infrastructure & Serverless",
    code: "CLOUD",
    icon: "☁️",
    category: "GOOGLE CLOUD PLATFORM INFRASTRUCTURE",
    description: "Deployment kontainer serverless, manajemen komputasi virtual, penyimpanan cloud terdistribusi, serta konfigurasi akses IAM dan jaringan VPC pada Google Cloud Platform.",
    technologies: ["Google Cloud Platform", "Cloud Run", "Compute Engine", "Cloud Storage", "Linux Shell / Bash", "IAM & VPC Security"],
    borderGlow: "hover:border-amber-500/80 shadow-[0_0_15px_rgba(234,179,8,0.1)]",
    badgeBg: "bg-amber-950/30 border-amber-800/40 text-amber-300",
    accentColor: "text-amber-400",
  },
  {
    title: "Database Architecture & Data Persistence",
    code: "DATABASE",
    icon: "🗄️",
    category: "RELASIONAL & NOSQL SYSTEMS",
    description: "Perancangan dan normalisasi skema basis data relasional, pengindeksan query efisien, pemodelan dokumen NoSQL, serta penjaminan integritas transaksi ACID.",
    technologies: ["MySQL", "Normalisasi Skema Relasional", "Firestore NoSQL", "Optimasi Query & Indexing", "Integritas Transaksi ACID"],
    borderGlow: "hover:border-orange-500/80 shadow-[0_0_15px_rgba(249,115,22,0.1)]",
    badgeBg: "bg-orange-950/30 border-orange-800/40 text-orange-300",
    accentColor: "text-orange-400",
  },
  {
    title: "DevOps, Tooling & Technical Mentoring",
    code: "DEVOPS",
    icon: "🛠️",
    category: "VERSION CONTROL & TEAM LEADERSHIP",
    description: "Alur kolaborasi version control Git, pengujian kontrak endpoint API melalui Postman, otomatisasi pipeline, dan pengalaman 2 tahun membimbing 100+ mahasiswa di laboratorium komputer.",
    technologies: ["Git & GitHub", "Postman", "Alur CI/CD", "Asistensi Lab Praktikum", "Code Review", "Problem Solving & Kolaborasi"],
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
            <span>KEAHLIAN TEKNIS & PILAR KOMPETENSI</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Kompetensi Inti & Rekayasa Sistem
              </h2>
              <p className="text-zinc-300 mt-3 text-sm sm:text-base max-w-2xl leading-relaxed">
                Dikelompokkan ke dalam 4 pilar arsitektur utama: Backend & RESTful API, Cloud Infrastructure (GCP), Manajemen Database Relasional & NoSQL, serta DevOps & Kepemimpinan Teknis.
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 border border-[#22222a] px-3 py-1.5 rounded-lg bg-[#0d0d11]">
              STATUS: 4_STACKS_ACTIVE
            </div>
          </div>
        </div>

        {/* PILLARS GRID */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillPillars.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl bg-[#0d0d11] border border-[#22222a] ${item.borderGlow} transition-all duration-300 p-5 sm:p-8 flex flex-col justify-between group hover:-translate-y-1`}
            >
              <div>
                {/* HEADER OF CARD */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl p-2.5 rounded-xl bg-[#131318] border border-[#22222a]">
                      {item.icon}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-orange-400 transition flex items-center gap-2">
                        <span>{item.title}</span>
                      </h3>
                      <p className={`text-[11px] font-mono font-semibold tracking-wider mt-0.5 ${item.accentColor}`}>
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-[#131318] border border-[#22222a] text-zinc-400 select-none">
                    {item.code}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>

              {/* TECHNIQUES BADGE LIST */}
              <div className="mt-6 pt-5 border-t border-[#22222a]">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#131318] border border-[#22222a] text-xs font-mono text-zinc-300 hover:text-white hover:border-orange-500/40 transition"
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
