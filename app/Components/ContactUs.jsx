// app/components/ContactSection.tsx
"use client";

import { useState } from "react";

const contactMethods = [
  {
    id: "email",
    label: "Email",
    value: "ipintemidaraa@gmail.com",
    href: "mailto:ipintemidaraa@gmail.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    value: "+234 708 197 1780",
    href: "tel:+2347081971780",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ipintemidara" },
  { label: "Instagram", href: "https://www.instagram.com/t3m1_07?igsh=Y2oxNGt1ajY4aGRm" },
  { label: "Whatsapp", href: "https://wa.me/2347081971780?text=Hello%2C%20Good%20day" },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(null);

  const handleCopy = async (e, text, id) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback — do nothing
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#f7f5f0] dark:bg-[#12100e] py-16 sm:py-20 border-t border-stone-200/60 dark:border-stone-800/60 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <header className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <div className="font-serif italic text-[18px] tracking-wide text-[#a98d69] dark:text-[#3B82F6] mb-4">
            Get in Touch
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-stone-900 dark:text-stone-100 leading-[1.12] mb-5">
            Let's start a{" "}
            <em className="italic text-[#c5a880] dark:text-[#3B82F6]">
              conversation
            </em>
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 dark:text-stone-300 leading-[1.85]">
            Available for freelance, full-time roles, and collaborative projects.
            Reach out directly — I respond within 24 hours.
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-3xl mx-auto">
          {contactMethods.map((method) => (
            <a
              key={method.id}
              href={method.href}
              className="group bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#c5a880]/40 dark:hover:border-[#3B82F6]/40 hover:-translate-y-0.5 block"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c5a880]/30 dark:border-[#3B82F6]/30 text-[#a98d69] dark:text-[#3B82F6] mb-4 transition duration-300 group-hover:bg-[#c5a880] dark:group-hover:bg-[#3B82F6] group-hover:text-white dark:group-hover:text-white">
                {method.icon}
              </div>

              {/* Label */}
              <p className="text-[10px] tracking-[.18em] uppercase text-[#a98d69] dark:text-[#2563EB] mb-2">
                {method.label}
              </p>

              {/* Value */}
              <div className="flex items-center justify-between gap-3">
                <span className="text-[15px] font-light text-stone-900 dark:text-stone-100 group-hover:text-[#a98d69] dark:group-hover:text-[#3B82F6] transition-colors leading-snug break-all">
                  {method.value}
                </span>

                {/* Copy button */}
                <button
                  onClick={(e) => handleCopy(e, method.value, method.id)}
                  className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 dark:border-stone-800 text-stone-400 dark:text-stone-500 hover:border-[#c5a880] dark:hover:border-[#3B82F6] hover:text-[#a98d69] dark:hover:text-[#3B82F6] transition-all duration-300"
                  title="Copy to clipboard"
                >
                  {copied === method.id ? (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-[11px] tracking-[.18em] uppercase text-stone-400 dark:text-stone-500 mb-4">
            Also find me on
          </p>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] font-medium text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 bg-white dark:bg-[#1a1613] rounded-full px-5 py-2 hover:border-[#c5a880] dark:hover:border-[#3B82F6] hover:text-[#a98d69] dark:hover:text-[#3B82F6] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Availability Badge */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 rounded-full px-5 py-2.5 shadow-sm">
            <span className="text-[12px] font-light text-stone-600 dark:text-stone-300">
              Available for new projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}