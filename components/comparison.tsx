import { Check, X } from "lucide-react";

export function Comparison() {
  const comparisons = [
    {
      feature: "Locked Folders (4-Digit PIN with Postgres RLS)",
      justlink: true,
      browser: false,
      raindrop: false,
      pocket: false,
    },
    {
      feature: "Direct <head> snapshot capture (bypasses bot/login blocks)",
      justlink: true,
      browser: false,
      raindrop: false,
      pocket: false,
    },
    {
      feature: "Tracking parameter auto-stripping (utm_*, fbclid)",
      justlink: true,
      browser: false,
      raindrop: false,
      pocket: false,
    },
    {
      feature: "Web search operators ('exact phrase', -exclude, #tag)",
      justlink: true,
      browser: false,
      raindrop: true,
      pocket: false,
    },
    {
      feature: "Bulk multi-tab opener (without browser popup blocks)",
      justlink: true,
      browser: false,
      raindrop: false,
      pocket: false,
    },
    {
      feature: "Minimalist images toggle (low bandwidth / distraction-free)",
      justlink: true,
      browser: false,
      raindrop: false,
      pocket: false,
    },
    {
      feature: "Non-destructive notes (scraping never overwrites your edits)",
      justlink: true,
      browser: false,
      raindrop: true,
      pocket: false,
    },
    {
      feature: "Import from Chrome, Safari, Firefox, Pocket, Raindrop",
      justlink: true,
      browser: true,
      raindrop: true,
      pocket: false,
    },
  ];

  return (
    <section id="compare" className="relative py-20 lg:py-28 overflow-hidden border-t border-white/[0.06]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            How JustLink Compares
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Why traditional bookmarks and dated read-it-later apps fall short.
          </p>
        </div>

        <div className="mt-14 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-white/10 text-xs font-mono uppercase tracking-wider text-zinc-400">
                <th className="py-4 px-4 font-medium">Capability</th>
                <th className="py-4 px-4 font-bold text-teal-400 bg-teal-950/20 rounded-t-xl text-center">
                  JustLink
                </th>
                <th className="py-4 px-4 font-medium text-center">Chrome / Safari</th>
                <th className="py-4 px-4 font-medium text-center">Raindrop.io</th>
                <th className="py-4 px-4 font-medium text-center">Pocket</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06] text-sm">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 px-4 font-medium text-zinc-200">{row.feature}</td>

                  {/* JustLink Column */}
                  <td className="py-4 px-4 text-center bg-teal-950/10 border-x border-teal-500/20">
                    <div className="inline-flex size-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.5)]">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                  </td>

                  {/* Browser */}
                  <td className="py-4 px-4 text-center">
                    {row.browser ? (
                      <Check className="size-4 text-zinc-400 mx-auto" />
                    ) : (
                      <X className="size-4 text-zinc-600 mx-auto" />
                    )}
                  </td>

                  {/* Raindrop */}
                  <td className="py-4 px-4 text-center">
                    {row.raindrop ? (
                      <Check className="size-4 text-zinc-400 mx-auto" />
                    ) : (
                      <X className="size-4 text-zinc-600 mx-auto" />
                    )}
                  </td>

                  {/* Pocket */}
                  <td className="py-4 px-4 text-center">
                    {row.pocket ? (
                      <Check className="size-4 text-zinc-400 mx-auto" />
                    ) : (
                      <X className="size-4 text-zinc-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
