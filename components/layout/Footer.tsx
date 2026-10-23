export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 px-6 bg-[#07090e] text-xs font-mono text-zinc-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-zinc-300 font-sans text-sm font-semibold">
            Muhammad Ageng Zayem Wahid
          </p>
          <p className="text-zinc-400 mt-1">
            Backend & Cloud Developer · Yogyakarta, Indonesia
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/agengwahid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ageng14"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="px-3 py-1.5 rounded bg-[#111520] border border-[#1e2638] text-zinc-300 hover:text-white hover:border-zinc-600 transition"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-[#161c29] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
        <p>© {year} Muhammad Ageng Zayem Wahid. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS · Designed with Antislop Principles</p>
      </div>
    </footer>
  );
}

