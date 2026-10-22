"use client";

import { useEffect, useRef, type ReactNode } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import CustomCursor, { type MouseProxy } from "./CustomCursor";
import { SCROLL_SETTINGS } from "@/config/scroll";

const StoneScene = dynamic(() => import("./StoneScene"), { ssr: false });

/**
 * Client shell: smooth scrolling, the glowing cursor, the 3D stone,
 * and the scroll-driven reveal animations for everything in the page.
 */
export default function Experience({ children }: { children: ReactNode }) {
  const mouseProxy = useRef({ px: -100, py: -100, nx: 0, ny: 0 }) as MouseProxy;

  // Mouse tracking shared by the cursor and the stone
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const m = mouseProxy.current;
      m.px = e.clientX;
      m.py = e.clientY;
      m.nx = (e.clientX / window.innerWidth) * 2 - 1;
      m.ny = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [mouseProxy]);

  // Smooth scroll + reveals
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const lenis = reduceMotion ? null : new Lenis({
          lerp: SCROLL_SETTINGS.lerp,
          wheelMultiplier: SCROLL_SETTINGS.wheelMultiplier,
          touchMultiplier: SCROLL_SETTINGS.touchMultiplier,
          smoothWheel: true,
        });
    const raf = (time: number) => lenis?.raf(time * 1000);
    if (lenis) {
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    // In-page anchor links scroll smoothly through Lenis
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href")!;
      const el = id === "#" ? document.body : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -20, duration: SCROLL_SETTINGS.anchorDuration });
      else (el as HTMLElement).scrollIntoView();
    };
    document.addEventListener("click", onClick);

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".mw", { opacity: 1 });
        return;
      }

      // Hero headline: lines rise in
      gsap.from("[data-hero-line]", {
        yPercent: 110,
        rotate: 3,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.12,
        delay: 0.4,
      });
      gsap.from("[data-hero-fade]", { opacity: 0, y: 24, duration: 1.2, ease: "power3.out", stagger: 0.1, delay: 1 });

      // Generic reveal
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // 3D card entrance (tilts up out of the page)
      gsap.utils.toArray<HTMLElement>("[data-reveal-3d]").forEach((el, i) => {
        gsap.from(el, {
          rotateX: -55,
          y: 80,
          opacity: 0,
          transformPerspective: 900,
          transformOrigin: "50% 100%",
          duration: 1.3,
          delay: (i % 3) * 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 92%" },
        });
      });

      // Manifesto: words light up as you read
      gsap.utils.toArray<HTMLElement>("[data-words]").forEach((block) => {
        gsap.to(block.querySelectorAll(".mw"), {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: block, start: "top 82%", end: "bottom 45%", scrub: true },
        });
      });

      // Parallax drift
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed || 0.2);
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // Big statements slide horizontally
      gsap.utils.toArray<HTMLElement>("[data-slide]").forEach((el) => {
        const dir = Number(el.dataset.slide || 1);
        gsap.fromTo(
          el,
          { xPercent: 12 * dir },
          { xPercent: -12 * dir, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } }
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 800);

    return () => {
      window.clearTimeout(refresh);
      document.removeEventListener("click", onClick);
      ctx.revert();
      if (lenis) {
        gsap.ticker.remove(raf);
        lenis.destroy();
      }
    };
  }, []);

  return (
    <>
      <StoneScene mouseProxy={mouseProxy} />
      <CustomCursor mouseProxy={mouseProxy} />
      <div className="grain" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </>
  );
}
