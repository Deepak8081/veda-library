import React, { useState } from "react";
import {
  Search,
  ArrowRight,
  Sparkles,
  BookOpen,
  Layers,
  FileCheck,
  Flame,
  Sun
} from "lucide-react";
import { HERO_CONTENT, TRUST_STRIP_ITEMS } from "../../data/libraryHomeData.js";
import heroGhatImg from "../../assets/images/library/banners/banner-temple-ghat.jpg";

const TRUST_ICONS = {
  BookOpen,
  Layers,
  FileCheck,
  Flame
};

export default function HeroSection({ onOpenSearch, onNavigateKnowledge, onNavigateCollections }) {
  const [localQuery, setLocalQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onOpenSearch) onOpenSearch(localQuery);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#160b05] via-[#221209] to-[#120804] text-white pt-14 pb-16 md:pt-20 md:pb-22 border-b-2 border-amber-600/70 shadow-lg">
      {/* Background Temple Ghats Image with Sacred Golden Twilight Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroGhatImg}
          alt="Vedic Temple Architecture and River Ghats"
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-102 transition-transform duration-1000"
        />
        {/* Multilayered radial and linear dark amber gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120804] via-amber-950/60 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-black/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow with Glowing Lotus/Sparkle Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/25 to-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold tracking-[0.18em] uppercase mb-4 backdrop-blur-md shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>{HERO_CONTENT.eyebrow}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        </div>

        {/* Main Title (Regal Sanskrit & Garamond Hierarchy) */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.04em] text-white mb-2 leading-none drop-shadow-md">
          VEDA LIBRARY
        </h1>

        <p className="font-serif text-lg sm:text-2xl md:text-3xl text-amber-200/95 font-medium mb-3 tracking-wide">
          {HERO_CONTENT.enTitle}
        </p>

        {/* Devanagari Sacred Subtitle */}
        <p className="font-devanagari text-sm sm:text-base md:text-lg text-amber-100/85 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
          {HERO_CONTENT.tagline}
        </p>

        {/* Big Prominent Search Box (Matching Reference Image with Premium Aura) */}
        <form
          onSubmit={handleSearchSubmit}
          className="relative max-w-2xl mx-auto mb-4 group"
        >
          <div className="relative flex items-center bg-white/98 backdrop-blur-xl rounded-full shadow-2xl border-2 border-amber-400/80 group-hover:border-amber-400 transition-all p-1.5 pl-4 sm:pl-5 ring-4 ring-amber-500/15">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 flex-shrink-0 mr-2.5" />
            <input
              type="text"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              onClick={() => onOpenSearch && onOpenSearch(localQuery)}
              placeholder={HERO_CONTENT.searchPlaceholder}
              className="w-full bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none text-xs sm:text-sm md:text-base font-medium pr-2"
            />
            <button
              type="submit"
              className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-600 via-amber-650 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            >
              <span>Search</span>
              <Search className="w-3.5 h-3.5 hidden sm:inline" />
            </button>
          </div>
        </form>

        {/* Popular Search Suggestions */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 text-[11px] sm:text-xs text-amber-200/80 mb-8 max-w-2xl mx-auto">
          <span className="font-bold text-amber-300">Popular Searches:</span>
          {HERO_CONTENT.popularSuggestions.map((item, idx) => (
            <React.Fragment key={item}>
              <button
                type="button"
                onClick={() => onOpenSearch && onOpenSearch(item)}
                className="hover:text-white hover:underline transition-colors focus:outline-none cursor-pointer font-medium"
              >
                {item}
              </button>
              {idx < HERO_CONTENT.popularSuggestions.length - 1 && (
                <span className="text-amber-500/50">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Dual CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <button
            type="button"
            onClick={onNavigateKnowledge}
            className="px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-550 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-stone-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-600/35 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{HERO_CONTENT.primaryCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onNavigateCollections}
            className="px-6 sm:px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-amber-300/60 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{HERO_CONTENT.secondaryCta}</span>
          </button>
        </div>

        {/* 4 Trust Strip Pillars Placed Directly On Top of the Hero Image Backdrop */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-black/50 backdrop-blur-md border border-amber-400/30 p-3.5 sm:p-4 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {TRUST_STRIP_ITEMS.map((item, idx) => {
              const IconComponent = TRUST_ICONS[item.icon] || BookOpen;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 px-2 sm:px-3 py-1.5 first:pt-0 md:first:pt-1.5 text-left"
                >
                  <div
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center flex-shrink-0 shadow-xs bg-amber-500/20 text-amber-300 border border-amber-400/30"
                  >
                    <IconComponent className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-amber-300" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-white leading-tight truncate">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-amber-100/80 font-medium mt-0.5 font-devanagari truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
