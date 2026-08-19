import { candidate } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/20 bg-[#7d2c46]">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/50 bg-white font-mono text-[11px] font-bold text-[#0b1e3a]">
            BK
          </span>
          <div>
            <div className="text-sm font-bold text-white">
              {candidate.name} for Doraville
            </div>
            <div className="text-xs font-medium text-white/70">{candidate.paidForBy}</div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 sm:items-end">
          <a
            href={`mailto:${candidate.email}`}
            className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            {candidate.email}
          </a>
          <div className="text-xs font-medium text-white/60">© {year} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
