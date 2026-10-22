"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export type MouseProxy = {
  current: { px: number; py: number; nx: number; ny: number };
};

/**
 * Glowing cursor (based on the supplied reference).
 * A crisp cream core with an orange stone-glow, plus a soft trailing halo.
 */
export default function CustomCursor({ mouseProxy }: { mouseProxy: MouseProxy }) {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);

  // Hide the native cursor site-wide (see globals.css)
  useEffect(() => {
    document.documentElement.classList.add("has-custom-cursor");
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, []);

  useEffect(() => {
    const dot = dotRef.current;
    const halo = haloRef.current;
    if (!dot || !halo) return;

    gsap.set([dot, halo], { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    const halo2 = { x: -100, y: -100 };

    const render = () => {
      const mx = mouseProxy.current.px;
      const my = mouseProxy.current.py;
      gsap.set(dot, { x: mx, y: my });
      halo2.x += (mx - halo2.x) * 0.14;
      halo2.y += (my - halo2.y) * 0.14;
      gsap.set(halo, { x: halo2.x, y: halo2.y });
    };
    gsap.ticker.add(render);

    const down = () => gsap.to(dot, { scale: 0.8, duration: 0.15, ease: "power2.out" });
    const up = () => gsap.to(dot, { scale: 1, duration: 0.15, ease: "power2.out" });
    const leave = () => gsap.to([dot, halo], { opacity: 0, duration: 0.2 });
    const enter = () => gsap.to([dot, halo], { opacity: 1, duration: 0.2 });

    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [mouseProxy]);

  useEffect(() => {
    const over = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest("a, button, summary, input, textarea, [data-cursor]");
      gsap.to(dotRef.current, { scale: interactive ? 2.5 : 1, duration: 0.25, ease: "power2.out" });
      gsap.to(haloRef.current, { scale: interactive ? 0.4 : 1, opacity: interactive ? 0 : 1, duration: 0.3, ease: "power2.out" });
    };
    window.addEventListener("mouseover", over);
    return () => window.removeEventListener("mouseover", over);
  }, []);

  return (
    <>
      <div
        ref={haloRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-10 w-10 rounded-full border border-[rgba(242,106,27,0.45)] md:block"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-4 w-4 rounded-full bg-[#fff6e8] shadow-[0_0_10px_3px_rgba(255,246,232,0.95),0_0_26px_8px_rgba(242,106,27,0.8),0_0_48px_14px_rgba(242,106,27,0.35)] md:block"
        // Own GPU layer instead of mix-blend-mode keeps scrolling smooth (see reference notes).
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      />
    </>
  );
}
