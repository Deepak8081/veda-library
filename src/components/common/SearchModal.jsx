import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, BookOpen, Layers, Sparkles, ArrowRight, ExternalLink, Flame, Scroll } from "lucide-react";
import { MASTER_CATEGORIES } from "../../data/megaMenuData.js";
import { FOUR_VEDAS, TOPIC_CHIPS, GRANTHA_ARCHIVE } from "../../data/libraryHomeData.js";

export default function SearchModal({ isOpen, onClose, initialQuery = "" }) {
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery || "");
      setTimeout(() => inputRef.current?.focus(), 50);
      const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, initialQuery, onClose]);

  if (!isOpen) return null;

  const normalized = query.trim().toLowerCase();

  // Search matches
  const matchedCategories = MASTER_CATEGORIES.filter(
    (c) =>
      c.title.toLowerCase().includes(normalized) ||
      c.enTitle.toLowerCase().includes(normalized) ||
      c.tagline.toLowerCase().includes(normalized)
  );

  const matchedVedas = FOUR_VEDAS.filter(
    (v) =>
      v.name.toLowerCase().includes(normalized) ||
      v.enName.toLowerCase().includes(normalized) ||
      v.desc.toLowerCase().includes(normalized)
  );

  const matchedTopics = TOPIC_CHIPS.filter((t) =>
    t.name.toLowerCase().includes(normalized)
  );

  const matchedGranthas = GRANTHA_ARCHIVE.filter(
    (g) =>
      g.name.toLowerCase().includes(normalized) ||
      g.enName.toLowerCase().includes(normalized) ||
      g.author.toLowerCase().includes(normalized) ||
      g.summary.toLowerCase().includes(normalized)
  );

  const hasResults =
    matchedCategories.length > 0 ||
    matchedVedas.length > 0 ||
    matchedTopics.length > 0 ||
    matchedGranthas.length > 0;

  const handleSelectResult = (path) => {
    onClose();
    if (path) navigate(path);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-3 sm:px-4 bg-black/65 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#fffdfa] rounded-2xl shadow-2xl border-2 border-amber-300/80 overflow-hidden z-10 flex flex-col max-h-[82vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-amber-200/80 bg-[#fff8ea]">
          <Search className="w-5 h-5 text-amber-700 mr-3 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Veda, Grantha, Mantra, Shloka, Topic..."
            className="w-full bg-transparent text-stone-900 placeholder:text-stone-400 focus:outline-none text-sm sm:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-stone-400 hover:text-stone-700 rounded-full mr-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-4 text-left">
          {!query ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-800/80 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>लोकप्रिय खोज (Popular Search Suggestions)</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Rigveda", path: "/library/veda/rigveda" },
                  { name: "Gayatri Mantra", path: "/library/veda/rigveda/agnisukta" },
                  { name: "Bhagavad Gita", path: "/library/collections/vedic-collection" },
                  { name: "Rudrabhisheka", path: "/library/puja/shaiva/rudrabhisheka" },
                  { name: "16 Samskaras", path: "/library/collections/samskara-collection" },
                  { name: "Agnihotra", path: "/library/collections/yagya-collection" },
                  { name: "Upanishads", path: "/library/veda" },
                  { name: "Jyotisha", path: "/library/collections/jyotisha-collection" },
                  { name: "Vastu Shastra", path: "/library/knowledge" }
                ].map((sug) => (
                  <button
                    key={sug.name}
                    onClick={() => handleSelectResult(sug.path)}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 hover:border-amber-400 transition-all cursor-pointer shadow-2xs"
                  >
                    {sug.name}
                  </button>
                ))}
              </div>
            </div>
          ) : !hasResults ? (
            <div className="py-12 text-center text-stone-500">
              <p className="text-sm font-medium">"{query}" के लिए कोई परिणाम नहीं मिला।</p>
              <p className="text-xs text-stone-400 mt-1">
                कृपया अन्य कीवर्ड, वेद, सूक्त या ग्रंथ का नाम खोजें (उदा. Rigveda, Gita, Rudra, Agni)।
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Veda Matches */}
              {matchedVedas.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900/80 mb-2 flex items-center gap-1.5">
                    <Scroll className="w-3.5 h-3.5 text-amber-700" />
                    <span>वेद (The Vedas)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedVedas.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => handleSelectResult(`/library/veda/${v.id}`)}
                        className="p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all flex items-start gap-2.5 cursor-pointer group shadow-2xs"
                      >
                        <BookOpen className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0 group-hover:text-amber-800" />
                        <div>
                          <p className="text-sm font-bold text-stone-900 group-hover:text-amber-900">
                            {v.name} <span className="text-xs text-stone-500 font-normal">({v.enName})</span>
                          </p>
                          <p className="text-xs text-stone-500 line-clamp-1">{v.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Master Categories Matches */}
              {matchedCategories.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900/80 mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-700" />
                    <span>मुख्य श्रेणियाँ (Main Categories)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedCategories.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => handleSelectResult(c.route || "/library/knowledge")}
                        className="p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all flex items-start gap-2.5 cursor-pointer group shadow-2xs"
                      >
                        <Layers className="w-4 h-4 text-amber-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-stone-900 group-hover:text-amber-900">
                            {c.title} <span className="text-xs text-stone-500 font-normal">({c.enTitle})</span>
                          </p>
                          <p className="text-xs text-stone-500 line-clamp-1">{c.tagline}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Granthas Matches */}
              {matchedGranthas.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900/80 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                    <span>ग्रंथ संग्रह (Grantha Archive)</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {matchedGranthas.map((g) => (
                      <div
                        key={g.name}
                        onClick={() => handleSelectResult("/library/collections")}
                        className="p-3 rounded-xl bg-white border border-stone-200 hover:border-amber-400 hover:bg-amber-50/50 transition-all flex items-start gap-2.5 cursor-pointer group shadow-2xs"
                      >
                        <BookOpen className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-stone-900 group-hover:text-amber-900">{g.name}</p>
                          <p className="text-xs text-stone-500 line-clamp-1">{g.author} • {g.summary}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Topics Matches */}
              {matchedTopics.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900/80 mb-2">
                    विषय (Topics)
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {matchedTopics.map((t) => (
                      <button
                        key={t.name}
                        onClick={() => handleSelectResult("/library/veda")}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-stone-800 border border-stone-200 hover:border-amber-400 hover:bg-amber-50 transition-all cursor-pointer"
                      >
                        #{t.name} ({t.count})
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Quick Info */}
        <div className="px-4 py-2.5 bg-amber-50/70 border-t border-amber-200/70 flex items-center justify-between text-xs text-stone-500 font-medium">
          <span>Veda Library Digital Archive</span>
          <span>Press ESC or click outside to close</span>
        </div>
      </div>
    </div>
  );
}
