import Link from "next/link";
import { blog } from "@/content";
import Section from "./Section";
import { ArrowRight, Calendar, Rss } from "lucide-react";

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/**
 * Latest-posts strip that lives on the homepage between the newsletter
 * signup and the photo gallery. Shows up to 3 most-recent posts.
 * Automatically hides itself when the blog is empty.
 */
export default function BlogPreview() {
  if (blog.length === 0) return null;

  const latest = [...blog]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  return (
    <Section
      id="updates"
      eyebrow="Latest Updates"
      title="From the Campaign Blog"
      intro="Short council recaps and honest updates from the trail. New posts also go out to the email list."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {latest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-white/50 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
          >
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#a33e5c]">
              <span className="inline-flex items-center gap-1">
                <Calendar size={11} />
                {formatDate(post.date)}
              </span>
              {post.tags?.slice(0, 1).map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[#a33e5c]/10 px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="mt-3 text-xl font-bold tracking-tight text-[#0b1e3a] transition-colors group-hover:text-[#a33e5c]">
              {post.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-[#0b1e3a]/75">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#0b1e3a] transition-colors group-hover:text-[#a33e5c]">
              Read more
              <ArrowRight
                size={12}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0b1e3a] shadow-sm transition-all hover:bg-brand"
        >
          See all posts
          <ArrowRight size={14} />
        </Link>
        <a
          href="/rss.xml"
          className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
        >
          <Rss size={14} />
          RSS
        </a>
      </div>
    </Section>
  );
}