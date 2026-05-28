// app/components/Footer.tsx
import Link from 'next/link'

const navLinks = ['Home', 'About', 'Projects', 'Services', 'Contact']
const services = ['BIM Modelling', '3D Visualisation', 'Technical Drafting', 'Site Supervision', 'Interior Design']

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0a0a0a] border-t border-white/[.06] pt-16 sm:pt-20 pb-8">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">

      {/* CTA Strip */}
      <div className="bg-[#1c1815] border border-[#c5a880]/[.14] dark:border-[#3B82F6]/[.14] rounded-2xl px-6 py-7 sm:px-10 sm:py-9 lg:px-12 lg:py-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center mb-14 sm:mb-16">
        <div>
          <h3 className="font-serif text-[26px] font-normal text-[#f0ede4] mb-1.5">
            Ready to start your next project?
          </h3>
          <p className="text-[13px] font-light text-[#f0ede4]/45 leading-relaxed">
            Let's collaborate — from concept to completion, every detail considered.
          </p>
        </div>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-[#c5a880] dark:bg-[#3B82F6] text-white rounded-full px-7 py-3.5 text-[12px] font-medium tracking-wide whitespace-nowrap hover:bg-[#a98d69] dark:hover:bg-[#2563EB] transition-colors"
        >
          Get in Touch
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6"/>
          </svg>
        </Link>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 gap-10 mb-14 sm:mb-16 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-12">

        {/* Brand */}
        <div>
          <p className="font-serif text-[28px] text-[#f0ede4] mb-3">
            Ipin<em className="italic text-[#c5a880] dark:text-[#3B82F6]">temidara</em>
          </p>
          <p className="text-[13px] font-light text-[#f0ede4]/45 leading-[1.75] max-w-[260px] mb-7">
            First-class architect specialising in BIM modelling, 3D visualisation, and site supervision. Based in Oyo State, Nigeria.
          </p>
          <div className="flex gap-2.5">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ipintemidara' },
              { label: 'Instagram', href: '#' },
              { label: 'Email', href: 'mailto:ipintemidaraa@gmail.com' },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/45 hover:border-[#c5a880] dark:hover:border-[#3B82F6] hover:text-[#c5a880] dark:hover:text-[#3B82F6] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                  <path d="M22 6l-10 7L2 6"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <p className="text-[11px] tracking-[.2em] uppercase text-[#c5a880] dark:text-[#3B82F6] mb-5">Navigation</p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l}>
                <Link
                  href={
                    l === 'Home' ? '/' :
                    l === 'Projects' ? '/projects' :
                    `/#${l.toLowerCase()}`
                  }
                  className="text-[13px] font-light text-[#f0ede4]/50 hover:text-[#f0ede4] transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-[11px] tracking-[.2em] uppercase text-[#c5a880] dark:text-[#3B82F6] mb-5">Services</p>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <Link href="/#services" className="text-[13px] font-light text-[#f0ede4]/50 hover:text-[#f0ede4] transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] tracking-[.2em] uppercase text-[#c5a880] dark:text-[#3B82F6] mb-5">Contact</p>
          {[
            { label: 'Email', val: 'ipintemidaraa@gmail.com' },
            { label: 'Phone', val: '+234 708 197 1780' },
            { label: 'Location', val: 'Oyo State, Nigeria' },
          ].map((c) => (
            <div key={c.label} className="mb-4">
              <p className="text-[10px] tracking-[.14em] uppercase text-white/25 mb-0.5">{c.label}</p>
              <p className="text-[13px] font-light text-[#f0ede4]/60">{c.val}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[.05] pt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-white/25">
          © 2026 <span className="text-[#c5a880] dark:text-[#3B82F6]">Ipintemidara Adebayo</span>. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((l) => (
            <Link key={l} href="#" className="text-[12px] text-white/25 hover:text-white/60 transition-colors">{l}</Link>
          ))}
        </div>
      </div>

      </div>
    </footer>
  )
}