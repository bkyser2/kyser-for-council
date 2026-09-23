import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PostBody from "@/components/PostBody";
import { blog, candidate } from "@/content";
import { ArrowLeft, Calendar, Mail, Share2 } from "lucide-react";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blog.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} · ${candidate.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPost({ params }: Params) {
  const post = blog.find((p) => p.slug === params.slug);
  if (!post) notFound();

  // Sorted list drives the "next / previous" nav at the bottom of each post.
  const sorted = [...blog].sort((a, b) => (a.date < b.date ? 1 : -1));
  const idx = sorted.findIndex((p) => p.slug === post.slug);
  const newer = idx > 0 ? sorted[idx - 1] : null;
  const older = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  const shareUrl = `https://kyserforcouncil.com/blog/${post.slug}`;
  const shareText = `${post.title} — ${candidate.name} for Doraville`;

  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-32">
        <article className="mx-auto max-w-3xl px-6 pb-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All posts
          </Link>

          <header className="mt-6 text-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-widest text-white/90">
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} />
                {formatDate(post.date)}
              </span>
              {post.tags?.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-white backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
            <h1 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base font-medium text-white/85 sm:text-lg">
              {post.excerpt}
            </p>
          </header>

          <div className="mt-10 rounded-2xl border border-white/50 bg-white p-6 shadow-lg sm:p-10">
            <PostBody body={post.body} />

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#0b1e3a]/10 pt-6">
              <div className="text-sm font-medium text-[#0b1e3a]/70">
                Written by{" "}
                <span className="font-bold text-[#0b1e3a]">
                  {candidate.name}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    shareText
                  )}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#0b1e3a]/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#0b1e3a] transition-colors hover:border-[#a33e5c] hover:text-[#a33e5c]"
                >
                  <Share2 size={12} />
                  Share
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#0b1e3a]/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#0b1e3a] transition-colors hover:border-[#a33e5c] hover:text-[#a33e5c]"
                >
                  Facebook
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(
                    post.title
                  )}&body=${encodeURIComponent(
                    `${post.excerpt}\n\nRead more: ${shareUrl}`
                  )}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#0b1e3a]/15 px-3 py-2 text-xs font-bold uppercase tracking-widest text-[#0b1e3a] transition-colors hover:border-[#a33e5c] hover:text-[#a33e5c]"
                >
                  <Mail size={12} />
                  Email
                </a>
              </div>
            </div>
          </div>

          {/* Subscribe CTA — encourage newsletter signup at the end of every post */}
          <div className="mt-8 rounded-2xl border border-white/40 bg-white/10 p-6 text-center backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white">
              Want posts like this in your inbox?
            </h3>
            <p className="mx-auto mt-2 max-w-lg text-sm font-medium text-white/85">
              Get short, honest updates after every council meeting. No spam,
              unsubscribe any time.
            </p>
            <Link
              href="/#newsletter"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-bold text-[#0b1e3a] shadow-sm transition-all hover:bg-brand"
            >
              Sign up for updates
            </Link>
          </div>

          {/* Prev / next navigation between posts */}
          {(newer || older) && (
            <nav className="mt-10 grid gap-3 sm:grid-cols-2">
              {newer ? (
                <Link
                  href={`/blog/${newer.slug}`}
                  className="group rounded-xl border border-white/40 bg-white/10 p-4 backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                    ← Newer post
                  </div>
                  <div className="mt-1 font-bold text-white">{newer.title}</div>
                </Link>
              ) : (
                <span />
              )}
              {older ? (
                <Link
                  href={`/blog/${older.slug}`}
                  className="group rounded-xl border border-white/40 bg-white/10 p-4 text-right backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <div className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                    Older post →
                  </div>
                  <div className="mt-1 font-bold text-white">{older.title}</div>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}