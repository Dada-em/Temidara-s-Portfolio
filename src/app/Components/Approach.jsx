// app/components/ApproachSection.tsx

const steps = [
    {
      num: '01',
      title: ['Listen &', 'Discover'],
      pill: 'Brief & Consultation',
      desc: "Every project begins with deep listening. Before a single line is drawn, the client's vision, lifestyle, and constraints are mapped out — turning aspirations into a clear architectural brief that guides every decision to follow.",
      tools: ['Client Workshops', 'Site Analysis', 'Brief Writing'],
    },
    {
      num: '02',
      title: ['Sketch &', 'Concept'],
      pill: 'Concept Design',
      desc: 'Ideas are given physical form through concept sketches, mood boards, and spatial explorations. This phase is intentionally raw and iterative — pushing boundaries, testing ideas, and narrowing down to the direction that best serves the brief.',
      tools: ['Hand Sketching', 'Mood Boards', 'SketchUp'],
    },
    {
      num: '03',
      title: ['Model &', 'Visualise'],
      pill: 'Design Development',
      desc: 'Concepts are developed into fully coordinated BIM models and photorealistic renders, giving clients a true sense of the space before it\'s built. Walkthroughs and animations ensure no detail is left to imagination.',
      tools: ['Revit BIM', 'Enscape', 'AutoCAD', 'Photoshop'],
    },
    {
      num: '04',
      title: ['Document &', 'Detail'],
      pill: 'Technical Drawings',
      desc: 'Every design is translated into precise, buildable construction documentation — detailed drawings, specifications, and schedules that leave nothing to interpretation on site.',
      tools: ['Working Drawings', 'Specifications', 'Consultant Coordination'],
    },
    {
      num: '05',
      title: ['Build &', 'Deliver'],
      pill: 'Site Supervision',
      desc: 'On-site presence ensures designs are executed exactly as intended. From foundation to finishing, quality is monitored at every phase — with as-built documentation, contractor liaison, and a commitment to delivering spaces that match the vision precisely.',
      tools: ['Site Visits', 'Quality Control', 'As-Built Docs'],
    },
  ]
  
  export default function ApproachSection() {
    return (
      <section id="approach" className="bg-[#f7f5f0] py-16 sm:py-20 border-t border-stone-200/60">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
  
        {/* Header */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10 mb-12 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#3B82F6]/30 bg-white/60 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-[11px] tracking-[.14em] uppercase text-[#2563EB]">Design Philosophy</span>
            </div>
            <h2 className="font-serif text-[clamp(32px,5vw,48px)] font-normal text-stone-900 leading-[1.1] max-w-[460px]">
              The way every<br />
              <em className="italic text-[#3B82F6]">project</em> takes shape
            </h2>
          </div>
          <p className="text-[14px] font-light text-stone-600 leading-[1.8] max-w-[420px] md:text-right">
            Every structure begins long before a single line is drawn — it starts with listening, understanding, and asking the right questions.
          </p>
        </div>
  
        {/* Steps */}
        <div className="flex flex-col bg-white border border-stone-200/80 rounded-2xl shadow-sm px-5 sm:px-8 lg:px-10">
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-1 gap-6 py-8 border-t border-stone-200/80 first:border-t-0 last:border-b-0 group md:grid-cols-[80px_1fr_1.25fr] md:items-start md:gap-10 md:py-9"
            >
              {/* Number */}
              <span className="font-serif text-[13px] text-[#3B82F6]/55 tracking-[.1em] pt-1 group-hover:text-[#2563EB] transition-colors">
                {step.num}
              </span>
  
              {/* Left */}
              <div>
                <h3 className="font-serif text-[26px] font-normal text-stone-900 leading-[1.15] group-hover:text-[#1e3a5f] transition-colors">
                  {step.title[0]}<br />
                  <em className="italic text-[#3B82F6]">{step.title[1].replace('&', '').trim()}</em>
                </h3>
                <div className="inline-flex items-center gap-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full px-3 py-1 text-[11px] text-[#2563EB] mt-3">
                  {step.pill}
                </div>
              </div>
  
              {/* Right */}
              <div className="pt-1">
                <p className="text-[14px] font-light text-stone-600 leading-[1.8] mb-4">
                  {step.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-stone-600 border border-stone-200 bg-stone-50 rounded-md px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
  
        </div>
      </section>
    )
  }
