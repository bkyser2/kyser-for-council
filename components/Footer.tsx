import { candidate } from "@/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-[#0a0a0a] font-mono text-[11px] text-brand">
            BK
          </span>
          <div>
            <div className="text-sm font-medium text-foreground">
              {candidate.name} for Doraville
            </div>
            <div className="text-xs text-muted">{candidate.paidForBy}</div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 sm:items-end">
          <a
            href={`mailto:${candidate.email}`}
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            {candidate.email}
          </a>
          <div className="text-xs text-muted">© {year} All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
