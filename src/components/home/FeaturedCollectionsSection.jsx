import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { FEATURED_COLLECTIONS } from "../../data/libraryHomeData.js";

// Import banner images for collections
import sanctumImg from "../../assets/images/library/banners/banner-sanctum.png";
import sacredDetailsImg from "../../assets/images/library/banners/banner-sacred-details.png";
import fireRitualImg from "../../assets/images/library/banners/banner-fire-ritual.png";
import kashiGhatImg from "../../assets/images/library/banners/banner-kashi-ghat.png";

const COLLECTION_IMAGES = {
  "banner-sanctum.png": sanctumImg,
  "banner-sacred-details.png": sacredDetailsImg,
  "banner-fire-ritual.png": fireRitualImg,
  "banner-kashi-ghat.png": kashiGhatImg
};

export default function FeaturedCollectionsSection({ onNavigateCollections }) {
  return (
    <section id="featured-collections" className="py-10 sm:py-14 bg-[#fffdf8] border-y border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-2">
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800">
                CURATED ARCHIVES
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Featured Collections
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-0.5">
              इस समय Library में सर्वाधिक पढ़े और explore किए जा रहे प्रमुख संग्रह।
            </p>
          </div>

          <button
            type="button"
            onClick={onNavigateCollections}
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-amber-800 hover:text-amber-950 group self-start sm:self-auto cursor-pointer"
          >
            <span>View All Collections</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_COLLECTIONS.map((col) => {
            const imgSrc = COLLECTION_IMAGES[col.imageKey] || sanctumImg;
            return (
              <div
                key={col.id}
                onClick={onNavigateCollections}
                className="group flex flex-col bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-300 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* 16:9 Thumbnail Image */}
                <div className="relative aspect-16/9 overflow-hidden bg-stone-900">
                  <img
                    src={imgSrc}
                    alt={col.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-black/60 backdrop-blur-xs text-white border border-white/20">
                    {col.articlesCount}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {col.title}
                    </h3>
                    <p className="text-[11px] font-devanagari text-stone-500 font-medium mt-0.5">
                      {col.hindiTitle}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-1.5 line-clamp-2 leading-relaxed">
                      {col.description}
                    </p>
                  </div>

                  <div className="pt-2.5 mt-2 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 group-hover:text-amber-900 flex items-center gap-1 transition-colors">
                      Explore →
                    </span>
                    <span className="text-[10px] text-stone-400 font-medium">
                      Verified Source
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
