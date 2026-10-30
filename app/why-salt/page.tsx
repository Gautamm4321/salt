import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Why SALT | SALT",
  description: "A missing pinch of salt at a lunch table, and the idea it started.",
};

const wrap = "mx-auto max-w-[1320px] px-5 sm:px-10";
const body = "text-[15px] leading-[1.7] sm:text-base";
const heading = "text-[clamp(1.625rem,2.4vw,2.25rem)] leading-[1.2] tracking-[-0.025em]";

/** Soft-fades the crystal photo's grey background into the white page */
const fadeEdges = {
  maskImage: "radial-gradient(ellipse at center, #000 44%, transparent 62%)",
  WebkitMaskImage: "radial-gradient(ellipse at center, #000 44%, transparent 62%)",
};

const values = [
  ["Relevance over noise", "If it doesn't matter to people, why say it?"],
  ["Human over corporate", "People aren't data points. They're people."],
  ["Original over obvious", "If everyone can say it, it isn't an idea yet."],
  ["Impact over vanity", "Attention is not the destination. Change is."],
  ["Courage over convention", "If the category says left, we ask why."],
];

/** Periodic-table tile */
function Element({ no, symbol, name }: { no: number; symbol: string; name: string }) {
  return (
    <div className="flex aspect-square flex-col justify-between border border-ink p-3 sm:p-4">
      <span className="font-mono text-[12px]">{no}</span>
      <span className="text-[clamp(2.5rem,4.5vw,3.75rem)] font-light leading-none tracking-[-0.03em]">{symbol}</span>
      <span className="label">{name}</span>
    </div>
  );
}

export default function WhySalt() {
  return (
    <>
      <Header />

      <main className="relative pt-[var(--header-h)]">
        {/* 01 — Hero */}
        <section className={`${wrap} grid items-center gap-8 py-12 md:grid-cols-12 md:gap-0 md:py-16`}>
          <div className="md:col-span-7">
            <Reveal as="p" className="label">Chapter 02 / Why SALT</Reveal>
            <Reveal as="h1" delay={80} className="mt-6 text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.08] tracking-[-0.035em]">
              Try eating chips without it.
              <br />
              <span className="font-light">Go on. We&apos;ll wait.</span>
            </Reveal>
            <Reveal as="p" delay={160} className={`mt-6 max-w-[46ch] ${body}`}>
              Smirk on your face, right? Funny thing is, we didn&apos;t find our name by trying harder. We found it when
              we weren&apos;t trying at all.
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-4 md:col-start-9">
            <Image
              src="/white-stone.jpeg"
              alt="A single salt crystal"
              width={1254}
              height={1254}
              preload
              sizes="(min-width: 768px) 30vw, 60vw"
              style={fadeEdges}
              className="mx-auto h-auto w-[62%] max-w-[360px] md:w-full"
            />
          </Reveal>
        </section>

        {/* 02 — The story: lunch table + the moment */}
        <section className="border-t border-line">
          <div className={`${wrap} grid gap-12 py-14 md:grid-cols-12 md:gap-0 md:py-20`}>
            <div className="md:col-span-5">
              <Reveal as="p" className="label">01 — The lunch table</Reveal>
              <Reveal as="h2" delay={80} className={`mt-5 ${heading}`}>
                One fine day, lunch joined the brainstorming session.
              </Reveal>
              <Reveal delay={160} className="mt-8 grid grid-cols-2 border-y border-line">
                {[
                  ["Pav bhaji", "Rashinder"],
                  ["Litti chokha", "Rajesh"],
                ].map(([dish, who], i) => (
                  <div key={dish} className={`py-5 ${i ? "border-l border-line pl-5" : "pr-5"}`}>
                    <p className="text-[17px] font-medium tracking-[-0.01em]">{dish}</p>
                    <p className="label mt-1.5">{who}&apos;s pick</p>
                  </div>
                ))}
              </Reveal>
              <Reveal as="p" delay={200} className={`mt-5 ${body}`}>
                Two different tastes. Two different home comforts. And then…
              </Reveal>
            </div>

            <div className="flex flex-col justify-center md:col-span-6 md:col-start-7 md:border-l md:border-line md:pl-12">
              <Reveal as="p" className="label">02 — The moment</Reveal>
              <Reveal as="blockquote" delay={100} className="mt-5 text-[clamp(2.25rem,4.4vw,3.75rem)] leading-[1.02] tracking-[-0.04em]">
                &ldquo;Arre, namak nahi hai!&rdquo;
              </Reveal>
              <Reveal delay={200} className="mt-6 flex items-center gap-4 uppercase tracking-[-0.01em]">
                <span className="text-lg font-light">Namak.</span>
                <span className="h-px w-6 bg-ink" />
                <span className="text-lg">Bang.</span>
                <span className="h-px w-6 bg-ink" />
                <span className="text-lg font-bold">SALT.</span>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 03 — The name */}
        <section className="border-t border-line">
          <div className={`${wrap} grid items-center gap-10 py-14 md:grid-cols-12 md:gap-0 md:py-20`}>
            <div className="md:col-span-6">
              <Reveal as="p" className="label">03 — The name</Reveal>
              <Reveal as="h2" delay={80} className={`mt-5 ${heading}`}>
                Four letters. One crisp little word. Just the right amount.
              </Reveal>
              <Reveal as="p" delay={160} className={`mt-5 max-w-[52ch] ${body}`}>
                A great leveller, whether you&apos;re talking food, people or business. You don&apos;t need heaps of it,
                much like brands. What&apos;s usually missing isn&apos;t another big idea. It&apos;s a sharper
                perspective and a deeper understanding of people.
              </Reveal>
              <Reveal as="p" delay={220} className="mt-6 font-mono text-[13px] leading-[1.7]">
                It reveals. It enhances. It transforms.
              </Reveal>
            </div>
            <Reveal delay={150} className="md:col-span-4 md:col-start-9">
              <div className="grid max-w-[320px] grid-cols-2 md:ml-auto">
                <Element no={11} symbol="Na" name="Sodium" />
                <div className="-ml-px">
                  <Element no={17} symbol="Cl" name="Chlorine" />
                </div>
              </div>
              <p className="label mt-3 md:text-right">NaCl, if you remember your chemistry :-)</p>
            </Reveal>
          </div>
        </section>

        {/* 04 — What we believe */}
        <section className="border-t border-line">
          <div className={`${wrap} py-14 md:py-20`}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Reveal as="p" className="label">04 — What we believe</Reveal>
                <Reveal as="h2" delay={80} className={`mt-5 max-w-[22ch] ${heading}`}>
                  The strongest brands aren&apos;t chosen. They&apos;re lived.
                </Reveal>
              </div>
            </div>
            <div className="mt-10 grid md:mt-12 md:grid-cols-5 md:gap-x-6">
              {values.map(([name, line], i) => (
                <Reveal
                  key={name}
                  delay={i * 60}
                  className="grid grid-cols-[2.25rem_1fr] border-t border-line py-4 md:block md:border-ink md:py-0 md:pt-5"
                >
                  <p className="font-mono text-[12px] leading-[1.6]">0{i + 1}</p>
                  <div>
                    <p className="text-[16px] font-medium leading-snug tracking-[-0.01em] md:mt-4">{name}</p>
                    <p className="mt-1.5 text-[14px] leading-[1.6] md:mt-2">{line}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
