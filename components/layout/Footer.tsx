export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-[#090a0f] border-t border-[#262b3a] text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-zinc-200 font-sans text-sm font-semibold">
              Muhammad Ageng Zayem Wahid
            </p>
            <span className="text-[10px] text-orange-400 bg-orange-950/60 border border-orange-700/50 px-1.5 py-0.2 rounded font-mono">
              JONIN ARCHITECT
            </span>
          </div>
          <p className="text-zinc-400 mt-1">
            Backend & Cloud Developer · Yogyakarta, Indonesia [SECTOR: ID-YO]
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ageng14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#main-content"
            className="px-3 py-1.5 rounded bg-[#161922] border border-[#262b3a] text-zinc-300 hover:text-orange-400 hover:border-orange-500/50 transition"
          >
            Return to Top ↑
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#1a1e2a] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
        <p>© {year} Muhammad Ageng Zayem Wahid. All missions classified.</p>
        <p>Built with Next.js & Tailwind CSS · Designed with Antislop Principles</p>
      </div>
    </footer>
  );
}

