// app/components/HeroSection.tsx
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.82) 45%, rgba(0,0,0,0.3) 100%),
            url('/hero-background.jpg') center/cover no-repeat
          `,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      </div>

      {/* Body */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6 sm:mb-7">
              <div className="w-10 h-px bg-[#c5a880] dark:bg-[#3B82F6]" />
              <span className="text-[11px] font-medium tracking-[0.22em] uppercase text-[#c5a880] dark:text-[#3B82F6]">
                Architecture & Design Studio
              </span>
            </div>

            <h1 className="font-cormorant text-[clamp(40px,9vw,76px)] font-light leading-[1.07] text-white mb-5 sm:mb-6">
              Where Every<br />
              <em className="italic text-[#c5a880] dark:text-[#3B82F6]">Structure</em> Tells<br />
              Its Story
            </h1>

            <p className="text-[15px] font-light text-white/65 leading-relaxed max-w-md mb-9 sm:mb-11">
              Award-winning architectural design grounded in precision, purpose,
              and the enduring poetry of built space.
            </p>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
              <a
              href="https://drive.google.com/file/d/1TDSuVdtQhRKGgjRfklKJ7WPn1wKrujxO/view?usp=drivesdk" // <-- Replace with your actual external URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium tracking-widest uppercase text-white bg-[#c5a880] dark:bg-[#3B82F6] px-8 py-3.5 hover:bg-[#a98d69] dark:hover:bg-[#2563EB] transition-colors"
            >
              View Portfolio
            </a>
              <Link
                href="/#approach"
                className="text-[11px] font-medium tracking-widest uppercase text-white/75 hover:text-white flex items-center gap-2 transition-colors group"
              >
                Our Process
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer stats */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8 sm:py-7 lg:px-14">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-wrap gap-x-10 gap-y-6 sm:flex-nowrap sm:gap-12">
          {[
            { num: '12+', label: 'Years Experience' },
            { num: '80+', label: 'Projects Delivered' },
            { num: '15+', label: 'Awards Won' },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-cormorant text-3xl font-light text-white">{num}</div>
              <div className="text-[10px] tracking-[0.1em] uppercase text-white/45 mt-1">{label}</div>
            </div>
          ))}
            </div>

            <div className="hidden sm:flex flex-col items-center gap-2 text-white/40 text-[10px] tracking-widest uppercase">
              <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/35 animate-pulse" />
              Scroll
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}