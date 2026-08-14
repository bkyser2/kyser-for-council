/**
 * ============================================================================
 *  CAMPAIGN CONTENT — EDIT THIS FILE TO UPDATE THE SITE
 * ============================================================================
 *
 *  Everything the visitor sees on the site (copy, links, photos, priorities)
 *  is defined here. You do NOT need to touch any React/TypeScript files to
 *  make normal updates.
 *
 *  HOW TO ADD/CHANGE PHOTOS
 *    1. Drop the image file into  /public/photos/   (e.g. rally.jpg)
 *    2. Add an entry to the `photos` array below with src/alt/caption.
 *    3. Save and commit — Vercel will auto-deploy the change.
 *
 *  HOW TO CHANGE A PRIORITY
 *    Edit the `priorities` array. Keep it to 3–6 items for best layout.
 *
 *  HOW TO CHANGE THE EMAIL / SOCIAL LINKS
 *    Edit the `candidate` block below.
 *
 *  Tip: after any edit, run `npm run dev` locally to preview.
 * ============================================================================
 */

export const candidate = {
  name: "Brian Kyser",
  firstName: "Brian",
  role: "Candidate for Doraville City Council",
  city: "Doraville, Georgia",
  tagline: "Keep Doraville, Doraville.",
  subTagline:
    "Protecting the character of our neighborhoods, lowering the tax burden on homeowners, and holding developers accountable.",
  email: "kyserforcouncil@pm.me",
  linkedin: "https://www.linkedin.com/in/bkyser/",
  // Optional — leave as "" to hide the button.
  donateUrl: "",
  // "Paid for by" line required by Georgia campaign-finance law.
  paidForBy: "Paid for by Kyser for Doraville City Council.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Priorities", href: "#priorities" },
  { label: "Record", href: "#record" },
  { label: "Photos", href: "#photos" },
  { label: "Contact", href: "#contact" },
];

/**
 * The four (or more) headline commitments shown in the platform grid.
 * `stat` is optional — it renders as a small metric line under the title.
 */
export const priorities = [
  {
    title: "Real Homestead Relief",
    stat: "For every homeowner",
    body: "I've been at city hall pushing for stronger homestead exemptions so long-time Doraville homeowners aren't taxed out of the neighborhoods they built. Your home should be an asset, not a liability.",
  },
  {
    title: "Fewer Corporate Abatements",
    stat: "Fairness first",
    body: "When large developers get tax breaks, residents pick up the tab. I'll scrutinize every abatement and make sure any incentive delivers a measurable return to Doraville families — not just to a corporate balance sheet.",
  },
  {
    title: "Single-Family Homes Over Hi-Rises",
    stat: "Own, don't just rent",
    body: "Doraville needs more paths to ownership, not another wall of luxury apartments charging endless rent. I'll fight for zoning and permitting that favors homes families can actually buy and pass down.",
  },
  {
    title: "Keep Doraville, Doraville",
    stat: "Character matters",
    body: "We are not Chamblee. We are not Brookhaven. Doraville has its own history, its own people, and its own charm. Growth is welcome — but on our terms, in our voice, at our pace.",
  },
];

/**
 * A short list of concrete things you've already done. This is what
 * separates a candidate from a talker — keep it factual and specific.
 */
export const record = [
  {
    year: "2024–2025",
    title: "Lobbied for expanded homestead exemptions",
    body: "Spoke at multiple Doraville City Council meetings advocating for larger homestead exemptions to protect existing homeowners from rising assessments.",
  },
  {
    year: "2024–2025",
    title: "Pushed back on corporate tax abatements",
    body: "Publicly questioned tax abatements granted to large developers and asked the council to prioritize returns to residents over incentives to outside capital.",
  },
  {
    year: "Ongoing",
    title: "Active civic participant",
    body: "Regular attendee and voice at council meetings, city workshops, and community discussions on zoning, density, and neighborhood preservation.",
  },
];

/**
 * Short professional bio pulled from public LinkedIn profile.
 * Update freely — this is displayed in the About section.
 */
export const bio = {
  headline: "21+ years in enterprise technology.",
  paragraphs: [
    "I'm a solution engineer at SAP Customer Experience with more than two decades of experience helping large organizations solve hard problems, cut waste, and deliver measurable results. I studied at Georgia State University and have lived and worked in the Atlanta metro area for most of my career.",
    "The same discipline I bring to complex enterprise projects — reading the fine print, asking uncomfortable questions, following the money — is exactly what Doraville needs on its council. Residents deserve a representative who does the homework before the vote.",
  ],
  facts: [
    { label: "Experience", value: "21+ yrs in tech" },
    { label: "Employer", value: "SAP Customer Experience" },
    { label: "Education", value: "Georgia State University" },
    { label: "Home", value: "Doraville, GA" },
  ],
};

/**
 * PHOTOS — AUTO-DISCOVERED
 * -----------------------------------------------------------------
 * You do NOT need to list photos here anymore.
 * Just drop any .jpg / .jpeg / .png / .webp / .avif / .gif file into
 *     /public/photos/
 * and it appears on the site automatically.
 *
 * Filenames become the accessibility alt text:
 *   council-meeting.jpg          → "Council meeting"
 *   2025-08-14-town-hall.jpg     → "Town hall"   (also sorted newest-first)
 *
 * OPTIONAL: to override the alt text or add a hover caption for a specific
 * photo, add one entry per photo below. Each entry MUST be its own object
 * wrapped in { } and separated by commas. The `src` must exactly match the
 * filename you dropped into /public/photos/.
 *
 * Example (two photos):
 *
 *   { src: "/photos/IMG_8751.jpeg", alt: "Doraville sunset",
 *     caption: "Enjoying a Doraville sunset." },
 *   { src: "/photos/IMG_0127.jpeg", alt: "With Jeremy and Jennifer",
 *     caption: "Meeting with Jeremy and Jennifer." },
 *
 * Recommended photo size: ~1600px on the long edge, under ~400KB.
 */
export const photos: {
  src: string;
  alt: string;
  caption?: string;
}[] = [
  // Nice-to-have overrides for the photos you've uploaded so far.
  // Delete or edit these freely — the site will still show every photo
  // in /public/photos/ even if you leave this array empty.
  {
    src: "/photos/IMG_8751.jpeg",
    alt: "Doraville sunset",
    caption: "Enjoying a Doraville sunset.",
  },
  {
    src: "/photos/IMG_0127.jpeg",
    alt: "With Jeremy and Jennifer",
    caption: "Jeremy and Jennifer.",
  },
   {
    src: "/photos/Brian_in_Poland.jpeg",
    alt: "Brian in Poland",
    caption: "Brian in Poland",
  },
   {
    src: "/photos/Enjoying_Georgia.jpeg",
    alt: "Enjoying Georgia",
    caption: "Enjoying Georgia",
  },
   {
    src: "/photos/Hawaii_Big_Island.jpeg",
    alt: "Big Island Hawaii",
    caption: "Big Island Hawaii",
  },
   {
    src: "/photos/Spring_in_Doraville.jpeg",
    alt: "Spring in Doraville",
    caption: "Spring in Doraville",
  },
];

export const contact = {
  heading: "Let's talk.",
  body:
    "Have a question about the campaign? Want a yard sign? Want to volunteer, canvass, or just meet for coffee in Doraville? Send me a note — I read every email personally.",
  cta: "Email the campaign",
};

