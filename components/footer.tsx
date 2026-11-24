import { Bookmark } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080b] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
              <Bookmark className="size-3.5" />
            </div>
            <span className="font-semibold text-sm text-white">JustLink</span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-500">The Visual Bookmark Manager</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>
            <a href="#vault" className="hover:text-white transition-colors">
              Vault
            </a>
            <a href="#extension" className="hover:text-white transition-colors">
              Extension
            </a>
            <a href="#compare" className="hover:text-white transition-colors">
              Comparison
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} JustLink. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
