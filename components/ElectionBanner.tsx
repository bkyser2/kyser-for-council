"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { X, Vote, CalendarClock } from "lucide-react";
import { election } from "@/content";

/**
 * Dismissable election-information banner pinned to the very top of every page.
 *
 * Shows a live "days until Election Day" ticker, the early-voting window, and
 * links to the #vote section (dates + voting-location maps).
 *
 * Behavior:
 *   - Hidden entirely when `election.showBanner` is false.
 *   - Hidden after Election Day has passed (no stale "vote now" nagging).
 *   - Dismissable. The dismissal is remembered in localStorage, keyed by
 *     `election.bannerId`, so bumping that id re-shows an updated banner.
 *   - Renders nothing during the first client render until we've checked
 *     localStorage, to avoid a flash-then-hide for people who dismissed it.
 *   - Respects `prefers-reduced-motion`.
 */
export default function ElectionBanner() {
  const storageKey = `bk-election-banner:${election.bannerId}`;

  // `null` = we haven't checked localStorage yet (first paint on the client).
  const [dismissed, setDismissed] = useState<boolean | null>(null);
  const [now, setNow] = useState<Date | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(storageKey) === "1");
    } catch {
      // localStorage can throw in private-mode/blocked contexts — just show it.
      setDismissed(false);
    }
    setNow(new Date());
  }, [storageKey]);

  // Live ticker: recompute the countdown once a minute.
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  // Whole calendar days from today until Election Day.
  //
  // We compare both dates as UTC midnights (Date.UTC) so the result is an exact
  // number of calendar days and is NOT thrown off by Daylight Saving Time
  // transitions between now and Election Day (a DST change adds/removes an hour,
  // which would otherwise round a clean 60.0 up to 61 via Math.ceil).
  const daysLeft = useMemo(() => {
    if (!now) return null;
    const [y, m, d] = election.electionDate.split("-").map(Number);
    const targetUTC = Date.UTC(y, m - 1, d);
    const todayUTC = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((targetUTC - todayUTC) / 86_400_000);
  }, [now]);

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(storageKey, "1");
    } catch {
      // Ignore write failures; the in-memory state still hides the banner.
    }
  };

  // Publish the banner height to a CSS variable (--banner-h) on <html> so the
  // fixed Nav can sit directly below it and page content can offset for it.
  // Cleared to 0px whenever the banner is not on screen.
  const visible =
    election.showBanner &&
    dismissed === false &&
    daysLeft !== null &&
    daysLeft >= 0;

  useEffect(() => {
    const root = document.documentElement;
    if (!visible || !barRef.current) {
      root.style.setProperty("--banner-h", "0px");
      return;
    }
    const setVar = () => {
      const h = barRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--banner-h", `${h}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => {
      window.removeEventListener("resize", setVar);
      root.style.setProperty("--banner-h", "0px");
    };
  }, [visible]);

  // Gate rendering:
  if (!election.showBanner) return null;
  if (dismissed === null) return null; // haven't checked storage yet
  if (dismissed) return null;
  if (daysLeft === null) return null; // clock not ready
  if (daysLeft < 0) return null; // election has passed

  // The live "ticker" copy.
  const countdown =
    daysLeft === 0
      ? "Election Day is today!"
      : daysLeft === 1
        ? "1 day until Election Day"
        : `${daysLeft} days until Election Day`;

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Election information"
      className="fixed inset-x-0 top-0 z-[60] border-b border-white/20 bg-[#7d2c46]"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 pr-11 sm:px-6">
        <span
          aria-hidden
          className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/20 sm:inline-flex"
        >
          <Vote size={16} />
        </span>

        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-3 gap-y-0.5">
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
            <CalendarClock size={13} aria-hidden />
            {countdown}
          </span>
          <span className="text-[13px] font-semibold text-white sm:text-sm">
            Early voting {election.earlyVoting.rangeLabel}
            <span className="mx-1.5 text-white/40" aria-hidden>
              •
            </span>
            Election Day {election.electionDateLabel}
          </span>
        </div>

        <Link
          href="/#vote"
          className="hidden shrink-0 items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0b1e3a] transition-colors hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex"
        >
          Where to vote
          <span aria-hidden>→</span>
        </Link>
      </div>

      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss election banner"
        className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <X size={18} />
      </button>
    </div>
  );
}
