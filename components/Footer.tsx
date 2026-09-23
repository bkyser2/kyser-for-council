import Link from "next/link";
import { Rss } from "lucide-react";
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

        <div className="flex flex-col items-start gap-2 sm:items-end">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-semibold text-white/85">
            <Link
              href="/#newsletter"
              className="transition-colors hover:text-white"
            >
              Subscribe
            </Link>
            <Link
              href="/blog"
              className="transition-colors hover:text-white"
            >
              Blog
            </Link>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-1 transition-colors hover:text-white"
              aria-label="RSS feed"
            >
              <Rss size={12} />
              RSS
            </a>
            <a
              href={`mailto:${candidate.email}`}
              className="transition-colors hover:text-white"
            >
              {candidate.email}
            </a>
          </div>
          <div className="text-xs font-medium text-white/60">© {year} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
