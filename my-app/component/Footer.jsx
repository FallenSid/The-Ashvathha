import { TreeSymbol } from '@/app/page';
import React from 'react';


const NAV_LINKS = [
  { label: "Chronicle", href: "/chronicle" },
  { label: "Characters", href: "/character" },
  { label: "World", href: "/world" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
];

function Footer() {
  return (
    <footer id="beyond" className="bg-black border-t border-stone-900 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <TreeSymbol className="w-6 h-8 text-[#c0392b] opacity-60" />

        <p className="font-cinzel text-2xl tracking-[0.25em] text-[#d4c5a0] uppercase">
          Ashvathha
        </p>

        <div className="h-px w-24 bg-linear-to-r from-transparent via-[#c0392b]/40 to-transparent" />

        <p className="font-cinzel text-xs tracking-[0.2em] text-stone-600 uppercase text-center">
          The world forgot its gods. The sea remembers.
        </p>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-stone-600 hover:text-[#c0392b] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-cinzel text-[10px] tracking-[0.15em] text-stone-800 uppercase">
          © 2024 Ashvathha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer
