import { candidate } from "@/content";
import Section from "./Section";
import { Users, Home, Coffee, Megaphone, ArrowRight } from "lucide-react";

/**
 * "Get Involved" grid — the low-friction ways people can plug into the
 * campaign beyond just donating or emailing. Each card is a mailto: link
 * with a pre-filled subject line so a click actually leads to action.
 */
const actions = [
  {
    icon: Home,
    title: "Request a Yard Sign",
    body: "Free yard signs for Doraville residents. I'll drop one off myself.",
    subject: "Yard sign request",
  },
  {
    icon: Users,
    title: "Volunteer",
    body: "Help canvass, phone bank, table at events, or hand out flyers. Any amount of time helps.",
    subject: "I'd like to volunteer",
  },
  {
    icon: Coffee,
    title: "Coffee with Brian",
    body: "Prefer a real conversation? Meet me for coffee in Doraville. I read every request.",
    subject: "Let's grab coffee",
  },
  {
    icon: Megaphone,
    title: "Host a House Party",
    body: "Invite a few neighbors and I'll come talk, answer questions, and listen. Small groups only.",
    subject: "I'd like to host a house party",
  },
];

export default function GetInvolved() {
  return (
    <Section
      id="get-involved"
      eyebrow="Get Involved"
      title="Ways to Help"
      intro="Campaigns are won neighbor by neighbor. Pick whichever one fits — even 15 minutes helps."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map(({ icon: Icon, title, body, subject }) => (
          <a
            key={title}
            href={`mailto:${candidate.email}?subject=${encodeURIComponent(
              subject
            )}`}
            className="group flex items-start gap-4 rounded-2xl border border-white/50 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <Icon size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold tracking-tight text-[#0b1e3a] transition-colors group-hover:text-[#a33e5c]">
                  {title}
                </h3>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[#0b1e3a]/40 transition-all group-hover:translate-x-0.5 group-hover:text-[#a33e5c]"
                />
              </div>
              <p className="mt-1 text-sm text-[#0b1e3a]/75">{body}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}