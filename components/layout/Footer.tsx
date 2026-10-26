export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-[#070709] border-t border-[#22222a] text-xs font-mono text-zinc-400 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <p className="text-zinc-200 font-sans text-sm font-semibold">
              Muhammad Ageng Zayem Wahid
            </p>
            <span className="text-[10px] text-orange-400 bg-orange-950/40 border border-orange-500/30 px-2 py-0.5 rounded font-mono">
              JONIN ARCHITECT
            </span>
          </div>
          <p className="text-zinc-400 mt-1">
            Backend &amp; Cloud Developer · Yogyakarta, Indonesia
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-400 transition min-h-[44px] inline-flex items-center"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ageng14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-orange-400 transition min-h-[44px] inline-flex items-center"
          >
            LinkedIn
          </a>
          <a
            href="#main-content"
            className="px-3.5 py-2.5 rounded-lg bg-[#0d0d11] border border-[#22222a] text-zinc-300 hover:text-orange-400 hover:border-orange-500/40 transition min-h-[44px] inline-flex items-center"
          >
            Kembali ke Atas ↑
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#181820] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
        <p>© {year} Muhammad Ageng Zayem Wahid. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}

