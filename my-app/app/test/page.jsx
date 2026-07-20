
/* ─────────────────────────── Characters Section ─────────────────────────── */

function CharactersSection() {
  const [active, setActive] = useState(2); // center card
  const scrollRef = useRef < HTMLDivElement > (null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section id="survivors" className="relative bg-[#080808] py-4 overflow-hidden">
      {/* Label */}
      <p className="reveal text-center font-cinzel text-xs tracking-[0.3em] text-[#c0392b] uppercase mb-6 pt-8">
        Those Who Still Walk
      </p>

      {/* Arrow left */}
      <button
        onClick={() => scroll("left")}
        aria-label="Scroll left"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-stone-700 hover:border-[#c0392b] text-stone-400 hover:text-[#c0392b] transition-all duration-300 bg-black/60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Cards strip */}
      <div
        ref={useReveal}
        className="flex gap-1 px-16 overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CHARACTERS.map((char, i) => (
          <div
            key={char.name}
            onClick={() => setActive(i)}
            className={`group relative shrink-0 cursor-pointer transition-all duration-500 overflow-hidden ${active === i ? "w-72 opacity-100" : "w-52 opacity-60 hover:opacity-80"
              }`}
            style={{ height: "420px" }}
          >
            <Image
              src={char.img}
              alt={char.name}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
            {/* Active top accent */}
            {active === i && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#c0392b]" />
            )}
            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-cinzel text-sm tracking-[0.25em] text-[#d4c5a0] uppercase">
                {char.name}
              </p>
              <p className="font-cinzel text-xs tracking-[0.2em] text-[#c0392b] uppercase mt-0.5">
                {char.title}
              </p>
              <div className="mt-3 flex justify-center">
                <CompassIcon className="w-4 h-4 text-stone-600" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrow right */}
      <button
        onClick={() => scroll("right")}
        aria-label="Scroll right"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center border border-stone-700 hover:border-[#c0392b] text-stone-400 hover:text-[#c0392b] transition-all duration-300 bg-black/60"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-6 pb-8">
        {CHARACTERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Character ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${active === i ? "w-6 h-1.5 bg-[#c0392b]" : "w-1.5 h-1.5 bg-stone-700"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────── World Section ─────────────────────────── */

function WorldSection() {
  return (
    <section id="world" className="relative min-h-/[480px/] flex flex-col justify-end overflow-hidden">
      <Image
        src="/images/world-bg.jpg"
        alt="The World of Ashvathha"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

      <div className="relative z-10 max-w-xl px-8 md:px-16 pb-20 pt-32">
        <p className="reveal font-cinzel text-xs tracking-[0.3em] text-[#c0392b] uppercase mb-4">
          The World
        </p>
        <h2 className="reveal font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#d4c5a0] leading-tight mb-8" style={{ transitionDelay: "0.1s" }}>
          A Place Beyond
          <br />
          Memory and Fear.
        </h2>
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <a
            href="#"
            className="inline-flex items-center gap-3 font-cinzel text-xs tracking-[0.2em] uppercase border border-stone-600 text-[#d4c5a0] px-6 py-3 hover:border-[#c0392b] hover:bg-[#c0392b]/10 transition-all duration-300 group"
          >
            Explore the World
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
    </section>
  );
}

/* ─────────────────────────── Archives / Chapters ─────────────────────────── */

function ArchivesSection() {
  return (
    <section id="archives" className="bg-[#0d0d0d] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Grid of chapters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-stone-900">
          {CHAPTERS.map((ch, i) => (
            <div
              key={ch.num}
              className={`reveal group relative bg-[#0d0d0d] overflow-hidden cursor-pointer transition-all duration-300 hover:bg-[#111]`}
              style={{ transitionDelay: `${i * 0.08}s`, minHeight: "280px" }}
            >
              {/* Background image for unlocked */}
              {ch.img && (
                <div className="absolute inset-0">
                  <Image
                    src={ch.img}
                    alt={ch.title}
                    fill
                    className="object-cover object-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />
                </div>
              )}

              <div className="relative z-10 p-6 flex flex-col h-full min-h-/[280px/]">
                {/* Label */}
                <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#c0392b] uppercase mb-3">
                  {ch.label}
                </p>
                {/* Roman numeral */}
                <p className="font-cinzel text-4xl text-stone-700 group-hover:text-[#c0392b]/50 transition-colors duration-300">
                  {ch.num}
                </p>

                <div className="flex-1" />

                {/* Title & desc */}
                <div className="mt-4">
                  <h3 className="font-cinzel text-sm tracking-[0.15em] text-[#d4c5a0] uppercase mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-stone-500 text-xs leading-relaxed mb-4">{ch.desc}</p>

                  {ch.locked ? (
                    <div className="flex items-center gap-2 text-stone-600">
                      <LockIcon className="w-3.5 h-3.5" />
                      <span className="font-cinzel text-[10px] tracking-[0.2em] uppercase">Locked</span>
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="font-cinzel text-[10px] tracking-[0.2em] uppercase text-[#c0392b] hover:text-[#e74c3c] transition-colors duration-200 flex items-center gap-1.5 group/btn"
                    >
                      Read Now
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom border accent on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#c0392b] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="reveal mt-12 text-center" style={{ transitionDelay: "0.4s" }}>
          <a
            href="#"
            className="inline-flex items-center gap-3 font-cinzel text-xs tracking-[0.2em] uppercase border border-stone-700 text-stone-400 px-8 py-3 hover:border-[#c0392b] hover:text-[#d4c5a0] transition-all duration-300 group"
          >
            View All Chapters
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
    </section>
  );
}
