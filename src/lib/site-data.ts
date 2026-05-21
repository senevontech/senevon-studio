
export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
};

export type Capability = {
  title: string;
  description: string;
  metric: string;
};

export type Game = {
  name: string;
  genre: string;
  platform: string;
  status: string;
  engine: string;
  trailer: string;
};

export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
};

export type CaseStudy = {
  title: string;
  challenge: string;
  process: string;
  outcome: string;
  results: string[];
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const studioName = "SNV Studio";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/games" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const featuredProjects: Project[] = [
  {
    title: "NEON FRONTIER",
    category: "Game Development",
    description: "A tactical sci-fi action world with dynamic weather and cinematic gameplay loops.",
    image: "from-[#00A8FF]/20 via-[#6A00FF]/20 to-transparent",
    tags: ["Unreal Engine 5", "Multiplayer", "Live Ops"],
  },
  {
    title: "ORBIT BRAND SYSTEM",
    category: "Branding",
    description: "A full identity and campaign language for a next-gen gaming hardware startup.",
    image: "from-[#6A00FF]/20 via-[#00A8FF]/20 to-transparent",
    tags: ["Brand Strategy", "Visual System", "3D Key Visuals"],
  },
  {
    title: "VOID RUNNER",
    category: "Motion + UI/UX",
    description: "Cinematic game launcher UX with motion-first flows and ultra-fast interaction states.",
    image: "from-white/20 via-[#00A8FF]/10 to-transparent",
    tags: ["UX", "Framer Motion", "Design System"],
  },
];

export const capabilities: Capability[] = [
  {
    title: "Game Development",
    description: "From concept to launch-ready gameplay systems and platform optimization.",
    metric: "30+ Worlds Crafted",
  },
  {
    title: "Branding",
    description: "Distinct identities built for products that demand memorability.",
    metric: "120+ Brand Assets",
  },
  {
    title: "Poster Design",
    description: "Campaign-grade visuals built for digital and physical presence.",
    metric: "400+ Poster Variants",
  },
  {
    title: "Motion Graphics",
    description: "Narrative-driven title sequences, promos, and social motion kits.",
    metric: "1,000+ Motion Clips",
  },
  {
    title: "Interior Concepts",
    description: "Immersive spatial storytelling for experiential and branded spaces.",
    metric: "22 Spatial Concepts",
  },
  {
    title: "UI/UX Design",
    description: "High-fidelity interfaces balancing aesthetics, conversion, and delight.",
    metric: "60+ Product Flows",
  },
  {
    title: "3D Art",
    description: "Stylized and realistic 3D assets for games, branding, and motion.",
    metric: "3,500+ Assets",
  },
];

export const games: Game[] = [
  {
    name: "Shadow Atlas",
    genre: "Action RPG",
    platform: "PC / Console",
    status: "In Production",
    engine: "Unreal Engine 5",
    trailer: "Trailer Preview",
  },
  {
    name: "Prism Drift",
    genre: "Racing / Arcade",
    platform: "PC / Mobile",
    status: "Alpha",
    engine: "Unity HDRP",
    trailer: "Gameplay Teaser",
  },
  {
    name: "Helix Siege",
    genre: "Tactical Shooter",
    platform: "PC",
    status: "Pre-Launch",
    engine: "Unreal Engine 5",
    trailer: "Cinematic Cut",
  },
  {
    name: "Mythline",
    genre: "Narrative Adventure",
    platform: "Switch / PC",
    status: "Concept + Vertical Slice",
    engine: "Godot",
    trailer: "Mood Trailer",
  },
];

export const portfolioItems: PortfolioItem[] = [
  { title: "AURORA IDENTITY", category: "Branding", image: "from-[#00A8FF]/35 to-transparent" },
  { title: "GRID ZERO LOGO", category: "Logos", image: "from-[#6A00FF]/35 to-transparent" },
  { title: "NIGHTRUN POSTER", category: "Posters", image: "from-white/30 to-transparent" },
  { title: "MIRAGE INTERIOR", category: "Interior", image: "from-[#00A8FF]/25 to-transparent" },
  { title: "NEON SOCIAL KIT", category: "Social Media", image: "from-[#6A00FF]/30 to-transparent" },
  { title: "ECHO MOTION PACK", category: "Motion Graphics", image: "from-white/25 to-transparent" },
  { title: "FORGE 3D ICONS", category: "3D", image: "from-[#00A8FF]/35 to-transparent" },
  { title: "KINETIC BRAND FILM", category: "Motion Graphics", image: "from-[#6A00FF]/35 to-transparent" },
  { title: "NOVA LOGO SYSTEM", category: "Logos", image: "from-white/30 to-transparent" },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Titanfall Academy Rebrand",
    challenge: "An aging game academy needed a premium identity to attract global students.",
    process: "We built a new strategic narrative, visual language, and cinematic campaign toolkit.",
    outcome: "The brand relaunch became the center of a full digital enrollment refresh.",
    results: ["+73% inquiry conversion", "+41% social engagement", "2.6x brand recall"],
  },
  {
    title: "Skyforge Launcher UX",
    challenge: "Users dropped during patch and purchase flows inside the game launcher.",
    process: "We redesigned IA, introduced motion wayfinding, and rebuilt the UI with reusable states.",
    outcome: "The launcher became faster, clearer, and more cinematic without sacrificing performance.",
    results: ["-38% drop-off", "+29% session time", "+18% DLC purchases"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: "They don't deliver templates. They deliver atmosphere, systems, and unforgettable visual impact.",
    author: "Aanya Mehra",
    role: "Marketing Director, Orbix Interactive",
  },
  {
    quote: "SNV transformed our game pitch into a world investors instantly believed in.",
    author: "Darren Cole",
    role: "Founder, Hollow Pixel",
  },
  {
    quote: "The blend of motion, interface thinking, and brand craft is elite.",
    author: "Luis Fernandez",
    role: "Product Lead, Helios Labs",
  },
];

export const processSteps = [
  "Discovery",
  "Concept",
  "Design",
  "Development",
  "Testing",
  "Launch",
];

export const stats = [
  { label: "Projects", value: "180+" },
  { label: "Awards", value: "27" },
  { label: "Countries", value: "16" },
  { label: "Years", value: "9" },
];

export const socialLinks: { label: string; href: string }[] = [
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "ArtStation", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export const defaultMeta = {
  title: "SNV Studio | Cinematic Creative Studio",
  description:
    "SNV Studio crafts immersive games, branding systems, and cinematic digital experiences across game development, UI/UX, motion, and 3D art.",
};
