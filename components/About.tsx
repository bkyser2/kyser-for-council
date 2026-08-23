import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { bio, candidate } from "@/content";
import Section from "./Section";
import { Linkedin } from "lucide-react";

// Drop the "Welcome to Doraville" photo into /public/photos/ using ANY of
// these filenames (first match wins) and it will appear here automatically.
// No component edits needed once the file is in place.
const WELCOME_CANDIDATES = [
  "welcome-to-doraville.jpg",
  "welcome-to-doraville.jpeg",
  "welcome-to-doraville.png",
  "welcome-to-doraville.webp",
  "welcome_to_doraville.jpg",
  "welcome_to_doraville.jpeg",
  "welcome_to_doraville.png",
  "welcome_to_doraville.webp",
];

function findWelcomePhoto(): string | null {
  const dir = path.join(process.cwd(), "public", "photos");
  for (const name of WELCOME_CANDIDATES) {
    try {
      if (fs.existsSync(path.join(dir, name))) {
        return `/photos/${name}`;
      }
    } catch {
      // ignore and keep looking
    }
  }
  return null;
}

export default function About() {
  const welcomeSrc = findWelcomePhoto();

  return (
    <Section
      id="about"
      eyebrow="About"
      title={bio.headline}
      intro="Running to protect what makes Doraville, Doraville."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-5 text-lg font-medium leading-relaxed text-white/95">
          {bio.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
          >
            <Linkedin size={14} /> Full profile on LinkedIn
          </a>
        </div>

        <div className="lg:col-span-2">
          <figure className="relative overflow-hidden rounded-xl border border-white/50 bg-white/5 shadow-lg">
            <div className="relative aspect-[3/2]">
              {welcomeSrc ? (
                <Image
                  src={welcomeSrc}
                  alt="Welcome to Doraville sign"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center"
                  priority
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-white/10">
                  <div className="px-6 text-center">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-white/85">
                      Photo coming soon
                    </div>
                    <div className="mt-2 text-sm font-semibold text-white/90">
                      Welcome to Doraville
                    </div>
                    <div className="mt-3 text-[11px] font-medium text-white/70">
                      Drop{" "}
                      <span className="text-white">
                        welcome-to-doraville.jpg
                      </span>{" "}
                      into <span className="text-white">/public/photos/</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </figure>
        </div>
      </div>
    </Section>
  );
}

