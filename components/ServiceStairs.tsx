"use client";

import { useState, type CSSProperties } from "react";
import LineButton from "./LineButton";
import { phases } from "./services";

/**
 * What We Do — services laid out as a staircase (like a project timeline).
 * Each step sits one column further right than the one before.
 * Clicking a step opens its details right underneath it.
 */

// Flatten phases → steps, remembering which phase each step belongs to
const steps = phases.flatMap((phase, p) =>
  phase.services.map((service, k) => ({ service, phase: phase.name, phaseNo: p + 1, firstInPhase: k === 0 }))
);
const SPAN = 3; // each step bar is 3 columns wide
const COLS = steps.length + SPAN - 1; // so the last step still fits

// Phase header positions on the column grid
let cursor = 1;
const phaseCols = phases.map((phase, p) => {
  const start = cursor;
  const span = phase.services.length + (p === phases.length - 1 ? SPAN - 1 : 0);
  cursor += phase.services.length;
  return { name: phase.name, no: p + 1, start, span };
});
const phaseStarts = new Set(phaseCols.map((p) => p.start));

const pad = (n: number) => String(n).padStart(2, "0");
const gridCols: CSSProperties = { gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` };

export default function ServiceStairs() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {/* Phase headers (desktop) */}
      <div className="hidden md:grid" style={gridCols}>
        {phaseCols.map((ph) => (
          <div key={ph.name} className="border-l-2 border-ink pb-2 pl-3" style={{ gridColumn: `${ph.start} / span ${ph.span}` }}>
            <p className="font-mono text-[11px]">{pad(ph.no)}</p>
            <p className="label mt-1 font-medium">{ph.name}</p>
          </div>
        ))}
      </div>

      <div className="relative">
        {/* Column lines (desktop): solid at each phase, dashed between */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:grid" style={gridCols}>
          {Array.from({ length: COLS }).map((_, c) => (
            <div
              key={c}
              className={phaseStarts.has(c + 1) ? "border-l border-[#cfcfcf]" : "border-l border-dashed border-line"}
            />
          ))}
        </div>

        <ol className="relative space-y-2 py-8 md:py-10">
          {steps.map(({ service, phase, phaseNo, firstInPhase }, i) => {
            const isOpen = open === i;
            const indent = { "--i": i } as CSSProperties;
            return (
              <li key={service.title} style={indent}>
                {/* Phase label (mobile) */}
                {firstInPhase && (
                  <p className={`label ml-[calc(var(--i)*3%)] md:hidden ${i === 0 ? "" : "pt-6"} pb-2`}>
                    {pad(phaseNo)} / {phase}
                  </p>
                )}

                {/* The step */}
                <div className="md:grid" style={gridCols}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`service-${i}`}
                    style={{ gridColumn: `${i + 1} / span ${SPAN}` }}
                    className={`group ml-[calc(var(--i)*3%)] flex min-h-10 w-[calc(100%-var(--i)*3%)] items-center py-2.5 md:h-10 md:py-0 justify-between gap-3 border-l-2 px-3 text-left transition-colors md:ml-0 md:w-auto ${
                      isOpen ? "border-ink bg-[#e6e6e6]" : "border-transparent bg-[#f2f2f2] hover:bg-[#e9e9e9]"
                    }`}
                  >
                    <span className="flex min-w-0 items-baseline gap-3">
                      <span className="font-mono text-[11px]">{pad(i + 1)}</span>
                      <span className="text-[13px] font-medium leading-snug md:truncate">{service.title}</span>
                    </span>
                    <span aria-hidden className="font-mono text-[13px]">{isOpen ? "−" : "+"}</span>
                  </button>
                </div>

                {/* Details */}
                <div className="md:grid" style={gridCols}>
                  <div
                    id={`service-${i}`}
                    role="region"
                    aria-label={service.title}
                    inert={!isOpen}
                    style={{ gridColumn: `${i + 1} / -1`, gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    className={`ml-[calc(var(--i)*3%)] grid transition-[grid-template-rows,opacity] duration-500 ease-out md:ml-0 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="bg-bg pb-10 pt-8 md:pl-3 md:pr-10">
                        <p className="label">
                          Service {pad(i + 1)} / {phase}
                        </p>
                        <h3 className="mt-4 max-w-[30ch] text-[clamp(1.375rem,2vw,1.75rem)] leading-[1.25] tracking-[-0.02em]">
                          {service.pitch}
                        </h3>
                        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.7] sm:text-base">{service.detail}</p>

                        {service.includes && (
                          <div className="mt-8 max-w-[640px]">
                            <p className="label">What&apos;s included</p>
                            <ul className="mt-3 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
                              {service.includes.map((item, k) => (
                                <li key={item} className="flex items-baseline gap-3 border-b border-line py-2.5 text-[14px]">
                                  <span className="font-mono text-[11px]">{pad(k + 1)}</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.result && (
                          <p className="mt-6 max-w-[60ch] font-mono text-[13px] leading-[1.7]">Result — {service.result}</p>
                        )}

                        {service.link && (
                          <div className="mt-8">
                            <LineButton href={service.link.href}>{service.link.label}</LineButton>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
