"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [alias, setAlias] = useState("");
  const [villageEmail, setVillageEmail] = useState("");
  const [engagement, setEngagement] = useState("Full-Time Backend / Cloud Jonin");
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
    const subject = encodeURIComponent(`[Shinobi Mission Inquiry] ${engagement} - ${alias || "Ninja Ally"}`);
    const body = encodeURIComponent(
      `Ninja Alias: ${alias}\nReturn Village Email: ${villageEmail}\nEngagement Type: ${engagement}\n\nProject Brief Dispatch:\n${brief}`
    );
    window.location.href = `mailto:${directEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-b border-[#262b3a] relative overflow-hidden">
      {/* AMBIENT CHAKRA GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* SECTION HEADER (PRD Section 4) */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-orange-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span>//</span>
            <span>KUCHIYOSE SUMMONING SCROLL</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Summon the Jonin Architect
          </h2>
          <p className="text-zinc-300 mt-4 text-sm sm:text-base leading-relaxed">
            Ready to initiate a backend deployment, scale cloud infrastructure, or discuss engineering opportunities? Cast a summoning scroll or reach out through direct endpoints.
          </p>
        </div>

        {/* SUMMONING INTERACTION CARD */}
        <div className="rounded-2xl bg-[#0f1118] border-2 border-[#262b3a] hover:border-orange-500/50 transition duration-300 p-6 sm:p-10 shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: INTERACTIVE KUCHIYOSE FORM (7 COLS) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#262b3a]">
                <span className="font-mono text-xs text-orange-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span>📜</span>
                  <span>KUCHIYOSE JUTSU FORM</span>
                </span>
                <span className="font-mono text-[11px] text-zinc-500">DISPATCH_ENCRYPTED</span>
              </div>

              {summonSuccess ? (
                <div className="p-6 rounded-xl bg-orange-950/30 border border-orange-500/60 text-center space-y-3">
                  <div className="text-3xl">🥷 ⚡</div>
                  <h3 className="text-lg font-bold text-white">Summoning Jutsu Activated</h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                    Your mission dispatch has been prepared. Your email client will initiate the transmission to Ageng Wahid directly.
                  </p>
                  <button
                    onClick={() => setSummonSuccess(false)}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#161922] border border-[#262b3a] text-xs font-mono text-orange-400 hover:text-white"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSummonSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="ninja-alias" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        NINJA ALIAS / NAME
                      </label>
                      <input
                        id="ninja-alias"
                        type="text"
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        placeholder="e.g. Kakashi Hatake"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#161922] border border-[#262b3a] text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="return-village" className="block text-xs font-mono text-zinc-400 mb-1.5">
                        RETURN VILLAGE (EMAIL) *
                      </label>
                      <input
                        id="return-village"
                        type="email"
                        required
                        value={villageEmail}
                        onChange={(e) => setVillageEmail(e.target.value)}
                        placeholder="recruiter@leafvillage.tech"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#161922] border border-[#262b3a] text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="engagement-type" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      MISSION ENGAGEMENT TYPE
                    </label>
                    <select
                      id="engagement-type"
                      value={engagement}
                      onChange={(e) => setEngagement(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#161922] border border-[#262b3a] text-sm text-white focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none"
                    >
                      <option value="Full-Time Backend / Cloud Jonin">Full-Time Backend & Cloud Jonin</option>
                      <option value="Contract Jutsu & API Architecture">Contract Mission / RESTful API Integration</option>
                      <option value="Cloud Migration (GCP Consultation)">Cloud Migration & GCP Architecture</option>
                      <option value="Other High-Impact Project">Other Technical Collaboration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="project-brief" className="block text-xs font-mono text-zinc-400 mb-1.5">
                      PROJECT BRIEF DISPATCH *
                    </label>
                    <textarea
                      id="project-brief"
                      required
                      rows={4}
                      value={brief}
                      onChange={(e) => setBrief(e.target.value)}
                      placeholder="Outline mission objectives, technical stack, or role details..."
                      className="w-full px-4 py-2.5 rounded-lg bg-[#161922] border border-[#262b3a] text-sm text-white placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-widest hover:brightness-110 transition duration-150 shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2"
                  >
                    <span>Cast Summoning Jutsu</span>
                    <span>⚡</span>
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT: DIRECT CHANNELS & TELEMETRY (5 COLS) */}
            <div className="lg:col-span-5 lg:border-l lg:border-[#262b3a] lg:pl-8 space-y-6">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                  DIRECT SCROLL ENDPOINT
                </span>
                <div className="flex items-center gap-2">
                  <div className="px-3.5 py-2.5 rounded-lg bg-[#161922] border border-[#262b3a] font-mono text-xs text-orange-300 flex-1 truncate">
                    {directEmail}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-3.5 py-2.5 rounded-lg bg-orange-500 text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-orange-400 transition flex items-center gap-1"
                    title="Copy email to clipboard"
                  >
                    {copied ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </div>

              <div className="space-y-4 font-mono text-xs pt-4 border-t border-[#262b3a]">
                <div>
                  <p className="text-zinc-500 uppercase">VOICE & WHATSAPP BEACON</p>
                  <a
                    href="tel:+6282178040716"
                    className="text-white hover:text-orange-400 transition mt-1 inline-block text-sm font-semibold"
                  >
                    +62 821-7804-0716
                  </a>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase">HIDDEN LEAF BASE</p>
                  <p className="text-zinc-300 mt-1">Yogyakarta, Indonesia (WIB / UTC+7)</p>
                </div>

                <div>
                  <p className="text-zinc-500 uppercase">NINJA REPUTATION NETWORKS</p>
                  <div className="flex items-center gap-4 mt-2">
                    <a
                      href="https://github.com/agengwahid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-[#161922] border border-[#262b3a] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://linkedin.com/in/ageng14"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-[#161922] border border-[#262b3a] text-zinc-300 hover:text-orange-400 hover:border-orange-500 transition"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#262b3a]">
                  <p className="text-[11px] text-zinc-400 leading-relaxed">
                    Notice: Communications transmitted through this scroll receive a response within 24 hours on business cycles.
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


