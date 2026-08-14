import { bio, candidate } from "@/content";
import Section from "./Section";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={bio.headline}
      intro="A résumé that reads deals, not talking points."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 text-lg leading-relaxed text-muted">
          {bio.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-brand"
          >
            <Linkedin size={14} /> Full profile on LinkedIn
          </a>
        </div>

        <div className="lg:col-span-2">
          <dl className="rounded-xl border border-border bg-[#0a0a0a] p-2">
            {bio.facts.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center justify-between px-4 py-3 ${
                  i < bio.facts.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">
                  {f.label}
                </dt>
                <dd className="text-sm font-medium text-foreground">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
