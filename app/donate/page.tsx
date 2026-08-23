import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Construction, Heart, Mail, Shield } from "lucide-react";
import { candidate } from "@/content";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Donate · ${candidate.name} for Doraville`,
  description: `Support the ${candidate.name} for Doraville City Council campaign.`,
};

export default function DonatePage() {
  const isLive =
    candidate.donateStatus === "live" && candidate.donateUrl.length > 0;

  return (
    <>
      <Nav />
      <main>
        <section
          id="top"
          className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
        >
          {/* Soft radial glow, matching Hero */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-hero-glow"
          />

          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm animate-fade-up">
              {isLive ? (
                <>
                  <Heart size={12} className="opacity-80" />
                  <span>Support the campaign</span>
                </>
              ) : (
                <>
                  <Construction size={12} className="opacity-80" />
                  <span>Donations · Coming soon</span>
                </>
              )}
            </div>

            <h1
              className="mt-8 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <span className="gradient-text">
                {isLive
                  ? "Chip in to keep Doraville, Doraville."
                  : "Donations Open Soon"}
              </span>
            </h1>

            <p
              className="mx-auto mt-6 max-w-2xl text-balance text-lg font-semibold text-foreground/85 sm:text-xl animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              {isLive
                ? "Every contribution funds yard signs, door hangers, and the neighbor-to-neighbor conversations that win local elections. Thank you for pitching in."
                : "The campaign bank account is being set up. Once it's approved, this page will link straight to our ActBlue donation portal. In the meantime, there are still plenty of ways to help."}
            </p>

            {isLive ? (
              <LiveCTA url={candidate.donateUrl} />
            ) : (
              <UnderConstructionCTA email={candidate.email} />
            )}
          </div>
        </section>

        {/* Info cards */}
        <section className="relative border-t border-white/15 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-4 sm:grid-cols-3">
              <InfoCard
                icon={<Shield size={18} />}
                title="Secure & compliant"
                body={
                  isLive
                    ? "Donations are processed through ActBlue, the same trusted platform used by campaigns nationwide. Your card details never touch this site."
                    : "When live, donations will be processed through ActBlue. Your card details never touch this site, and every contribution is reported per Georgia law."
                }
              />
              <InfoCard
                icon={<Heart size={18} />}
                title="Where it goes"
                body="Yard signs, door hangers, printed literature, and community events. Every dollar goes toward reaching Doraville voters directly."
              />
              <InfoCard
                icon={<Mail size={18} />}
                title="Other ways to help"
                body="Volunteer to canvass, host a meet-and-greet, or just tell a neighbor. Word of mouth wins local races."
                cta={{
                  label: "Email the campaign",
                  href: `mailto:${candidate.email}`,
                }}
              />
            </div>

            {/* Legal / disclosure */}
            <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-white/20 bg-white/5 p-6 text-center backdrop-blur-sm">
              <p className="text-sm font-medium text-white/85">
                {candidate.paidForBy}
              </p>
              <p className="mt-2 text-xs font-medium text-white/60">
                Contributions to {candidate.name} for Doraville are not
                tax-deductible for federal income tax purposes. Campaign
                contributions are subject to Georgia campaign-finance limits
                and reporting requirements.
              </p>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition-colors hover:text-white"
              >
                <span aria-hidden>←</span> Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function LiveCTA({ url }: { url: string }) {
  return (
    <div
      className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
      style={{ animationDelay: "240ms" }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#0b1e3a] shadow-md transition-all hover:bg-brand hover:text-[#0b1e3a]"
      >
        Donate on ActBlue
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </a>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Secure · Powered by ActBlue
      </span>
    </div>
  );
}

function UnderConstructionCTA({ email }: { email: string }) {
  return (
    <>
      <div
        className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href={`mailto:${email}?subject=I%20want%20to%20support%20the%20campaign`}
          className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1e3a] shadow-md transition-all hover:bg-brand hover:text-[#0b1e3a]"
        >
          Tell me when donations open
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5"
          />
        </a>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Volunteer instead
        </Link>
      </div>

      {/* Status strip */}
      <div
        className="mx-auto mt-12 max-w-xl rounded-xl border border-white/25 bg-white/10 p-5 text-left backdrop-blur-sm animate-fade-up"
        style={{ animationDelay: "320ms" }}
      >
        <div className="mb-3 flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-white">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-red opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-red" />
          </span>
          Setup in progress
        </div>
        <ul className="space-y-2 text-sm font-medium text-white/90">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
            <span>Campaign committee registered with the state</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
            <span>Campaign bank account · awaiting approval</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
            <span>ActBlue donation page · connecting soon</span>
          </li>
        </ul>
      </div>
    </>
  );
}

function InfoCard({
  icon,
  title,
  body,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="card flex h-full flex-col">
      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b1e3a]/5 text-[#0b1e3a]">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm font-medium leading-relaxed">{body}</p>
      {cta && (
        <a
          href={cta.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1e3a8a] transition-colors hover:text-[#0b1e3a]"
        >
          {cta.label}
          <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}
