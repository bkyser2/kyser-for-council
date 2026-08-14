import { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-[#0a0a0a] px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-muted sm:text-lg">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
