import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Home,
  CheckCircle2,
  Layers,
  FileText,
  User,
  Sun,
  Search,
  Filter,
  X
} from "lucide-react";
import { SUBJECTS_DATA, CATEGORIES_DATA } from "../data/categoryTemplatesData.js";
import { VEDA_HIERARCHY_TREE } from "../data/vedaHierarchyTree.js";
import VedicLibraryService from "../services/vedicLibraryService.js";
import bannerRigveda from "../assets/images/library/banners/banner-rigveda.jpg";
import bannerYajurveda from "../assets/images/library/banners/banner-yajurveda.jpg";
import bannerSamaveda from "../assets/images/library/banners/banner-samaveda.jpg";
import bannerAtharvaveda from "../assets/images/library/banners/banner-atharvaveda.jpg";
import bannerVedasHeritage from "../assets/images/library/banners/banner-vedas-heritage.jpg";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
import bannerFireRitual from "../assets/images/library/banners/banner-fire-ritual.png";
import bannerKashiGhat from "../assets/images/library/banners/banner-kashi-ghat.png";
import bannerSacredDetails from "../assets/images/library/banners/banner-sacred-details.png";
import rigvedaImg from "../assets/images/library/cards/card-rigveda.jpg";
import yajurvedaImg from "../assets/images/library/cards/card-yajurveda.jpg";
import samavedaImg from "../assets/images/library/cards/card-samaveda.jpg";
import atharvavedaImg from "../assets/images/library/cards/card-atharvaveda.jpg";
import cardSamhitaImg from "../assets/images/library/cards/card-samhita.jpg";
import cardShrautaImg from "../assets/images/library/cards/card-shrautasutra.jpg";
import cardGrihyaImg from "../assets/images/library/cards/card-grihyasutra.jpg";
import cardDharmasutraImg from "../assets/images/library/cards/card-dharmasutra.jpg";
import cardPratiImg from "../assets/images/library/cards/card-pratishakhya.jpg";
import cardBrahmanaImg from "../assets/images/library/cards/card-brahmana.jpg";
import cardAranyakaImg from "../assets/images/library/cards/card-aranyaka.jpg";
import cardUpanishadImg from "../assets/images/library/cards/card-upanishad.jpg";
import cardPujaImg from "../assets/images/library/cards/card-puja.jpg";
import cardYagyaImg from "../assets/images/library/cards/card-yagya-fire.jpg";
import cardGitaImg from "../assets/images/library/cards/card-gita.jpg";
import cardRamayanaImg from "../assets/images/library/cards/card-ramayana.jpg";
import cardMahabharataImg from "../assets/images/library/cards/card-mahabharata.jpg";
import cardPuranaImg from "../assets/images/library/cards/card-purana.jpg";
import cardAstrologyImg from "../assets/images/library/cards/card-astrology.jpg";
import cardVastuImg from "../assets/images/library/cards/card-vastu.jpg";
import cardSamskaraImg from "../assets/images/library/cards/card-samskara.jpg";

// Deities for authentic Suktas and Devatas
import deityShivaImg from "../assets/images/library/deities/deity-shiva.jpg";
import deitySaraswatiImg from "../assets/images/library/deities/deity-saraswati.jpg";
import deityBrahmaImg from "../assets/images/library/deities/deity-brahma.jpg";
import deityVishnuImg from "../assets/images/library/deities/deity-vishnu.jpg";
import deityTrimurtiImg from "../assets/images/library/deities/deity-trimurti.jpg";
import deity33DevasImg from "../assets/images/library/deities/deity-33-devas.jpg";
import deityLakshmiImg from "../assets/images/library/deities/deity-lakshmi.jpg";
import deityGaneshImg from "../assets/images/library/deities/deity-ganesh.jpg";
import deityDurgaImg from "../assets/images/library/deities/deity-durga.jpg";
import deityNavagrahaImg from "../assets/images/library/deities/deity-navagraha.jpg";
import deityDashavataraImg from "../assets/images/library/deities/deity-dashavatara.jpg";
import deityPanchayatanaImg from "../assets/images/library/deities/deity-panchayatana.jpg";

const CARD_IMAGES = {
  "card-rigveda.jpg": rigvedaImg,
  "card-yajurveda.jpg": yajurvedaImg,
  "card-samaveda.jpg": samavedaImg,
  "card-atharvaveda.jpg": atharvavedaImg,
  "card-samhita.jpg": cardSamhitaImg,
  "card-shrautasutra.jpg": cardShrautaImg,
  "card-grihyasutra.jpg": cardGrihyaImg,
  "card-dharmasutra.jpg": cardDharmasutraImg,
  "card-pratishakhya.jpg": cardPratiImg,
  "card-brahmana.jpg": cardBrahmanaImg,
  "card-aranyaka.jpg": cardAranyakaImg,
  "card-upanishad.jpg": cardUpanishadImg,
  "card-puja.jpg": cardPujaImg,
  "card-yagya-fire.jpg": cardYagyaImg,
  "card-gita.jpg": cardGitaImg,
  "card-ramayana.jpg": cardRamayanaImg,
  "card-mahabharata.jpg": cardMahabharataImg,
  "card-purana.jpg": cardPuranaImg,
  "card-astrology.jpg": cardAstrologyImg,
  "card-vastu.jpg": cardVastuImg,
  "card-samskara.jpg": cardSamskaraImg,
  // Deities
  "deity-shiva.jpg": deityShivaImg,
  "deity-saraswati.jpg": deitySaraswatiImg,
  "deity-brahma.jpg": deityBrahmaImg,
  "deity-vishnu.jpg": deityVishnuImg,
  "deity-trimurti.jpg": deityTrimurtiImg,
  "deity-33-devas.jpg": deity33DevasImg,
  "deity-lakshmi.jpg": deityLakshmiImg,
  "deity-ganesh.jpg": deityGaneshImg,
  "deity-durga.jpg": deityDurgaImg,
  "deity-navagraha.jpg": deityNavagrahaImg,
  "deity-dashavatara.jpg": deityDashavataraImg,
  "deity-panchayatana.jpg": deityPanchayatanaImg,
  // Granular Aliases for specific Shakhas, Granthas & Suktas
  "card-sukta-agni.jpg": cardYagyaImg,
  "card-sukta-gayatri.jpg": deitySaraswatiImg,
  "card-sukta-purusha.jpg": deityVishnuImg,
  "card-sukta-nasadiya.jpg": deityTrimurtiImg,
  "card-sukta-sangathan.jpg": cardSamhitaImg,
  "card-sukta-samgathan.jpg": cardSamhitaImg,
  "card-sukta-mrityunjaya.jpg": deityShivaImg,
  "card-sukta-rudra.jpg": deityShivaImg,
  "card-sukta-vak.jpg": deitySaraswatiImg,
  "card-sukta-hiranyagarbha.jpg": deityBrahmaImg,
  "card-sukta-prithvi.jpg": cardSamhitaImg,
  "card-shakala-shakha.jpg": rigvedaImg,
  "card-madhyandina-shakha.jpg": yajurvedaImg,
  "card-kanva-shakha.jpg": yajurvedaImg,
  "card-taittiriya-shakha.jpg": yajurvedaImg,
  "card-kauthuma-shakha.jpg": samavedaImg,
  "card-jaiminiya-shakha.jpg": samavedaImg,
  "card-shaunaka-shakha.jpg": atharvavedaImg,
  "card-paippalada-shakha.jpg": atharvavedaImg,
  "card-grantha-shatapatha.jpg": cardBrahmanaImg,
  "card-grantha-aitareya.jpg": cardBrahmanaImg,
  "card-grantha-chandogya.jpg": cardUpanishadImg,
  "card-grantha-brihadaranyaka.jpg": cardUpanishadImg,
  "card-grantha-isha.jpg": cardUpanishadImg,
  "card-grantha-katha.jpg": cardUpanishadImg,
  "card-grantha-mundaka.jpg": cardUpanishadImg,
  "card-grantha-mandukya.jpg": cardUpanishadImg,
  "card-sulbasutra.jpg": cardShrautaImg,
  "card-shiksha.jpg": cardPratiImg,
  "card-kalpa.jpg": cardShrautaImg,
  "card-vyakarana.jpg": cardSamhitaImg,
  "card-nirukta.jpg": cardSamhitaImg,
  "card-chhanda.jpg": cardPratiImg,
  "card-jyotisha.jpg": cardAstrologyImg
};

function resolveCardImage(imageKey, textName = "", badge = "") {
  if (imageKey && CARD_IMAGES[imageKey]) {
    return CARD_IMAGES[imageKey];
  }
  const combined = `${textName} ${badge}`.toLowerCase();
  if (combined.includes("संहिता") || combined.includes("samhita")) return cardSamhitaImg;
  if (combined.includes("ब्राह्मण") || combined.includes("brahmana")) return cardBrahmanaImg;
  if (combined.includes("आरण्यक") || combined.includes("aranyaka")) return cardAranyakaImg;
  if (combined.includes("उपनिषद") || combined.includes("upanishad")) return cardUpanishadImg;
  if (combined.includes("श्रौत") || combined.includes("shrauta")) return cardShrautaImg;
  if (combined.includes("गृह्य") || combined.includes("grihya")) return cardGrihyaImg;
  if (combined.includes("धर्म") || combined.includes("dharma") || combined.includes("स्मृति")) return cardDharmasutraImg;
  if (combined.includes("प्रातिशाख्य") || combined.includes("pratishakhya") || combined.includes("शिक्षा")) return cardPratiImg;
  if (combined.includes("रुद्र") || combined.includes("शिव") || combined.includes("मृत्युंजय")) return deityShivaImg;
  if (combined.includes("गायत्री") || combined.includes("सरस्वती") || combined.includes("वाक्")) return deitySaraswatiImg;
  if (combined.includes("पुरुष") || combined.includes("विष्णु")) return deityVishnuImg;
  if (combined.includes("अग्नि") || combined.includes("हवन") || combined.includes("यज्ञ")) return cardYagyaImg;
  if (combined.includes("पूजा") || combined.includes("उपचार")) return cardPujaImg;
  if (combined.includes("ज्योतिष") || combined.includes("ग्रह")) return cardAstrologyImg;
  if (combined.includes("संस्कार")) return cardSamskaraImg;
  return cardSamhitaImg;
}

const SUBJECT_BANNERS = {
  rigveda: bannerRigveda,
  yajurveda: bannerYajurveda,
  samaveda: bannerSamaveda,
  atharvaveda: bannerAtharvaveda,
  shaiva: bannerYajurveda,
  shodashopachara: bannerYajurveda
};

export default function SubjectDetailPage({ onOpenSearch }) {
  const { category = "veda", subject = "rigveda" } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [drillPath, setDrillPath] = useState([]);
  const [filterType, setFilterType] = useState("all");
  const [localSearch, setLocalSearch] = useState("");
  const [granthaFilterType, setGranthaFilterType] = useState("all");
  const [granthaSearch, setGranthaSearch] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    setDrillPath([]);
    setFilterType("all");
    setLocalSearch("");
    setGranthaFilterType("all");
    setGranthaSearch("");
    setTextSearch("");

    let isMounted = true;
    if (category === "veda") {
      VedicLibraryService.getVedaBySlug(subject)
        .then((res) => {
          if (isMounted && res) {
            setLiveData(res);
          }
        })
        .catch(() => {});
    } else {
      setLiveData(null);
    }

    return () => {
      isMounted = false;
    };
  }, [category, subject]);

  const key = `${category}/${subject}`;
  const subjectData = liveData?.subjectData || SUBJECTS_DATA[key] || SUBJECTS_DATA["veda/rigveda"];
  const catData = CATEGORIES_DATA[category] || CATEGORIES_DATA["veda"];

  // Find Veda root node in hierarchy tree
  const fallbackVedaNode =
    category === "veda"
      ? VEDA_HIERARCHY_TREE.children.find(
          (v) => v.id === subject || v.slug === subject
        ) || VEDA_HIERARCHY_TREE.children[0]
      : null;

  const currentVedaNode =
    category === "veda"
      ? (liveData?.treeNode || fallbackVedaNode)
      : null;

  // Resolve active drill down node within the subject
  let activeNode = currentVedaNode;
  const drillNodesPath = [];

  if (currentVedaNode && drillPath.length > 0) {
    for (const pathId of drillPath) {
      if (activeNode && activeNode.children) {
        const found = activeNode.children.find(
          (c) => c.id === pathId || c.slug === pathId
        );
        if (found) {
          drillNodesPath.push(found);
          activeNode = found;
        }
      }
    }
  }

  const allCurrentCards = activeNode?.children || [];

  // Extract available filter categories from active node children
  const availableTypes = Array.from(
    new Set(
      allCurrentCards
        .map((c) => {
          if (c.badge) return c.badge;
          if (c.name.includes("संहिता")) return "संहिता";
          if (c.name.includes("ब्राह्मण")) return "ब्राह्मण";
          if (c.name.includes("आरण्यक")) return "आरण्यक";
          if (c.name.includes("उपनिषद")) return "उपनिषद";
          if (c.name.includes("सूत्र") || c.name.includes("प्रातिशाख्य")) return "सूत्र ग्रंथ";
          if (c.name.includes("सूक्त")) return "सूक्त";
          if (c.mantraId || c.name.includes("मंत्र")) return "वेदमंत्र";
          return null;
        })
        .filter(Boolean)
    )
  );

  const displayBranchCards = allCurrentCards.filter((branch) => {
    if (filterType !== "all") {
      const bType = branch.badge || "";
      const matchesType =
        bType.includes(filterType) ||
        branch.name.includes(filterType) ||
        (branch.desc && branch.desc.includes(filterType));
      if (!matchesType) return false;
    }
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase().trim();
      const matchesQuery =
        branch.name.toLowerCase().includes(q) ||
        (branch.enName && branch.enName.toLowerCase().includes(q)) ||
        (branch.desc && branch.desc.toLowerCase().includes(q)) ||
        (branch.stats && branch.stats.toLowerCase().includes(q));
      if (!matchesQuery) return false;
    }
    return true;
  });

  const allRelatedGranthas = subjectData.relatedGranthas || [];
  const availableGranthaTypes = Array.from(
    new Set(allRelatedGranthas.map((g) => g.type).filter(Boolean))
  );

  const displayRelatedGranthas = allRelatedGranthas.filter((g) => {
    if (granthaFilterType !== "all" && g.type !== granthaFilterType) {
      return false;
    }
    if (granthaSearch.trim()) {
      const q = granthaSearch.toLowerCase().trim();
      const matches =
        (g.name && g.name.toLowerCase().includes(q)) ||
        (g.type && g.type.toLowerCase().includes(q)) ||
        (g.author && g.author.toLowerCase().includes(q)) ||
        (g.desc && g.desc.toLowerCase().includes(q));
      if (!matches) return false;
    }
    return true;
  });

  const allAvailableTexts = subjectData.availableTexts || [];
  const displayAvailableTexts = allAvailableTexts.filter((t) => {
    if (textSearch.trim()) {
      const q = textSearch.toLowerCase().trim();
      return (
        (t.title && t.title.toLowerCase().includes(q)) ||
        (t.desc && t.desc.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const handleBranchCardClick = (branch) => {
    if (branch.mantraId) {
      navigate(`/library/mantra/${branch.mantraId}`);
    } else if (branch.children && branch.children.length > 0) {
      setDrillPath((prev) => [...prev, branch.id]);
      const el = document.getElementById("structure");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      const targetSlug = branch.slug || branch.id;
      navigate(`/library/${category}/${subject}/${targetSlug}`);
    }
  };

  return (
    <div className="bg-[#fffaf0] min-h-screen">
      {/* Breadcrumb (Matching Page 3 Section 2) */}
      <div className="bg-white border-b border-amber-200/70 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-stone-500 flex-wrap">
          <Link to="/" className="hover:text-amber-800 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>›</span>
          <Link to="/library" className="hover:text-amber-800 transition-colors">
            Veda Library
          </Link>
          <span>›</span>
          <Link to={`/library/${category}`} className="hover:text-amber-800 transition-colors">
            {catData.name}
          </Link>
          <span>›</span>
          {drillPath.length === 0 ? (
            <span className="text-amber-900 font-bold">{subjectData.name} ({subjectData.enName})</span>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setDrillPath([])}
                className="text-stone-600 hover:text-amber-800 hover:underline cursor-pointer"
              >
                {subjectData.name}
              </button>
              {drillNodesPath.map((node, index) => {
                const isLast = index === drillNodesPath.length - 1;
                return (
                  <React.Fragment key={node.id || index}>
                    <span>›</span>
                    {isLast ? (
                      <span className="text-amber-900 font-bold">{node.name}</span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setDrillPath(drillPath.slice(0, index + 1))}
                        className="text-stone-600 hover:text-amber-800 hover:underline cursor-pointer"
                      >
                        {node.name}
                      </button>
                    )}
                  </React.Fragment>
                );
              })}
            </>
          )}
        </div>
      </div>

      {/* Subject Hero (Matching Page 3 Section 3) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#170e07] via-[#2c1a0e] to-[#140b05] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-b border-amber-900/60 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src={SUBJECT_BANNERS[subject] || bannerSanctum}
            alt={subjectData.name}
            className="w-full h-full object-cover object-center opacity-40 scale-102 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140b05] via-[#1c1108]/75 to-[#140b05]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-[#140b05]/85" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{subjectData.eyebrow}</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
            {subjectData.name}
          </h1>
          <p className="font-serif text-lg sm:text-2xl text-amber-200/95 font-medium tracking-wide">
            {subjectData.enName}
          </p>
          <p className="text-xs sm:text-sm text-amber-100/90 font-devanagari max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
            {subjectData.intro}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#structure"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-950/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-amber-400/30"
            >
              <span>Explore Types & Branches →</span>
            </a>
            <a
              href="#articles"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span>Explore Articles →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Subject Quick Info Bar (Matching Page 3 Section 4) */}
      <div className="bg-amber-50/60 border-b border-amber-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">TYPE</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo?.type || "Veda (श्रुति)"}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">LANGUAGE</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo?.language || "Vedic Sanskrit"}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">CHIEF PRIEST</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo?.chiefPriest || "मुख्य ऋत्विक"}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">STRUCTURE</span>
            <span className="font-semibold text-stone-900">
              {subjectData.quickInfo?.mandalCount
                ? `${subjectData.quickInfo.mandalCount} • ${subjectData.quickInfo.suktaCount}`
                : "प्रामाणिक संरचना"}
            </span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">CHIEF RISHIS</span>
            <span className="font-semibold text-stone-900 truncate block" title={subjectData.quickInfo?.chiefRishis || (Array.isArray(subjectData.rishis) ? subjectData.rishis.map(r => typeof r === 'string' ? r.split(' ')[0] : r.name).join(", ") : "")}>
              {subjectData.quickInfo?.chiefRishis || (Array.isArray(subjectData.rishis) ? subjectData.rishis.slice(0, 4).map(r => typeof r === 'string' ? r.split(' ')[0] : r.name).join(", ") : "प्रामाणिक ऋषि परंपरा")}
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Sub-Navigation (Matching Page 3 Section 5) */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 px-4 sm:px-6 lg:px-8 py-2 overflow-x-auto shadow-2xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-semibold">
          {["Overview", "Structure", "Browse Texts", "Rishi & Devata", "Articles", "Related Grantha"].map((tab) => (
            <a
              key={tab}
              href={`#${tab.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-3.5 py-1.5 rounded-lg text-stone-700 hover:text-amber-900 hover:bg-amber-50 whitespace-nowrap transition-colors"
            >
              {tab}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        {/* 6. Overview (Section 6) */}
        <section id="overview" className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
            {subjectData.name} के बारे में
          </h2>
          <p className="text-sm text-stone-700 font-devanagari leading-relaxed">
            {subjectData.overviewText}
          </p>
        </section>

        {/* 7. Explore Structure & Shakhas (Section 7) */}
        {category === "veda" && currentVedaNode ? (
          <section id="structure" className="scroll-mt-24">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  {drillPath.length === 0
                    ? `${subjectData.name} के प्रमुख प्रकार, शाखाएँ एवं वांग्मय`
                    : activeNode.name}
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 font-devanagari mt-1">
                  {drillPath.length === 0
                    ? `क्लाइंट द्वारा निर्धारित प्रामाणिक विभाजन के अनुसार किसी भी शाखा या प्रकार पर क्लिक करें (${displayBranchCards.length} प्रकार उपलब्ध)`
                    : `${activeNode.enName || ""} — नीचे दिए गए उप-प्रकार व ग्रंथ (${displayBranchCards.length} उपलब्ध)`}
                </p>
              </div>

              {drillPath.length > 0 && (
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setDrillPath([])}
                    className="text-xs font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
                  >
                    मूल प्रकारों पर लौटें (Reset)
                  </button>
                </div>
              )}
            </div>

            {/* Breadcrumb / Back Bar when drilled down */}
            {drillPath.length > 0 && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setDrillPath((prev) => prev.slice(0, -1))}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100/80 text-amber-900 font-bold text-xs border border-amber-300 shadow-2xs transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>पीछे जाएं (Back)</span>
                  </button>

                  <span className="text-stone-300">|</span>

                  <button
                    type="button"
                    onClick={() => setDrillPath([])}
                    className="font-bold text-amber-800 hover:text-amber-950 hover:underline cursor-pointer"
                  >
                    {currentVedaNode.name} (मुख्य प्रकार)
                  </button>

                  {drillNodesPath.map((node, index) => {
                    const isLast = index === drillNodesPath.length - 1;
                    return (
                      <React.Fragment key={node.id || index}>
                        <span className="text-stone-400">›</span>
                        {isLast ? (
                          <span className="font-bold text-stone-900 bg-amber-100/90 px-2.5 py-0.5 rounded-md border border-amber-200">
                            {node.name}
                          </span>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setDrillPath(drillPath.slice(0, index + 1))}
                            className="text-stone-600 hover:text-amber-800 hover:underline cursor-pointer"
                          >
                            {node.name}
                          </button>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-stone-500">
                    स्तर {drillPath.length + 1} • {displayBranchCards.length} उपलब्ध
                  </span>
                </div>
              </div>
            )}

            {/* Dynamic Filter & Search Toolbar */}
            {allCurrentCards.length > 1 && (
              <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
                {/* Type Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
                  <span className="text-stone-400 mr-1 flex items-center gap-1 text-[11px] font-semibold">
                    <Filter className="w-3.5 h-3.5 text-amber-700" />
                    <span>फ़िल्टर:</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setFilterType("all")}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                      filterType === "all"
                        ? "bg-amber-600 text-white font-bold shadow-2xs"
                        : "bg-amber-50/80 text-stone-700 hover:bg-amber-100 border border-amber-200/60"
                    }`}
                  >
                    सभी ({allCurrentCards.length})
                  </button>
                  {availableTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setFilterType(t)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                        filterType === t
                          ? "bg-amber-600 text-white font-bold shadow-2xs"
                          : "bg-amber-50/80 text-stone-700 hover:bg-amber-100 border border-amber-200/60"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Local Quick Search */}
                <div className="relative min-w-[200px] sm:min-w-[240px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={localSearch}
                    onChange={(e) => setLocalSearch(e.target.value)}
                    placeholder="इस स्तर में खोजें..."
                    className="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-[#fffaf0] border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                  />
                  {localSearch && (
                    <button
                      type="button"
                      onClick={() => setLocalSearch("")}
                      className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* If zero results matched the filter */}
            {displayBranchCards.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 shadow-2xs space-y-3">
                <p className="font-serif text-lg font-bold text-stone-800">
                  चयनित फ़िल्टर के अनुसार कोई ग्रंथ या मंत्र नहीं मिला।
                </p>
                <p className="text-xs text-stone-500 font-devanagari">
                  कृपया फ़िल्टर रीसेट करें या भिन्न कीवर्ड द्वारा खोजें।
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilterType("all");
                    setLocalSearch("");
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-xs hover:bg-amber-700 cursor-pointer"
                >
                  फ़िल्टर रीसेट करें (Reset Filter)
                </button>
              </div>
            ) : (
              /* Hierarchical Branch Cards Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayBranchCards.map((branch, idx) => {
                const imgSrc = resolveCardImage(branch.imageKey, branch.name, branch.badge);
                const hasChildren = branch.children && branch.children.length > 0;

                return (
                  <div
                    key={branch.id || idx}
                    onClick={() => handleBranchCardClick(branch)}
                    className="group flex flex-col bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative aspect-16/9 overflow-hidden bg-stone-900">
                      <img
                        src={imgSrc}
                        alt={branch.name}
                        className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                      {branch.priest && (
                        <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                          {branch.priest}
                        </span>
                      )}
                      {branch.badge ? (
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full shadow-xs backdrop-blur-xs flex items-center gap-1">
                          <span>{branch.badge}</span>
                          {hasChildren && <span>({branch.children.length})</span>}
                        </span>
                      ) : hasChildren ? (
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full shadow-xs backdrop-blur-xs flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>{branch.children.length} उप-प्रकार / शाखाएँ</span>
                        </span>
                      ) : null}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                            {branch.name}
                          </h3>
                          {branch.enName && (
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 shrink-0 max-w-[130px] truncate text-right">
                              {branch.enName}
                            </span>
                          )}
                        </div>
                        {branch.desc && (
                          <p className="text-xs text-stone-600 font-devanagari mt-2 line-clamp-2 leading-relaxed">
                            {branch.desc}
                          </p>
                        )}
                        {branch.stats && (
                          <p className="text-[10px] text-stone-500 mt-2 font-medium">
                            {branch.stats}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
                        <span>
                          {branch.mantraId
                            ? "मंत्र वाचन पृष्ठ खोलें (Read Mantra)"
                            : hasChildren
                            ? `इसके उप-प्रकार व अध्याय देखें (${branch.children.length})`
                            : branch.enName
                            ? `Explore ${branch.enName}`
                            : "ग्रंथ का विवरण देखें"}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            )}
          </section>
        ) : (
          subjectData.structureCards && (
            <section id="structure">
              <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
                {subjectData.name} की संरचना एवं मुख्य विभाजन
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {subjectData.structureCards.map((st, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs text-center">
                    <span className="font-serif text-3xl font-bold text-amber-700 block mb-1">
                      {st.num}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-stone-900">{st.title}</h3>
                    <p className="text-xs text-stone-500 font-devanagari mt-1">{st.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        )}

        {/* 8. Browse Texts (Section 8) */}
        {allAvailableTexts.length > 0 && (
          <section id="browse-texts">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Browse {subjectData.enName} Texts
                </h2>
                <p className="text-xs text-stone-500 font-devanagari mt-0.5">
                  प्रमुख सूक्त, ऋचाएँ एवं प्रामाणिक संदर्भ
                </p>
              </div>

              {allAvailableTexts.length > 3 && (
                <div className="relative min-w-[200px] sm:min-w-[240px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={textSearch}
                    onChange={(e) => setTextSearch(e.target.value)}
                    placeholder="सूक्त या पाठ खोजें..."
                    className="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-white border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari shadow-2xs"
                  />
                  {textSearch && (
                    <button
                      type="button"
                      onClick={() => setTextSearch("")}
                      className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            </div>

            {displayAvailableTexts.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                <p className="text-sm font-semibold text-stone-700">कोई सूक्त नहीं मिला।</p>
                <button
                  type="button"
                  onClick={() => setTextSearch("")}
                  className="text-xs text-amber-700 hover:text-amber-900 underline font-bold cursor-pointer"
                >
                  खोज साफ़ करें
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayAvailableTexts.map((text, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (text.mantraId) {
                        navigate(`/library/mantra/${text.mantraId}`);
                      } else if (text.slug) {
                        navigate(`/library/${category}/${subject}/${text.slug}`);
                      } else {
                        navigate(`/library/${category}/${subject}/agnisukta`);
                      }
                    }}
                    className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-amber-400 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors">{text.title}</h4>
                      <p className="text-xs text-stone-500 font-devanagari mt-0.5 leading-relaxed">{text.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-700 flex-shrink-0 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 10. Rishi & Devata (Section 10) */}
        {subjectData.rishis && (
          <section id="rishi-&-devata" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-emerald-700" />
                <span>प्रमुख ऋषि (Vedic Rishis)</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjectData.rishis.map((r) => (
                  <span key={r} className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-900">
                    {r}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-700" />
                <span>उपास्य देवता (Devatas)</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {subjectData.devatas.map((d) => (
                  <span key={d} className="px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 13. Articles (Section 13) */}
        {subjectData.articles && (
          <section id="articles">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Learn More About {subjectData.enName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {subjectData.articles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => navigate(`/library/${category}/${subject}/${art.slug}`)}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900">{art.title}</h3>
                    <p className="text-xs text-stone-600 font-devanagari mt-2 leading-relaxed">
                      {art.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-stone-100 text-xs font-bold text-amber-700 flex items-center justify-between">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 14. Related Grantha (Section 14) */}
        {allRelatedGranthas.length > 0 && (
          <section id="related-grantha" className="bg-[#fffdf8] p-6 sm:p-8 rounded-3xl border border-amber-200/90 shadow-2xs">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
              <div>
                <h2 className="font-serif text-2xl font-bold text-stone-900">
                  Related Grantha & Commentaries
                </h2>
                <p className="text-xs text-stone-500 font-devanagari mt-0.5">
                  {subjectData.name} से संबंधित प्रामाणिक संहिताएँ, ब्राह्मण, आरण्यक, उपनिषद एवं सायण भाष्य
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                {displayRelatedGranthas.length} / {allRelatedGranthas.length} उपलब्ध ग्रंथ
              </span>
            </div>

            {/* Grantha Filter & Search Toolbar */}
            {allRelatedGranthas.length > 2 && (
              <div className="mb-5 p-3 rounded-xl bg-white border border-amber-200/80 shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {/* Grantha Type Filter Chips */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none text-xs">
                  <button
                    type="button"
                    onClick={() => setGranthaFilterType("all")}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      granthaFilterType === "all"
                        ? "bg-amber-700 text-white font-bold shadow-2xs"
                        : "bg-amber-50 text-stone-700 hover:bg-amber-100 border border-amber-200/70"
                    }`}
                  >
                    सभी ({allRelatedGranthas.length})
                  </button>
                  {availableGranthaTypes.map((gt) => (
                    <button
                      key={gt}
                      type="button"
                      onClick={() => setGranthaFilterType(gt)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                        granthaFilterType === gt
                          ? "bg-amber-700 text-white font-bold shadow-2xs"
                          : "bg-amber-50 text-stone-700 hover:bg-amber-100 border border-amber-200/70"
                      }`}
                    >
                      {gt}
                    </button>
                  ))}
                </div>

                {/* Grantha Search Input */}
                <div className="relative min-w-[180px] sm:min-w-[220px]">
                  <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={granthaSearch}
                    onChange={(e) => setGranthaSearch(e.target.value)}
                    placeholder="ग्रंथ या भाष्य खोजें..."
                    className="w-full pl-8 pr-7 py-1 rounded-lg text-xs bg-[#fffaf0] border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                  />
                  {granthaSearch && (
                    <button
                      type="button"
                      onClick={() => setGranthaSearch("")}
                      className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            )}
            
            {displayRelatedGranthas.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 shadow-2xs space-y-2">
                <p className="text-sm font-semibold text-stone-700">चयनित फ़िल्टर के अनुसार कोई ग्रंथ नहीं मिला।</p>
                <button
                  type="button"
                  onClick={() => {
                    setGranthaFilterType("all");
                    setGranthaSearch("");
                  }}
                  className="text-xs text-amber-700 hover:text-amber-900 underline font-bold cursor-pointer"
                >
                  फ़िल्टर रीसेट करें
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayRelatedGranthas.map((g, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      if (g.mantraId) {
                        navigate(`/library/mantra/${g.mantraId}`);
                      } else if (g.slug) {
                        navigate(`/library/${category}/${subject}/${g.slug}`);
                      } else {
                        navigate(`/library/${category}/${subject}/shakala-samhita`);
                      }
                    }}
                    className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-amber-900 uppercase px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200">
                          {g.type}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-800 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <h4 className="font-serif text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors mt-2 leading-snug">
                        {g.name}
                      </h4>
                      <p className="text-xs text-stone-500 font-devanagari mt-1">
                        {g.author ? `रचयिता / परंपरा: ${g.author}` : g.desc || "वैदिक परंपरा"}
                      </p>
                    </div>
                    <div className="mt-3.5 pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
                      <span>ग्रंथ का अध्ययन करें (Explore)</span>
                      <span>→</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
