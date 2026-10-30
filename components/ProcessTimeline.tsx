import Reveal from "./Reveal";

export type Step = { title: string; text: string };

/**
 * Vertical timeline: a centre line with numbered circles.
 * Steps alternate right / left; each has an arrow line pointing outward
 * and its text underneath; the next circle follows just below the text.
 */
export default function ProcessTimeline({ steps, end }: { steps: Step[]; end?: string }) {
  return (
    <div className="relative">
      {/* Centre line + arrowhead at the bottom */}
      <div aria-hidden className="absolute bottom-10 left-[24px] top-6 w-px md:top-7 bg-ink md:left-1/2">
        <span className="absolute -bottom-[1px] left-1/2 h-0 w-0 -translate-x-1/2 translate-y-full border-x-[5px] border-t-[9px] border-x-transparent border-t-ink" />
      </div>

      <ol className="relative grid grid-cols-1 md:grid-cols-2">
        {steps.map((step, i) => {
          const right = i % 2 === 0;
          return (
            <li
              key={step.title}
              className={`relative pb-12 pl-[68px] md:pb-12 md:pl-0 ${right ? "md:col-start-2" : "md:col-start-1"}`}
              style={{ gridRow: i + 1 }}
            >
              {/* Number circle (sits on the centre line) */}
              <span
                className={`absolute left-[24px] top-0 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-ink bg-bg text-[19px] font-light md:h-14 md:w-14 md:text-[22px] ${
                  right ? "md:left-0" : "md:left-auto md:right-0 md:translate-x-1/2"
                }`}
              >
                {i + 1}
              </span>

              {/* Arrow line pointing outward */}
              <span
                aria-hidden
                className={`absolute left-[48px] right-0 top-6 h-px bg-ink md:top-7 ${right ? "md:left-7" : "md:left-0 md:right-7"}`}
              >
                <span
                  className={`absolute top-1/2 h-0 w-0 -translate-y-1/2 border-y-[4px] border-y-transparent ${
                    right
                      ? "right-0 border-l-[8px] border-l-ink"
                      : "right-0 border-l-[8px] border-l-ink md:left-0 md:right-auto md:border-l-0 md:border-r-[8px] md:border-r-ink"
                  }`}
                />
              </span>

              {/* Text */}
              <Reveal className={`pt-14 md:max-w-[420px] md:pt-16 ${right ? "md:pl-16" : "md:ml-auto md:pr-16"}`}>
                <h3 className="text-[clamp(1.25rem,1.8vw,1.5rem)] font-medium leading-[1.25] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] sm:text-base">{step.text}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>

      {end && <p className="label relative mt-6 pl-[68px] md:pl-0 md:text-center">{end}</p>}
    </div>
  );
}
