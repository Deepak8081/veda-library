import React, { useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
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
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Explore Knowledge
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-0.5">
              अपनी रुचि के अनुसार किसी भी ज्ञान परंपरा से शुरुआत करें।
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Toggle View All / View Less (12 to 18 inline) */}
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-950 border border-amber-300 transition-all cursor-pointer shadow-2xs"
            >
              <span>{showAll ? "Show Less (१२ श्रेणियाँ)" : "View All (१८ श्रेणियाँ)"}</span>
              {showAll ? (
                <ChevronUp className="w-3.5 h-3.5 text-amber-900" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5 text-amber-900" />
              )}
            </button>

            {/* Direct Link to Dedicated Knowledge Page */}
            <button
              type="button"
              onClick={onNavigateKnowledge}
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-amber-800 hover:text-amber-950 px-2.5 py-1.5 rounded-full hover:bg-amber-50 transition-colors cursor-pointer group"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Dynamic Compact Cards Grid (12 default, or 18 when View All clicked) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3.5 animate-fadeIn">
          {displayedCards.map((card) => {
            const IconComponent = SACRED_ICON_MAP[card.id];
            return (
              <button
                key={card.id}
                type="button"
                onClick={() => onSelectCategory ? onSelectCategory(card.id) : onNavigateKnowledge()}
                className="group relative flex flex-col items-center justify-center text-center p-3 sm:p-3.5 rounded-xl bg-white border border-stone-200/80 hover:border-amber-400/90 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer w-full"
              >
                {/* Circular Pastel Tinted Icon Badge */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-2 transition-transform duration-300 group-hover:scale-105 ${card.badgeBg}`}
                >
                  {IconComponent ? (
                    <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${card.iconColor}`} />
                  ) : null}
                </div>

                {/* English Category Title */}
                <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-tight">
                  {card.title}
                </h3>

                {/* Subtitle in Parentheses */}
                <span className="text-[10px] sm:text-[11px] text-stone-500 font-medium mt-0.5 leading-snug">
                  {card.subtitle}
                </span>

                {/* Devanagari Category Badge */}
                <span className="mt-1.5 text-[9px] sm:text-[10px] font-semibold font-devanagari px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors">
                  {card.hindiTitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Optional Helper Strip when expanded */}
        {showAll && (
          <div className="mt-5 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
            <span className="text-stone-700 font-medium flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>सभी १८ ज्ञान शाखाओं में १०,०००+ मंत्र, श्लोक व प्रामाणिक ग्रंथ संकलित हैं।</span>
            </span>
            <button
              type="button"
              onClick={onNavigateKnowledge}
              className="font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Knowledge Hub with Sidebar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
