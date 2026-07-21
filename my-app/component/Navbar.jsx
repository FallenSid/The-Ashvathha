"use client"

import React, { useEffect, useState } from "react";
import { TreeSymbol } from "@/app/page";
import Link from "next/link";


const NAV_LINKS = [
  { label: "Chronicle", href: "/chronicle" },
  { label: "Characters", href: "/character" },
  { label: "World", href: "/world" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${
        scrolled
          ? "bg-black/90 backdrop-blur-sm border-b border-[#c0392b]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <TreeSymbol className="w-5 h-6 text-[#c0392b]" />
          <Link href='/' className="font-cinzel text-sm tracking-[0.25em] text-[#d4c5a0] uppercase">
            Ashvathha
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-cinzel nav-link nav-link::after nav-link:hover::after text-xs tracking-[0.2em] text-stone-400 hover:text-[#c0392b] transition-colors duration-300 uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#chronicle"
            className="font-cinzel text-xs tracking-[0.2em] uppercase border border-[#c0392b]/60 text-[#d4c5a0] px-5 py-2 hover:bg-[#c0392b] hover:text-white transition-all duration-300"
          >
            Begin the Journey
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-[#d4c5a0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4c5a0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#d4c5a0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-[#c0392b]/20 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-cinzel text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-[#c0392b] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#chronicle"
            className="font-cinzel text-xs tracking-[0.2em] uppercase border border-[#c0392b]/60 text-[#d4c5a0] px-5 py-2 text-center hover:bg-[#c0392b] hover:text-white transition-all duration-300 mt-2"
          >
            Begin the Journey
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar
