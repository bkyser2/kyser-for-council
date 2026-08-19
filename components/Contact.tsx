import { candidate, contact } from "@/content";
import Section from "./Section";
import { Mail, Phone, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={contact.heading}
      intro={contact.body}
    >
      <div className="mx-auto grid max-w-2xl gap-4">
        <a
          href={`mailto:${candidate.email}`}
          className="group flex items-center justify-between rounded-xl border border-white/50 bg-white p-5 shadow-lg transition-all hover:shadow-xl"
        >
          <div className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <Mail size={16} />
            </span>
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#a33e5c]">
                {contact.cta}
              </div>
              <div className="text-base font-bold text-[#0b1e3a]">
                {candidate.email}
              </div>
            </div>
          </div>
          <ArrowRight
            size={18}
            className="text-[#0b1e3a]/50 transition-all group-hover:translate-x-0.5 group-hover:text-[#a33e5c]"
          />
        </a>
        <div className="flex items-center justify-between rounded-xl border border-white/50 bg-white p-5 shadow-lg">
          <div className="flex items-center gap-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <Phone size={16} />
            </span>
            <div>
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#a33e5c]">
                Call or text the campaign
              </div>
              <div className="text-base font-bold text-[#0b1e3a]">
                {candidate.phone}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${candidate.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b1e3a] px-3 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#a33e5c]"
            >
              <Phone size={14} />
              Call
            </a>
            <a
              href={`sms:${candidate.phone.replace(/[^0-9+]/g, "")}`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0b1e3a] px-3 py-2 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#a33e5c]"
            >
              <MessageSquare size={14} />
              Text
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
