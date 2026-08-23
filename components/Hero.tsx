import { candidate } from "@/content";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-40 pb-28 sm:pt-48 sm:pb-36"
    >
      {/* Soft radial glow behind the hero */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-hero-glow"
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm animate-fade-up"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-70"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red"></span>
          </span>
          <MapPin size={12} className="opacity-70" />
          <span>{candidate.city}</span>
        </div>

        <h1
          className="mt-8 text-balance text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          <span className="gradient-text">{candidate.tagline}</span>
        </h1>

        <p
          className="mx-auto mt-6 max-w-2xl text-balance text-lg font-semibold text-foreground/85 sm:text-xl animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          {candidate.subTagline}
        </p>

        <div
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#priorities"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1e3a] shadow-md transition-all hover:bg-brand hover:text-[#0b1e3a]"
          >
            See where I stand
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href={`mailto:${candidate.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            {candidate.email}
          </a>
        </div>

        <div
          className="mt-14 text-xs font-semibold uppercase tracking-[0.2em] text-muted animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          {candidate.name} · {candidate.role}
        </div>
      </div>
    </section>
  );
}
