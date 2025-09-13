// src/components/Navbar.jsx
import { useState, useEffect } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Über uns" },
  { href: "#quote", label: "Projekte" },
  { href: "#cta", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // (Optional) Scroll-Lock wenn Menü offen
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="relative mx-auto max-w-6xl px-6 h-16 flex items-center justify-between text-white
                   backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 rounded-b-xl"
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold tracking-widest">AYSULIX.</span>
        </div>

        {/* dekorativer Glow */}
        <div
          className="pointer-events-none absolute -left-16 top-20 h-60 w-60 rounded-full
                     bg-white/50 opacity-30 blur-[90px]"
        />

        {/* Desktop-Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a className="hover:text-brand-200" href={l.href}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex ml-4 h-9 items-center rounded-md px-3 text-sm
                     hover:bg-brand-500/20 border border-white/50"
        >
          E-Mail
        </a>

        {/* Mobile: Burger Button */}
        <button
          type="button"
          aria-label="Menü öffnen/schließen"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto inline-flex items-center justify-center w-10 h-10
                     rounded-lg border border-white/30 hover:border-white/50
                     active:scale-[0.98] transition"
        >
          {/* Burger → X Animation */}
          <span className="relative block w-5 h-4">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform duration-300
                         ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] w-full bg-white transition-opacity duration-200
                         ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-white transition-transform duration-300
                         ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden origin-top transition-all duration-300
                    ${open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div
          className="mx-auto max-w-6xl px-6 py-4 text-white
                        backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 rounded-b-xl"
        >
          <ul className="flex flex-col gap-4 text-base">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-brand-200"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex h-10 items-center rounded-md px-4 text-sm
                       hover:bg-brand-500/20 border border-white/50"
          >
            E-Mail
          </a>
        </div>
      </div>
    </header>
  );
}
