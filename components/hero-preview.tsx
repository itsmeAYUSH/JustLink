"use client";

import { useState } from "react";
import {
  Search,
  Grid,
  List as ListIcon,
  Image as ImageIcon,
  ImageOff,
  Folder,
  Star,
  Lock,
  ExternalLink,
  CheckSquare,
  Square,
  Sparkles,
  ArrowUpRight,
  X,
} from "lucide-react";

interface SampleLink {
  id: string;
  url: string;
  domain: string;
  title: string;
  description: string;
  folder: string;
  tags: string[];
  image: string;
  isFavorite?: boolean;
  isLocked?: boolean;
}

const SAMPLE_LINKS: SampleLink[] = [
  {
    id: "1",
    url: "https://linear.app",
    domain: "linear.app",
    title: "Linear • The issue tracking tool you'll actually love",
    description: "Linear helps streamline software projects, sprints, tasks, and bug tracking with high-performance keyboard-first flows.",
    folder: "Productivity",
    tags: ["design", "tools", "management"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    isFavorite: true,
  },
  {
    id: "2",
    url: "https://tailwindcss.com",
    domain: "tailwindcss.com",
    title: "Tailwind CSS v4.0 • Rapidly build modern websites",
    description: "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
    folder: "Frontend",
    tags: ["css", "frontend", "design-system"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    url: "https://supabase.com",
    domain: "supabase.com",
    title: "Supabase • The Open Source Firebase Alternative",
    description: "Build production apps with Postgres database, Authentication, instant APIs, Realtime subscriptions, and Storage.",
    folder: "Dev Tools",
    tags: ["backend", "postgres", "auth"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    isFavorite: true,
  },
  {
    id: "4",
    url: "https://raycast.com",
    domain: "raycast.com",
    title: "Raycast • Supercharged productivity for your desktop",
    description: "Raycast lets you control your tools with a few keystrokes. It's designed to keep you focused and fast.",
    folder: "Productivity",
    tags: ["macos", "launcher", "tools"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80",
  },
];

function stripQuotes(value: string): string {
  return value.startsWith('"') && value.endsWith('"') && value.length >= 2
    ? value.slice(1, -1)
    : value;
}

/** Evaluates JustLink web-search syntax ("phrase", -exclude, #tag, and OR) against a link. */
function matchesSearchQuery(link: SampleLink, rawQuery: string): boolean {
  const trimmed = rawQuery.trim();
  if (!trimmed) return true;

  const tokens = trimmed.match(/-?"[^"]*"|\S+/g) ?? [];
  if (tokens.length === 0) return true;

  // Split tokens on standalone `or` (case-insensitive)
  const orGroups: string[][] = [[]];
  for (const token of tokens) {
    if (token.toLowerCase() === "or") {
      if (orGroups[orGroups.length - 1].length > 0) {
        orGroups.push([]);
      }
    } else {
      orGroups[orGroups.length - 1].push(token);
    }
  }

  const nonEmptyGroups = orGroups.filter((group) => group.length > 0);
  if (nonEmptyGroups.length === 0) return true;

  const searchable = `${link.title} ${link.description} ${link.domain} ${link.folder} ${link.tags.join(" ")}`.toLowerCase();

  return nonEmptyGroups.some((group) =>
    group.every((rawToken) => {
      const token = rawToken.toLowerCase();
      if (token.startsWith("-") && token.length > 1) {
        const inner = stripQuotes(token.slice(1));
        if (!inner) return true;
        if (inner.startsWith("#") && inner.length > 1) {
          const tagQuery = inner.slice(1);
          return !link.tags.some((t) => t.toLowerCase().includes(tagQuery));
        }
        return !searchable.includes(inner);
      }

      if (token.startsWith("#") && token.length > 1) {
        const tagQuery = token.slice(1);
        return link.tags.some((t) => t.toLowerCase().includes(tagQuery));
      }

      const term = stripQuotes(token);
      return term ? searchable.includes(term) : true;
    })
  );
}

export function HeroPreview() {
  const [activeFolder, setActiveFolder] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showImages, setShowImages] = useState<boolean>(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bridgeNotice, setBridgeNotice] = useState<string | null>(null);

  // Filter links
  const filteredLinks = SAMPLE_LINKS.filter((link) => {
    if (activeFolder === "Favorites" && !link.isFavorite) return false;
    if (activeFolder !== "All" && activeFolder !== "Favorites" && link.folder !== activeFolder) {
      return false;
    }
    return matchesSearchQuery(link, searchQuery);
  });

  const visibleSelectedIds = selectedIds.filter((id) =>
    filteredLinks.some((link) => link.id === id)
  );

  const toggleSelect = (id: string) => {
    setBridgeNotice(null);
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    const visibleIds = filteredLinks.map((l) => l.id);
    const allVisibleSelected =
      visibleIds.length > 0 && visibleIds.every((id) => selectedIds.includes(id));

    if (allVisibleSelected) {
      setSelectedIds((prev) => prev.filter((id) => !visibleIds.includes(id)));
    } else {
      setSelectedIds((prev) => Array.from(new Set([...prev, ...visibleIds])));
    }
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0e1015]/95 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8),0_0_50px_-10px_rgba(45,212,191,0.15)] backdrop-blur-2xl overflow-hidden transition-all">
      {/* Top Window Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#13151b] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-amber-500/80" />
          <div className="size-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-zinc-500">justlink.app/library</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Interactive Sandbox
          </span>
        </div>
      </div>

      {/* Main Toolbar */}
      <div className="border-b border-white/[0.06] bg-[#0f1117] p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Search bar with syntax hint */}
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Try typing "tools", "design", or #postgres...'
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* View & Display Controls */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            {/* Images On/Off Toggle */}
            <button
              onClick={() => setShowImages(!showImages)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                showImages
                  ? "border-teal-500/30 bg-teal-500/10 text-teal-300"
                  : "border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white"
              }`}
              title="Toggle preview images (JustLink minimalist mode)"
            >
              {showImages ? <ImageIcon className="size-3.5" /> : <ImageOff className="size-3.5" />}
              <span>Images: {showImages ? "On" : "Minimal"}</span>
            </button>

            {/* Grid / List Mode */}
            <div className="flex items-center rounded-lg border border-white/10 bg-white/[0.03] p-0.5">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded ${viewMode === "grid" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`}
                title="Grid view"
              >
                <Grid className="size-3.5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded ${viewMode === "list" ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`}
                title="List view"
              >
                <ListIcon className="size-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Folder filter tabs */}
        <div className="mt-3 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {["All", "Productivity", "Frontend", "Dev Tools", "Favorites"].map((folder) => (
            <button
              key={folder}
              onClick={() => setActiveFolder(folder)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap transition-all ${
                activeFolder === folder
                  ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)]"
                  : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
              }`}
            >
              {folder === "Favorites" ? (
                <Star className="size-3 text-amber-400 fill-amber-400" />
              ) : (
                <Folder className="size-3 text-zinc-400" />
              )}
              <span>{folder}</span>
            </button>
          ))}

          {/* Locked Vault folder tab */}
          <a
            href="#vault"
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-medium whitespace-nowrap text-amber-300/80 bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/40 transition-all ml-auto"
          >
            <Lock className="size-3 text-amber-400" />
            <span>🔒 Locked Vault (Protected)</span>
          </a>
        </div>
      </div>

      {/* Floating Selection Bar */}
      {visibleSelectedIds.length > 0 && (
        <div className="bg-teal-950/70 border-b border-teal-500/30 px-4 py-2 flex items-center justify-between text-xs text-teal-200 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="font-semibold">
              {visibleSelectedIds.length} link{visibleSelectedIds.length > 1 ? "s" : ""} selected
            </span>
            <span className="text-teal-400/50">|</span>
            <button onClick={selectAll} className="underline hover:text-white">
              {visibleSelectedIds.length === filteredLinks.length ? "Deselect all" : "Select all"}
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setBridgeNotice(
                  `Extension Bridge simulation: queued ${visibleSelectedIds.length} tab${
                    visibleSelectedIds.length > 1 ? "s" : ""
                  } to open simultaneously without popup blockers.`
                )
              }
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-teal-500 text-zinc-950 font-semibold hover:bg-teal-400 transition-colors"
            >
              <ExternalLink className="size-3" />
              <span>Open All as Tabs</span>
            </button>
            <button
              onClick={() => {
                setSelectedIds([]);
                setBridgeNotice(null);
              }}
              className="px-2 py-1 text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {bridgeNotice && (
        <div className="bg-emerald-950/60 border-b border-emerald-500/30 px-4 py-2 flex items-center justify-between gap-3 text-xs text-emerald-200">
          <span>{bridgeNotice}</span>
          <button
            onClick={() => setBridgeNotice(null)}
            className="text-emerald-300/80 hover:text-white shrink-0"
            aria-label="Dismiss notification"
          >
            <X className="size-3.5" />
          </button>
        </div>
      )}

      {/* Content Area */}
      <div className="p-4 sm:p-6 bg-[#0a0c10] min-h-[360px]">
        {filteredLinks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-zinc-400 text-sm">
              {searchQuery
                ? `No links matching "${searchQuery}"`
                : `No links in ${activeFolder}`}
            </p>
            <div className="mt-2 flex items-center gap-3">
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-xs text-teal-400 hover:underline"
                >
                  Reset search
                </button>
              )}
              {activeFolder !== "All" && (
                <button
                  onClick={() => setActiveFolder("All")}
                  className="text-xs text-zinc-400 hover:text-white hover:underline"
                >
                  Show all folders
                </button>
              )}
            </div>
          </div>
        ) : viewMode === "grid" ? (
          /* Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {filteredLinks.map((link) => {
              const isSelected = selectedIds.includes(link.id);
              return (
                <div
                  key={link.id}
                  onClick={() => toggleSelect(link.id)}
                  className={`group relative flex flex-col rounded-xl border transition-all cursor-pointer overflow-hidden ${
                    isSelected
                      ? "border-teal-500/60 bg-teal-950/20 shadow-[0_0_20px_-5px_rgba(45,212,191,0.25)]"
                      : "border-white/[0.08] bg-[#12141a]/90 hover:border-white/20 hover:bg-[#161821]"
                  }`}
                >
                  {/* Image banner or Minimalist typography placeholder */}
                  {showImages ? (
                    <div className="relative h-36 w-full overflow-hidden bg-zinc-900 border-b border-white/[0.06]">
                      <img
                        src={link.image}
                        alt={link.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10">
                          {link.domain}
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                        {link.isFavorite && (
                          <div className="size-6 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                            <Star className="size-3 text-amber-400 fill-amber-400" />
                          </div>
                        )}
                        <div className="size-6 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10">
                          {isSelected ? (
                            <CheckSquare className="size-3.5 text-teal-400" />
                          ) : (
                            <Square className="size-3.5 text-zinc-400 opacity-60 group-hover:opacity-100" />
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Minimal Plain Text Placeholder when Images are toggled OFF */
                    <div className="px-4 pt-3.5 pb-2 flex items-center justify-between border-b border-white/[0.04] bg-white/[0.02]">
                      <span className="text-xs font-mono text-teal-400/90">{link.domain}</span>
                      <div className="flex items-center gap-1.5">
                        {link.isFavorite && <Star className="size-3 text-amber-400 fill-amber-400" />}
                        {isSelected ? (
                          <CheckSquare className="size-3.5 text-teal-400" />
                        ) : (
                          <Square className="size-3.5 text-zinc-500" />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-teal-300 transition-colors line-clamp-1">
                        {link.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {link.description}
                      </p>
                    </div>

                    <div className="mt-3.5 pt-3 border-t border-white/[0.04] flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                          📁 {link.folder}
                        </span>
                        {link.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <ArrowUpRight className="size-3.5 text-zinc-500 group-hover:text-teal-300 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* List View */
          <div className="divide-y divide-white/[0.06] rounded-xl border border-white/[0.08] bg-[#12141a]/80 overflow-hidden">
            {filteredLinks.map((link) => {
              const isSelected = selectedIds.includes(link.id);
              return (
                <div
                  key={link.id}
                  onClick={() => toggleSelect(link.id)}
                  className={`flex items-center justify-between gap-4 p-3.5 cursor-pointer transition-colors ${
                    isSelected ? "bg-teal-950/30" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {isSelected ? (
                      <CheckSquare className="size-4 text-teal-400 flex-shrink-0" />
                    ) : (
                      <Square className="size-4 text-zinc-500 flex-shrink-0" />
                    )}
                    {link.isFavorite && (
                      <Star className="size-3.5 text-amber-400 fill-amber-400 flex-shrink-0" />
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-zinc-200 truncate">{link.title}</p>
                      <p className="text-xs text-zinc-500 truncate">{link.domain} • 📁 {link.folder}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {link.tags.map((t) => (
                      <span key={t} className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 bg-white/[0.04] px-1.5 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                    <ArrowUpRight className="size-4 text-zinc-500" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Interactive Footer Note */}
      <div className="border-t border-white/[0.08] bg-[#0c0e13] px-4 py-2.5 flex items-center justify-between gap-2 text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5">
          <Sparkles className="size-3 text-teal-400 shrink-0" />
          <span>Click cards to select • Toggle &quot;Images: On/Minimal&quot; • Test search syntax above</span>
        </span>
        <span className="font-mono text-zinc-500 shrink-0">
          {filteredLinks.length} of {SAMPLE_LINKS.length} links shown
        </span>
      </div>
    </div>
  );
}
