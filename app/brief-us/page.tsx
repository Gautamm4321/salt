import type { Metadata } from "next";
import Image from "next/image";
import BriefForm from "@/components/BriefForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Brief Us | SALT",
  description: "Got a problem that needs some salt? Brief us. Response time: 2 days. Guaranteed. The first chat is free.",
};

const big = "text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.04em]";

export default function BriefUs() {
  return (
    <>
      <Header />

      <main className="relative pt-[var(--header-h)]">
        {/* 01 — Image + form */}
        <section data-frame>
          <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-10 px-5 pb-16 pt-6 sm:px-10 md:grid-cols-12 md:gap-0 md:pb-24 md:pt-10">
            {/* Phone image */}
            <Reveal className="md:col-span-5">
              <div className="relative aspect-square overflow-hidden bg-[#efede9] md:aspect-[735/919] md:h-full md:max-h-[820px]">
                <Image
                  src="/brief-phone.jpg"
                  alt="A telephone receiver hanging off the hook"
                  fill
                  preload
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[50%_40%] grayscale md:object-center"
                />
              </div>
            </Reveal>

            {/* Form */}
            <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
              <Reveal as="p" className="label">Chapter 06 / Brief us</Reveal>
              <Reveal as="h1" delay={80} className="mt-5 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.025em]">
                Got a problem that needs some salt?
              </Reveal>
              <Reveal as="p" delay={120} className="mt-4 text-[15px] leading-[1.7] sm:text-base">
                Brief us. We&apos;ll add the salt.
              </Reveal>
              <Reveal delay={180} className="mt-12">
                <BriefForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* 02 — Three points */}
        <section data-frame className="border-t border-line">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-16 sm:px-10 sm:py-20 md:grid-cols-3 md:py-20">
            <Reveal>
              <p className={big}>01</p>
              <h2 className="mt-6 text-lg font-medium tracking-[-0.01em]">2 days. Guaranteed.</h2>
              <p className="mt-3 text-[15px] leading-[1.7]">
                We may take our time with the thinking. Not with the replying. 😉
              </p>
            </Reveal>
            <Reveal delay={100} className="border-t border-line pt-10 md:border-0 md:pt-0">
              <p className={big}>02</p>
              <h2 className="mt-6 text-lg font-medium tracking-[-0.01em]">The first chat is free.</h2>
              <p className="mt-3 text-[15px] leading-[1.7]">The serious consulting? Paid, though. Phew!</p>
            </Reveal>
            <Reveal delay={200} className="border-t border-line pt-10 md:border-0 md:pt-0">
              <p className={big}>03</p>
              <h2 className="mt-6 text-lg font-medium tracking-[-0.01em]">Clock ticking?</h2>
              <p className="mt-3 text-[15px] leading-[1.7]">Patience running thin? Don&apos;t stew on it.</p>
              <p className="mt-3 font-mono text-[13px] leading-[1.7]">
                <a href="tel:+919958812423" className="underline underline-offset-4 hover:no-underline">
                  Call SALT @ 99588 12423
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 03 — FAQ */}
        <Section no="03" label="FAQ" title="What all does SALT do?">
          <p className="text-[15px] leading-[1.7] sm:text-base">
            SALT is a marketing consulting and CreaTech firm that helps businesses crack everything from fundamental
            brand and digital challenges to complex business problems.
          </p>
          <p className="mt-8 font-mono text-[13px] leading-[1.7]">
            Start-up finding your feet or an established brand gearing up for its next big move? We&apos;ve got you
            covered.
          </p>
        </Section>
      </main>

      <Footer />
    </>
  );
}
