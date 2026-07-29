"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// ─── Data ───────────────────────────────────────────────────────────────────
const CHARACTERS= [
  {
    id: "swayam",
    name: "SWAYAM",
    title: "THE SILENT ANCHOR",
    description:
      "He does not seek light, yet he is the reason others do not fall into the dark.",
    category: "HUMANS",
    image: "/img/character/swayam.png",
  },
  {
    id: "rachit",
    name: "RACHIT",
    title: "THE OBSERVER",
    description:
      "He sees what others miss. In silence, he reads the world like an open book.",
    category: "WANDERERS",
    image: "/img/character/rachit.png",
  },
  {
    id: "gaurav",
    name: "GAURAV",
    title: "THE VERSATILE KNUCKLEHEAD",
    description:
      "Unpredictable. Unfiltered. A storm wrapped in humor and chaos.",
    category: "HUMANS",
    image: "/img/character/gaurav.png",
  },
  {
    id: "aviral",
    name: "AVIRAL",
    title: "THE NEGOTIATOR",
    description:
      "The human who negotiates with Flames itself.",
    category: "HUMANS",
    image: "/img/character/aviral.png",
  },
  {
    id: "anshika",
    name: "ANSHIKA",
    title: "THE SHARP ILLUSION",
    description:
      "Unpredictable. Efficiemt. A clamn killer who believes in efficiency.",
    category: "HUMANS",
    image: "/img/character/anshika.png",
  },
  
];

const CATEGORIES = ["ALL", "HUMANS", "WANDERERS", "MYSTICS", "UNKNOWN"];

// ─── Rune SVG icon ───────────────────────────────────────────────────────────
function RuneIcon({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="12" y1="0"  x2="12" y2="28" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="7"  y1="8"  x2="12" y2="14" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="17" y1="8"  x2="12" y2="14" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="7"  y1="16" x2="12" y2="22" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="17" y1="16" x2="12" y2="22" stroke="#c0392b" strokeWidth="1.5" />
    </svg>
  );
}

// ─── Arrow icon ──────────────────────────────────────────────────────────────
// function ArrowRight() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
//       <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
//     </svg>
//   );
// }

// ─── Character Card ───────────────────────────────────────────────────────────
function CharacterCard({ char, delay }) {
  return (
    <article
      className="card-border animate-fade-up"
      style={{
        animationDelay: `${delay}ms`,
        background: "linear-gradient(160deg, #110d0d 60%, #1a0f0f 100%)",
      }}
    >
      {/* Image */}
      <div className="card-img-wrap" style={{ height: "220px", position: "relative" }}>
        <Image
          src={char.image}
          alt={char.name}
          fill
          style={{ objectFit: "cover", objectPosition: " center -80px " }}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Gradient overlay at bottom of image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, #110d0d 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: "20px 28px 28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "10px",
        }}
      >
        {/* Rune */}
        <RuneIcon size={20} />

        {/* Name */}
        <h3
          className="font-serif"
          style={{
            fontSize: "1.45rem",
            letterSpacing: "0.18em",
            color: "#d4c9c1",
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          {char.name}
        </h3>

        {/* Title */}
        <p
          className="text-red font-serif"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {char.title}
        </p>

        {/* Thin divider */}
        <div className="divider-line" style={{ margin: "4px auto" }} />

        {/* Description */}
        <p
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.65,
            color: "#9a8f8f",
            fontWeight: 300,
            minHeight: "64px",
          }}
        >
          {char.description}
        </p>

      </div>
    </article>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CharactersPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered =
    activeCategory === "ALL"
      ? CHARACTERS
      : CHARACTERS.filter((c) => c.category === activeCategory);

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>

      {/* ── NAVBAR ───────────────────────────────────────────────── */}
      <Navbar/>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <header style={{ position: "relative", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/img/character-bg.png"
            alt="Ashvathha world background"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        </div>

        {/* Hero content */}
        <div
          style={{
            position: "relative",
            maxWidth: "860px",
            margin: "0 auto",
            padding: "80px 32px 72px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "14px",
          }}
        >
          {/* Top rune + line */}
          <div
            className="animate-fade-in"
            style={{ display: "flex", alignItems: "center", gap: "12px" }}
          >
            <div className="divider-line" style={{ width: "48px" }} />
            <RuneIcon size={16} />
            <div className="divider-line" style={{ width: "48px" }} />
          </div>

          {/* Main title */}
          <h1
            className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold hero-text-shadow tracking-\[0.1em\] text-[#d4c5a0] animate-fade-in"
            style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
          >
            THE CHARACTERS
          </h1>

          {/* Tagline */}
          <p
            className="text-red font-serif anim-fade-up delay-200"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Every Legend Has A Soul.
          </p>

          {/* Sub-description */}
          <p
            className="animate-fade-up delay-300"
            style={{
              fontSize: "1rem",
              color: "#9a8f8f",
              fontWeight: 300,
              letterSpacing: "0.04em",
            }}
          >
            Meet the ones who shape the fate of Ashvathha.
          </p>

          {/* Bottom rune + line */}
          <div
            className="animate-fade-in delay-400"
            style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}
          >
            <div className="divider-line" style={{ width: "48px" }} />
            <RuneIcon size={14} />
            <div className="divider-line" style={{ width: "48px" }} />
          </div>
        </div>
      </header>

      {/* ── MAIN CONTENT ─────────────────────────────────────────── */}
      <main style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px 80px" }}>

        {/* Filter Tabs */}
        <div
          className="animate-fade-up delay-400"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "52px",
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-serif ${activeCategory === cat ? "tab-active" : "tab-inactive"}`}
              style={{
                padding: "8px 22px",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                background: "transparent",
                cursor: "pointer",
                transition: "color 0.25s ease, border-color 0.25s ease",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Character Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {filtered.map((char, i) => (
            <CharacterCard key={char.id} char={char} delay={i * 80} />
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "var(--color-muted)",
            }}
          >
            <RuneIcon size={28} />
            <p
              className="font-serif"
              style={{ marginTop: "16px", letterSpacing: "0.12em", fontSize: "0.8rem" }}
            >
              No characters found in this category.
            </p>
          </div>
        )}
      </main>

      {/* ── FOOTER QUOTE ─────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(180,50,30,0.15)",
          padding: "32px 32px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <p
          className="text-red font-serif animate-pulse"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          &laquo;&nbsp; Some Are Born To Rule. Others Are Written To Remember. &nbsp;&raquo;
        </p>
        <RuneIcon size={14} />
      </footer>
      <Footer/>
    </div>
  );
}
