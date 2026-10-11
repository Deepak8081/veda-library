import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Home,
  CheckCircle2,
  AlertCircle,
  BookOpen,
  Share2,
  Bookmark,
  Printer,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Flame,
  Layers,
  Copy,
  Check,
  Search,
  X,
  Filter,
  SlidersHorizontal,
  ArrowUp,
  Menu,
  FileText,
  LayoutGrid,
  List,
  Maximize2,
  Minimize2,
  BookMarked
} from "lucide-react";
import { ARTICLES_DATA, CATEGORIES_DATA, SUBJECTS_DATA } from "../../data/categoryTemplatesData.js";
import { findNodeById } from "../../data/vedaHierarchyTree.js";
import cardPujaImg from "../../assets/images/library/cards/card-puja.jpg";
import cardRigvedaImg from "../../assets/images/library/cards/card-rigveda.jpg";
import cardYajurvedaImg from "../../assets/images/library/cards/card-yajurveda.jpg";
import cardSamavedaImg from "../../assets/images/library/cards/card-samaveda.jpg";
import cardAtharvavedaImg from "../../assets/images/library/cards/card-atharvaveda.jpg";
import cardShrautaImg from "../../assets/images/library/cards/card-shrautasutra.jpg";
import cardGrihyaImg from "../../assets/images/library/cards/card-grihyasutra.jpg";
import cardPratiImg from "../../assets/images/library/cards/card-pratishakhya.jpg";
import cardBrahmanaImg from "../../assets/images/library/cards/card-brahmana.jpg";
import cardAranyakaImg from "../../assets/images/library/cards/card-aranyaka.jpg";
import cardUpanishadImg from "../../assets/images/library/cards/card-upanishad.jpg";
import bannerRigveda from "../../assets/images/library/banners/banner-rigveda.jpg";
import bannerYajurveda from "../../assets/images/library/banners/banner-yajurveda.jpg";
import bannerSamaveda from "../../assets/images/library/banners/banner-samaveda.jpg";
import bannerAtharvaveda from "../../assets/images/library/banners/banner-atharvaveda.jpg";
import bannerSanctum from "../../assets/images/library/banners/banner-sanctum.png";
import bannerFireRitual from "../../assets/images/library/banners/banner-fire-ritual.png";
import bannerKashiGhat from "../../assets/images/library/banners/banner-kashi-ghat.png";
import bannerSacredDetails from "../../assets/images/library/banners/banner-sacred-details.png";

const CARD_IMAGES = {
  "card-rigveda.jpg": cardRigvedaImg,
  "card-yajurveda.jpg": cardYajurvedaImg,
  "card-samaveda.jpg": cardSamavedaImg,
  "card-atharvaveda.jpg": cardAtharvavedaImg,
  "card-shrautasutra.jpg": cardShrautaImg,
  "card-grihyasutra.jpg": cardGrihyaImg,
  "card-pratishakhya.jpg": cardPratiImg,
  "card-brahmana.jpg": cardBrahmanaImg,
  "card-aranyaka.jpg": cardAranyakaImg,
  "card-upanishad.jpg": cardUpanishadImg,
  "card-puja.jpg": cardPujaImg
};

const THEMATIC_BANNERS = {
  rigveda: bannerRigveda,
  yajurveda: bannerYajurveda,
  samaveda: bannerSamaveda,
  atharvaveda: bannerAtharvaveda,
  shaiva: bannerYajurveda,
  shodashopachara: bannerYajurveda
};

export default function ArticleDetailPage({ onNavigateHome, onNavigateKnowledge }) {
  const { category = "puja", subject = "shaiva", article = "rudrabhisheka" } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("content-1");
  const [saved, setSaved] = useState(false);
  const [selectedMantraIdx, setSelectedMantraIdx] = useState(0);
  const [showAllMantrasView, setShowAllMantrasView] = useState(false);
  const [copiedMantraIndex, setCopiedMantraIndex] = useState(null);
  const [verseSearch, setVerseSearch] = useState("");
  const [viewMode, setViewMode] = useState("classic"); // "classic", "hymns", "analysis"
  const [isTocDrawerOpen, setIsTocDrawerOpen] = useState(false);
  const [isWideReadingMode, setIsWideReadingMode] = useState(false);
  const [fontSize, setFontSize] = useState("md"); // "sm", "md", "lg"
  const [selectedLanguage, setSelectedLanguage] = useState("hindi"); // "hindi", "english", "hinglish"
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [adhyayaCategory, setAdhyayaCategory] = useState("all");
  const [adhyayaSearch, setAdhyayaSearch] = useState("");
  const [expandedAdhyayaNum, setExpandedAdhyayaNum] = useState(null);
  const [adhyayaViewLayout, setAdhyayaViewLayout] = useState("grid"); // "grid" | "list"

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const subjectKey = `${category}/${subject}`;
  const subjectData =
    SUBJECTS_DATA[subjectKey] ||
    (subject === "shaiva"
      ? { name: "शैव परंपरा", enName: "Shaiva Tradition" }
      : subject === "yajurveda"
      ? { name: "यजुर्वेद", enName: "Yajurveda" }
      : subject === "rigveda"
      ? { name: "ऋग्वेद", enName: "Rigveda" }
      : subject === "samaveda"
      ? { name: "सामवेद", enName: "Samaveda" }
      : subject === "atharvaveda"
      ? { name: "अथर्ववेद", enName: "Atharvaveda" }
      : null);

  const catData = CATEGORIES_DATA[category] || { name: "वेद", enName: "Veda" };

  // Resolve node from master Veda tree if applicable
  const treeMatch = findNodeById(article);
  const foundNode = treeMatch?.node;
  const ancestors = treeMatch?.ancestors || [];
  const vedaAncestor = ancestors.find((a) => a.id !== "root");
  const branchAncestors = ancestors.filter(
    (a) => a.id !== "root" && a.id !== subject && a.id !== vedaAncestor?.id
  );

  // Dynamic Lookup with priority:
  // 1. Explicit in ARTICLES_DATA
  // 2. Tree Node dynamically synthesized
  // 3. Fallback to category / subject context
  let articleData = ARTICLES_DATA[article];

  if (!articleData && foundNode) {
    articleData = {
      id: foundNode.id,
      slug: foundNode.slug || foundNode.id,
      title: foundNode.enName || foundNode.name,
      hindiTitle: foundNode.name,
      contentType: "VEDIC TEXT & LITERATURE",
      tags: [
        "Veda",
        vedaAncestor?.name || "Vedic Heritage",
        foundNode.badge || "Grantha",
        "Source Verified"
      ],
      badges: [
        { label: "Source Verified", type: "verified" },
        { label: "Tradition Verified", type: "neutral" },
        { label: "Library Approved", type: "approved" }
      ],
      intro: `${foundNode.name} (${foundNode.enName || ""}) — ${foundNode.desc || "वैदिक वांग्मय का अत्यंत महत्वपूर्ण एवं प्रामाणिक ग्रंथ।"}\n\nयह ग्रंथ प्राचीन वैदिक ज्ञान, ऋषि परंपरा, मंत्र, छंद, देवता और दार्शनिक रहस्यों का विशद प्रतिपादन करता है। Veda Library में इसके मूल स्वरूप, भाष्य, अनुवाद और शास्त्रीय संदर्भों का अध्ययन उपलब्ध है।`,
      etymology: [
        {
          term: foundNode.name.split(" ")[0] || "पद",
          meaning: "वैदिक संस्कृत व्याकरण एवं निरुक्त के अनुसार विशिष्ट व्युत्पत्ति एवं शास्त्रीय अर्थ।"
        },
        {
          term: "शास्त्रीय संज्ञा",
          meaning: "श्रुति-परंपरा में स्वीकृत प्रामाणिक पारिभाषिक नामकरण।"
        }
      ],
      shastricBase: `वैदिक संहिताओं, ब्राह्मण ग्रंथों, आरण्यकों और उपनिषदों में ${foundNode.name} का विशद संदर्भ प्राप्त होता है। महर्षि सायण, यास्क और शंकराचार्य की भाष्य परंपरा में इसकी प्रामाणिक व्याख्या की गई है।`,
      sourceMeta: {
        grantha: foundNode.name,
        shakha: vedaAncestor?.name ? `${vedaAncestor.name} शाखा परंपरा` : "प्रामाणिक वैदिक शाखा",
        kanda: foundNode.stats || "वैदिक ग्रंथ संग्रह",
        anuvaka: "प्रामाणिक प्रकरण",
        rishi: "प्राचीन वैदिक ऋषि परंपरा",
        devata: "वैदिक देव चेतना",
        chandas: "वैदिक छंद विधान"
      },
      primaryMantra: {
        sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥",
        ref: "वैदिक मंगलाचरण",
        translation: "हम उस सृष्टिकर्ता प्रकाशमान परमात्मा के वरेण्य तेज का ध्यान करते हैं, जो हमारी बुद्धि को सन्मार्ग की ओर प्रेरित करे।"
      },
      deitiesSymbols: "वैदिक वांग्मय में वर्णित समस्त देवता ब्रह्मांडीय शक्तियों और आत्म-चेतना के विभिन्न आयामों का प्रतिनिधित्व करते हैं।",
      traditionPlaces: "सप्तसिंधु, कुरु-पांचाल, नैमिषारण्य, मिथिला और संपूर्ण भारतवर्ष की तपोभूमियाँ।",
      vidhiUsage: "श्रौत-स्मार्त कर्म, दैनिक संध्यावंदन, ब्रह्मयज्ञ, स्वाध्याय और एकांत ध्यान साधना।",
      traditionsDifferences: "विभिन्न शाखाओं में मंत्रों के क्रम, स्वर-विधान और विनियोग में सूक्ष्म पाठ-भेद प्राप्त होते हैं।",
      historyResearch: "प्राचीन तालपत्र पांडुलिपियों, शिलालेखों और आधुनिक आलोचनात्मक संस्करणों में इसका विशद अध्ययन उपलब्ध है।",
      relatedArticles: (foundNode.children || []).slice(0, 4).map((c) => ({
        title: c.name,
        tag: c.badge || "Grantha",
        slug: c.slug || c.id
      })),
      relatedGrantha: {
        name: foundNode.name,
        desc: foundNode.desc || "Vedic Grantha Archive"
      },
      relatedTopics: [
        vedaAncestor?.name || "Veda",
        foundNode.badge || "Grantha",
        "Shruti",
        "Vedic Studies"
      ]
    };
  }

  if (!articleData) {
    articleData = {
      title: "रुद्राभिषेक शास्त्रीय विधान एवं महात्म्य",
      hindiTitle: "रुद्राभिषेक शास्त्रीय विधान एवं महात्म्य",
      contentType: "PUJA & VIDHI ARCHIVE",
      tags: ["Puja", "Yajurveda", "Shiva", "Rudrabhisheka"],
      badges: [
        { label: "Source Verified", type: "verified" },
        { label: "Tradition Verified", type: "neutral" },
        { label: "Library Approved", type: "approved" }
      ],
      intro: "रुद्राभिषेक शुक्ल यजुर्वेद (रुद्राष्टाध्यायी) और कृष्ण यजुर्वेद (तैत्तिरीय संहिता - श्री रुद्रम् / चमकम्) पर आधारित भगवान शिव का सर्वोच्च पावन वैदिक अभिषेक अनुष्ठान है।",
      shastricBase: "शुक्ल यजुर्वेद (अध्याय १६ - श्री रुद्राध्याय), कृष्ण यजुर्वेद तैत्तिरीय संहिता (काण्ड ४, प्रपाठक ५), शिव पुराण एवं स्कन्द पुराण।",
      sourceMeta: {
        grantha: "शुक्ल यजुर्वेद (रुद्राष्टाध्यायी) एवं कृष्ण यजुर्वेद (तैत्तिरीय संहिता)",
        shakha: "माध्यन्दिन वाजसनेयि एवं तैत्तिरीय शाखा",
        kanda: "अध्याय १६ (रुद्राध्याय) व काण्ड ४, प्रपाठक ५",
        anuvaka: "११ अनुवाक (नमकम्) + ११ अनुवाक (चमकम्)",
        rishi: "अत्रि, भारद्वाज, अगस्त्य, वसिष्ठ",
        devata: "एकादश रुद्र, सदाशिव, मृत्युंजय"
      },
      primaryMantra: {
        sanskrit: "ॐ नम॑स्ते रु॒द्र म॒न्यव॑ उ॒तोत॒ इष॑वे॒ नमः॑।\nनम॑स्ते अस्तु॒ धन्व॑ने बा॒हुभ्या॑मु॒त ते॒ नमः॑॥",
        ref: "शुक्ल यजुर्वेद १६.१ / तैत्तिरीय संहिता ४.५.१.१",
        translation: "हे सर्वसंहारक, कल्याणकारी रुद्र! आपके क्रोध को नमन। आपके बाण को नमन। आपके धनुष और आपकी दोनों पावन भुजाओं को बारंबार नमन।"
      },
      deitiesSymbols: "भगवान शिव, एकादश रुद्र, त्र्यम्बक (त्रिनेत्र), सोम (शीतलता), अग्नि (तेज), गंगा (पवित्रता) और सर्प (कुण्डलिनी शक्ति)।",
      traditionPlaces: "काशी (विश्वनाथ), उज्जयिनी (महाकालेश्वर), केदारनाथ, सोमनाथ और समस्त द्वादश ज्योतिर्लिंग।",
      vidhiUsage: "सोमवार, प्रदोष, मासिक शिवरात्रि, महाशिवरात्रि एवं श्रावण मास में पञ्चामृत, गंगाजल, भस्म और बिल्वपत्र से अभिषेक।",
      traditionsDifferences: "उत्तर भारत में शुक्ल यजुर्वेद रुद्राष्टाध्यायी (८ अध्याय) का पाठ होता है, जबकि दक्षिण भारत में कृष्ण यजुर्वेद का 'श्री रुद्रम्' (नमकम् व चमकम्) गाया जाता है।",
      historyResearch: "प्राचीन काल से राजाओं और ऋषियों द्वारा राष्ट्र-शांति एवं अनावृष्टि निवारण हेतु महारुद्र एवं अतिरुद्र यज्ञों का अनुष्ठान किया जाता रहा है।",
      relatedArticles: [
        { title: "Mahamrityunjaya Mantra", tag: "Mantra", slug: "mahamrityunjaya-mantra" },
        { title: "Gayatri Mantra", tag: "Mantra", slug: "gayatri-mantra" }
      ],
      relatedGrantha: { name: catData.name, desc: catData.enName },
    };
  }

  const effectiveCategory = articleData?.categorySlug || category;
  const effectiveSubject = articleData?.subjectSlug || subject;
  const effectiveSubjectKey = `${effectiveCategory}/${effectiveSubject}`;
  const effectiveSubjectData =
    SUBJECTS_DATA[effectiveSubjectKey] ||
    SUBJECTS_DATA[effectiveSubject] ||
    subjectData;
  const effectiveCatData = CATEGORIES_DATA[effectiveCategory] || catData;

  const hasAllMantras = articleData.allMantras && articleData.allMantras.length > 0;

  const filteredAllMantras = useMemo(() => {
    if (!hasAllMantras) return [];
    if (!verseSearch.trim()) return articleData.allMantras;
    const q = verseSearch.toLowerCase().trim();
    return articleData.allMantras.filter((m) => {
      const matchSanskrit = (m.sanskrit || "").toLowerCase().includes(q);
      const matchHindi = (m.hindiTranslation || m.translation || "").toLowerCase().includes(q);
      const matchEnglish = (m.englishTranslation || m.english || "").toLowerCase().includes(q);
      const matchPadapatha = (m.padapathaBadges || m.padapatha || []).some((p) => {
        const word = (typeof p === "string" ? p : p.word || "").toLowerCase();
        const mean = (typeof p === "string" ? "" : p.meaning || "").toLowerCase();
        return word.includes(q) || mean.includes(q);
      });
      const matchNum = String(m.number || "").includes(q);
      return matchSanskrit || matchHindi || matchEnglish || matchPadapatha || matchNum;
    });
  }, [articleData.allMantras, verseSearch, hasAllMantras]);

  const filteredAdhyayas = useMemo(() => {
    if (!articleData.adhyayas30) return [];
    return articleData.adhyayas30.filter((adh) => {
      const matchCategory =
        adhyayaCategory === "all" ||
        (adh.category && adh.category.includes(adhyayaCategory));
      if (!matchCategory) return false;
      if (!adhyayaSearch.trim()) return true;
      const q = adhyayaSearch.toLowerCase().trim();
      return (
        String(adh.num).includes(q) ||
        adh.name.toLowerCase().includes(q) ||
        adh.desc.toLowerCase().includes(q) ||
        (adh.category || "").toLowerCase().includes(q)
      );
    });
  }, [articleData.adhyayas30, adhyayaCategory, adhyayaSearch]);

  const currentMantra = hasAllMantras
    ? (filteredAllMantras[selectedMantraIdx] || filteredAllMantras[0] || articleData.allMantras[0])
    : null;

  const handleCopyMantraText = (mantraText, index) => {
    navigator.clipboard.writeText(mantraText);
    setCopiedMantraIndex(index);
    setTimeout(() => setCopiedMantraIndex(null), 2000);
  };

  const scrollToSection = (id) => {
    setActiveTab(id);
    setIsTocDrawerOpen(false);
    if (viewMode === "hymns" && id !== "content-5") {
      setViewMode("classic");
    }
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const contentsList = [
    { id: "content-1", title: "1. विषय परिचय (Introduction)", shortTitle: "१. परिचय" },
    { id: "content-2", title: "2. शब्द का अर्थ एवं व्युत्पत्ति", shortTitle: "२. व्युत्पत्ति" },
    { id: "content-3", title: "3. शास्त्रीय आधार (Shastric Basis)", shortTitle: "३. आधार" },
    { id: "content-4", title: "4. मूल स्रोत (Source Metadata)", shortTitle: "४. स्रोत" },
    { id: "content-5", title: hasAllMantras ? `5. समस्त ऋचाएँ (${articleData.allMantras.length})` : "5. संबंधित मंत्र / श्लोक", shortTitle: "५. मंत्र/ऋचाएँ", badge: hasAllMantras ? articleData.allMantras.length : null },
    ...(foundNode?.children && foundNode.children.length > 0
      ? [{ id: "content-subtexts", title: `उप-ग्रंथ एवं शाखाएँ (${foundNode.children.length})`, shortTitle: "उप-ग्रंथ" }]
      : []),
    { id: "content-6", title: "6. संबंधित देव एवं दार्शनिक प्रतीक", shortTitle: "६. देव/प्रतीक" },
    { id: "content-7", title: "7. परंपरा, शाखा एवं भौगोलिक संदर्भ", shortTitle: "७. परंपरा" },
    { id: "content-8", title: "8. शास्त्रीय विधि, विनियोग एवं याज्ञिक प्रयोग", shortTitle: "८. विधि/प्रयोग", badge: articleData.adhyayas30 ? "३० अध्याय" : articleData.abhishekaDravyas ? "१२ द्रव्य" : articleData.prashna6Summary ? "६ प्रश्न" : null },
    { id: "content-9", title: "9. विभिन्न परंपराओं में अंतर", shortTitle: "९. तुलना" },
    { id: "content-10", title: "10. इतिहास, पांडुलिपि एवं शोध", shortTitle: "१०. इतिहास" }
  ];

  const heroImage =
    articleData?.image ||
    (foundNode?.imageKey && CARD_IMAGES[foundNode.imageKey]) ||
    THEMATIC_BANNERS[subject] ||
    (category === "veda" && (subject === "rigveda" || article?.includes("rigveda") || article?.includes("mandala") || article?.includes("aitareya") || article?.includes("shakala") || article?.includes("kaushitaki"))
      ? bannerSanctum
      : category === "veda" && (subject === "yajurveda" || article?.includes("yajurveda") || article?.includes("taittiriya") || article?.includes("shatapatha") || article?.includes("isha"))
      ? bannerFireRitual
      : category === "veda" && (subject === "samaveda" || article?.includes("samaveda") || article?.includes("chandogya") || article?.includes("kena") || article?.includes("tandya"))
      ? bannerKashiGhat
      : category === "veda" && (subject === "atharvaveda" || article?.includes("atharvaveda") || article?.includes("mundaka") || article?.includes("mandukya") || article?.includes("prithvi") || article?.includes("gopatha"))
      ? bannerSacredDetails
      : bannerSanctum);

  const getSanskritFontSize = () => {
    switch (fontSize) {
      case "sm": return "text-base sm:text-lg";
      case "lg": return "text-xl sm:text-2xl";
      default: return "text-lg sm:text-xl";
    }
  };

  return (
    <div className="bg-[#fffaf0] min-h-screen pb-20 lg:pb-12 text-stone-900 overflow-x-hidden">
      {/* Top Breadcrumb & Article Header */}
      <div className="bg-white border-b border-amber-200/70 py-4 sm:py-5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium text-stone-500 mb-3 flex-wrap leading-tight">
            <Link
              to="/"
              className="hover:text-amber-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span>›</span>
            <Link
              to="/library"
              className="hover:text-amber-800 transition-colors cursor-pointer"
            >
              Veda Library
            </Link>
            <span>›</span>
            <Link
              to={`/library/${effectiveCategory}`}
              className="hover:text-amber-800 transition-colors cursor-pointer"
            >
              {effectiveCatData.name || "Category"}
            </Link>
            {effectiveSubject && (
              <>
                <span>›</span>
                <Link
                  to={`/library/${effectiveCategory}/${effectiveSubject}`}
                  className="hover:text-amber-800 transition-colors cursor-pointer truncate max-w-[120px] sm:max-w-none"
                >
                  {effectiveSubjectData ? `${effectiveSubjectData.name} (${effectiveSubjectData.enName})` : effectiveSubject}
                </Link>
              </>
            )}
            {branchAncestors.map((branch) => (
              <React.Fragment key={branch.id}>
                <span>›</span>
                <span className="text-stone-600 font-medium truncate max-w-[100px] sm:max-w-none">{branch.name}</span>
              </React.Fragment>
            ))}
            <span>›</span>
            <span className="text-amber-900 font-semibold truncate max-w-[150px] sm:max-w-none">
              {articleData.hindiTitle || articleData.title}
            </span>
          </div>

          {/* Title & Status Strip */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 break-words">
                  {articleData.title}
                </h1>
                <span className="font-devanagari text-lg sm:text-xl font-bold text-amber-900">
                  {articleData.hindiTitle}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {articleData.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Status Badges */}
            <div className="flex flex-wrap items-center gap-1.5 self-start lg:self-auto">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Source Verified
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-stone-100 text-stone-600">
                • Collected
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                • Under Review
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-stone-100 text-stone-600">
                • Tradition Verified
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-emerald-50 text-emerald-800">
                • Library Approved
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* TOP VIEW MODE TABS & CONTROLS (Dual-Mode UX: Hymns vs 10-Section Scholarly Analysis vs All-in-One) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-amber-200/80 sticky top-0 z-30 shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          {/* View Mode Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {hasAllMantras && (
              <button
                onClick={() => setViewMode("hymns")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  viewMode === "hymns"
                    ? "bg-amber-800 text-white shadow-xs"
                    : "bg-amber-50/80 text-amber-900 border border-amber-200 hover:bg-amber-100"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>📜 समस्त ऋचाएँ ({articleData.allMantras.length})</span>
              </button>
            )}

            <button
              onClick={() => setViewMode("analysis")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                viewMode === "analysis"
                  ? "bg-amber-800 text-white shadow-xs"
                  : "bg-amber-50/80 text-amber-900 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>📖 १० शास्त्रीय अनुभाग (Research)</span>
            </button>

            <button
              onClick={() => setViewMode("classic")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                viewMode === "classic"
                  ? "bg-amber-800 text-white shadow-xs"
                  : "bg-amber-50/80 text-amber-900 border border-amber-200 hover:bg-amber-100"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>🌟 समग्र दृष्टिकोण (All-in-One)</span>
            </button>
          </div>

          {/* Reading Preferences (TOC Drawer, Focus Mode, Language, Font Size) */}
          <div className="flex items-center justify-between sm:justify-end gap-2 border-t sm:border-t-0 pt-1.5 sm:pt-0 border-stone-100 flex-wrap">
            {/* Table of Contents Drawer Trigger (Available on Desktop and Mobile) */}
            <button
              type="button"
              onClick={() => setIsTocDrawerOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-100/80 hover:bg-amber-200/90 text-amber-950 font-bold text-xs border border-amber-300 transition-colors cursor-pointer shadow-2xs"
              title="अनुक्रमणिका (Table of Contents)"
            >
              <Menu className="w-3.5 h-3.5 text-amber-800" />
              <span className="font-devanagari">अनुक्रमणिका</span>
              <span className="text-[10px] bg-amber-800 text-white px-1.5 py-0.2 rounded-full font-sans font-bold">10</span>
            </button>

            {/* Wide Reading / Focus Mode Toggle (Desktop) */}
            <button
              type="button"
              onClick={() => setIsWideReadingMode(!isWideReadingMode)}
              className={`hidden md:flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                isWideReadingMode
                  ? "bg-amber-800 text-white border-amber-900 shadow-2xs"
                  : "bg-stone-100 text-stone-700 border-stone-200 hover:bg-stone-200"
              }`}
              title={isWideReadingMode ? "सामान्य दृश्य (Standard Layout)" : "विस्तृत वाचन मोड (Wide Reading Mode)"}
            >
              {isWideReadingMode ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5" />
                  <span>मानक दृश्य</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>विस्तृत वाचन</span>
                </>
              )}
            </button>

            {/* Unified 3-Language Selector: हिंदी / English / Hinglish */}
            <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg text-[11px] font-bold text-stone-700">
              <button
                type="button"
                onClick={() => setSelectedLanguage("hindi")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedLanguage === "hindi"
                    ? "bg-amber-800 text-white shadow-2xs font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                हिंदी
              </button>
              <button
                type="button"
                onClick={() => setSelectedLanguage("english")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedLanguage === "english"
                    ? "bg-amber-800 text-white shadow-2xs font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setSelectedLanguage("hinglish")}
                className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                  selectedLanguage === "hinglish"
                    ? "bg-amber-800 text-white shadow-2xs font-bold"
                    : "text-stone-600 hover:text-stone-900"
                }`}
              >
                Hinglish
              </button>
            </div>

            {/* Font Size Adjuster */}
            <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-lg text-[11px] font-bold text-stone-700">
              <button
                onClick={() => setFontSize("sm")}
                className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                  fontSize === "sm" ? "bg-white text-amber-900 shadow-2xs font-extrabold" : "hover:text-stone-900"
                }`}
                title="Small text"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("md")}
                className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                  fontSize === "md" ? "bg-white text-amber-900 shadow-2xs font-extrabold" : "hover:text-stone-900"
                }`}
                title="Normal text"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("lg")}
                className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                  fontSize === "lg" ? "bg-white text-amber-900 shadow-2xs font-extrabold" : "hover:text-stone-900"
                }`}
                title="Large text"
              >
                A+
              </button>
            </div>
          </div>
        </div>

        {/* Quick Horizontal Jump Bar (Quick Section Pills across Desktop & Mobile) */}
        {viewMode !== "hymns" && (
          <div className="border-t border-amber-200/50 bg-[#fffdfa] px-3 sm:px-6 lg:px-8 py-1.5 overflow-x-auto scrollbar-thin">
            <div className="max-w-7xl mx-auto flex items-center gap-1.5 min-w-max">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1 mr-1">
                <BookMarked className="w-3 h-3 text-amber-700" />
                अनुभाग:
              </span>
              {contentsList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer font-devanagari flex items-center gap-1 ${
                    activeTab === item.id
                      ? "bg-amber-800 text-white shadow-2xs"
                      : "bg-white text-stone-700 border border-stone-200/80 hover:bg-amber-50 hover:text-amber-950"
                  }`}
                >
                  <span>{item.shortTitle || item.title}</span>
                  {item.badge && (
                    <span
                      className={`text-[9px] px-1.5 py-0.2 rounded-full font-bold ${
                        activeTab === item.id ? "bg-amber-950 text-amber-200" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Spacious Content Layout (Spacious Central Canvas + Right Contextual Rail) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6">
        <div
          className={`grid grid-cols-1 ${
            isWideReadingMode || viewMode === "hymns" ? "lg:grid-cols-1" : "lg:grid-cols-12"
          } gap-6 lg:gap-8 items-start`}
        >
          {/* Main Reading Canvas (Expanded Width) */}
          <main
            className={`${
              isWideReadingMode || viewMode === "hymns"
                ? "max-w-5xl mx-auto w-full"
                : "lg:col-span-8 xl:col-span-9"
            } bg-white p-4 sm:p-7 lg:p-9 rounded-2xl sm:rounded-3xl border border-stone-200/90 shadow-2xs space-y-6 sm:space-y-8 w-full overflow-hidden`}
          >
            {/* Hero Image in Article */}
            <div className="relative aspect-16/9 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs bg-stone-900">
              <img
                src={heroImage}
                alt={articleData.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-semibold text-white bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-xs font-devanagari truncate">
                  {articleData.hindiTitle} — मूल शास्त्रीय संदर्भ एवं विशद व्याख्या
                </span>
                {hasAllMantras && (
                  <span className="shrink-0 text-[10px] sm:text-xs font-bold text-amber-200 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-400/40">
                    {articleData.allMantras.length} ऋचाएँ
                  </span>
                )}
              </div>
            </div>

            {/* Quick Hymn Reader Showcase / Fast Jump Pill on Classic/Analysis Mode */}
            {hasAllMantras && viewMode !== "hymns" && (
              <div className="p-3 sm:p-4 rounded-xl bg-gradient-to-r from-amber-50 via-[#fff8eb] to-amber-50 border border-amber-200/90 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shadow-2xs">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-950">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                    <span>समस्त {articleData.allMantras.length} ऋचाओं का पावन पाठ उपलब्ध</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-stone-600 font-devanagari">
                    स्वर चिह्नों, पदच्छेद, हिन्दी भावार्थ एवं सायणाचार्य भाष्य सहित अध्ययन करें।
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setViewMode("hymns")}
                    className="flex-1 sm:flex-none px-3.5 py-1.5 rounded-lg bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs shadow-2xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>📜 ऋचाएँ पढ़ें</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => scrollToSection("content-5")}
                    className="px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100 text-amber-900 border border-amber-300 font-semibold text-xs transition-colors cursor-pointer"
                  >
                    अनुभाग ५ देखें ↓
                  </button>
                </div>
              </div>
            )}

            {/* HYMNS MODE: Renders Section 5 at the very top */}
            {(viewMode === "hymns" || viewMode === "classic") && (
              <div id="content-5" className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-amber-200/80 pb-2.5 gap-2">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-800" />
                    <span>5. संबंधित मंत्र एवं ऋचाएँ</span>
                    {hasAllMantras && (
                      <span className="text-xs bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
                        समस्त {articleData.allMantras.length} ऋचाएँ
                      </span>
                    )}
                  </h2>

                  {hasAllMantras && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowAllMantrasView(!showAllMantrasView)}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
                      >
                        {showAllMantrasView ? "एकल ऋचा वाचन" : "समग्र पाठ (Show All)"}
                      </button>
                    </div>
                  )}
                </div>

                {/* Rich All Mantras Interactive Experience */}
                {hasAllMantras ? (
                  <div className="space-y-4">
                    {/* Verse Search Bar */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shadow-2xs">
                      <div className="relative flex-1">
                        <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={verseSearch}
                          onChange={(e) => {
                            setVerseSearch(e.target.value);
                            setSelectedMantraIdx(0);
                          }}
                          placeholder="ऋचा में खोजें (संस्कृत पद, भावार्थ या संख्या)..."
                          className="w-full pl-8 pr-7 py-1.5 rounded-lg text-xs bg-white border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                        />
                        {verseSearch && (
                          <button
                            type="button"
                            onClick={() => {
                              setVerseSearch("");
                              setSelectedMantraIdx(0);
                            }}
                            className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <div className="text-[11px] font-semibold text-stone-500 shrink-0 text-right">
                        <span className="text-amber-900 font-bold">{filteredAllMantras.length}</span> / {articleData.allMantras.length} ऋचाएँ
                      </div>
                    </div>

                    {filteredAllMantras.length === 0 ? (
                      <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                        <p className="text-sm font-semibold text-stone-700 font-devanagari">
                          खोजे गए शब्द के अनुसार कोई ऋचा नहीं मिली।
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setVerseSearch("");
                            setSelectedMantraIdx(0);
                          }}
                          className="text-xs text-amber-700 hover:text-amber-900 underline font-bold cursor-pointer"
                        >
                          खोज साफ़ करें (Reset Search)
                        </button>
                      </div>
                    ) : (
                      <>
                        {/* Mantra Selector Pills (Responsive horizontal scroll with touch support) */}
                        {!showAllMantrasView && (
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
                            {filteredAllMantras.map((m, idx) => (
                              <button
                                key={idx}
                                onClick={() => setSelectedMantraIdx(idx)}
                                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                                  selectedMantraIdx === idx
                                    ? "bg-amber-800 text-white shadow-xs scale-105"
                                    : "bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100"
                                }`}
                              >
                                ऋचा {m.number || idx + 1}
                              </button>
                            ))}
                          </div>
                        )}

                        {/* Render Single Mantra or All Mantras */}
                        {(showAllMantrasView ? filteredAllMantras : [currentMantra]).filter(Boolean).map((m, idx) => {
                          const actualIdx = showAllMantrasView ? idx : selectedMantraIdx;
                          return (
                            <div
                              key={actualIdx}
                              className="p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-[#fffcf5] to-[#fff6e6] border-2 border-amber-300/80 shadow-xs space-y-4 transition-all w-full overflow-hidden"
                            >
                              {/* Top Header of the Mantra Card */}
                              <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5 flex-wrap gap-2">
                                <span className="text-xs font-bold text-amber-900 bg-amber-100/90 px-2.5 py-1 rounded-md border border-amber-300 font-devanagari">
                                  ऋचा {m.number || actualIdx + 1}
                                </span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => handleCopyMantraText(m.sanskrit, actualIdx)}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-900 bg-white/80 hover:bg-white px-2.5 py-1 rounded border border-amber-200 transition-colors cursor-pointer"
                                    title="मंत्र कॉपी करें"
                                  >
                                    {copiedMantraIndex === actualIdx ? (
                                      <>
                                        <Check className="w-3 h-3 text-emerald-600" />
                                        <span className="text-emerald-700">कॉपी हुआ</span>
                                      </>
                                    ) : (
                                      <>
                                        <Copy className="w-3 h-3 text-stone-600" />
                                        <span>कॉपी</span>
                                      </>
                                    )}
                                  </button>
                                  {m.readerId && (
                                    <Link
                                      to={`/library/mantra/${m.readerId}`}
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-2.5 py-1 rounded border border-amber-300 transition-colors cursor-pointer"
                                    >
                                      <BookOpen className="w-3 h-3" />
                                      <span>मंत्र पाठक</span>
                                      <ExternalLink className="w-2.5 h-2.5" />
                                    </Link>
                                  )}
                                </div>
                              </div>

                              {/* Sanskrit Svara Accent Text (Fully Responsive with word break) */}
                              <div className="text-center py-2 px-1">
                                <p
                                  className={`font-devanagari font-bold text-amber-950 leading-loose tracking-wide break-words whitespace-pre-wrap ${getSanskritFontSize()}`}
                                  style={{ overflowWrap: "anywhere" }}
                                >
                                  {m.sanskrit}
                                </p>
                                {(selectedLanguage === "english" || selectedLanguage === "hinglish") && m.transliteration && (
                                  <p className="text-xs sm:text-sm text-amber-800/80 italic font-mono pt-1.5 break-words">
                                    {m.transliteration}
                                  </p>
                                )}
                              </div>

                              {/* Padapatha Badges Grid (Responsive Grid) */}
                              {m.padapathaBadges && m.padapathaBadges.length > 0 && (
                                <div className="pt-2 border-t border-amber-200/60">
                                  <span className="text-[11px] sm:text-xs font-bold text-amber-900 block mb-1.5 font-devanagari">
                                    {selectedLanguage === "english" ? "Word-by-Word Analysis (पदच्छेद एवं पदार्थ):" : "पदच्छेद एवं पदार्थ (Word Meanings):"}
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                    {m.padapathaBadges.map((p, pIdx) => (
                                      <div
                                        key={pIdx}
                                        className="p-1.5 bg-white border border-amber-200/80 rounded-lg shadow-2xs text-[11px] font-devanagari flex flex-col justify-between"
                                      >
                                        <strong className="text-amber-950 font-bold break-words">{p.word}:</strong>
                                        <span className="text-stone-600 break-words">{p.meaning}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Hindi Translation (shown for hindi & hinglish) */}
                              {(selectedLanguage === "hindi" || selectedLanguage === "hinglish") && (m.hindiTranslation || m.translation) && (
                                <div className="pt-2 border-t border-amber-200/60 text-xs sm:text-sm font-devanagari text-stone-800 leading-relaxed">
                                  <strong className="text-amber-950">भावार्थ: </strong>
                                  <span className="break-words">{m.hindiTranslation || m.translation}</span>
                                </div>
                              )}

                              {/* English Translation (shown for english & hinglish) */}
                              {(selectedLanguage === "english" || selectedLanguage === "hinglish") && (m.englishTranslation || m.english) && (
                                <div className="text-[11px] sm:text-xs text-stone-700 leading-relaxed font-sans bg-white/70 p-2.5 rounded-lg border border-amber-200/70">
                                  <strong className="text-amber-950 font-bold">English Meaning: </strong>
                                  <span className="break-words">{m.englishTranslation || m.english}</span>
                                </div>
                              )}

                              {/* Sayana Bhashya */}
                              {m.sayanaBhashya && (
                                <div className="text-[11px] sm:text-xs font-devanagari text-amber-900 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed">
                                  <strong className="text-amber-950">
                                    {selectedLanguage === "english" ? "Shastric Commentary (सायण रहस्य): " : "शास्त्रीय भाष्य / सायण रहस्य: "}
                                  </strong>
                                  <span className="break-words">{m.sayanaBhashya}</span>
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* Navigation Footer for Single Mantra View */}
                        {!showAllMantrasView && filteredAllMantras.length > 1 && (
                          <div className="flex items-center justify-between pt-2 border-t border-amber-200/60">
                            <button
                              disabled={selectedMantraIdx === 0}
                              onClick={() => setSelectedMantraIdx(Math.max(0, selectedMantraIdx - 1))}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                              ← पिछली ऋचा
                            </button>
                            <span className="text-xs font-bold text-amber-900 font-devanagari">
                              ऋचा {selectedMantraIdx + 1} / {filteredAllMantras.length}
                            </span>
                            <button
                              disabled={selectedMantraIdx >= filteredAllMantras.length - 1}
                              onClick={() => setSelectedMantraIdx(Math.min(filteredAllMantras.length - 1, selectedMantraIdx + 1))}
                              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-800 text-white hover:bg-amber-900 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                            >
                              अगली ऋचा →
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ) : articleData.primaryMantra ? (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#fff8ea] border border-amber-200 text-center space-y-2">
                    <p
                      className={`font-devanagari font-bold text-amber-950 leading-relaxed whitespace-pre-wrap break-words ${getSanskritFontSize()}`}
                      style={{ overflowWrap: "anywhere" }}
                    >
                      {articleData.primaryMantra.sanskrit}
                    </p>
                    <p className="text-xs text-stone-500 font-devanagari">
                      — {articleData.primaryMantra.ref}
                    </p>
                    {articleData.primaryMantra.translation && (
                      <p className="text-xs sm:text-sm text-stone-700 font-devanagari pt-2 border-t border-amber-200/60 leading-relaxed break-words">
                        <strong>भावार्थ:</strong> {articleData.primaryMantra.translation}
                      </p>
                    )}
                  </div>
                ) : null}
              </div>
            )}

            {/* SCHOLARLY 10 SECTIONS (Visible in Analysis and Classic modes) */}
            {(viewMode === "analysis" || viewMode === "classic") && (
              <>
                {/* Section 1: विषय परिचय */}
                <div id="content-1" className="space-y-3 pt-2">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>1. विषय परिचय</span>
                    <span className="text-[11px] font-normal text-stone-400">Introduction</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-700 font-devanagari leading-relaxed break-words whitespace-pre-wrap">
                    {articleData.intro}
                  </p>
                </div>

                {/* Section 2: शब्द का अर्थ एवं व्युत्पत्ति */}
                <div id="content-2" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>2. शब्द का अर्थ एवं व्युत्पत्ति</span>
                    <span className="text-[11px] font-normal text-stone-400">Etymology</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/50 border border-amber-100 text-xs sm:text-sm font-devanagari space-y-2.5 text-stone-800">
                    {articleData.etymology && articleData.etymology.length > 0 ? (
                      articleData.etymology.map((et, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-start gap-1.5 sm:gap-2.5 pb-2 border-b border-amber-100/60 last:border-0 last:pb-0"
                        >
                          <span className="font-bold text-amber-950 bg-amber-100/90 px-2 py-0.5 rounded text-xs shrink-0 self-start border border-amber-200">
                            {et.term}
                          </span>
                          <span className="text-stone-700 leading-relaxed break-words">
                            {et.meaning}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="break-words text-stone-600">
                        वैदिक संस्कृत व्याकरण (पाणिनीय अष्टाध्यायी) एवं यास्क मुनि कृत निरुक्त के अनुसार विशिष्ट नामकरण एवं शास्त्रीय व्युत्पत्ति।
                      </p>
                    )}
                  </div>
                </div>

                {/* Section 3: शास्त्रीय आधार */}
                <div id="content-3" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>3. शास्त्रीय आधार</span>
                    <span className="text-[11px] font-normal text-stone-400">Shastric Basis</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-700 font-devanagari leading-relaxed break-words">
                    {articleData.shastricBase || "प्रामाणिक वैदिक संहिताओं, ब्राह्मण ग्रंथों और उपनिषदों में विशद व्याख्या।"}
                  </p>
                </div>

                {/* Section 4: मूल स्रोत (Responsive Metadata Table) */}
                <div id="content-4" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>4. मूल स्रोत (Source Metadata)</span>
                    <span className="text-[11px] font-normal text-stone-400">Canonical Sources</span>
                  </h2>
                  <div className="border border-stone-200 rounded-xl overflow-x-auto shadow-2xs">
                    <table className="w-full text-xs font-devanagari divide-y divide-stone-200 min-w-[280px]">
                      <tbody className="divide-y divide-stone-100">
                        <tr className="bg-stone-50">
                          <td className="px-3 py-2 font-bold text-stone-700 w-1/3 shrink-0">ग्रंथ</td>
                          <td className="px-3 py-2 text-stone-900 font-semibold break-words">
                            {articleData.sourceMeta?.grantha || "वैदिक संहिता"}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-2 font-bold text-stone-700">शाखा</td>
                          <td className="px-3 py-2 text-stone-800 break-words">
                            {articleData.sourceMeta?.shakha || "प्रामाणिक शाखा"}
                          </td>
                        </tr>
                        <tr className="bg-stone-50">
                          <td className="px-3 py-2 font-bold text-stone-700">काण्ड / मण्डल</td>
                          <td className="px-3 py-2 text-stone-800 break-words">
                            {articleData.sourceMeta?.kanda || "काण्ड / मण्डल संदर्भ"}
                          </td>
                        </tr>
                        {articleData.sourceMeta?.anuvaka && (
                          <tr>
                            <td className="px-3 py-2 font-bold text-stone-700">अनुवाक / सूक्त</td>
                            <td className="px-3 py-2 text-stone-800 break-words">
                              {articleData.sourceMeta.anuvaka}
                            </td>
                          </tr>
                        )}
                        <tr className="bg-stone-50">
                          <td className="px-3 py-2 font-bold text-stone-700">ऋषि व देवता</td>
                          <td className="px-3 py-2 text-stone-800 break-words">
                            {articleData.sourceMeta?.rishi || "ऋषि परंपरा"} • {articleData.sourceMeta?.devata || "देवता"}
                          </td>
                        </tr>
                        {articleData.sourceMeta?.chandas && (
                          <tr>
                            <td className="px-3 py-2 font-bold text-stone-700">वैदिक छंद</td>
                            <td className="px-3 py-2 text-amber-900 font-semibold break-words">
                              {articleData.sourceMeta.chandas}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Researched Children / Sub-Texts Cards */}
                {foundNode?.children && foundNode.children.length > 0 && (
                  <div id="content-subtexts" className="space-y-4 pt-2">
                    <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-100 pb-2">
                      <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                        संबंधित उप-ग्रंथ, शाखाएँ एवं प्रभाग ({foundNode.children.length})
                      </h2>
                      <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                        Researched Cards
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {foundNode.children.map((child, cIdx) => (
                        <div
                          key={child.id || cIdx}
                          onClick={() => navigate(`/library/${category}/${subject}/${child.slug || child.id}`)}
                          className="group p-3.5 sm:p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-2.5"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-serif font-bold text-stone-900 group-hover:text-amber-800 transition-colors text-xs sm:text-sm">
                                {child.name}
                              </h3>
                              {child.stats && (
                                <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 shrink-0">
                                  {child.stats}
                                </span>
                              )}
                            </div>
                            {child.enName && (
                              <p className="text-[11px] text-stone-400 font-medium mt-0.5">
                                {child.enName}
                              </p>
                            )}
                            <p className="text-xs text-stone-600 font-devanagari mt-1.5 line-clamp-2 leading-relaxed">
                              {child.desc}
                            </p>
                          </div>
                          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:text-amber-950">
                            <span>अध्ययन करें (Explore)</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Section 6: संबंधित देव / प्रतीक */}
                <div id="content-6" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>6. संबंधित देव एवं दार्शनिक प्रतीक</span>
                    <span className="text-[11px] font-normal text-stone-400">Deities & Symbols</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/40 border border-amber-100 text-xs sm:text-sm font-devanagari space-y-2 text-stone-800 leading-relaxed">
                    <p className="break-words">
                      <strong>प्रधान उपास्य देव:</strong> {articleData.sourceMeta?.devata || "परमेश्वर / वैदिक देव चेतना"}
                    </p>
                    <p className="break-words">
                      {articleData.deitiesSymbols || "वैदिक वांग्मय में प्रत्येक देवता चेतना के एक विशिष्ट गुण और ब्रह्मांडीय शक्ति का प्रतिनिधित्व करते हैं।"}
                    </p>
                  </div>
                </div>

                {/* Section 7: परंपरा एवं स्थान */}
                <div id="content-7" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>7. परंपरा, शाखा एवं भौगोलिक संदर्भ</span>
                    <span className="text-[11px] font-normal text-stone-400">Tradition & Geography</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-devanagari space-y-2 text-stone-800 leading-relaxed">
                    <p className="break-words">
                      <strong>पाठ परंपरा:</strong> {articleData.sourceMeta?.shakha || "प्रामाणिक वैदिक शाखा परंपरा"}
                    </p>
                    <p className="break-words">
                      {articleData.traditionPlaces || "सप्तसिंधु, सरस्वती और दृषद्वती की पावन भूमि पर साक्षात्कृत यह ज्ञान अनादि काल से गुरु-शिष्य परंपरा द्वारा अक्षुण्ण रूप से संरक्षित रहा है।"}
                    </p>
                  </div>
                </div>

                {/* Section 8: विधि / प्रयोग */}
                <div id="content-8" className="space-y-4">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>8. शास्त्रीय विधि, विनियोग एवं याज्ञिक प्रयोग</span>
                    <span className="text-[11px] font-normal text-stone-400">Ritual Application</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/40 border border-amber-100 text-xs sm:text-sm font-devanagari space-y-2 text-stone-800 leading-relaxed">
                    <p className="break-words whitespace-pre-wrap">
                      {articleData.vidhiUsage || "वैदिक संहिताओं के मंत्रों का उपयोग श्रौत यज्ञों तथा स्मार्त संस्कारों एवं नित्य स्वाध्याय में शास्त्रोक्त विधि से किया जाता है।"}
                    </p>
                  </div>

                  {/* Step-by-Step Vidhi Sequence */}
                  {articleData.vidhiSteps && articleData.vidhiSteps.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>शास्त्रीय अनुष्ठान क्रम एवं विधि सोपान (Step-by-Step Vidhi Sequence)</span>
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                        {articleData.vidhiSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs text-xs font-devanagari space-y-1.5"
                          >
                            <div className="flex items-center gap-2 border-b border-amber-100 pb-1">
                              <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[10px] shrink-0">
                                {step.step || sIdx + 1}
                              </span>
                              <strong className="text-amber-950 font-bold">{step.name}</strong>
                            </div>
                            <p className="text-stone-700 leading-relaxed text-[11px]">{step.desc}</p>
                            {step.mantra && (
                              <p className="text-[10px] text-amber-900 bg-amber-50/70 p-1.5 rounded italic break-words">
                                {step.mantra}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rudrabhisheka Specific 12 Abhisheka Dravyas */}
                  {articleData.abhishekaDravyas && articleData.abhishekaDravyas.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-amber-600" />
                        <span>द्वादश अभिषेक द्रव्य एवं फल-प्राप्ति (१२ पवित्र द्रव्य)</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                        {articleData.abhishekaDravyas.map((d, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs space-y-1 font-devanagari text-xs"
                          >
                            <p className="font-bold text-amber-950 border-b border-amber-100 pb-1">
                              {d.dravya}
                            </p>
                            <p className="text-stone-700">
                              <strong>फल प्राप्ति:</strong> {d.phala}
                            </p>
                            {d.mantra && (
                              <p className="text-[11px] text-amber-900 bg-amber-50/70 px-2 py-1 rounded italic break-words">
                                {d.mantra}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Rudrashtadhyayi 8 Adhyayas Breakdown */}
                  {articleData.rudradhyayiAdhyayas && articleData.rudradhyayiAdhyayas.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-amber-600" />
                        <span>रुद्राष्टाध्यायी के ८ अध्याय एवं शास्त्रीय महत्व</span>
                      </h3>
                      <div className="space-y-2">
                        {articleData.rudradhyayiAdhyayas.map((a, aIdx) => (
                          <div
                            key={aIdx}
                            className="p-2.5 bg-stone-50 rounded-xl border border-stone-200 text-xs font-devanagari flex items-start gap-2"
                          >
                            <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                              {a.adhyaya}
                            </span>
                            <div>
                              <strong className="text-stone-900">{a.name}: </strong>
                              <span className="text-stone-700">{a.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Prashna Upanishad 6 Questions Breakdown */}
                  {articleData.prashna6Summary && articleData.prashna6Summary.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Layers className="w-4 h-4 text-amber-600" />
                        <span>महर्षि पिप्पलाद एवं षट् ऋषियों के ६ दार्शनिक प्रश्नोत्तर (षट् प्रश्न संवाद)</span>
                      </h3>
                      <div className="space-y-2">
                        {articleData.prashna6Summary.map((q, qIdx) => (
                          <div
                            key={qIdx}
                            className="p-3 bg-amber-50/50 rounded-xl border border-amber-200 text-xs font-devanagari space-y-1.5"
                          >
                            <div className="flex items-center justify-between border-b border-amber-200/60 pb-1">
                              <span className="font-bold text-amber-950 flex items-center gap-1.5">
                                <span className="w-5 h-5 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[10px]">
                                  {q.qNum}
                                </span>
                                <span>प्रश्न {q.qNum} — ऋषि {q.rishi}</span>
                              </span>
                            </div>
                            <p className="text-stone-900 font-medium">
                              <strong className="text-amber-900">जिज्ञासा (प्रश्न): </strong>{q.question}
                            </p>
                            <p className="text-stone-700">
                              <strong className="text-emerald-900">पिप्पलाद समाधान (उत्तर): </strong>{q.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Kaushitaki Brahmana 30 Adhyayas Master Expansive Interactive Explorer */}
                  {articleData.adhyayas30 && articleData.adhyayas30.length > 0 && (
                    <div className="space-y-4 pt-4 border-t border-amber-200/80">
                      {/* Section Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1 border-b border-amber-100">
                        <div>
                          <h3 className="text-sm sm:text-base font-bold text-amber-950 font-devanagari flex items-center gap-2">
                            <Layers className="w-5 h-5 text-amber-700" />
                            <span>कौषीतकि ब्राह्मण के समस्त ३० अध्यायों का सांगोपांग विवरण (Adhyayas 1–30)</span>
                          </h3>
                          <p className="text-xs text-stone-500 font-devanagari mt-0.5">
                            काण्ड अनुसार फ़िल्टर करें या किसी भी अध्याय के कार्ड पर क्लिक करके शास्त्रीय विनियोग व याज्ञिक विधान पढ़ें।
                          </p>
                        </div>
                        <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                          <span className="text-xs font-bold text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300 shadow-2xs font-devanagari">
                            प्रदर्शित: {filteredAdhyayas.length} / {articleData.adhyayas30.length} अध्याय
                          </span>
                        </div>
                      </div>

                      {/* Filter & Controls Bar */}
                      <div className="space-y-2.5 p-3 rounded-2xl bg-gradient-to-r from-amber-50/80 via-[#fffbf2] to-amber-50/80 border border-amber-200/80 shadow-2xs">
                        {/* Kaand Category Filter Chips */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                          {[
                            { id: "all", label: "सभी ३० अध्याय" },
                            { id: "हविर्यज्ञ", label: "१. हविर्यज्ञ काण्ड (१-६)" },
                            { id: "सोमयाग", label: "२. सोमयाग प्रारंभ (७-१०)" },
                            { id: "सोम सवन", label: "३. सवन काण्ड (११-१८)" },
                            { id: "महासत्र", label: "४. द्वादशाह व षडह (१९-२४)" },
                            { id: "संवत्सर", label: "५. गवामयन सत्र (२५-२७)" },
                            { id: "प्रायश्चित्त", label: "६. प्रायश्चित्त (२८-३०)" }
                          ].map((cat) => (
                            <button
                              key={cat.id}
                              type="button"
                              onClick={() => setAdhyayaCategory(cat.id)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer font-devanagari ${
                                adhyayaCategory === cat.id
                                  ? "bg-amber-800 text-white shadow-xs scale-102"
                                  : "bg-white text-stone-700 border border-stone-200/90 hover:bg-amber-100 hover:text-amber-950"
                              }`}
                            >
                              {cat.label}
                            </button>
                          ))}
                        </div>

                        {/* Search & Layout Toggles */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 pt-1 border-t border-amber-200/40">
                          {/* Search Input */}
                          <div className="relative flex-1">
                            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input
                              type="text"
                              value={adhyayaSearch}
                              onChange={(e) => setAdhyayaSearch(e.target.value)}
                              placeholder="अध्याय में खोजें (उदा. रुद्र, अग्निहोत्र, सोम, प्रायश्चित्त, सुब्रह्मण्या)..."
                              className="w-full pl-8 pr-7 py-1.5 rounded-lg text-xs bg-white border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                            />
                            {adhyayaSearch && (
                              <button
                                type="button"
                                onClick={() => setAdhyayaSearch("")}
                                className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>

                          {/* Layout Toggle & Expand/Collapse */}
                          <div className="flex items-center gap-1.5 justify-end shrink-0">
                            {/* Expand All / Collapse All Toggle */}
                            <button
                              type="button"
                              onClick={() => {
                                if (expandedAdhyayaNum === "all") {
                                  setExpandedAdhyayaNum(null);
                                } else {
                                  setExpandedAdhyayaNum("all");
                                }
                              }}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white hover:bg-amber-100 text-amber-900 border border-amber-200 transition-colors cursor-pointer"
                            >
                              {expandedAdhyayaNum === "all" ? "सभी समेटें" : "सभी विवरण खोलें"}
                            </button>

                            {/* View Style (Grid vs List) */}
                            <div className="flex items-center bg-white p-0.5 rounded-lg border border-stone-200">
                              <button
                                type="button"
                                onClick={() => setAdhyayaViewLayout("grid")}
                                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                  adhyayaViewLayout === "grid"
                                    ? "bg-amber-800 text-white shadow-2xs"
                                    : "text-stone-600 hover:text-stone-900"
                                }`}
                                title="ग्रिड दृश्य (Grid View)"
                              >
                                <LayoutGrid className="w-3.5 h-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={() => setAdhyayaViewLayout("list")}
                                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                  adhyayaViewLayout === "list"
                                    ? "bg-amber-800 text-white shadow-2xs"
                                    : "text-stone-600 hover:text-stone-900"
                                }`}
                                title="विस्तृत सूची दृश्य (List View)"
                              >
                                <List className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Filtered Adhyayas Expansive Display (NO restrictive nested max-h scroll!) */}
                      {filteredAdhyayas.length === 0 ? (
                        <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                          <p className="text-sm font-semibold text-stone-700 font-devanagari">
                            खोजे गए शब्द के अनुसार कोई अध्याय नहीं मिला।
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setAdhyayaSearch("");
                              setAdhyayaCategory("all");
                            }}
                            className="text-xs text-amber-700 hover:text-amber-900 underline font-bold cursor-pointer"
                          >
                            फ़िल्टर साफ़ करें (Reset All Filters)
                          </button>
                        </div>
                      ) : (
                        <div
                          className={
                            adhyayaViewLayout === "grid"
                              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3.5"
                              : "space-y-3"
                          }
                        >
                          {filteredAdhyayas.map((adh) => {
                            const isExpanded =
                              expandedAdhyayaNum === "all" || expandedAdhyayaNum === adh.num;
                            return (
                              <div
                                key={adh.num}
                                onClick={() =>
                                  setExpandedAdhyayaNum(
                                    expandedAdhyayaNum === adh.num ? null : adh.num
                                  )
                                }
                                className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer font-devanagari flex flex-col justify-between ${
                                  isExpanded
                                    ? "bg-gradient-to-br from-[#fffdf7] to-[#fff8ea] border-amber-400 shadow-sm ring-1 ring-amber-300/60"
                                    : "bg-white border-stone-200/90 hover:border-amber-300 hover:bg-amber-50/30 hover:shadow-2xs"
                                }`}
                              >
                                <div className="space-y-2.5">
                                  {/* Top Header of Card */}
                                  <div className="flex items-center justify-between gap-2 border-b border-amber-100 pb-2">
                                    <div className="flex items-center gap-2">
                                      <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center font-bold text-[11px] shrink-0 shadow-2xs">
                                        {adh.num}
                                      </span>
                                      <span className="text-[11px] font-bold text-amber-950 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-200/80">
                                        अध्याय {adh.num}
                                      </span>
                                    </div>
                                    <span className="text-[10px] font-semibold text-amber-900 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 shrink-0">
                                      {adh.category}
                                    </span>
                                    {/* Khanda Count Badge if present */}
                                    {adh.khandas && (
                                      <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                                        {adh.khandas}
                                      </span>
                                    )}
                                  </div>

                                  {/* Title */}
                                  <h4 className="font-serif font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                                    {adh.name}
                                  </h4>

                                  {/* Description */}
                                  <p className="text-stone-700 text-xs leading-relaxed">
                                    {adh.desc}
                                  </p>
                                </div>

                                {/* Expanded Shastric Details Drawer */}
                                {isExpanded && (
                                  <div className="mt-3 pt-3 border-t border-amber-200/70 text-xs text-amber-950 bg-amber-50/60 p-3 rounded-xl space-y-2.5 shadow-2xs animate-in fade-in duration-150">
                                    {/* Hotri Viniyoga & Ritual Action */}
                                    <div className="space-y-1">
                                      <p className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                                        <BookOpen className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                                        <span>शास्त्रीय प्रयोजन एवं होतृ विनियोग:</span>
                                      </p>
                                      <p className="text-stone-800 leading-relaxed text-[11px] sm:text-xs pl-5 bg-white/80 p-2 rounded-lg border border-amber-100">
                                        {adh.hotriVidhi || "कौषीतकि (शांखायन) शाखा के होतृ ऋत्विक द्वारा इस अध्याय में वर्णित शस्त्र, अनुवाक्या एवं पुरोनुवाक्या ऋचाओं का शास्त्रोक्त उच्चारण एवं यज्ञानुष्ठान संपन्न किया जाता है।"}
                                      </p>
                                    </div>

                                    {/* Philosophy & Esoteric Meaning */}
                                    {adh.philosophy && (
                                      <div className="space-y-1 pt-1">
                                        <p className="font-bold text-amber-900 flex items-center gap-1.5 text-xs">
                                          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                                          <span>दार्शनिक एवं आध्यात्मिक रहस्य:</span>
                                        </p>
                                        <p className="text-stone-800 leading-relaxed text-[11px] sm:text-xs pl-5 bg-white/80 p-2 rounded-lg border border-amber-100">
                                          {adh.philosophy}
                                        </p>
                                      </div>
                                    )}

                                    {/* Grantha & Shakha Reference */}
                                    <div className="pt-2 border-t border-amber-200/80 flex items-center justify-between text-[10px] sm:text-[11px] text-stone-600 flex-wrap gap-1">
                                      <span><strong>शाखा:</strong> ऋग्वेद कौषीतकि/शांखायन</span>
                                      <span className="font-semibold text-amber-900">
                                        अध्याय {adh.num} • {adh.category} {adh.khandas ? `(${adh.khandas})` : ""}
                                      </span>
                                    </div>
                                  </div>
                                )}

                                {/* Bottom Expand Prompt */}
                                <div className="pt-2.5 mt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-semibold text-amber-800">
                                  <span>{isExpanded ? "संक्षिप्त करें" : "विस्तृत शास्त्रीय विधान पढ़ें"}</span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                      isExpanded ? "rotate-180 text-amber-900" : "text-stone-400"
                                    }`}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Rudra's 8 Names (षष्ठ अध्याय का अष्ट रुद्र विवरण) */}
                  {articleData.rudra8Names && articleData.rudra8Names.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>षष्ठ अध्याय: भगवान रुद्र के ८ पावन वैदिक स्वरूप एवं तत्व (Eight Names of Rudra)</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {articleData.rudra8Names.map((r, rIdx) => (
                          <div
                            key={rIdx}
                            className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs font-devanagari text-xs space-y-1"
                          >
                            <div className="flex items-center justify-between border-b border-amber-100 pb-1">
                              <strong className="text-amber-950 font-bold">{r.name}</strong>
                              <span className="text-[10px] text-amber-800 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                                {r.element}
                              </span>
                            </div>
                            <p className="text-stone-700 text-[11px]">{r.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Gayatri 24 Syllables and Mudras */}
                  {articleData.gayatriDetails && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>गायत्री महामंत्र के २४ अक्षर, ऋषि, देवता एवं २४ मुद्राएँ</span>
                      </h3>
                      <div className="max-h-64 overflow-y-auto border border-stone-200 rounded-xl">
                        <table className="w-full text-[11px] font-devanagari divide-y divide-stone-200">
                          <thead className="bg-amber-100/70 text-amber-950 font-bold sticky top-0">
                            <tr>
                              <th className="px-2 py-1.5 text-left">क्र.</th>
                              <th className="px-2 py-1.5 text-left">अक्षर</th>
                              <th className="px-2 py-1.5 text-left">ऋषि</th>
                              <th className="px-2 py-1.5 text-left">देवता</th>
                              <th className="px-2 py-1.5 text-left">शक्ति</th>
                              <th className="px-2 py-1.5 text-left">मुद्रा</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-100 bg-white">
                            {articleData.gayatriDetails.syllables24.map((s) => (
                              <tr key={s.num} className="hover:bg-amber-50/50">
                                <td className="px-2 py-1 font-bold text-stone-500">{s.num}</td>
                                <td className="px-2 py-1 font-bold text-amber-900">{s.letter}</td>
                                <td className="px-2 py-1 text-stone-700">{s.rishi}</td>
                                <td className="px-2 py-1 text-stone-700">{s.devata}</td>
                                <td className="px-2 py-1 text-stone-700">{s.shakti}</td>
                                <td className="px-2 py-1 font-semibold text-emerald-800">{s.mudra}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Mahamrityunjaya 4-Fold Esoteric Planes */}
                  {articleData.esoteric4Fold && (
                    <div className="space-y-3 pt-2">
                      <h3 className="text-xs sm:text-sm font-bold text-amber-950 font-devanagari flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>महामृत्युंजय मंत्र के चतुर्विध फल एवं संजीवनी रहस्य</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {articleData.esoteric4Fold.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs font-devanagari text-xs space-y-1"
                          >
                            <p className="font-bold text-amber-950">{p.plane}</p>
                            <p className="text-stone-700">{p.meaning}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 9: विभिन्न परंपराओं में अंतर */}
                <div id="content-9" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>9. विभिन्न परंपराओं एवं शाखाओं में तुलनात्मक दृष्टिकोण</span>
                    <span className="text-[11px] font-normal text-stone-400">Comparative Analysis</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200 text-xs sm:text-sm font-devanagari space-y-2 text-stone-800 leading-relaxed">
                    <p className="break-words whitespace-pre-wrap">
                      {articleData.traditionsDifferences || "ऋग्वेद की शाकल और बाष्कल शाखाओं में तथा शुक्ल व कृष्ण यजुर्वेद में सूक्ष्म पाठ भेद प्राप्त होते हैं।"}
                    </p>
                  </div>
                  {articleData.traditionsComparison && articleData.traditionsComparison.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
                      {articleData.traditionsComparison.map((tc, tcIdx) => (
                        <div key={tcIdx} className="p-3 bg-white rounded-xl border border-stone-200 shadow-2xs font-devanagari text-xs space-y-1">
                          <strong className="text-amber-900 font-bold block border-b border-stone-100 pb-1">{tc.tradition}</strong>
                          <p className="text-stone-700 text-[11px] leading-relaxed">{tc.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Section 10: इतिहास एवं शोध */}
                <div id="content-10" className="space-y-3">
                  <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 border-b border-amber-100 pb-2 flex items-center justify-between">
                    <span>10. इतिहास, पांडुलिपि परंपरा एवं आधुनिक शोध</span>
                    <span className="text-[11px] font-normal text-stone-400">Manuscripts & Modern Study</span>
                  </h2>
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/40 border border-amber-100 text-xs sm:text-sm font-devanagari space-y-2 text-stone-800 leading-relaxed">
                    <p className="break-words whitespace-pre-wrap">
                      {articleData.historyResearch || "यूनेस्को द्वारा ऋग्वेद की पांडुलिपियों को 'विश्व धरोहर' (Memory of the World) के रूप में मान्यता प्राप्त है। महर्षि यास्क के निरुक्त से लेकर सायणाचार्य के माधवीय भाष्य तक इसकी निरंतर प्रामाणिक व्याख्या की गई है।"}
                    </p>
                  </div>
                  {articleData.historyResearchDetails && articleData.historyResearchDetails.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {articleData.historyResearchDetails.map((hr, hrIdx) => (
                        <div key={hrIdx} className="p-3 bg-white rounded-xl border border-amber-200/80 shadow-2xs font-devanagari text-xs space-y-1">
                          <strong className="text-amber-950 font-bold block border-b border-amber-100 pb-1">{hr.title}</strong>
                          <p className="text-stone-700 text-[11px] leading-relaxed">{hr.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </main>

          {/* Right Column: Related Articles & Topics (Hidden in Wide Reading Mode or Hymns Mode) */}
          {!isWideReadingMode && viewMode !== "hymns" && (
            <aside className="lg:col-span-4 xl:col-span-3 space-y-6">
              {/* Table of Contents Quick Summary Card in Right Rail */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <div className="flex items-center justify-between border-b border-amber-100 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 flex items-center gap-1.5">
                    <BookMarked className="w-3.5 h-3.5 text-amber-700" />
                    <span>अनुक्रमणिका (TOC)</span>
                  </h3>
                  <button
                    type="button"
                    onClick={() => setIsTocDrawerOpen(true)}
                    className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
                  >
                    विस्तार से देखें
                  </button>
                </div>
                <nav className="space-y-1 font-devanagari text-xs">
                  {contentsList.slice(0, 6).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all cursor-pointer flex items-center justify-between ${
                        activeTab === item.id
                          ? "bg-amber-100/90 text-amber-950 font-bold border-l-2 border-amber-700"
                          : "text-stone-600 hover:bg-amber-50 hover:text-stone-900"
                      }`}
                    >
                      <span className="truncate">{item.shortTitle || item.title}</span>
                      {item.badge && (
                        <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  ))}
                  {contentsList.length > 6 && (
                    <button
                      onClick={() => setIsTocDrawerOpen(true)}
                      className="w-full text-center py-1 text-[11px] font-semibold text-amber-800 hover:text-amber-950 cursor-pointer pt-1"
                    >
                      + अन्य {contentsList.length - 6} अनुभाग देखें →
                    </button>
                  )}
                </nav>
              </div>

              {/* Related Articles */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-2">
                  Related Articles
                </h3>
                <div className="space-y-2.5">
                  {articleData.relatedArticles?.map((art, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        if (art.slug) {
                          navigate(`/library/${category}/${subject}/${art.slug}`);
                        }
                      }}
                      className="p-2.5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all cursor-pointer group flex items-center justify-between"
                    >
                      <div>
                        <h4 className="text-xs font-bold text-stone-800 group-hover:text-amber-900 transition-colors">
                          {art.title}
                        </h4>
                        <span className="text-[10px] text-amber-700/80 font-medium">
                          {art.tag}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Grantha Context */}
              {articleData.relatedGrantha && (
                <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-4 rounded-2xl border border-amber-200 shadow-2xs space-y-2">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-amber-800">
                    मूल ग्रंथ संदर्भ (Grantha Archive)
                  </span>
                  <h4 className="font-serif text-sm font-bold text-stone-900">
                    {articleData.relatedGrantha.name}
                  </h4>
                  <p className="text-xs text-stone-600 font-devanagari line-clamp-3">
                    {articleData.relatedGrantha.desc}
                  </p>
                  <div className="pt-2 border-t border-amber-200/50">
                    <button
                      onClick={() => navigate(`/library/${category}/${subject}`)}
                      className="text-xs font-bold text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                    >
                      <span>समग्र शाखा ग्रंथ देखें</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}

              {/* Related Topics / Tags */}
              {articleData.relatedTopics && (
                <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-2">
                    Related Topics
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {articleData.relatedTopics.map((topic, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 transition-colors cursor-pointer"
                      >
                        #{topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          )}
        </div>
      </div>

      {/* Floating Bottom Quick Bar on Mobile (lg:hidden) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-amber-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] z-40 lg:hidden px-3 py-2 flex items-center justify-around">
        {hasAllMantras && (
          <button
            onClick={() => setViewMode("hymns")}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              viewMode === "hymns" ? "text-amber-900 bg-amber-100" : "text-stone-600 hover:text-amber-900"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[10px]">ऋचाएँ ({articleData.allMantras.length})</span>
          </button>
        )}

        <button
          onClick={() => {
            setViewMode("analysis");
            scrollToSection("content-1");
          }}
          className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
            viewMode === "analysis" ? "text-amber-900 bg-amber-100" : "text-stone-600 hover:text-amber-900"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span className="text-[10px]">१० अनुभाग</span>
        </button>

        <button
          onClick={() => setIsTocDrawerOpen(true)}
          className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-xs font-bold text-stone-600 hover:text-amber-900 transition-colors cursor-pointer"
        >
          <Menu className="w-4 h-4" />
          <span className="text-[10px]">अनुक्रमणिका</span>
        </button>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg text-xs font-bold text-amber-800 hover:text-amber-950 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[10px]">शीर्ष (Top)</span>
          </button>
        )}
      </div>

      {/* Universal Table of Contents Slide-Out / Modal Drawer (Desktop & Mobile) */}
      {isTocDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setIsTocDrawerOpen(false)}
        >
          <div
            className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl border border-amber-200 shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-amber-100 pb-3">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-800" />
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                    अनुक्रमणिका (Table of Contents)
                  </h3>
                  <p className="text-[11px] text-stone-500 font-devanagari">
                    १० शास्त्रीय अनुभाग • किसी भी अनुभाग पर क्लिक कर सीधे पहुँचें
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsTocDrawerOpen(false)}
                className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 cursor-pointer"
                title="बंद करें"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="space-y-1.5 font-devanagari">
              {contentsList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center justify-between ${
                    activeTab === item.id
                      ? "bg-amber-100 text-amber-950 font-bold border-l-4 border-amber-700 shadow-2xs"
                      : "bg-stone-50 hover:bg-amber-50 text-stone-700 hover:text-stone-900"
                  }`}
                >
                  <span className="truncate">{item.title}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    {item.badge && (
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
                  </div>
                </button>
              ))}
            </nav>

            {hasAllMantras && (
              <div className="pt-2 border-t border-amber-100">
                <button
                  onClick={() => {
                    setViewMode("hymns");
                    setIsTocDrawerOpen(false);
                  }}
                  className="w-full py-2 px-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>समस्त {articleData.allMantras.length} ऋचाओं का वाचन खोलें</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
