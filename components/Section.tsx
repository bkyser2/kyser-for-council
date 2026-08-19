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
    <section id={id} className="relative border-t border-white/15 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          {intro && (
            <p className="mx-auto mt-4 max-w-2xl text-balance text-base font-medium text-white/85 sm:text-lg">
              {intro}
            </p>
          )}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
