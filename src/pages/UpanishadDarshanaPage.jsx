import React, { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import {
  BookOpen,
  ArrowRight,
  Sparkles,
  Search,
  Filter,
  Layers,
  Scroll,
  Sun,
  Flame,
  CheckCircle2,
  ChevronRight,
  Compass,
  X,
  Info,
  ExternalLink,
  Brain,
  Eye,
  GraduationCap,
} from "lucide-react";
import {
  UPANISHAD_ETYMOLOGY,
  MAHAVAKYAS_DATA,
  MUKHYA_UPANISHADS_DATA,
  MUKTIKA_CANON_SUMMARY,
} from "../data/upanishadData.js";
import {
  DARSHANA_ETYMOLOGY,
  SHAD_DARSHANAS_DATA,
  DARSHANA_COMPARISON_MATRIX,
  NASTIKA_DARSHANAS_DATA,
  DARSHANA_NESTED_TAXONOMY_TREE,
} from "../data/darshanaData.js";
import {
  getScriptureReaderData,
  UPANISHADS_SCRIPTURE_DATA,
  DARSHANA_SCRIPTURE_DATA,
} from "../data/scriptures/index.js";
import ScriptureReaderView from "../components/common/ScriptureReaderView.jsx";
import DarshanaTaxonomyView from "../components/knowledge/DarshanaTaxonomyView.jsx";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
import cardUpanishadImg from "../assets/images/library/cards/card-upanishad.jpg";

export const READER_UPANISHADS = [
  {
    slug: "prashna-upanishad",
    name: "प्रश्नोपनिषद्",
    veda: "अथर्ववेद",
    summary: "६ प्रश्न • सम्पूर्ण ६७ मन्त्र • कबंधी, भार्गव, कौसल्य, सौर्यायणि, सत्यकाम, सुकेशा संवाद",
    totalItems: 67,
    chaptersCount: 6,
    isComplete: true,
  },
  {
    slug: "isha-upanishad",
    name: "ईशावास्योपनिषद्",
    veda: "शुक्ल यजुर्वेद (वाजसनेयि ४०)",
    summary: "सम्पूर्ण १८ मन्त्र • त्यागपूर्वक भोग, निष्काम कर्म, सत्य का साक्षात्कार",
    totalItems: 18,
    chaptersCount: 1,
    isComplete: true,
  },
  {
    slug: "mandukya-upanishad",
    name: "माण्डूक्योपनिषद्",
    veda: "अथर्ववेद",
    summary: "सम्पूर्ण १२ मन्त्र • जाग्रत, स्वप्न, सुषुप्ति व अमात्र तुरीय अवस्था (अ-उ-म)",
    totalItems: 12,
    chaptersCount: 1,
    isComplete: true,
  },
  {
    slug: "taittiriya-upanishad",
    name: "तैत्तिरीयोपनिषद्",
    veda: "कृष्ण यजुर्वेद",
    summary: "३ वल्लियाँ • १८ मन्त्र • शिक्षावल्ली (सत्यं वद धर्मं चर), ब्रह्मानन्दवल्ली (पञ्चकोश विवेक), भृगुवल्ली (अन्नं ब्रह्मेति)",
    totalItems: 18,
    chaptersCount: 3,
  },
  {
    slug: "chandogya-upanishad",
    name: "छान्दोग्योपनिषद्",
    veda: "सामवेद (कौथुम शाखा)",
    summary: "३ प्रपाठक • १४ मन्त्र • ॐकार उद्गीथ १.१, शाण्डिल्य विद्या ३.१४, तत्त्वमसि महावाक्य ६.८ (वट-बीज व लवण-जल दृष्टान्त)",
    totalItems: 14,
    chaptersCount: 3,
  },
  {
    slug: "brihadaranyaka-upanishad",
    name: "बृहदारण्यकोपनिषद्",
    veda: "शुक्ल यजुर्वेद (काण्व/माध्यन्दिन)",
    summary: "३ अध्याय • ८ मन्त्र • पवमान मन्त्र (असतो मा सद्गमय), अहं ब्रह्मास्मि, मैत्रेयी संवाद (आत्मनस्तु कामाय सर्वं प्रियं भवति), नेति नेति",
    totalItems: 8,
    chaptersCount: 3,
  },
  {
    slug: "katha-upanishad",
    name: "कठोपनिषद्",
    veda: "कृष्ण यजुर्वेद (कठ शाखा)",
    summary: "२ अध्याय • ५ मन्त्र • नचिकेता-यम संवाद, अग्नि विद्या, श्रेयस् व प्रेयस्, आत्म-रथ रूपक",
    totalItems: 5,
    chaptersCount: 2,
  },
  {
    slug: "mundaka-upanishad",
    name: "मुण्डकोपनिषद्",
    veda: "अथर्ववेद (शौनक शाखा)",
    summary: "४ मुण्डक • १४ मन्त्र • परा व अपरा विद्या, द्वा सुपर्णा सयुजा सखाया, सत्यमेव जयते नानृतम्",
    totalItems: 14,
    chaptersCount: 4,
  },
  {
    slug: "kena-upanishad",
    name: "केनोपनिषद्",
    veda: "सामवेद (तलवकार शाखा)",
    summary: "१ खंड • २ मन्त्र • केनेषितं पतति प्रेषितं मनः, यक्ष उपाख्यान",
    totalItems: 2,
    chaptersCount: 1,
  },
];

export const READER_DARSHANAS = [
  {
    slug: "yoga",
    name: "योग दर्शन (पातञ्जल योगसूत्र)",
    founder: "महर्षि पतञ्जलि",
    summary: "४ पाद • ३२ प्रमुख सूत्र • समाधि, साधन (अष्टांग योग), विभूति एवं कैवल्य पाद",
    totalItems: 32,
    chaptersCount: 4,
  },
  {
    slug: "vedanta",
    name: "वेदान्त दर्शन (ब्रह्मसूत्र)",
    founder: "महर्षि बादरायण व्यास",
    summary: "४ अध्याय • १५ प्रमुख सूत्र • चतुःसूत्री (अथातो ब्रह्मजिज्ञासा, जन्माद्यस्य यतः...), समन्वय, अविरोध, साधन व फल",
    totalItems: 15,
    chaptersCount: 4,
  },
  {
    slug: "samkhya",
    name: "सांख्य दर्शन (सांख्यकारिका व प्रवचन सूत्र)",
    founder: "महर्षि कपिल / ईश्वरकृष्ण",
    summary: "२ अध्याय • १० कारिकाएँ/सूत्र • दुःखत्रय, २५ तत्त्व, सत्कार्यवाद, प्रकृति-पुरुष विवेक",
    totalItems: 10,
    chaptersCount: 2,
  },
  {
    slug: "nyaya",
    name: "न्याय दर्शन (न्याय सूत्र)",
    founder: "महर्षि अक्षपाद गौतम",
    summary: "१ अध्याय • ७ सूत्र • १६ पदार्थ, ४ प्रमाण, पञ्चावयव अनुमान, निःश्रेयस प्राप्ति",
    totalItems: 7,
    chaptersCount: 1,
  },
  {
    slug: "vaisheshika",
    name: "वैशेषिक दर्शन (वैशेषिक सूत्र)",
    founder: "महर्षि कणाद",
    summary: "२ अध्याय • ५ सूत्र • धर्म लक्षण, द्रव्य-गुण-कर्म, परमाणुवाद (द्व्यणुक-त्र्यणुक)",
    totalItems: 5,
    chaptersCount: 2,
  },
  {
    slug: "mimamsa",
    name: "पूर्व मीमांसा दर्शन (मीमांसा सूत्र)",
    founder: "महर्षि जैमिनि",
    summary: "२ अध्याय • ६ सूत्र • अथातो धर्मजिज्ञासा, चोदनालक्षणोऽर्थो धर्मः, शब्द नित्यत्व व अपूर्व",
    totalItems: 6,
    chaptersCount: 2,
  },
];

export default function UpanishadDarshanaPage({ onOpenSearch }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Tab state: 'reader', 'taxonomy', 'upanishad', 'darshana', 'mahavakya', 'muktika'
  const initialTab = searchParams.get("tab") || "reader";
  const [activeTab, setActiveTab] = useState(initialTab);

  // Reader state
  const initialScripture = searchParams.get("scripture") || "prashna-upanishad";
  const [selectedReaderSlug, setSelectedReaderSlug] = useState(initialScripture);
  const [readerCategory, setReaderCategory] = useState(
    ["yoga", "vedanta", "samkhya", "nyaya", "vaisheshika", "mimamsa"].includes(initialScripture)
      ? "darshanas"
      : "upanishads"
  );

  // Search & Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUpanishadModal, setSelectedUpanishadModal] = useState(null);
  const [selectedDarshanaModal, setSelectedDarshanaModal] = useState(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && tabParam !== activeTab) {
      setActiveTab(tabParam);
    }
    const scriptureParam = searchParams.get("scripture");
    if (scriptureParam && scriptureParam !== selectedReaderSlug) {
      setSelectedReaderSlug(scriptureParam);
      if (["yoga", "vedanta", "samkhya", "nyaya", "vaisheshika", "mimamsa"].includes(scriptureParam)) {
        setReaderCategory("darshanas");
      } else {
        setReaderCategory("upanishads");
      }
    }
  }, [searchParams]);

  const handleTabChange = (tabId, scriptureSlug = null) => {
    setActiveTab(tabId);
    const params = { tab: tabId };
    if (scriptureSlug) {
      params.scripture = scriptureSlug;
      setSelectedReaderSlug(scriptureSlug);
    }
    setSearchParams(params);
    setSearchQuery("");
  };

  const currentReaderScripture = useMemo(() => {
    return (
      getScriptureReaderData(selectedReaderSlug) ||
      UPANISHADS_SCRIPTURE_DATA["prashna-upanishad"]
    );
  }, [selectedReaderSlug]);

  // Filtered Upanishads
  const filteredUpanishads = useMemo(() => {
    if (!searchQuery.trim()) return MUKHYA_UPANISHADS_DATA;
    const q = searchQuery.toLowerCase().trim();
    return MUKHYA_UPANISHADS_DATA.filter((u) => {
      return (
        u.name.toLowerCase().includes(q) ||
        u.enName.toLowerCase().includes(q) ||
        u.veda.toLowerCase().includes(q) ||
        u.centralTheme.toLowerCase().includes(q) ||
        u.keyTeachings.some((kt) => kt.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Filtered Darshanas
  const filteredDarshanas = useMemo(() => {
    if (!searchQuery.trim()) return SHAD_DARSHANAS_DATA;
    const q = searchQuery.toLowerCase().trim();
    return SHAD_DARSHANAS_DATA.filter((d) => {
      return (
        d.name.toLowerCase().includes(q) ||
        d.enName.toLowerCase().includes(q) ||
        d.founder.toLowerCase().includes(q) ||
        d.nature.toLowerCase().includes(q) ||
        d.pramanas.some((pr) => pr.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  return (
    <div className="bg-[#fffaf0] min-h-screen text-stone-900 pb-20">
      {/* 1. Scholarly Hero Section */}
      <div className="relative bg-gradient-to-r from-[#17120a] via-[#241a0e] to-[#1a1209] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40 overflow-hidden shadow-md">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <img
            src={bannerSanctum}
            alt="Sacred Upanishad Sanctum"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#17120a] via-transparent to-black/40 z-0" />

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
              उपनिषद् एवं दर्शन
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-3">
                <Brain className="w-3.5 h-3.5" />
                <span>UPANISHAD & DARSHANA PHILOSOPHY</span>
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
                उपनिषद् एवं दर्शन
                <span className="block text-xl sm:text-2xl font-normal text-amber-200/90 mt-1 font-sans">
                  The Pinnacle of Vedic Non-Dual Realization & The Six Astika
                  Systems
                </span>
              </h1>

              <p className="text-stone-300 text-sm sm:text-base font-devanagari leading-relaxed">
                वेदों का ज्ञानकाण्ड (वेदान्त) और भारतीय मेधा के ६ सर्वोच्च
                दार्शनिक तंत्र — आत्मा, परमात्मा, संसार और मुक्ति के परम सत्य का
                वैज्ञानिक, तार्किक एवं अपरोक्षानुभूतिपरक निरूपण।
              </p>

              {/* Shanti Invocation Banner */}
              <div className="mt-5 p-3.5 rounded-xl bg-amber-950/60 border border-amber-600/40 text-amber-100 text-xs sm:text-sm font-devanagari leading-relaxed">
                <span className="font-bold text-amber-300 block mb-0.5">
                  ॐ पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते। पूर्णस्य
                  पूर्णमादाय पूर्णमेवावशिष्यते॥
                </span>
                <span className="text-amber-200/80 text-xs">
                  — ईशावास्य / बृहदारण्यक उपनिषद् शांति पाठ (परब्रह्म की अखंड
                  पूर्णता)
                </span>
              </div>
            </div>

            {/* Metrics Badge Box */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full lg:w-auto self-stretch lg:self-auto text-center">
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  ११
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  मुख्य उपनिषद्
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  शंकर भाष्य युक्त
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  ४
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  महावाक्य
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  चार वेदों के सूत्र
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  ६
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  षड्दर्शन
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  आस्तिक दर्शन परंपरा
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-amber-500/30 rounded-2xl p-4">
                <div className="font-serif text-2xl font-bold text-amber-300">
                  १०८
                </div>
                <div className="text-[11px] text-stone-300 font-semibold uppercase">
                  मुक्तिक कोष
                </div>
                <div className="text-[10px] text-stone-400 mt-0.5">
                  कल्याणकारी उपनिषद
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
                id: "reader",
                label: "मूल ग्रंथ श्लोक एवं सूत्र वाचन",
                en: "Scripture & Sutra Reader",
                icon: BookOpen,
              },
              {
                id: "taxonomy",
                label: "दर्शन वर्गीकरण एवं उप-परंपराएँ",
                en: "Philosophical Taxonomy",
                icon: Layers,
              },
              {
                id: "upanishad",
                label: "११ मुख्य उपनिषद्",
                en: "11 Principal Upanishads",
                icon: Scroll,
              },
              {
                id: "darshana",
                label: "षड्दर्शन (६ दर्शन)",
                en: "The 6 Astika Schools",
                icon: Brain,
              },
              {
                id: "mahavakya",
                label: "४ महावाक्य",
                en: "4 Great Mahavakyas",
                icon: Sparkles,
              },
              {
                id: "muktika",
                label: "१०८ मुक्तिक कोष",
                en: "108 Muktika Canon",
                icon: Sun,
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
        {/* TAB 0A: SCRIPTURE & SUTRA PAGINATED READER */}
        {/* ========================================================================= */}
        {activeTab === "reader" && (
          <div className="space-y-6 animate-fadeIn">
            {/* Reader Header Banner */}
            <div className="bg-gradient-to-r from-[#17120a] via-[#241a0e] to-[#1a1209] text-white p-6 sm:p-7 rounded-3xl border border-amber-900/40 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>AUTHENTIC SCRIPTURE & SUTRA PAGINATED READER</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  मूल ग्रंथ श्लोक एवं सूत्र वाचन
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm font-devanagari mt-1 max-w-2xl leading-relaxed">
                  उपनिषदों के प्रामाणिक मन्त्र एवं षड्दर्शनों के मूल सूत्र — १० या २० प्रति पृष्ठ क्रमबद्ध वाचन, देवनागरी पाठ, IAST रोमन लिप्यंतरण, हिन्दी भावार्थ, अंग्रेजी अनुवाद एवं शास्त्राधारित भाष्य।
                </p>
              </div>

              {/* Category Switcher: Upanishads vs Darshanas */}
              <div className="flex items-center gap-2 bg-black/40 p-1.5 rounded-2xl border border-amber-800/40 shrink-0">
                <button
                  type="button"
                  onClick={() => {
                    setReaderCategory("upanishads");
                    setSelectedReaderSlug("prashna-upanishad");
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    readerCategory === "upanishads"
                      ? "bg-amber-600 text-white shadow-2xs"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  उपनिषद् (९ ग्रंथ)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setReaderCategory("darshanas");
                    setSelectedReaderSlug("yoga");
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    readerCategory === "darshanas"
                      ? "bg-amber-600 text-white shadow-2xs"
                      : "text-stone-300 hover:text-white"
                  }`}
                >
                  षड्दर्शन सूत्र (६ दर्शन)
                </button>
              </div>
            </div>

            {/* Scripture Selector Bar */}
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  {readerCategory === "upanishads" ? "वाचन हेतु उपनिषद् चुनें:" : "वाचन हेतु दर्शन सूत्र चुनें:"}
                </span>
                <span className="text-[11px] text-amber-900 font-semibold">
                  चयनित: {currentReaderScripture?.label}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {(readerCategory === "upanishads" ? READER_UPANISHADS : READER_DARSHANAS).map((item) => {
                  const isSelected = selectedReaderSlug === item.slug;
                  return (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => setSelectedReaderSlug(item.slug)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-amber-800 text-white shadow-xs font-bold"
                          : "bg-stone-50 text-stone-700 hover:bg-amber-50 hover:text-amber-900 border border-stone-200/80"
                      }`}
                    >
                      <span>{item.name}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isSelected ? "bg-amber-700 text-amber-100" : "bg-stone-200 text-stone-600"
                        }`}
                      >
                        {item.totalItems} {readerCategory === "upanishads" ? "मन्त्र" : "सूत्र"}
                      </span>
                      {item.isComplete && (
                        <span
                          className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                            isSelected ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-800"
                          }`}
                        >
                          पूर्ण पाठ
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Paginated ScriptureReaderView */}
            <ScriptureReaderView scripture={currentReaderScripture} />
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 0B: PHILOSOPHY TAXONOMY & NESTED SUB-SCHOOLS */}
        {/* ========================================================================= */}
        {activeTab === "taxonomy" && (
          <DarshanaTaxonomyView
            onSelectReaderText={(schoolId) => {
              setReaderCategory("darshanas");
              setSelectedReaderSlug(schoolId);
              handleTabChange("reader", schoolId);
            }}
          />
        )}

        {/* ========================================================================= */}
        {/* TAB 1: 11 MUKHYA UPANISHADS */}
        {/* ========================================================================= */}
        {activeTab === "upanishad" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-stone-200/90 shadow-2xs">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  ग्यारह मुख्य उपनिषद् (11 Principal Upanishads)
                </h2>
                <p className="text-xs text-stone-500 font-devanagari mt-1">
                  श्रीमद् आद्य शंकराचार्य भाष्य युक्त — ईश, केन, कठ, प्रश्न,
                  मुण्डक, माण्डूक्य, तैत्तिरीय, ऐतरेय, छान्दोग्य, बृहदारण्यक एवं
                  श्वेताश्वतर
                </p>
              </div>

              {/* Text Search */}
              <div className="relative min-w-[220px]">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="उपनिषद, वेद या सूत्र खोजें..."
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

            {/* Deep Research Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-cyan-800 font-semibold text-sm mb-2">
                  <Brain className="w-4 h-4" />
                  Core Question
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  उपनिषदों का मूल प्रश्न है — “अहं कौन हूँ?”, “आत्मा क्या है?”,
                  “ब्रह्म किससे जुड़ा है?”, और “मुक्ति का मार्ग क्या है?”
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-white border border-amber-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-amber-800 font-semibold text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  Key Vision
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  ईश, कठ, बृहदारण्यक, छान्दोग्य और माण्डूक्य जैसे ग्रंथ आत्मा,
                  ब्रह्म, अज्ञान, ज्ञान और भगवत्-प्राप्ति के बीच का
                  तार्किक-आध्यात्मिक संबंध समझाते हैं।
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Why It Matters
                </div>
                <p className="text-sm text-stone-700 leading-relaxed">
                  ये ग्रंथ न केवल आध्यात्मिक चिंतन देते हैं, बल्कि नैतिक जीवन,
                  ध्यान, विवेक, शांति और मुक्ति के व्यावहारिक आधार भी प्रस्तुत
                  करते हैं।
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-200/80 bg-gradient-to-br from-cyan-50 via-white to-stone-50 p-6 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700">
                    Research Framework
                  </p>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                    उपनिषदों की संरचना और दर्शन का समन्वय
                  </h3>
                </div>
                <span className="inline-flex items-center rounded-full border border-cyan-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-cyan-800">
                  tradition-aware reading
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    मुख्य परंपरा
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    ११
                  </div>
                  <div className="text-xs text-stone-600">
                    मुख्य उपनिषदों की शास्त्रीय सूची
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    महावाक्य
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    ४
                  </div>
                  <div className="text-xs text-stone-600">
                    प्रज्ञानं ब्रह्म, तत्त्वमसि, अहं ब्रह्मास्मि, ayam atma
                    brahma
                  </div>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-white p-4">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-stone-500">
                    दर्शन
                  </div>
                  <div className="mt-2 font-serif text-2xl font-bold text-stone-900">
                    ६
                  </div>
                  <div className="text-xs text-stone-600">
                    न्याय, वैशेषिक, सांख्य, योग, मीमांसा, वेदांत
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-stone-700">
                उपनिषदों की ‘११ मुख्य’ सूची तथा ‘१०८ उपनिषद’ की सूची अलग-अलग
                परंपराओं और संपादनों में थोड़ी भिन्न हो सकती है, इसलिए इसे एकदम
                अंतिम, पूर्ण रूप से सार्वभौमिक सूची नहीं माना जाता। यह सूची
                मुख्यतः वेदान्त, संस्कृत परंपरा और परवर्ती शास्त्रीय संकलनों की
                मान्यता पर आधारित है। मुख्य उपनिषदों का मर्म यह है कि वे आत्मा,
                ब्रह्म, प्राण-तत्व, स्वप्न-सुषुप्ति, ध्यान, शांति और मोक्ष के
                सवालों को तार्किक-आध्यात्मिक ढंग से उठाते हैं।
              </p>
            </div>

            {/* Upanishads Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUpanishads.map((u, idx) => (
                <div
                  key={u.id}
                  className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all p-5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-700">
                        #{idx + 1}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {u.mantrasCount}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {u.name}
                    </h3>
                    <div className="text-xs text-amber-800 font-semibold mt-0.5">
                      {u.veda}
                    </div>

                    <p className="text-xs text-stone-600 font-devanagari mt-2.5 leading-relaxed line-clamp-3">
                      {u.centralTheme}
                    </p>

                    {/* Shanti Mantra Snippet */}
                    <div className="mt-3 p-2.5 rounded-xl bg-[#fffdf8] border border-amber-200/80 text-[11px] font-devanagari text-amber-950 italic line-clamp-2">
                      {u.shantiMantra}
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-stone-100 flex items-center justify-between gap-1.5 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setSelectedUpanishadModal(u)}
                      className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>सिद्धांत</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setReaderCategory("upanishads");
                        setSelectedReaderSlug(u.slug);
                        handleTabChange("reader", u.slug);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-800 text-white hover:bg-amber-900 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                      title="मूल श्लोक वाचन"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>श्लोक वाचन</span>
                    </button>
                    <Link
                      to={`/library/upanishad/${u.slug}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-900 hover:bg-amber-100 font-bold text-xs transition-colors"
                      title="विस्तृत उपनिषद संरचना"
                    >
                      <span>मंत्र संरचना</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: 4 MAHAVAKYAS */}
        {/* ========================================================================= */}
        {activeTab === "mahavakya" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                VEDIC FOUNDATION
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2 mb-2">
                चार वेदों के चार महावाक्य (The 4 Great Mahavakyas)
              </h2>
              <p className="text-sm text-stone-600 font-devanagari leading-relaxed max-w-3xl">
                वेदों के ज्ञानकाण्ड का सार चार महावाक्यों में संघनित है। ये केवल
                विचार नहीं हैं, बल्कि लक्षण, उपदेश, अनुभव और साक्षात्कार के रूप
                में शिष्य की अंतःचेतना को ब्रह्ममय बनाने वाले महामंत्र हैं।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MAHAVAKYAS_DATA.map((mv) => (
                <div
                  key={mv.id}
                  className="bg-white rounded-2xl border border-amber-200/90 hover:border-amber-400 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                        {mv.category}
                      </span>
                      <span className="text-xs text-stone-500 font-semibold">
                        {mv.veda}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-amber-900 tracking-wide mb-1">
                      {mv.text}
                    </h3>
                    <div className="text-sm font-sans font-bold text-stone-700 mb-3">
                      {mv.meaning}
                    </div>

                    <div className="p-3 rounded-xl bg-[#fffdf8] border border-amber-200/80 text-xs font-devanagari text-stone-700 leading-relaxed mb-4">
                      {mv.desc}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 font-serif">
                    <span>
                      स्रोत: <strong>{mv.upanishad}</strong>
                    </span>
                    <span className="text-amber-800 font-bold">
                      अपरोक्षानुभूति →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: SHAD-DARSHANAS */}
        {/* ========================================================================= */}
        {activeTab === "darshana" && (
          <div className="space-y-8 animate-fadeIn">
            {/* Darshana Intro Card */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-3xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-900 border border-indigo-200">
                  <Brain className="w-3.5 h-3.5 text-indigo-700" />
                  <span>भारतीय दर्शन • षड्दर्शन (Six Astika Systems)</span>
                </span>
                <h2 className="font-serif text-3xl font-bold text-stone-900">
                  षड्दर्शन: सत्य के छह शाश्वत दृष्टिकोण
                </h2>
                <p className="text-sm text-stone-600 font-devanagari leading-relaxed">
                  "दृश्यते यथार्थतत्त्वं अनेनेति दर्शनम्" — सत्य का यथार्थ
                  साक्षात्कार ही दर्शन है। न्याय-वैशेषिक, सांख्य-योग और
                  मीमांसा-वेदान्त — ये तीन युग्म परस्पर विरोधी नहीं, बल्कि
                  बुद्धि की सूक्ष्मता के अनुसार साधक को स्थूल तर्क से सर्वोच्च
                  अद्वैत ब्रह्मज्ञान तक ले जाने वाली सुव्यवस्थित सोपान हैं।
                </p>
              </div>

              {/* Astika vs Nastika box */}
              <div className="bg-[#f8faff] p-4 rounded-2xl border border-indigo-200 text-xs font-devanagari text-indigo-950 max-w-xs">
                <strong className="block text-indigo-900 mb-1">
                  आस्तिक दर्शन की परिभाषा:
                </strong>
                वेदों की परम प्रामाणिकता को स्वीकार कर मोक्ष की ओर ले जाने वाले
                ६ प्रमुख दर्शन।
              </div>
            </div>

            {/* 6 Darshanas Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDarshanas.map((d) => (
                <div
                  key={d.id}
                  className="bg-white rounded-2xl border border-stone-200/90 hover:border-amber-400 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-stone-500">
                        युग्म: {d.pairedWith}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                        {d.pramanas.length} प्रमाण
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {d.name}{" "}
                      <span className="text-sm font-sans font-normal text-stone-500">
                        ({d.enName})
                      </span>
                    </h3>

                    <div className="text-xs text-stone-600 font-devanagari mt-1">
                      <strong>प्रवर्तक:</strong> {d.founder} •{" "}
                      <strong>मूल ग्रंथ:</strong> {d.foundationalText}
                    </div>

                    <div className="mt-3 p-2.5 rounded-xl bg-[#fffdf8] border border-stone-200 text-xs font-devanagari text-stone-700 leading-relaxed">
                      <strong>स्वरूप:</strong> {d.nature}
                    </div>

                    <div className="mt-3 text-xs text-stone-600 font-devanagari">
                      <strong>स्वीकृत प्रमाण:</strong> {d.pramanas.join(", ")}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between gap-1.5 flex-wrap">
                    <button
                      type="button"
                      onClick={() => setSelectedDarshanaModal(d)}
                      className="text-xs font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>सिद्धांत</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setReaderCategory("darshanas");
                        setSelectedReaderSlug(d.id);
                        handleTabChange("reader", d.id);
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-800 text-white hover:bg-amber-900 font-bold text-xs transition-colors shadow-2xs cursor-pointer"
                      title="मूल सूत्र वाचन"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>सूत्र वाचन</span>
                    </button>
                    <Link
                      to={`/library/darshana/${d.id}`}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 text-indigo-900 hover:bg-indigo-100 font-bold text-xs transition-colors"
                      title="विस्तृत सूत्र संरचना"
                    >
                      <span>विस्तृत संरचना</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Matrix Table */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 overflow-x-auto">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3">
                षड्दर्शन तुलनात्मक सारणी (Comparative Philosophical Matrix)
              </h3>
              <table className="w-full text-xs font-devanagari text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-amber-50/60 text-stone-700">
                    <th className="py-2.5 px-3 font-bold">दर्शन</th>
                    <th className="py-2.5 px-3 font-bold">आचार्य</th>
                    <th className="py-2.5 px-3 font-bold">प्रमाण</th>
                    <th className="py-2.5 px-3 font-bold">परमतत्व का स्वरूप</th>
                    <th className="py-2.5 px-3 font-bold">बंधन का कारण</th>
                    <th className="py-2.5 px-3 font-bold">मुक्ति का साधन</th>
                  </tr>
                </thead>
                <tbody>
                  {DARSHANA_COMPARISON_MATRIX.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-b border-stone-100 hover:bg-[#fffdf8]"
                    >
                      <td className="py-2.5 px-3 font-bold text-amber-900">
                        {row.school}
                      </td>
                      <td className="py-2.5 px-3 text-stone-700">
                        {row.founder}
                      </td>
                      <td className="py-2.5 px-3 text-stone-700">
                        {row.pramanasCount} प्रमाण
                      </td>
                      <td className="py-2.5 px-3 text-stone-700">
                        {row.reality}
                      </td>
                      <td className="py-2.5 px-3 text-stone-700">
                        {row.bondageCause}
                      </td>
                      <td className="py-2.5 px-3 text-emerald-800 font-semibold">
                        {row.path}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: 108 MUKTIKA CANON */}
        {/* ========================================================================= */}
        {activeTab === "muktika" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                108 MUKTIKA CANON
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900 mt-2 mb-2">
                १०८ मुक्तिक उपनिषद् कोष (The 108 Muktika Canon)
              </h2>
              <p className="text-sm text-stone-600 font-devanagari leading-relaxed">
                मुक्तिक उपनिषद में भगवान श्रीराम ने पवनपुत्र हनुमान जी को १०८
                उपनिषदों का क्रम व महात्म्य बताया। वेदों एवं विशिष्ट आध्यात्मिक
                परंपराओं (सामान्य वेदान्त, संन्यास, शाक्त, वैष्णव, शैव, योग) के
                अनुसार इनका सुव्यवस्थित विभाजन।
              </p>

              {/* By Veda Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
                {MUKTIKA_CANON_SUMMARY.byVeda.map((bv, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-4 rounded-2xl bg-[#fffdf8] border border-amber-200/80 text-center"
                  >
                    <div className="font-serif text-2xl font-bold text-amber-900">
                      {bv.count}
                    </div>
                    <div className="text-xs font-bold text-stone-800 mt-0.5">
                      {bv.veda}
                    </div>
                    <div className="text-[10px] text-stone-500 mt-1 line-clamp-1">
                      {bv.key.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* By Category Details */}
            <div className="bg-white rounded-3xl border border-stone-200/90 shadow-2xs p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                विषयगत ७ श्रेणियाँ (Categorical Classification)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {MUKTIKA_CANON_SUMMARY.byCategory.map((cat, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-xl bg-[#fffaf0] border border-stone-200"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-serif text-base font-bold text-stone-900">
                        {cat.category}
                      </h4>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                        {cat.count} उपनिषद
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 font-devanagari mt-1">
                      {cat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* MODAL: UPANISHAD TEACHINGS MODAL */}
      {/* ========================================================================= */}
      {selectedUpanishadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-amber-800 uppercase px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                  {selectedUpanishadModal.veda}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {selectedUpanishadModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedUpanishadModal(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-devanagari">
              <div className="p-3.5 rounded-xl bg-[#fffdf8] border border-amber-200 text-amber-950 italic">
                <strong>शांति पाठ:</strong>{" "}
                {selectedUpanishadModal.shantiMantra}
                <div className="text-xs text-stone-600 mt-1 not-italic">
                  {selectedUpanishadModal.shantiMeaning}
                </div>
              </div>

              <div>
                <strong className="text-amber-900 block mb-1">
                  प्रमुख गूढ़ सिद्धांत व आख्यान:
                </strong>
                <ul className="space-y-2">
                  {selectedUpanishadModal.keyTeachings.map((kt, idx) => (
                    <li
                      key={idx}
                      className="p-2.5 rounded-lg bg-stone-50 border border-stone-200/80 text-stone-800 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 flex-shrink-0" />
                      <span>{kt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <Link
                to={`/library/upanishad/${selectedUpanishadModal.slug}`}
                onClick={() => setSelectedUpanishadModal(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-800 text-white text-xs font-bold hover:bg-amber-900 transition-colors shadow-2xs"
              >
                <span>विस्तृत उपनिषद संरचना देखें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedUpanishadModal(null)}
                className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition-colors cursor-pointer"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL: DARSHANA MODAL */}
      {/* ========================================================================= */}
      {selectedDarshanaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-amber-200 shadow-2xl p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-indigo-900 uppercase px-2.5 py-0.5 rounded-full bg-indigo-50 border border-indigo-200">
                  प्रवर्तक: {selectedDarshanaModal.founder}
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                  {selectedDarshanaModal.name} ({selectedDarshanaModal.enName})
                </h3>
              </div>
              <button
                onClick={() => setSelectedDarshanaModal(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm font-devanagari">
              <p>
                <strong>मूल ग्रंथ:</strong>{" "}
                {selectedDarshanaModal.foundationalText}
              </p>
              <p>
                <strong>स्वीकृत प्रमाण:</strong>{" "}
                {selectedDarshanaModal.pramanas.join(", ")}
              </p>
              {selectedDarshanaModal.padarthas && (
                <p>
                  <strong>मूल पदार्थ:</strong> {selectedDarshanaModal.padarthas}
                </p>
              )}

              {selectedDarshanaModal.traditions && (
                <div>
                  <strong className="text-amber-900 block mb-1">
                    प्रमुख वेदान्त संप्रदाय व आचार्य:
                  </strong>
                  <div className="space-y-2">
                    {selectedDarshanaModal.traditions.map((tr, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-200"
                      >
                        <strong className="text-amber-950 block">
                          {tr.name} — {tr.acharya}
                        </strong>
                        <p className="text-stone-700 text-xs mt-0.5">
                          {tr.tenet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <strong className="text-indigo-950 block mb-1">
                  दार्शनिक आधारभूत सिद्धांत:
                </strong>
                <ul className="space-y-1.5 list-disc pl-5 text-stone-700">
                  {selectedDarshanaModal.corePhilosophy.map((cp, idx) => (
                    <li key={idx}>{cp}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950">
                <strong>मोक्ष (मुक्ति) की अवधारणा:</strong>{" "}
                {selectedDarshanaModal.mokshaView}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <Link
                to={`/library/darshana/${selectedDarshanaModal.id}`}
                onClick={() => setSelectedDarshanaModal(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-900 text-white text-xs font-bold hover:bg-indigo-950 transition-colors shadow-2xs"
              >
                <span>विस्तृत सूत्र संरचना देखें</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => setSelectedDarshanaModal(null)}
                className="px-4 py-2 rounded-xl bg-stone-100 text-stone-700 text-xs font-bold hover:bg-stone-200 transition-colors cursor-pointer"
              >
                बंद करें
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
