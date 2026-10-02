import React, { useState, useEffect, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  Copy,
  Check,
  Share2,
  Bookmark,
  Eye,
  Type,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sun,
  Flame,
  Info,
  SlidersHorizontal,
  Volume2,
  Languages,
  Search,
  X,
  Filter
} from "lucide-react";
import { getMantraById, ALL_VEDIC_MANTRAS } from "../data/vedicMantrasData.js";
import { findNodeById } from "../data/vedaHierarchyTree.js";
import bannerRigveda from "../assets/images/library/banners/banner-rigveda.jpg";
import bannerYajurveda from "../assets/images/library/banners/banner-yajurveda.jpg";
import bannerSamaveda from "../assets/images/library/banners/banner-samaveda.jpg";
import bannerAtharvaveda from "../assets/images/library/banners/banner-atharvaveda.jpg";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
import bannerFireRitual from "../assets/images/library/banners/banner-fire-ritual.png";
import bannerKashiGhat from "../assets/images/library/banners/banner-kashi-ghat.png";
import bannerSacredDetails from "../assets/images/library/banners/banner-sacred-details.png";

const VEDA_BANNERS = {
  rigveda: bannerRigveda,
  yajurveda: bannerYajurveda,
  samaveda: bannerSamaveda,
  atharvaveda: bannerAtharvaveda
};

export default function MantraReaderPage({ onOpenSearch }) {
  const { mantraId = "rv-1-1-1", category = "veda", subject = "rigveda" } = useParams();
  const navigate = useNavigate();

  // Reading Experience Preferences
  const [fontSize, setFontSize] = useState("text-2xl sm:text-3xl"); // 'text-xl', 'text-2xl sm:text-3xl', 'text-3xl sm:text-4xl'
  const [scriptMode, setScriptMode] = useState("both"); // 'devanagari', 'iast', 'both'
  const [selectedLanguage, setSelectedLanguage] = useState("hindi"); // 'hindi', 'english', 'hinglish', 'all'
  const [showPadapatha, setShowPadapatha] = useState(true);
  const [showShastric, setShowShastric] = useState(true);
  const [focusMode, setFocusMode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showFinder, setShowFinder] = useState(false);
  const [finderQuery, setFinderQuery] = useState("");
  const [finderVeda, setFinderVeda] = useState("all");
  const [siblingSearch, setSiblingSearch] = useState("");

  const mantra = getMantraById(mantraId) || ALL_VEDIC_MANTRAS[0];

  const matchingMantras = useMemo(() => {
    return ALL_VEDIC_MANTRAS.filter((m) => {
      if (finderVeda !== "all" && m.vedaId !== finderVeda) return false;
      if (!finderQuery.trim()) return true;
      const q = finderQuery.toLowerCase().trim();
      return (
        (m.id && m.id.toLowerCase().includes(q)) ||
        (m.textName && m.textName.toLowerCase().includes(q)) ||
        (m.sectionRef && m.sectionRef.toLowerCase().includes(q)) ||
        (m.sanskrit && m.sanskrit.toLowerCase().includes(q)) ||
        (m.hindiTranslation && m.hindiTranslation.toLowerCase().includes(q)) ||
        (m.rishi && m.rishi.toLowerCase().includes(q)) ||
        (m.devata && m.devata.toLowerCase().includes(q))
      );
    });
  }, [finderQuery, finderVeda]);

  // Look up hierarchy ancestors if available
  const treeMatch = findNodeById(mantra.id) || findNodeById(mantra.textName) || findNodeById(mantra.vedaId);
  const ancestors = treeMatch?.ancestors || [];

  // Handle keyboard arrow navigation for seamless reading
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft" && mantra.previousId) {
        navigate(`/library/mantra/${mantra.previousId}`);
      } else if (e.key === "ArrowRight" && mantra.nextId) {
        navigate(`/library/mantra/${mantra.nextId}`);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mantra, navigate]);

  const handleCopyMantra = () => {
    const textToCopy = `${mantra.sanskrit}\n\n— ${mantra.textName} (${mantra.sectionRef} • ${mantra.mantraNumber})\nभावार्थ (Hindi): ${mantra.hindiTranslation}\n\nVeda Library: https://vedalibrary.org`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: `${mantra.textName} - ${mantra.mantraNumber}`,
          text: mantra.sanskrit,
          url: window.location.href
        })
        .catch(() => {});
    } else {
      handleCopyMantra();
    }
  };

  const siblingMantras = useMemo(() => {
    return (mantra.chapterMantraIds || [])
      .map((id) => getMantraById(id))
      .filter(Boolean);
  }, [mantra.chapterMantraIds]);

  const filteredSiblings = useMemo(() => {
    if (!siblingSearch.trim()) return siblingMantras;
    const q = siblingSearch.toLowerCase().trim();
    return siblingMantras.filter((s) => {
      return (
        String(s.mantraNumber || "").includes(q) ||
        (s.sanskrit || "").toLowerCase().includes(q) ||
        (s.hindiTranslation || "").toLowerCase().includes(q)
      );
    });
  }, [siblingMantras, siblingSearch]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${focusMode ? "bg-[#181109] text-stone-100" : "bg-[#fffaf0] text-stone-900"}`}>
      {/* 1. Breadcrumb Bar */}
      <div className={`border-b py-3 px-4 sm:px-6 lg:px-8 transition-colors ${focusMode ? "bg-[#21160c] border-amber-950/80 text-amber-200/70" : "bg-white border-amber-200/70 text-stone-500"}`}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs font-medium flex-wrap">
          <Link to="/" className="hover:text-amber-700 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>›</span>
          <Link to="/library" className="hover:text-amber-700 transition-colors">
            Veda Library
          </Link>
          <span>›</span>
          <Link to="/library/veda" className="hover:text-amber-700 transition-colors">
            वेद (Veda)
          </Link>
          <span>›</span>
          <Link
            to={`/library/veda/${mantra.vedaId || "rigveda"}`}
            className="hover:text-amber-700 transition-colors"
          >
            {mantra.vedaName}
          </Link>
          <span>›</span>
          <span className="truncate max-w-[140px] sm:max-w-none text-stone-600">
            {mantra.shakha}
          </span>
          <span>›</span>
          <span className="truncate max-w-[140px] sm:max-w-none text-stone-700">
            {mantra.textName}
          </span>
          <span>›</span>
          <span className="text-amber-800 font-bold bg-amber-100/70 px-2 py-0.5 rounded border border-amber-200">
            मंत्र {mantra.mantraNumber}
          </span>
        </div>
      </div>

      {/* 2. Top Header & Reading Toolbar with TOP NAVIGATION */}
      <div className={`border-b py-4 px-4 sm:px-6 lg:px-8 shadow-2xs transition-colors ${focusMode ? "bg-[#1f140a] border-amber-950" : "bg-[#fef8ed] border-amber-200/60"}`}>
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Row A: Top Navigation & Title Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 flex-wrap">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                  focusMode
                    ? "bg-amber-950/80 border-amber-800 text-amber-200 hover:bg-amber-900"
                    : "bg-white border-amber-300 text-amber-900 hover:bg-amber-50 shadow-2xs"
                }`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>सूक्त सूची (Back)</span>
              </button>

              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-600 text-white shadow-2xs">
                {mantra.textName}
              </span>
              <span className={`text-xs font-semibold ${focusMode ? "text-amber-300/80" : "text-stone-600"}`}>
                {mantra.sectionRef} • मंत्र {mantra.mantraNumber}
              </span>
            </div>

            {/* TOP NAVIGATION BUTTONS (Previous / Next) */}
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <button
                type="button"
                disabled={!mantra.previousId}
                onClick={() => mantra.previousId && navigate(`/library/mantra/${mantra.previousId}`)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  !mantra.previousId
                    ? "opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200"
                    : focusMode
                    ? "bg-amber-950 border-amber-800 text-amber-200 hover:bg-amber-900"
                    : "bg-white border-amber-300 text-amber-900 hover:bg-amber-50 shadow-2xs"
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>पिछला मंत्र</span>
              </button>

              <button
                type="button"
                disabled={!mantra.nextId}
                onClick={() => mantra.nextId && navigate(`/library/mantra/${mantra.nextId}`)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  !mantra.nextId
                    ? "opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200"
                    : "bg-amber-600 border-amber-700 text-white hover:bg-amber-700 shadow-2xs"
                }`}
              >
                <span>अगला मंत्र</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Row B: Clean Reading Controls Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2.5 border-t border-amber-200/50">
            {/* Unified 3-Language Toggle: हिंदी / English / Hinglish */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs font-bold flex items-center gap-1.5 ${focusMode ? "text-amber-300" : "text-amber-900"}`}>
                <Languages className="w-4 h-4 text-amber-600" />
                <span>भाषा (Language):</span>
              </span>
              <div className={`flex items-center rounded-xl p-1 border text-xs font-bold ${focusMode ? "bg-[#2a1b0e] border-amber-900" : "bg-white border-amber-200 shadow-2xs"}`}>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("hindi")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${selectedLanguage === "hindi" ? "bg-amber-600 text-white font-bold shadow-2xs" : "text-stone-600 hover:text-amber-900"}`}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("english")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${selectedLanguage === "english" ? "bg-amber-600 text-white font-bold shadow-2xs" : "text-stone-600 hover:text-amber-900"}`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedLanguage("hinglish")}
                  className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${selectedLanguage === "hinglish" ? "bg-amber-600 text-white font-bold shadow-2xs" : "text-stone-600 hover:text-amber-900"}`}
                >
                  Hinglish
                </button>
              </div>
            </div>

            {/* Typography, Focus Mode & Action Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              {/* Font Size Selector */}
              <div className={`flex items-center rounded-xl p-1 border text-xs font-bold ${focusMode ? "bg-[#2a1b0e] border-amber-900" : "bg-white border-amber-200 shadow-2xs"}`}>
                <button
                  type="button"
                  title="Small text size"
                  onClick={() => setFontSize("text-xl sm:text-2xl")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${fontSize.includes("text-xl") ? "bg-amber-600 text-white" : "text-stone-600 hover:text-amber-900"}`}
                >
                  A-
                </button>
                <button
                  type="button"
                  title="Medium text size"
                  onClick={() => setFontSize("text-2xl sm:text-3xl")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${fontSize.includes("text-2xl") ? "bg-amber-600 text-white" : "text-stone-600 hover:text-amber-900"}`}
                >
                  A
                </button>
                <button
                  type="button"
                  title="Large text size"
                  onClick={() => setFontSize("text-3xl sm:text-4xl")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${fontSize.includes("text-3xl") ? "bg-amber-600 text-white" : "text-stone-600 hover:text-amber-900"}`}
                >
                  A+
                </button>
              </div>

              {/* Focus / Dhyana Mode Toggle */}
              <button
                type="button"
                onClick={() => setFocusMode((prev) => !prev)}
                title={focusMode ? "क्लासिक मोड में लौटें" : "ध्यान मोड (Focus Mode)"}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  focusMode
                    ? "bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md"
                    : "bg-white border-amber-200 text-stone-700 hover:text-amber-900 shadow-2xs hover:bg-amber-50"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>{focusMode ? "क्लासिक" : "ध्यान मोड"}</span>
              </button>

              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopyMantra}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  focusMode
                    ? "bg-[#2a1b0e] border-amber-900 text-amber-200 hover:bg-amber-900"
                    : "bg-white border-amber-200 text-stone-700 hover:bg-amber-50 shadow-2xs"
                }`}
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "कॉपी हुआ!" : "कॉपी"}</span>
              </button>

              {/* Share */}
              <button
                type="button"
                onClick={handleShare}
                className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                  focusMode
                    ? "bg-[#2a1b0e] border-amber-900 text-amber-200 hover:bg-amber-900"
                    : "bg-white border-amber-200 text-stone-700 hover:bg-amber-50 shadow-2xs"
                }`}
                title="Share Mantra"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>

              {/* Mantra Finder & Quick Jump Button */}
              <button
                type="button"
                onClick={() => setShowFinder((prev) => !prev)}
                title="सभी मंत्रों में खोजें या जम्प करें"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  showFinder
                    ? "bg-amber-600 text-white border-amber-700 shadow-md"
                    : focusMode
                    ? "bg-[#2a1b0e] border-amber-900 text-amber-200 hover:bg-amber-900"
                    : "bg-amber-100/80 border-amber-300 text-amber-900 hover:bg-amber-200 shadow-2xs"
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>{showFinder ? "खोज बंद करें" : "मंत्र खोजें"}</span>
              </button>
            </div>
          </div>

          {/* Quick Mantra Navigator & Finder Panel */}
          {showFinder && (
            <div className={`p-4 sm:p-5 rounded-2xl border mt-3 transition-all space-y-4 shadow-lg ${
              focusMode ? "bg-[#180f07] border-amber-800 text-stone-100" : "bg-white border-amber-300 text-stone-900"
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <h3 className="font-serif text-sm font-bold text-amber-900">
                    वेदमंत्र त्वरित खोज एवं जम्प (Veda Mantra Finder)
                  </h3>
                </div>

                {/* Veda Category Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
                  {[
                    { id: "all", label: "सभी वेद" },
                    { id: "rigveda", label: "ऋग्वेद" },
                    { id: "yajurveda", label: "यजुर्वेद" },
                    { id: "samaveda", label: "सामवेद" },
                    { id: "atharvaveda", label: "अथर्ववेद" },
                    { id: "upanishad", label: "उपनिषद" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setFinderVeda(tab.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        finderVeda === tab.id
                          ? "bg-amber-700 text-white font-bold shadow-2xs"
                          : focusMode
                          ? "bg-[#28180c] text-amber-200 border border-amber-900 hover:bg-amber-900/50"
                          : "bg-amber-50 text-stone-700 border border-amber-200 hover:bg-amber-100"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Search Input */}
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={finderQuery}
                  onChange={(e) => setFinderQuery(e.target.value)}
                  placeholder="मंत्र संख्या (e.g. 1.1.1), सूक्त (e.g. Purusha), या संस्कृत शब्द (e.g. अग्निमीळे, सहस्रशीर्षा, त्र्यम्बकं)..."
                  className={`w-full pl-9 pr-8 py-2 rounded-xl text-xs border focus:outline-none font-devanagari ${
                    focusMode
                      ? "bg-[#28180c] border-amber-900 text-white focus:border-amber-500 placeholder:text-stone-500"
                      : "bg-[#fffaf0] border-amber-200 text-stone-900 focus:border-amber-400 placeholder:text-stone-400"
                  }`}
                  autoFocus
                />
                {finderQuery && (
                  <button
                    type="button"
                    onClick={() => setFinderQuery("")}
                    className="p-1 text-stone-400 hover:text-stone-700 absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Mantra Results Grid / List */}
              <div className="max-h-60 overflow-y-auto space-y-2 pr-1 scrollbar-thin">
                {matchingMantras.length === 0 ? (
                  <div className="py-6 text-center text-xs text-stone-400">
                    कोई मंत्र नहीं मिला। कृपया भिन्न कीवर्ड या मंत्र संख्या टाइप करें।
                  </div>
                ) : (
                  matchingMantras.map((m) => {
                    const isCurrent = m.id === mantra.id;
                    return (
                      <div
                        key={m.id}
                        onClick={() => {
                          navigate(`/library/mantra/${m.id}`);
                          setShowFinder(false);
                        }}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isCurrent
                            ? "bg-amber-100/90 border-amber-400 text-amber-950 font-bold"
                            : focusMode
                            ? "bg-[#25170b] border-amber-950/80 hover:border-amber-700 text-stone-200"
                            : "bg-[#fffdfa] border-stone-200/90 hover:border-amber-300 hover:bg-amber-50/50"
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-600 text-white">
                              {m.textName} • {m.mantraNumber}
                            </span>
                            <span className="text-[10px] text-stone-500 font-mono">
                              {m.sectionRef}
                            </span>
                          </div>
                          <p className="font-devanagari text-xs text-stone-800 truncate font-medium">
                            {m.sanskrit}
                          </p>
                          <p className="font-devanagari text-[11px] text-stone-500 truncate">
                            {m.hindiTranslation}
                          </p>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Main Reading Container (2-Column Responsive Layout with Right Sticky Navigator) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Mobile / Small Screen Horizontal Quick Numbers Strip (Visible on mobile/tablet < lg) */}
        {siblingMantras.length > 1 && (
          <div className={`lg:hidden mb-6 p-3.5 rounded-2xl border shadow-2xs transition-all ${
            focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-amber-200/90"
          }`}>
            <div className="flex items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>समस्त {siblingMantras.length} मंत्र (सीधे खोलें):</span>
              </div>
              <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                मंत्र {siblingMantras.findIndex((s) => s.id === mantra.id) + 1} / {siblingMantras.length}
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {siblingMantras.map((sib, sIdx) => {
                const isActive = sib.id === mantra.id;
                return (
                  <button
                    key={sib.id}
                    type="button"
                    onClick={() => navigate(`/library/mantra/${sib.id}`)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
                      isActive
                        ? "bg-amber-600 text-white border-amber-700 shadow-xs scale-105"
                        : focusMode
                        ? "bg-[#2c1d0f] border-amber-900 text-amber-200"
                        : "bg-amber-50 text-stone-700 border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    मंत्र {sib.mantraNumber || sIdx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 2-Column Grid: Left Reading Area + Right Sticky Mantra Numbers Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: Main Reading Canvas (lg:col-span-8 xl:col-span-8) */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-6 sm:space-y-8">
            {/* Shastric Meta Strip: Rishi • Devata • Chhanda • Svara */}
            <div className={`p-4 rounded-2xl border transition-all ${
              focusMode
                ? "bg-[#21160b] border-amber-900/70 shadow-sm"
                : "bg-white border-stone-200/90 shadow-2xs"
            }`}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-devanagari text-center divide-y sm:divide-y-0 sm:divide-x divide-amber-200/50">
                <div className="pt-2 sm:pt-0">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">ऋषि (Sage)</span>
                  <strong className={`font-serif text-sm ${focusMode ? "text-amber-100" : "text-stone-900"}`}>{mantra.rishi || "वैदिक ऋषि"}</strong>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-3">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">देवता (Deity)</span>
                  <strong className={`font-serif text-sm ${focusMode ? "text-amber-100" : "text-stone-900"}`}>{mantra.devata || "परमेश्वर / अग्नि"}</strong>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-3">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">छन्द (Meter)</span>
                  <strong className={`font-serif text-sm ${focusMode ? "text-amber-100" : "text-stone-900"}`}>{mantra.chhanda || "गायत्री / त्रिष्टुप्"}</strong>
                </div>
                <div className="pt-2 sm:pt-0 sm:pl-3">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">स्वर / पाठ</span>
                  <strong className={`font-serif text-sm ${focusMode ? "text-amber-100" : "text-stone-900"}`}>{mantra.svara || "सस्वर वैदिक पाठ"}</strong>
                </div>
              </div>
            </div>

            {/* Core Mantra Sanctuary Card */}
            <div className={`relative p-6 sm:p-10 md:p-12 rounded-3xl border overflow-hidden transition-all duration-300 ${
              focusMode
                ? "bg-gradient-to-b from-[#24170d] via-[#1c120a] to-[#21150c] border-amber-700/60 shadow-2xl"
                : "bg-gradient-to-b from-[#fffcf6] via-[#fffbf2] to-[#fff8ea] border-amber-300/80 shadow-md"
            }`}>
              {/* Sacred Authentic Veda Banner Watermark */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-multiply">
                <img
                  src={VEDA_BANNERS[mantra.vedaId] || bannerSanctum}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Sacred Corner Filigrees */}
              <div className="absolute top-4 left-4 text-amber-500/40 text-sm font-serif">॥ ॐ ॥</div>
              <div className="absolute top-4 right-4 text-amber-500/40 text-xs font-mono">{mantra.mantraNumber}</div>

              {/* Sanskrit Text Block */}
              <div className="text-center py-6 sm:py-8">
                <p
                  className={`font-devanagari font-bold leading-loose sm:leading-loose tracking-wide whitespace-pre-line select-text ${fontSize} ${
                    focusMode
                      ? "text-[#ffedd5] drop-shadow-[0_2px_12px_rgba(251,146,60,0.25)]"
                      : "text-[#2e1808]"
                  }`}
                >
                  {mantra.sanskrit}
                </p>
              </div>

              {/* IAST Roman Transliteration Block (Shown automatically for English & Hinglish) */}
              {(selectedLanguage === "english" || selectedLanguage === "hinglish") && mantra.transliteration && (
                <div className={`text-center pt-4 pb-2 border-t font-serif italic text-sm sm:text-base leading-relaxed select-text ${
                  focusMode
                    ? "border-amber-900/60 text-amber-200/80"
                    : "border-amber-200/70 text-amber-950/80"
                }`}>
                  <p className="max-w-2xl mx-auto whitespace-pre-line">
                    {mantra.transliteration}
                  </p>
                </div>
              )}
            </div>

            {/* Word-by-Word Breakdown (पदार्थ / Padapatha) */}
            {showPadapatha && mantra.padapatha && mantra.padapatha.length > 0 && (
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-stone-200/90 shadow-2xs"
              }`}>
                <div className="flex items-center justify-between border-b pb-3 mb-5 border-amber-200/60">
                  <h3 className="font-serif text-lg font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>पदच्छेद एवं पदार्थ (Word-by-Word Meanings)</span>
                  </h3>
                  <span className="text-[11px] font-semibold text-stone-400">
                    {mantra.padapatha.length} पद
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {mantra.padapatha.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border text-xs font-devanagari transition-colors ${
                        focusMode
                          ? "bg-[#2c1d0f] border-amber-900/80 text-amber-100"
                          : "bg-[#fffaf0] border-amber-100 hover:border-amber-300 text-stone-800"
                      }`}
                    >
                      <span className="font-bold text-amber-800 block text-sm mb-0.5">
                        {item.word}
                      </span>
                      <span className={focusMode ? "text-stone-300" : "text-stone-600"}>
                        {item.meaning}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Selected Language Translation Block (Hindi / English / Hinglish) */}
            <div className="space-y-6">
              {/* Hindi Meaning */}
              {selectedLanguage === "hindi" && (
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-stone-200/90 shadow-2xs"
                }`}>
                  <div className="flex items-center gap-2 border-b pb-3 mb-4 border-amber-200/60">
                    <BookOpen className="w-4 h-4 text-amber-600" />
                    <h3 className="font-serif text-base font-bold text-amber-900">
                      प्रामाणिक हिंदी भावार्थ (Hindi Meaning)
                    </h3>
                  </div>
                  <p className={`font-devanagari text-sm sm:text-base leading-relaxed select-text ${
                    focusMode ? "text-stone-200" : "text-stone-800"
                  }`}>
                    {mantra.hindiTranslation}
                  </p>
                </div>
              )}

              {/* Hinglish Meaning */}
              {selectedLanguage === "hinglish" && (
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-stone-200/90 shadow-2xs"
                }`}>
                  <div className="flex items-center gap-2 border-b pb-3 mb-4 border-amber-200/60">
                    <Languages className="w-4 h-4 text-amber-600" />
                    <h3 className="font-serif text-base font-bold text-amber-900">
                      सरल हिंग्लिश भावार्थ (Hinglish Explanation)
                    </h3>
                  </div>
                  <p className={`font-sans text-sm sm:text-base leading-relaxed select-text ${
                    focusMode ? "text-stone-200" : "text-stone-800"
                  }`}>
                    {mantra.hinglishTranslation || mantra.hindiTranslation}
                  </p>
                </div>
              )}

              {/* English Meaning */}
              {selectedLanguage === "english" && (
                <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-stone-200/90 shadow-2xs"
                }`}>
                  <div className="flex items-center gap-2 border-b pb-3 mb-4 border-amber-200/60">
                    <Info className="w-4 h-4 text-amber-600" />
                    <h3 className="font-serif text-base font-bold text-amber-900">
                      Authentic English Translation
                    </h3>
                  </div>
                  <p className={`font-serif text-sm sm:text-base leading-relaxed select-text ${
                    focusMode ? "text-stone-300" : "text-stone-700"
                  }`}>
                    {mantra.englishTranslation || mantra.hindiTranslation}
                  </p>
                </div>
              )}
            </div>

            {/* Shastric Commentary & Vedic Viniyoga */}
            {showShastric && mantra.shastricContext && (
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                focusMode ? "bg-[#21160b] border-amber-900" : "bg-white border-stone-200/90 shadow-2xs"
              }`}>
                <h3 className="font-serif text-lg font-bold text-amber-900 border-b pb-3 mb-4 border-amber-200/60 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-600" />
                  <span>शास्त्रीय व्याख्या, विनियोग एवं याज्ञिक प्रयोग</span>
                </h3>
                <div className={`font-devanagari text-xs sm:text-sm leading-relaxed space-y-3 ${
                  focusMode ? "text-stone-300" : "text-stone-700"
                }`}>
                  <p>{mantra.shastricContext}</p>
                </div>
              </div>
            )}

            {/* Sequential Mantra Navigation Bar at Bottom */}
            <div className={`p-4 sm:p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm ${
              focusMode ? "bg-[#21160c] border-amber-900" : "bg-white border-amber-200"
            }`}>
              {mantra.previousId ? (
                <button
                  type="button"
                  onClick={() => navigate(`/library/mantra/${mantra.previousId}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-bold text-xs border border-amber-300 transition-all cursor-pointer shadow-2xs"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>← पिछला मंत्र ({mantra.previousId})</span>
                </button>
              ) : (
                <div className="text-xs text-stone-400 italic">प्रथम मंत्र (First Mantra)</div>
              )}

              <div className="text-center">
                <span className="text-xs font-bold text-amber-900">
                  {mantra.textName} • मंत्र {mantra.mantraNumber}
                </span>
                <span className="block text-[11px] text-stone-400">
                  कीबोर्ड पर ← / → दबाकर भी नेविगेट कर सकते हैं
                </span>
              </div>

              {mantra.nextId ? (
                <button
                  type="button"
                  onClick={() => navigate(`/library/mantra/${mantra.nextId}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs border border-amber-700 transition-all cursor-pointer shadow-2xs"
                >
                  <span>अगला मंत्र ({mantra.nextId}) →</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="text-xs text-stone-400 italic">अंतिम मंत्र (Last Mantra)</div>
              )}
            </div>
          </main>

          {/* RIGHT COLUMN: Sticky Mantra Navigator Sidebar (lg:col-span-4 xl:col-span-4) */}
          <aside className="lg:col-span-4 xl:col-span-4 lg:sticky lg:top-6 space-y-4">
            {siblingMantras.length > 0 && (
              <div className={`p-5 rounded-3xl border transition-all ${
                focusMode ? "bg-[#21160b] border-amber-900 shadow-md text-stone-100" : "bg-white border-amber-200/90 shadow-2xs text-stone-900"
              }`}>
                {/* Header & Progress Info */}
                <div className="flex items-center justify-between border-b pb-3 mb-3 border-amber-200/60">
                  <div>
                    <h3 className="font-serif font-bold text-sm sm:text-base flex items-center gap-1.5 text-amber-900">
                      <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>समस्त मंत्र सूची ({siblingMantras.length})</span>
                    </h3>
                    <p className="text-[11px] text-stone-500 font-medium">
                      {mantra.textName}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {siblingMantras.findIndex((s) => s.id === mantra.id) + 1} / {siblingMantras.length}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-amber-100 rounded-full h-1.5 mb-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${((siblingMantras.findIndex((s) => s.id === mantra.id) + 1) / siblingMantras.length) * 100}%`
                    }}
                  />
                </div>

                {/* 1-Tap Quick Number Badges Grid (1 to N) */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">
                      संख्या अनुसार तुरंत खोलें (1 to {siblingMantras.length}):
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {siblingMantras.map((sib, sIdx) => {
                      const isActive = sib.id === mantra.id;
                      return (
                        <button
                          key={sib.id}
                          type="button"
                          onClick={() => navigate(`/library/mantra/${sib.id}`)}
                          title={`मंत्र ${sib.mantraNumber || sIdx + 1} खोलें`}
                          className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center border ${
                            isActive
                              ? "bg-amber-600 text-white border-amber-700 shadow-sm scale-110 font-black ring-2 ring-amber-400"
                              : focusMode
                              ? "bg-[#2c1d0f] border-amber-900/80 text-amber-200 hover:bg-amber-800/80"
                              : "bg-amber-50/80 border-amber-200 text-stone-800 hover:bg-amber-100 hover:border-amber-300"
                          }`}
                        >
                          {sIdx + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Live Search Input (if > 4 mantras) */}
                {siblingMantras.length > 4 && (
                  <div className="relative mb-3">
                    <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={siblingSearch}
                      onChange={(e) => setSiblingSearch(e.target.value)}
                      placeholder="मंत्र सं. या शब्द खोजें..."
                      className={`w-full pl-7 pr-7 py-1.5 rounded-xl text-xs border focus:outline-none ${
                        focusMode
                          ? "bg-[#28180c] border-amber-900 text-stone-200 placeholder:text-stone-500"
                          : "bg-[#fffaf0] border-amber-200 text-stone-900 placeholder:text-stone-400"
                      }`}
                    />
                    {siblingSearch && (
                      <button
                        type="button"
                        onClick={() => setSiblingSearch("")}
                        className="p-0.5 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                )}

                {/* Detailed Scrollable Mantra List with Text Snippets */}
                <div className="max-h-[380px] overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
                  {filteredSiblings.map((sib, sIdx) => {
                    const isActive = sib.id === mantra.id;
                    return (
                      <div
                        key={sib.id}
                        onClick={() => navigate(`/library/mantra/${sib.id}`)}
                        className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start gap-2.5 text-xs ${
                          isActive
                            ? "bg-amber-100/90 border-amber-400 ring-1 ring-amber-400/80 shadow-xs"
                            : focusMode
                            ? "bg-[#28180c] border-amber-950/80 hover:border-amber-700 text-stone-300"
                            : "bg-stone-50/60 border-stone-200 hover:border-amber-300 hover:bg-amber-50/40 text-stone-700"
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-md font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5 border ${
                          isActive
                            ? "bg-amber-600 text-white border-amber-700 font-extrabold"
                            : "bg-white border-stone-200 text-amber-950"
                        }`}>
                          {sIdx + 1}
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <strong className={`font-semibold text-[11px] ${isActive ? "text-amber-950" : focusMode ? "text-amber-200" : "text-stone-900"}`}>
                              मंत्र {sib.mantraNumber}
                            </strong>
                            {isActive && (
                              <span className="text-[9px] font-bold text-amber-800 bg-amber-200/90 px-1.5 py-0.2 rounded">
                                वाचन में
                              </span>
                            )}
                          </div>
                          <p className="font-devanagari text-[11px] text-stone-600 line-clamp-1">
                            {sib.sanskrit}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Reading Guidance / Shortcuts Box */}
            <div className={`p-4 rounded-2xl border text-xs ${
              focusMode ? "bg-[#21160b] border-amber-900 text-amber-200/70" : "bg-white border-amber-200/70 text-stone-500"
            }`}>
              <div className="flex items-center gap-2 mb-1.5 text-amber-900 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>सुगम पठन निर्देश</span>
              </div>
              <p className="text-[11px] leading-relaxed text-stone-600">
                कीबोर्ड के <kbd className="px-1.5 py-0.5 bg-amber-100 border border-amber-300 rounded text-[10px] font-mono text-amber-950">←</kbd> और <kbd className="px-1.5 py-0.5 bg-amber-100 border border-amber-300 rounded text-[10px] font-mono text-amber-950">→</kbd> तीरों से सीधे अगले/पिछले मंत्र पर नेविगेट करें।
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
