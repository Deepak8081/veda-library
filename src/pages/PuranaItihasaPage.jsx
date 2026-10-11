import React, { useState, useMemo } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  Layers,
  Scroll,
  Crown,
  Flame,
  Shield,
  Heart,
  ChevronRight,
  Compass,
  X,
  Info,
  ExternalLink,
} from "lucide-react";
import {
  PANCHA_LAKSHANA,
  MAHAPURANAS_DATA,
  UPAPURANAS_DATA,
} from "../data/puranaData.js";
import {
  ITIHASA_EPISTEMOLOGY,
  RAMAYANA_DATA,
  MAHABHARATA_DATA,
} from "../data/itihasaData.js";
import bannerTempleGhat from "../assets/images/library/banners/banner-temple-ghat.jpg";
import cardPuranaImg from "../assets/images/library/cards/card-purana.jpg";
import cardRamayanaImg from "../assets/images/library/cards/card-ramayana.jpg";
import cardMahabharataImg from "../assets/images/library/cards/card-mahabharata.jpg";
import cardGitaImg from "../assets/images/library/cards/card-gita.jpg";

export default function PuranaItihasaPage({ onOpenSearch }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Tab state: 'purana', 'ramayana', 'mahabharata', 'panchalakshana'
  const initialTab = searchParams.get("tab") || "purana";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [gunaFilter, setGunaFilter] = useState("all");
  const [selectedPuranaModal, setSelectedPuranaModal] = useState(null);
  const [selectedJewelModal, setSelectedJewelModal] = useState(null);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
    setSearchQuery("");
  };

  // Filtered Puranas
  const filteredPuranas = useMemo(() => {
    return MAHAPURANAS_DATA.filter((p) => {
      const matchGuna =
        gunaFilter === "all" ||
        (gunaFilter === "sattvika" && p.guna.includes("सात्त्विक")) ||
        (gunaFilter === "rajasa" && p.guna.includes("राजस")) ||
        (gunaFilter === "tamasa" && p.guna.includes("तामस"));

      if (!matchGuna) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      return (
        p.name.toLowerCase().includes(q) ||
        p.enName.toLowerCase().includes(q) ||
        p.presidingDeity.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.majorKhandas.some((k) => k.toLowerCase().includes(q)) ||
        p.keyNarratives.some((n) => n.toLowerCase().includes(q))
      );
    });
  }, [gunaFilter, searchQuery]);

  return (
    <div className="bg-[#fffaf0] min-h-screen text-stone-900 pb-20">
      {/* 1. Scholarly Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1a110a] via-[#2c1b10] to-[#1e130b] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40 overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <img
            src={bannerTempleGhat}
            alt="Vedic Temple Heritage"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a110a] via-transparent to-black/40 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-amber-300/80 mb-4 font-serif">
            <Link to="/" className="hover:text-amber-200">
              होम
            </Link>
            <span>/</span>
            <Link to="/library" className="hover:text-amber-200">
              वैदिक ज्ञानकोष
            </Link>
            <span>/</span>
            <span className="text-amber-100 font-semibold">
              पुराण एवं इतिहास
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PURANA & ITIHASA ARCHIVE</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                पुराण एवं इतिहास
                <span className="block text-xl sm:text-2xl font-normal text-amber-200/90 mt-1 font-sans">
                  The Sacred Chronologies, Epics & Cosmic Histories
                </span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base font-devanagari leading-relaxed">
                १८ महापुराण, वाल्मीकि रामायण, महाभारत एवं श्रीमद्भगवद्गीता —
                वेदों के अमूर्त ज्ञान को प्रत्यक्ष जीवन, आख्यान, अवतार लीला और
                धर्म की कसौटी पर कसने वाली भारत की सनातन ज्ञान परंपरा।
              </p>

              {/* Classical Sanskrit Aphorism Banner */}
              <div className="mt-5 p-3.5 rounded-xl bg-amber-950/60 border border-amber-600/40 text-amber-100 text-xs sm:text-sm font-devanagari leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">
                  {ITIHASA_EPISTEMOLOGY.pramanaQuote}
                </span>
                <span className="text-amber-200/80 text-xs">
                  — {ITIHASA_EPISTEMOLOGY.pramanaSource} :{" "}
                  {ITIHASA_EPISTEMOLOGY.pramanaMeaning}
                </span>
              </div>
            </div>

            {/* Quick Metrics Badge Card */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full lg:w-auto self-stretch lg:self-auto text-center">
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  १८
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  महापुराण
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  ~४,००,००० श्लोक
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  २४,०००
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  रामायण श्लोक
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  ७ काण्ड • ५०० सर्ग
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  १,००,०००
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  महाभारत श्लोक
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  १८ पर्व + हरिवंश
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  ५
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  पंच लक्षण
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  सृष्टि व वंशावली
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 sm:px-6 lg:px-8 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2">
            {[
              {
                id: "purana",
                label: "१८ महापुराण",
                en: "18 Mahapuranas",
                icon: Crown,
              },
              {
                id: "ramayana",
                label: "वाल्मीकि रामायण",
                en: "Valmiki Ramayana",
                icon: Heart,
              },
              {
                id: "mahabharata",
                label: "महाभारत एवं गीता",
                en: "Mahabharata & Gita",
                icon: Shield,
              },
              {
                id: "panchalakshana",
                label: "पंच लक्षण व उपपुराण",
                en: "Pancha Lakshana",
                icon: Compass,
              },
            ].map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => handleTabChange(t.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-amber-800 text-white shadow-xs font-bold"
                      : "text-stone-700 hover:text-amber-900 hover:bg-amber-50"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${isActive ? "text-amber-200" : "text-amber-700"}`}
                  />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Shortcut */}
          <button
            onClick={() => onOpenSearch && onOpenSearch("")}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-500 hover:text-stone-800 text-xs bg-stone-50 hover:bg-white transition-colors cursor-pointer"
          >
            <Search className="w-3.5 h-3.5 text-stone-400" />
            <span>त्वरित खोज (Ctrl+K)</span>
          </button>
        </div>
      </div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ========================================================================= */}
        {/* TAB 1: 18 MAHAPURANAS (पुराण) */}
        {/* ========================================================================= */}
        {activeTab === "purana" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Header & Filter Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  अठारह महापुराण (The 18 Mahapuranas)
                </h2>
                <p className="text-xs text-stone-500 font-devanagari mt-1">
                  पद्म पुराण वर्गीकरण अनुसार सात्त्विक, राजस एवं तामस पुराणों का
                  प्रामाणिक संग्रह
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Guna Filter Chips */}
                <div className="flex items-center gap-1 bg-[#fffaf0] p-1 rounded-xl border border-amber-200/70 text-xs">
                  {[
                    { id: "all", label: "सभी (18)" },
                    {
                      id: "sattvika",
                      label: "सात्त्विक (6)",
                      color: "text-emerald-800",
                    },
                    {
                      id: "rajasa",
                      label: "राजस (6)",
                      color: "text-amber-800",
                    },
                    {
                      id: "tamasa",
                      label: "तामस (6)",
                      color: "text-indigo-800",
                    },
                  ].map((gf) => (
                    <button
                      key={gf.id}
                      onClick={() => setGunaFilter(gf.id)}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                        gunaFilter === gf.id
                          ? "bg-amber-800 text-white shadow-2xs"
                          : "text-stone-600 hover:text-stone-900 hover:bg-amber-100/50"
                      }`}
                    >
                      {gf.label}
                    </button>
                  ))}
                </div>

                {/* Text Search in Puranas */}
                <div className="relative min-w-[200px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="पुराण, देवता या कथा खोजें..."
                    className="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-[#fffaf0] border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Deep Research Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-800 font-semibold text-sm mb-2">
                  <Crown className="w-4 h-4" />
                  Cosmic Scope
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  पुराण सृष्टि, समय चक्र, देवता, वंश, तीर्थ, अवतार, जीवन-दर्शन
                  और भक्ति-मार्ग को एक समग्र दृष्टि से प्रस्तुत करते हैं।
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm mb-2">
                  <Flame className="w-4 h-4" />
                  Moral Structure
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  रामायण और महाभारत जीवन के विवेक, राजधर्म, परिवार, युद्ध, दंड,
                  प्रेम, त्याग और मुक्ति के गहरे दार्शनिक आयाम खोलते हैं।
                </p>
              </div>
              <div className="bg-gradient-to-br from-rose-50 to-white border border-rose-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-rose-800 font-semibold text-sm mb-2">
                  <Heart className="w-4 h-4" />
                  Living Tradition
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  ये ग्रंथ सिर्फ कथाएँ नहीं हैं; वे संस्कृति, पूजा, नारी-पुरुष
                  विवेक, राजा-प्रजाजनता, भक्ति और धर्म-संस्कृति की जीवन्त भाषा
                  हैं।
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-200/80 bg-gradient-to-br from-amber-50 via-white to-stone-50 p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-700">
                    Research Spotlight
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    ब्रह्म पुराण की संरचना एवं मुख्य विभाजन
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-amber-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-amber-800">
                  source-aware note
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    मुख्य भाग
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    २
                  </div>
                  <div className="text-xs text-stone-600">
                    पूर्व भाग • उत्तर भाग
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    कुल अध्याय
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    २४५
                  </div>
                  <div className="text-xs text-stone-600">
                    सामान्यतः समर्थित मान
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    गौतमी महात्म्य
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    १०६
                  </div>
                  <div className="text-xs text-stone-600">
                    गौतमी / गोदावरी महिमा
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    श्लोक परिमाण
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    १०,०००
                  </div>
                  <div className="text-xs text-stone-600">
                    परंपरागत गणना; प्रसंगिक संस्करण भिन्न
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                ब्रह्म पुराण को परंपरागत रूप से आदि पुराण माना जाता है और इसे
                अक्सर रजस-पुराण के रूप में वर्गीकृत किया जाता है। इसमें सृष्टि
                उत्पत्ति, सूर्योपासना, तीर्थमहात्म्य और राजधर्म का विस्तृत वर्णन
                है। शास्त्रीय सूची के अनुसार इसमें दो मुख्य भाग हैं — पूर्व भाग
                और उत्तर भाग — और गौतमी महात्म्य को १०६ अध्यायों में विस्तृत
                किया गया है। “१०,००० श्लोक” की संख्या परंपरागत रूप से प्रचलित
                है, लेकिन विद्वानों ने नोट किया है कि उपलब्ध प्रतियाँ, प्रारूप
                और संस्करण अलग-अलग हैं, इसलिए यह आंकड़ा एकल निश्चित संख्या के
                रूप में नहीं माना जा सकता।
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-white p-5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <Link
                    to="/library/purana/brahma-purana"
                    className="font-serif text-xl font-bold text-stone-900 hover:text-amber-800 transition-colors underline-offset-4 hover:underline"
                    title="ब्रह्म पुराण की संरचना एवं प्रमुख प्रकरण देखें"
                  >
                    गौतमी महात्म्य (१०६ अध्याय)
                  </Link>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-amber-700 font-bold">
                    chapter-level detail
                  </span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-stone-700">
                  गौतमी महात्म्य ब्रह्म पुराण का सबसे विशिष्ट तीर्थ-प्रकरण है।
                  इसमें गोदावरी नदी के तट पर स्थित पवित्र स्थलों, तीर्थों,
                  जलाशयों, ऋषि-आश्रमों और पापनाशक स्थानों का संक्षिप्त-व्यापक
                  वर्णन मिलता है, इसलिए इसे केवल एक ‘अध्याय-गिनती’ नहीं, एक
                  जीवंत तीर्थ-विज्ञान समझा जाता है।
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link
                    to="/library/purana/brahma-purana"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900 hover:bg-amber-100 transition-colors"
                  >
                    ब्रह्म पुराण संरचना देखें
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="inline-flex items-center rounded-xl border border-stone-200 bg-stone-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-stone-600">
                    खुलता है: /library/purana/brahma-purana
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                  <div className="rounded-xl border border-stone-200 bg-[#fffaf0] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      प्रकरण १
                    </div>
                    <div className="mt-2 font-semibold text-stone-900">
                      सृष्टि-उपदेश एवं ब्रह्म-विज्ञान
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      जीव, प्रकृति, ब्रह्म और प्रजाओं के क्रमिक उद्गम को समझाने
                      वाला प्रारंभिक भाग।
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-[#fffaf0] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      प्रकरण २
                    </div>
                    <div className="mt-2 font-semibold text-stone-900">
                      सूर्य उपासना और तेज-तत्त्व
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      सूर्यदेव, आरोग्य, तेज, तिथि-संस्कार और आराधना की शास्त्रीय
                      भूमि पर आधारित भाग।
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-[#fffaf0] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      प्रकरण ३
                    </div>
                    <div className="mt-2 font-semibold text-stone-900">
                      गोदावरी तीर्थ-माहात्म्य
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      गोदावरी के तटवर्ती पावन स्थलों, स्नान-फल, पूजा-विधान एवं
                      तीर्थ-श्रेष्ठता का विस्तार।
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-[#fffaf0] p-3">
                    <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-stone-500">
                      प्रकरण ४
                    </div>
                    <div className="mt-2 font-semibold text-stone-900">
                      उत्कल / जगन्नाथ क्षेत्र
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-stone-600">
                      ओडिशा, पुरुषोत्तम क्षेत्र और पवित्र तीर्थ-परंपरा का
                      सांस्कृतिक-धार्मिक विवेचन।
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-950 leading-relaxed">
                  <strong>संग्रह:</strong> ब्रह्म पुराण के ‘२४५ अध्याय’ की
                  संख्या सामान्यतः उद्धृत की जाती है, जबकि गौतमी महात्म्य और
                  अन्य तीर्थ-विषयक खंडों का प्रकरण-विभाजन प्रतियों के अनुसार
                  थोड़ा अलग हो सकता है। इसी तरह ‘१०,००० श्लोक’ की परंपरागत
                  संख्या के साथ उपलब्ध संस्करणों में ७,०००–८,००० श्लोक के आसपास
                  का पाठ भी मिलता है; इसलिए यह संख्या समष्टि रूप में बताने के
                  बजाय ‘परंपरागत / संस्करण-निर्भर’ रूप में समझना सही है।
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-50 to-white p-5">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <h4 className="font-serif text-xl font-bold text-stone-900">
                    श्लोक पठन: श्रीमद्भागवत महापुराण
                  </h4>
                  <Link
                    to="/library/purana/shrimad-bhagavata"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-indigo-300 bg-white px-3 py-1.5 text-xs font-bold text-indigo-900 hover:bg-indigo-100 transition-colors"
                  >
                    पूरा परिचय देखें
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-stone-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                      श्लोक १
                    </div>
                    <p className="mt-2 font-devanagari text-base leading-relaxed text-stone-900">
                      निगमकल्पतरोर्गलितं फलम्
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      “वेदों, उपनिषदों और शास्त्रों का श्रम-सिद्ध फल जो समस्त
                      साधनों के ऊपर है।” — भागवत परंपरा में यह श्लोक-द्व्यर्थ
                      अभिव्यक्ति है।
                    </p>
                  </div>

                  <div className="rounded-xl border border-stone-200 bg-white p-4">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                      श्लोक २
                    </div>
                    <p className="mt-2 font-devanagari text-base leading-relaxed text-stone-900">
                      सर्गश्च प्रतिसर्गश्च वंशो मन्वन्तराणि च।
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      “पुराण के पाँच लक्षण हैं — सर्ग, प्रतिसर्ग, वंश, मन्वन्तर
                      और वंशानुचरित।” — यह ‘पंच लक्षण’ का शास्त्रीय आधार है।
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-stone-700">
                  यह पठन-खंड ध्रुव नैतिक-सांस्कृतिक संरचना को दर्शाता है: पुराण
                  केवल कथाएँ नहीं, वे सृष्टि, समय, वंश, तीर्थ, भक्ति और मोक्ष की
                  समग्र शास्त्रीय अनुक्रमणिका हैं। इसीलिए वेबसाइट में ‘अध्याय /
                  स्कंध / श्लोक’ को एक सुसंगत पाठ-प्रवेश के रूप में दिखाना
                  आवश्यक है।
                </p>
              </div>
            </div>

            {/* Mahapuranas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPuranas.map((p) => {
                const isSattvika = p.guna.includes("सात्त्विक");
                const isRajasa = p.guna.includes("राजस");
                const badgeColor = isSattvika
                  ? "bg-emerald-50 text-emerald-900 border-emerald-200"
                  : isRajasa
                    ? "bg-amber-50 text-amber-900 border-amber-200"
                    : "bg-indigo-50 text-indigo-900 border-indigo-200";

                return (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all duration-300 p-5 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                          #{p.order}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${badgeColor}`}
                          >
                            {p.guna}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100/70 text-amber-900 border border-amber-200">
                            {p.shlokas}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {p.name}
                      </h3>
                      <div className="text-xs text-amber-900 font-semibold mt-0.5">
                        {p.enName} {p.alternateName && `• ${p.alternateName}`}
                      </div>

                      {/* Presiding Deity */}
                      <div className="mt-2.5 flex items-center gap-1.5 text-xs text-stone-600 font-devanagari">
                        <Crown className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                        <span>
                          उपास्य देव: <strong>{p.presidingDeity}</strong>
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-stone-600 font-devanagari mt-2.5 leading-relaxed line-clamp-3">
                        {p.desc}
                      </p>

                      {/* Major Sections Chips */}
                      <div className="mt-4 pt-3 border-t border-stone-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                          प्रमुख खण्ड / अध्याय
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {p.majorKhandas.slice(0, 3).map((kh, kidx) => (
                            <span
                              key={kidx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-[#fffaf0] border border-amber-200 text-amber-900 font-devanagari"
                            >
                              {kh}
                            </span>
                          ))}
                          {p.majorKhandas.length > 3 && (
                            <span className="text-[10px] px-1.5 py-0.5 text-stone-400 font-bold">
                              +{p.majorKhandas.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setSelectedPuranaModal(p)}
                        className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>सारांश</span>
                      </button>

                      <Link
                        to={`/library/purana/${p.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 hover:bg-amber-100 font-bold text-xs transition-colors"
                        title="विस्तृत अध्ययन करें"
                      >
                        <span>ग्रंथ संरचना</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: VALMIKI RAMAYANA (वाल्मीकि रामायण) */}
        {/* ========================================================================= */}
        {activeTab === "ramayana" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Ramayana Overview Banner */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-900 border border-orange-200">
                  <Heart className="w-3.5 h-3.5 text-orange-700" />
                  <span>आदिकाव्य • महर्षि वाल्मीकि</span>
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  श्रीमद्वाल्मीकि रामायण (Valmiki Ramayana)
                </h2>
                <p className="text-sm text-stone-600 font-devanagari leading-relaxed">
                  २४,००० पावन श्लोकों में निबद्ध यह महाकाव्य 'मर्यादा
                  पुरुषोत्तम' भगवान श्रीराम के दिव्य चरित्र, सत्यनिष्ठा,
                  भ्रातृ-प्रेम, धर्म-पालन और शरणागति का अमर आलोक है।
                </p>

                {/* Gayatri Ramayana Connection Highlight */}
                <div className="p-3.5 rounded-xl bg-orange-50/80 border border-orange-200 text-xs font-devanagari text-orange-950">
                  <strong className="text-orange-900 block mb-0.5">
                    गायत्री रामायण का गुप्त रहस्य:
                  </strong>
                  {RAMAYANA_DATA.gayatriConnection}
                </div>
              </div>

              {/* Ramayana Metric Box & Direct Action */}
              <div className="flex sm:flex-col gap-3 w-full lg:w-auto">
                <div className="bg-[#fffdf8] p-4 rounded-2xl border border-amber-200 text-center min-w-[140px]">
                  <div className="font-serif text-2xl font-bold text-amber-800">
                    ७
                  </div>
                  <div className="text-xs font-bold text-stone-700">
                    काण्ड (Books)
                  </div>
                </div>
                <div className="bg-[#fffdf8] p-4 rounded-2xl border border-amber-200 text-center min-w-[140px]">
                  <div className="font-serif text-2xl font-bold text-amber-800">
                    ~५००
                  </div>
                  <div className="text-xs font-bold text-stone-700">
                    सर्ग (Cantos)
                  </div>
                </div>
                <Link
                  to="/library/itihasa/valmiki-ramayana"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-2xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-2xs"
                >
                  <span>विस्तृत रामायण संरचना</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* 7 Kandas Interactive Journey */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Scroll className="w-5 h-5 text-amber-700" />
                <span>रामायण के सात काण्ड (The 7 Kandas Journey)</span>
              </h3>

              <div className="space-y-4">
                {RAMAYANA_DATA.kandas.map((kd) => (
                  <div
                    key={kd.id}
                    className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-all"
                  >
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-100 text-amber-900">
                            काण्ड #{kd.order}
                          </span>
                          <span className="text-xs text-stone-500 font-semibold">
                            {kd.sargas} सर्ग • {kd.shlokas.toLocaleString()}{" "}
                            श्लोक
                          </span>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-stone-900">
                          {kd.name}{" "}
                          <span className="text-sm font-sans font-normal text-stone-500">
                            ({kd.enName})
                          </span>
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-1 leading-relaxed">
                          {kd.desc}
                        </p>
                      </div>

                      <div className="text-xs font-semibold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 self-start lg:self-center whitespace-nowrap">
                        संदेश: {kd.centralMessage}
                      </div>
                    </div>

                    {/* Key Episodes List */}
                    <div className="mt-4 pt-3.5 border-t border-stone-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                        प्रमुख ऐतिहासिक घटनाक्रम एवं आख्यान:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {kd.keyEpisodes.map((ep, epIdx) => (
                          <div
                            key={epIdx}
                            className="text-xs text-stone-700 bg-[#fffaf0] p-2.5 rounded-lg border border-stone-200/80 font-devanagari flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                            <span>{ep}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: MAHABHARATA (महाभारत एवं गीता) */}
        {/* ========================================================================= */}
        {activeTab === "mahabharata" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Mahabharata Overview Card */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 text-purple-900 border border-purple-200">
                  <Shield className="w-3.5 h-3.5 text-purple-700" />
                  <span>पञ्चम वेद • शतसाहस्री संहिता (१,००,००० श्लोक)</span>
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  महाभारत (The Mahabharata)
                </h2>
                <p className="text-sm text-stone-600 font-devanagari leading-relaxed">
                  महर्षि वेदव्यास रचित एवं भगवान श्रीगणेश द्वारा लिपिबद्ध विश्व
                  का सबसे विशाल महाकाव्य। धर्म, अर्थ, काम और मोक्ष—मानव जीवन का
                  ऐसा कोई रहस्य नहीं जो महाभारत में समाहित न हो।
                </p>

                {/* Evolutionary Stages */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {MAHABHARATA_DATA.evolutionStages.map((stg, stgIdx) => (
                    <div
                      key={stgIdx}
                      className="px-3 py-1.5 rounded-xl bg-purple-50 border border-purple-200 text-xs font-devanagari text-purple-950"
                    >
                      <strong>{stg.stage}</strong> ({stg.count}):{" "}
                      <span className="text-purple-900/80">{stg.desc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maxim Quote Box & Actions */}
              <div className="flex flex-col gap-3 w-full lg:w-auto min-w-[220px]">
                <div className="bg-[#fcf8ff] p-5 rounded-2xl border border-purple-200/80 text-xs font-devanagari text-purple-900 max-w-xs">
                  <strong className="block text-purple-950 mb-1">
                    महाभारत का अमर उद्घोष:
                  </strong>
                  "{MAHABHARATA_DATA.famousMaxim}"
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                  <Link
                    to="/library/itihasa/mahabharata"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-purple-800 text-white text-xs font-bold hover:bg-purple-900 transition-colors shadow-2xs"
                  >
                    <span>महाभारत १८ पर्व संरचना</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to="/library/itihasa/bhagavad-gita"
                    className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-2xs"
                  >
                    <span>श्रीमद्भगवद्गीता (७०० श्लोक)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* The 5 Philosophical Jewels Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    महाभारत के पाँच दार्शनिक रत्न (5 Philosophical Jewels)
                  </h3>
                  <p className="text-xs text-stone-500 font-devanagari">
                    कुरुक्षेत्र के महायुद्ध के भीतर छुपे अध्यात्म, आत्मविद्या और
                    नीति के अनमोल शिखर
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {MAHABHARATA_DATA.philosophicalJewels.map((j) => (
                  <div
                    key={j.id}
                    className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                          {j.location}
                        </span>
                        <span className="text-[10px] text-stone-500 font-bold">
                          {j.size}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-stone-900">
                        {j.title}
                      </h4>
                      <p className="text-xs text-stone-500 font-semibold mt-0.5">
                        वक्ता: {j.speaker}
                      </p>

                      <div className="mt-3.5 space-y-1.5 pt-3 border-t border-stone-100">
                        {j.coreTeachings.map((ct, ctIdx) => (
                          <div
                            key={ctIdx}
                            className="text-xs text-stone-700 font-devanagari flex items-start gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 flex-shrink-0" />
                            <span>{ct}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedJewelModal(j)}
                      className="mt-4 pt-3 border-t border-stone-100 text-xs font-bold text-amber-800 hover:text-amber-950 flex items-center justify-between cursor-pointer"
                    >
                      <span>अध्ययन करें (Explore Jewel)</span>
                      <span>→</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* 18 Parvas Timeline List */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-700" />
                <span>महाभारत के अठारह पर्व (The 18 Parvas Timeline)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {MAHABHARATA_DATA.parvas.map((pv) => (
                  <div
                    key={pv.id}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-purple-300 shadow-2xs hover:shadow-xs transition-all"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-purple-900 bg-purple-50 px-2 py-0.5 rounded-md">
                        पर्व #{pv.order}
                      </span>
                      <span className="text-[11px] text-stone-400 font-semibold">
                        {pv.adhyayas} अध्याय • {pv.shlokas.toLocaleString()}{" "}
                        श्लोक
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-bold text-stone-900">
                      {pv.name}{" "}
                      <span className="text-xs font-sans font-normal text-stone-500">
                        ({pv.enName})
                      </span>
                    </h4>
                    <p className="text-xs text-stone-600 font-devanagari mt-1.5 leading-relaxed line-clamp-3">
                      {pv.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: PANCHA LAKSHANA & UPAPURANAS (पंच लक्षण व उपपुराण) */}
        {/* ========================================================================= */}
        {activeTab === "panchalakshana" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Pancha Lakshana Definition Hero */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                CLASSICAL DEFINITION
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2 mb-1">
                पुराण के पंच लक्षण (Pancha Lakshana)
              </h2>
              <p className="text-xs text-stone-500 mb-4 font-serif italic">
                {PANCHA_LAKSHANA.source}
              </p>

              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-300/80 text-amber-950 font-serif text-base sm:text-lg mb-4">
                "{PANCHA_LAKSHANA.sanskritVerse}"
              </div>
              <p className="text-xs sm:text-sm text-stone-700 font-devanagari leading-relaxed">
                {PANCHA_LAKSHANA.translation}
              </p>

              {/* 5 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                {PANCHA_LAKSHANA.characteristics.map((c, cIdx) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-2xl bg-[#fffdf8] border border-amber-200/80 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 font-bold flex items-center justify-center text-sm mb-2">
                      {cIdx + 1}
                    </div>
                    <h3 className="font-serif text-base font-bold text-stone-900">
                      {c.name}
                    </h3>
                    <p className="text-[11px] text-amber-800 font-semibold mb-2">
                      {c.subtitle}
                    </p>
                    <p className="text-xs text-stone-600 font-devanagari leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 18 Upapuranas Section */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    प्रमुख १८ उपपुराण (The 18 Upapuranas)
                  </h3>
                  <p className="text-xs text-stone-500 font-devanagari">
                    कूर्म पुराण एवं बृहद्धर्म पुराण अनुसार विशिष्ट ऋषि व
                    सम्प्रदाय परम्परा के ग्रंथ
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200">
                  १८ उपलब्ध उपपुराण
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {UPAPURANAS_DATA.map((up, upIdx) => (
                  <div
                    key={upIdx}
                    className="p-4 rounded-xl bg-[#fffaf0] border border-stone-200 hover:border-amber-300 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif text-sm font-bold text-stone-900">
                        {up.name}
                      </h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900">
                        {up.deity}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-devanagari leading-relaxed mt-1">
                      {up.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL: PURANA DEEP DETAILS MODAL */}
      {/* ========================================================================= */}
      {selectedPuranaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                  {selectedPuranaModal.guna} • {selectedPuranaModal.shlokas}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {selectedPuranaModal.name} ({selectedPuranaModal.enName})
                </h3>
              </div>
              <button
                onClick={() => setSelectedPuranaModal(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-xs sm:text-sm font-devanagari">
              <div>
                <strong className="text-amber-900 block mb-0.5">
                  उपास्य देव एवं स्वरूप:
                </strong>
                <p className="text-stone-700">
                  {selectedPuranaModal.presidingDeity}
                </p>
              </div>

              <div>
                <strong className="text-amber-900 block mb-0.5">
                  संरचना एवं विभाजन:
                </strong>
                <p className="text-stone-700">
                  {selectedPuranaModal.structure}
                </p>
              </div>

              <div>
                <strong className="text-amber-900 block mb-1">
                  प्रमुख आख्यान व ऐतिहासिक घटनाएँ:
                </strong>
                <ul className="list-disc pl-5 space-y-1 text-stone-700">
                  {selectedPuranaModal.keyNarratives.map((kn, idx) => (
                    <li key={idx}>{kn}</li>
                  ))}
                </ul>
              </div>

              <div>
                <strong className="text-amber-900 block mb-1">
                  प्रसिद्ध स्तोत्र एवं मंत्र:
                </strong>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPuranaModal.famousStotras.map((fs, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-900 font-semibold border border-amber-200"
                    >
                      {fs}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#fffaf0] border border-amber-200">
                <strong className="text-amber-900 block mb-0.5">
                  दार्शनिक संदेश:
                </strong>
                <p className="text-stone-700 leading-relaxed">
                  {selectedPuranaModal.philosophy}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <Link
                to={`/library/purana/${selectedPuranaModal.slug}`}
                onClick={() => setSelectedPuranaModal(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-2xs"
              >
                <span>विस्तृत ग्रंथ संरचना देखें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedPuranaModal(null)}
                className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition-colors cursor-pointer"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: PHILOSOPHICAL JEWEL MODAL */}
      {/* ========================================================================= */}
      {selectedJewelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-purple-900 uppercase px-2.5 py-0.5 rounded-full bg-purple-50 border border-purple-200">
                  {selectedJewelModal.location}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {selectedJewelModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedJewelModal(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-devanagari">
              <p className="text-stone-700">
                <strong>वक्ता:</strong> {selectedJewelModal.speaker} •{" "}
                <strong>विस्तार:</strong> {selectedJewelModal.size}
              </p>

              <div>
                <strong className="text-purple-950 block mb-1.5">
                  मूल उपदेश एवं सिद्धांत:
                </strong>
                <ul className="space-y-2">
                  {selectedJewelModal.coreTeachings.map((ct, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-purple-50/50 border border-purple-100 text-purple-950"
                    >
                      {ct}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-end">
              <button
                onClick={() => setSelectedJewelModal(null)}
                className="px-5 py-2 rounded-xl bg-purple-900 text-white text-xs font-bold hover:bg-purple-950 transition-colors cursor-pointer"
              >
                समझ लिया (Understood)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
