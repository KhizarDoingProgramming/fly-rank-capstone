import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Book Alignment Call
        </h1>
        <p className="text-sm text-text-secondary">
          Reserve a 15-minute consultation to verify Ghulam's skills and align on project specifications.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 mt-4">
        {/* Calendly placeholder */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-6 flex flex-col gap-4">
          <span className="font-bold text-white text-base">Calendly Scheduler</span>
          <p className="text-xs text-text-secondary leading-relaxed">
            Calendly widget embed placeholder. The final portfolio integrates Ghulam's active scheduler booking slots.
          </p>
          <a 
            href="https://calendly.com/khizar-alignment" 
            target="_blank" 
            rel="noreferrer" 
            className="mt-auto inline-flex justify-center py-2.5 px-4 rounded-lg bg-primary-accent hover:bg-primary-hover text-background font-bold text-xs"
          >
            Launch Calendly Link
          </a>
        </div>

        {/* Inquiry placeholder */}
        <div className="bg-white/[0.01] border border-white/5 rounded-xl p-6 flex flex-col gap-4">
          <span className="font-bold text-white text-base">Direct Inquiry</span>
          <p className="text-xs text-text-secondary leading-relaxed">
            Inquiry messaging interface placeholder. Send details directly to Ghulam's team.
          </p>
          <button 
            type="button" 
            disabled 
            className="mt-auto inline-flex justify-center py-2.5 px-4 rounded-lg border border-white/10 text-white font-bold text-xs opacity-50 cursor-not-allowed"
          >
            Send Inquiry Form
          </button>
        </div>
      </div>
    </div>
  );
}
