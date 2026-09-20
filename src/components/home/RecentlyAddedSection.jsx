import React from "react";
import { ArrowRight, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { RECENTLY_ADDED } from "../../data/libraryHomeData.js";

// Card thumbnails
import yagyaFireImg from "../../assets/images/library/cards/card-yagya-fire.jpg";
import pujaImg from "../../assets/images/library/cards/card-puja.jpg";
import rigvedaImg from "../../assets/images/library/cards/card-rigveda.jpg";

const THUMBNAILS = {
  "card-yagya-fire.jpg": yagyaFireImg,
  "card-puja.jpg": pujaImg,
  "card-rigveda.jpg": rigvedaImg
};

export default function RecentlyAddedSection({ onSelectArticle }) {
  return (
    <section id="recent" className="py-12 sm:py-16 bg-[#fffaf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Recently Added
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 font-devanagari mt-0.5">
              हाल ही में जोड़े गए प्रामाणिक वैदिक एवं शास्त्रीय आलेख।
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectArticle && onSelectArticle("rudrabhisheka")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-amber-800 hover:text-amber-950 group cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Vertical List (Matching Client Reference Image) */}
        <div className="space-y-3">
          {RECENTLY_ADDED.map((item) => {
            const thumb = THUMBNAILS[item.imageKey] || yagyaFireImg;
            return (
              <div
                key={item.id}
                onClick={() => onSelectArticle && onSelectArticle(item.id)}
                className="group flex items-center justify-between p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-amber-300 shadow-2xs hover:shadow-sm transition-all cursor-pointer"
              >
                {/* Left: Thumbnail & Info */}
                <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-stone-900 flex-shrink-0 shadow-2xs">
                    <img
                      src={thumb}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors truncate">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-stone-500 font-medium">
                        {item.category}
                      </span>

                      {/* Status Badges (Matching Reference Image) */}
                      {item.statusType === "verified" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          {item.statusBadge}
                        </span>
                      )}
                      {item.statusType === "approved" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3" />
                          {item.statusBadge}
                        </span>
                      )}
                      {item.statusType === "review" && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                          <AlertCircle className="w-3 h-3" />
                          {item.statusBadge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Time Ago */}
                <div className="flex items-center gap-1 text-xs text-stone-400 font-medium flex-shrink-0 pl-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.timeAgo}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
