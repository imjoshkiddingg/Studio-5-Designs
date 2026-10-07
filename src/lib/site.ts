export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Studio 5 Designs, Inc.",
  shortName: "Studio 5",
  tagline: "Where Purpose Finds Form",
  email: "hello@studio5designs.com",
  phone: "+63 (2) 8000 5555",
  address: {
    line1: "Studio 5 Designs, Inc.",
    line2: "Makati City, Metro Manila",
    country: "Philippines",
  },
};

export type Sector =
  | "Finance"
  | "FMCG"
  | "Education"
  | "Power"
  | "Government / Heritage";

// ─── Sector Notes ─────────────────────────────────────────────────────────────
// Short editorial writeups on why each sector matters to design and storytelling,
// and how Studio 5 approaches it. Surfaced on the /work page.

export type SectorNote = {
  sector: Sector;
  /** Why this sector matters in relation to design and storytelling */
  why: string;
  /** How Studio 5 executes for this sector */
  how: string;
};

export const sectorNotes: SectorNote[] = [
  {
    sector: "Finance",
    why: "Financial institutions deal in trust, and trust is built on how clearly you can explain yourself. A report is often the one document a stakeholder reads cover to cover — the moment numbers become a narrative about stewardship.",
    how: "We structure dense financial and ESG data so it reads with confidence, then surround it with photography and writing that remind readers there are people behind the performance.",
  },
  {
    sector: "FMCG",
    why: "Consumer brands live or die on perception, and the public now expects them to account for their impact. Sustainability and corporate reporting is where a household name proves its promises are more than packaging.",
    how: "We turn ESG frameworks and operational data into publications with genuine narrative warmth — accountability that reads like a story worth believing, not a compliance exercise.",
  },
  {
    sector: "Education",
    why: "Universities carry generations of identity. A centennial or landmark volume is not marketing — it is how an institution hands its history to the people who will carry it forward.",
    how: "We treat these as scholarly keepsakes: deep archival research, intentional typography, and a design restraint that lets a century of memory speak for itself.",
  },
  {
    sector: "Power",
    why: "Energy and infrastructure companies operate at a scale most people never see. Their challenge is credibility — proving reliability and a real commitment to sustainability to investors, regulators, and the public at once.",
    how: "We build identities and reports that hold industrial authority and environmental responsibility in the same frame, coherent across a facility sign and an investor deck.",
  },
  {
    sector: "Government / Heritage",
    why: "National institutions are custodians of shared memory. The work must satisfy scholars and still move a general reader — rigorous enough to be a reference, human enough to be kept.",
    how: "We draw from museum and exhibition thinking: give each artifact the space and light it deserves, and let the design recede in service of the object and its story.",
  },
];

// ─── Project ─────────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  client: string;
  sector: Sector;
  title: string;
  summary: string;
  image: string;
  featured?: boolean;
  /** Explicitly mark for homepage 3-up hero teaser (independent of `featured`) */
  homeFeature?: boolean;
};

// All current work is treated as full case studies (see `caseStudies` below).
// This array remains for future standalone projects that don't warrant a full
// case-study treatment.
export const projects: Project[] = [];

// ─── Case Study ───────────────────────────────────────────────────────────────

export type GalleryImage = {
  src: string;
  caption?: string;
  /** "full" = full-bleed, "half" = 50% col, "third" = 33% col */
  size?: "full" | "half" | "third";
};

export type CaseStudy = {
  slug: string;
  client: string;
  /** Display title of the publication / project */
  project: string;
  sector: Sector;
  /** One-line industry label (more specific than sector) */
  industry: string;
  /** Services delivered, listed as short labels */
  services: string[];
  /** Short intro shown in cards and page subhead */
  context: string;
  /** The client's problem or brief — 1-3 sentences */
  challenge: string;
  /** Studio's strategic + process response — 1-3 sentences */
  approach: string;
  /** Description of the final design execution — 1-3 sentences */
  designSolution: string;
  /** Measurable or qualitative result — 1-3 sentences */
  outcome: string;
  /** Awards or recognition received, if any */
  awards: string[];
  /** Narrative paragraphs (body of the case study) */
  narrative: string[];
  /** Optional client testimonial */
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  /** Full-bleed header image (used on the detail page banner) */
  hero: string;
  /** Optional image for homepage/listing cards. Falls back to `hero` if unset. */
  cardImage?: string;
  /** Short summary used on project-style cards (WorkTeaser hero). Falls back to `context`. */
  summary?: string;
  /** Mark for homepage WorkTeaser feature slots */
  homeFeature?: boolean;
  /** Ordered gallery with optional captions and size hints */
  gallery: GalleryImage[];
  /** Slugs of related projects/case studies shown at the bottom */
  relatedProjects: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "inlife-kairos",
    client: "InLife",
    project: "Kairos: Moments that Moved Us",
    sector: "Finance",
    industry: "Insurance & Financial Services",
    services: [
      "Commemorative Book Design",
      "Editorial Direction",
      "Copywriting & Manuscript Development",
      "Photography Curation",
      "Print Production Management",
    ],
    context:
      "A commemorative book capturing individual moments that shaped over 115 years of insurance leadership.",
    challenge:
      "InLife's 115th anniversary demanded more than a corporate history. The challenge was to move beyond institutional chronology and tell a deeply human story — one that employees, policyholders, and stakeholders would recognise as their own.",
    approach:
      "We structured the narrative around Kairos — the ancient Greek concept of the opportune, singular moment. Rather than organising the book chronologically, we curated pivotal human stories: moments of protection, transformation, and grace that insurance quietly made possible over 115 years.",
    designSolution:
      "The volume pairs archival photography with unhurried typography and generous white space, creating a rhythm that invites the reader to pause and reflect. A muted tonal palette honours the institution's heritage while remaining accessible and contemporary. Every spread is treated as a complete thought.",
    outcome:
      "Kairos became the defining record of InLife's 115-year milestone — distributed to every employee, board member, and key stakeholder. It has since been cited internally as the authoritative account of the institution's history, and received recognition as a benchmark in Philippine institutional publishing.",
    awards: [
      "Gold Stevie Award, Publication – Public Relations Category — 23rd Annual International Business Awards",
    ],
    narrative: [
      "InLife approached its 115th anniversary not as a corporate milestone but as a human one — 115 years measured in the moments that moved people.",
      "We structured the book around Kairos, the ancient notion of the opportune moment, weaving personal testimony, archival photography, and quiet typographic pacing into a volume meant to be revisited.",
      "The result is a keepsake that reads less like a corporate history and more like a shared memory — precise in craft, generous in humanity.",
    ],
    quote: {
      text:
        "Studio 5 Designs was a wonderful partner who captured the essence of InLife's historic milestone with sensitivity and craft.",
      author: "Nina Aguas",
      role: "Executive Chairperson, InLife",
    },
    hero: "/covers/kairos.png",
    cardImage: "/covers/kairos-1.jpg",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=2000&q=80",
        caption: "Spread overview — archival photography and editorial typography",
        size: "full",
      },
      {
        src: "/covers/kairos-1.jpg",
        caption: "Chapter spreads — portrait photography and narrative typography",
        size: "half",
      },
      {
        src: "/covers/kairos-2.jpg",
        caption: "Interior pages — editorial layout and visual storytelling",
        size: "half",
      },
    ],
    relatedProjects: ["bsp-yaman-numismatic-heritage", "dlsu-centennial"],
  },

  {
    slug: "smgp-brand-identity",
    client: "San Miguel Global Power",
    project: "Brand Identity & System",
    sector: "Power",
    industry: "Energy & Infrastructure",
    services: [
      "Brand Strategy",
      "Visual Identity Design",
      "Design System Development",
      "Brand Guidelines",
      "Print & Digital Applications",
    ],
    context:
      "Modernizing energy leadership through a unified visual language of sustainability and reliability.",
    challenge:
      "San Miguel Global Power was evolving from a legacy energy holding into a forward-looking sustainability leader. Its existing visual identity no longer communicated the scale, confidence, or environmental responsibility the company had earned.",
    approach:
      "We led a brand strategy engagement to articulate SMGP's positioning: reliable at scale, progressive in intent. The identity system had to work equally across infrastructure signage, investor reports, digital platforms, and corporate stationery — without losing coherence.",
    designSolution:
      "The resulting system centres on a confident wordmark paired with a disciplined grid and a palette that balances industrial authority with environmental credibility. Motion principles and typographic hierarchy were defined to govern both print and digital expressions, giving every touchpoint a coherent voice.",
    outcome:
      "SMGP's new identity was rolled out across all corporate communications, facility branding, and investor materials within one fiscal year. Internal adoption was high, and external stakeholder feedback cited the rebrand as a clear signal of the company's strategic direction.",
    awards: [],
    narrative: [
      "San Miguel Global Power needed an identity equal to its ambition — one that could hold both industrial scale and a credible commitment to sustainability.",
      "We built a cohesive system spanning print and digital: a confident wordmark, a disciplined grid, and a palette that signals reliability without coldness.",
      "The identity gives SMGP a signature that stands out with confidence and relevance across every stakeholder touchpoint.",
    ],
    hero:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=2000&q=80",
        caption: "Primary identity system — wordmark and colour palette",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
        caption: "Corporate stationery suite",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
        caption: "Digital and environmental applications",
        size: "half",
      },
    ],
    relatedProjects: ["mgen-energy-in-synergy", "bpi-building-a-better-philippines"],
  },

  {
    slug: "bsp-yaman-numismatic-heritage",
    client: "Bangko Sentral ng Pilipinas",
    project: "YAMAN: Numismatic Heritage",
    sector: "Government / Heritage",
    industry: "Central Banking & Cultural Heritage",
    services: [
      "Heritage Publication Design",
      "Editorial Direction",
      "Archival Photography Art Direction",
      "Research & Manuscript Development",
      "Print Production Management",
    ],
    context:
      "Archival documentation and photography of centuries of Philippine currency and cultural wealth.",
    challenge:
      "The Bangko Sentral ng Pilipinas holds one of Southeast Asia's most significant numismatic collections. The challenge was to create a publication worthy of that collection — rigorous enough for scholars, yet accessible enough to move a general reader unfamiliar with monetary history.",
    approach:
      "We treated each artifact — coin, banknote, or medal — as a subject worthy of portraiture. The editorial approach drew from museum exhibition design: give each object the space and light it deserves, and let the typography recede in service of the object.",
    designSolution:
      "Meticulous macro photography, commissioned specifically for YAMAN, forms the visual backbone of the volume. A two-column grid provides scholarly structure while large, full-bleed spreads create moments of genuine visual surprise. The palette draws from aged paper, gold leaf, and deep institutional blue.",
    outcome:
      "YAMAN was presented to international delegates at the BSP's annual numismatic conference and distributed to partner institutions across Asia-Pacific. It is now part of several national library collections and is cited as a reference standard for Philippine heritage publications.",
    awards: [
      "Best Heritage Publication — ASEAN Design Excellence Awards",
      "Gold — Philippine Book Publishers Association",
    ],
    narrative: [
      "YAMAN required both rigor and reverence — a scholarly record of Philippine money that could also move a general reader.",
      "We treated each artifact as a subject worthy of portraiture, pairing meticulous macro photography with intentional typography and generous white space.",
      "The volume celebrates identity, memory, and living heritage — a permanent form for a national story.",
    ],
    hero: "/covers/yaman.jpg",
    gallery: [
      {
        src: "/covers/yaman.jpg",
        caption: "Cover — debossed linen board with gold foil title treatment",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=80",
        caption: "Coin portraiture — macro photography on neutral ground",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        caption: "Archival spreads — historical banknotes with scholarly annotation",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=2000&q=80",
        caption: "Full-bleed chapter dividers — cultural artefact photography",
        size: "full",
      },
    ],
    relatedProjects: ["inlife-kairos", "dlsu-centennial"],
  },

  {
    slug: "bpi-building-a-better-philippines",
    client: "BPI",
    project: "Building a Better Philippines",
    sector: "Finance",
    industry: "Banking & Financial Services",
    services: [
      "Annual Report Design",
      "Editorial Direction",
      "Data Visualisation",
      "Photography Art Direction",
      "Print Production Management",
    ],
    homeFeature: true,
    context:
      "An annual report reframing financial performance as national progress — clarity, warmth, and stewardship in equal measure.",
    summary:
      "An annual report reframing financial performance as national progress — clarity, warmth, and stewardship in equal measure.",
    challenge:
      "BPI needed its annual report to do more than satisfy regulators and analysts. As one of the country's oldest banks, it wanted to frame a year of financial results as a chapter in a longer story of national development — without losing the rigour investors expect.",
    approach:
      "We built the report around a single idea: that a bank's performance is ultimately measured in the progress of the country it serves. Financial disclosures were structured for clarity, then threaded with human stories of the businesses, families, and communities behind the numbers.",
    designSolution:
      "A disciplined editorial grid keeps dense financial tables legible, while commissioned photography grounds the data in real people and places. Warm paper stock and restrained typography signal stewardship rather than spectacle — authority with a human temperature.",
    outcome:
      "The report was received as a benchmark among Philippine banking publications, praised by stakeholders for making a complex financial year both credible and genuinely readable.",
    awards: [],
    narrative: [
      "BPI asked us to treat its annual report not as a compliance document but as a statement of purpose — a bank measuring its success by the country's.",
      "We organised the financials for absolute clarity, then surrounded them with photography and writing that located the numbers in real communities.",
      "The result reads with the authority investors require and the warmth that reminds every stakeholder what the institution is actually for.",
    ],
    hero:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2000&q=80",
        caption: "Cover and opening statement — stewardship as a design principle",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
        caption: "Financial data visualisation — clarity under density",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        caption: "Commissioned photography — the people behind the performance",
        size: "half",
      },
    ],
    relatedProjects: ["inlife-kairos", "jollibee-joy-for-tomorrow"],
  },

  {
    slug: "jollibee-joy-for-tomorrow",
    client: "Jollibee Group",
    project: "Joy for Tomorrow — Sustainability Report",
    sector: "FMCG",
    industry: "Food & Consumer Goods",
    services: [
      "Sustainability Report Design",
      "ESG Data Visualisation",
      "Editorial Direction",
      "Copywriting",
      "Print Production Management",
    ],
    homeFeature: true,
    context:
      "Translating ESG frameworks and operational data into a warm, human narrative of shared responsibility.",
    summary:
      "Translating ESG frameworks and operational data into a warm, human narrative of shared responsibility.",
    challenge:
      "The Jollibee Group is one of the most recognised names in Asian food service, and its sustainability commitments carry real public expectation. The report needed to present rigorous ESG data without reading like a compliance filing — and to feel unmistakably like Jollibee.",
    approach:
      "We anchored the report in the brand's own language of joy, framing sustainability not as obligation but as a promise to the next generation. Dense ESG metrics were organised into clear, confident sections, each opening with the human story behind the data.",
    designSolution:
      "A bright, optimistic visual system balances charts and frameworks with photography of the people and communities the group serves. Typography and pacing keep the document warm and legible, so a first-time reader and a sustainability analyst both find their footing.",
    outcome:
      "Joy for Tomorrow gave the Jollibee Group a sustainability publication its stakeholders actually wanted to read — accountability expressed as a story of shared responsibility rather than a box-ticking exercise.",
    awards: [],
    narrative: [
      "Jollibee's sustainability report had to carry serious ESG disclosure while sounding like the most human brand in the room.",
      "We balanced the frameworks and the data with warmth — opening each section with the people behind the numbers.",
      "The finished report reframes accountability as a promise to tomorrow, told with the optimism the brand is known for.",
    ],
    hero: "/covers/joy-for-tomorrow.jpg",
    gallery: [
      {
        src: "/covers/joy-for-tomorrow.jpg",
        caption: "Cover — Joy for Tomorrow sustainability report",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
        caption: "ESG frameworks organised for clarity and confidence",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
        caption: "Community photography — the human side of the data",
        size: "half",
      },
    ],
    relatedProjects: ["bpi-building-a-better-philippines", "inlife-kairos"],
  },

  {
    slug: "dlsu-centennial",
    client: "De La Salle University",
    project: "Centennial Commemorative Publication",
    sector: "Education",
    industry: "Higher Education",
    services: [
      "Commemorative Book Design",
      "Archival Research",
      "Editorial Direction",
      "Photography Curation",
      "Print Production Management",
    ],
    homeFeature: true,
    context:
      "A landmark volume marking a century of Lasallian education — designed to be held and kept for generations.",
    summary:
      "A landmark volume marking a century of Lasallian education — designed to be held and kept for generations.",
    challenge:
      "De La Salle University's centennial called for a volume equal to a hundred years of Lasallian education. It had to serve alumni, faculty, and students across generations — authoritative as a historical record, yet personal enough to feel like a shared inheritance.",
    approach:
      "We approached the book as a keepsake rather than a chronicle. Working through deep archival material, we built a narrative that moved between institutional milestones and the individual lives shaped by them, letting the university's values carry the structure.",
    designSolution:
      "Intentional typography and generous white space give a century of history room to breathe. Archival and contemporary photography sit side by side, and a restrained palette lets the memory speak for itself — a volume made to be held, revisited, and passed on.",
    outcome:
      "The centennial publication became an official part of the university's institutional record and a sought-after keepsake among alumni — a hundred years of Lasallian education given permanent, dignified form.",
    awards: [],
    narrative: [
      "A century of Lasallian education needed more than a timeline — it needed a volume alumni and faculty would want to keep.",
      "We moved through the archives to build a narrative that holds institutional milestones and individual lives in the same frame.",
      "The finished book is restrained, dignified, and made to be passed on — history as a shared inheritance.",
    ],
    hero: "/covers/dlsu-centennial.jpg",
    gallery: [
      {
        src: "/covers/dlsu-centennial.jpg",
        caption: "Cover — centennial commemorative volume",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
        caption: "Archival spreads — a century of institutional memory",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1200&q=80",
        caption: "Typography and pacing — room for history to breathe",
        size: "half",
      },
    ],
    relatedProjects: ["inlife-kairos", "bsp-yaman-numismatic-heritage"],
  },

  {
    slug: "mgen-energy-in-synergy",
    client: "MGen",
    project: "Energy in Synergy",
    sector: "Power",
    industry: "Energy & Infrastructure",
    services: [
      "Report Design",
      "Visual Language Development",
      "Data Visualisation",
      "Editorial Direction",
      "Print Production Management",
    ],
    context:
      "A visual language for energy leadership grounded in reliability, sustainability, and forward motion.",
    summary:
      "A visual language for energy leadership grounded in reliability, sustainability, and forward motion.",
    challenge:
      "MGen needed to communicate its role in powering the country's growth while signalling a credible path toward sustainable energy. The work had to convey both the scale of its operations and the responsibility behind them, to investors and the public alike.",
    approach:
      "We developed a visual language built on the idea of synergy — the convergence of reliability and renewal. The structure moves from operational scale to forward-looking commitment, so the reader understands both what MGen does today and where it is heading.",
    designSolution:
      "A confident grid and a palette balancing industrial strength with environmental optimism carry the document. Infographics translate generation capacity and sustainability metrics into clear visual statements, while photography grounds the scale in the real infrastructure behind it.",
    outcome:
      "Energy in Synergy gave MGen a cohesive, forward-looking publication that positioned it as a credible leader in the country's energy transition — reliability and renewal held in a single, confident frame.",
    awards: [],
    narrative: [
      "MGen needed to show both the scale of its operations and a credible commitment to sustainable energy.",
      "We built a visual language around synergy — reliability and renewal converging — and structured the report to move from today's capacity to tomorrow's direction.",
      "The result reads as the statement of a company confident in its role in the country's energy future.",
    ],
    hero:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80",
        caption: "Cover and visual language — synergy as an organising idea",
        size: "full",
      },
      {
        src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
        caption: "Infographics — generation capacity and sustainability metrics",
        size: "half",
      },
      {
        src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
        caption: "Infrastructure photography — scale made tangible",
        size: "half",
      },
    ],
    relatedProjects: ["smgp-brand-identity", "bpi-building-a-better-philippines"],
  },
];

// ─── Pillars ──────────────────────────────────────────────────────────────────

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: "Purpose",
    description:
      "Every project starts with a clear reason to exist. We ask the hard questions before we open a design file.",
  },
  {
    title: "Excellence",
    description:
      "Over 50 years of publications, identities, and books that hold up — in print, in hand, and over time.",
  },
  {
    title: "Innovation",
    description:
      "We find new ways to tell familiar stories. The format should serve the content, not the other way around.",
  },
  {
    title: "Culture",
    description:
      "We design for institutions with deep roots. Understanding that history is not background — it is the brief.",
  },
  {
    title: "Trust",
    description:
      "We continue to build relationships with our partners across decades. We treat every project as if our name were on the cover too.",
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export type Service = {
  id: string;
  title: string;
  tagline: string;
  copy: string;
  visual: string;
  visualCaption: string;
};

export const services: Service[] = [
  {
    id: "reports",
    title: "Annual & Sustainability Reports",
    tagline: "The numbers matter. So does how you tell them.",
    copy:
      "We design annual reports and sustainability publications for organisations that take their disclosures seriously. That means structuring complex financial and ESG data so it reads clearly, commissioning photography that reflects the real work being done, and writing copy that holds a board member and a first-time reader with equal confidence.",
    visual: "/covers/joy-for-tomorrow.jpg",
    visualCaption: "Jollibee Group — Joy For Tomorrow Report",
  },
  {
    id: "heritage-books",
    title: "Commemorative & Heritage Publications",
    tagline: "A centennial deserves more than a brochure.",
    copy:
      "When an institution marks a milestone worth remembering, we design the book that carries it forward. We handle the editorial direction, the archival research, the photography art direction, and the print production — producing volumes that are held and revisited, not shelved and forgotten.",
    visual: "/covers/yaman.jpg",
    visualCaption: "BSP — YAMAN: History and Heritage in Philippine Money",
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Visual Systems",
    tagline: "An identity that holds up under pressure.",
    copy:
      "We build visual identities for organisations that need theirs to work hard — across a board presentation, a facility sign, a digital report, and a press release on the same day. We develop the mark, the system, and the standards that keep everything coherent as an organisation grows.",
    visual:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    visualCaption: "San Miguel Global Power — Brand System",
  },
  {
    id: "editorial",
    title: "Editorial, Copywriting & Production",
    tagline: "From the first draft to the finished copy on press.",
    copy:
      "Good design without good writing is a publication that looks right but reads wrong. We write and edit the manuscripts, manage the print production, specify the paper stocks and finishes, and supervise every proof — so the physical object that arrives matches the intention behind it.",
    visual:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
    visualCaption: "Tactile editorial workbench & manuscript curation",
  },
];

// ─── Partners ─────────────────────────────────────────────────────────────────

export type Partner = {
  name: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "BPI", logo: "/logos/Bank_of_the_Philippine_Islands_logo.svg-1.webp" },
  { name: "Ayala", logo: "/logos/AYALA-LOGO_BLUE-AND-ORANGE_RGB.png" },
  { name: "Jollibee Group", logo: "/logos/jollibee-logo2.png" },
  { name: "Meralco", logo: "/logos/Meralco.svg" },
  { name: "Petron", logo: "/logos/Petron_logo.svg.webp" },
  { name: "InLife", logo: "/logos/inlife-logo2.png" },
  { name: "San Miguel Global Power", logo: "/logos/power-logo-black-1.png" },
  { name: "Del Monte Quality", logo: "/logos/Logo_Del_Monte.svg.webp" },
  { name: "Manila Golf Club", logo: "/logos/Manila-Golf-Logo-Green-Small-2.webp" },
  { name: "Asian Institute of Management", logo: "/logos/AIM-LOGO-New-min.png" },
  { name: "De La Salle University Manila", logo: "/logos/De_La_Salle_University_Seal.svg.webp" },
  { name: "Bangko Sentral ng Pilipinas", logo: "/logos/bsp-logonew.png" },
  { name: "Securities and Exchange Commission", logo: "/logos/SEC_Philippines_Logo_Official.png" },
  { name: "BCDA", logo: "/logos/Bases_Conversion_and_Development_Authority_(BCDA).svg.webp" },
  { name: "City of Muntinlupa", logo: "/logos/Muntinlupa_City.svg.webp" },
];
