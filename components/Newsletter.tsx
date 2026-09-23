"use client";

import { useState, FormEvent } from "react";
import { Mail, ShieldCheck, Send, Check } from "lucide-react";
import { candidate, newsletter } from "@/content";
import Section from "./Section";

/**
 * Newsletter signup form.
 *
 * Behavior is driven by `newsletter.provider` in content.ts:
 *   - "mailto"   Opens the visitor's email client pre-addressed to the
 *                campaign. Zero setup, works out of the box. Great as a
 *                stopgap until a real provider is wired up.
 *   - "formspree" | "buttondown" | "custom"
 *                POSTs the form to `newsletter.actionUrl`. Use this with
 *                any provider that accepts a plain HTML form POST with
 *                an "email" field (Buttondown, ConvertKit forms, Mailchimp
 *                embedded forms, Formspree, Netlify Forms, etc.).
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const provider = newsletter.provider;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    if (provider === "mailto") {
      // Let the browser handle the mailto: action natively.
      return;
    }
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    setErrorMsg("");
    try {
      const formData = new FormData();
      formData.append("email", email);
      if (firstName) formData.append("name", firstName);
      // Formspree/Buttondown/Mailchimp all accept URL-encoded bodies.
      const res = await fetch(newsletter.actionUrl!, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
        setFirstName("");
      } else {
        setStatus("error");
        setErrorMsg("Something went wrong. Please try again or email me directly.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again or email me directly.");
    }
  }

  const mailtoHref = `mailto:${candidate.email}?subject=${encodeURIComponent(
    "Add me to your email list"
  )}&body=${encodeURIComponent(
    "Hi Brian,\n\nPlease add me to your campaign email list.\n\nName: \nZIP (optional): \n\nThanks!"
  )}`;

  return (
    <Section
      id="newsletter"
      eyebrow="Stay in the Loop"
      title={newsletter.heading}
      intro={newsletter.body}
    >
      <div className="mx-auto max-w-2xl">
        <div className="rounded-2xl border border-white/50 bg-white p-6 shadow-lg sm:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#a33e5c] text-white">
                <Check size={24} />
              </span>
              <h3 className="text-xl font-bold text-[#0b1e3a]">
                You&apos;re on the list!
              </h3>
              <p className="max-w-md text-sm font-medium text-[#0b1e3a]/70">
                Thanks for signing up. Look for a welcome note soon — and
                expect a brief update after each council meeting, not before.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                {...(provider === "mailto"
                  ? {
                      action: mailtoHref,
                      method: "get" as const,
                    }
                  : {})}
                className="grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
              >
                <label className="sr-only" htmlFor="nl-name">
                  First name
                </label>
                <input
                  id="nl-name"
                  name="name"
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="rounded-lg border border-[#0b1e3a]/15 bg-white px-4 py-3 text-sm font-medium text-[#0b1e3a] placeholder-[#0b1e3a]/40 outline-none transition-all focus:border-[#a33e5c] focus:ring-2 focus:ring-[#a33e5c]/25"
                />
                <label className="sr-only" htmlFor="nl-email">
                  Email address
                </label>
                <input
                  id="nl-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-lg border border-[#0b1e3a]/15 bg-white px-4 py-3 text-sm font-medium text-[#0b1e3a] placeholder-[#0b1e3a]/40 outline-none transition-all focus:border-[#a33e5c] focus:ring-2 focus:ring-[#a33e5c]/25"
                />
                {/* Honeypot for bots (real users won't fill this in) */}
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b1e3a] px-5 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-[#a33e5c] disabled:opacity-60 sm:col-span-1"
                >
                  {status === "submitting" ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send size={14} />
                      Sign up
                    </>
                  )}
                </button>
              </form>

              {status === "error" && (
                <p className="mt-3 text-sm font-medium text-[#a33e5c]">
                  {errorMsg}{" "}
                  <a
                    className="underline"
                    href={`mailto:${candidate.email}`}
                  >
                    Email me directly.
                  </a>
                </p>
              )}

              <div className="mt-5 flex flex-col gap-3 border-t border-[#0b1e3a]/10 pt-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex items-start gap-2 text-xs font-medium text-[#0b1e3a]/70">
                  <ShieldCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a33e5c]"
                  />
                  <span>
                    <strong className="text-[#0b1e3a]">No spam. Ever.</strong>{" "}
                    Just short updates after council meetings and important
                    community news. Unsubscribe any time.
                  </span>
                </div>
                <div className="flex items-start gap-2 text-xs font-medium text-[#0b1e3a]/70">
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-[#a33e5c]"
                  />
                  <span>
                    Prefer to email me directly?{" "}
                    <a
                      href={`mailto:${candidate.email}`}
                      className="font-semibold text-[#0b1e3a] underline"
                    >
                      {candidate.email}
                    </a>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}