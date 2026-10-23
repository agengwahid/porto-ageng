export default function About() {
  const chronicles = [
    {
      period: "2024",
      badge: "S-RANK GRADUATE",
      badgeColor: "border-orange-500/50 text-orange-400 bg-orange-950/40",
      title: "Bangkit Academy: Cloud Computing Track",
      organization: "Google · GoTo · Traveloka · Kampus Merdeka",
      description:
        "Mastered Google Cloud Platform services (Compute Engine, Cloud Run, Cloud Storage, Firestore). Built and deployed the DermaScan capstone backend connecting mobile clients with ML inference models.",
    },
    {
      period: "2023 - 2025",
      badge: "LAB SENSEI / ASST",
      badgeColor: "border-cyan-500/50 text-cyan-300 bg-cyan-950/40",
      title: "Computer Laboratory Teaching Assistant",
      organization: "Informatics Computer Laboratory, UAD",
      description:
        "Mentored over 100 undergraduate students across lab practicums for Programming Logic, Programming Algorithms, and Operating Systems. Conducted code reviews and guided architectural problem-solving.",
    },
    {
      period: "2022 - 2026",
      badge: "CHAKRA: 3.91 GPA",
      badgeColor: "border-amber-500/50 text-amber-300 bg-amber-950/40",
      title: "Bachelor of Informatics (Summa Cum Laude in 3.5 Years)",
      organization: "Universitas Ahmad Dahlan (UAD) · Yogyakarta",
      description:
        "Graduated with highest academic honors in an accelerated 3.5-year trajectory. Specialized in relational database modeling, algorithms, and distributed backend systems.",
    },
    {
      period: "2023 - 2024",
      badge: "DEPARTMENT STAFF",
      badgeColor: "border-zinc-700 text-zinc-300 bg-[#161922]",
      title: "Science & Technology Department Staff",
      organization: "HMIF Universitas Ahmad Dahlan",
      description:
        "Organized software workshops, code challenges, and technological development seminars for university informatics students.",
    },
    {
      period: "2019 - 2022",
      badge: "FOUNDATION",
      badgeColor: "border-zinc-700 text-zinc-400 bg-[#161922]",
      title: "SMA Negeri 1 Lebong",
      organization: "Natural Sciences (MIPA) · Bengkulu, Indonesia",
      description:
        "Built early analytical reasoning, mathematics, and science fundamentals before advancing to computer science studies.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 border-b border-[#262b3a] relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER (PRD Section 4) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>03</span>
            <span>//</span>
            <span>SCROLL OF CHRONICLES & SHINOBI WAY</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                The Path of Engineering Mastery
              </h2>
              <p className="mt-3 text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                A chronological testament to disciplined academic training, intensive cloud computing programs, and laboratory mentorship.
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 border border-[#262b3a] px-3 py-1.5 rounded bg-[#111319]">
              TRACK: ACCELERATED_HONORS
            </div>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT: NARRATIVE & CHRONOLOGY TRACK */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: THE SHINOBI PHILOSOPHY (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0f1118] border border-[#262b3a] shadow-lg">
              <span className="text-xs font-mono text-orange-400 tracking-wider uppercase font-semibold">
                NINJA CREED & CODE JUTSU
              </span>
              <h3 className="text-xl font-bold text-white mt-2">
                Speed, Resilience, and Clean Execution
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                In backend engineering, just like in the ninja way, elegance lies in what is unseen. A truly powerful system responds in milliseconds, handles sudden spikes effortlessly, and safeguards every byte of mission-critical data.
              </p>

              <div className="mt-6 pt-5 border-t border-[#262b3a] space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-base mt-0.5">⚡</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Asynchronous Architecture</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Event-driven APIs that decouple intensive processing from client response times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 text-base mt-0.5">⛰️</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Immutable Persistence</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Normalized relational schemas and indexed queries that guarantee ACID reliability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-base mt-0.5">📜</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Knowledge Transmission</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Teaching junior developers that code clarity always triumphs over clever obfuscation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CALLOUT BADGE */}
            <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-orange-300">Summa Cum Laude Degree</span>
              <span className="text-zinc-400">Completed in 3.5 Years</span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CHRONICLES TIMELINE (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            {chronicles.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-6 sm:pl-8 border-l-2 border-[#262b3a] hover:border-orange-500 transition duration-200 group pb-4 last:pb-0"
              >
                {/* TIMELINE NODE DOT */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#161922] border-2 border-orange-400 group-hover:bg-orange-500 group-hover:scale-110 transition duration-200 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

                <div className="p-5 sm:p-6 rounded-xl bg-[#0f1118] border border-[#262b3a] group-hover:border-[#384055] transition duration-200 shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-orange-400">
                      {item.period}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition">
                    {item.title}
                  </h4>

                  <p className="text-xs font-mono text-cyan-300/90 mt-1">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


