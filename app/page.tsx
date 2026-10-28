import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

/* =========================================================
   SALT Brand Bible
   Typography: Times New Roman (bold headings, as in the Bible) + Helvetica Neue.
   Colour: white / black / grey + one orange crystal. 95% restraint, 5% flavour.
   ========================================================= */

const wrap = "mx-auto max-w-[1320px] px-6 md:px-12";
const serif = "font-[family-name:var(--font-serif)]";
const label = "text-[11px] uppercase tracking-[0.35em]";

function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-[14px] uppercase tracking-[0.3em] ${dark ? "text-white/60" : "text-grey-500"}`}>{children}</p>;
}

/* ---------- content ---------- */

const SERVICES = [
  ["Brand architecture", "One brand or a whole family — built to grow without cannibalising itself."],
  ["Brand proposition & communication", "Blending in is easy. Standing for something takes guts."],
  ["Product or category launch", "A new name isn’t a launch. Give people a reason to choose it."],
  ["Digital strategy", "Less chasing clicks. More turning clicks into sales."],
  ["Creative | Content", "Ideas with a life beyond the brief."],
  ["Search & AI discovery", "Be useful wherever people look for answers."],
  ["Attribution & growth intelligence", "With Attribi — platform claims, meet business truth."],
  ["Investor pitch deck", "Pretty slides don’t win pitches. Sharp thinking does."],
  ["Brand workshops", "No boring brainstorms. Just sharp minds and uncomfortable questions."],
];

const VALUES = [
  ["Relevance", "noise", "If it doesn’t matter to people, why say it?"],
  ["Human", "corporate", "People aren’t data points. They’re people."],
  ["Original", "obvious", "If everyone can say it, it isn’t an idea yet."],
  ["Impact", "vanity", "Attention is not the destination. Change is."],
  ["Courage", "convention", "If the category says left, we’re willing to ask why."],
];

const METHOD = ["Find the human truth.", "Shape the idea.", "Create the experience.", "Make it matter."];

const DECODE = [
  { n: "01", t: "The ordinary", img: "/brand/step-1-ordinary.jpg", w: 190, h: 184 },
  { n: "02", t: "Look closer", img: "/brand/step-2-look-closer.jpg", w: 301, h: 220 },
  { n: "03", t: "Something extra emerges", img: "/brand/step-3-extra.jpg", w: 190, h: 190 },
  { n: "04", t: "The signature", img: "/brand/step-4-signature.jpg", w: 295, h: 140 },
];

const FAQS = [
  [
    "What all does SALT do?",
    "SALT is a marketing consulting and CreaTech firm that helps businesses crack everything from fundamental brand and digital challenges to complex business problems — from the first big idea to the final execution.",
  ],
  [
    "Can we start with one service?",
    "Yes. A positioning project, a campaign, a search audit or an attribution setup can be a starting point. We consider the wider customer journey so the work fits what your business is already doing.",
  ],
  [
    "We’re growing, but we’re still not a brand people remember. Now what?",
    "Growth gets you noticed. A distinctive brand gets you remembered. We find what makes you matter to people and turn it into a clear, compelling reason to choose you.",
  ],
  [
    "We’re spending on campaigns, but nothing seems to stick. What are we missing?",
    "More noise doesn’t guarantee more impact. We dig into the audience, the message and the idea to find what’s missing — then build communication that earns attention, sticks in memory and moves people to act.",
  ],
  [
    "What happens after we get in touch?",
    "We discuss your business, audience, challenge and existing work. Then we recommend a scope with deliverables, responsibilities and milestones. Pricing and timing are set around that scope.",
  ],
];

/* =========================================================
   Page
   ========================================================= */

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* ===== 1. HERO — black, full screen, the promise ===== */}
        <section className="relative flex min-h-[100svh] flex-col justify-end bg-black text-white">
          <div className={`${wrap} w-full pt-36 pb-12`}>
            <div className="fade-in grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <h1 className={`${serif} text-[clamp(3.6rem,11.5vw,11rem)] font-bold leading-[0.86] tracking-[-0.04em]`}>
                No <span className="font-normal italic text-salt">Brand</span>
                <br />
                Stays Bland.
              </h1>
              <Image
                src="/brand/crystal-hidden-s.jpg"
                alt="The SALT crystal, with a hidden S in its facets"
                width={474}
                height={486}
                priority
                className="h-auto w-[220px] md:w-[300px]"
              />
            </div>

            <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-3">
              <p className={`${label} text-white/50`}>CreaTech brand consulting &amp; advertising studio</p>
              <p className="text-lg leading-relaxed text-white/70">
                We build brands to grow businesses — bringing creative thinking and technology together to turn ideas into action.
              </p>
              <div className="flex items-start gap-8 md:justify-end">
                <a href="#brief" className="bg-white px-8 py-4 text-[12px] uppercase tracking-[0.3em] text-black hover:bg-salt hover:text-white">
                  Brief us →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2. MANIFESTO — white, centred like a poem ===== */}
        <section id="manifesto" className="bg-white py-32 md:py-48">
          <div className={`${wrap} text-center`}>
            <div className="flex justify-center">
              <Label>Manifesto</Label>
            </div>
            <h2 className={`${serif} mx-auto mt-12 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.03em]`}>
              No rules.
              <br />
              <span className="font-normal italic">Except the ones that matter.</span>
            </h2>
            <p className="mx-auto mt-10 max-w-xl text-xl leading-relaxed text-grey-700">
              None of us follows exactly the same path. So why should the things we create be any different? Yet somewhere along the way,
              playing it safe became the safe bet.
            </p>
            <p className={`${serif} mx-auto mt-10 max-w-3xl text-[clamp(1.8rem,3.4vw,3rem)] leading-[1.15]`}>
              What makes you, <b>YOU</b>, shouldn’t be what makes you fit in. <span className="italic text-grey-500">And brands? No different.</span>
            </p>
          </div>

          {/* three refusals, full width */}
          <div className="mt-10 border-y border-black">
            <div className={`${wrap} grid md:grid-cols-3`}>
              {["borrowed brilliance.", "cookie-cutter thinking.", "settling for the expected."].map((t, i) => (
                <p
                  key={t}
                  className={`${serif} py-10 text-center text-2xl md:text-3xl ${i > 0 ? "border-t border-grey-300 md:border-t-0 md:border-l" : ""}`}
                >
                  <span className="font-bold">No</span> <span className="italic">{t}</span>
                </p>
              ))}
            </div>
          </div>

          <div className={`${wrap} mt-10 text-center`}>
            <p className="text-lg text-grey-500">Being different isn’t the point.</p>
            <p className={`${serif} mt-3 text-[clamp(2.6rem,6.4vw,6rem)] font-bold leading-none tracking-[-0.03em]`}>
              Making a <span className="italic font-normal text-salt">difference</span> is.
            </p>
          </div>
        </section>

        {/* ===== 3. BELIEF + PHILOSOPHY — split screen: black image half / white text half ===== */}
        <section className="grid border-t border-grey-300 md:grid-cols-2">
          <div className="relative flex min-h-[440px] items-center justify-center bg-black p-12">
            <div className="text-center text-white">
              <p className={`${serif} text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.15]`}>
                People don’t remember brands because they bought them.
              </p>
              <p className={`${serif} mt-6 text-[clamp(2rem,3.6vw,3.2rem)] italic leading-[1.15] text-salt`}>
                They remember them because they meant something.
              </p>
              <p className={`${label} mt-12 text-white/40`}>Apple · Nike · Airbnb · Disney · Patagonia</p>
            </div>
          </div>
          <div className="flex items-center bg-white px-6 py-16 md:px-16 md:py-20">
            <div>
              <Label>Our philosophy</Label>
              <h2 className={`${serif} mt-10 text-[clamp(2.4rem,4.4vw,4rem)] font-bold leading-[1] tracking-[-0.03em]`}>
                A little salt can change the entire dish.
              </h2>
              <p className={`${serif} mt-4 text-2xl italic text-grey-700`}>The same is true of a brand.</p>
              <dl className="mt-12 space-y-5">
                {[
                  ["The right idea", "changes how people see it."],
                  ["The right story", "changes how they feel about it."],
                  ["The right experience", "changes what they choose."],
                ].map(([a, b]) => (
                  <div key={a} className="flex gap-3 text-lg">
                    <dt className="font-bold">{a}</dt>
                    <dd className="text-grey-700">{b}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${label} mt-12 text-salt`}>SALT exists to find that difference</p>
            </div>
          </div>
        </section>

        {/* ===== 4. WHO WE ARE — white, oversized stacked outcomes ===== */}
        <section id="who-we-are" className="border-t border-grey-300 bg-white py-16 md:py-24">
          <div className={`${wrap} grid gap-16 md:grid-cols-[0.9fr_1.1fr]`}>
            <div>
              <Label>Who we are</Label>
              <p className="mt-10 text-2xl leading-snug">
                A <span className={`${serif} italic`}>CreaTech</span> brand consulting and advertising studio that builds brands to{" "}
                <b>grow</b> businesses.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-grey-700">
                We bring creative thinking and technology together to challenge convention and turn ideas into action.
              </p>
            </div>
            <div>
              {["More customers.", "More sales.", "Measurable impact."].map((t, i) => (
                <p
                  key={t}
                  className={`${serif} border-b border-grey-300 py-4 text-[clamp(2.6rem,5.6vw,5.4rem)] font-bold leading-none tracking-[-0.03em] ${
                    i === 2 ? "text-salt" : ""
                  }`}
                >
                  {t}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* black band */}
        <section className="bg-black py-16 text-white">
          <div className={`${wrap} flex flex-col items-center justify-between gap-6 md:flex-row`}>
            <p className={`${serif} text-[clamp(2.2rem,5vw,4.4rem)] font-bold leading-none tracking-[-0.03em]`}>
              No fluff. <span className="font-normal italic">Real impact.</span>
            </p>
            <p className={`${label} text-white/60`}>Make shit happen.</p>
          </div>
        </section>

        {/* ===== 5. WHAT WE DO — index / table of contents ===== */}
        <section id="what-we-do" className="bg-white py-16 md:py-24">
          <div className={wrap}>
            <div className="grid gap-10 md:grid-cols-2 md:items-end">
              <h2 className={`${serif} text-[clamp(3rem,7.4vw,7rem)] font-bold leading-[0.9] tracking-[-0.04em]`}>
                Creating brands?
                <br />
                <span className="font-normal italic text-salt">Don’t!</span>
              </h2>
              <div className="md:pb-3">
                <p className={`${serif} text-[clamp(1.8rem,3.4vw,3rem)] italic leading-tight`}>Live ’em first.</p>
                <div className="mt-6">
                  <Label>What we do</Label>
                </div>
              </div>
            </div>

            <ol className="mt-12 border-t-2 border-black">
              {SERVICES.map(([t, d], i) => (
                <li
                  key={t}
                  className="group grid gap-2 border-b border-grey-300 py-6 md:grid-cols-[70px_1.1fr_1fr] md:items-baseline md:gap-8"
                >
                  <span className={`${serif} text-lg italic text-grey-500`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`${serif} text-[clamp(1.6rem,2.8vw,2.4rem)] font-bold leading-tight tracking-[-0.02em] group-hover:text-salt`}>
                    {t}
                  </span>
                  <span className="text-grey-700">{d}</span>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <p className={`${label} text-grey-500`}>Retainer (6 months min.) · Project · Workshops</p>
              <a href="#brief" className="self-start bg-black px-8 py-4 text-[12px] uppercase tracking-[0.3em] text-white hover:bg-salt">
                Brief us — we’ll add the SALT →
              </a>
            </div>
          </div>
        </section>

        {/* ===== 6. VALUES — black, three-column "X over Y" table ===== */}
        <section className="bg-black py-32 text-white md:py-44">
          <div className={wrap}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className={`${serif} text-[clamp(2.6rem,5.6vw,5rem)] font-bold leading-none tracking-[-0.03em]`}>What we stand for.</h2>
              <Label dark>Core values</Label>
            </div>
            <div className="mt-10 border-t border-white/25">
              {VALUES.map(([a, b, d]) => (
                <div key={a} className="grid items-baseline gap-2 border-b border-white/15 py-7 md:grid-cols-[1fr_auto_1fr_1.2fr] md:gap-8">
                  <p className={`${serif} text-[clamp(1.8rem,3.4vw,3rem)] font-bold leading-none md:text-right`}>{a}</p>
                  <p className={`${serif} text-xl italic text-salt`}>over</p>
                  <p className={`${serif} text-[clamp(1.8rem,3.4vw,3rem)] italic leading-none text-white/40`}>{b}</p>
                  <p className="text-white/60">{d}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-4">
              {METHOD.map((m, i) => (
                <div key={m} className="bg-black py-8 md:px-8 md:first:pl-0">
                  <p className={`${serif} text-lg italic text-salt`}>Step {i + 1}</p>
                  <p className={`${serif} mt-2 text-2xl font-bold`}>{m}</p>
                </div>
              ))}
            </div>
            <p className={`${label} mt-10 text-center text-white/40`}>Curious · Rebellious · Human · Playful · Unapologetically creative</p>
          </div>
        </section>

        {/* ===== 7. THE MINDS — monogram left, story right ===== */}
        <section id="the-minds" className="bg-white py-16 md:py-24">
          <div className={wrap}>
            <Label>The minds</Label>
            <h2 className={`${serif} mt-10 max-w-5xl text-[clamp(2.4rem,5.4vw,5rem)] font-bold leading-[1] tracking-[-0.03em]`}>
              Anyone can call themselves an agency. <span className="font-normal italic text-grey-500">Not everyone has been the client.</span>
            </h2>

            <div className="mt-12 grid border-t-2 border-black md:grid-cols-[1fr_1fr_1fr]">
              <div className="flex flex-col justify-between border-b border-grey-300 py-10 md:border-b-0 md:border-r md:pr-10">
                <p className={`${serif} text-[clamp(4rem,8vw,7rem)] font-bold leading-none tracking-[-0.05em]`}>
                  RB<span className="text-salt">×</span>RK
                </p>
                <p className={`${serif} mt-6 text-lg italic text-grey-700`}>No, not a Bollywood reboot. We’re the other two Rs.</p>
              </div>
              {[
                ["Brand Alpha", "Rashinder Bhat", "I’ve built brands from the inside.", "Nikon · British Council · Tolexo · HCL · NSDC"],
                ["Tech Alpha", "Rajesh Kumar", "Great ideas deserve great execution.", "Tech, data and digital experiences"],
              ].map(([tag, name, line, sub], i) => (
                <div key={name} className={`border-b border-grey-300 py-10 md:border-b-0 md:px-10 ${i === 0 ? "md:border-r" : ""}`}>
                  {/* Founder photo goes here */}
                  <div className="mb-8 grid aspect-[4/5] w-full max-w-[220px] place-items-center bg-grey-100">
                    <span className={`${label} text-grey-500`}>Photo</span>
                  </div>
                  <p className={`${label} text-salt`}>{tag}</p>
                  <p className={`${serif} mt-3 text-3xl font-bold`}>{name}</p>
                  <p className={`${serif} mt-2 text-lg italic`}>{line}</p>
                  <p className="mt-3 text-sm text-grey-500">{sub}</p>
                </div>
              ))}
            </div>
            <p className={`${serif} mt-12 text-center text-[clamp(1.8rem,3.4vw,3rem)] leading-tight`}>
              Anyone can talk brand. <b>We’ve lived it.</b>
            </p>
          </div>
        </section>

        {/* ===== 8. WHY THE NAME — grey, a conversation ===== */}
        <section id="why-salt" className="bg-grey-50 py-16 md:py-24">
          <div className={wrap}>
            <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h2 className={`${serif} text-[clamp(2.8rem,6.4vw,6rem)] font-bold leading-[0.95] tracking-[-0.03em]`}>
                Try eating chips without it.
              </h2>
              <p className={`${serif} text-3xl italic`}>Go on. We’ll wait.</p>
            </div>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-grey-700">
              One lunch. Rashinder’s pav bhaji, Rajesh’s litti chokha — and a missing pinch of salt.
            </p>

            <div className="my-14 text-center">
              <p className={`${serif} text-[clamp(2.4rem,6vw,5.4rem)] font-bold leading-none tracking-[-0.03em]`}>Namak. Bang. <span className="text-salt">SALT.</span></p>
            </div>

            <div className="grid grid-cols-2 border-t border-black md:grid-cols-4">
              {DECODE.map((d, i) => (
                <figure key={d.n} className={`flex flex-col items-center px-4 pt-12 text-center ${i > 0 ? "md:border-l md:border-grey-300" : ""}`}>
                  <div className="flex h-[150px] items-end">
                    <Image src={d.img} alt={d.t} width={d.w} height={d.h} className="h-auto max-h-[150px] w-auto" />
                  </div>
                  <figcaption className="mt-6">
                    <span className={`${serif} italic text-salt`}>{d.n}</span>
                    <span className={`${label} ml-2`}>{d.t}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className={`${serif} mt-10 text-center text-2xl`}>
              Salt is ordinary. <span className="italic">But its effect isn’t.</span>
            </p>
          </div>
        </section>

        {/* ===== 9. QUESTIONS ===== */}
        <section id="faq" className="bg-white py-16 md:py-24">
          <div className={`${wrap} grid gap-14 md:grid-cols-[0.8fr_1.2fr]`}>
            <div>
              <Label>Questions</Label>
              <h2 className={`${serif} mt-10 text-[clamp(2.6rem,5vw,4.6rem)] font-bold leading-[0.95] tracking-[-0.03em]`}>
                What’s at stake? <span className="font-normal italic">Ask us.</span>
              </h2>
              <p className="mt-6 text-lg text-grey-700">The first chat is FREE. The serious consulting? Paid, though. Phew! :-)</p>
            </div>
            <div className="border-t-2 border-black">
              {FAQS.map(([q, a]) => (
                <details key={q} className="border-b border-grey-300">
                  <summary className={`${serif} flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-xl font-bold`}>
                    {q}
                    <span className="faq-sign font-normal leading-none text-salt">+</span>
                  </summary>
                  <p className="pb-7 leading-relaxed text-grey-700">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. BRIEF US ===== */}
        <section id="brief" className="bg-black py-32 text-white md:py-44">
          <div className={wrap}>
            <h2 className={`${serif} max-w-5xl text-[clamp(3rem,7.4vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em]`}>
              Got a problem that needs some <span className="font-normal italic text-salt">salt?</span>
            </h2>
            <div className="mt-12 grid gap-16 border-t border-white/20 pt-14 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className={`${serif} text-2xl italic`}>Brief us. We’ll add the SALT.</p>
                <p className="mt-6 leading-relaxed text-white/60">
                  Response time: 2 days. Guaranteed. We may take our time with the thinking. Not with the replying. 😉
                </p>
                <p className={`${label} mt-12 text-white/50`}>Clock ticking? Call SALT</p>
                <a href="tel:+919958812423" className={`${serif} mt-3 block text-3xl font-bold hover:text-salt`}>
                  +91 99588 12423
                </a>
                <a href="mailto:hello@salt360.co.in" className="mt-2 block text-white/60 hover:text-white">
                  hello@salt360.co.in
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ===== SIGNATURE ===== */}
      <footer className="border-t border-white/10 bg-black text-white">
        <div className={`${wrap} flex flex-col justify-between gap-12 py-20 md:flex-row md:items-end`}>
          <Image src="/salt-wordmark-white.png" alt="SALT — No Brand Stays Bland" width={1000} height={360} className="h-auto w-full max-w-[380px]" />
          <div className="space-y-2 text-sm text-white/60 md:text-right">
            <p>
              <a href="tel:+919958812423" className="hover:text-white">+91 99588 12423</a>
              <span className="mx-3">/</span>
              <a href="tel:+919811462813" className="hover:text-white">+91 98114 62813</a>
            </p>
            <p>
              <a href="mailto:hello@salt360.co.in" className="hover:text-white">hello@salt360.co.in</a>
            </p>
          </div>
        </div>
        <div className={`${wrap} flex flex-col justify-between gap-3 border-t border-white/10 py-6 ${label} text-white/40 md:flex-row`}>
          <span>© 2026 SALT</span>
          <span>No Brand Stays Bland.</span>
          <a href="#top" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
