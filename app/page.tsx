import Image from "next/image";
import Header from "@/components/Header";
import { NAV } from "@/lib/nav";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";

/* =========================================================
   SALT — homepage
   One story in 8 chapters:
   1 Promise → 2 Problem → 3 Philosophy → 4 Method & rules →
   5 What we do → 6 Who does it → 7 Questions → 8 Your move
   ========================================================= */

/* ---------- design system ---------- */

const wrap = "mx-auto w-full max-w-[1280px] px-6 md:px-12";
const section = "py-20 md:py-28";
const serif = "font-[family-name:var(--font-serif)]";
const eyebrow = "text-[13px] uppercase tracking-[0.3em]";
const h2 = `${serif} text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.025em]`;
const body = "text-[17px] leading-[1.7]";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`${eyebrow} ${dark ? "text-white/55" : "text-grey-500"}`}>{children}</p>;
}

/** The closing line of each chapter — it hands the story to the next one. */
function Bridge({ children, href, dark = false }: { children: React.ReactNode; href: string; dark?: boolean }) {
  return (
    <div className={`reveal mt-16 border-t pt-10 text-center md:mt-20 ${dark ? "border-white/15" : "border-grey-300"}`}>
      <a href={href} className={`${serif} inline-block max-w-3xl text-[clamp(1.4rem,2.4vw,2rem)] leading-snug ${dark ? "text-white/70 hover:text-white" : "text-grey-700 hover:text-black"}`}>
        {children} <span className="text-salt">↓</span>
      </a>
    </div>
  );
}

/* ---------- content (Web content V1 + SALT Brand Bible) ---------- */

const BLAND = [
  "indistinguishable",
  "predictable",
  "forgettable",
  "culturally disconnected",
  "functionally communicated",
  "emotionally empty",
  "saying what everyone else says",
  "looking like everyone else",
  "competing on the same terms",
];

const DECODE = [
  { n: "01", t: "The ordinary", d: "It starts simple. A familiar, elemental salt crystal.", img: "/brand/step-1-ordinary.jpg", w: 190, h: 184 },
  { n: "02", t: "Look closer", d: "Within its natural geometry, a distinct ‘S’ begins to appear.", img: "/brand/step-2-look-closer.jpg", w: 301, h: 220 },
  { n: "03", t: "Something extra emerges", d: "The facets come alive, revealing a distinctive form.", img: "/brand/step-3-extra.jpg", w: 190, h: 190 },
  { n: "04", t: "The signature", d: "A simple crystal. A powerful idea. Unmistakably SALT.", img: "/brand/step-4-signature.jpg", w: 295, h: 140 },
];

const METHOD = [
  { t: "Find the human truth.", d: "We start with people, not marketing frameworks." },
  { t: "Shape the idea.", d: "We question before we prescribe." },
  { t: "Create the experience.", d: "We find unexpected ways to make an idea memorable." },
  { t: "Make it matter.", d: "Attention is not the destination. Change is." },
];

const VALUES = [
  ["Relevance", "noise", "If it doesn’t matter to people, why say it?"],
  ["Human", "corporate", "People aren’t demographics, segments or data points. They’re people."],
  ["Original", "obvious", "If everyone can say it, it isn’t an idea yet."],
  ["Impact", "vanity", "Attention is not the destination. Change is."],
  ["Courage", "convention", "If the category says left, we’re willing to ask why."],
];

const SERVICES: { t: string; d: string; points?: string[]; attribi?: boolean }[] = [
  {
    t: "Brand architecture",
    d: "One brand or a whole family? We structure your brands so customers know what each stands for, your marketing works harder, and new businesses grow without cannibalising existing ones.",
    points: ["Positioning & purpose", "Consumer & cultural insight", "Brand narrative", "Messaging & tone of voice", "Go-to-market strategy"],
  },
  {
    t: "Brand proposition & communication",
    d: "Blending in is easy. Standing for something takes guts. We turn sharp positioning into bold communication that gets remembered, builds preference and wins customers.",
  },
  {
    t: "Product or category launch",
    d: "A new name isn’t a launch. We get product, pricing, positioning and go-to-market right — so you win first-time buyers, enter new markets and turn trial into repeat business.",
  },
  {
    t: "Digital strategy",
    d: "Less chasing clicks. More turning clicks into sales. Strategy that grabs attention, drives action and grows business.",
    points: ["Google & Meta Ads", "LinkedIn & paid social", "Media planning & buying", "Performance creative", "Conversion rate optimisation"],
  },
  {
    t: "Creative | Content",
    d: "Ideas with a life beyond the brief. We turn your point of view into campaigns, films and conversations worth spending time with.",
    points: ["Integrated campaigns", "Film & production", "Organic social", "Creator partnerships"],
  },
  {
    t: "Search & AI discovery",
    d: "Be useful wherever people look for answers. Build discoverability across search engines, answer engines and generative AI experiences.",
    points: ["Technical & on-page SEO", "GEO · Generative engine optimisation", "AEO · Answer engine optimisation"],
  },
  {
    t: "Attribution & growth intelligence",
    d: "Platform claims. Business truth. With Attribi, trace customer journeys, reconcile platform claims and feed better signals back into campaigns.",
    points: ["Multi-touch attribution", "CRM & ad platform integration", "First-party tracking", "Offline conversions", "Revenue reporting"],
    attribi: true,
  },
  {
    t: "Investor pitch deck",
    d: "Pretty slides don’t win pitches. Sharp thinking does. We bring the insight, the nerve and the strategy to turn a good brief into business that moves.",
  },
  {
    t: "Brand workshops",
    d: "Great brands aren’t built by nodding in a room. No boring brainstorms — just sharp minds, uncomfortable questions and ideas worth acting on.",
  },
];

const FAQS: { q: string; a: string; list?: string[] }[] = [
  {
    q: "What all does SALT do?",
    a: "SALT is a marketing consulting and CreaTech firm that helps businesses crack everything from fundamental brand and digital challenges to complex business problems. Whether you’re a start-up finding your feet or an established brand gearing up for its next big move, we don’t just crack the thinking — we roll up our sleeves and bring it to life, from the first big idea to the final execution.",
  },
  {
    q: "Can we start with one service?",
    a: "Yes. A positioning project, a campaign, a search audit or an attribution setup can be a starting point. We consider the wider customer journey so the work fits what your business is already doing.",
  },
  {
    q: "Can SALT work with our in-house team?",
    a: "Yes. We can work alongside your marketing, design, sales and technology teams. We agree responsibilities, approvals and how information moves between teams before work begins.",
  },
  {
    q: "We’re growing, but we’re still not a brand people remember. Now what?",
    a: "Growth gets you noticed. A distinctive brand gets you remembered. We find what makes you matter to people and turn it into a clear, compelling reason to choose you.",
  },
  {
    q: "We’re spending on campaigns, but nothing seems to stick. What are we missing?",
    a: "More noise doesn’t guarantee more impact. We dig into the audience, the message and the idea to find what’s missing — then build communication that earns attention, sticks in memory and moves people to act.",
  },
  {
    q: "How do we make brand building work harder for business?",
    a: "Brand building shouldn’t just look good; it should do good business. We connect consumer insight, strategy and creativity to look at, among other things:",
    list: ["Building preference — aided / unaided recall", "Sales impact or lead conversion rates", "Increased footfalls", "Increased product trial"],
  },
  {
    q: "Do you work with agencies?",
    a: "We keep things lean, not limited. Strategy, brand thinking, technology and creative direction stay closely connected, while we collaborate with specialist partners across design, PR, media buying, influencers and production. One connected team, the right expertise, and no unnecessary layers.",
  },
  {
    q: "What happens after we get in touch?",
    a: "We discuss your business, audience, challenge and existing work. Then we recommend a scope with deliverables, responsibilities and milestones. Pricing and timing are set around that scope.",
  },
];

/* =========================================================
   Page
   ========================================================= */

export default function Home() {
  return (
    <>
      <Header />
      <Reveal />

      <main id="top">
        {/* ===== 1 · THE PROMISE ===== */}
        <section aria-labelledby="hero-title" className="flex min-h-[100svh] flex-col bg-black text-white">
          <div className={`${wrap} flex flex-1 flex-col justify-end pt-36 pb-12`}>
            <div className="grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <Eyebrow dark>CreaTech brand consulting &amp; advertising studio</Eyebrow>
                <h1 id="hero-title" className={`${serif} mt-8 text-[clamp(3.5rem,10.5vw,9.5rem)] font-bold leading-[0.88] tracking-[-0.04em]`}>
                  No <span className="font-normal text-salt">Brand</span>
                  <br />
                  Stays Bland.
                </h1>
              </div>
              <Image
                src="/brand/crystal-hidden-s.jpg"
                alt="The SALT crystal — a hidden ‘S’ within its facets"
                width={474}
                height={486}
                priority
                sizes="(min-width: 768px) 300px, 220px"
                className="h-auto w-[220px] md:w-[300px]"
              />
            </div>

            <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-[1.2fr_1fr_auto] md:items-start">
              <p className={`${body} max-w-md text-white/75`}>
                We’re a CreaTech brand consulting and advertising studio that builds brands to grow businesses — bringing creative thinking and
                technology together to challenge convention and turn ideas into action.
              </p>
              <p className={`${serif} text-xl leading-snug text-white/60`}>The extraordinary is always hidden in the ordinary.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="bg-white px-7 py-4 text-[12px] uppercase tracking-[0.3em] text-black hover:bg-salt hover:text-white">
                  Brief us
                </a>
                <a href="#belief" className="border border-white/40 px-7 py-4 text-[12px] uppercase tracking-[0.3em] hover:border-white">
                  Read the story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 2 · THE PROBLEM ===== */}
        <section id="belief" aria-labelledby="belief-title" className={`${section} scroll-mt-4 bg-white`}>
          <div className={wrap}>
            <div className="reveal grid gap-12 md:grid-cols-[1.25fr_0.75fr] md:gap-20">
              <div>
                <Eyebrow>The problem</Eyebrow>
                <h2 id="belief-title" className={`${h2} mt-6`}>
                  Brands don’t suffer from a lack of visibility. They suffer from <span className="text-salt">blandness.</span>
                </h2>
                <div className={`${body} mt-10 max-w-2xl space-y-5 text-grey-700`}>
                  <p>
                    In a world overflowing with content, products are copied. Campaigns sound the same. Communication gets louder, but not more
                    meaningful. Even good businesses struggle to create an emotional connection.
                  </p>
                  <p>
                    Somewhere along the way, playing it safe became the safe bet. We started following playbooks, borrowing ideas and chasing what
                    worked for someone else. And in trying to fit in, we forgot what made us different in the first place.
                  </p>
                  <p className="font-bold text-black">Because what makes you, YOU, shouldn’t be what makes you fit in. And brands? No different.</p>
                </div>
              </div>
              <div className="md:pt-14">
                <p className={`${eyebrow} text-grey-500`}>For SALT, bland means</p>
                <ul className="mt-5 border-t border-black">
                  {BLAND.map((b) => (
                    <li key={b} className="border-b border-grey-300 py-3 text-[17px] text-grey-500 line-through decoration-grey-500 decoration-1">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <blockquote className="reveal mt-20 bg-grey-50 px-6 py-14 text-center md:mt-24 md:px-16 md:py-20">
              <p className={`${serif} mx-auto max-w-4xl text-[clamp(1.9rem,3.6vw,3.2rem)] leading-[1.15]`}>
                People don’t remember brands because they bought them. They remember them because they{" "}
                <span className="font-bold text-salt">meant something.</span>
              </p>
              <p className={`${eyebrow} mt-8 text-grey-500`}>Apple · Nike · Airbnb · Disney · Patagonia</p>
              <p className="mt-8 text-lg font-bold">Because the strongest brands aren’t chosen. They’re lived.</p>
            </blockquote>

            <Bridge href="#philosophy">So what turns a bland brand into one people live with? Something surprisingly small.</Bridge>
          </div>
        </section>

        {/* ===== 3 · THE PHILOSOPHY (and the name) ===== */}
        <section id="philosophy" aria-labelledby="philosophy-title" className={`${section} scroll-mt-4 bg-grey-50`}>
          <div className={wrap}>
            <div className="reveal grid gap-12 md:grid-cols-2 md:gap-20">
              <div>
                <Eyebrow>Our philosophy · Why the name</Eyebrow>
                <h2 id="philosophy-title" className={`${h2} mt-6`}>
                  A little salt can change the entire dish. <span className="font-normal text-grey-500">The same is true of a brand.</span>
                </h2>
              </div>
              <div className={`${body} space-y-5 text-grey-700 md:pt-10`}>
                <p className={`${serif} text-2xl font-bold text-black`}>Try eating chips without it. Go on. We’ll wait.</p>
                <p>
                  Rashinder and Rajesh had been racking their brains for a name for their new venture. Then, one fine day, lunch joined the
                  brainstorming session — Rashinder’s pav bhaji, Rajesh’s litti chokha, and a missing pinch of salt.{" "}
                  <span className="font-bold text-black">Namak. Bang. SALT.</span>
                </p>
                <p>
                  Four letters. One crisp little word. A great leveller, whether you’re talking food, people or business. You don’t need heaps of
                  it. You just need the right amount — a sharper insight, a deeper understanding of people, an idea that makes them feel something.
                </p>
              </div>
            </div>

            <div className="reveal mt-16 grid border-t border-black md:mt-20 md:grid-cols-3">
              {[
                ["The right idea", "can change how people see it."],
                ["The right story", "can change how they feel about it."],
                ["The right experience", "can change what they choose."],
              ].map(([a, b], i) => (
                <div key={a} className={`py-8 md:px-8 ${i === 0 ? "md:pl-0" : "border-t border-grey-300 md:border-t-0 md:border-l"}`}>
                  <p className={`${serif} text-2xl font-bold`}>{a}</p>
                  <p className={`${body} mt-2 text-grey-700`}>{b}</p>
                </div>
              ))}
            </div>

            {/* The brand symbol: from ordinary to SALT */}
            <div className="reveal mt-16 md:mt-20">
              <p className={`${eyebrow} text-grey-500`}>Salt is ordinary. Its effect isn’t.</p>
              <ol className="mt-8 grid gap-px bg-grey-300 sm:grid-cols-2 lg:grid-cols-4">
                {DECODE.map((d) => (
                  <li key={d.n} className="flex flex-col bg-grey-50 p-6">
                    <div className="flex h-[150px] items-end justify-center">
                      <Image src={d.img} alt={d.t} width={d.w} height={d.h} sizes="300px" className="h-auto max-h-[150px] w-auto" />
                    </div>
                    <p className={`${eyebrow} mt-6 text-black`}>
                      <span className="font-bold text-salt">{d.n}</span> {d.t}
                    </p>
                    <p className="mt-2 text-[15px] leading-relaxed text-grey-700">{d.d}</p>
                  </li>
                ))}
              </ol>
              <p className={`${serif} mt-10 text-center text-2xl font-bold`}>
                SALT exists to find that difference. <span className="text-salt">It reveals. It enhances. It transforms.</span>
              </p>
            </div>

            <Bridge href="#method">Finding that difference isn’t luck. It’s a method — and a few rules we never break.</Bridge>
          </div>
        </section>

        {/* ===== 4 · THE METHOD & THE RULES ===== */}
        <section id="method" aria-labelledby="method-title" className={`${section} scroll-mt-4 bg-black text-white`}>
          <div className={wrap}>
            <div className="reveal grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
              <div>
                <Eyebrow dark>Our method</Eyebrow>
                <h2 id="method-title" className={`${h2} mt-6`}>
                  Find the truth that’s already there. <span className="text-salt">Then make it matter.</span>
                </h2>
              </div>
              <p className={`${body} text-white/70 md:pt-10`}>
                We believe the power to make a brand extraordinary often lies in something simple — an idea, a truth, a story, a point of view that
                is already there but hasn’t been found, sharpened or expressed. SALT uncovers that truth, sharpens it, and turns it into stories,
                experiences and ideas that people want to live with.
              </p>
            </div>

            <ol className="reveal mt-16 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {METHOD.map((m, i) => (
                <li key={m.t} className="bg-black py-8 sm:px-6 lg:first:pl-0">
                  <p className="text-sm font-bold text-salt">{String(i + 1).padStart(2, "0")}</p>
                  <p className={`${serif} mt-3 text-2xl font-bold`}>{m.t}</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">{m.d}</p>
                </li>
              ))}
            </ol>

            <div className="reveal mt-20 md:mt-24">
              <h3 className={`${serif} text-[clamp(2rem,3.8vw,3.4rem)] font-bold leading-[1.05]`}>
                No rules. <span className="font-normal text-white/50">Except the ones that matter.</span>
              </h3>
              <ul className="mt-10 border-t border-white/25">
                {VALUES.map(([a, b, d]) => (
                  <li key={a} className="grid gap-2 border-b border-white/15 py-6 md:grid-cols-[1fr_1.2fr] md:items-baseline md:gap-10">
                    <p className={`${serif} text-[clamp(1.6rem,2.8vw,2.4rem)] leading-none`}>
                      <span className="font-bold">{a}</span> <span className="text-salt">over</span> <span className="text-white/45">{b}.</span>
                    </p>
                    <p className="text-white/65">{d}</p>
                  </li>
                ))}
              </ul>
              <p className={`${eyebrow} mt-10 text-white/45`}>Curious · Rebellious · Human · Playful · Unapologetically creative</p>
            </div>

            <Bridge href="#services" dark>
              Those rules shape everything we make — from the first big idea to the final execution.
            </Bridge>
          </div>
        </section>

        {/* ===== 5 · WHAT WE DO ===== */}
        <section id="services" aria-labelledby="services-title" className={`${section} scroll-mt-4 bg-white`}>
          <div className={wrap}>
            <div className="reveal grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-20">
              <div>
                <Eyebrow>What we do</Eyebrow>
                <h2 id="services-title" className={`${h2} mt-6`}>
                  Creating brands? <span className="text-salt">Don’t!</span> Live ’em first!
                </h2>
              </div>
              <p className={`${body} text-grey-700`}>
                Strategy, brand thinking, technology and creative direction — closely connected, so every idea is built to turn attention into
                action. No fluff. Real impact.
              </p>
            </div>

            <div className="reveal mt-14 grid gap-px border border-grey-300 bg-grey-300 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s, i) => (
                <article key={s.t} className="flex flex-col bg-white p-8">
                  <p className="text-sm font-bold text-salt">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className={`${serif} mt-3 text-[1.6rem] font-bold leading-tight`}>{s.t}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-grey-700">{s.d}</p>
                  {s.points && (
                    <ul className="mt-5 space-y-1.5 text-[14px] text-black">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span aria-hidden="true" className="text-salt">·</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.attribi && (
                    <p className={`${eyebrow} mt-6 text-salt`}>SALT × Attribi</p>
                  )}
                </article>
              ))}
            </div>

            <div className="reveal mt-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <p className="text-[15px]">
                <span className={`${eyebrow} mr-4 text-grey-500`}>Engagement</span>
                <span className="font-bold">Retainer (6 months minimum) · Project · Workshops</span>
              </p>
              <a href="#contact" className="self-start bg-black px-7 py-4 text-[12px] uppercase tracking-[0.3em] text-white hover:bg-salt">
                Brief us — we’ll add the SALT
              </a>
            </div>

            <Bridge href="#minds">And behind every one of them, two people who have sat on the other side of the table.</Bridge>
          </div>
        </section>

        {/* ===== 6 · THE MINDS (proof) ===== */}
        <section id="minds" aria-labelledby="minds-title" className={`${section} scroll-mt-4 bg-grey-50`}>
          <div className={wrap}>
            <div className="reveal">
              <Eyebrow>The minds</Eyebrow>
              <h2 id="minds-title" className={`${h2} mt-6 max-w-5xl`}>
                Anyone can call themselves an agency. <span className="font-normal text-grey-500">Not everyone has been the client.</span>
              </h2>
              <p className={`${body} mt-6 max-w-2xl text-grey-700`}>
                We know what it’s like to own the brief, defend the budget, make the call and answer for the results.
              </p>
            </div>

            <div className="reveal mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
              <div>
                <p className={`${serif} text-[clamp(3.5rem,7vw,6rem)] font-bold leading-none tracking-[-0.04em]`}>
                  RB <span className="text-salt">×</span> RK
                </p>
                <p className="mt-5 text-lg font-bold">No, not ‘Rajiv Bhatia and Ranbir Kapoor’. We’re the other two Rs.</p>
              </div>
              <div className={`${body} space-y-5 text-grey-700`}>
                <p>
                  We met at Zopper in 2015. One had a thing for what makes people tick; the other had a thing for making numbers talk. One chased
                  consumer truths. The other chased the data. Between us, very little escaped interrogation.
                </p>
                <p>
                  We weren’t plotting a startup. We were just getting increasingly unimpressed with boring marketing. Turns out, agreeing on what’s
                  broken is a pretty good place to start building something. <span className="font-bold text-black">Enter SALT.</span>
                </p>
              </div>
            </div>

            <div className="reveal mt-14 grid gap-px bg-grey-300 md:grid-cols-2">
              {[
                {
                  tag: "Brand Alpha",
                  name: "Rashinder Bhat",
                  line: "I’ve built brands from the inside.",
                  d: "Brings the brand obsession — with experience across Nikon, British Council, Tolexo, HCL and NSDC.",
                },
                {
                  tag: "Tech Alpha",
                  name: "Rajesh Kumar",
                  line: "Great ideas deserve great execution.",
                  d: "Brings the tech and the numbers — turning ideas into effective digital experiences.",
                },
              ].map((p) => (
                <article key={p.name} className="bg-grey-50 py-8 md:p-10 md:first:pl-0">
                  <p className={`${eyebrow} text-salt`}>{p.tag}</p>
                  <h3 className={`${serif} mt-3 text-3xl font-bold`}>{p.name}</h3>
                  <p className={`${serif} mt-2 text-xl`}>{p.line}</p>
                  <p className="mt-3 text-[15px] leading-relaxed text-grey-700">{p.d}</p>
                </article>
              ))}
            </div>

            <div className="reveal mt-16 grid gap-10 border-t border-black pt-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className={`${serif} text-[clamp(1.8rem,3.4vw,3rem)] font-bold leading-tight`}>
                  Anyone can talk brand. We’ve lived it. <span className="text-grey-500">That’s the substance. That’s SALT.</span>
                </p>
              </div>
              <ul className="space-y-1 text-lg font-bold md:text-right">
                <li>More customers.</li>
                <li>More sales.</li>
                <li className="text-salt">Measurable impact.</li>
              </ul>
            </div>

            <Bridge href="#faq">Still weighing it up? Good. Ask us anything.</Bridge>
          </div>
        </section>

        {/* ===== 7 · QUESTIONS ===== */}
        <section id="faq" aria-labelledby="faq-title" className={`${section} scroll-mt-4 bg-white`}>
          <div className={`${wrap} grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20`}>
            <div className="reveal">
              <Eyebrow>Questions</Eyebrow>
              <h2 id="faq-title" className={`${h2} mt-6`}>
                What’s at stake? <span className="text-salt">Ask us.</span>
              </h2>
              <p className={`${body} mt-6 text-grey-700`}>
                The first chat is FREE.
                <br />
                The serious consulting? Paid, though. Phew! :-)
              </p>
            </div>
            <div className="reveal border-t border-black">
              {FAQS.map((f) => (
                <details key={f.q} className="border-b border-grey-300">
                  <summary className={`${serif} flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-xl font-bold hover:text-salt`}>
                    <span>{f.q}</span>
                    <span aria-hidden="true" className="text-salt">
                      <span className="sign-open">+</span>
                      <span className="sign-close">−</span>
                    </span>
                  </summary>
                  <div className="pb-6 text-[16px] leading-relaxed text-grey-700">
                    <p>{f.a}</p>
                    {f.list && (
                      <ul className="mt-3 space-y-1">
                        {f.list.map((l) => (
                          <li key={l} className="flex gap-2">
                            <span aria-hidden="true" className="text-salt">·</span>
                            {l}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8 · YOUR MOVE ===== */}
        <section id="contact" aria-labelledby="contact-title" className={`${section} scroll-mt-4 bg-black text-white`}>
          <div className={wrap}>
            <div className="reveal">
              <Eyebrow dark>Let’s talk</Eyebrow>
              <h2 id="contact-title" className={`${serif} mt-6 max-w-5xl text-[clamp(2.8rem,7vw,6.4rem)] font-bold leading-[0.95] tracking-[-0.035em]`}>
                Got a problem that needs some <span className="text-salt">salt?</span>
              </h2>
            </div>

            <div className="reveal mt-14 grid gap-14 border-t border-white/20 pt-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
              <div>
                <p className={`${serif} text-2xl font-bold`}>Brief us. We’ll add the SALT.</p>
                <p className={`${body} mt-4 text-white/65`}>
                  Response time: 2 days. Guaranteed. We may take our time with the thinking. Not with the replying.
                </p>

                <div className="mt-10 space-y-8">
                  <div>
                    <p className={`${eyebrow} text-white/50`}>Clock ticking? Patience running thin?</p>
                    <p className="mt-2 text-white/65">Don’t stew on it. Call SALT</p>
                    <a href="tel:+919958812423" className={`${serif} mt-1 block text-3xl font-bold hover:text-salt`}>
                      +91 99588 12423
                    </a>
                  </div>
                  <div>
                    <p className={`${eyebrow} text-white/50`}>Contact</p>
                    <p className="mt-2 text-lg">
                      <a href="tel:+919958812423" className="hover:text-salt">99588 12423</a>
                      <span className="mx-3 text-white/40">/</span>
                      <a href="tel:+919811462813" className="hover:text-salt">98114 62813</a>
                    </p>
                    <a href="mailto:hello@salt360.co.in" className="mt-1 block text-lg hover:text-salt">
                      hello@salt360.co.in
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* ===== Signature ===== */}
      <footer className="border-t border-white/10 bg-black text-white">
        <div className={`${wrap} grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-end`}>
          <Image src="/salt-wordmark-white.png" alt="SALT — No Brand Stays Bland" width={1000} height={360} sizes="340px" className="h-auto w-full max-w-[340px]" />
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.25em] text-white/60">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
        </div>
        <div className={`${wrap} flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-[12px] uppercase tracking-[0.25em] text-white/45 md:flex-row`}>
          <span>© 2026 SALT. No Brand Stays Bland.</span>
          <a href="mailto:hello@salt360.co.in" className="normal-case tracking-normal hover:text-white">
            hello@salt360.co.in
          </a>
          <a href="#top" className="hover:text-white">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
