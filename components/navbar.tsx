"use client";

import { useState } from "react";
import { Bookmark, Lock, ArrowRight, Menu, X } from "lucide-react";
import { ChromeIcon, GithubIcon } from "@/components/icons";
import { APP_LOGIN_URL } from "@/lib/config";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#090a0d]/80 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/20 to-teal-500/10 border border-teal-500/30 text-teal-400 group-hover:border-teal-400/50 group-hover:scale-105 transition-all shadow-[0_0_20px_-3px_rgba(45,212,191,0.3)]">
            <Bookmark className="size-4.5" />
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-lg tracking-tight text-white">JustLink</span>
            <span className="text-[10px] font-mono uppercase tracking-widest px-1.5 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300">
              v2.0
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#vault" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Lock className="size-3.5 text-amber-400" />
            <span>Locked Vault</span>
          </a>
          <a href="#extension" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <ChromeIcon className="size-3.5 text-teal-400" />
            <span>Extension</span>
          </a>
          <a href="#syntax" className="hover:text-white transition-colors">
            Search Syntax
          </a>
          <a href="#compare" className="hover:text-white transition-colors">
            Comparison
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            title="GitHub Repository"
          >
            <GithubIcon className="size-4.5" />
          </a>
          <a
            href="#preview"
            className="text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-2 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={APP_LOGIN_URL}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-500 to-teal-400 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-[0_0_25px_-5px_rgba(45,212,191,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_-5px_rgba(45,212,191,0.6)]"
          >
            <span>Open JustLink</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex size-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 hover:text-white"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0d12] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            Features
          </a>
          <a
            href="#vault"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            <Lock className="size-4 text-amber-400" />
            <span>Locked Vault</span>
          </a>
          <a
            href="#extension"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            <ChromeIcon className="size-4 text-teal-400" />
            <span>Browser Extension</span>
          </a>
          <a
            href="#syntax"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            Search Syntax
          </a>
          <a
            href="#compare"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            Comparison
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-white"
          >
            FAQ
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#preview"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-2.5 text-sm font-medium text-zinc-200 hover:bg-white/[0.06]"
            >
              Live Demo
            </a>
            <a
              href={APP_LOGIN_URL}
              className="flex items-center justify-center gap-2 rounded-xl bg-teal-400 py-2.5 text-sm font-semibold text-zinc-950"
            >
              <span>Get Started</span>
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
