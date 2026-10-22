import Image from "next/image";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import TiltCard from "@/components/TiltCard";
import ServiceList, { type Service } from "@/components/ServiceList";
import ContactForm from "@/components/ContactForm";

/* ---------- small helpers ---------- */

const display = "font-[family-name:var(--font-syne)] font-bold uppercase tracking-[-0.03em]";
const serif = "font-[family-name:var(--font-instrument)]";

/** Splits a paragraph into words that light up on scroll. */
function Words({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p data-words className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="mw">
          {w}{" "}
        </span>
      ))}
    </p>
  );
}

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div data-reveal className="mb-10 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.22em]">
      <span className={`${serif} text-base normal-case italic tracking-normal`}>({n})</span>
      <span className="h-px w-12 bg-black/40" />
      {children}
    </div>
  );
}

/* ---------- content ---------- */

const SERVICES: Service[] = [
  {
    title: "Brand Architecture",
    line: "One brand or a whole family? We structure your brands so customers know what each stands for, your marketing works harder, and new businesses grow without confusing or cannibalising existing ones.",
    points: ["Positioning & purpose", "Consumer & cultural insight", "Brand narrative", "Messaging & tone of voice", "Go-to-market strategy"],
  },
  {
    title: "Brand Proposition & Communication",
    line: "Blending in is easy. Standing for something takes guts. We turn sharp positioning into bold communication that gets remembered, builds preference and wins customers.",
  },
  {
    title: "Product or Category Launch",
    line: "A new name isn’t a launch. Give people a reason to choose it. From first impressions to repeat purchases, we turn launches into market traction and sales.",
    points: ["Product", "Pricing", "Positioning", "Go-to-market"],
  },
  {
    title: "Digital Strategy",
    line: "Less chasing clicks. More turning clicks into sales. Strategy that grabs attention, drives action and grows business.",
    points: ["Google & Meta Ads", "LinkedIn & paid social", "Media planning & buying", "Performance creative", "CRO", "Retargeting & lifecycle"],
  },
  {
    title: "Creative | Content",
    line: "Ideas with a life beyond the brief. We turn your point of view into campaigns, films and conversations worth spending time with.",
    points: ["Integrated campaigns", "Film & production", "Organic social", "Editorial & content strategy", "Community building", "Creator partnerships"],
  },
  {
    title: "Search & AI Discovery",
    line: "Be useful wherever people look for answers — across search engines, answer engines and generative AI experiences.",
    points: ["Technical & on-page SEO", "Topical authority", "Local & ecommerce SEO", "GEO", "AEO", "Structured data"],
  },
  {
    title: "Attribution & Growth Intelligence",
    line: "Connect marketing activity to what happens in your business. With Attribi, trace customer journeys, reconcile platform claims and feed better signals back into campaigns.",
    points: ["Multi-touch attribution", "CRM & ad platform integration", "First-party tracking", "Offline conversions", "Revenue reporting"],
  },
  {
    title: "Investor Pitch Deck",
    line: "Pretty slides don’t win pitches. Sharp thinking does. We bring the insight, the nerve and the strategy to turn a good brief into business that moves.",
  },
  {
    title: "Brand Workshops",
    line: "Great brands aren’t built by nodding in a room. No boring brainstorms. Just sharp minds, uncomfortable questions and ideas worth acting on.",
  },
];

const FAQS: { q: string; a: string; list?: string[] }[] = [
  {
    q: "What all does SALT do?",
    a: "SALT is a marketing consulting and CreaTech firm that helps businesses crack everything from fundamental brand and digital challenges to complex business problems. Whether you’re a start-up finding your feet or an established brand gearing up for its next big move, we’ve got you covered. We don’t just crack the thinking. We roll up our sleeves and bring it to life — from the first big idea to the final execution.",
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
    q: "How do brand and performance work together?",
    a: "Brand gives campaigns a recognisable point of view. Performance reveals how people respond. We use that feedback to improve creative, media and landing pages without changing the brand’s identity every time an ad is tested.",
  },
  {
    q: "Is Attribi included in every engagement?",
    a: "We recommend Attribi when attribution and CRM-connected measurement are relevant to the scope. Product access, integration requirements and any subscription costs are agreed separately in the proposal.",
  },
  {
    q: "We’re growing, but we’re still not a brand people remember. Now what?",
    a: "Growth gets you noticed. A distinctive brand gets you remembered. We find what makes you matter to people and turn it into a clear, compelling reason to choose you.",
  },
  {
    q: "Our brand has been around for years. Does it need a refresh or a rethink?",
    a: "Not every brand needs a makeover. Sometimes it needs a fresh coat of paint; sometimes, a fresh point of view. We help you figure out what to keep, what to change and what will make you relevant again.",
  },
  {
    q: "We’re launching a new product. How do we know if there’s a real market for it?",
    a: "Before you put it out there, let’s find out if people actually want it — and why they’d choose it over what’s already out there. We sharpen your proposition and go-to-market strategy to give your launch a stronger shot at success.",
  },
  {
    q: "We’re spending on campaigns, but nothing seems to stick. What are we missing?",
    a: "More noise doesn’t guarantee more impact. We dig into the audience, the message and the idea to find what’s missing — then build communication that earns attention, sticks in memory and moves people to act.",
  },
  {
    q: "Should we stretch our existing brand or create a new one?",
    a: "One brand, a sub-brand or a whole new identity? We help you choose the right structure so customers know what each offering stands for, your brands don’t trip over each other, and your business has room to grow.",
  },
  {
    q: "How do we make brand building work harder for business?",
    a: "Brand building shouldn’t just look good; it should do good business. We connect consumer insight, strategy and creativity to look at, among other things:",
    list: [
      "Building preference — aided / unaided recall",
      "Sales impact or lead conversion rates",
      "Increased footfalls",
      "Increased product trial — with clear business outcomes in sight",
    ],
  },
  {
    q: "Do you work with agencies?",
    a: "We keep things lean, not limited. Strategy, brand thinking, technology and creative direction stay closely connected, while we collaborate with specialist partners for specific needs across design, PR, media buying, influencers and production work. You get one connected team, the right expertise for the job, and no unnecessary layers between the big idea and getting it done.",
  },
  {
    q: "What happens after we get in touch?",
    a: "We discuss your business, audience, challenge and existing work. Then we recommend a scope with deliverables, responsibilities and milestones. Pricing and timing are set around that scope.",
  },
];

const ATTRIBI = [
  "First-party tracking",
  "Multi-touch attribution",
  "CRM-connected journeys",
  "Claimed versus verified",
  "Offline conversion feedback",
  "A practical growth workflow",
];

const MARQUEE = ["No Fluff", "Real Impact", "Make Shit Happen", "No Brand Stays Bland", "CreaTech", "More Customers", "More Sales"];

/* ---------- page ---------- */

export default function Home() {
  return (
    <Experience>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section data-stone="0.52 0.1 1.2 front" className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-10 pt-32 md:px-10">
          <p data-hero-fade className="mb-8 max-w-xs text-xs font-semibold uppercase tracking-[0.22em] md:mb-12">
            CreaTech brand consulting &amp; advertising studio
          </p>

          <h1 className={`${display} text-[clamp(2.72rem,10.8vw,12rem)] leading-[0.84]`}>
            <span className="block overflow-hidden pb-[0.04em]">
              <span data-hero-line className="block">
                No{" "}
                <span className={`${serif} font-normal normal-case italic tracking-[-0.02em] text-[var(--accent)]`}>Brand</span>
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <span data-hero-line className="block">Stays</span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">Bland.</span>
            </span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
            <p data-hero-fade className="max-w-md text-lg leading-relaxed md:text-xl">
              We bring creative thinking and technology together to challenge convention and turn ideas into action.
            </p>
            <div data-hero-fade className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#e8dcc8] transition-transform duration-300 hover:scale-[1.04]"
              >
                Brief Us <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#manifesto" className="link-underline text-sm font-semibold uppercase tracking-[0.14em]">
                Read the manifesto
              </a>
            </div>
          </div>

          <div data-hero-fade className="mt-12 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]">
            <span className="relative block h-10 w-6 rounded-full border border-black/50">
              <span className="absolute left-1/2 top-2 h-2 w-[2px] -translate-x-1/2 animate-bounce rounded bg-black" />
            </span>
            Scroll
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <div className="overflow-hidden border-y border-black/15 py-5">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
                {MARQUEE.map((m) => (
                  <span key={m} className={`${display} flex items-center px-6 text-2xl md:text-4xl`}>
                    {m}
                    <span className="ml-12 inline-block h-3 w-3 rotate-45 bg-[var(--accent)]" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ===== MANIFESTO ===== */}
        <section id="manifesto" className="px-5 pt-32 md:px-10 md:pt-48">
          <div data-stone="-0.6 0.05 1" className="md:ml-[38%]">
            <Label n="01">Manifesto</Label>
            <h2 data-reveal className={`${display} text-[clamp(2.08rem,5.6vw,5.6rem)] leading-[0.9]`}>
              No rules.
              <br />
              Except the ones{" "}
              <span className={`${serif} font-normal normal-case italic tracking-normal`}>that matter!</span>
            </h2>
            <p data-reveal className={`${serif} mt-12 text-4xl italic md:text-5xl`}>
              Think about it.
            </p>
            <div className="mt-10 max-w-3xl space-y-8 text-[clamp(1.08rem,1.92vw,1.68rem)] font-medium leading-[1.3]">
              <Words text="None of us follows exactly the same path. We find our own way, make our own mistakes and figure out what matters to us. So why should the things we create be any different?" />
              <Words text="Yet somewhere along the way, playing it safe became the safe bet. We started following playbooks, borrowing ideas and chasing what worked for someone else." />
              <Words text="And in trying to fit in, we forgot what made us different in the first place." />
            </div>
          </div>

          <div data-stone="0.64 -0.05 0.95 exit" className="my-32 md:my-48">
            <p data-reveal className={`${serif} max-w-5xl text-[clamp(1.92rem,4.8vw,4.8rem)] leading-[1] tracking-[-0.01em]`}>
              Because what makes you, <span className={`${display} not-italic`}>YOU</span>, shouldn’t be what makes you fit in.
            </p>
            <p data-reveal className={`${display} mt-12 text-[clamp(1.6rem,4vw,3.6rem)] leading-none`}>
              And brands?{" "}
              <span className={`${serif} font-normal normal-case italic tracking-normal text-[var(--accent)]`}>No different.</span>
            </p>
          </div>

          <div data-stone="-0.62 0 0.95 front" className="md:ml-[38%]">
            <div className="max-w-3xl text-[clamp(1.08rem,1.92vw,1.68rem)] font-medium leading-[1.3]">
              <Words text="At SALT, we’d rather question the obvious than settle for the familiar. We bring creativity and technology together to find new solutions and make things that don’t just get noticed, but become part of people’s lives." />
            </div>
            <p data-reveal className="mt-16 text-xl md:text-2xl">Because being different isn’t the point.</p>
            <p data-reveal className={`${display} mt-3 text-[clamp(2.08rem,5.2vw,5.2rem)] leading-[0.9]`}>
              Making a difference is.
            </p>
          </div>

          <div className="mt-32 space-y-2 overflow-hidden md:mt-48">
            {["No borrowed brilliance.", "No cookie-cutter thinking.", "No settling for the expected."].map((t, i) => (
              <p
                key={t}
                data-slide={i % 2 === 0 ? 1 : -1}
                className={`${display} whitespace-nowrap text-[clamp(1.76rem,6.4vw,6.8rem)] leading-[1] ${i === 1 ? "text-transparent [-webkit-text-stroke:1.5px_black]" : ""}`}
              >
                {t}
              </p>
            ))}
          </div>
        </section>

        {/* ===== WHO WE ARE ===== */}
        <section id="who-we-are" data-stone="0.66 0.2 1 front" className="px-5 pt-40 md:px-10 md:pt-56">
          <Label n="02">Who we are</Label>
          <h2 data-reveal className="max-w-6xl text-[clamp(1.6rem,3.68vw,3.52rem)] font-medium leading-[1.08] tracking-[-0.02em]">
            We’re a <span className={`${serif} italic`}>CreaTech</span> brand consulting and advertising studio that builds brands to{" "}
            <span className={`${display}`}>grow</span> businesses.
          </h2>
          <p data-reveal className="mt-10 max-w-xl text-lg leading-relaxed md:text-xl">
            We bring creative thinking and technology together to challenge convention and turn ideas into action.
          </p>

          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {[
              { k: "01", t: "More customers.", d: "Brands people notice, remember and choose." },
              { k: "02", t: "More sales.", d: "Ideas built to turn attention into action." },
              { k: "03", t: "Measurable impact.", d: "Marketing connected to real business outcomes." },
            ].map((c) => (
              <TiltCard key={c.k} className="p-8 md:p-10">
                <span className={`${serif} text-xl italic`}>{c.k}</span>
                <p className={`${display} mt-16 text-4xl leading-none md:text-5xl`}>{c.t}</p>
                <p className="mt-5 text-lg">{c.d}</p>
              </TiltCard>
            ))}
          </div>

          <div className="mt-28 text-center md:mt-40">
            <p data-reveal className={`${display} text-[clamp(1.92rem,6vw,6.4rem)] leading-[0.9]`}>
              No fluff.
              <br />
              <span className={`${serif} font-normal normal-case italic tracking-normal`}>Real</span> impact.
            </p>
            <p data-reveal className="mt-8 text-sm font-semibold uppercase tracking-[0.3em]">
              ✦ Make shit happen ✦
            </p>
          </div>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section id="what-we-do" className="px-5 pt-40 md:px-10 md:pt-56">
          <div data-stone="-0.58 0.05 0.95">
            <Label n="03">What we do</Label>
            <h2 className={`${display} text-[clamp(2.4rem,8vw,8rem)] leading-[0.86]`}>
              <span data-reveal className="block">Creating brands?</span>
              <span data-reveal className={`${serif} block font-normal normal-case italic tracking-normal`}>Don’t!</span>
              <span data-reveal className="block md:text-right">Live ’em first!</span>
            </h2>
          </div>

          <div data-stone="0.74 0.45 0.75 exit" className="mt-24 md:mt-32">
            <ServiceList services={SERVICES} />
          </div>

          <div data-reveal className="mt-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.22em]">Engagement</p>
            <div className="flex flex-wrap gap-3">
              {["Retainer · 6 months minimum", "Project", "Workshops"].map((e) => (
                <span key={e} className="rounded-full border border-black/30 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.1em]">
                  {e}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ===== THE MINDS ===== */}
        <section id="the-minds" data-stone="0.62 0.05 0.95 front" className="px-5 pt-40 md:px-10 md:pt-56">
          <Label n="04">The minds</Label>
          <h2 data-reveal className={`${display} max-w-6xl text-[clamp(1.76rem,4.8vw,4.8rem)] leading-[0.92]`}>
            Anyone can call themselves an agency.{" "}
            <span className={`${serif} font-normal normal-case italic tracking-normal`}>Not everyone has been the client.</span>
          </h2>
          <p data-reveal className="mt-10 max-w-2xl text-lg leading-relaxed md:text-xl">
            We know what it’s like to own the brief, defend the budget, make the call and answer for the results.
          </p>

          <div className="mt-20 grid gap-5 md:w-[62%] md:grid-cols-2">
            {[
              { tag: "Brand Alpha", name: "Rashinder Bhat", init: "RB", line: "I’ve built brands from the inside — across Nikon, British Council, Tolexo, HCL and NSDC." },
              { tag: "Tech Alpha", name: "Rajesh Kumar", init: "RK", line: "Great ideas deserve great execution. Turning ideas into effective digital experiences." },
            ].map((p) => (
              <TiltCard key={p.init} className="p-8">
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em]">{p.tag}</span>
                  <span className={`${display} grid h-16 w-16 place-items-center rounded-full border border-black/25 text-lg`}>{p.init}</span>
                </div>
                <p className={`${display} mt-14 text-3xl leading-none`}>{p.name}</p>
                <p className="mt-4 text-base leading-relaxed">{p.line}</p>
              </TiltCard>
            ))}
          </div>
          <p data-reveal className={`${serif} mt-12 text-2xl italic md:text-3xl`}>
            RB × RK. No, not a Bollywood reboot. We’re the other two Rs.
          </p>
        </section>

        {/* ===== WHY THE NAME ===== */}
        <section id="why-salt" className="px-5 pt-40 md:px-10 md:pt-56">
          <div data-stone="-0.62 0.05 1.05 exit" className="md:ml-[38%]">
            <Label n="05">Why the name: SALT</Label>
            <h2 data-reveal className={`${serif} text-[clamp(1.92rem,4.4vw,4.4rem)] leading-[1]`}>
              Try eating chips without it. Go on. <span className="italic">We’ll wait.</span>
            </h2>
            <p data-reveal className="mt-8 text-xl md:text-2xl">Smirk on your face, right?</p>
            <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed md:text-xl">
              <p data-reveal>
                We didn’t find our name by trying harder. We found it when we weren’t trying at all. One fine day, lunch joined the
                brainstorming session — Rashinder’s favourite pav bhaji, Rajesh’s litti chokha. Two different tastes. Two different home
                comforts. And then…
              </p>
            </div>
          </div>

          <div data-stone="0.58 -0.1 1.15 front" className="mt-24 text-center md:mt-32">
            <p data-reveal className={`${serif} text-[clamp(1.92rem,4.8vw,4.8rem)] italic`}>“Arre, namak nahi hai!”</p>
            <p data-reveal className={`${display} mt-6 text-[clamp(2.24rem,8vw,8rem)] leading-[0.88]`}>
              Namak. Bang. <span className="text-[var(--accent)]">Salt.</span>
            </p>
            <p data-reveal className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed md:text-xl">
              Four letters. One crisp little word. A great leveller, whether you’re talking food, people or business. You don’t need
              heaps of it — just the right amount. Much like what happens with brands.
            </p>
            <p data-reveal className="mt-10 text-sm font-semibold uppercase tracking-[0.3em]">
              SALT it is. No brand stays bland.
            </p>
          </div>
        </section>

        {/* ===== SALT x ATTRIBI ===== */}
        <section id="attribi" data-stone="-0.64 0.15 0.9" className="px-5 pt-40 md:px-10 md:pt-56">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-20">
            <div className="md:col-start-2">
              <Label n="06">SALT × Attribi · Growth intelligence</Label>
              <h2 data-reveal className={`${display} text-[clamp(2.08rem,4.8vw,4.8rem)] leading-[0.9]`}>
                Platform claims.
                <br />
                <span className={`${serif} font-normal normal-case italic tracking-normal`}>Business truth.</span>
              </h2>
              <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
                Your ad platforms see parts of the journey. Your CRM records what happened next. Attribi helps bring those perspectives
                together. Follow the customer. Then follow the outcome.
              </p>
              <ol className="mt-12 grid gap-3 sm:grid-cols-2">
                {ATTRIBI.map((a, i) => (
                  <li key={a} data-reveal className="flex items-baseline gap-4 border-t border-black/15 pt-4">
                    <span className={`${serif} italic`}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-semibold">{a}</span>
                  </li>
                ))}
              </ol>
              <a
                data-reveal
                href="#contact"
                className="group mt-12 inline-flex items-center gap-3 rounded-full border border-black px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition-colors duration-300 hover:bg-black hover:text-[#e8dcc8]"
              >
                SALT × Attribi <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" data-stone="0.68 0.1 0.85 exit" className="px-5 pt-40 md:px-10 md:pt-56">
          <div className="md:w-[62%]">
            <Label n="07">Questions</Label>
            <h2 data-reveal className={`${display} text-[clamp(1.92rem,4.4vw,4.4rem)] leading-[0.92]`}>
              What’s at stake?{" "}
              <span className={`${serif} font-normal normal-case italic tracking-normal`}>Ask us.</span>
            </h2>
            <p data-reveal className="mt-6 text-lg md:text-xl">
              The first chat is FREE. The serious consulting? Paid, though. Phew! :-)
            </p>
            <div className="mt-14 border-t border-black/15">
              {FAQS.map((f) => (
                <details key={f.q} data-reveal className="group border-b border-black/15">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold md:text-2xl">
                    {f.q}
                    <span className="faq-icon grid h-10 w-10 shrink-0 place-items-center rounded-full border border-black/25 text-2xl font-light transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="max-w-2xl pb-7 text-base leading-relaxed md:text-lg">
                    <p>{f.a}</p>
                    {f.list && (
                      <ul className="mt-3 list-disc space-y-1 pl-5">
                        {f.list.map((l) => (
                          <li key={l}>{l}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT / BRIEF ===== */}
        <section id="contact" data-stone="-0.64 0.1 1" className="px-5 pt-40 pb-32 md:px-10 md:pt-56">
          <div className="md:ml-[34%]">
            <Label n="08">Let’s talk</Label>
            <h2 data-reveal className={`${display} text-[clamp(2.08rem,5.6vw,6rem)] leading-[0.88]`}>
              Got a problem that needs some{" "}
              <span className={`${serif} font-normal normal-case italic tracking-normal text-[var(--accent)]`}>salt?</span>
            </h2>
            <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed md:text-xl">
              Brief us. We’ll add the SALT. <strong>Response time: 2 days. Guaranteed.</strong> We may take our time with the thinking.
              Not with the replying. 😉
            </p>

            <div data-reveal className="mt-14">
              <ContactForm />
            </div>

            <div data-reveal className="mt-14 grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em]">Clock ticking? Patience running thin?</p>
                <p className="mt-3 text-lg">Don’t stew on it. Call SALT</p>
                <a href="tel:+919958812423" className={`${display} link-underline mt-1 inline-block text-3xl md:text-4xl`}>
                  99588 12423
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em]">Write to us</p>
                <a href="mailto:hello@salt360.co.in" className="link-underline mt-3 inline-block font-[family-name:var(--font-syne)] text-2xl font-bold tracking-[-0.02em] md:text-3xl">
                  hello@salt360.co.in
                </a>
                <p className="mt-2 text-lg">
                  <a href="tel:+919811462813" className="link-underline">98114 62813</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer data-stone="0.72 0.05 0.95 front" className="border-t border-black/15 px-5 pt-20 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div data-reveal>
            <Image src="/salt-wordmark.png" alt="SALT — No Brand Stays Bland" width={1000} height={360} className="h-auto w-full max-w-[620px]" />
          </div>
          <div className="grid grid-cols-2 gap-8 self-end text-sm">
            <ul className="space-y-3 font-semibold uppercase tracking-[0.14em]">
              {[
                ["Manifesto", "#manifesto"],
                ["Who We Are", "#who-we-are"],
                ["What We Do", "#what-we-do"],
                ["The Minds", "#the-minds"],
                ["Why SALT", "#why-salt"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="link-underline">{l}</a>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li><a href="tel:+919958812423" className="link-underline">+91 99588 12423</a></li>
              <li><a href="tel:+919811462813" className="link-underline">+91 98114 62813</a></li>
              <li><a href="mailto:hello@salt360.co.in" className="link-underline">hello@salt360.co.in</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-black/15 pt-6 text-xs font-semibold uppercase tracking-[0.18em] md:flex-row">
          <span>© 2026 SALT. All rights reserved.</span>
          <span>No fluff. Real impact.</span>
          <a href="#" className="link-underline">Back to top ↑</a>
        </div>
      </footer>
    </Experience>
  );
}
