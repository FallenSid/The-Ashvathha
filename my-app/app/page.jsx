

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
 import React from "react";
import Link from "next/link";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

/* ─────────────────────────── SVG Icons ─────────────────────────── */

export function TreeSymbol({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <line x1="30" y1="80" x2="30" y2="10" />
      <line x1="30" y1="20" x2="10" y2="5" />
      <line x1="30" y1="20" x2="50" y2="5" />
      <line x1="30" y1="35" x2="15" y2="22" />
      <line x1="30" y1="35" x2="45" y2="22" />
      <line x1="30" y1="50" x2="18" y2="40" />
      <line x1="30" y1="50" x2="42" y2="40" />
    </svg>
  );
}


function DiamondOrnament() {
  return (
    <div className="flex items-center gap-2 my-4">
      <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#c0392b] opacity-40" />
      <div
        className="w-2 h-2 rotate-45 border border-[#c0392b] opacity-60"
        style={{ flexShrink: 0 }}
      />
      <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#c0392b] opacity-40" />
    </div>
  );
}


/* ─────────────────────────── Hook: Reveal on Scroll ─────────────────────────── */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─────────────────────────── Sidebar Social ─────────────────────────── */

function SidebarSocial() {
  const socials = [
    {
      label: "Twitter / X",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L2.012 2.25h6.945l4.261 5.638 5.026-5.638zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "Discord",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-5">
      <TreeSymbol className="w-4 h-5 text-[#c0392b] animate-pulse-slow" />
      <div className="w-px h-8 bg-[#c0392b]/30" />
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          className="text-stone-600 hover:text-[#c0392b] transition-colors duration-300"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

/* ─────────────────────────── Hero Section ─────────────────────────── */

function HeroSection() {
  const [slide, setSlide] = useState(1);
  const total = 5;

  return (
    <section className="relative h-screen min-h-\[600px\] flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/img/hero-bg.png"
          alt="Ashvathha world"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay + vignette */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-black/40 opacity-70" />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/40 opacity-70" />
      </div>

      {/* Top crimson rune symbol */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 animate-drift z-10">
        <TreeSymbol className="w-6 h-8 text-[#c0392b] opacity-70" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <h1
          className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold hero-text-shadow tracking-\[0.1em\] text-[#d4c5a0] animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          ASHVATHHA
        </h1>

        <div
          className="mt-6 animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          <p className="font-cinzel text-sm sm:text-sm tracking-[0.3em] text-[#c0392b] uppercase leading-relaxed">
            The world forgot its gods.
            <br />
            The sea remembers.
          </p>
        </div>

        <div
          className="mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#chronicle"
            className="group flex flex-col items-center gap-2 font-cinzel text-xs tracking-[0.3em] uppercase text-stone-400 hover:text-[#d4c5a0] transition-colors duration-300"
          >
            <span>Enter Ashvathha</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="w-4 h-4 animate-bounce"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-end gap-1">
        <span className="font-cinzel text-xs text-stone-500">
          {String(slide).padStart(2, "0")}
        </span>
        <div className="w-6 h-px bg-[#c0392b]/40" />
        <span className="font-cinzel text-xs text-stone-600">
          {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Slide dots (decorative) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i + 1)}
            aria-label={`Slide ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${slide === i + 1
              ? "bg-[#c0392b] scale-125"
              : "bg-stone-600 hover:bg-stone-400"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── Chronicle Section ─────────────────────────── */

function ChronicleSection() {
  return (
    <section id="chronicle" className="relative bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-\[560px\]">
        {/* Text side */}
        <div className="flex flex-col justify-center px-8 md:px-16 py-20">
          <p className="reveal font-cinzel text-xs tracking-[0.3em] text-[#c0392b] uppercase mb-4">
            The Chronicle
          </p>
          <h2 className="reveal font-cinzel text-2xl sm:text-3xl md:text-4xl text-[#d4c5a0] leading-tight mb-6" style={{ transitionDelay: "0.1s" }}>
            When hope becomes rebellion,
            <br />
            and rebellion becomes myth.
          </h2>

          <DiamondOrnament />

          <div className="reveal space-y-4 text-stone-400 text-sm leading-relaxed" style={{ transitionDelay: "0.2s" }}>
            <p>
              In a world where gods are forgotten and demons rule the ashes of
              civilization, three brothers born of blood, cage, and survival
              dare to defy fate.
            </p>
            <p>
              They uncover a scripture that whispers of a mountain untouched by
              corruption—Gandamadana, a place tied to something ancient,
              powerful, and possibly redemptive.
            </p>
            <p>
              But this isn&apos;t just a quest.
              <br />
              It&apos;s Ashvathha—a crucible of trials, illusions, and arenas
              where demons gamble lives for spectacle.
            </p>
          </div>

          <div className="reveal mt-8" style={{ transitionDelay: "0.3s" }}>
            <a
              href="#archives"
              className="inline-flex items-center gap-3 font-cinzel text-xs tracking-[0.2em] uppercase border border-[#c0392b]/50 text-[#d4c5a0] px-6 py-3 hover:bg-[#c0392b] hover:border-[#c0392b] transition-all duration-300 group"
            >
              Read the Full Chronicle
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="reveal-right relative min-h-\[380px\] lg:min-h-0 overflow-hidden">
          <Image
            src="/img/chronicles.png"
            alt="The Chronicle — dark library hall"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d0d0d] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
    </section>
  );
}


/* ─────────────────────────── Page ─────────────────────────── */

export default function Page() {
  useReveal();

  return (
    <main className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <SidebarSocial />
      <HeroSection />
      <ChronicleSection />
      <Footer />
    </main>
  );
}
