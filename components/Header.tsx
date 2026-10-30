"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { chapters } from "./chapters";

/**
 * Header with the SALT logo.
 * intro = true  → page opens on a blank white screen with the logo in the middle;
 *                 scrolling shrinks the logo into the centre of the header,
 *                 and the menu + Brief Us button fade in.
 * intro = false → logo sits in the header from the start (for inner pages).
 */
export default function Header({ intro = false }: { intro?: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  // Scroll progress → CSS variable --p (0 = logo centred, 1 = logo in header)
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const distance = window.innerHeight * 0.7;
      const p = intro ? Math.min(1, Math.max(0, window.scrollY / distance)) : 1;
      el.style.setProperty("--p", p.toFixed(4));
      el.dataset.ready = String(p > 0.6);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [intro]);

  // Menu: lock page scroll + close on Escape
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div ref={rootRef} data-ready={intro ? "false" : "true"} style={{ ["--p" as string]: intro ? 0 : 1 }}>
      {/* Logo (moves from the centre of the screen into the header) */}
      <Link href="/" aria-label="SALT — home" className="salt-logo" onClick={() => setOpen(false)}>
        <Image
          src="/Logo Opt-Photoroom.png"
          alt="SALT"
          width={1340}
          height={542}
          loading="eager"
          sizes="520px"
          className="h-auto w-full"
        />
      </Link>

      {/* Header — no bar, just floating buttons (Artisun style) */}
      <header className="header-bg pointer-events-none fixed inset-x-0 top-0 z-50 h-[var(--header-h)]">
        <div className="header-controls mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-10">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="pointer-events-auto -ml-2.5 flex h-11 w-11 items-center justify-center"
          >
            {/* 3 identical 2px lines, 8px apart — 8px lands on whole device pixels at 100/125/150/200% screen scaling, so every line renders the same */}
            <span className="relative block h-[18px] w-[22px]">
              <span className={`absolute left-0 top-0 h-[2px] w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[8px] h-[2px] w-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[16px] h-[2px] w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </span>
          </button>

          <Link
            href="/brief-us"
            onClick={() => setOpen(false)}
            className="pointer-events-auto flex h-10 items-center rounded-[2px] bg-chip px-4 text-[15px] font-medium tracking-[-0.01em] text-ink transition-colors hover:bg-chip-hover"
          >
            Brief Us
          </Link>
        </div>
      </header>

      {/* Menu overlay */}
      <nav
        id="site-menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-40 bg-bg transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ol className="mx-auto flex h-full max-w-[1440px] flex-col justify-center gap-1 px-5 pt-[var(--header-h)] sm:px-10">
          {chapters.map((c) => (
            <li key={c.no}>
              <Link
                href={c.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-5 py-1.5 sm:gap-8"
              >
                <span className="label w-6 transition-colors">{c.no}</span>
                <span className="text-[clamp(2rem,6vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] transition-colors">
                  {c.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>

      {/* Intro: blank white screen, logo centred */}
      {intro && (
        <div className="relative h-svh" aria-hidden>
          <p className="scroll-hint label absolute inset-x-0 bottom-8 text-center">Scroll</p>
        </div>
      )}
    </div>
  );
}
