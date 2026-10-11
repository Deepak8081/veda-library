import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  BookOpen,
  Scroll,
  Sparkles,
  Info,
} from "lucide-react";

/**
 * Universal Scripture & Sutra Reader Component
 * Sourced from authentic shastras, with:
 * - 10 shlokas per page by default, 20 per page option
 * - Numbered pagination, previous and next navigation
 * - Counter "Showing X–Y of Z Shlokas/Sutras"
 * - Chapter/Section selector
 * - Direct navigation to verse or page
 * - Sanskrit in Devanagari, IAST transliteration, Hindi and English translations, and Shastric commentary
 */
export default function ScriptureReaderView({ scripture, initialChapterId = null }) {
  if (!scripture || !scripture.chapters || scripture.chapters.length === 0) {
    return (
      <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center text-stone-600 font-devanagari">
        <BookOpen className="w-8 h-8 text-amber-500 mx-auto mb-2" />
        <p className="text-base font-bold text-stone-800">इस ग्रंथ का पाठ संकलन लोड हो रहा है...</p>
      </div>
    );
  }

  const [selectedChapterId, setSelectedChapterId] = useState(
    initialChapterId && scripture.chapters.some((c) => c.id === initialChapterId)
      ? initialChapterId
      : scripture.chapters[0]?.id || "",
  );
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [jumpTo, setJumpTo] = useState("");
  const [searchText, setSearchText] = useState("");

  const selectedChapter =
    scripture.chapters.find((chapter) => chapter.id === selectedChapterId) ||
    scripture.chapters[0];

  useEffect(() => {
    if (scripture?.chapters?.length > 0) {
      if (!scripture.chapters.some((c) => c.id === selectedChapterId)) {
        setSelectedChapterId(scripture.chapters[0].id);
      }
    }
  }, [scripture]);

  useEffect(() => {
    if (initialChapterId && scripture.chapters.some((c) => c.id === initialChapterId)) {
      setSelectedChapterId(initialChapterId);
    }
  }, [initialChapterId]);

  useEffect(() => {
    setCurrentPage(1);
    setJumpTo("");
  }, [selectedChapterId, pageSize]);

  const filteredItems = useMemo(() => {
    if (!selectedChapter) return [];
    if (!searchText.trim()) return selectedChapter.items;

    const q = searchText.trim().toLowerCase();
    return selectedChapter.items.filter((item) => {
      return (
        String(item.number).includes(q) ||
        (item.devanagari && item.devanagari.toLowerCase().includes(q)) ||
        (item.transliteration &&
          item.transliteration.toLowerCase().includes(q)) ||
        (item.hindi && item.hindi.toLowerCase().includes(q)) ||
        (item.english && item.english.toLowerCase().includes(q)) ||
        (item.commentary && item.commentary.toLowerCase().includes(q))
      );
    });
  }, [selectedChapter, searchText]);

  const availableCount = filteredItems.length;
  const totalPages = Math.max(1, Math.ceil(availableCount / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const visibleItems = filteredItems.slice(startIndex, startIndex + pageSize);

  const handleJump = () => {
    const value = Number(jumpTo);
    if (!Number.isFinite(value) || value < 1) return;

    // Check if the user entered a specific verse number in this chapter
    const itemIndex = filteredItems.findIndex(
      (item) => Number(item.number) === value,
    );
    if (itemIndex !== -1) {
      const targetPage = Math.floor(itemIndex / pageSize) + 1;
      setCurrentPage(targetPage);
      return;
    }

    // Otherwise navigate by page number
    const targetPage = Math.min(
      Math.max(1, value <= totalPages ? value : Math.ceil(value / pageSize)),
      totalPages,
    );
    setCurrentPage(targetPage);
  };

  const navigatePage = (direction) => {
    setCurrentPage((prev) =>
      Math.min(Math.max(1, prev + direction), totalPages),
    );
  };

  const isPaginated = totalPages > 1;
  const showPageSizeSelect = availableCount > 10;

  // Pagination window helper
  const getPaginationNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (safePage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (safePage >= totalPages - 3) {
      return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", safePage - 1, safePage, safePage + 1, "...", totalPages];
  };

  return (
    <div className="rounded-3xl border border-stone-200 bg-white p-5 md:p-6 shadow-2xs">
      {/* 1. Header Controls: Chapter Selector & Page Size */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
            अध्याय / खंड / प्रश्न:
          </label>
          <select
            value={selectedChapterId}
            onChange={(e) => setSelectedChapterId(e.target.value)}
            className="rounded-xl border border-stone-200 bg-[#fffaf0] px-3 py-2 text-xs font-medium text-stone-800 focus:border-amber-400 outline-none max-w-full sm:max-w-md"
          >
            {scripture.chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.title} ({chapter.items.length} श्लोक/सूत्र)
              </option>
            ))}
          </select>
          {scripture.chapters.length > 1 && (
            <button
              type="button"
              onClick={() =>
                setSelectedChapterId(scripture.chapters[0]?.id || "")
              }
              className="rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-50 cursor-pointer"
            >
              प्रथम अध्याय
            </button>
          )}
        </div>

        {showPageSizeSelect && (
          <div className="flex flex-wrap items-center gap-2">
            <label className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
              प्रति पृष्ठ श्लोक
            </label>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="rounded-xl border border-stone-200 bg-[#fffaf0] px-3 py-2 text-xs font-medium text-stone-700 focus:border-amber-400 outline-none"
            >
              <option value={10}>10 श्लोक प्रति पृष्ठ (Default)</option>
              <option value={20}>20 श्लोक प्रति पृष्ठ</option>
            </select>
          </div>
        )}
      </div>

      {/* 2. Canonical Info Bar & Search */}
      <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/90 p-3.5 text-xs sm:text-sm text-amber-950 flex flex-col md:flex-row md:items-center justify-between gap-2.5 w-full">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <div>
              <span className="font-bold text-amber-900">शास्त्रीय कुल परिमाण:</span>{" "}
              <span className="font-semibold text-stone-800">{scripture.sourceTotal}</span>
            </div>
            <span className="hidden md:inline text-amber-400">•</span>
            <div>
              <span className="font-bold text-amber-900">वर्तमान अध्याय में उपलब्ध:</span>{" "}
              <span className="font-bold text-amber-800">{availableCount} प्रामाणिक श्लोक/सूत्र</span>{" "}
              <span className="text-stone-600 text-xs font-normal">
                ({selectedChapter?.title})
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-amber-850 bg-amber-100/90 px-2.5 py-1 rounded-lg border border-amber-300">
              {isPaginated ? "क्रमबद्ध पृष्ठीय वाचन (Paginated)" : "सम्पूर्ण पाठांश दृश्य"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <div className="relative min-w-[200px]">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="श्लोक, अनुवाद या सूत्र खोजें..."
              className="w-full pl-8 pr-7 py-2 rounded-xl border border-stone-200 bg-[#fffaf0] text-xs focus:border-amber-400 outline-none font-devanagari"
            />
          </div>
          {searchText && (
            <button
              type="button"
              onClick={() => setSearchText("")}
              className="rounded-xl border border-stone-200 bg-white px-2.5 py-2 text-xs font-bold text-stone-600 hover:bg-stone-50 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* 3. Sub-header Counter & Edition Note */}
      <div className="mt-3 rounded-2xl border border-stone-200 bg-[#fffaf0] p-3 text-xs text-stone-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="font-bold text-stone-700">
            {isPaginated ? "वर्तमान दृश्य:" : "प्रदर्शित पाठांश:"}
          </span>{" "}
          {filteredItems.length > 0 ? (
            isPaginated ? (
              <span className="font-semibold text-amber-900">
                श्लोक {(safePage - 1) * pageSize + 1}–{Math.min(safePage * pageSize, filteredItems.length)} of {filteredItems.length} श्लोक (पृष्ठ {safePage} / {totalPages})
              </span>
            ) : (
              <span className="font-semibold text-amber-900">
                कुल {filteredItems.length} श्लोक (सम्पूर्ण पृष्ठ)
              </span>
            )
          ) : (
            "0 श्लोक"
          )}
        </div>
        <div className="text-[11px] text-stone-500 italic">
          {scripture.editionNote}
        </div>
      </div>

      {/* 4. Top Pagination Controls (if paginated) */}
      {isPaginated && (
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={safePage <= 1}
              onClick={() => navigatePage(-1)}
              className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-50 cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              पिछला (Previous)
            </button>
            <button
              type="button"
              disabled={safePage >= totalPages}
              onClick={() => navigatePage(1)}
              className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-50 cursor-pointer disabled:cursor-not-allowed"
            >
              अगला (Next)
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">
              पृष्ठ {safePage} / {totalPages}
            </div>
            <input
              type="number"
              min="1"
              max={totalPages}
              value={jumpTo}
              onChange={(e) => setJumpTo(e.target.value)}
              placeholder="श्लोक या पृष्ठ"
              className="w-28 rounded-xl border border-stone-200 bg-white px-2.5 py-1.5 text-xs focus:border-amber-400 outline-none"
            />
            <button
              type="button"
              onClick={handleJump}
              className="rounded-xl bg-amber-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-amber-800 cursor-pointer shadow-2xs"
            >
              जाएँ
            </button>
          </div>
        </div>
      )}

      {/* 5. Shloka / Sutra Items List */}
      <div className="mt-5 space-y-5">
        {visibleItems.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center text-sm text-stone-600 font-devanagari">
            इस अध्याय में आपकी खोज से संबंधित कोई श्लोक/सूत्र नहीं मिला।
          </div>
        ) : (
          visibleItems.map((item) => (
            <article
              key={item.number}
              className="rounded-2xl border border-amber-200/80 bg-white p-5 md:p-6 shadow-xs hover:border-amber-300 transition-colors"
            >
              {/* Verse / Sutra Badge Header */}
              <div className="flex items-center justify-between gap-3 border-b border-stone-100 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-900 border border-amber-200">
                    <BookOpen className="w-3 h-3 text-amber-700" />
                    <span>श्लोक / सूत्र {item.number}</span>
                  </span>
                  <span className="text-xs text-stone-500 font-serif">
                    {selectedChapter.title.split("•")[0]?.trim()}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-stone-400">
                  #{item.number}
                </span>
              </div>

              {/* Authentic Devanagari Sanskrit */}
              <div className="rounded-2xl border border-amber-200/90 bg-[#fffdf8] p-4 sm:p-5 shadow-2xs">
                <p className="font-devanagari text-lg sm:text-xl font-bold leading-[2.1] text-amber-950 whitespace-pre-line">
                  {item.devanagari}
                </p>
              </div>

              {/* Roman IAST Transliteration */}
              {item.transliteration && (
                <div className="mt-3.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs sm:text-sm text-stone-700 font-serif italic leading-relaxed">
                  <span className="font-bold text-stone-800 not-italic block mb-0.5 text-[11px] uppercase tracking-wider">
                    रोमन लिप्यंतरण (IAST Transliteration):
                  </span>
                  {item.transliteration}
                </div>
              )}

              {/* Hindi Translation */}
              {item.hindi && (
                <div className="mt-3.5 p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs sm:text-sm text-stone-900 font-devanagari leading-relaxed">
                  <span className="font-bold text-amber-900 block mb-1 text-xs">
                    हिंदी भावार्थ (Hindi Translation):
                  </span>
                  {item.hindi}
                </div>
              )}

              {/* English Translation */}
              {item.english && (
                <div className="mt-3 p-3 rounded-xl bg-stone-50/70 border border-stone-200/60 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <span className="font-bold text-stone-800 block mb-0.5 text-xs">
                    English Translation:
                  </span>
                  {item.english}
                </div>
              )}

              {/* Commentary & Shastric Significance */}
              {item.commentary && (
                <div className="mt-3.5 rounded-xl border border-amber-300/60 bg-amber-50/70 p-3.5 text-xs sm:text-sm leading-relaxed text-stone-800 font-devanagari">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-1 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    <span>शास्त्रीय भाष्य एवं दार्शनिक रहस्य (Shastric Commentary):</span>
                  </div>
                  {item.commentary}
                </div>
              )}
            </article>
          ))
        )}
      </div>

      {/* 6. Bottom Numbered Pagination */}
      {isPaginated && (
        <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => {
              navigatePage(-1);
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-50 cursor-pointer disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            पिछला पृष्ठ
          </button>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {getPaginationNumbers().map((item, idx) => {
              if (item === "...") {
                return (
                  <span key={`dots-${idx}`} className="px-2 text-xs text-stone-400">
                    ...
                  </span>
                );
              }
              const pageNo = item;
              return (
                <button
                  key={pageNo}
                  type="button"
                  onClick={() => {
                    setCurrentPage(pageNo);
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-bold cursor-pointer transition-colors ${
                    currentPage === pageNo
                      ? "bg-amber-800 text-white shadow-2xs"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  {pageNo}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => {
              navigatePage(1);
              window.scrollTo({ top: 300, behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-stone-200 bg-white px-3 py-2 text-xs font-bold text-stone-700 disabled:opacity-40 hover:bg-stone-50 cursor-pointer disabled:cursor-not-allowed"
          >
            अगला पृष्ठ
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}
