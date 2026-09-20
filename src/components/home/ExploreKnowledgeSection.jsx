import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { EXPLORE_KNOWLEDGE_CARDS, ALL_MASTER_TAXONOMY_CARDS } from "../../data/libraryHomeData.js";
import { SACRED_ICON_MAP } from "../common/SacredIcons.jsx";

export default function ExploreKnowledgeSection({ onSelectCategory, onNavigateKnowledge }) {
  const [showAll, setShowAll] = useState(false);

  const displayedCards = showAll ? ALL_MASTER_TAXONOMY_CARDS : EXPLORE_KNOWLEDGE_CARDS;

  return (
    <section id="categories" className="py-10 sm:py-14 bg-[#fffaf0] border-b border-amber-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                DISCOVERY & TAXONOMY
              </span>
            </div>
            {/* Document-specified heading */}
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Explore the Library
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-0.5">
              अपनी रुचि के अनुसार किसी भी ज्ञान परंपरा से शुरुआत करें।
            </p>
          </div>

          {/* Toggle Show 8 / Show All 18 */}
          <div className="self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-all cursor-pointer shadow-2xs"
            >
              <span>{showAll ? "Show Less" : "View All (१८ श्रेणियाँ)"}</span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 text-amber-900" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-amber-900" />
              )}
            </button>
          </div>
        </div>

        {/* Cards Grid — 8 default (document-specified), 18 on View All */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 animate-fadeIn">
          {displayedCards.map((card) => {
            const IconComponent = SACRED_ICON_MAP[card.id];
            return (
              <button
                key={card.id}
                type="button"
                onClick={() =>
                  onSelectCategory ? onSelectCategory(card.id) : onNavigateKnowledge()
                }
                className="group relative flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-xl bg-white border border-stone-200/80 hover:border-amber-400/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full"
              >
                {/* Circular Pastel Tinted Icon Badge */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-105 ${card.badgeBg}`}
                >
                  {IconComponent ? (
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${card.iconColor}`} />
                  ) : null}
                </div>

                {/* English Category Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-tight">
                  {card.title}
                </h3>

                {/* Subtitle */}
                <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5 leading-snug">
                  {card.subtitle}
                </span>

                {/* Hindi Description — new per-card description from document */}
                {card.hindiDesc && (
                  <p className="mt-1.5 text-[9px] sm:text-[10px] font-devanagari text-stone-500 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2 px-1">
                    {card.hindiDesc}
                  </p>
                )}

                {/* Explore CTA */}
                <span className="mt-2.5 text-[10px] font-bold text-amber-700 group-hover:text-amber-900 flex items-center gap-0.5 transition-colors">
                  Explore <ArrowRight className="w-2.5 h-2.5" />
                </span>
              </button>
            );
          })}
        </div>

        {/* Document-specified: View All Categories → button at bottom */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={onNavigateKnowledge}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-amber-300 hover:bg-amber-50 hover:border-amber-500 text-amber-900 font-bold text-sm shadow-2xs hover:shadow-sm transition-all cursor-pointer group"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
