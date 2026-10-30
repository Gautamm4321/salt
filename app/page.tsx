import Image from "next/image";
import Footer from "@/components/Footer";
import GridLines from "@/components/GridLines";
import Header from "@/components/Header";
import LineButton from "@/components/LineButton";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const body = "text-[15px] leading-[1.7] sm:text-base";
const mono = "font-mono text-[13px] leading-[1.7]";

/** "LABEL ——— LABEL" connector line, used for small meta rows */
function Meta({ left, right }: { left: string; right: string }) {
  return (
    <p className="label flex items-center gap-4">
      {left}
      <span className="h-px w-10 bg-ink" />
      {right}
    </p>
  );
}

export default function Home() {
  return (
    <>
      <Header intro />

      <main className="relative">
        <GridLines />

        <div className="relative">
          {/* 01 — Manifesto (fills the first screen after the logo lands) */}
          <Section
            no="01"
            label="Manifesto"
            className="!border-t-0 md:min-h-[calc(100svh-var(--header-h))] md:[&>div]:min-h-[calc(100svh-var(--header-h))] md:[&>div]:content-center"
            title={
              <>
                No rules.
                <br />
                Except the ones that matter.
              </>
            }
            aside={
              <div className="space-y-10">
                <div className="flex flex-wrap gap-x-10 gap-y-3">
                  <p className="label">SALT</p>
                  <p className="label">Chapter 01 of 06</p>
                </div>
                <LineButton href="/why-salt">Read our story</LineButton>
              </div>
            }
          >
            <p className={`${body} font-medium`}>Think about it.</p>
            <p className={`mt-4 ${body}`}>
              None of us follows exactly the same path. We find our own way, make our own mistakes and figure out what
              matters to us.
            </p>
            <p className={`mt-8 ${mono}`}>So why should the things we create be any different?</p>
          </Section>

          {/* 02 — Playing it safe */}
          <Section no="02" label="The problem" title="Playing it safe became the safe bet.">
            <p className={body}>
              Yet somewhere along the way, we started following playbooks, borrowing ideas and chasing what worked for
              someone else.
            </p>
            <p className={`mt-8 ${mono}`}>
              And in trying to fit in, we forgot what made us different in the first place.
            </p>
          </Section>

          {/* 03 — You */}
          <Section
            no="03"
            label="The truth"
            title="What makes you, YOU, shouldn't be what makes you fit in."
            aside={<Meta left="And brands?" right="No different" />}
          >
            <Image
              src="/white-stone.jpeg"
              alt="A single salt crystal"
              width={1254}
              height={1254}
              sizes="(min-width: 768px) 380px, 80vw"
              className="h-auto w-[80%] max-w-[380px] mix-blend-multiply"
            />
          </Section>

          {/* 04 — At SALT */}
          <Section no="04" label="At SALT" title="We'd rather question the obvious than settle for the familiar."
            wide
            aside={
              <>
                <p className={body}>
                  We bring creativity and technology together to find new solutions and make things that don&apos;t
                  just get noticed, but become part of people&apos;s lives.
                </p>
                <p className={`mt-6 ${mono}`}>
                  Being different isn&apos;t the point.
                  <br />
                  Making a difference is.
                </p>
              </>
            }
          >
            {/* Two images, edge to edge — on desktop they stretch to the exact height of the left text block */}
            <div className="grid h-full grid-cols-2">
              {[
                { src: "/ma-1.jpeg", alt: "Marketing is…" },
                { src: "/ma-2.jpeg", alt: "…attention, trust, value, positioning and conversion" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-[735/978] md:aspect-auto md:h-full md:min-h-[360px]">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
          </Section>

          {/* 05 — What we refuse */}
          <Section no="05" label="What we refuse" title="Three things you won&apos;t get from us.">
            <ul className="border-t border-line">
              {[
                ["No borrowed brilliance.", "Original over obvious"],
                ["No cookie-cutter thinking.", "Courage over convention"],
                ["No settling for the expected.", "Impact over vanity"],
              ].map(([line, value], i) => (
                <li key={line} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <span className="flex items-baseline gap-5">
                    <span className="label">0{i + 1}</span>
                    <span className={`${body} font-medium`}>{line}</span>
                  </span>
                  <span className="label hidden text-right sm:block">{value}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* 06 — Who we are */}
          <Section
            no="06"
            label="Who we are"
            title="A CreaTech brand consulting and advertising studio that builds brands to grow businesses."
            aside={<Meta left="No fluff" right="Real impact" />}
          >
            <p className={body}>
              We bring creative thinking and technology together to challenge convention and turn ideas into action.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
              {["More customers.", "More sales.", "Measurable impact."].map((t, i) => (
                <div key={t}>
                  <p className="label">0{i + 1}</p>
                  <p className="mt-2 text-[15px] font-medium leading-snug">{t}</p>
                </div>
              ))}
            </div>
            <p className={`mt-10 ${mono}`}>Make shit happen.</p>
          </Section>

          {/* 07 — Next chapter */}
          <Section
            no="07"
            label="Next chapter / 02"
            title="Why SALT"
            aside={<LineButton href="/why-salt">Continue</LineButton>}
          >
            <p className={body}>
              A missing pinch of salt at a lunch table, and the idea it started.
            </p>
            <p className={`mt-8 ${mono}`}>“Arre, namak nahi hai!”</p>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}
