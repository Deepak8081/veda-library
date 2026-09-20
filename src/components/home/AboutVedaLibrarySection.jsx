import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function AboutVedaLibrarySection({ onNavigateKnowledge }) {
  return (
    <section id="about" className="py-12 sm:py-16 bg-[#fffdf8] border-b border-amber-200/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 text-[11px] font-bold uppercase tracking-widest text-amber-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>VEDA LIBRARY</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 leading-tight">
            एक स्थान पर भारतीय ज्ञान परंपरा
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <p className="font-devanagari text-sm sm:text-base text-stone-700 leading-relaxed">
            Veda Library भारतीय वैदिक एवं शास्त्रीय ज्ञान को व्यवस्थित रूप से संग्रहित, संरक्षित और समझने के लिए बनाया गया एक digital knowledge archive है।
          </p>
          <p className="font-devanagari text-sm sm:text-base text-stone-600 leading-relaxed">
            यहाँ वेदों से लेकर उपनिषद, पुराण, दर्शन, मंत्र, स्तोत्र, ज्योतिष, वास्तु, संस्कार, तीर्थ और अन्य शास्त्रीय विषयों तक ज्ञान को विषय, ग्रंथ और संदर्भ के अनुसार explore किया जा सकता है।
          </p>
          <p className="font-devanagari text-sm sm:text-base text-stone-600 leading-relaxed">
            हमारा उद्देश्य केवल सामग्री को संग्रहित करना नहीं, बल्कि उसे इस प्रकार व्यवस्थित करना है कि विद्यार्थी, साधक, शोधकर्ता और सामान्य पाठक अपने आवश्यक विषय तक आसानी से पहुँच सकें।
          </p>

          {/* CTA */}
          <div className="pt-4">
            <button
              type="button"
              onClick={onNavigateKnowledge}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md shadow-amber-600/25 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Explore Knowledge</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
