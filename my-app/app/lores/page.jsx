import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
/* ─── SVG Icon Components ─────────────────────────────────────────── */

function CompassIcon({ size = 40, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" className={className} fill="none">
      <circle cx="40" cy="40" r="36" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="40" cy="40" r="30" stroke="#c9a84c" strokeWidth="0.5" strokeDasharray="4 3" />
      <polygon points="40,8 44,40 40,50 36,40" fill="#c9a84c" opacity="0.9" />
      <polygon points="40,72 44,40 40,30 36,40" fill="#5a5a5a" opacity="0.9" />
      <polygon points="8,40 40,36 50,40 40,44" fill="#5a5a5a" opacity="0.9" />
      <polygon points="72,40 40,36 30,40 40,44" fill="#c9a84c" opacity="0.9" />
      <circle cx="40" cy="40" r="3" fill="#c9a84c" />
      {/* tick marks */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={i}
          x1="40"
          y1="6"
          x2="40"
          y2={i % 2 === 0 ? "12" : "9"}
          stroke="#c9a84c"
          strokeWidth="1"
          transform={`rotate(${deg} 40 40)`}
        />
      ))}
    </svg>
  );
}

function SmallDiamond({ color = "#c9a84c" }) {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <rect
        x="5"
        y="1.8"
        width="6.6"
        height="6.6"
        rx="0.3"
        transform="rotate(45 5 5)"
        fill={color}
      />
    </svg>
  );
}

function LocationPin() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
      <path
        d="M10 0C4.477 0 0 4.477 0 10c0 7 10 14 10 14s10-7 10-14c0-5.523-4.477-10-10-10z"
        fill="#c9a84c"
        fillOpacity="0.85"
      />
      <circle cx="10" cy="10" r="3.5" fill="#0a0a0a" />
    </svg>
  );
}

function SwordIcon() {
  return (
    <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
      <rect x="7" y="0" width="2" height="20" rx="1" fill="#c9a84c" />
      <rect x="3" y="18" width="10" height="2" rx="1" fill="#c9a84c" />
      <rect x="7" y="20" width="2" height="6" rx="1" fill="#c9a84c" opacity="0.7" />
    </svg>
  );
}

function SkullIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C7.03 2 3 6.03 3 11c0 2.9 1.3 5.5 3.35 7.27L6 20h12l-.35-1.73C19.7 16.5 21 13.9 21 11c0-4.97-4.03-9-9-9z"
        fill="#c9a84c"
        fillOpacity="0.85"
      />
      <rect x="8" y="20" width="2.5" height="2" rx="0.5" fill="#0a0a0a" />
      <rect x="13.5" y="20" width="2.5" height="2" rx="0.5" fill="#0a0a0a" />
      <ellipse cx="9" cy="11" rx="2" ry="2.2" fill="#0a0a0a" />
      <ellipse cx="15" cy="11" rx="2" ry="2.2" fill="#0a0a0a" />
      <rect x="11" y="13" width="2" height="3" rx="0.5" fill="#0a0a0a" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg width="26" height="20" viewBox="0 0 26 20" fill="none">
      <path
        d="M2 16 L4 6 L8 11 L13 2 L18 11 L22 6 L24 16 Z"
        fill="#c9a84c"
        fillOpacity="0.85"
        stroke="#c9a84c"
        strokeWidth="0.5"
      />
      <rect x="2" y="16" width="22" height="3" rx="0.5" fill="#c9a84c" fillOpacity="0.85" />
    </svg>
  );
}

function OrnamentDivider({ label }) {
  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex-1 h-px bg-linear-to-r from-transparent via-[#c9a84c55] to-[#c9a84c88]" />
      {label ? (
        <span
          className="text-xs tracking-[0.25em] uppercase text-[#c9a84c] font-cinzel whitespace-nowrap"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          {label}
        </span>
      ) : (
        <SmallDiamond />
      )}
      <div className="flex-1 h-px bg-linear-to-l from-transparent via-[#c9a84c55] to-[#c9a84c88]" />
    </div>
  );
}


/* ─── Hero Section ────────────────────────────────────────────────── */

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/lore-bg.png"
          alt="Lore Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlays for depth */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 30%, transparent 20%, rgba(0,0,0,0.6) 70%)" }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
        />
        <div className="absolute top-0 left-0 right-0 h-32"
          style={{ background: "linear-gradient(to top, transparent, rgba(0,0,0,0.7))" }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-44 pb-20 px-4 text-center">
        {/* Compass ornament */}
        <CompassIcon size={60} className="mb-6 opacity-80" />

        {/* Title */}
        <h1
          className="text-[7rem] font-black leading-none tracking-\[0.05em\] text-[#e8dfc0] mb-4"
          style={{
            fontFamily: "Cinzel Decorative, Cinzel, serif",
            textShadow: "0 0 60px rgba(139,26,26,0.4), 0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          Lore
        </h1>

        {/* Title underline */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-32 h-px bg-[#c9a84c66]" />
          <SmallDiamond color="#8b1a1a" />
          <div className="w-32 h-px bg-[#c9a84c66]" />
        </div>

        {/* Tagline */}
        <p
          className="text-sm tracking-[0.25em] uppercase text-[#c0392b] mb-3 font-medium"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Every Legend Has Its Roots.
        </p>

        {/* Sub-description */}
        <p
          className="text-lg text-[#c8bfa0] leading-relaxed max-w-sm"
          style={{ fontFamily: "EB Garamond, serif" }}
        >
          Uncover the world, its beings, its power,
          <br />
          and the forces that shape its fate.
        </p>
      </div>
    </section>
  );
}

/* ─── Quote Block Section ─────────────────────────────────────────── */

function LoreIntroSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Decorative border box */}
        <div className="relative border border-[#c9a84c33] p-10 text-center">
          {/* Corner decorations */}
          <CornerDecoration position="top-left" />
          <CornerDecoration position="top-right" />
          <CornerDecoration position="bottom-left" />
          <CornerDecoration position="bottom-right" />

          {/* Drop-cap paragraph */}
          <p
            className="text-xl leading-loose text-[#c8bfa0] text-left"
            style={{ fontFamily: "EB Garamond, serif" }}
          >
            <span
              className="float-left text-6xl leading-[0.8] mr-2 mt-1 font-bold"
              style={{ fontFamily: "Cinzel, serif", color: "#8b1a1a" }}
            >
              A
            </span>
            shvathha is not merely a world.
            <br />
            It is a tapestry of lands, born of chaos and bound by forgotten truths.
            <br />
            Here, you will find what shapes its present and whispers of its past.
          </p>

          {/* Bottom ornament */}
          <div className="flex justify-center mt-6">
            <SmallDiamond color="#8b1a1a" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Corner Decoration helper ────────────────────────────────────── */

function CornerDecoration({ position }) {
  const styles = {
    "top-left": { top: -1, left: -1, borderTop: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c" },
    "top-right": { top: -1, right: -1, borderTop: "2px solid #c9a84c", borderRight: "2px solid #c9a84c" },
    "bottom-left": { bottom: -1, left: -1, borderBottom: "2px solid #c9a84c", borderLeft: "2px solid #c9a84c" },
    "bottom-right": { bottom: -1, right: -1, borderBottom: "2px solid #c9a84c", borderRight: "2px solid #c9a84c" },
  };

  return (
    <div
      className="absolute w-5 h-5"
      style={styles[position]}
    />
  );
}

/* ─── Realm Cards Section ─────────────────────────────────────────── */

const realmCards = [
  {
    title: "LOCATIONS",
    description:
      "From towering kingdoms to forgotten ruins, explore the lands that bear the scars of time.",
    image: "/img/lore/locations.png",
  },
  {
    title: "WEAPONRY",
    description:
      "Blades of legend, forged in fire and fate. Discover the weapons that choose their wielders.",
    image: "/img/lore/weaponry.png",
  },
  {
    title: "CREATURES",
    description:
      "Beings of flesh and shadow. Learn of the species that roam, rule, or hunt within Ashvathha.",
    image: "/img/lore/creatures.png",
  },
  {
    title: "ORGANIZATIONS",
    description:
      "Kingdoms, clans, orders and councils. The powers that govern, scheme and survive.",
    image: "/img/lore/organizations.png",
  },
];

function RealmCard({ card }) {
  return (
    <div className="relative group flex flex-col overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #111 0%, #0a0a0a 100%)",
        border: "1px solid #2a2218",
      }}
    >
     
      {/* Card image */}
      <div className="relative w-full h-64 overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Bottom gradient on image */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 50%, rgba(10,10,10,0.95) 100%)" }}
        />

        {/* Corner ornaments on image */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#c9a84c66]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#c9a84c66]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#c9a84c66]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#c9a84c66]" />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        {/* Title */}
        <h3
          className="text-lg font-bold tracking-[0.15em] text-[#e8dfc0] mb-2"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          {card.title}
        </h3>

        {/* Diamond separator */}
        <div className="mb-3">
          <SmallDiamond color="#8b1a1a" />
        </div>

        {/* Description */}
        <p
          className="text-sm text-[#9a8f76] leading-relaxed flex-1"
          style={{ fontFamily: "EB Garamond, serif", fontSize: "1rem" }}
        >
          {card.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2218] mt-5 mb-4" />

        {/* Explore link */}
        <a
          href="#"
          className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#c8bfa0] hover:text-[#c9a84c] transition-colors group/link"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          <span>EXPLORE</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover/link:translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function ExploreRealmsSection() {
  return (
    <section className="bg-[#0a0a0a] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-6 mb-14">
          <OrnamentDivider label="Explore the Realms of Ashvathha" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {realmCards.map((card) => (
            <RealmCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ─── Page Root ───────────────────────────────────────────────────── */

export default function LorePage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <HeroSection />
      <LoreIntroSection />
      <ExploreRealmsSection />
      <Footer />
    </main>
  );
}
