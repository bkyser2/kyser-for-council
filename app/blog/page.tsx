import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { blog, candidate } from "@/content";
import { ArrowRight, Calendar, Rss } from "lucide-react";

export const metadata: Metadata = {
  title: `Blog · ${candidate.name} for Doraville`,
  description:
    "Council meeting recaps, campaign updates, and honest talk about what's happening in Doraville.",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Sort newest-first so the author never has to worry about order in content.ts.
const posts = [...blog].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndex() {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-32">
        <section className="mx-auto max-w-4xl px-6 pb-16 sm:pb-24">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              From the Campaign
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Notes From the Trail
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base font-medium text-white/85 sm:text-lg">
              Council recaps, updates from the neighborhood, and plain-language
              takes on the issues Doraville is wrestling with. New posts also
              go out to the email list.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#0b1e3a] shadow-sm transition-all hover:bg-brand"
              >
                Get posts by email
                <ArrowRight size={14} />
              </Link>
              <a
                href="/rss.xml"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Rss size={14} />
                RSS feed
              </a>
            </div>
          </div>

          <div className="mt-14 space-y-5">
            {posts.length === 0 && (
              <div className="rounded-2xl border border-white/50 bg-white p-8 text-center text-[#0b1e3a]/80">
                No posts yet — check back soon.
              </div>
            )}
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-white/50 bg-white p-6 shadow-lg transition-all hover:shadow-xl sm:p-8"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#a33e5c]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </span>
                    {post.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#a33e5c]/10 px-2 py-0.5 text-[#a33e5c]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0b1e3a] transition-colors group-hover:text-[#a33e5c] sm:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[#0b1e3a]/75">{post.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-[#0b1e3a] transition-all group-hover:text-[#a33e5c]">
                    Read the post
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}