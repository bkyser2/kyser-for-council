import { blog, candidate } from "@/content";

/**
 * RSS 2.0 feed of blog posts at /rss.xml
 *
 * Why RSS? Almost every email newsletter service (Buttondown, Mailchimp,
 * ConvertKit, Beehiiv, etc.) has an "RSS-to-email" feature that watches a
 * feed and automatically sends new items to your subscribers. Publish a
 * post in content.ts → this feed updates → your list gets an email. No
 * copy-pasting required.
 */

const SITE_URL = "https://kyserforcouncil.com";

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Convert a post body (array of strings, with our lightweight markers)
// into a very simple HTML string suitable for RSS readers and email.
function bodyToHtml(body: string[]): string {
  const out: string[] = [];
  let i = 0;
  while (i < body.length) {
    const line = body[i];

    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (i < body.length && /^-\s+/.test(body[i])) {
        items.push(body[i].replace(/^-\s+/, ""));
        i++;
      }
      out.push(
        "<ul>" + items.map((t) => `<li>${escapeXml(t)}</li>`).join("") + "</ul>"
      );
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < body.length && /^\d+\.\s+/.test(body[i])) {
        items.push(body[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      out.push(
        "<ol>" + items.map((t) => `<li>${escapeXml(t)}</li>`).join("") + "</ol>"
      );
      continue;
    }

    if (line.startsWith("### ")) {
      out.push(`<h3>${escapeXml(line.slice(4))}</h3>`);
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      out.push(`<h2>${escapeXml(line.slice(3))}</h2>`);
      i++;
      continue;
    }
    if (line.startsWith("> ")) {
      out.push(`<blockquote>${escapeXml(line.slice(2))}</blockquote>`);
      i++;
      continue;
    }
    out.push(`<p>${escapeXml(line)}</p>`);
    i++;
  }
  return out.join("\n");
}

export async function GET() {
  const posts = [...blog].sort((a, b) => (a.date < b.date ? 1 : -1));

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date + "T12:00:00Z").toUTCString();
      const contentHtml = bodyToHtml(post.body);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      <content:encoded><![CDATA[${contentHtml}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  const lastBuild = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(candidate.name)} for Doraville — Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Council recaps, campaign updates, and honest talk from ${escapeXml(
      candidate.name
    )}.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      // Cache for an hour at the edge; posts don't change that often.
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}