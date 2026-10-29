"use client";

import { useState } from "react";
import Image from "next/image";
import { NAV } from "@/lib/nav";

/** Sits on the black hero: white logo, white type. */
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-12">
        <a href="#top" aria-label="SALT — back to top">
          <Image src="/salt-logo-white.png" alt="SALT — No Brand Stays Bland" width={900} height={459} priority className="h-11 w-auto md:h-12" />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-[12px] uppercase tracking-[0.25em] text-white/70 hover:text-white">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-white/40 px-5 py-2.5 text-[12px] uppercase tracking-[0.25em] hover:border-salt hover:bg-salt"
          >
            Brief Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="border border-white/40 px-4 py-2 text-[12px] uppercase tracking-[0.25em] lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/15 bg-black px-6 pb-8 lg:hidden">
          {[...NAV, { label: "Brief Us", href: "#contact" }].map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/15 py-4 font-[family-name:var(--font-serif)] text-2xl font-bold"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
