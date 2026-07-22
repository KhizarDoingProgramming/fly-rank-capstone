import Link from "next/link";

const CASE_STUDIES = [
  {
    title: "fly-rank-portal",
    metrics: "99 Lighthouse | 0.4s load",
    desc: "Shift logger and status manager with atomic state selector overrides."
  },
  {
    title: "next-dashboard",
    metrics: "98 Lighthouse | 0.6s load",
    desc: "Analytics dashboard with dynamic charting and dark theme aesthetics."
  },
  {
    title: "client-scheduler",
    metrics: "99 Lighthouse | 0.3s load",
    desc: "Mock calendar appointment scheduler with timezone parsing."
  }
];

export default function Work() {
  return (
    <div className="flex flex-col gap-8 max-w-4xl py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Case Studies & Audits
        </h1>
        <p className="text-sm text-text-secondary">
          Metric-proven React frontend projects demonstrating performance hygiene.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {CASE_STUDIES.map((study) => (
          <div key={study.title} className="bg-white/[0.01] border border-white/5 hover:border-primary-accent/30 rounded-xl p-6 flex flex-col gap-3 transition-colors shadow-lg">
            <span className="font-bold text-white text-base font-mono">{study.title}</span>
            <span className="text-[11px] font-bold text-primary-accent uppercase tracking-wider">{study.metrics}</span>
            <p className="text-xs text-text-secondary leading-relaxed">{study.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-accent hover:text-primary-hover">
          Next Step: Book Consultation <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
