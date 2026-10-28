"use client";

import { useState } from "react";
import Image from "next/image";

const NAV = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "The Minds", href: "#the-minds" },
  { label: "Why SALT", href: "#why-salt" },
];

/** Sits on top of the black hero: white logo, white type. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" aria-label="SALT home">
          <Image src="/salt-logo-white.png" alt="SALT — No Brand Stays Bland" width={900} height={459} priority className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[12px] uppercase tracking-[0.28em] text-white/70 hover:text-white">
              {n.label}
            </a>
          ))}
          <a href="#brief" className="border border-white/40 px-5 py-2.5 text-[12px] uppercase tracking-[0.28em] hover:border-salt hover:text-salt">
            Brief Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-[12px] uppercase tracking-[0.28em] lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav className="fixed inset-0 top-[88px] z-50 bg-black px-6 pt-6 lg:hidden">
          {[...NAV, { label: "Brief Us", href: "#brief" }].map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/15 py-5 text-2xl font-bold"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
