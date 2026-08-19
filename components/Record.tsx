import { record } from "@/content";
import Section from "./Section";

export default function Record() {
  return (
    <Section
      id="record"
      eyebrow="Track Record"
      title="Already in the Room"
      intro="Before asking for your vote, here's what I've already been doing on my own time."
    >
      <ol className="relative mx-auto max-w-3xl">
        {record.map((item, i) => (
          <li key={i} className="group relative pl-8 pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white ring-4 ring-white/25"
            />
            {i < record.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[11px] top-4 h-full w-px bg-white/25"
              />
            )}
            <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
              {item.year}
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] font-medium leading-relaxed text-white/80">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
