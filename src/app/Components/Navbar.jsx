"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur supports-[backdrop-filter]:bg-black/45">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
        <Link
          href="#"
          className="font-cormorant text-white text-lg font-light tracking-widest uppercase"
          onClick={() => setOpen(false)}
        >
          Ipin<span className="text-[#3B82F6]">temidara</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-[11px] font-light tracking-[0.1em] uppercase text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#contact"
            className="text-[11px] font-medium tracking-widest uppercase text-white border border-white/50 px-5 py-2.5 hover:bg-white/10 hover:border-white transition-all"
          >
            Book Consultation
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="#contact"
            className="text-[11px] font-medium tracking-widest uppercase text-white border border-white/40 px-3 py-2 hover:bg-white/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            Book
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white/85 hover:text-white hover:border-white/35 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/70 backdrop-blur">
          <ul className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block py-3 text-[12px] font-medium tracking-[0.18em] uppercase text-white/80 hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

