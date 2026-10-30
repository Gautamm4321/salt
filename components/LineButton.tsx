import Link from "next/link";
import type { ReactNode } from "react";

/** Outlined text button, e.g. "Read our story →" */
export default function LineButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-11 items-center gap-3 border border-ink px-5 font-mono text-[12px] uppercase tracking-[0.08em] transition-colors hover:bg-ink hover:text-bg"
    >
      {children}
      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </Link>
  );
}
