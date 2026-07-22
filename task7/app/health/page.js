// Next.js Server Component by default

// Set revalidation time to 0 to force dynamic server-side fetching on load
export const revalidate = 0;

async function getHealthStatus() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      cache: "no-store", // Force no-cache to prove active runtime data-fetching
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch health status data (HTTP ${res.status})`);
    }
    
    return await res.json();
  } catch (error) {
    console.error("Health check error:", error);
    return null;
  }
}

export default async function HealthCheck() {
  const data = await getHealthStatus();
  const timestamp = new Date().toISOString();

  return (
    <div className="flex flex-col gap-8 max-w-2xl py-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          System Health Check
        </h1>
        <p className="text-sm text-text-secondary">
          Server-side runtime data verification check. Renders active fetched API payloads.
        </p>
      </div>

      <div className="bg-white/[0.01] border border-white/5 rounded-xl p-8 flex flex-col gap-6 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white text-base">Server Status: Online</span>
          </div>
          <span className="text-[11px] font-mono text-text-secondary">{timestamp}</span>
        </div>

        {data ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
              Data Fetching Active
            </div>
            
            <div className="flex flex-col gap-2 bg-white/[0.01] border border-white/5 p-4 rounded-lg">
              <span className="text-[11px] font-bold uppercase text-primary-accent tracking-wider font-mono">Fetched Headline (Post #1)</span>
              <span className="text-sm font-semibold text-white leading-tight capitalize">{data.title}</span>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">{data.body}</p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 bg-red-500/5 border border-red-500/10 p-4 rounded-lg text-red-400">
            <span className="text-sm font-semibold">Data Fetching Failed</span>
            <p className="text-xs text-red-400/80">Could not retrieve verification payload from the public REST API.</p>
          </div>
        )}
      </div>
    </div>
  );
}
