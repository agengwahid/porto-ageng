"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [alias, setAlias] = useState("");
  const [villageEmail, setVillageEmail] = useState("");
  const [engagement, setEngagement] = useState("Full-Time Backend / Cloud Developer");
  const [brief, setBrief] = useState("");
  const [summonSuccess, setSummonSuccess] = useState(false);

  const directEmail = "agngwahid123@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSummonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!villageEmail || !brief) return;
    setSummonSuccess(true);
    // Open email client with pre-filled content
    const subject = encodeURIComponent(`[Hiring & Kolaborasi] ${engagement} - ${alias || "Recruiter / Partner"}`);
    const body = encodeURIComponent(
      `Nama / Perusahaan: ${alias}\nEmail: ${villageEmail}\nTipe Kebutuhan: ${engagement}\n\nPesan / Detail Kebutuhan:\n${brief}`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 border-b border-[#22222a] relative overflow-hidden">
      {/* WARM AMBIENT CHAKRA GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[580px] h-[450px] sm:h-[580px] bg-orange-600/[0.07] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="mb-12 sm:mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span>//</span>
            <span>HUBUNGI & DISKUSI PELUANG KERJA</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mari Berkolaborasi & Membangun Sistem
          </h2>
          <p className="text-zinc-300 mt-4 text-sm sm:text-base leading-relaxed">
            Terbuka untuk posisi Full-Time Backend Developer, Cloud Engineer, proyek kontrak API, maupun konsultasi infrastruktur Google Cloud Platform. Kirimkan pesan atau hubungi kontak langsung di bawah ini.
          </p>
        </div>

        {/* INTERACTION CARD */}
        <div className="rounded-2xl bg-[#0d0d11] border border-[#22222a] hover:border-orange-500/50 transition duration-300 p-5 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT: FORMULIR DISPATCH (7 COLS) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#22222a]">
                <span className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>📜</span>
                  <span>FORMULIR PESAN & DISKUSI</span>
                </span>
                <span className="font-mono text-[11px] text-zinc-500">KUCHIYOSE_DISPATCH</span>
              </div>

              {summonSuccess ? (
                <div className="p-6 rounded-xl bg-orange-950/30 border border-orange-500/60 text-center space-y-3">
                  <div className="text-3xl">🥷 ⚡</div>
                  <h3 className="text-lg font-bold text-white">Pesan Siap Ditransmisikan</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                    Aplikasi email Anda akan terbuka dengan draf pesan otomatis untuk dikirimkan langsung ke Ageng Wahid.
                  </p>
                  <button
                    onClick={() => setSummonSuccess(false)}
                    className="mt-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-[#131318] border border-[#22222a] text-xs font-mono text-orange-400 hover:text-white"
                  >
                    Kirim Pesan Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSummonSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ninja-alias" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        NAMA LENGKAP / PERUSAHAAN
                      </label>
                      <input
                        id="ninja-alias"
                        type="text"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        placeholder="Contoh: Tech Recruiter / HR Lead"
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#131318] border border-[#22222a] text-base sm:text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="return-village" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        ALAMAT EMAIL RESMI *
                      </label>
                      <input
                        id="return-village"
                        type="email"
                        required
                        value={villageEmail}
                        onChange={(e) => setVillageEmail(e.target.value)}
                        placeholder="recruiter@company.com"
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#131318] border border-[#22222a] text-base sm:text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="engagement-type" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      TIPE KEBUTUHAN / PELUANG
                    </label>
                    <select
                      id="engagement-type"
                      value={engagement}
                      onChange={(e) => setEngagement(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-[#131318] border border-[#22222a] text-base sm:text-sm text-white focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                    >
                      <option value="Full-Time Backend / Cloud Developer">Full-Time Backend & Cloud Developer</option>
                      <option value="Contract / RESTful API Architecture">Kontrak Proyek / Arsitektur API</option>
                      <option value="Cloud Migration (GCP Consultation)">Migrasi Cloud & Konsultasi GCP</option>
                      <option value="Other High-Impact Project">Peluang Kolaborasi Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="project-brief" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      DETAIL PESAN / DESKRIPSI KEBUTUHAN *
                    </label>
                    <textarea
                      id="project-brief"
                      required
                      rows={4}
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Jelaskan kebutuhan peran, tech stack, atau cakupan proyek yang ingin didiskusikan..."
                      className="w-full px-4 py-3 rounded-xl bg-[#131318] border border-[#22222a] text-base sm:text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-widest hover:brightness-110 transition duration-150 shadow-[0_0_20px_rgba(249,115,22,0.25)] flex items-center justify-center gap-2"
                  >
                    <span>Kirim Pesan / Inisiasi Diskusi</span>
                    <span>⚡</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: DIRECT CHANNELS & TELEMETRY (5 COLS) */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#22222a] lg:pl-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  ALAMAT EMAIL UTAMA
                </span>
                <div className="flex items-center gap-2">
                  <div className="px-3.5 py-3 rounded-xl bg-[#131318] border border-[#22222a] font-mono text-xs text-orange-300 flex-1 truncate min-h-[44px] flex items-center">
                    {directEmail}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="min-h-[44px] px-4 py-2.5 rounded-xl bg-orange-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-orange-400 transition flex items-center gap-1"
                    title="Salin email ke clipboard"
                  >
                    {copied ? "✓ Tersalin" : "Salin"}
                  </button>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs pt-4 border-t border-[#22222a]">
                <div>
                  <p className="text-zinc-500 uppercase">WHATSAPP & TELEPON</p>
                  <a
                    href="https://wa.me/6282178040716"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-400 transition mt-1 inline-block text-sm font-semibold min-h-[36px] flex items-center"
                  >
                    +62 821-7804-0716 ↗
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase">DOMISILI & KETERSEDIAAN</p>
                  <p className="text-zinc-300 mt-1">Yogyakarta, Indonesia (Siap Remote / On-Site)</p>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase">PROFIL PROFESIONAL</p>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://github.com/agengwahid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-[#131318] border border-[#22222a] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition flex items-center"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://linkedin.com/in/ageng14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-[#131318] border border-[#22222a] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition flex items-center"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22222a]">
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Catatan: Komunikasi melalui formulir atau email langsung akan ditanggapi dalam waktu 24 jam pada hari kerja.
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


