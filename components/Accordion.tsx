"use client";

import { useState, type ReactNode } from "react";

/** Big-title accordion (BIO / EXPERIENCE / CASE STUDIES). One open at a time. */
export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: { title: string; content: ReactNode }[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-4 text-left"
            >
              <span className="text-[clamp(1.25rem,1.8vw,1.5rem)] uppercase tracking-[0.02em]">{item.title}</span>
              <span aria-hidden className="font-mono text-[15px]">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              inert={!isOpen}
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pb-6 text-[15px] leading-[1.7]">{item.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
