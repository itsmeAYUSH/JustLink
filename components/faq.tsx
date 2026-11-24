"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      q: "What makes Locked Folders different from a password-protected folder?",
      a: "Most bookmark managers only hide locked items using CSS in the frontend. If someone inspects the network requests or views localStorage, the data is visible. In JustLink, locked folders are enforced at the PostgreSQL database level using Supabase Row Level Security (RLS). The database will refuse to return rows for locked links until the active browser session passes the vault PIN check.",
    },
    {
      q: "How does the Chrome/Edge extension capture metadata from private sites?",
      a: "When you click 'Save to JustLink' or press Alt+Shift+S, the extension takes a snapshot of the page's current <head> element directly inside your browser. Because your browser has already logged in or passed any Cloudflare/bot verification, JustLink gets the genuine title, OpenGraph preview, and keywords without getting blocked with a 403 Forbidden.",
    },
    {
      q: "How do I migrate my existing bookmarks from Chrome or Raindrop?",
      a: "JustLink supports universal HTML and JSON bookmarks import. In your browser or bookmark app, click 'Export Bookmarks', then in JustLink simply upload the file. Folders become collections, tags and creation dates are preserved, and preview images are scraped in the background.",
    },
    {
      q: "How does the Images toggle work?",
      a: "In the dashboard toolbar, click 'Images: On/Minimal'. When toggled off, JustLink replaces heavy thumbnail images with high-contrast, clean typography placeholders showing the domain and title. This is ideal for work environments, low-bandwidth connections, or users who prefer a distraction-free layout.",
    },
    {
      q: "Is JustLink open source and self-hostable?",
      a: "Yes! JustLink is built on Next.js 15, Turborepo, and Supabase. You can clone the repository, run the SQL migrations in Supabase, and deploy to Vercel or your own server in minutes.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/40 px-3.5 py-1 text-xs font-medium text-teal-300">
            <HelpCircle className="size-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 divide-y divide-white/[0.08]">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between text-left text-base font-semibold text-zinc-100 hover:text-teal-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-zinc-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-teal-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed pr-6">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
