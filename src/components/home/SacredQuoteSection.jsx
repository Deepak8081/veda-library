import React from "react";
import { SACRED_QUOTE } from "../../data/libraryHomeData.js";
import templeHeroImg from "../../assets/images/library/banners/banner-temple-hero.jpg";

export default function SacredQuoteSection() {
  return (
    <section className="py-12 bg-[#fffdf8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-200/80 shadow-md bg-gradient-to-r from-amber-50/90 via-[#fff8eb] to-amber-50/90 p-8 sm:p-12 text-center">
          {/* Subtle Temple Architecture Texture */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply">
            <img
              src={templeHeroImg}
              alt="Temple Architecture Silhouette"
              className="w-full h-full object-cover object-bottom"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Sanskrit Shloka */}
            <p className="font-devanagari text-xl sm:text-2xl md:text-3xl font-bold text-amber-950 mb-3 tracking-wide leading-relaxed">
              “{SACRED_QUOTE.sanskrit}”
            </p>

            {/* English Philosophical Translation */}
            <p className="font-serif italic text-base sm:text-lg text-stone-700 mb-4 leading-normal">
              "{SACRED_QUOTE.translation}"
            </p>

            {/* Source Reference */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200/50 border border-amber-300/60 text-xs font-semibold text-amber-900">
              <span>{SACRED_QUOTE.source}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
