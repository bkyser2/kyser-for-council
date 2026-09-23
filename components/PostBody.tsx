import React, { ReactNode } from "react";

/**
 * Renders a blog post body written as an array of strings.
 *
 * Each string is treated as a paragraph, with a few lightweight markers
 * supported at the START of the string:
 *
 *   "## Heading"     -> <h2>Heading</h2>
 *   "### Heading"    -> <h3>Heading</h3>
 *   "> quoted text"  -> <blockquote>quoted text</blockquote>
 *   "- item"         -> bullet list item (consecutive lines are grouped)
 *   "1. item"        -> ordered list item (consecutive lines are grouped)
 *
 * Anything else renders as a normal <p>. Inline emphasis is intentionally
 * kept simple: text is passed through verbatim so the author's punctuation
 * and em-dashes render exactly as written.
 */
export default function PostBody({ body }: { body: string[] }) {
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < body.length) {
    const line = body[i];

    // Bulleted list — group consecutive "- " lines.
    if (/^-\s+/.test(line)) {
      const items: string[] = [];
      while (i < body.length && /^-\s+/.test(body[i])) {
        items.push(body[i].replace(/^-\s+/, ""));
        i++;
      }
      blocks.push(
        <ul
          key={key++}
          className="my-4 list-disc space-y-2 pl-6 text-[#0b1e3a]/85"
        >
          {items.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list — group consecutive "1. " / "2. " lines.
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < body.length && /^\d+\.\s+/.test(body[i])) {
        items.push(body[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push(
        <ol
          key={key++}
          className="my-4 list-decimal space-y-2 pl-6 text-[#0b1e3a]/85"
        >
          {items.map((t, idx) => (
            <li key={idx}>{t}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push(
        <h3
          key={key++}
          className="mt-8 text-lg font-bold tracking-tight text-[#0b1e3a]"
        >
          {line.slice(4)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      blocks.push(
        <h2
          key={key++}
          className="mt-10 text-2xl font-bold tracking-tight text-[#0b1e3a]"
        >
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(
        <blockquote
          key={key++}
          className="my-6 border-l-4 border-[#a33e5c] bg-[#a33e5c]/5 py-3 pl-5 pr-4 italic text-[#0b1e3a]"
        >
          {line.slice(2)}
        </blockquote>
      );
      i++;
      continue;
    }

    blocks.push(
      <p key={key++} className="my-4 leading-relaxed text-[#0b1e3a]/85">
        {line}
      </p>
    );
    i++;
  }

  return <div className="text-base">{blocks}</div>;
}