import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import ServiceStairs from "@/components/ServiceStairs";

export const metadata: Metadata = {
  title: "What We Do | SALT",
  description:
    "Brand architecture, launches, creative, digital, search & AI discovery and attribution — how SALT helps brands grow.",
};

const body = "text-[15px] leading-[1.7] sm:text-base";
const mono = "font-mono text-[13px] leading-[1.7]";

export default function WhatWeDo() {
  return (
    <>
      <Header />

      <main className="relative pt-[var(--header-h)]">
        <div className="relative">
          {/* 01 — Opening */}
          <Section
            no="01"
            label="Chapter 04 / What we do"
            className="!border-t-0"
            title={
              <>
                Creating brands? Don&apos;t!
                <br />
                Live &apos;em first.
              </>
            }
          >
            <p className={body}>
              Strategy, launches, creative, digital and measurement. Nine ways we add the SALT, from the first workshop
              to the last conversion.
            </p>
            <p className={`mt-8 ${mono}`}>Tap a step to see what&apos;s inside.</p>
          </Section>

          {/* 02 — The staircase (sits on its own white ground with its own column lines) */}
          <section data-frame className="relative border-t border-line bg-bg">
            <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-10 sm:py-20 md:py-24">
              <Reveal className="mb-10 flex items-baseline justify-between gap-6 md:mb-14">
                <p className="label">02 / Services</p>
                <p className="label">09 steps · 06 phases</p>
              </Reveal>
              <Reveal delay={100}>
                <ServiceStairs />
              </Reveal>
            </div>
          </section>

          {/* 03 — Three closing points, side by side */}
          <section data-frame className="relative border-t border-line">
            <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-10 sm:py-20 md:grid-cols-3 md:gap-10 md:py-20">
              {/* 01 — Three ways */}
              <Reveal>
                <p className="text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.04em]">01</p>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em]">Three ways to work with us.</h3>
                <ul className="mt-3 space-y-1 text-[15px] leading-[1.7]">
                  <li>Retainer — 6 months minimum</li>
                  <li>Project — scoped to the brief</li>
                  <li>Workshops — focused sessions</li>
                </ul>
              </Reveal>

              {/* 02 — Ask us */}
              <Reveal delay={100} className="border-t border-line pt-10 md:border-0 md:pt-0">
                <p className="text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.04em]">02</p>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em]">Ask us. The first chat is free.</h3>
                <p className="mt-3 text-[15px] leading-[1.7]">
                  The serious consulting? Paid, though. Phew!
                  <br />
                  Response time: 2 days. Guaranteed.
                </p>
                <p className={`mt-3 ${mono}`}>
                  <a href="tel:+919958812423" className="underline underline-offset-4 hover:no-underline">
                    Call SALT @ 99588 12423
                  </a>
                </p>
              </Reveal>

              {/* 03 — How we work (next chapter) */}
              <Reveal delay={200} className="border-t border-line pt-10 md:border-0 md:pt-0">
                <p className="text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.04em]">03</p>
                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em]">
                  <Link href="/how-we-work" className="underline-offset-4 hover:underline">
                    How we work
                  </Link>
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7]">
                  Find the human truth. Shape the idea.
                  <br />
                  Create the experience. Make it matter.
                </p>
              </Reveal>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
