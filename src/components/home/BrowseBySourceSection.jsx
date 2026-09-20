import React from "react";
import { BROWSE_BY_SOURCE } from "../../data/libraryHomeData.js";

export default function BrowseBySourceSection({ onNavigateKnowledge }) {
  return (
    <section className="py-8 bg-[#fffdf8] border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-3">
          Browse by Source
        </h2>

        {/* 2 Rows of 5 Rounded Buttons (Compact & Sleek) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {BROWSE_BY_SOURCE.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={onNavigateKnowledge}
              className="px-3 py-2 rounded-xl bg-white border border-stone-200/90 hover:border-amber-400 hover:bg-amber-50/60 shadow-2xs hover:shadow-xs text-center font-serif text-xs sm:text-sm font-semibold text-stone-800 hover:text-amber-900 transition-all cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
