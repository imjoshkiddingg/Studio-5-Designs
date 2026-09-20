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

export type Project = {
  slug: string;
  client: string;
  sector: Sector;
  title: string;
  summary: string;
  image: string;
  featured?: boolean;
};

// Unsplash placeholders chosen to mimic editorial book / report layouts.
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

export type CaseStudy = {
  slug: string;
  client: string;
  project: string;
  sector: Sector;
  context: string;
  narrative: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  hero: string;
  gallery: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "inlife-kairos",
    client: "InLife",
    project: "Kairos: Moments that Moved Us",
    sector: "Finance",
    context:
      "A centenary commemorative book capturing individual moments that shaped a century of insurance leadership.",
    narrative: [
      "InLife approached its centennial not as a corporate anniversary but as a human milestone — one hundred years measured in the moments that moved people.",
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
    gallery: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    slug: "smgp-brand-identity",
    client: "San Miguel Global Power",
    project: "Brand Identity & System",
    sector: "Power",
    context:
      "Modernizing energy leadership through a unified visual language of sustainability and reliability.",
    narrative: [
      "San Miguel Global Power needed an identity equal to its ambition — one that could hold both industrial scale and a credible commitment to sustainability.",
      "We built a cohesive system spanning print and digital: a confident wordmark, a disciplined grid, and a palette that signals reliability without coldness.",
      "The identity gives SMGP a signature that stands out with confidence and relevance across every stakeholder touchpoint.",
    ],
    hero:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    slug: "bsp-yaman-numismatic-heritage",
    client: "Bangko Sentral ng Pilipinas",
    project: "YAMAN: Numismatic Heritage",
    sector: "Government / Heritage",
    context:
      "Archival documentation and photography of centuries of Philippine currency and cultural wealth.",
    narrative: [
      "YAMAN required both rigor and reverence — a scholarly record of Philippine money that could also move a general reader.",
      "We treated each artifact as a subject worthy of portraiture, pairing meticulous macro photography with intentional typography and generous white space.",
      "The volume celebrates identity, memory, and living heritage — a permanent form for a national story.",
    ],
    hero: "/covers/yaman.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    ],
  },
];

export type Pillar = {
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    title: "Purpose",
    description: "Articulating our clients' deepest values and impact.",
  },
  {
    title: "Excellence",
    description: "Over 50 years of designing from output to permanence.",
  },
  {
    title: "Culture",
    description: "Preserving generational craftsmanship, identity, and legacy.",
  },
  {
    title: "Trust",
    description: "Stewarding human connections with key partners.",
  },
];

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
    tagline: "Turning corporate accountability into a shared human story.",
    copy:
      "We transform complex operational data, ESG frameworks, and strategic milestones into clear, compelling publications. By balancing information with narrative warmth, we help institutions articulate progress, build stakeholder trust, and communicate their true impact beyond the balance sheet.",
    visual: "/covers/joy-for-tomorrow.jpg",
    visualCaption: "Jollibee Group — Joy For Tomorrow Report",
  },
  {
    id: "heritage-books",
    title: "Commemorative & Heritage Coffee Table Books",
    tagline: "Giving history, art, and milestone moments permanent form.",
    copy:
      "From anniversaries to national culture, we design landmark volumes meant to be held and kept for generations. Every page is treated with care — pairing touchpoints, intentional typography, and rich visual storytelling to celebrate identity, memory, and living heritage.",
    visual: "/covers/yaman.jpg",
    visualCaption: "BSP — YAMAN: History and Heritage in Philippine Money",
  },
  {
    id: "brand-identity",
    title: "Brand Identity & Strategic Design",
    tagline: "Crafting unique visual signatures rooted in authentic purpose.",
    copy:
      "A brand is more than a logo; it is an expression of values and vision. We build cohesive designs that resonate across print and digital touchpoints, giving organizations an identity that stands out with confidence and relevance.",
    visual:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    visualCaption: "San Miguel Global Power — Brand System",
  },
  {
    id: "editorial",
    title: "Editorial, Copywriting, & Production Management",
    tagline: "Mastering every expression from the first draft to the finished print run.",
    copy:
      "Excellence requires harmony between word and craft. Our end-to-end management covers strategic copywriting, manuscript development, meticulous proofreading, and precise print supervision — ensuring every binding, paper stock, and finish meets an uncompromising standard.",
    visual:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80",
    visualCaption: "Tactile editorial workbench & manuscript curation",
  },
];

export type Partner = {
  name: string;
  logo?: string;
};

export const partners: Partner[] = [
  { name: "BPI", logo: "/logos/Bank_of_the_Philippine_Islands_logo.svg-1.webp" },
  { name: "Ayala", logo: "/logos/AYALA-LOGO_BLUE-AND-ORANGE_RGB.png" },
  { name: "Jollibee Group" },
  { name: "Meralco", logo: "/logos/Meralco.svg" },
  { name: "Petron", logo: "/logos/Petron_logo.svg.webp" },
  { name: "InLife" },
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
