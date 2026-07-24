"use client";

import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
/* ── SVG icons ──────────────────────────────────────────────────── */

function RuneMark({ size = 28, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 36"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="14" y1="4" x2="14" y2="34" stroke="#8b1a1a" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="14" y1="8" x2="7" y2="2" stroke="#8b1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="8" x2="21" y2="2" stroke="#8b1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="14" y1="14" x2="6" y2="10" stroke="#8b1a1a" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="14" y1="14" x2="22" y2="10" stroke="#8b1a1a" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="14" y1="20" x2="5" y2="17" stroke="#8b1a1a" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="14" y1="20" x2="23" y2="17" stroke="#8b1a1a" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Small decorative diamond divider */
function DiamondDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex-1 h-px bg-[#8b1a1a44]" />
      <RuneMark size={16} />
      <span className="flex-1 h-px bg-[#8b1a1a44]" />
    </div>
  );
}


/* ── Volume card ─────────────────────────────────────────────────── */


const VOLUMES = [
  {
    roman: "I",
    subtitle: "The Beginning",
    description: "Where the story takes its first breath and the legend awakens.",
    pages: 319,
    chapters: 11,
    image: "/img/volume-1.png",
  },
  {
    roman: "II",
    subtitle: "The Rising Storm",
    description: "Darkness gathers. Bonds are tested. The path ahead is no longer clear.",
    pages: 358,
    chapters: 7,
    image: "/img/volume-2.png",
  },
];

function VolumeCard({ volume, delay }) {
  return (
    <article
      className={`volume-card flex overflow-hidden rounded-sm shadow-2xl w-full max-w-\[580px\] animate-fade-in-up ${delay}`}
      style={{ minHeight: 380 }}
    >
      {/* Left – atmospheric image */}
      <div className="relative w-[42%] shrink-0 overflow-hidden">
        <Image
          src={volume.image}
          alt={`Volume ${volume.roman} illustration`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent to-black/30" />
        {/* Rune overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 animate-rune-glow">
          <RuneMark size={36} />
        </div>
      </div>

      {/* Right – parchment content */}
      <div className="parchment-card flex-1 flex flex-col items-center justify-between py-7 px-6 text-center">
        {/* Volume label */}
        <p className="font-cinzel text-[10px] tracking-[0.3em] text-[#5a3e2b] uppercase mb-1">
          Volume
        </p>

        {/* Roman numeral */}
        <h2
          className="font-cinzel-deco text-[5rem] leading-none text-[#6b1a1a] mb-1"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}
        >
          {volume.roman}
        </h2>

        {/* Small ornament */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-[#8b1a1a]" />
          <span className="text-[#8b1a1a] text-xs">✦</span>
          <span className="w-6 h-px bg-[#8b1a1a]" />
        </div>

        {/* Subtitle */}
        <h3 className="font-cinzel text-[11px] tracking-[0.22em] text-[#3d2510] uppercase mb-3">
          {volume.subtitle}
        </h3>

        {/* Description */}
        <p className="font-fell text-[#4a3520] text-sm leading-relaxed italic mb-5 px-2">
          {volume.description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-0 w-full justify-center mb-6">
          <div className="text-center px-5">
            <p className="font-cinzel text-xl font-semibold text-[#3d2510]">{volume.pages}</p>
            <p className="font-cinzel text-[9px] tracking-[0.2em] text-[#6a5040] uppercase mt-0.5">
              Pages
            </p>
          </div>
          <div className="w-px h-8 bg-[#8b1a1a55]" />
          <div className="text-center px-5">
            <p className="font-cinzel text-xl font-semibold text-[#3d2510]">{volume.chapters}</p>
            <p className="font-cinzel text-[9px] tracking-[0.2em] text-[#6a5040] uppercase mt-0.5">
              Chapters
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="read-btn w-full py-3 font-cinzel text-[11px] tracking-[0.18em] uppercase flex items-center justify-center gap-3 rounded-sm">
          Read Volume {volume.roman}
          <span className="text-base">→</span>
        </button>
      </div>
    </article>
  );
}

/* ── Stats bar ───────────────────────────────────────────────────── */

const STATS = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="4" y="8" width="24" height="20" rx="1" />
        <path d="M4 12h24" />
        <path d="M10 8V5a2 2 0 014 0v3" />
        <path d="M18 8V5a2 2 0 014 0v3" />
        <path d="M9 18h14M9 22h10" />
      </svg>
    ),
    value: "2",
    label: "Volumes Released",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <rect x="6" y="4" width="20" height="24" rx="1" />
        <path d="M10 10h12M10 14h12M10 18h8" />
        <path d="M6 28h20" />
      </svg>
    ),
    value: "18",
    label: "Chapters Released",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <path d="M8 26c4-8 12-14 16-20" />
        <path d="M8 26l2-6" />
        <path d="M10 20l-2 6 4-1" />
        <ellipse cx="20" cy="9" rx="5" ry="4" transform="rotate(-30 20 9)" />
      </svg>
    ),
    value: "677",
    label: "Pages Written",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" className="w-9 h-9">
        <circle cx="16" cy="16" r="10" />
        <line x1="16" y1="6" x2="16" y2="16" />
        <line x1="16" y1="6" x2="22" y2="10" />
        <line x1="10" y1="10" x2="16" y2="6" />
        <line x1="6" y1="16" x2="16" y2="16" />
        <line x1="16" y1="26" x2="16" y2="16" />
        <line x1="26" y1="16" x2="16" y2="16" />
      </svg>
    ),
    value: "",
    label: "The Legend Continues…",
  },
];

function StatsBar() {
  return (
    <div className="stats-container mx-auto max-w-5xl px-8 py-8 animate-fade-in-up delay-700">
      {/* Heading */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className="w-16 h-px bg-[#8b1a1a55]" />
        <RuneMark size={14} className="animate-rune-glow" />
        <span className="font-cinzel text-[11px] tracking-[0.3em] text-[#8b1a1a] uppercase">
          Journey So Far
        </span>
        <RuneMark size={14} className="animate-rune-glow" />
        <span className="w-16 h-px bg-[#8b1a1a55]" />
      </div>

      {/* Items */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 animate-fade-in delay-${(i + 1) * 100 + 600}`}
          >
            <span className="text-[#c8b99a] opacity-70 shrink-0">{stat.icon}</span>
            <div>
              {stat.value && (
                <p className="font-cinzel text-2xl font-semibold text-[#e8dfc8] animate-flicker">
                  {stat.value}
                </p>
              )}
              <p className="font-cinzel text-[10px] tracking-[0.18em] text-[#8b7a60] uppercase leading-tight">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Page ────────────────────────────────────────────────────────── */

export default function ChroniclePage() {
  return (
    <>
    <main className="relative min-h-screen bg-[#0d0d0d] overflow-hidden ">
      {/* ── Hero background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/chronicle-bg.png"
          alt="Ashvathha world backdrop"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        {/* Subtle vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      <Navbar />

      {/* ── Hero Section ── */}
      <section className="relative z-10 flex flex-col items-center pt-36 pb-12 px-4 text-center">
        {/* Top rune */}
        <div className="mb-4 animate-fade-in animate-rune-glow">
          <RuneMark size={24} />
        </div>

        {/* Main title */}
        <div className="animate-fade-in">

          <h1
            className="font-cinzel text-[clamp(3rem,10vw,7rem)] font-bold leading-none tracking-\[0.1em\] text-[#e8dfc8]  delay-200 animate-flicker"
            style={{ textShadow: "0 0 60px rgba(139,26,26,0.55), 0 4px 20px rgba(0,0,0,0.8)" }}
          >
            The Chronicle
          </h1>
        </div>

        {/* Horizontal rule with rune */}
        <div className="my-5 w-full max-w-xs animate-divider delay-200">
          <DiamondDivider />
        </div>

        {/* Subtitle */}
        <p className="font-cinzel text-[11px] tracking-[0.25em] text-[#a89070] uppercase leading-7 animate-fade-in-up delay-300">
          Every legend is written. Few are remembered.
          <br />
          The complete collection of Ashvathha&apos;s released volumes.
        </p>
      </section>

      {/* ── Volume Cards ── */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-6 px-6 pb-10">
        {VOLUMES.map((vol, i) => (
          <VolumeCard
            key={vol.roman}
            volume={vol}
            delay={i === 0 ? "delay-400" : "delay-500"}
          />
        ))}
      </section>

      {/* ── Stats Bar ── */}
      <section className="relative z-10 px-4 pb-12">
        <StatsBar />
      </section>
    </main>
      <Footer />
      </>
  );
}
