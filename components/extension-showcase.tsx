import { Zap, Keyboard, Check, Layers } from "lucide-react";
import { ChromeIcon } from "@/components/icons";

export function ExtensionShowcase() {
  return (
    <section id="extension" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06] bg-grid-pattern">
      <div className="absolute top-1/3 left-1/4 size-[500px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-3.5 py-1 text-xs font-medium text-teal-300">
            <ChromeIcon className="size-3.5" />
            <span>Chrome & Edge Extension</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Save in one keystroke.{" "}
            <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              Never interrupt your flow.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Pin the extension to your toolbar. Press <kbd className="px-1.5 py-0.5 rounded bg-zinc-800 text-teal-300 font-mono text-xs border border-zinc-700">Alt+Shift+S</kbd> to
            capture the active page, file it into a folder with number keys 1–9, and extract clean metadata.
          </p>
        </div>

        {/* Feature Trio + Popup Mock */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Extension Visual Mock */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-teal-500/30 bg-[#0f1117] p-5 shadow-[0_0_60px_-10px_rgba(45,212,191,0.25)]">
              {/* Fake Chrome browser tab bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full bg-red-500/80" />
                  <div className="size-2.5 rounded-full bg-amber-500/80" />
                  <div className="size-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-white/5">
                  Save to JustLink
                </div>
                <div className="text-[10px] text-teal-400 font-mono">Alt+Shift+S</div>
              </div>

              {/* Extension form mock */}
              <div className="mt-4 space-y-3.5">
                <div>
                  <label className="text-[11px] font-medium text-zinc-400 block mb-1">Page Title</label>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white">
                    Next.js 15 Documentation • Server Actions & Turbopack
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-400 block mb-1">Folder (Press 1–9)</label>
                  <div className="flex items-center justify-between rounded-lg border border-teal-500/40 bg-teal-950/20 px-3 py-2 text-xs text-teal-300">
                    <span>📁 2. Frontend Development</span>
                    <span className="text-[10px] font-mono text-teal-400 bg-teal-500/20 px-1 rounded">[2]</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-400 block mb-1">Tags</label>
                  <div className="flex flex-wrap gap-1.5 p-2 rounded-lg border border-white/10 bg-white/[0.02]">
                    <span className="text-[10px] bg-white/[0.06] text-zinc-300 px-2 py-0.5 rounded">#nextjs</span>
                    <span className="text-[10px] bg-white/[0.06] text-zinc-300 px-2 py-0.5 rounded">#react</span>
                    <span className="text-[10px] bg-teal-500/20 text-teal-300 px-2 py-0.5 rounded">+ add tag</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-zinc-400 block mb-1">Personal Note</label>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-zinc-400 font-mono text-[11px]">
                    Check migration guide for breaking changes before deploying v2.
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[10px] text-zinc-500 font-mono">Ctrl+Enter to save</span>
                  <button className="px-4 py-2 rounded-lg bg-teal-400 text-zinc-950 font-semibold text-xs flex items-center gap-1.5 shadow-[0_0_15px_-3px_rgba(45,212,191,0.5)]">
                    <Check className="size-3.5" />
                    <span>Save Bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Key Advantages */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-[#12141a]/90 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Zap className="size-4.5" />
                </div>
                <h3 className="font-semibold text-white text-base">Direct DOM Snapshotting</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Ever saved a page behind a paywall, login screen, or Cloudflare challenge, only for bookmark tools to fetch a 403 Forbidden preview? The JustLink extension captures the page's exact <code className="text-teal-300">&lt;head&gt;</code> state as your authenticated browser sees it.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#12141a]/90 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Layers className="size-4.5" />
                </div>
                <h3 className="font-semibold text-white text-base">Unrestricted Multi-Tab Opener</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Need to open 15 saved research links at once? Standard web apps get blocked by browser popup blockers after 1 tab. The JustLink extension bridge communicates directly with your dashboard to launch as many tabs as you need simultaneously.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-[#12141a]/90 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400">
                  <Keyboard className="size-4.5" />
                </div>
                <h3 className="font-semibold text-white text-base">Keyboard-First Flow</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Press <kbd className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded text-xs">Alt+Shift+S</kbd> to open, number keys <kbd className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded text-xs">1–9</kbd> to file into folders, and <kbd className="text-zinc-300 bg-zinc-800 px-1 py-0.5 rounded text-xs">Ctrl+Enter</kbd> to save. Zero mouse movement required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
