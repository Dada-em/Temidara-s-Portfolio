"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";

const NAV_ITEMS = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-black/55 dark:supports-[backdrop-filter]:bg-black/45 transition-colors duration-300">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-14">
        <NextLink
          href="#"
          className="font-cormorant text-stone-900 dark:text-white text-lg font-light tracking-widest uppercase transition-colors duration-300"
          onClick={() => setOpen(false)}
        >
          Ipin<span className="text-[#c5a880] dark:text-[#3B82F6]">temidara</span>
        </NextLink>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <NextLink
                href={item.href}
                className="text-[11px] font-light tracking-[0.1em] uppercase text-stone-600 hover:text-stone-900 dark:text-white/70 dark:hover:text-white transition-colors"
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {/* Desktop actions (Theme Toggle + CTA) */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleTheme}
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200/80 bg-white/50 text-stone-700 shadow-sm backdrop-blur transition-all duration-300 hover:bg-stone-100 hover:text-stone-900 dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 animate-[spin_10s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
          <NextLink
            href="#contact"
            className="text-[11px] font-medium tracking-widest uppercase text-stone-800 border border-stone-400 px-5 py-2.5 hover:bg-stone-50 hover:border-stone-800 dark:text-white dark:border-white/50 dark:hover:bg-white/10 dark:hover:border-white transition-all"
          >
            Book Consultation
          </NextLink>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            type="button"
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white/50 text-stone-700 shadow-sm backdrop-blur transition-all duration-300 hover:bg-stone-100 hover:text-stone-900 dark:border-white/15 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 animate-[spin_10s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            )}
          </button>
          <NextLink
            href="#contact"
            className="text-[11px] font-medium tracking-widest uppercase text-stone-800 border border-stone-300 px-3 py-2 hover:bg-stone-50 transition-colors dark:text-white dark:border-white/30 dark:hover:bg-white/10"
            onClick={() => setOpen(false)}
          >
            Book
          </NextLink>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-200 text-stone-700 hover:text-stone-900 hover:border-stone-300 dark:border-white/15 dark:text-white/80 dark:hover:border-white/35 transition-colors"
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
        <div className="md:hidden border-t border-stone-200/50 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/80">
          <ul className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NextLink
                  href={item.href}
                  className="block py-3 text-[12px] font-medium tracking-[0.18em] uppercase text-stone-600 hover:text-stone-900 dark:text-white/80 dark:hover:text-white transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
