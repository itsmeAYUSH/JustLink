import { ArrowRight, Zap, Lock, Filter, Layers } from "lucide-react";
import { ChromeIcon } from "@/components/icons";
import { APP_LOGIN_URL } from "@/lib/config";
import { HeroPreview } from "./hero-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-grid-pattern">
      {/* Radial atmospheric glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-teal-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 size-[400px] rounded-full bg-amber-500/[0.06] blur-[110px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow Pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-3.5 py-1.5 text-xs font-medium text-teal-300 backdrop-blur-md shadow-[0_0_20px_-3px_rgba(45,212,191,0.25)]">
            <span className="flex size-2 rounded-full bg-teal-400 animate-pulse" />
            <span>JustLink 2.0 is live</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Lock className="size-3 text-amber-400" />
              PIN Vaults & Extension
            </span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Your digital memory,{" "}
            <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
              curated with precision.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Stop losing tabs in bloated bookmark folders. JustLink captures full-fidelity previews,
            strips tracking junk, organizes with powerful search syntax, and hides sensitive links behind{" "}
            <span className="text-amber-300 font-medium">PIN-protected database vaults</span>.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={APP_LOGIN_URL}
              className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-6 py-3.5 text-base font-semibold text-zinc-950 shadow-[0_0_35px_-5px_rgba(45,212,191,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_45px_-5px_rgba(45,212,191,0.7)]"
            >
              <span>Get Started Free</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#extension"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/[0.08] hover:border-white/20"
            >
              <ChromeIcon className="size-4.5 text-teal-400" />
              <span>Get Chrome Extension</span>
            </a>
          </div>

          {/* Value Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-teal-400" />
              <span>1-Click Save with Metadata</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="size-4 text-amber-400" />
              <span>Hardware-Isolated Vaults</span>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-teal-400" />
              <span>Web Search Syntax (#tags, -exclude)</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-teal-400" />
              <span>Zero Tracking Stripping</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Dashboard Preview */}
        <div id="preview" className="mt-16 sm:mt-20">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}
