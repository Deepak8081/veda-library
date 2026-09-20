import React from "react";
import { BookOpen, Layers, FileCheck, Flame } from "lucide-react";
import { TRUST_STRIP_ITEMS } from "../../data/libraryHomeData.js";

const ICONS = {
  BookOpen,
  Layers,
  FileCheck,
  Flame
};

export default function TrustStrip() {
  return (
    <div className="bg-[#fffdf8] border-b border-amber-200/60 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-amber-100">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const IconComponent = ICONS[item.icon] || BookOpen;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 px-2 sm:px-4 py-2 first:pt-0 md:first:pt-2"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 shadow-2xs"
                  style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-500 font-medium mt-0.5 font-devanagari">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
