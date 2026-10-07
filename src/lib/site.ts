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

export const projects: Project[] = [
  {
    slug: "bpi-building-a-better-philippines",
    client: "BPI",
    sector: "Finance",
    title: "Building a Better Philippines",
    summary:
      "An annual report reframing financial performance as national progress — clarity, warmth, and stewardship in equal measure.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    homeFeature: true,
  },
  {
    slug: "jollibee-joy-for-tomorrow",
    client: "Jollibee Group",
    sector: "FMCG",
    title: "Joy for Tomorrow — Sustainability Report",
    summary:
      "Translating ESG frameworks and operational data into a warm, human narrative of shared responsibility.",
    image: "/covers/joy-for-tomorrow.jpg",
    featured: true,
    homeFeature: true,
  },
  {
    slug: "dlsu-centennial",
    client: "De La Salle University",
    sector: "Education",
    title: "Centennial Commemorative Publication",
    summary:
      "A landmark volume marking a century of Lasallian education — designed to be held and kept for generations.",
    image: "/covers/dlsu-centennial.jpg",
    featured: true,
    homeFeature: true,
  },
  {
    slug: "mgen-energy-in-synergy",
    client: "MGen",
    sector: "Power",
    title: "Energy in Synergy",
    summary:
      "A visual language for energy leadership grounded in reliability, sustainability, and forward motion.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "bsp-yaman",
    client: "Bangko Sentral ng Pilipinas",
    sector: "Government / Heritage",
    title: "YAMAN: History and Heritage in Philippine Money",
    summary:
      "Archival documentation and photography chronicling centuries of Philippine currency and cultural wealth.",
    image: "/covers/yaman.jpg",
    featured: true,
  },
];

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
      "Trust builds lasting relationships with our partners.",
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
  { name: "Jollibee Group", logo: "/logos/jollibee-logo1.jpg" },
  { name: "Meralco", logo: "/logos/Meralco.svg" },
  { name: "Petron", logo: "/logos/Petron_logo.svg.webp" },
  { name: "InLife", logo: "/logos/inlife-logo1.png" },
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
