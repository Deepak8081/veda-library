import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams, Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Home,
  CheckCircle2,
  Layers,
  Search,
  HelpCircle,
  FileText,
  Filter,
  X
} from "lucide-react";
import { CATEGORIES_DATA } from "../data/categoryTemplatesData.js";
import { VEDA_HIERARCHY_TREE } from "../data/vedaHierarchyTree.js";
import bannerVedasHeritage from "../assets/images/library/banners/banner-vedas-heritage.jpg";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
import bannerFireRitual from "../assets/images/library/banners/banner-fire-ritual.png";
import bannerKashiGhat from "../assets/images/library/banners/banner-kashi-ghat.png";
import bannerSacredDetails from "../assets/images/library/banners/banner-sacred-details.png";
import bannerTempleGhat from "../assets/images/library/banners/banner-temple-ghat.jpg";
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

const CATEGORY_BANNERS = {
  veda: bannerVedasHeritage,
  "mantra-stotra": bannerSanctum,
  "puja-vidhi": bannerFireRitual,
  "yagya-sanskar": bannerFireRitual,
  jyotisha: bannerSacredDetails,
  vedanga: bannerSanctum,
  upanishad: bannerKashiGhat,
  darshana: bannerSanctum,
  dharma: bannerTempleGhat,
  samskara: bannerFireRitual,
  devata: bannerSanctum
};

export default function CategoryLandingPage({ onOpenSearch }) {
  const { category = "veda" } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("All");
  const [vedaHierarchyPath, setVedaHierarchyPath] = useState(() => {
    const vedaParam = searchParams.get("veda") || searchParams.get("sub");
    if (category === "veda" && vedaParam) {
      const match = VEDA_HIERARCHY_TREE.children.find(
        (c) => c.id === vedaParam || c.slug === vedaParam
      );
      if (match) return [match.id];
    }
    return [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  useEffect(() => {
    const vedaParam = searchParams.get("veda") || searchParams.get("sub");
    if (category === "veda" && vedaParam) {
      const match = VEDA_HIERARCHY_TREE.children.find(
        (c) => c.id === vedaParam || c.slug === vedaParam
      );
      if (match) {
        setVedaHierarchyPath([match.id]);
        return;
      }
    }
    setVedaHierarchyPath([]);
    setSearchQuery("");
    setFilterType("all");
  }, [category, searchParams]);

  const catData = CATEGORIES_DATA[category] || CATEGORIES_DATA["veda"];

  // Resolve current active hierarchical node for Category === "veda"
  let currentHierarchyNode = VEDA_HIERARCHY_TREE;
  const hierarchyNodesPath = [];

  if (category === "veda" && vedaHierarchyPath.length > 0) {
    for (const pathId of vedaHierarchyPath) {
      if (currentHierarchyNode && currentHierarchyNode.children) {
        const nextNode = currentHierarchyNode.children.find(
          (child) => child.id === pathId || child.slug === pathId
        );
        if (nextNode) {
          hierarchyNodesPath.push(nextNode);
          currentHierarchyNode = nextNode;
        }
      }
    }
  }

  const isVedaDrilled = category === "veda" && vedaHierarchyPath.length > 0;
  const rawCards = isVedaDrilled
    ? (currentHierarchyNode?.children || [])
    : (catData.subCategories || VEDA_HIERARCHY_TREE.children);

  // Derive unique filter categories from available cards
  const availableTypes = Array.from(
    new Set(
      rawCards
        .map((c) => {
          if (c.badge) return c.badge;
          if (c.name.includes("संहिता") || (c.enName && c.enName.includes("Samhita"))) return "संहिता";
          if (c.name.includes("ब्राह्मण") || (c.enName && c.enName.includes("Brahmana"))) return "ब्राह्मण";
          if (c.name.includes("आरण्यक") || (c.enName && c.enName.includes("Aranyaka"))) return "आरण्यक";
          if (c.name.includes("उपनिषद") || (c.enName && c.enName.includes("Upanishad"))) return "उपनिषद";
          if (c.name.includes("सूत्र") || c.name.includes("प्रातिशाख्य")) return "सूत्र व वेदांग";
          if (c.name.includes("सूक्त")) return "सूक्त";
          if (c.priest) return "वेद";
          return null;
        })
        .filter(Boolean)
    )
  );

  const displayCards = rawCards.filter((card) => {
    if (filterType !== "all") {
      const b = (card.badge || "").toLowerCase();
      const n = (card.name || "").toLowerCase();
      const d = (card.desc || "").toLowerCase();
      const ft = filterType.toLowerCase();
      const matchesType = b.includes(ft) || n.includes(ft) || d.includes(ft);
      if (!matchesType) return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        (card.name && card.name.toLowerCase().includes(q)) ||
        (card.enName && card.enName.toLowerCase().includes(q)) ||
        (card.desc && card.desc.toLowerCase().includes(q)) ||
        (card.stats && card.stats.toLowerCase().includes(q)) ||
        (card.priest && card.priest.toLowerCase().includes(q)) ||
        (card.badge && card.badge.toLowerCase().includes(q));
      if (!matchesQuery) return false;
    }
    return true;
  });

  const handleCardClick = (card) => {
    if (category === "veda") {
      if (card.mantraId) {
        navigate(`/library/mantra/${card.mantraId}`);
      } else if (card.children && card.children.length > 0) {
        setVedaHierarchyPath((prev) => [...prev, card.id]);
        const sectionEl = document.getElementById("sub-categories");
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Leaf item: Navigate to subject detail reader or subject page
        const targetSlug =
          card.slug ||
          (hierarchyNodesPath[0] && hierarchyNodesPath[0].slug) ||
          card.id;
        navigate(`/library/${category}/${targetSlug}`);
      }
    } else {
      navigate(`/library/${category}/${card.slug}`);
    }
  };

  return (
    <div className="bg-[#fffaf0] min-h-screen">
      {/* 2. Breadcrumb (Matching Page 2 of Spec) */}
      <div className="bg-white border-b border-amber-200/70 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-medium text-stone-500">
          <Link to="/" className="hover:text-amber-800 transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>›</span>
          <Link to="/library" className="hover:text-amber-800 transition-colors">
            Veda Library
          </Link>
          <span>›</span>
          <span className="text-amber-900 font-bold">{catData.name} ({catData.enName})</span>
          {isVedaDrilled && hierarchyNodesPath.map((node) => (
            <React.Fragment key={node.id}>
              <span>›</span>
              <span className="text-stone-700 font-medium">{node.name}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 3. Category Hero (Matching Page 2 Section 3) */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#170e07] via-[#2c1a0e] to-[#140b05] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/60 shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src={CATEGORY_BANNERS[category] || bannerVedasHeritage}
            alt={catData.name}
            className="w-full h-full object-cover object-center opacity-40 scale-102 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#140b05] via-[#1c1108]/75 to-[#140b05]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-[#140b05]/85" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{catData.eyebrow}</span>
          </span>
          
          <div className="space-y-1">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
              {catData.name}
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-amber-200/95 font-medium tracking-wide">
              {catData.enName}
            </p>
          </div>
          
          <p className="text-xs sm:text-base text-amber-100/90 font-devanagari max-w-3xl mx-auto leading-relaxed drop-shadow-xs">
            {catData.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="#sub-categories"
              className="px-7 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-950/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer border border-amber-400/30"
            >
              <span>{catData.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#featured"
              className="px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold text-xs sm:text-sm backdrop-blur-md transition-all cursor-pointer shadow-md"
            >
              <span>{catData.secondaryCta}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. Category Quick Info Strip (Matching Page 2 Section 4) */}
      <div className="bg-amber-50/60 border-b border-amber-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-serif font-bold text-stone-900">
            <span className="w-2 h-2 rounded-full bg-amber-600" />
            <span>{catData.quickStats}</span>
          </div>
          <div className="text-stone-600 font-medium text-[11px] sm:text-xs">
            <strong className="text-stone-800">Explore by:</strong> {catData.exploreBy}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* 5. Introduction — वेद क्या हैं? (Section 5) */}
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-3">
            {catData.introHeading}
          </h2>
          <p className="text-sm text-stone-700 font-devanagari leading-relaxed">
            {catData.introText}
          </p>
        </section>

        {/* 6. Main Sub-Categories / Four Vedas Cards (Section 6) */}
        <section id="sub-categories" className="scroll-mt-24">
          {/* Breadcrumb & Back navigation when drilled into Veda hierarchy */}
          {isVedaDrilled && (
            <div className="mb-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setVedaHierarchyPath((prev) => prev.slice(0, -1))}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-amber-100/80 text-amber-900 font-bold text-xs border border-amber-300 shadow-2xs transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>पीछे जाएं (Back)</span>
                </button>

                <span className="text-stone-300">|</span>

                <button
                  type="button"
                  onClick={() => setVedaHierarchyPath([])}
                  className="font-bold text-amber-800 hover:text-amber-950 hover:underline cursor-pointer"
                >
                  चारों वेद (All 4 Vedas)
                </button>

                {hierarchyNodesPath.map((node, index) => {
                  const isLast = index === hierarchyNodesPath.length - 1;
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
                          onClick={() => setVedaHierarchyPath(vedaHierarchyPath.slice(0, index + 1))}
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
                  स्तर {vedaHierarchyPath.length + 1} • {displayCards.length} उपलब्ध
                </span>
                <button
                  type="button"
                  onClick={() => setVedaHierarchyPath([])}
                  className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer"
                >
                  रीसेट करें (Reset)
                </button>
              </div>
            </div>
          )}

          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                {isVedaDrilled
                  ? currentHierarchyNode.name
                  : `${catData.name} के प्रमुख उप-विभाग एवं शाखाएँ`}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-devanagari mt-1">
                {isVedaDrilled
                  ? `${currentHierarchyNode.enName || ""} — नीचे दिए गए उप-विभागों, शाखाओं व ग्रंथों में से चुनें।`
                  : "अपनी रुचि के अनुसार किसी भी शाखा या विषय से शुरुआत करें।"}
              </p>
            </div>

            {/* Quick Result Counter */}
            <div className="text-xs font-semibold text-stone-500 bg-amber-50/90 border border-amber-200/80 px-3 py-1.5 rounded-xl shrink-0 self-start md:self-auto">
              <span className="text-amber-900 font-bold">{displayCards.length}</span> / {rawCards.length} उपलब्ध
            </div>
          </div>

          {/* Dedicated Search & Filter Bar */}
          {rawCards.length > 1 && (
            <div className="mb-6 p-3 sm:p-4 rounded-2xl bg-white border border-stone-200/90 shadow-2xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
              {/* Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none text-xs">
                <span className="text-stone-400 mr-1 flex items-center gap-1 text-[11px] font-semibold shrink-0">
                  <Filter className="w-3.5 h-3.5 text-amber-700" />
                  <span>फ़िल्टर:</span>
                </span>
                <button
                  type="button"
                  onClick={() => setFilterType("all")}
                  className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                    filterType === "all"
                      ? "bg-amber-700 text-white font-bold shadow-2xs"
                      : "bg-amber-50/80 text-stone-700 hover:bg-amber-100 border border-amber-200/60"
                  }`}
                >
                  सभी ({rawCards.length})
                </button>
                {availableTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setFilterType(t)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors cursor-pointer whitespace-nowrap ${
                      filterType === t
                        ? "bg-amber-700 text-white font-bold shadow-2xs"
                        : "bg-amber-50/80 text-stone-700 hover:bg-amber-100 border border-amber-200/60"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[220px] sm:min-w-[280px]">
                <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="शाखा, ग्रंथ या विषय खोजें..."
                  className="w-full pl-8 pr-7 py-1.5 rounded-xl text-xs bg-[#fffaf0] border border-stone-200 focus:border-amber-400 focus:outline-none placeholder:text-stone-400 font-devanagari"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="p-1 text-stone-400 hover:text-stone-700 absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Empty State when no results match */}
          {displayCards.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 shadow-2xs space-y-3">
              <p className="font-serif text-lg font-bold text-stone-800">
                चयनित फ़िल्टर अथवा खोज के अनुसार कोई उप-विभाग नहीं मिला।
              </p>
              <p className="text-xs text-stone-500 font-devanagari">
                कृपया फ़िल्टर रीसेट करें या भिन्न कीवर्ड टाइप करें।
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilterType("all");
                  setSearchQuery("");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-xs hover:bg-amber-700 cursor-pointer"
              >
                फ़िल्टर रीसेट करें (Reset Filter)
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayCards.map((sub, idx) => {
              const imgSrc = resolveCardImage(sub.imageKey, sub.name, sub.badge);
              const hasChildren = sub.children && sub.children.length > 0;

              return (
                <div
                  key={sub.id || idx}
                  onClick={() => handleCardClick(sub)}
                  className="group flex flex-col bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="relative aspect-16/9 overflow-hidden bg-stone-900">
                    <img
                      src={imgSrc}
                      alt={sub.name}
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    {sub.priest && (
                      <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white bg-black/50 px-2 py-0.5 rounded backdrop-blur-xs">
                        {sub.priest}
                      </span>
                    )}
                    {hasChildren && (
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full shadow-xs backdrop-blur-xs flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        <span>{sub.children.length} शाखाएँ / भाग</span>
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                          {sub.name}
                        </h3>
                        {sub.enName && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 shrink-0 max-w-[120px] truncate text-right">
                            {sub.enName}
                          </span>
                        )}
                      </div>
                      {sub.desc && (
                        <p className="text-xs text-stone-600 font-devanagari mt-2 line-clamp-2 leading-relaxed">
                          {sub.desc}
                        </p>
                      )}
                      {sub.stats && (
                        <p className="text-[10px] text-stone-400 mt-2 font-medium">
                          {sub.stats}
                        </p>
                      )}
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
                      <span>
                        {hasChildren
                          ? `शाखाएँ एवं ग्रंथ देखें (${sub.children.length})`
                          : sub.enName
                          ? `Explore ${sub.enName}`
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

        {/* 7. Category Structure (Section 7) */}
        {catData.structureHierarchy && (
          <section className="bg-[#fffdf8] p-6 sm:p-8 rounded-3xl border border-amber-200/90 shadow-2xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                HIERARCHY & STRUCTURE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                {catData.name} की संरचना को समझें
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 font-devanagari mt-1">
                वैदिक सामग्री को उसके मूल संरचनात्मक स्तरों के अनुसार explore करें।
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
              {catData.structureHierarchy.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-stone-200 text-center shadow-2xs flex flex-col justify-between"
                >
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold flex items-center justify-center mx-auto mb-1">
                    {idx + 1}
                  </span>
                  <p className="text-xs font-serif font-bold text-stone-900">{item.level}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{item.en}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 8. Explore by Topic (Section 8) */}
        <section className="text-center">
          <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2">
            वेदों में विषय खोजें
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-devanagari mb-5">
            यदि आपको किसी विशेष वेद का नाम नहीं पता, तो अपने विषय से शुरुआत करें।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {catData.topics.map((t) => (
              <span
                key={t}
                className="px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs font-semibold text-stone-800 hover:border-amber-400 hover:bg-amber-50 cursor-pointer transition-colors"
              >
                #{t}
              </span>
            ))}
          </div>
        </section>

        {/* 9. Featured Knowledge Cards (Section 9) */}
        <section id="featured">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Featured Knowledge
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 font-devanagari mt-0.5">
                {catData.name} से जुड़े प्रमुख लेख, मंत्र और विषय।
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {catData.featuredKnowledge.map((feat) => (
              <div
                key={feat.id}
                onClick={() =>
                  navigate(
                    `/library/${category}/${feat.subjectSlug}/${feat.articleSlug}`
                  )
                }
                className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-amber-400 transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                    {feat.type}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-stone-900 mt-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-devanagari mt-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-2.5 border-t border-stone-100 text-xs font-bold text-amber-700 flex items-center justify-between">
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 17. Category FAQ (Section 17) */}
        {catData.faqs && (
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-600" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-4">
              {catData.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-50/40 border border-amber-100">
                  <h3 className="text-sm font-bold text-stone-900 mb-1">{faq.q}</h3>
                  <p className="text-xs text-stone-600 font-devanagari leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 18. Final CTA (Section 18) */}
        <section className="py-12 rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white text-center p-6 shadow-md">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2">
            Explore {catData.name} ({catData.enName})
          </h2>
          <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto mb-6">
            किसी वेद, मंत्र, सूक्त, ऋषि, देवता या विषय से अपनी यात्रा शुरू करें।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate(`/library/${category}/${catData.subCategories[0]?.slug || ""}`)}
              className="px-6 py-2.5 rounded-full bg-white text-amber-950 font-bold text-xs shadow-sm hover:bg-amber-50 cursor-pointer"
            >
              Explore Sub-Categories →
            </button>
            <button
              onClick={onOpenSearch}
              className="px-6 py-2.5 rounded-full bg-black/30 border border-white/30 text-white font-semibold text-xs hover:bg-black/50 cursor-pointer"
            >
              Search Library ⌘K
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
