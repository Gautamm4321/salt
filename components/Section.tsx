import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * One structured frame of the story.
 * wide: images on the right (cols 7–12); left text block stretches to the same height,
 *       with its body text sitting at the bottom, level with the image bottom.
 * 12-column grid, edges sit on the faint grid lines (every 2 columns):
 *   [rail: cols 1–2] [headline: cols 3–7] [details: cols 9–12]
 */
export default function Section({
  no,
  label,
  title,
  aside,
  children,
  className = "",
  wide = false,
}: {
  no: string;
  label: string;
  title: ReactNode;
  aside?: ReactNode; // small extras under the headline (meta, buttons)
  children?: ReactNode; // right column
  className?: string;
  wide?: boolean; // wider right column (cols 7–12) for images
}) {
  return (
    <section data-frame className={`relative border-t border-line ${className}`}>
      <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-y-8 px-5 py-16 sm:px-10 sm:py-20 md:grid-cols-12 md:gap-y-10 md:gap-x-0 md:py-28">
        {/* Rail: number + active bar (desktop; on phones it joins the label line) */}
        <Reveal className="hidden md:col-span-2 md:-ml-px md:flex md:flex-col md:items-start md:gap-4">
          <span className="block h-[2px] w-8 bg-ink md:h-12 md:w-[2px]" />
          <span className="label md:pl-4">{no}</span>
        </Reveal>

        {/* Headline */}
        <div className={`md:col-start-3 md:pl-6 md:pr-10 ${wide ? "md:col-span-4 md:flex md:flex-col" : "md:col-span-5"}`}>
          <Reveal as="p" className="label flex items-center">
            <span className="mr-3 flex items-center gap-3 md:hidden">
              <span className="block h-[2px] w-6 bg-ink" />
              {no}
              <span className="h-px w-3 bg-ink" />
            </span>
            {label}
          </Reveal>
          <Reveal as="h2" delay={80} className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.025em]">
            {title}
          </Reveal>
          {aside && <Reveal delay={160} className={`mt-8 md:mt-10 ${wide ? "md:mt-auto md:pt-10" : ""}`}>{aside}</Reveal>}
        </div>

        {/* Details */}
        {children && (
          <Reveal delay={200} className={`md:pl-6 ${wide ? "" : "md:pt-9"} ${wide ? "md:col-span-6 md:col-start-7" : "md:col-span-4 md:col-start-9"}`}>
            {children}
          </Reveal>
        )}
      </div>
    </section>
  );
}
