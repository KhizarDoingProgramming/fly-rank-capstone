import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 max-w-3xl justify-center py-8">
      {/* Badge row */}
      <div className="flex gap-2">
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-text-secondary">
          Next.js App Router (Server Component)
        </span>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-accent/10 border border-primary-accent/20 text-primary-accent">
          Verified Phase 2 Spec
        </span>
      </div>

      {/* Hero Headline */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          I build <span className="bg-gradient-to-r from-primary-accent to-secondary-accent bg-clip-text text-transparent">Pixel-Perfect React</span> applications with AI velocity.
        </h1>
        <p className="text-lg text-text-secondary font-light max-w-xl">
          Leveraging advanced AI-assisted pair-programming workflows to build faster, without sacrificing accessibility, testing, or precision.
        </p>
      </div>

      {/* Proof Statement Box */}
      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col gap-4 shadow-xl">
        <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary-accent animate-pulse" />
          Interactive Proof Statement
        </div>
        <p className="text-base text-gray-300 leading-relaxed">
          For a <span className="text-purple-300 font-medium">lead frontend engineering director at a premium, design-focused software agency looking for elite developers who can build fast without sacrificing detail</span>: 
          I build <span className="text-cyan-300 font-medium">pixel-perfect, highly interactive React frontend web applications using advanced AI-assisted pair programming workflows that combine elite visual execution with clean custom styling</span>. 
          I prove this by showcasing my modular component design systems and performance audits so they will <span className="text-emerald-300 font-medium">book a 15-minute project alignment call via my integrated scheduler</span>.
        </p>
      </div>

      {/* Call to Action */}
      <div className="flex gap-4">
        <Link 
          href="/work" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-accent hover:bg-primary-hover text-background font-bold shadow-lg shadow-primary-accent/15 transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          View Case Studies
        </Link>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-white font-bold transition-colors"
        >
          Book Alignment Call
        </Link>
      </div>
    </div>
  );
}
