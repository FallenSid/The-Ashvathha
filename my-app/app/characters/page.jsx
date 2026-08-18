"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
// ─── Data ───────────────────────────────────────────────────────────────────
const CHARACTERS = [
  {
    id: "swayam",
    name: "SWAYAM",
    title: "THE SILENT ANCHOR",
    description:
      "Calm, Watchful, and Calculating: the one who reads a room before anyone else moves.",
    category: "HUMANS",
    image: "/img/character/swayam.png",
  },
  {
    id: "rachit",
    name: "RACHIT",
    title: "THE STRATEGIST",
    description:
      "Unreadable and Composed: Speaks little and reveals less",
    category: "WANDERERS",
    image: "/img/character/rachit.png",
  },
  {
    id: "gaurav",
    name: "GAURAV",
    title: "THE VERSATILE KNUCKLEHEAD",
    description:
      "Hot-tempered built through fistfights: The emotional core of the trio.",
    category: "HUMANS",
    image: "/img/character/gaurav.png",
  },
  {
    id: "aviral",
    name: "AVIRAL",
    title: "PYROKINETIC FIGHTER",
    description:
      "Calm, meditative and disciplined with a quite intensity.",
    category: "HUMANS",
    image: "/img/character/aviral.png",
  },
  {
    id: "anshika",
    name: "ANSHIKA",
    title: "LAST SURVIVOR OF CHHAYAKUL",
    description:
      "Composed, controlled, and sharp-eyed: an illusionist and healer.",
    category: "HUMANS",
    image: "/img/character/anshika.png",
  },
  {
    id: "yugetsu",
    name: "YUGETSU YORU",
    title: "UNKNOWN",
    description:
      "An hybrid demon: twitchy, self-doubting but don't fear to bite your hand.",
    category: "HYBRID",
    image: "/img/character/yugetsu.png",
  },
  {
    id: "nyss",
    name: "NYSS",
    title: "UNKNOWN",
    description:
      "A disciplined, blue skinned demon paired with gaurav's team during devouring path.",
    category: "DEMON",
    image: "/img/character/nyss1.png",
  },
  {
    id: "lilith",
    name: "LILITH",
    title: "UNKNOWNS",
    description:
      "UNKNOWN",
    category: "DEMON",
    image: "/img/character/lilith.png",
  },
  {
    id: "reinhard",
    name: "REINHARD",
    title: "THE SWORD SAINT",
    description:
      "Six fit, crimson hair, sky blue eyes with faint red edge slit puples : dignified and restrained nobel demon.",
    category: "DEMON",
    image: "/img/character/reinhard.jpg",
  },
  {
    id: "abhishraap",
    name: "ABHISHRAAP",
    title: "UNKNOWN",
    description:
      "UNKNOWN",
    category: "DEMON",
    image: "/img/character/abhishraap.png",
  },
  {
    id: "kaal",
    name: "KAAL",
    title: "UNKNOWN",
    description:
      "UNKNOWN",
    category: "UNKNOWN",
    image: "/img/character/kaal1.png",
  },
  {
    id: "scar",
    name: "SCAR",
    title: "SEAL USER",
    description:
      "Unpredictable.",
    category: "DEMON",
    image: "/img/character/scar1.png",
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
      <line x1="12" y1="0" x2="12" y2="28" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="7" y1="8" x2="12" y2="14" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="17" y1="8" x2="12" y2="14" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="7" y1="16" x2="12" y2="22" stroke="#c0392b" strokeWidth="1.5" />
      <line x1="17" y1="16" x2="12" y2="22" stroke="#c0392b" strokeWidth="1.5" />
    </svg>
  );
}

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
          backgroundColor:"#110d0d",
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
      <Navbar />

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
          className="animate-fade-up delay-400 flex flex-wrap justify-center gap-2 mb-3"
          
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
          className="grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6"
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
      <Footer />
    </div>
  );
}
