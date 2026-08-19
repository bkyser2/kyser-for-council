import { bio, candidate } from "@/content";
import Section from "./Section";
import { Linkedin } from "lucide-react";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={bio.headline}
      intro="Running to protect what makes Doraville, Doraville."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 text-lg font-medium leading-relaxed text-white/95">
          {bio.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
          >
            <Linkedin size={14} /> Full profile on LinkedIn
          </a>
        </div>

        <div className="lg:col-span-2">
          <dl className="rounded-xl border border-white/50 bg-white p-2 shadow-lg">
            {bio.facts.map((f, i) => (
              <div
                key={f.label}
                className={`flex items-center justify-between px-4 py-3 ${
                  i < bio.facts.length - 1 ? "border-b border-[#0b1e3a]/10" : ""
                }`}
              >
                <dt className="font-mono text-[11px] font-semibold uppercase tracking-widest text-[#a33e5c]">
                  {f.label}
                </dt>
                <dd className="text-sm font-semibold text-[#0b1e3a]">
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

