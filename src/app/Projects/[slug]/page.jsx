// app/Projects/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import projects from "../../projects/projects.json";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Ipintemidara Adebayo",
      description: "The requested project could not be found."
    };
  }

  return {
    title: `${project.title} | Architecture & Design`,
    description: project.desc,
    openGraph: {
      title: `${project.title} | Ipintemidara Adebayo`,
      description: project.desc,
      images: [{ url: project.image }],
    },
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="bg-[#f7f5f0] dark:bg-[#12100e] min-h-[70vh] flex flex-col items-center justify-center px-5 py-24 transition-colors duration-300">
          <div className="text-center max-w-md">
            <span className="font-serif italic text-lg text-[#a98d69] dark:text-[#3B82F6] block mb-4">
              Oops!
            </span>
            <h1 className="font-serif text-3xl font-normal text-stone-900 dark:text-stone-100 leading-tight mb-5">
              Project not found
            </h1>
            <p className="text-[14px] font-light text-stone-600 dark:text-stone-300 leading-relaxed mb-8">
              The project page you are looking for might have been moved or doesn't exist.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#c5a880] dark:bg-[#3B82F6] text-white rounded-full px-6 py-3 text-[12px] font-medium tracking-wide hover:bg-[#a98d69] dark:hover:bg-[#2563EB] transition-colors"
            >
              <svg className="w-3.5 h-3.5 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#f7f5f0] dark:bg-[#12100e] text-stone-900 dark:text-stone-100 min-h-screen transition-colors duration-300 pb-20">
        
        {/* Navigation & Breadcrumbs */}
        <div className="mx-auto w-full max-w-7xl px-5 pt-8 sm:px-8 lg:px-14">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase text-stone-500 hover:text-[#a98d69] dark:text-stone-400 dark:hover:text-[#3B82F6] transition-colors group mb-8"
          >
            <svg className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project Hero Header */}
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14 mb-12 sm:mb-16">
          <div className="relative aspect-16/7 md:aspect-21/9 w-full overflow-hidden rounded-[28px] bg-stone-200 dark:bg-stone-850 shadow-lg border border-stone-200/80 dark:border-stone-800/80 mb-8 sm:mb-10">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover brightness-95 saturate-[.95]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-10 lg:left-10 lg:right-10 z-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="inline-block bg-white/95 dark:bg-[#1a1613]/95 border border-[#c5a880]/20 dark:border-[#3B82F6]/20 rounded-full px-3.5 py-1 text-[10px] sm:text-[11px] font-semibold text-[#a98d69] dark:text-[#3B82F6] tracking-[.14em] uppercase shadow-sm mb-3 sm:mb-4">
                  {project.category}
                </span>
                <h1 className="font-serif text-[clamp(28px,5vw,52px)] font-normal text-white leading-[1.1] drop-shadow-sm">
                  {project.title}
                </h1>
              </div>
              <div className="text-white/80 shrink-0 text-right">
                <span className="block text-[11px] font-light uppercase tracking-[0.16em] text-white/50 mb-0.5">Year</span>
                <span className="font-serif italic text-lg sm:text-xl text-[#c5a880] dark:text-[#3B82F6]">{project.year}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Content Grid */}
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.8fr_1fr] lg:gap-14">
            
            {/* Left Content Area (Details) */}
            <div className="space-y-10 sm:space-y-12">
              
              {/* Overview */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] dark:bg-[#3B82F6]" />
                  <h2 className="font-serif italic text-lg text-[#a98d69] dark:text-[#3B82F6] tracking-wide">Overview</h2>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-normal leading-snug mb-5">
                  About the project
                </h3>
                <p className="text-[14px] sm:text-[15px] font-light text-stone-600 dark:text-stone-300 leading-[1.85] whitespace-pre-line">
                  {project.details.overview}
                </p>
              </div>

              {/* Concept */}
              {project.details.concept && (
                <div className="border-t border-stone-200/80 dark:border-stone-800/80 pt-10 sm:pt-12">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] dark:bg-[#3B82F6]" />
                    <h2 className="font-serif italic text-lg text-[#a98d69] dark:text-[#3B82F6] tracking-wide">Architectural Concept</h2>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-normal leading-snug mb-5">
                    Design philosophy & formulation
                  </h3>
                  <p className="text-[14px] sm:text-[15px] font-light text-stone-600 dark:text-stone-300 leading-[1.85]">
                    {project.details.concept}
                  </p>
                </div>
              )}

            </div>

            {/* Right Content Area (Metadata & Highlights) */}
            <div className="space-y-8">
              
              {/* Project Card Info */}
              <div className="bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors duration-300 space-y-6">
                <div>
                  <p className="text-[10px] tracking-[.18em] uppercase text-stone-400 dark:text-stone-500 mb-2">Category</p>
                  <p className="text-[14px] font-medium text-stone-950 dark:text-stone-50">{project.category}</p>
                </div>

                <div className="border-t border-stone-100 dark:border-stone-800/50 pt-4">
                  <p className="text-[10px] tracking-[.18em] uppercase text-stone-400 dark:text-stone-500 mb-2">Project Year</p>
                  <p className="text-[14px] font-medium text-stone-950 dark:text-stone-50">{project.year}</p>
                </div>

                <div className="border-t border-stone-100 dark:border-stone-800/50 pt-4">
                  <p className="text-[10px] tracking-[.18em] uppercase text-stone-400 dark:text-stone-500 mb-3">Tools & BIM Software</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-light text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-[#25201c] rounded px-2.5 py-0.5 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Highlights List */}
              {project.details.highlights && project.details.highlights.length > 0 && (
                <div className="bg-white dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 shadow-sm rounded-2xl p-6 sm:p-8 transition-colors duration-300">
                  <p className="text-[11px] tracking-[.18em] uppercase text-[#a98d69] dark:text-[#2563EB] mb-5 font-semibold">
                    Key Highlights
                  </p>
                  <ul className="space-y-4">
                    {project.details.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c5a880]/15 dark:bg-[#3B82F6]/15 text-[#a98d69] dark:text-[#3B82F6] text-[10px] font-semibold pt-px">
                          ✓
                        </span>
                        <span className="text-[13px] font-light text-stone-700 dark:text-stone-300 leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Gallery Section */}
        {project.details.gallery && project.details.gallery.length > 0 && (
          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-14 mt-16 sm:mt-24 border-t border-stone-200/80 dark:border-stone-800/80 pt-16 sm:pt-20">
            <div className="mb-10 sm:mb-14">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] dark:bg-[#3B82F6]" />
                <h2 className="font-serif italic text-lg text-[#a98d69] dark:text-[#3B82F6] tracking-wide">Gallery</h2>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                Visualisation & Documentation
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
              {project.details.gallery.map((imgUrl, index) => (
                <div 
                  key={index} 
                  className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-stone-100 dark:bg-[#1a1613] border border-stone-200/80 dark:border-stone-800/80 group shadow-sm transition duration-300 hover:shadow-md"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} Render ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025] brightness-[.97] saturate-[.97]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
