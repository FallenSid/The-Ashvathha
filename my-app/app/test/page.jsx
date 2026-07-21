
/* ── Navigation ─────────────────────────────────────────────────── */

const NAV_LINKS = ["Home", "The Chronicle", "Characters", "The World", "The Archives", "About"];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 animate-fade-in-down">
      {/* Left gradient fade overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 to-transparent pointer-events-none" />

      {/* Logo */}
      <a href="#" className="relative flex items-center gap-3 group">
        <RuneMark size={22} className="animate-rune-glow" />
        <span className="font-cinzel text-sm tracking-[0.22em] text-[#e8dfc8] uppercase group-hover:text-white transition-colors duration-300">
          Ashvathha
        </span>
      </a>

      {/* Links */}
      <ul className="relative hidden lg:flex items-center gap-8">
        {NAV_LINKS.map((link) => {
          const isActive = link === "The Chronicle";
          return (
            <li key={link}>
              <a
                href="#"
                className={`nav-link font-cinzel text-[11px] tracking-[0.18em] uppercase ${
                  isActive
                    ? "text-[#8b1a1a] after:w-full"
                    : "text-[#c8b99a] hover:text-[#e8dfc8]"
                }`}
              >
                {link}
              </a>
            </li>
          );
        })}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className="relative font-cinzel text-[11px] tracking-[0.18em] uppercase text-[#e8dfc8] border border-[#c8b99a55] px-5 py-2.5 hover:border-[#c8b99a] hover:bg-[#c8b99a0d] transition-all duration-300"
      >
        Begin the Journey
      </a>
    </nav>
  );
}