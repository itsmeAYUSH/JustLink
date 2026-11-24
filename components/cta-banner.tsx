import { ArrowRight } from "lucide-react";
import { ChromeIcon } from "@/components/icons";
import { APP_LOGIN_URL } from "@/lib/config";

export function CTABanner() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06] bg-grid-pattern">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[650px] rounded-full bg-teal-500/15 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
          Organize your web life{" "}
          <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
            without the clutter.
          </span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
          Start capturing links with full previews, keyboard shortcuts, and database-level locked folders. Free, fast, and private.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={APP_LOGIN_URL}
            className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-400 px-7 py-4 text-base font-semibold text-zinc-950 shadow-[0_0_35px_-5px_rgba(45,212,191,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_45px_-5px_rgba(45,212,191,0.7)]"
          >
            <span>Open JustLink App</span>
            <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#extension"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/[0.08]"
          >
            <ChromeIcon className="size-4.5 text-teal-400" />
            <span>Install Extension</span>
          </a>
        </div>
      </div>
    </section>
  );
}
