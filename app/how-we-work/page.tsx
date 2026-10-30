import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProcessTimeline from "@/components/ProcessTimeline";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "How We Work | SALT",
  description: "From your first brief to real impact: how SALT finds the human truth in a brand and makes it matter.",
};

const steps = [
  {
    title: "Brief us",
    text: "Tell us what's at stake. Name, phone, email, company. That's all we need to start.",
  },
  {
    title: "We reply in 2 days",
    text: "Guaranteed. We may take our time with the thinking. Not with the replying.",
  },
  {
    title: "The first chat is free",
    text: "We listen, ask the uncomfortable questions and agree on the real problem. Then we pick the right fit: retainer, project or workshop.",
  },
  {
    title: "Find the human truth",
    text: "We question before we prescribe. People aren't demographics or data points, so we start with what makes them care.",
  },
  {
    title: "Shape the idea",
    text: "If everyone can say it, it isn't an idea yet. We sharpen the truth that's already there into something only you can own.",
  },
  {
    title: "Create the experience",
    text: "Stories, campaigns and experiences people want to live with. Don't decorate, season.",
  },
  {
    title: "Make it matter",
    text: "Attention is not the destination. Change is. More customers, more sales, measurable impact.",
  },
];

export default function HowWeWork() {
  return (
    <>
      <Header />

      <main className="relative pt-[var(--header-h)]">
        {/* 01 — Opening */}
        <Section no="01" label="Chapter 05 / How we work" className="!border-t-0" title="From first brief to real impact.">
          <p className="text-[15px] leading-[1.7] sm:text-base">
            Every brand has a story that&apos;s already there. Our job is to find it, sharpen it and make it matter.
            Here&apos;s how that happens.
          </p>
          <p className="mt-8 font-mono text-[13px] leading-[1.7]">Seven steps. No fluff.</p>
        </Section>

        {/* 02 — The process */}
        <section data-frame className="border-t border-line">
          <div className="mx-auto max-w-[1100px] px-5 py-20 sm:px-10 md:py-28">
            <Reveal className="mb-14 md:mb-20">
              <p className="label">02 / The process</p>
              <h2 className="mt-4 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal uppercase leading-[1.15] tracking-[-0.01em]">
                Working with SALT
              </h2>
            </Reveal>
            <ProcessTimeline steps={steps} end="No Brand Stays Bland." />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
