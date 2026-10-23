export default function About() {
  const chronicles = [
    {
      period: "2024",
      badge: "GRADUATE DISTINCTION",
      badgeColor: "border-orange-500/50 text-orange-400 bg-orange-950/40",
      title: "Bangkit Academy: Cloud Computing Track",
      organization: "Google · GoTo · Traveloka · Kemendikbudristek",
      description:
        "Menyelesaikan kurikulum intensif arsitektur Google Cloud Platform (Compute Engine, Cloud Run, Cloud Storage, Firestore). Berperan sebagai Backend Engineer dalam Capstone Project DermaScan yang menghubungkan aplikasi mobile dengan model inferensi machine learning.",
    },
    {
      period: "2023 - 2025",
      badge: "2 TAHUN PENGALAMAN",
      badgeColor: "border-amber-500/50 text-amber-300 bg-amber-950/40",
      title: "Asisten Praktikum Laboratorium Komputer Informatika",
      organization: "Laboratorium Informatika, Universitas Ahmad Dahlan",
      description:
        "Membimbing lebih dari 100 mahasiswa strata satu (S1) dalam praktikum Logika Pemrograman, Algoritma Pemrograman, dan Sistem Operasi. Melakukan code review berkala, evaluasi tugas praktikum, serta asistensi teknis debugging.",
    },
    {
      period: "2022 - 2026",
      badge: "IPK 3.91 / 4.00",
      badgeColor: "border-orange-500/50 text-orange-400 bg-orange-950/40",
      title: "S1 Informatika (Lulus Akselerasi 3.5 Tahun)",
      organization: "Universitas Ahmad Dahlan (UAD) · Yogyakarta",
      description:
        "Lulus dengan predikat kelulusan tertinggi (Cum Laude / Accelerated) dalam masa studi 3.5 tahun. Fokus pada rekayasa backend, perancangan skema database terdistribusi, serta optimasi performa sistem web.",
    },
    {
      period: "2023 - 2024",
      badge: "ORGANISASI MAHASISWA",
      badgeColor: "border-[#22222a] text-zinc-300 bg-[#131318]",
      title: "Staf Bidang Ilmu Pengetahuan & Teknologi (IPTEK)",
      organization: "HMIF Universitas Ahmad Dahlan",
      description:
        "Menginisiasi dan mengoordinasikan workshop pemrograman, study club pengembangan perangkat lunak, serta seminar teknologi untuk mahasiswa Informatika.",
    },
    {
      period: "2019 - 2022",
      badge: "PENDIDIKAN AWAL",
      badgeColor: "border-[#22222a] text-zinc-400 bg-[#131318]",
      title: "SMA Negeri 1 Lebong",
      organization: "Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA)",
      description:
        "Membangun fondasi logika berpikir analitis, matematika, dan pemecahan masalah sebelum melangkah ke jenjang teknik informatika.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 border-b border-[#22222a] relative">
      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>03</span>
            <span>//</span>
            <span>REKAM JEJAK & RIWAYAT PENDIDIKAN</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Pengalaman Akademik & Kepemimpinan
              </h2>
              <p className="mt-3 text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Rekam jejak terverifikasi mulai dari kelulusan akselerasi S1 Informatika (IPK 3.91), program Cloud Computing Bangkit Academy (Google), hingga 2 tahun membimbing 100+ mahasiswa di laboratorium.
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-400 border border-[#22222a] px-3 py-1.5 rounded-lg bg-[#0d0d11]">
              TRACK: ACCELERATED_HONORS
            </div>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT: NARRATIVE & CHRONOLOGY TRACK */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN: THE ENGINEERING VALUES (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 sm:p-7 rounded-2xl bg-[#0d0d11] border border-[#22222a] shadow-lg">
              <span className="text-xs font-mono text-orange-400 tracking-wider uppercase font-semibold">
                PRINSIP REKAYASA SISTEM
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                Kecepatan, Ketahanan, dan Struktur Bersih
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                Bagi seorang backend engineer, keunggulan sejati berada pada apa yang tidak kasat mata: latency milidetik, handling lonjakan trafik secara mulus, dan integritas data tanpa kompromi.
              </p>

              <div className="mt-6 pt-5 border-t border-[#22222a] space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-base mt-0.5">⚡</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Arsitektur Asinkron & Terukur</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Penerapan event-driven API yang memisahkan komputasi berat dari waktu respons klien.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-amber-400 text-base mt-0.5">⛰️</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Integritas Data Relasional</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Normalisasi skema dan query terindeks untuk menjaga keandalan transaksi ACID secara optimal.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-orange-400 text-base mt-0.5">📜</span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Transfer Pengetahuan & Mentoring</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Berpengalaman membimbing mahasiswa bahwa kode yang bersih dan mudah dipelihara selalu lebih unggul dibanding kode yang rumit tanpa alasan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CALLOUT BADGE */}
            <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/30 flex items-center justify-between text-xs font-mono">
              <span className="text-orange-300 font-semibold">Gelar S1 Sarjana Komputer</span>
              <span className="text-zinc-400">Lulus Akselerasi 3.5 Tahun</span>
            </div>
          </div>

          {/* RIGHT COLUMN: INTERACTIVE CHRONICLES TIMELINE (7 COLS) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {chronicles.map((item, idx) => (
              <div
                key={idx}
                className="relative pl-5 sm:pl-8 border-l-2 border-[#22222a] hover:border-orange-500 transition duration-200 group pb-3 sm:pb-4 last:pb-0"
              >
                {/* TIMELINE NODE DOT */}
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#131318] border-2 border-orange-400 group-hover:bg-orange-500 group-hover:scale-110 transition duration-200 shadow-[0_0_10px_rgba(249,115,22,0.4)]" />

                <div className="p-4 sm:p-6 rounded-2xl bg-[#0d0d11] border border-[#22222a] group-hover:border-[#33333d] transition duration-200 shadow-md">
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

                  <p className="text-xs font-mono text-amber-300/90 mt-1">
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


