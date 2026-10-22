"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "The Minds", href: "#the-minds" },
  { label: "Why SALT", href: "#why-salt" },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > last && y > 300);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden && !open ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-3 mt-3 flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:mx-6 md:px-7 ${
          scrolled || open ? "border border-black/10 bg-[#efe5d4]/70 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl" : "border border-transparent"
        }`}
      >
        <a href="#" aria-label="SALT home" className="flex items-center">
          <Image src="/salt-logo.png" alt="SALT — No Brand Stays Bland" width={900} height={459} priority className="h-11 w-auto md:h-12" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="link-underline text-[13px] font-semibold uppercase tracking-[0.14em] text-black">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-[#e8dcc8] transition-transform duration-300 hover:scale-[1.04] sm:flex"
          >
            Brief Us
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-black/20 lg:hidden"
          >
            <span className={`h-[1.5px] w-5 bg-black transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-[1.5px] w-5 bg-black transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-3 mt-2 overflow-hidden rounded-3xl border border-black/10 bg-[#efe5d4]/90 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          open ? "max-h-[480px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {[...NAV, { label: "Brief Us →", href: "#contact" }].map((n) => (
            <a
              key={n.href + n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-black/10 py-3 font-[family-name:var(--font-syne)] text-2xl font-bold uppercase last:border-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
