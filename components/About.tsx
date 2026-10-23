export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 border-b border-[#1e2638]">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER (Antislop R-05, R-06) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            <span>01</span>
            <span>/</span>
            <span>BACKGROUND & EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Engineering foundation grounded in academic rigor and cloud practice
          </h2>
        </div>

        {/* TWO-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT COLUMN: DETAILED NARRATIVE (7 COLS) */}
          <div className="lg:col-span-7 space-y-6 text-zinc-300 leading-relaxed text-base">
            <p>
              I am an Informatics graduate from <strong className="text-white font-medium">Universitas Ahmad Dahlan (UAD)</strong> who completed my bachelor degree in 3.5 years with a <strong className="text-white font-medium">GPA of 3.91/4.00</strong>. My academic journey provided a rigorous foundation in algorithms, relational data structures, system design, and software engineering principles.
            </p>

            <p>
              During my studies, I was selected for the prestigious <strong className="text-white font-medium">MSIB Bangkit Academy 2024 (Cloud Computing track)</strong> led by Google, GoTo, and Traveloka. Through Bangkit, I honed deep hands-on expertise with Google Cloud Platform (Compute Engine, Cloud Run, Cloud Storage, Firestore), deploying containerized Node.js microservices and integrating machine learning inference pipelines.
            </p>

            <p>
              Beyond coursework, I dedicated two years as a <strong className="text-white font-medium">Computer Laboratory Teaching Assistant</strong> at UAD. I mentored hundreds of undergraduate students in Programming Algorithms, Computer Logic, and Operating Systems, strengthening both my communication and technical debugging abilities.
            </p>

            {/* CORE TECHNICAL PRINCIPLES */}
            <div className="pt-6 mt-6 border-t border-[#1e2638] grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                <h3 className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  System Architecture
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Focus on normalized schemas, clean RESTful API contracts, and predictable error handling.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                <h3 className="font-mono text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Cloud Infrastructure
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  Experience deploying microservices on GCP with automated CI/CD and production monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CHRONOLOGY TRACK (5 COLS) */}
          <div className="lg:col-span-5 space-y-8">
            {/* EDUCATION */}
            <div>
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                  <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-1">
                    <span>2022 - 2026 (3.5 Years)</span>
                    <span className="text-emerald-400">GPA 3.91/4.00</span>
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    Universitas Ahmad Dahlan (UAD)
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Bachelor of Informatics · Yogyakarta, Indonesia
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                  <div className="text-xs font-mono text-zinc-400 mb-1">
                    2019 - 2022
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    SMA Negeri 1 Lebong
                  </h4>
                  <p className="text-sm text-zinc-400 mt-1">
                    Natural Sciences (MIPA) · Bengkulu, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* LEADERSHIP & TEACHING */}
            <div>
              <h3 className="font-mono text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                Experience & Academic Service
              </h3>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                  <div className="flex items-center justify-between text-xs font-mono text-sky-400 mb-1">
                    <span>2023 - 2025</span>
                    <span>Laboratory</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    Teaching Assistant: Informatics Computer Laboratory
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    Guided lab practicums for Programming Logic, Algorithms, and Operating Systems for over 100 students.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0f141f] border border-[#1e2638]">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span>2023 - 2024</span>
                    <span>Student Body</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    Science & Technology Staff: HMIF UAD
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Organized department workshops and technical development events for informatics students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

