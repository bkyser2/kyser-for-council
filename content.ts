/**
 * ============================================================================
 *  CAMPAIGN CONTENT. EDIT THIS FILE TO UPDATE THE SITE.
 * ============================================================================
 *
 *  Everything the visitor sees on the site (copy, links, photos, priorities)
 *  is defined here. You do NOT need to touch any React/TypeScript files to
 *  make normal updates.
 *
 *  HOW TO ADD/CHANGE PHOTOS
 *    1. Drop the image file into  /public/photos/   (e.g. rally.jpg)
 *    2. It shows up on the site automatically. Optional overrides below.
 *    3. Save and commit. Vercel auto-deploys the change in ~30 seconds.
 *
 *  HOW TO CHANGE A PRIORITY
 *    Edit the `priorities` array. Keep it to 3 to 6 items for best layout.
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
  tagline: "Keep Doraville, Doraville",
  subTagline:
    "Spending we can defend, taxes we can afford, and growth we can shape.",
  email: "kyser4council@pm.me",
  phone: "678.404.6073",
  linkedin: "https://www.linkedin.com/in/bkyser/",
  /**
   * DONATE PAGE CONTROLS
   * --------------------
   * `donateStatus` controls what the /donate page shows:
   *   "coming-soon"  Under-construction state. Use this while the campaign
   *                  bank account and ActBlue page are still being set up.
   *   "live"         Live donate CTA that links out to `donateUrl` (ActBlue).
   *
   * When your bank account is approved and the ActBlue page is created:
   *   1. Paste the ActBlue URL into `donateUrl` below.
   *   2. Change `donateStatus` from "coming-soon" to "live".
   *   3. Commit. That's it. No component edits needed.
   */
  donateStatus: "coming-soon" as "coming-soon" | "live",
  donateUrl: "", // e.g. "https://secure.actblue.com/donate/kyser-for-doraville"
  // "Paid for by" line required by Georgia campaign-finance law.
  paidForBy: "Paid for by Brian Kyser for Doraville.",
};

export const nav = [
  { label: "About", href: "#about" },
  { label: "Priorities", href: "#priorities" },
  { label: "Record", href: "#record" },
  { label: "Photos", href: "#photos" },
  { label: "Contact", href: "#contact" },
  { label: "Donate", href: "/donate" },
];

/**
 * The headline commitments shown in the platform grid.
 * `stat` is optional. It renders as a small metric line under the title.
 * Keep to 4 or 6 items so the grid stays clean.
 */
export const priorities = [
  {
    title: "Every Dollar Should Work for Doraville",
    stat: "Responsible budgeting",
    body: "Doraville's budget grows every year, but families keep feeling squeezed. Before we fund the next new idea, let's make sure every dollar we spend is doing real work. I'll implement a simple one-question test: does this serve Doraville families first? That includes stronger homestead exemptions for long-time homeowners who shouldn't be taxed out of the neighborhoods they helped build.",
  },
  {
    title: "If Developers Win, Residents Should Too",
    stat: "Incentives That Pay Off for Residents",
    body: "Every developer incentive hits residents' pocketbooks. So every deal should deliver something real and be enforceable. I'll push for clear answers on what Doraville gets in return, enforcement clauses with real teeth, and milestone checkpoints across the timeline. Because good deals don't happen relying on blind trust. They need accountability built in.",
  },
   {
    title: "Room for Birds, Bees, and Backyards",
    stat: "Environmentally Conscious",
    body: "Nature isn't a luxury, it's part of what makes Doraville feel like home. I'll push for stronger mature tree preservation, smarter stormwater planning, and wildlife-friendly building standards that protect our songbirds, pollinators, and green spaces as we grow. Because how we build matters just as much as what we build.",
  },
   {
    title: "Open Communication",
    stat: "Transparency by Default",
    body: "Too often, major decisions get made before residents even know about them. I want regular town halls, clearer communication between council and the public, and a better, more positive relationship between the police department and the people they serve, including clearer channels for feedback and follow-up. If we're going to ask residents' to trust our government, then we need to listen first because trust goes both ways.",
  },
  {
    title: "Supporting Local Business",
    stat: "Improve Support for Small Busnesses",
    body: "Big chains and outside big developers get all the attention, but small businesses are the heartbeat of Doraville. I'll push for faster permitting, fair tax incentives for local owners, and dedicated support programs to help homegrown businesses open and stay open. Let's build wealth right here in our communities.",
  },
  {
    title: "Safer, Smarter Streets",
    stat: "Traffic and Pedestrian Safety",
    body: "Traffic congestion isn't just frustrating, it's dangerous. I'll push for logical, effective traffic calming measures that  work and aren't just a flashy band-aid. I want to push for things like greater enforcement of traffic violations, creating safer crossings and protected bike lanes where it makes sense.",
  },
];

/**
 * A short list of concrete things you've already done. This is what
 * separates a candidate from a talker. Keep it factual and specific.
 */
export const record = [
  {
    year: "2024\u20132025",
    title: "Lobbied for expanded homestead exemptions",
    body: "Spoke at multiple Doraville City Council meetings advocating for larger homestead exemptions to protect existing homeowners from rising assessments.",
  },
  {
    year: "2024\u20132025",
    title: "Pushed back on corporate tax abatements",
    body: "Publicly questioned tax abatements granted to large developers and asked the council to prioritize returns to residents over incentives to outside capital.",
  },
   {
    year: "2024\u20132025",
    title: "Fought for the chickens",
    body: "Urged the city council to re-consider allowing backyard chickens in Doraville. They voted 'cluck yes!'",
  },
  {
    year: "Ongoing",
    title: "Improve transparency and trust",
    body: "Urged the council to cancel their Flock contract and instead reinvest those funds to expand transparency and trust between the city, police department and its citizens.",
  },
];

/**
 * Short professional bio pulled from public LinkedIn profile.
 * Update freely. This is displayed in the About section.
 */
export const bio = {
  headline: "Neighbor First, Councilman Second",
  paragraphs: [
    "My name is Brian Kyser. I have lived in Doraville with my wife Jennifer (an avid baker) and our fur babies for over 10 years. You can often find me digging in my garden, enjoying a morning run through the hills of our neighborhood and serving as unpaid courier to deliver my wife's baked goods to various neighbors. When I'm not doing any of that, I'm working as a Solution Engineer at SAP.",
    "But here's what I really want you to know:",
    "I love this city. Not in a polished, campaign-speechy kind of way but in the real way we all love a place that feels like home. Here in Doraville, we're a small city with a big personality. We have our quirks. We have our struggles. Yet even though we may not always agree, at the end of the day, we still show up for each other. That's the Doraville I know and love.",
    "As metro Atlanta grows and changes, a lot of cities are starting to look the same. I don't want that for Doraville. Doraville is something different. We are not Chamblee. We are not Brookhaven. Doraville has its own history, its own people, and its own charm. Growth is still welcome, but on our terms, in our voice, and at our pace. Our scrappy character is an advantage and I believe protecting it is one of the most important things we can do as we grow.",
    "I'm running for City Council, District 2 because I want to make sure that as Doraville changes, we don't lose what makes Doraville, Doraville. I plan to bring that same neighborly spirit to City Hall. That means listening first, working across differences, leading with transparency, and making decisions that serve the people who actually live here. I envision a Doraville that grows thoughtfully, stays connected to the community, and never forgets who we are.",
    "I'd be honored to earn your vote on November 3rd.",
    "-Brian"
  ],
  facts: [
    { label: "Experience", value: "21+ yrs in tech" },
    { label: "Employer", value: "SAP Customer Experience" },
    { label: "Education", value: "Georgia State University" },
    { label: "Home", value: "Doraville, GA" },
  ],
};

/**
 * PHOTOS. AUTO-DISCOVERED.
 * -----------------------------------------------------------------
 * You do NOT need to list photos here.
 * Just drop any .jpg / .jpeg / .png / .webp / .avif / .gif file into
 *     /public/photos/
 * and it appears on the site automatically.
 *
 * Filenames become the accessibility alt text:
 *   council-meeting.jpg          becomes "Council meeting"
 *   2025-08-14-town-hall.jpg     becomes "Town hall" (also sorted newest first)
 *
 * OPTIONAL: to override the alt text or add a hover caption for a specific
 * photo, add one entry per photo below. Each entry MUST be its own object
 * wrapped in { } and separated by commas. The `src` must exactly match the
 * filename you dropped into /public/photos/.
 *
 * OPTIONAL: `objectPosition` controls which part of the photo is kept
 * visible when it's cropped to the tile's 4:3 box. Use it for portrait
 * photos where the subject sits near the top or bottom of the frame.
 * Any valid CSS `object-position` value works. Examples:
 *   "top"          keep the top of the photo (good when a face is high in frame)
 *   "center 25%"   keep a spot 25% down from the top
 *   "bottom"       keep the bottom of the photo
 * Default (when omitted) is "center".
 *
 * Recommended photo size: about 1600px on the long edge, under ~400KB.
 */
export const photos: {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}[] = [
  {
    src: "/photos/IMG_8751.jpeg",
    alt: "Doraville sunset",
    caption: "Enjoying a Doraville sunset.",
  },
  {
    src: "/photos/BK_LI.jpeg",
    alt: "A future Doraville voter",
    caption: "A future Doraville voter.",
  },
  {
    src: "/photos/garlic_harvest.jpeg",
    alt: "This year's garlic harvest",
    caption: "This year's garlic harvest.",
  },
  {
    src: "/photos/mingle.jpeg",
    alt: "Mingle the cat",
    caption: "My cat, Mingle.",
    // Portrait photo: anchor to the top so heads stay in frame after cropping.
    objectPosition: "top",
  },
  {
    src: "/photos/jeremyandLiam.jpg",
    alt: "Family fun in the sun",
    caption: "Fun in the sun.",
  },
  {
    src: "/photos/Spring_in_Doraville.jpeg",
    alt: "Spring in Doraville",
    caption: "Spring in Doraville.",
  },
];

export const contact = {
  heading: "Let's Talk",
  body:
    "Questions about the campaign? Want a yard sign, want to volunteer, want to canvass, or just meet for coffee in Doraville? Send a note. I read every email personally.",
  cta: "Email the campaign",
};

