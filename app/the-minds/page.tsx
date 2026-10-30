import type { Metadata } from "next";
import type { ReactNode } from "react";
import Accordion from "@/components/Accordion";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "The Minds | SALT",
  description: "Rashinder Bhat and Rajesh Kumar. Anyone can call themselves an agency. Not everyone has been the client.",
};

const body = "text-[15px] leading-[1.7] sm:text-base";
const mono = "font-mono text-[13px] leading-[1.7]";

/** Placeholder line for content the client still has to send */
const Pending = ({ children }: { children: ReactNode }) => <p className={`${mono} opacity-50`}>{children}</p>;

const founders = [
  {
    initials: "RB",
    role: "Know UR / Brand Alpha",
    name: "Rashinder Bhat",
    line: "I've built brands from the inside.",
    bio: "Brand obsession and a thing for what makes people tick. Chases consumer truths until very little escapes interrogation.",
    experience: ["Nikon", "British Council", "Tolexo", "HCL", "NSDC", "Zopper"],
  },
  {
    initials: "RK",
    role: "Here's / Tech Alpha",
    name: "Rajesh Kumar",
    line: "Great ideas deserve great execution.",
    bio: "Brings the tech and the numbers. Has a thing for making data talk, and turns ideas into effective digital experiences.",
    experience: ["Zopper"],
  },
];

export default function TheMinds() {
  return (
    <>
      <Header />

      <main className="relative pt-[var(--header-h)]">
        {/* 01 — Opening */}
        <Section
          no="01"
          label="Chapter 03 / The Minds"
          className="!border-t-0"
          title={
            <>
              Anyone can call themselves an agency.
              <br />
              Not everyone has been the client.
            </>
          }
        >
          <p className={body}>
            We know what it&apos;s like to own the brief, defend the budget, make the call and answer for the results.
          </p>
        </Section>

        {/* 02 — RB × RK (centred) */}
        <section data-frame className="border-t border-line">
          <div className="mx-auto max-w-[1320px] px-5 py-16 text-center sm:px-10 md:py-20">
            <Reveal as="p" className="label">Meet the minds</Reveal>
            <Reveal as="p" delay={100} className="mt-8 text-[clamp(3.5rem,9vw,7.5rem)] font-light leading-none tracking-[-0.04em]">
              RB × RK
            </Reveal>
            <Reveal as="p" delay={200} className={`mx-auto mt-8 max-w-[40ch] ${body}`}>
              No, not &lsquo;Rajiv Bhatia and Ranbir Kapoor&rsquo;. We&apos;re the other two Rs. Not a Bollywood reboot.
            </Reveal>
          </div>
        </section>

        {/* 03 — How it started */}
        <Section no="03" label="How it started" title="We met at Zopper in 2015.">
          <p className={body}>
            One of us chased consumer truths. The other chased the data. We weren&apos;t plotting a startup, just getting
            increasingly unimpressed with boring marketing.
          </p>
          <p className={`mt-4 ${body}`}>Turns out, agreeing on what&apos;s broken is a pretty good place to start.</p>
          <p className={`mt-8 ${mono}`}>Enter SALT.</p>
        </Section>

        {/* 04 — The two founders */}
        <section data-frame className="border-t border-line">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-5 py-14 sm:px-10 sm:py-20 md:grid-cols-2 md:gap-10 md:py-20">
            {founders.map((f, i) => (
              <Reveal key={f.name} delay={i * 120} className={i === 1 ? "border-t border-line pt-12 md:border-0 md:pt-0" : ""}>
                {/* Portrait slot — monogram until photos arrive */}
                <div className="relative flex aspect-[16/9] items-end justify-between bg-[#f3f3f1] p-5 sm:aspect-[4/3] sm:p-6">
                  <span className="text-[clamp(4rem,8vw,7rem)] font-light leading-none tracking-[-0.05em]">{f.initials}</span>
                  <span className="label">0{i + 1}</span>
                </div>

                <p className="label mt-6 sm:mt-8">{f.role}</p>
                <h2 className="mt-3 text-[clamp(1.75rem,2.6vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.025em]">
                  {f.name}
                </h2>
                <p className={`mt-3 ${body}`}>{f.line}</p>

                <div className="mt-10">
                  <Accordion
                    items={[
                      { title: "Bio", content: <p className="max-w-[52ch]">{f.bio}</p> },
                      {
                        title: "Experience",
                        content: (
                          <ul className="flex flex-wrap gap-x-6 gap-y-2">
                            {f.experience.map((e) => (
                              <li key={e}>{e}</li>
                            ))}
                          </ul>
                        ),
                      },
                      {
                        title: "Case studies",
                        content: <Pending>Two case studies coming soon.</Pending>,
                      },
                    ]}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* 05 — Together */}
        <Section no="05" label="Together" title="I bring the brand obsession. He brings the tech and the numbers.">
          <p className={body}>
            Together, we bring a little more sense to the business of making brands matter.
          </p>
          <p className={`mt-8 ${mono}`}>No fluff. Real impact.</p>
        </Section>

        {/* 06 — Close */}
        <section data-frame className="border-t border-line">
          <div className="mx-auto max-w-[1320px] px-5 py-16 sm:px-10 md:py-20">
            <ul className="mx-auto max-w-[900px] space-y-1 text-center text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.15] tracking-[-0.03em]">
              {["Anyone can talk brand.", "We've lived it.", "That's the substance."].map((t, i) => (
                <Reveal as="li" key={t} delay={i * 120}>{t}</Reveal>
              ))}
              <Reveal as="li" delay={400} className="pt-4 font-semibold uppercase">That&apos;s SALT.</Reveal>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
