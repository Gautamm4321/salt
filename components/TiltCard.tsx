"use client";

import { useRef, type ReactNode } from "react";

/** A card that tilts in 3D toward the pointer. */
export default function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg) translateZ(0)`;
    el.style.setProperty("--gx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--gy", `${(y + 0.5) * 100}%`);
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  return (
    <div data-reveal-3d>
      <div
        ref={ref}
        onPointerMove={move}
        onPointerLeave={leave}
        className={`relative h-full overflow-hidden rounded-[28px] border border-black/10 bg-[#f3ebdd]/60 backdrop-blur-md transition-transform duration-300 ease-out [transform-style:preserve-3d] ${className}`}
        style={{
          backgroundImage:
            "radial-gradient(400px circle at var(--gx,50%) var(--gy,50%), rgba(242,106,27,0.14), transparent 60%)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
