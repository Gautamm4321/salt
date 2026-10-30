// What We Do — services grouped into phases. The staircase is drawn in this order.

export type Service = {
  title: string;
  pitch: string; // one-line punch
  detail: string; // short paragraph
  includes?: string[];
  result?: string;
  link?: { label: string; href: string };
};

export type Phase = { name: string; services: Service[] };

export const phases: Phase[] = [
  {
    name: "Think",
    services: [
      {
        title: "Brand workshops",
        pitch: "Great brands aren't built by nodding in a room.",
        detail:
          "We challenge assumptions, shake up the obvious and get to the truth that moves your business. No boring brainstorms.",
        includes: ["Sharp minds", "Uncomfortable questions", "Ideas worth acting on"],
      },
      {
        title: "Brand architecture",
        pitch: "One brand or a whole family?",
        detail:
          "We structure your brands so customers know what each stands for, your marketing works harder, and new businesses grow without cannibalising existing ones.",
        includes: [
          "Positioning & purpose",
          "Consumer & cultural insight",
          "Brand architecture",
          "Brand narrative",
          "Messaging & tone of voice",
          "Go-to-market strategy",
        ],
        result: "Sharper differentiation, smarter marketing investments and a portfolio built to grow.",
      },
    ],
  },
  {
    name: "Define",
    services: [
      {
        title: "Brand proposition & communication",
        pitch: "Blending in is easy. Standing for something takes guts.",
        detail:
          "If your brand sounds like everyone else, why should anyone choose you? We turn sharp positioning into bold communication that gets remembered, builds preference and wins customers.",
        result: "One sharp strategy. One connected story. Built to turn attention into action.",
      },
      {
        title: "Investor pitch deck",
        pitch: "Pretty slides don't win pitches. Sharp thinking does.",
        detail:
          "No recycled ideas dressed up in fancy decks. We bring the insight, the nerve and the strategy to turn a good brief into business that moves.",
      },
    ],
  },
  {
    name: "Launch",
    services: [
      {
        title: "Product or category launch",
        pitch: "A new name isn't a launch. Give people a reason to choose it.",
        detail:
          "A relaunch isn't a makeover. Make the market look again. From first impressions to repeat purchases, we turn launches into market traction and sales.",
        includes: ["Product", "Pricing", "Positioning", "Go-to-market"],
        result: "Win first-time buyers, enter new markets and turn trial into repeat business.",
      },
    ],
  },
  {
    name: "Make",
    services: [
      {
        title: "Creative & content",
        pitch: "Ideas with a life beyond the brief.",
        detail: "We turn your point of view into campaigns, films and conversations worth spending time with.",
        includes: [
          "Integrated campaigns",
          "Film & production",
          "Organic social",
          "Editorial & content strategy",
          "Community building",
          "Creator partnerships",
        ],
      },
    ],
  },
  {
    name: "Grow",
    services: [
      {
        title: "Digital strategy",
        pitch: "Less chasing clicks. More turning clicks into sales.",
        detail: "Less marketing noise. More meaningful connections. Strategy that grabs attention, drives action and grows business.",
        includes: [
          "Google & Meta ads",
          "LinkedIn & paid social",
          "Media planning & buying",
          "Performance creative",
          "Conversion rate optimisation",
          "Retargeting & lifecycle marketing",
        ],
      },
      {
        title: "Search & AI discovery",
        pitch: "Be useful wherever people look for answers.",
        detail: "Build discoverability across search engines, answer engines and generative AI experiences.",
        includes: [
          "Technical & on-page SEO",
          "Content & topical authority",
          "Local & ecommerce SEO",
          "GEO · Generative engine optimisation",
          "AEO · Answer engine optimisation",
          "Structured data & entity clarity",
        ],
      },
    ],
  },
  {
    name: "Measure",
    services: [
      {
        title: "Attribution & growth intelligence",
        pitch: "Connect marketing to what happens in your business.",
        detail:
          "With Attribi, trace customer journeys, reconcile platform claims and feed better signals back into campaigns.",
        includes: [
          "Multi-touch attribution",
          "CRM & ad platform integration",
          "First-party tracking",
          "Offline conversions",
          "Revenue reporting",
          "Experimentation & measurement",
        ],
        link: { label: "SALT × Attribi", href: "#" }, // TODO: Attribi URL
      },
    ],
  },
];
