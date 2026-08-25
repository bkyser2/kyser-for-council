"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Heart } from "lucide-react";
import { candidate } from "@/content";

/**
 * Floating "Donate" action button that appears in the bottom-right corner of
 * the screen after the user scrolls past the hero. Sends them to the /donate
 * page (NOT directly to ActBlue) so they still see the campaign-finance
 * disclosures and the amount picker before they leave the site.
 *
 * Behavior:
 *   - Hidden until the user has scrolled ~400px (past the hero on most screens).
 *   - Hidden entirely on the /donate page itself.
 *   - Hidden entirely when candidate.donateStatus !== "live", so we're not
 *     nudging visitors toward a "coming soon" page.
 *   - Respects `prefers-reduced-motion` (no slide-in animation).
 */
export default function DonateFAB() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Never render on /donate itself.
  const onDonatePage = pathname === "/donate";
  const donationsLive = candidate.donateStatus === "live";

  useEffect(() => {
    if (onDonatePage || !donationsLive) return;

    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onDonatePage, donationsLive]);

  if (onDonatePage || !donationsLive) return null;

  return (
    <div
      className={`pointer-events-none fixed bottom-5 right-5 z-40 transition-all duration-300 sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      } motion-reduce:transition-none`}
      aria-hidden={!visible}
    >
      <Link
        href="/donate"
        aria-label="Donate to the campaign"
        tabIndex={visible ? 0 : -1}
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0b1e3a] shadow-xl ring-1 ring-white/60 transition-all hover:scale-[1.03] hover:bg-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Heart
          size={16}
          className="fill-[#a33e5c] text-[#a33e5c] transition-transform group-hover:scale-110"
          aria-hidden
        />
        Donate
      </Link>
    </div>
  );
}
