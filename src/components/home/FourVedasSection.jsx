import React from "react";
import { ArrowRight, BookOpen, Layers } from "lucide-react";
import { FOUR_VEDAS } from "../../data/libraryHomeData.js";

// Card images
import rigvedaImg from "../../assets/images/library/cards/card-rigveda.jpg";
import yajurvedaImg from "../../assets/images/library/cards/card-yajurveda.jpg";
import samavedaImg from "../../assets/images/library/cards/card-samaveda.jpg";
import atharvavedaImg from "../../assets/images/library/cards/card-atharvaveda.jpg";

const VEDA_IMAGES = {
  "card-rigveda.jpg": rigvedaImg,
  "card-yajurveda.jpg": yajurvedaImg,
  "card-samaveda.jpg": samavedaImg,
  "card-atharvaveda.jpg": atharvavedaImg
};

export default function FourVedasSection({ onNavigateKnowledge }) {
  return (
    <section id="four-vedas" className="py-12 sm:py-16 bg-[#fffaf0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100/70 px-2.5 py-0.5 rounded-full border border-amber-200">
            THE APURUSHEYA SHRUTI
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1.5">
            चारों वेदों को Explore करें
          </h2>
          <p className="font-serif text-sm sm:text-base text-amber-900/80 font-medium">
            The Four Pillars of Vedic Knowledge
          </p>
          <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-1 max-w-xl mx-auto leading-relaxed">
            प्रत्येक वेद की अपनी पाठ-परंपरा, संरचना और विषय-वस्तु है। अपनी रुचि के अनुसार शुरुआत करें।
          </p>
        </div>

        {/* 4 Compact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {FOUR_VEDAS.map((veda) => {
            const imgSrc = VEDA_IMAGES[veda.imageKey] || rigvedaImg;
            return (
              <div
                key={veda.id}
                onClick={onNavigateKnowledge}
                className="group flex flex-col bg-white rounded-xl border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                {/* 16:9 Image Frame */}
                <div className="relative aspect-16/9 overflow-hidden bg-stone-900">
                  <img
                    src={imgSrc}
                    alt={veda.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                    {veda.priest}
                  </span>
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {veda.name}
                      </h3>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                        {veda.enName}
                      </span>
                    </div>

                    <p className="text-[11px] text-stone-600 font-devanagari mt-1.5 leading-relaxed line-clamp-2">
                      {veda.desc}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-stone-100 text-[10px] text-stone-500 space-y-0.5">
                      <p className="truncate">
                        <strong className="text-stone-700">संरचना:</strong> {veda.stats}
                      </p>
                      <p className="truncate">
                        <strong className="text-stone-700">शाखा:</strong> {veda.shakha}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onNavigateKnowledge}
                    className="mt-3.5 w-full py-1.5 rounded-lg text-center text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Explore {veda.enName}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
