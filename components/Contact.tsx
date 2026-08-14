import { candidate, contact } from "@/content";
import Section from "./Section";
import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      intro={contact.body}
    >
      <div className="mx-auto max-w-2xl">
        <a
          href={`mailto:${candidate.email}`}
          className="group flex items-center justify-between rounded-xl border border-border bg-[#0a0a0a] p-5 transition-all hover:border-brand/60 hover:bg-[#0c0c0c]"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-black text-brand">
              <Mail size={16} />
            </span>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
                {contact.cta}
              </div>
              <div className="text-base font-medium text-foreground">
                {candidate.email}
              </div>
            </div>
          </div>
          <ArrowRight
            size={18}
            className="text-muted transition-all group-hover:translate-x-0.5 group-hover:text-brand"
          />
        </a>
      </div>
    </Section>
  );
}
