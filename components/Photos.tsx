import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { photos as overrides } from "@/content";
import Section from "./Section";

// Note: dynamic/static rendering is controlled at the route level
// (app/page.tsx), not on this component.

const SUPPORTED = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"]);

// Filenames (case-insensitive, without extension) that are used elsewhere on
// the site and should NOT show up in the general photo gallery. The About
// section, for example, uses `welcome-to-doraville.*` as its own hero image.
const RESERVED_BASENAMES = new Set([
  "welcome-to-doraville",
  "welcome_to_doraville",
]);

type Photo = {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
};

/**
 * Turn a filename like "2025-08-14-council-meeting.jpg" into
 * "Council meeting" for a sensible default alt text.
 */
function humanize(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, "");
  // Strip leading YYYY-MM-DD- prefix if present
  const withoutDate = base.replace(/^\d{4}-\d{2}-\d{2}[-_]?/, "");
  const words = withoutDate.replace(/[-_]+/g, " ").trim();
  if (!words) return "Campaign photo";
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function loadPhotos(): Photo[] {
  const dir = path.join(process.cwd(), "public", "photos");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  const overrideMap = new Map(overrides.map((o) => [o.src, o]));

  const images = files
    .filter((f) => !f.startsWith(".")) // skip .gitkeep, .DS_Store, etc.
    .filter((f) => SUPPORTED.has(path.extname(f).toLowerCase()))
    .filter((f) => {
      // Skip files that are reserved for other sections (e.g. the About page's
      // "welcome to Doraville" hero photo).
      const base = f.replace(/\.[^.]+$/, "").toLowerCase();
      return !RESERVED_BASENAMES.has(base);
    })
    // Sort: filenames starting with a YYYY-MM-DD prefix come first, newest
    // first. Everything else falls back to alphabetical.
    .sort((a, b) => {
      const da = /^\d{4}-\d{2}-\d{2}/.test(a);
      const db = /^\d{4}-\d{2}-\d{2}/.test(b);
      if (da && db) return b.localeCompare(a);
      if (da) return -1;
      if (db) return 1;
      return a.localeCompare(b);
    })
    .map<Photo>((filename) => {
      const src = `/photos/${filename}`;
      const override = overrideMap.get(src);
      return {
        src,
        alt: override?.alt ?? humanize(filename),
        caption: override?.caption,
        objectPosition: override?.objectPosition,
      };
    });

  return images;
}

export default function Photos() {
  const photos = loadPhotos();

  if (!photos.length) {
    return (
      <Section
        id="photos"
        eyebrow="Photos"
        title="Out in the community."
        intro="Photos from council meetings, community events, and neighborhoods across Doraville. Coming soon."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg border border-white/25 bg-white/10"
            />
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[11px] font-bold uppercase tracking-widest text-white/85">
          Drop any image into{" "}
          <span className="text-white underline">/public/photos/</span> and it
          appears here automatically.
        </p>
      </Section>
    );
  }

  return (
    <Section
      id="photos"
      eyebrow="Photos"
      title="Real Moments from Real Doraville"
      intro="Life in motion."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className="group relative overflow-hidden rounded-lg border border-white/40 bg-white/5 shadow-md"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 640px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                style={
                  p.objectPosition
                    ? { objectPosition: p.objectPosition }
                    : undefined
                }
                priority={i < 3}
              />
            </div>
            {p.caption && (
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-foreground/90 to-transparent px-3 py-2 text-xs font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                {p.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Section>
  );
}

