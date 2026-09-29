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
  FileText
} from "lucide-react";
import { CATEGORIES_DATA } from "../data/categoryTemplatesData.js";
import { VEDA_HIERARCHY_TREE } from "../data/vedaHierarchyTree.js";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
import bannerTempleGhat from "../assets/images/library/banners/banner-temple-ghat.jpg";
import rigvedaImg from "../assets/images/library/cards/card-rigveda.jpg";
import yajurvedaImg from "../assets/images/library/cards/card-yajurveda.jpg";
import samavedaImg from "../assets/images/library/cards/card-samaveda.jpg";
import atharvavedaImg from "../assets/images/library/cards/card-atharvaveda.jpg";
import cardPujaImg from "../assets/images/library/cards/card-puja.jpg";
import cardYagyaImg from "../assets/images/library/cards/card-yagya-fire.jpg";

const CARD_IMAGES = {
  "card-rigveda.jpg": rigvedaImg,
  "card-yajurveda.jpg": yajurvedaImg,
  "card-samaveda.jpg": samavedaImg,
  "card-atharvaveda.jpg": atharvavedaImg,
  "card-puja.jpg": cardPujaImg,
  "card-yagya-fire.jpg": cardYagyaImg
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
  const displayCards = isVedaDrilled
    ? (currentHierarchyNode?.children || [])
    : (catData.subCategories || VEDA_HIERARCHY_TREE.children);

  const handleCardClick = (card) => {
    if (category === "veda") {
      if (card.children && card.children.length > 0) {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1c120a] via-[#2a1a10] to-[#170e08] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <img
            src={bannerSanctum}
            alt={catData.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/15 border border-amber-400/30 px-3 py-1 rounded-full mb-3">
            {catData.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-1">
            {catData.name}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-amber-200/90 font-medium mb-3">
            {catData.enName}
          </p>
          <p className="text-xs sm:text-sm text-amber-100/80 font-devanagari max-w-3xl mx-auto leading-relaxed mb-6">
            {catData.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#sub-categories"
              className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{catData.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#featured"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs sm:text-sm backdrop-blur-xs transition-all cursor-pointer"
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

          <div className="mb-6">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayCards.map((sub, idx) => {
              const imgSrc =
                CARD_IMAGES[sub.imageKey] ||
                CARD_IMAGES[currentHierarchyNode?.imageKey] ||
                rigvedaImg;
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
