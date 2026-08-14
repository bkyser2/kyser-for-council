import { priorities } from "@/content";
import Section from "./Section";

export default function Priorities() {
  return (
    <Section
      id="priorities"
      eyebrow="Platform"
      title="What I'll fight for on the council."
      intro="Four commitments. No consultants wrote them. They're what I already say at the microphone every month."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {priorities.map((p, i) => (
          <article key={p.title} className="card group">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
                0{i + 1}
              </span>
              {p.stat && (
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-brand">
                  {p.stat}
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {p.title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
