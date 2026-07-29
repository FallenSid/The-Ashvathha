"use client";

import Image from "next/image";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
/* ─────────────────────────────────────────────────────────────────
   THEME TOKENS  (edit here for future customisation)
───────────────────────────────────────────────────────────────── */
const THEME = {
  accent:     "text-[#c0392b]",
  accentBg:   "bg-[#c0392b]",
  gold:       "text-[#c9a97a]",
  goldLight:  "text-[#e8d5a3]",
  muted:      "text-[#7a6a55]",
  border:     "border-[#3a1a0a]",
  surface:    "bg-[#110d09]",
  surfaceMid: "bg-[#160e09]",
} ;

/* ─────────────────────────────────────────────────────────────────
   SMALL REUSABLE COMPONENTS
───────────────────────────────────────────────────────────────── */

/** Thin horizontal rule with a centred accent diamond */
function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <span className={`block h-px w-10 ${THEME.accentBg} opacity-50`} />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
        <path d="M4 0L8 4L4 8L0 4Z" fill="#c0392b" />
      </svg>
      <span className={`block h-px w-10 ${THEME.accentBg} opacity-50`} />
    </div>
  );
}

/** Section heading with overline label */
function SectionHeading({
  label,
  title,
  className = "",
}) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className={`font-cinzel text-xs tracking-[0.35em] ${THEME.accent} mb-1`}>
          {label}
        </p>
      )}
      <Divider />
      <h2 className={`font-cinzel text-3xl md:text-4xl tracking-widest ${THEME.goldLight} mt-2`}>
        {title}
      </h2>
    </div>
  );
}

/** Corner ornament SVG */
function Corner({ flip = false }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      className={`${THEME.accent} opacity-60 ${flip ? "scale-x-[-1]" : ""}`}
      style={{ color: "#c0392b" }}
    >
      <path d="M2 2 L2 12 M2 2 L12 2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

/** Card with decorative corners */
function Card({
  children,
  className = "",
}) {
  return (
    <div
      className={`relative ${THEME.surface} border ${THEME.border} card-hover p-6 flex flex-col ${className} backdrop-blur-md bg-black/5 border border-white/20 rounded-2xl shadow-xl p-6`}
    >
      {/* corners */}
      <span className="absolute top-2 left-2"><Corner /></span>
      <span className="absolute top-2 right-2 scale-x-[-1]"><Corner /></span>
      <span className="absolute bottom-2 left-2 scale-y-[-1]"><Corner /></span>
      <span className="absolute bottom-2 right-2 scale-x-[-1] scale-y-[-1]"><Corner /></span>

      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/img/about-bg.png"
          alt="Ashvathha world"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        
      </div>

      {/* Decorative side tree glyph */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden lg:block">
        <svg width="48" height="100" viewBox="0 0 48 100" fill="none">
          <line x1="24" y1="100" x2="24" y2="10" stroke="#c0392b" strokeWidth="1.5"/>
          <line x1="24" y1="60"  x2="8"  y2="40" stroke="#c0392b" strokeWidth="1.2"/>
          <line x1="24" y1="45"  x2="40" y2="25" stroke="#c0392b" strokeWidth="1.2"/>
          <line x1="24" y1="45"  x2="6"  y2="28" stroke="#c0392b" strokeWidth="1.0"/>
          <line x1="24" y1="72"  x2="42" y2="55" stroke="#c0392b" strokeWidth="1.0"/>
          <line x1="24" y1="30"  x2="36" y2="14" stroke="#c0392b" strokeWidth="0.8"/>
          <line x1="24" y1="30"  x2="10" y2="16" stroke="#c0392b" strokeWidth="0.8"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <p className={`font-cinzel text-xs tracking-[0.5em] ${THEME.accent} animate-fade-in-up opacity-0`}>
          ABOUT
        </p>
        <Divider />
        <h1
          className={`font-cinzel text-6xl md:text-8xl tracking-widest ${THEME.goldLight}
            animate-fade-in-up opacity-0 delay-100 mt-3`}
        >
          ASHVATHHA
        </h1>
        <p className={`font-cinzel text-xs md:text-sm tracking-[0.25em] ${THEME.accent}
          animate-fade-in-up opacity-0 delay-200 mt-3 italic`}>
          A STORY BORN FROM SILENCE. WRITTEN IN FIRE.
        </p>
        <Divider />
        <p className={`font-garamond text-base md:text-lg leading-relaxed ${THEME.gold}
          animate-fade-in-up opacity-0 delay-300 mt-4 max-w-xl mx-auto`}>
          Ashvathha is a dark fantasy saga that weaves together destiny, time,
          power and the choices that shape worlds.{" "}
          <br className="hidden md:block" />
          It is not just a tale of heroes and villains, but of souls carrying
          the weight of forgotten gods and broken worlds.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   CARDS SECTION  (The Novel · The Author · Current Status)
───────────────────────────────────────────────────────────────── */

/** Status row item */
function StatusItem({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`shrink-0 w-10 h-10 rounded-full border ${THEME.border} flex items-center justify-center ${THEME.accent}`}>
        {icon}
      </div>
      <div>
        <p className={`font-cinzel text-xs tracking-widest ${THEME.goldLight}`}>{title}</p>
        <p className={`font-garamond text-sm ${THEME.muted} mt-0.5`}>{subtitle}</p>
      </div>
    </div>
  );
}

function CardsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 -mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ── The Novel ── */}
        <Card className="animate-fade-in-up opacity-0 delay-100">
          <SectionHeading title="THE NOVEL" />
          <div className="flex gap-5 mt-6 flex-1">
            {/* Book illustration placeholder */}
            <div className={`shrink-0 w-24 h-32 border ${THEME.border} ${THEME.surfaceMid} flex items-center justify-center`}>
              <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
                <rect x="4" y="2" width="30" height="44" rx="1" stroke="#c0392b" strokeWidth="1" fill="none" opacity="0.5"/>
                <line x1="10" y1="14" x2="28" y2="14" stroke="#c9a97a" strokeWidth="0.8" opacity="0.5"/>
                <line x1="10" y1="19" x2="28" y2="19" stroke="#c9a97a" strokeWidth="0.8" opacity="0.5"/>
                <line x1="10" y1="24" x2="22" y2="24" stroke="#c9a97a" strokeWidth="0.8" opacity="0.5"/>
                {/* dagger glyph */}
                <line x1="20" y1="32" x2="20" y2="44" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
                <line x1="16" y1="36" x2="24" y2="36" stroke="#c0392b" strokeWidth="1" opacity="0.7"/>
              </svg>
            </div>
            <p className={`font-garamond text-sm leading-relaxed ${THEME.gold}`}>
              Ashvathha is an ongoing dark fantasy novel series that explores themes
              of identity, sacrifice, fate and the eternal struggle between light and
              darkness.
            </p>
          </div>
          <a
            href="#chronicle"
            className={`mt-6 inline-flex items-center gap-2 font-cinzel text-xs tracking-widest
              border ${THEME.border} px-4 py-2 ${THEME.goldLight}
              hover:bg-[#c0392b] hover:border-[#c0392b] transition-all duration-300 self-start`}
          >
            START READING <span>→</span>
          </a>
        </Card>

        {/* ── The Author ── */}
        <Card className="animate-fade-in-up opacity-0 delay-200">
          <SectionHeading title="THE AUTHOR" />
          <div className="flex gap-5 mt-6 flex-1">
            {/* Author silhouette */}
            <div className={`shrink-0 w-24 h-32 border ${THEME.border} ${THEME.surfaceMid} flex items-center justify-center overflow-hidden`}>
              <svg width="48" height="60" viewBox="0 0 48 60" fill="none">
                {/* glowing circle */}
                <circle cx="24" cy="20" r="16" stroke="#c0392b" strokeWidth="0.8" opacity="0.4"/>
                <circle cx="24" cy="20" r="10" stroke="#c0392b" strokeWidth="0.5" opacity="0.2"/>
                {/* silhouette */}
                <ellipse cx="24" cy="14" rx="6" ry="7" fill="#1a0e08" stroke="#c9a97a" strokeWidth="0.6" opacity="0.5"/>
                <path d="M12 40 Q24 30 36 40 L36 60 L12 60 Z" fill="#1a0e08" stroke="#c9a97a" strokeWidth="0.6" opacity="0.5"/>
              </svg>
            </div>
            <p className={`font-garamond text-sm leading-relaxed ${THEME.gold}`}>
              A dreamer. A storyteller. A believer in the power of imagination.
              He writes not just to tell stories, but to build worlds that outlive him.
            </p>
          </div>
          <a
            href="#"
            className={`mt-6 inline-flex items-center gap-2 font-cinzel text-xs tracking-widest
              border ${THEME.border} px-4 py-2 ${THEME.goldLight}
              hover:bg-[#c0392b] hover:border-[#c0392b] transition-all duration-300 self-start`}
          >
            AUTHOR&apos;S NOTE <span>→</span>
          </a>
        </Card>

        {/* ── Current Status ── */}
        <Card className="animate-fade-in-up opacity-0 delay-300">
          <SectionHeading title="CURRENT STATUS" />
          <div className="flex flex-col gap-5 mt-6 flex-1">
            <StatusItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              }
              title="2 VOLUMES RELEASED"
              subtitle="Volume I & Volume II are out now."
            />
            <StatusItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              }
              title="18 CHAPTERS"
              subtitle="And the journey continues..."
            />
            <StatusItem
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M12 20h9"/>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              }
              title="MORE TO COME"
              subtitle="The next tales are being written."
            />
          </div>
          <a
            href="#chronicle"
            className={`mt-6 inline-flex items-center gap-2 font-cinzel text-xs tracking-widest
              border ${THEME.border} px-4 py-2 ${THEME.goldLight}
              hover:bg-[#c0392b] hover:border-[#c0392b] transition-all duration-300 self-start`}
          >
            VIEW CHRONICLE <span>→</span>
          </a>
        </Card>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   JOURNEY AHEAD + CONNECT  (bottom row)
───────────────────────────────────────────────────────────────── */

/** Single journey milestone */
function JourneyItem({
  icon,
  title,
  subtitle,
}) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      {/* icon circle */}
      <div className={`w-16 h-16 rounded-full border ${THEME.border} flex items-center justify-center ${THEME.accent}`}>
        {icon}
      </div>
      <div>
        <p className={`font-cinzel text-[11px] tracking-widest ${THEME.goldLight}`}>{title}</p>
        <p className={`font-garamond text-sm ${THEME.muted} mt-0.5`}>{subtitle}</p>
      </div>
    </div>
  );
}

/** Accent dot connector */
function JourneyConnector() {
  return (
    <div className="hidden md:flex items-center gap-1 pb-6">
      <span className={`block h-px flex-1 ${THEME.accentBg} opacity-30`} />
      <span className={`pulse-dot block w-1.5 h-1.5 rounded-full ${THEME.accentBg} opacity-60`} />
      <span className={`block h-px flex-1 ${THEME.accentBg} opacity-30`} />
    </div>
  );
}

function BottomRow() {
  const journeyItems = [
    {
      title: "VOLUME III",
      subtitle: "In the works.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="12" x2="16" y2="14"/>
          {/* compass-like rays */}
          <line x1="12" y1="2" x2="12" y2="4" strokeWidth="1"/>
          <line x1="12" y1="20" x2="12" y2="22" strokeWidth="1"/>
          <line x1="2" y1="12" x2="4" y2="12" strokeWidth="1"/>
          <line x1="20" y1="12" x2="22" y2="12" strokeWidth="1"/>
        </svg>
      ),
    },
    {
      title: "NEW LANDS",
      subtitle: "More worlds to explore.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <polygon points="12 2 22 20 2 20"/>
          <line x1="12" y1="8" x2="12" y2="14"/>
          <line x1="8" y1="14" x2="16" y2="14"/>
        </svg>
      ),
    },
    {
      title: "NEW CHARACTERS",
      subtitle: "Fates yet to intertwine.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    },
    {
      title: "THE WAR APPROACHES",
      subtitle: "The real story is yet to begin.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <line x1="12" y1="2" x2="12" y2="14"/>
          <line x1="8" y1="5" x2="16" y2="11"/>
          <line x1="8" y1="11" x2="16" y2="5"/>
          <circle cx="12" cy="19" r="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Journey Ahead — spans 2 cols */}
        <Card className="lg:col-span-2 animate-fade-in-up opacity-0 delay-200">
          <SectionHeading title="THE JOURNEY AHEAD" />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-start">
            {journeyItems.map((item, i) => (
              <div key={item.title} className="contents">
                <JourneyItem {...item} />
                {i < journeyItems.length - 1 && <JourneyConnector />}
              </div>
            ))}
          </div>
        </Card>

        {/* Connect */}
        <Card className={`animate-fade-in-up opacity-0 delay-300 bg-[#1a0a07] border-[#5a1a10]`}>
          <div className="text-center">
            <h3 className={`font-cinzel text-xl tracking-widest ${THEME.accent}`}>CONNECT</h3>
            <Divider />
            <p className={`font-garamond text-sm leading-relaxed ${THEME.gold} mt-3`}>
              Join the journey. Stay updated.
              <br />
              Your support keeps the story alive.
            </p>
          </div>

          <div className="flex justify-center gap-8 mt-8">
            {/* Instagram */}
            <a href="#" aria-label="Instagram"
              className={`${THEME.muted} hover:${THEME.accent} transition-colors duration-200`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="X (Twitter)"
              className={`${THEME.muted} hover:${THEME.accent} transition-colors duration-200`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            {/* Mail */}
            <a href="mailto:hello@ashvathha.com" aria-label="Email"
              className={`${THEME.muted} hover:${THEME.accent} transition-colors duration-200`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </Card>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PAGE ROOT
───────────────────────────────────────────────────────────────── */
export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0806]">
      <Navbar />
      <Hero />
      <CardsSection />
      <BottomRow />
      <Footer />
    </div>
  );
}
