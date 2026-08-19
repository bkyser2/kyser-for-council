"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { candidate, nav } from "@/content";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Hash links (e.g. "#about") only exist on the homepage. When the user is
  // on another route like /donate, rewrite them to "/#about" so clicking a
  // section link navigates home and scrolls to that section.
  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !onHome) return `/${href}`;
    return href;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href={onHome ? "#top" : "/"}
          className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/60 bg-white font-mono text-[11px] font-bold text-[#0b1e3a] transition-colors group-hover:border-white">
            BK
          </span>
          <span className="hidden sm:inline">Kyser for Doraville</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={resolveHref(n.href)}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href={`mailto:${candidate.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#0b1e3a] shadow-sm transition-all hover:bg-brand hover:text-[#0b1e3a]"
          >
            Get in touch
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        <button
          className="text-foreground md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={resolveHref(n.href)}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={`mailto:${candidate.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-white px-3 py-2 text-center text-sm font-semibold text-[#0b1e3a]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

