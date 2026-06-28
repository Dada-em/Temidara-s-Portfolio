// app/Components/Services.jsx
"use client";

import { useState } from "react";

const services = [
  {
    id: "bim",
    num: "01",
    title: "BIM Modelling",
    shortDesc: "Intelligent 3D building models with full data integration.",
    fullDesc:
      "Comprehensive Building Information Modelling using Revit and ArchiCAD, producing clash-free, data-rich models that streamline coordination across architecture, structure, and MEP disciplines.",
    deliverables: ["Revit Families", "Clash Detection", "Quantity Takeoffs", "4D Simulation"],
  },
  {
    id: "viz",
    num: "02",
    title: "3D Visualisation",
    shortDesc: "Photorealistic renders and immersive walkthroughs.",
    fullDesc:
      "High-end architectural visualisation that brings unbuilt spaces to life. Still renders, animation sequences, and real-time walkthroughs crafted to communicate design intent with cinematic clarity for client presentations and marketing.",
    deliverables: ["Photorealistic Renders", "Fly-through Animations", "VR Walkthroughs", "Mood & Lighting Studies"],
  },
  {
    id: "drafting",
    num: "03",
    title: "Technical Drafting",
    shortDesc: "Precise construction documentation and detailing.",
    fullDesc:
      "Detailed, code-compliant construction drawings ready for tender and build. Working drawings, sections, details, and schedules produced in AutoCAD and Revit, coordinated with structural and services consultants for seamless site execution.",
    deliverables: ["Working Drawings", "Detail Sheets", "Door/Window Schedules", "Specification Notes"],
  },
  {
    id: "site",
    num: "04",
    title: "Site Supervision",
    shortDesc: "On-site quality control and contractor liaison.",
    fullDesc:
      "Hands-on site management ensuring designs are built exactly as drawn. Regular inspections, RFI coordination, snagging, and as-built documentation, bridging the gap between design studio and construction site with technical authority.",
    deliverables: ["Site Visit Reports", "Quality Checklists", "As-Built Drawings", "Contractor Briefings"],
  },
  {
    id: "interior",
    num: "05",
    title: "Interior Design",
    shortDesc: "Spatial planning, fit-out, and material curation.",
    fullDesc:
      "End-to-end interior architecture from space planning to final styling. Material palettes, furniture layouts, lighting design, and custom joinery details creating cohesive environments that balance aesthetics, function, and budget.",
    deliverables: ["Space Plans", "Material Boards", "FF&E Schedules", "Joinery Details"],
  },
];

export default function ServicesSection() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="services"
      className="bg-[#f7f5f0] dark:bg-[#12100e] py-16 sm:py-20 border-t border-stone-200/60 dark:border-stone-800/60 transition-colors duration-300"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
        {/* Header */}
        <header className="mx-auto mb-12 sm:mb-16 max-w-3xl text-center">
          <div className="font-serif italic text-[18px] tracking-wide text-[#a98d69] dark:text-[#3B82F6] mb-4">
            What I Do
          </div>
          <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-stone-900 dark:text-stone-100 leading-[1.12] mb-5">
            Services built on{" "}
            <em className="italic text-[#c5a880] dark:text-[#3B82F6]">
              precision
            </em>{" "}
            & craft
          </h2>
          <p className="font-sans text-[15px] sm:text-[16px] font-light text-stone-600 dark:text-stone-300 leading-[1.85]">
            From early-stage BIM to final site handover, a full spectrum of
            architectural services delivered with technical rigour and design
            sensibility.
          </p>
        </header>

        {/* Services List */}
        <div className="flex flex-col gap-4">
          {services.map((service) => {
            const isOpen = expanded === service.id;

            return (
              <div
                key={service.id}
                className={`group bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 rounded-2xl shadow-sm overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? "border-[#c5a880]/40 dark:border-[#3B82F6]/40"
                    : "hover:border-[#c5a880]/30 dark:hover:border-[#3B82F6]/30"
                }`}
              >
                {/* Main Row */}
                <button
                  onClick={() => setExpanded(isOpen ? null : service.id)}
                  className="w-full text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] md:items-center gap-4 px-6 sm:px-8 py-6 sm:py-7">
                    {/* Number */}
                    <span className="font-serif text-[13px] text-[#c5a880]/55 dark:text-[#3B82F6]/55 tracking-[.1em] group-hover:text-[#a98d69] dark:group-hover:text-[#2563EB] transition-colors">
                      {service.num}
                    </span>

                    {/* Title & Short Desc */}
                    <div>
                      <h3
                        className={`font-serif text-[22px] sm:text-[24px] font-normal leading-[1.2] transition-colors ${
                          isOpen
                            ? "text-[#a98d69] dark:text-[#3B82F6]"
                            : "text-stone-900 dark:text-stone-100 group-hover:text-[#3c3430] dark:group-hover:text-[#3B82F6]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-[13px] font-light text-stone-500 dark:text-stone-400 mt-1 leading-[1.6]">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Toggle Icon */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 shrink-0 self-start md:self-center ${
                        isOpen
                          ? "bg-[#c5a880] dark:bg-[#3B82F6] border-[#c5a880] dark:border-[#3B82F6] text-white rotate-45"
                          : "border-[#c5a880]/30 dark:border-[#3B82F6]/30 text-[#a98d69] dark:text-[#3B82F6] group-hover:bg-[#c5a880] dark:group-hover:bg-[#3B82F6] group-hover:text-white"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 sm:px-8 pb-7 sm:pb-8 pt-0">
                      <div className="border-t border-stone-200/80 dark:border-stone-800/80 pt-6 sm:pt-7 grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6 md:gap-10">
                        {/* Full Description */}
                        <p className="text-[14px] font-light text-stone-600 dark:text-stone-300 leading-[1.8]">
                          {service.fullDesc}
                        </p>

                        {/* Deliverables */}
                        <div>
                          <p className="text-[10px] tracking-[.18em] uppercase text-[#a98d69] dark:text-[#2563EB] mb-3">
                            Deliverables
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d) => (
                              <span
                                key={d}
                                className="text-[11px] text-stone-600 dark:text-stone-300 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#25201c] rounded-md px-2.5 py-1 transition-colors duration-300"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-14 text-center">
          <a
            href="mailto:ipintemidaraa@gmail.com"
            className="inline-flex items-center gap-2.5 bg-[#c5a880] dark:bg-[#3B82F6] text-white rounded-full px-7 py-3.5 text-[13px] font-medium tracking-wide hover:bg-[#b89a70] dark:hover:bg-[#2563EB] transition-colors duration-300 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Discuss Your Project
          </a>
          <p className="text-[12px] text-stone-400 dark:text-stone-500 mt-3 font-light">
            Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}