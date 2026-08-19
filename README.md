# Kyser for Doraville — Campaign Website

A Vercel‑inspired campaign site for **Brian Kyser, candidate for Doraville City Council**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and the **Geist** font — the same stack Vercel uses for its own site, so it deploys to Vercel with zero configuration.

---

## 🚀 Quick start (local preview)

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

---

## ✏️ How to update the site (no code required)

Almost everything you'll ever want to change lives in **one file**:

> **`content.ts`** (in the project root)

Open it in any text editor. It's heavily commented and organized by section:

| What you want to change | Where in `content.ts` |
| --- | --- |
| Your name / role / tagline / email | `candidate` |
| Menu links | `nav` |
| Your 4 platform priorities | `priorities` |
| "Track record" bullet points | `record` |
| Your bio & résumé facts | `bio` |
| Photos | `photos` |
| Contact section copy | `contact` |

### Adding photos (auto-discovered)

Just drop any image file into **`/public/photos/`** — that's it. Supported: `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`, `.gif`.

- The filename becomes the accessibility alt text automatically. `council-meeting.jpg` → `"Council meeting"`.
- If a filename starts with a date (e.g. `2025-08-14-rally.jpg`), those photos are sorted newest-first.
- Commit + push and Vercel auto-deploys in ~30 seconds.

**Optional per-photo overrides.** If you want a nicer alt text or a hover caption for a specific image, add an entry to the `photos` array in `content.ts` whose `src` matches the file you dropped in:

```ts
{ src: "/photos/rally.jpg", alt: "Brian at the July rally", caption: "July community rally on Tilly Mill." }
```

Recommended image specs: **1600px on the long edge**, JPG or WebP, under ~400 KB. `next/image` optimizes them for you at request time.

### Uploading photos from BAS

The BAS file-explorer's drag-and-drop from your local computer is unreliable for binary files. Use one of these instead:

1. **Right-click** the `public/photos` folder in the file tree → **Upload...** → pick your file.
2. Or open a BAS terminal and drag your local image onto the **terminal window** — BAS uploads it to your home dir, then `mv ~/yourfile.jpg /home/user/projects/Council/public/photos/`.
3. Or drag the image onto the **editor pane** (the code area on the right), not the file tree, after opening any file inside `public/photos/`.

### Changing the accent color

Open `tailwind.config.ts` and change the `brand` and `brand-red` colors (currently a federal blue `#3b6cf6` and American red `#e11d48`). Those two values drive every accent on the site.

---

## 🌐 Deploying to Vercel

1. Push this folder to a GitHub repo (public or private — either works).
2. Go to <https://vercel.com/new> and **Import** the repo.
3. Vercel will auto‑detect Next.js. Click **Deploy**. That's it.
4. Add your custom domain (e.g. `kyserforcouncil.com`) under **Project → Settings → Domains**.

Every subsequent `git push` to `main` will automatically publish a new version — usually within 30–60 seconds. Pull‑request branches get their own preview URL.

### One‑time domain setup

At your domain registrar, point:

- `A` record `@` → `76.76.21.21`
- `CNAME` `www` → `cname.vercel-dns.com`

Vercel's dashboard shows the exact values under the Domains tab.

---

## 🧱 Project structure

```
Council/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Home page — composes all sections
│   └── globals.css       # Global styles + Vercel-ish visuals
├── components/
│   ├── Nav.tsx           # Sticky top nav
│   ├── Hero.tsx          # Big tagline + CTAs
│   ├── Section.tsx       # Shared section wrapper
│   ├── About.tsx         # Bio + résumé facts
│   ├── Priorities.tsx    # Platform grid
│   ├── Record.tsx        # Track-record timeline
│   ├── Photos.tsx        # Photo gallery (auto-hides if empty)
│   ├── Contact.tsx       # Email CTA card
│   └── Footer.tsx        # Disclaimer + copyright
├── public/
│   ├── favicon.svg
│   └── photos/           # Drop your images here
├── content.ts            # 👈 All editable copy lives here
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

You should almost never need to touch anything outside of `content.ts` and `/public/photos/` for day‑to‑day updates.

---

## 🔒 Compliance note

The footer already carries the **"Paid for by Kyser for Doraville City Council."** disclaimer required by Georgia campaign‑finance law. Update it in `content.ts` → `candidate.paidForBy` once your committee's legal name is finalized with the state ethics commission.

---

## 📬 Support

Made for a candidate who does his own homework. If you get stuck, the two files that matter are:

- `content.ts` — what the site says
- `tailwind.config.ts` — what the site looks like
# kyser-for-council
