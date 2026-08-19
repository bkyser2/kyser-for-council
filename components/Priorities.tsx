import { priorities } from "@/content";
import Section from "./Section";

export default function Priorities() {
  return (
    <Section
      id="priorities"
      eyebrow="Platform"
      title="My Core Initiatives for Doraville"
      intro="A strong city is built from the foundation up, not the wish list down."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {priorities.map((p, i) => (
          <article key={p.title} className="card group">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0b1e3a]/50">
                0{i + 1}
              </span>
              {p.stat && (
                <span className="rounded-full border border-[#0b1e3a]/15 bg-[#f5f2ff] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#a33e5c]">
                  {p.stat}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold tracking-tight text-[#0b1e3a]">
              {p.title}
            </h3>
            <p className="mt-3 text-[15px] font-medium leading-relaxed text-[#0b1e3a]/75">
              {p.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
