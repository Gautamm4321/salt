"use client";

import { useState } from "react";

export type Service = { title: string; line: string; points?: string[] };

/** Hover (desktop) / tap (mobile) to open each service. */
export default function ServiceList({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <ul className="border-t border-black/15">
      {services.map((s, i) => (
        <li
          key={s.title}
          data-reveal
          className={`service-row border-b border-black/15 ${open === i ? "is-open" : ""}`}
        >
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-start gap-5 py-7 text-left md:items-center md:gap-10 md:py-9"
          >
            <span className="pt-2 font-[family-name:var(--font-instrument)] text-lg italic md:pt-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 font-[family-name:var(--font-syne)] text-[clamp(1.28rem,3.36vw,2.88rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em]">
              {s.title}
            </span>
            <span className="service-arrow mt-2 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-black/25 text-xl md:mt-0 md:h-14 md:w-14">
              →
            </span>
          </button>
          <div className="service-body">
            <div className="overflow-hidden">
              <div className="grid gap-6 pb-9 pl-10 md:grid-cols-[1.2fr_1fr] md:pl-[4.6rem]">
                <p className="max-w-xl text-lg leading-relaxed">{s.line}</p>
                {s.points && (
                  <ul className="flex flex-wrap content-start gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="rounded-full border border-black/20 px-3.5 py-1.5 text-sm">
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
