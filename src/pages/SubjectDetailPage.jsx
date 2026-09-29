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
  Sun
} from "lucide-react";
import { SUBJECTS_DATA, CATEGORIES_DATA } from "../data/categoryTemplatesData.js";
import { VEDA_HIERARCHY_TREE } from "../data/vedaHierarchyTree.js";
import bannerSanctum from "../assets/images/library/banners/banner-sanctum.png";
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

export default function SubjectDetailPage({ onOpenSearch }) {
  const { category = "veda", subject = "rigveda" } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Overview");
  const [drillPath, setDrillPath] = useState([]);

  useEffect(() => {
    setDrillPath([]);
  }, [category, subject]);

  const key = `${category}/${subject}`;
  const subjectData = SUBJECTS_DATA[key] || SUBJECTS_DATA["veda/rigveda"];
  const catData = CATEGORIES_DATA[category] || CATEGORIES_DATA["veda"];

  // Find Veda root node in hierarchy tree
  const currentVedaNode =
    category === "veda"
      ? VEDA_HIERARCHY_TREE.children.find(
          (v) => v.id === subject || v.slug === subject
        ) || VEDA_HIERARCHY_TREE.children[0]
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

  const displayBranchCards = activeNode?.children || [];

  const handleBranchCardClick = (branch) => {
    if (branch.children && branch.children.length > 0) {
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
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1c120a] via-[#2a1a10] to-[#170e08] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40">
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <img
            src={bannerSanctum}
            alt={subjectData.name}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/15 border border-amber-400/30 px-3 py-1 rounded-full mb-3">
            {subjectData.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-1">
            {subjectData.name}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-amber-200/90 font-medium mb-3">
            {subjectData.enName}
          </p>
          <p className="text-xs sm:text-sm text-amber-100/80 font-devanagari max-w-2xl mx-auto leading-relaxed mb-6">
            {subjectData.intro}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#structure"
              className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Explore Types & Branches →</span>
            </a>
            <a
              href="#articles"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs backdrop-blur-xs transition-all cursor-pointer"
            >
              <span>Explore Articles →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Subject Quick Info Bar (Matching Page 3 Section 4) */}
      <div className="bg-amber-50/60 border-b border-amber-200/80 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">TYPE</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo.type}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">LANGUAGE</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo.language}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">CHIEF PRIEST</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo.chiefPriest}</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">STRUCTURE</span>
            <span className="font-semibold text-stone-900">{subjectData.quickInfo.mandalCount} • {subjectData.quickInfo.suktaCount}</span>
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

            {/* Hierarchical Branch Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {displayBranchCards.map((branch, idx) => {
                const imgSrc =
                  CARD_IMAGES[branch.imageKey] ||
                  CARD_IMAGES[currentVedaNode.imageKey] ||
                  rigvedaImg;
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
                      {hasChildren && (
                        <span className="absolute top-2.5 right-2.5 text-[10px] font-bold text-amber-900 bg-amber-100/90 border border-amber-300 px-2 py-0.5 rounded-full shadow-xs backdrop-blur-xs flex items-center gap-1">
                          <Layers className="w-3 h-3" />
                          <span>{branch.children.length} उप-प्रकार / शाखाएँ</span>
                        </span>
                      )}
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
                          <p className="text-[10px] text-stone-400 mt-2 font-medium">
                            {branch.stats}
                          </p>
                        )}
                      </div>

                      <div className="mt-4 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-amber-700 group-hover:text-amber-900">
                        <span>
                          {hasChildren
                            ? `इसके उप-प्रकार देखें (${branch.children.length})`
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
        {subjectData.availableTexts && (
          <section id="browse-texts">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Browse {subjectData.enName} Texts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjectData.availableTexts.map((text, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/library/${category}/${subject}/agnisukta`)}
                  className="p-4 rounded-xl bg-white border border-stone-200/90 hover:border-amber-400 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-serif text-base font-bold text-stone-900">{text.title}</h4>
                    <p className="text-xs text-stone-500 font-devanagari mt-0.5">{text.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-700 flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>
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
        {subjectData.relatedGranthas && (
          <section id="related-grantha" className="bg-[#fffdf8] p-6 rounded-3xl border border-amber-200/90 shadow-2xs">
            <h2 className="font-serif text-2xl font-bold text-stone-900 mb-4">
              Related Grantha & Commentaries
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {subjectData.relatedGranthas.map((g, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200">
                  <span className="text-[10px] font-bold text-amber-800 uppercase px-2 py-0.5 rounded bg-amber-50">
                    {g.type}
                  </span>
                  <h4 className="font-serif text-base font-bold text-stone-900 mt-1">{g.name}</h4>
                  <p className="text-[11px] text-stone-500 font-devanagari mt-0.5">रचयिता: {g.author}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
