import Section from "./Section";
import { election } from "@/content";
import {
  CalendarDays,
  Clock,
  MapPin,
  ArrowRight,
  UserCheck,
  ExternalLink,
} from "lucide-react";

/**
 * Build a Google Maps link from a plain address (used when a location doesn't
 * provide an explicit `mapUrl`).
 */
function mapsHref(address: string, explicit?: string) {
  if (explicit) return explicit;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
}

/**
 * The "Vote" section (#vote). Shows the confirmed dates, key deadlines, and the
 * nearest early-voting locations for Doraville, Chamblee, and Brookhaven, each
 * with a one-tap "Directions" link that opens Google Maps.
 *
 * All copy comes from the `election` block in content.ts.
 */
export default function ElectionInfo() {
  const {
    electionDateLabel,
    electionDayHours,
    electionDayNote,
    earlyVoting,
    registrationDeadline,
    absenteeRequestDeadline,
    registrationUrl,
    checkRegistrationUrl,
    countyElectionsUrl,
    electionDayPrecinct,
    locationsByCity,
  } = election;

  return (
    <Section
      id="vote"
      eyebrow="How to Vote"
      title="Make Your Plan to Vote"
      intro="Doraville City Council is elected by you. Here are the dates, deadlines, and the nearest places to cast your ballot."
    >
      {/* Key dates row */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="card">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <CalendarDays size={18} />
            </span>
            <h3 className="text-lg font-bold tracking-tight text-[#0b1e3a]">
              Election Day
            </h3>
          </div>
          <p className="text-base font-bold text-[#0b1e3a]">
            {electionDateLabel}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[15px] font-medium text-[#0b1e3a]/75">
            <Clock size={14} aria-hidden />
            {electionDayHours}
          </p>
          <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#0b1e3a]/60">
            {electionDayNote}
          </p>
        </article>

        <article className="card">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <CalendarDays size={18} />
            </span>
            <h3 className="text-lg font-bold tracking-tight text-[#0b1e3a]">
              Early Voting
            </h3>
          </div>
          <p className="text-base font-bold text-[#0b1e3a]">
            {earlyVoting.rangeLabel}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-[15px] font-medium text-[#0b1e3a]/75">
            <Clock size={14} aria-hidden />
            {earlyVoting.hours}
          </p>
          <p className="mt-3 text-[13px] font-medium leading-relaxed text-[#0b1e3a]/60">
            {earlyVoting.note}
          </p>
        </article>

        <article className="card">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#a33e5c] text-white">
              <UserCheck size={18} />
            </span>
            <h3 className="text-lg font-bold tracking-tight text-[#0b1e3a]">
              Deadlines
            </h3>
          </div>
          <dl className="space-y-2 text-[15px]">
            <div className="flex items-baseline justify-between gap-3">
              <dt className="font-medium text-[#0b1e3a]/75">Register by</dt>
              <dd className="font-bold text-[#0b1e3a]">
                {registrationDeadline}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-3">
              <dt className="font-medium text-[#0b1e3a]/75">
                Request absentee by
              </dt>
              <dd className="font-bold text-[#0b1e3a]">
                {absenteeRequestDeadline}
              </dd>
            </div>
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#a33e5c] px-3 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-sm transition-colors hover:bg-[#7d2c46]"
            >
              Register to vote
              <ExternalLink size={12} aria-hidden />
            </a>
            <a
              href={checkRegistrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#0b1e3a]/20 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#0b1e3a] transition-colors hover:border-[#a33e5c] hover:text-[#a33e5c]"
            >
              Check status
              <ExternalLink size={12} aria-hidden />
            </a>
          </div>
        </article>
      </div>
      {/* Early-voting locations by city */}
      <div className="mt-12">
        <h3 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Where to Vote Early
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-[15px] font-medium text-white/80">
          During early voting, any registered DeKalb County voter can use any
          site below. Doraville voters&apos; assigned Election Day precinct is
          listed separately.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locationsByCity.map((group) => (
            <article key={group.city} className="card">
              <div className="mb-1 flex items-center justify-between">
                <h4 className="text-lg font-bold tracking-tight text-[#0b1e3a]">
                  {group.city}
                </h4>
                <span className="rounded-full border border-[#0b1e3a]/15 bg-[#f5f2ff] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#a33e5c]">
                  Early voting
                </span>
              </div>
              {group.note && (
                <p className="mb-3 text-[13px] font-medium text-[#0b1e3a]/60">
                  {group.note}
                </p>
              )}
              <ul className="space-y-3">
                {group.locations.map((loc) => (
                  <li
                    key={`${loc.name}-${loc.address}`}
                    className="border-t border-[#0b1e3a]/10 pt-3 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={15}
                        className="mt-0.5 shrink-0 text-[#a33e5c]"
                        aria-hidden
                      />
                      <div className="min-w-0">
                        <div className="font-bold text-[#0b1e3a]">
                          {loc.name}
                        </div>
                        <div className="text-[14px] font-medium text-[#0b1e3a]/70">
                          {loc.address}
                        </div>
                        <a
                          href={mapsHref(loc.address, loc.mapUrl)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-[13px] font-bold text-[#1e3a8a] transition-colors hover:text-[#a33e5c]"
                        >
                          Directions
                          <ArrowRight size={13} aria-hidden />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Doraville Election-Day precinct + full county list */}
      <div className="mx-auto mt-6 max-w-3xl">
        <div className="rounded-xl border border-white/25 bg-white/10 p-5 backdrop-blur-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-brand"
                aria-hidden
              />
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand">
                  Doraville Election Day precinct
                </div>
                <div className="text-base font-bold text-white">
                  {electionDayPrecinct.name}
                </div>
                <div className="text-[14px] font-medium text-white/80">
                  {electionDayPrecinct.address}
                </div>
              </div>
            </div>
            <a
              href={mapsHref(electionDayPrecinct.address)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0b1e3a] transition-colors hover:bg-brand"
            >
              Directions
              <ArrowRight size={15} aria-hidden />
            </a>
          </div>
        </div>

        <p className="mt-4 text-center text-[14px] font-medium text-white/75">
          Not sure of your precinct, or want every DeKalb site?{" "}
          <a
            href={countyElectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand underline-offset-2 hover:underline"
          >
            See the full DeKalb County list
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
