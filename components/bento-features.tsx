import {
  Search,
  Sparkles,
  Trash2,
  Share2,
  SlidersHorizontal,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

export function BentoFeatures() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-3.5 py-1 text-xs font-medium text-teal-300">
            <Sparkles className="size-3.5" />
            <span>Architecture & Capabilities</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Engineered for power users,{" "}
            <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              designed for clarity.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Every feature in JustLink solves a real pain point found in generic browser bookmark managers.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Web-Search Syntax (Spans 2 cols on desktop) */}
          <div
            id="syntax"
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#101217] p-8 flex flex-col justify-between group hover:border-teal-500/40 transition-all"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Search className="size-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500 bg-white/[0.04] px-2 py-1 rounded">
                  FULL-TEXT SEARCH
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Advanced Web-Search Syntax</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Search through titles, custom notes, URLs, and descriptions using the natural syntax you're used to from Google.
              </p>

              {/* Syntax visual showcase */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-teal-300 font-semibold">"exact phrase"</span>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">Matches words in consecutive order</p>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-red-400 font-semibold">-exclude</span>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">Removes links matching keyword</p>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-amber-300 font-semibold">#tag</span>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">Narrows by specific assigned tag</p>
                </div>
                <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                  <span className="text-blue-400 font-semibold">termA or termB</span>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5">Matches either search query</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: URL Sanitization & Deduplication */}
          <div className="rounded-2xl border border-white/10 bg-[#101217] p-8 flex flex-col justify-between group hover:border-teal-500/40 transition-all">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                <SlidersHorizontal className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Tracking Parameter Stripping</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Never save tracking bloat. JustLink automatically strips <code className="text-teal-300">utm_*</code>, <code className="text-teal-300">fbclid</code>, and <code className="text-teal-300">gclid</code> junk before saving.
              </p>
              <div className="mt-5 p-3 rounded-xl bg-zinc-900/80 border border-white/5 font-mono text-[11px] text-zinc-400 space-y-1">
                <div className="text-red-400/80 line-through truncate">site.com/page?utm_source=twitter&fbclid=...</div>
                <div className="text-emerald-400 font-semibold truncate">→ site.com/page</div>
              </div>
            </div>
          </div>

          {/* Card 3: Non-Destructive Annotations */}
          <div className="rounded-2xl border border-white/10 bg-[#101217] p-8 flex flex-col justify-between group hover:border-teal-500/40 transition-all">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                <FileCheck2 className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Isolated Annotations</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Your custom titles, descriptions, and private markdown notes are stored completely separate from scraped site metadata.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-teal-300">
                <CheckCircle2 className="size-4" />
                <span>Refreshing previews never overwrites your notes</span>
              </div>
            </div>
          </div>

          {/* Card 4: 7-Day Trash Lifecycle */}
          <div className="rounded-2xl border border-white/10 bg-[#101217] p-8 flex flex-col justify-between group hover:border-teal-500/40 transition-all">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                <Trash2 className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">7-Day Trash & Recovery</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Accidental deletes happen. The Trash preserves deleted links for 7 days with instant one-click restoration before pg_cron auto-purges them.
              </p>
            </div>
          </div>

          {/* Card 5: Public Read-Only Shares */}
          <div className="rounded-2xl border border-white/10 bg-[#101217] p-8 flex flex-col justify-between group hover:border-teal-500/40 transition-all">
            <div>
              <div className="flex size-10 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                <Share2 className="size-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">Public Read-Only Sharing</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Share a folder with teammates or clients with a clean public URL. Your personal notes and locked vaults remain strictly private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
