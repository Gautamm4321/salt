"use client";

import { useEffect, useState } from "react";

/** Small fixed counter in the corner: "03 / 10 · Home". Appears after the intro. */
export default function StoryProgress({ chapter }: { chapter: string }) {
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frames = Array.from(document.querySelectorAll<HTMLElement>("[data-frame]"));
    setTotal(frames.length);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(frames.indexOf(e.target as HTMLElement) + 1);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    frames.forEach((f) => io.observe(f));
    const onScroll = () => {
      const y = window.scrollY;
      const nearEnd = y + window.innerHeight > document.documentElement.scrollHeight - 120; // hide over the footer
      setVisible(y > window.innerHeight * 0.7 && !nearEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      aria-hidden
      className={`label pointer-events-none fixed bottom-6 left-5 z-30 hidden sm:block transition-opacity duration-500 sm:left-10 ${visible && total ? "opacity-100" : "opacity-0"}`}
    >
      {pad(current)} / {pad(total)} <span className="ml-3">{chapter}</span>
    </div>
  );
}
