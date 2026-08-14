import { record } from "@/content";
import Section from "./Section";

export default function Record() {
  return (
    <Section
      id="record"
      eyebrow="Track Record"
      title="Not just talk. Already in the room."
      intro="Before asking for your vote, here's what I've already been doing on my own time."
    >
      <ol className="relative mx-auto max-w-3xl">
        {record.map((item, i) => (
          <li key={i} className="group relative pl-8 pb-10 last:pb-0">
            <span
              aria-hidden
              className="absolute left-2 top-2 h-2 w-2 rounded-full bg-brand ring-4 ring-brand/15"
            />
            {i < record.length - 1 && (
              <span
                aria-hidden
                className="absolute left-[11px] top-4 h-full w-px bg-border"
              />
            )}
            <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
              {item.year}
            </div>
            <h3 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
