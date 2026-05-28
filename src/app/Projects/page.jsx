// app/Projects/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import projects from "../data/projects.json";

const filters = ["All", "Residential", "Commercial", "Interior", "Visualisation", "Site Supervision"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Map filters to matching projects
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    
    const cat = project.category.toLowerCase();
    const filt = activeFilter.toLowerCase();
    
    if (filt === "residential") {
      return cat.includes("residential");
    }
    if (filt === "commercial") {
      return cat.includes("commercial") || cat.includes("retail");
    }
    // General fallback matches
    return cat.includes(filt) || project.tools.some(t => t.toLowerCase().includes(filt));
  });

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5f0] dark:bg-[#12100e] min-h-screen text-stone-900 dark:text-stone-100 transition-colors duration-300 pb-24">

        {/* Page Hero */}
        <div className="mx-auto max-w-7xl px-5 pt-20 pb-12 sm:px-8 lg:px-14">
          <div className="inline-flex items-center gap-2 border border-[#c5a880]/30 dark:border-[#3B82F6]/30 bg-[#c5a880]/10 dark:bg-[#3B82F6]/10 rounded-full px-4 py-1.5 mb-6 text-[#a98d69] dark:text-[#3B82F6]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] dark:bg-[#3B82F6]" />
            <span className="text-[10px] sm:text-[11px] tracking-[.14em] uppercase font-semibold">Portfolio</span>
          </div>
          <h1 className="font-serif text-[clamp(36px,7vw,60px)] font-normal leading-[1.07] mb-5 sm:mb-6">
            Built work &<br />
            <em className="italic text-[#c5a880] dark:text-[#3B82F6]">visualised</em> ideas
          </h1>
          <p className="text-[14px] sm:text-[15px] font-light text-stone-600 dark:text-stone-300 leading-[1.8] max-w-125">
            A curated selection of architectural projects spanning residential design,
            interior fit-out, technical documentation, and 3D visualisation.
          </p>
        </div>

        {/* Filters */}
        <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-2.5 px-5 pb-4 sm:px-8 lg:px-14">
          {filters.map((f) => {
            const isActive = f === activeFilter;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`text-[12px] tracking-[.08em] border rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer
                  ${isActive
                    ? "bg-[#c5a880] border-[#c5a880] dark:bg-[#3B82F6] dark:border-[#3B82F6] text-white font-medium shadow-sm"
                    : "bg-white dark:bg-[#1a1613] border-stone-200/80 dark:border-stone-800/80 text-stone-500 dark:text-stone-400 hover:border-[#c5a880] dark:hover:border-[#3B82F6] hover:text-[#c5a880] dark:hover:text-[#3B82F6]"
                  }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* View All Portfolio — External Link */}
        <div className="mx-auto max-w-7xl px-5 pb-12 sm:px-8 lg:px-14">
          <a
            href="https://drive.google.com/file/d/1TDSuVdtQhRKGgjRfklKJ7WPn1wKrujxO/view?usp=drivesdk" // <-- Replace with your actual external URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[12px] tracking-[.08em] text-[#a98d69] dark:text-[#3B82F6] hover:text-[#8b734f] dark:hover:text-[#60a5fa] transition-colors duration-300 group/link"
          >
            <span className="font-medium uppercase">View All Portfolio</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
            {/* External link indicator */}
            <svg
              className="h-3 w-3 opacity-60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* Grid: showing exactly 2 cards per row */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-14 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-[28px] bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a880]/40 dark:hover:border-[#3B82F6]/40 flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden relative aspect-16/10 bg-stone-100 dark:bg-[#25201c] border-b border-stone-100 dark:border-stone-800/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover brightness-[.97] saturate-[.95] group-hover:brightness-[.93] group-hover:scale-[1.015] transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] tracking-[.18em] uppercase text-[#a98d69] dark:text-[#3B82F6] font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-stone-400 dark:text-stone-500 font-light">{project.year}</span>
                  </div>
                  <h3 className="font-serif text-[22px] font-normal text-stone-900 dark:text-stone-100 leading-tight mb-3 group-hover:text-[#a98d69] dark:group-hover:text-[#3B82F6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] font-light text-stone-600 dark:text-stone-300 leading-[1.7] line-clamp-3">
                    {project.desc}
                  </p>
                </div>
              </div>
              
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-100 dark:border-stone-800/50">
                  <div className="flex gap-1.5 flex-wrap max-w-[80%]">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#25201c] rounded px-2 py-0.5 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c5a880]/30 dark:border-[#3B82F6]/30 text-[#a98d69] dark:text-[#3B82F6] transition duration-300 group-hover:bg-[#c5a880] dark:group-hover:bg-[#3B82F6] group-hover:text-white dark:group-hover:text-white shrink-0">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 lg:px-14">
            <p className="font-serif italic text-lg text-stone-400 dark:text-stone-500">No projects found in this category.</p>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}