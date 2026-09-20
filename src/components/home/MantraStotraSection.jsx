import React, { useState } from "react";
import { ArrowRight, Volume2, Sparkles, Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { MANTRA_CATEGORIES, FEATURED_MANTRAS } from "../../data/libraryHomeData.js";

export default function MantraStotraSection({ onNavigateKnowledge }) {
  const [activeCategory, setActiveCategory] = useState("वैदिक मंत्र");
  const [showAll, setShowAll] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index, e) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const displayedMantras = showAll ? FEATURED_MANTRAS : FEATURED_MANTRAS.slice(0, 3);

  return (
    <section id="mantras" className="py-12 sm:py-16 bg-[#fffaf0] border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                DIVINE VIBRATIONS
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Mantra, Sukta & Stotra
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-0.5">
              वैदिक मंत्रों, सूक्तों, स्तोत्रों और प्रार्थनाओं का structured collection। शुद्ध स्वर, पदच्छेद व अर्थ सहित।
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            {/* Dynamic View All (6 Mantras) / Show Less Toggle Button */}
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full bg-amber-100/70 hover:bg-amber-200/80 text-amber-950 border border-amber-300/70 transition-all cursor-pointer shadow-2xs"
            >
              <span>{showAll ? "Show Less (३ मुख्य मंत्र)" : "View All (६+ मंत्र व स्तोत्र)"}</span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 text-amber-900" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-amber-900" />
              )}
            </button>

            {/* Direct Link to Mantra Archive */}
            <button
              type="button"
              onClick={onNavigateKnowledge}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-950 px-2 py-1 transition-colors cursor-pointer group"
            >
              <span>All Mantras</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8">
          {MANTRA_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-amber-700 text-white shadow-xs font-bold"
                  : "bg-white text-stone-700 border border-stone-200 hover:border-amber-300 hover:bg-amber-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Mantras Grid (3 cards default, 6 cards when View All clicked) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fadeIn">
          {displayedMantras.map((mantra, idx) => (
            <div
              key={idx}
              className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-white border border-amber-200/80 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all duration-300"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-2.5 border-b border-amber-100 mb-3">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {mantra.title}
                    </h3>
                    <span className="text-[11px] text-amber-800/80 font-medium">
                      {mantra.source}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleCopy(mantra.sanskrit, idx, e)}
                    title="Copy Sanskrit text"
                    className="p-1.5 rounded-full hover:bg-amber-50 text-stone-400 hover:text-amber-800 transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Shastric Meta Badges */}
                <div className="flex flex-wrap gap-1 mb-3 text-[10px] text-stone-500">
                  <span className="px-1.5 py-0.5 rounded bg-stone-100">
                    ऋषि: <strong className="text-stone-700">{mantra.rishi}</strong>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-stone-100">
                    देवता: <strong className="text-stone-700">{mantra.devata}</strong>
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-stone-100">
                    छंद: <strong className="text-stone-700">{mantra.chandas}</strong>
                  </span>
                </div>

                {/* Sacred Sanskrit Text */}
                <div className="p-3.5 rounded-xl bg-[#fffdf8] border border-amber-100/90 text-stone-900 mb-3 shadow-2xs">
                  <p className="font-devanagari text-sm sm:text-base font-bold leading-relaxed text-amber-950 text-center whitespace-pre-line">
                    {mantra.sanskrit}
                  </p>
                </div>

                {/* Translation */}
                <p className="text-[11px] text-stone-600 font-devanagari leading-relaxed line-clamp-3">
                  <strong className="text-stone-700">भावार्थ:</strong> {mantra.translation}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onNavigateKnowledge}
                  className="text-xs font-bold text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Explore Recitation & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
