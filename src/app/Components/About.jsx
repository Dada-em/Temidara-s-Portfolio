// app/components/AboutSection.tsx
import Image from 'next/image'

const credentials = [
  { n: '01', text: "B.Sc Architecture, First Class — Redeemer's University 2025" },
  { n: '02', text: "AutoCAD · Revit · SketchUp · ArchiCAD — Certified (New Horizons)" },
  { n: '03', text: "Best in Architectural Design Award — Redeemers' University 2025" },
]

const toolGroups = [
  { category: 'Drafting', tools: ['AutoCAD', 'Revit', 'ArchiCAD'] },
  { category: 'Modelling', tools: ['SketchUp'] },
  { category: 'Rendering & Animation', tools: ['Enscape'] },
  { category: 'Editing', tools: ['Photoshop'] },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f7f5f0] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">

      {/* Tag */}
      <div className="inline-flex items-center gap-2 border border-[#3B82F6]/30 bg-white/60 rounded-full px-4 py-1.5 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
        <span className="text-[11px] tracking-[.14em] uppercase text-[#2563EB]">About</span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

        {/* Intro */}
        <div className="bg-white border border-stone-200/80 shadow-sm rounded-2xl p-7 sm:p-9 md:col-span-2 lg:col-span-1">
          <p className="text-[11px] tracking-[.18em] uppercase text-[#2563EB] mb-4">Architecture & Design</p>
          <h2 className="font-serif text-[28px] sm:text-[32px] font-normal text-stone-900 leading-[1.2] mb-4">
            Spaces built with<br />
            <em className="italic text-[#3B82F6]">intention</em> and craft
          </h2>
          <p className="text-[13.5px] font-light text-stone-600 leading-[1.75]">
            Ipintemidara Adebayo is a first-class architecture graduate with deep expertise in
            BIM modelling, 3D visualisation, and site supervision — turning precise technical
            thinking into beautifully buildable designs.
          </p>
        </div>

        {/* Stat 1 */}
        <div className="bg-white border border-stone-200/80 shadow-sm rounded-2xl p-7 flex flex-col justify-between">
          <div>
            <p className="font-serif text-[54px] font-normal text-stone-900 leading-none">
              4.86<span className="text-[28px] text-[#3B82F6]">/5</span>
            </p>
            <p className="text-[12px] text-stone-500 tracking-wide mt-2">Graduating CGPA — summa cum laude</p>
          </div>
          <div className="h-0.5 bg-stone-200 rounded-full mt-5 overflow-hidden">
            <div className="h-full w-[97%] bg-[#3B82F6] rounded-full" />
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white border border-stone-200/80 shadow-sm rounded-2xl p-7 flex flex-col justify-between">
          <div>
            <p className="font-serif text-[54px] font-normal text-stone-900 leading-none">
              3<span className="text-[28px] text-[#3B82F6]">+</span>
            </p>
            <p className="text-[12px] text-stone-500 tracking-wide mt-2">Years across design, site & visualisation</p>
          </div>
          <div className="h-0.5 bg-stone-200 rounded-full mt-5 overflow-hidden">
            <div className="h-full w-[60%] bg-[#3B82F6] rounded-full" />
          </div>
        </div>

        {/* Credentials & Awards */}
        <div className="bg-white border border-stone-200/80 shadow-sm rounded-2xl p-7 sm:p-8">
          <p className="text-[11px] tracking-[.18em] uppercase text-[#2563EB] mb-5">Credentials & Awards</p>
          {credentials.map((c) => (
            <div key={c.n} className="flex items-start gap-3 py-2.5 border-b border-stone-200/80 last:border-0">
              <span className="font-serif text-[13px] text-[#3B82F6]/70 min-w-[20px] pt-px">{c.n}</span>
              <span className="text-[13px] font-light text-stone-700 leading-snug">{c.text}</span>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="bg-white border border-stone-200/80 shadow-sm rounded-2xl p-7 sm:p-8">
          <p className="text-[11px] tracking-[.18em] uppercase text-[#2563EB] mb-5">Tools & Software</p>
          <div className="flex flex-col gap-5">
            {toolGroups.map((group) => (
              <div key={group.category}>
                <p className="text-[10px] tracking-[.16em] uppercase text-stone-400 mb-2.5">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[12px] font-light text-stone-700 border border-stone-200 bg-stone-50 rounded-md px-2.5 py-1"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] lg:min-h-[320px] relative bg-stone-200 shadow-sm border border-stone-200/80">
          <Image
            src="/about-site.jpg"
            alt="Architecture work"
            fill
            className="object-cover brightness-[.92] saturate-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
          <div className="absolute bottom-4 left-4 bg-white/90 border border-[#3B82F6]/25 rounded-full px-4 py-1.5 text-[11px] text-[#2563EB] tracking-widest uppercase shadow-sm">
            On site & in studio
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[#3B82F6] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="font-serif text-[24px] sm:text-[26px] font-normal text-white leading-[1.25] mb-3">
              Let's bring your project to life
            </h3>
            <p className="text-[13px] font-light text-white/85 leading-[1.7] mb-6">
              From concept sketches to construction drawings — available for freelance,
              full-time, and collaborative work.
            </p>
            <button className="flex items-center gap-2 bg-stone-900 text-white rounded-full px-6 py-3 text-[12px] font-medium tracking-wide hover:bg-stone-800 transition-colors">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M16 2v4M8 2v4M3 10h18"/>
              </svg>
              Book a Consultation
            </button>
          </div>
          <p className="font-serif italic text-[22px] text-white/60 mt-6">Ipintemidara A.</p>
        </div>

      </div>
      </div>
    </section>
  )
}
