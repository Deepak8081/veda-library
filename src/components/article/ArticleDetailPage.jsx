import React, { useState } from "react";
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
  ExternalLink
} from "lucide-react";
import { ARTICLES_DATA, CATEGORIES_DATA, SUBJECTS_DATA } from "../../data/categoryTemplatesData.js";
import { findNodeById } from "../../data/vedaHierarchyTree.js";
import cardPujaImg from "../../assets/images/library/cards/card-puja.jpg";
import cardRigvedaImg from "../../assets/images/library/cards/card-rigveda.jpg";
import cardYajurvedaImg from "../../assets/images/library/cards/card-yajurveda.jpg";
import cardSamavedaImg from "../../assets/images/library/cards/card-samaveda.jpg";
import cardAtharvavedaImg from "../../assets/images/library/cards/card-atharvaveda.jpg";
import fireRitualImg from "../../assets/images/library/banners/banner-fire-ritual.png";

const CARD_IMAGES = {
  "card-rigveda.jpg": cardRigvedaImg,
  "card-yajurveda.jpg": cardYajurvedaImg,
  "card-samaveda.jpg": cardSamavedaImg,
  "card-atharvaveda.jpg": cardAtharvavedaImg,
  "card-puja.jpg": cardPujaImg
};

export default function ArticleDetailPage({ onNavigateHome, onNavigateKnowledge }) {
  const { category = "puja", subject = "shaiva", article = "rudrabhisheka" } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("content-1");
  const [saved, setSaved] = useState(false);

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
        vedaAncestor?.enName || "Shruti",
        foundNode.stats || "Grantha"
      ],
      intro: foundNode.desc,
      shastricBase: `${vedaAncestor?.name || "वेद"} — ${foundNode.name}। प्रामाणिक वैदिक परंपरा, ऋषि परंपरा एवं शाखा पाठ।`,
      sourceMeta: {
        grantha: vedaAncestor ? `${vedaAncestor.name} (${vedaAncestor.enName})` : (subjectData?.name || "वैदिक संहिता"),
        shakha: branchAncestors.length > 0 ? branchAncestors.map((b) => b.name).join(" › ") : (foundNode.name),
        kanda: foundNode.stats || "शास्त्रीय विभाजन",
        anuvaka: "मूल वैदिक पाठ",
        rishi: vedaAncestor?.priest ? `ऋत्विक: ${vedaAncestor.priest}` : "वैदिक ऋषि परंपरा",
        devata: "परम ब्रह्म / वैदिक देवता"
      },
      primaryMantra: {
        sanskrit:
          foundNode.id.includes("rigveda") || foundNode.id.includes("aitareya") || subject === "rigveda"
            ? "ॐ अग्निमीळे पुरोहितं यज्ञस्य देवमृत्विजम्।\nहोतारं रत्नधातमम्॥"
            : foundNode.id.includes("yajurveda") || foundNode.id.includes("taittiriya") || subject === "yajurveda"
            ? "ॐ इषे त्वोर्जे त्वा वायव स्थ देवो वः सविता प्रार्पयतु श्रेष्ठतमाय कर्मणे॥"
            : foundNode.id.includes("samaveda") || subject === "samaveda"
            ? "ॐ अग्न आयाहि वीतये गृणानो हव्यदातये। नि होता सत्सि बर्हिषि॥"
            : "ॐ शं नो देवीरभिष्टये आपो भवन्तु पीतये। शं योरभि स्रवन्तु नः॥",
        ref: `${foundNode.name} — प्रथम शांति पाठ / मंगलाचरण`,
        translation: "वैदिक ऋचाओं का पावन मंगलाचरण एवं सर्वकल्याणकारी प्रार्थना।"
      },
      relatedArticles: foundNode.children
        ? foundNode.children.map((c) => ({
            title: c.enName || c.name,
            tag: c.stats || "Vedic Text",
            slug: c.id
          }))
        : branchAncestors.length > 0 && branchAncestors[branchAncestors.length - 1].children
        ? branchAncestors[branchAncestors.length - 1].children
            .filter((c) => c.id !== foundNode.id)
            .slice(0, 4)
            .map((c) => ({
              title: c.enName || c.name,
              tag: c.stats || "Vedic Text",
              slug: c.id
            }))
        : [
            { title: "Purusha Sukta", tag: "Sukta • Rigveda", slug: "purusha-sukta" },
            { title: "Gayatri Mantra", tag: "Mantra • Rigveda", slug: "gayatri-mantra" }
          ],
      relatedGrantha: {
        name: vedaAncestor ? `${vedaAncestor.name} (${vedaAncestor.enName})` : (subjectData?.name || "Veda"),
        desc: foundNode.desc
      },
      relatedTopics: [
        vedaAncestor?.name || "वेद",
        "मंत्र",
        "संहिता",
        "ब्राह्मण",
        "उपनिषद"
      ]
    };
  } else if (!articleData) {
    articleData = {
      title: subjectData?.enName || article,
      hindiTitle: subjectData?.name || article,
      contentType: "VEDA & GRANTHA",
      tags: ["Veda", catData.name || "Library"],
      intro: subjectData?.intro || "वैदिक वांग्मय एवं ग्रंथों का प्रामाणिक अध्ययन।",
      shastricBase: "वैदिक संहिता, ब्राह्मण, आरण्यक एवं उपनिषद परंपरा।",
      sourceMeta: {
        grantha: catData.name,
        shakha: subjectData?.name || "प्रामाणिक शाखा",
        kanda: "समग्र वैदिक पाठ",
        anuvaka: "सूक्त एवं मंत्र",
        rishi: "वैदिक ऋषि परंपरा",
        devata: "परम ब्रह्म"
      },
      primaryMantra: {
        sanskrit: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥",
        ref: "ऋग्वेद ३.६२.१० / यजुर्वेद ३६.३ — गायत्री महामंत्र",
        translation: "हम उस सृष्टिकर्ता परम प्रकाशमान परमात्मा के तेज का ध्यान करते हैं, जो हमारी बुद्धियों को सन्मार्ग पर प्रेरित करे।"
      },
      relatedArticles: [
        { title: "Purusha Sukta", tag: "Sukta", slug: "purusha-sukta" },
        { title: "Gayatri Mantra", tag: "Mantra", slug: "gayatri-mantra" }
      ],
      relatedGrantha: { name: catData.name, desc: catData.enName },
      relatedTopics: ["Veda", "Mantra", "Upasana"]
    };
  }

  const contentsList = [
    { id: "content-1", title: "1. विषय परिचय (Introduction)" },
    { id: "content-2", title: "2. शब्द का अर्थ एवं व्युत्पत्ति" },
    { id: "content-3", title: "3. शास्त्रीय आधार (Shastric Basis)" },
    { id: "content-4", title: "4. मूल स्रोत (Source Metadata)" },
    { id: "content-5", title: "5. संबंधित मंत्र / श्लोक" },
    { id: "content-6", title: "6. संबंधित देव / प्रतीक" },
    { id: "content-7", title: "7. परंपरा एवं स्थान" },
    { id: "content-8", title: "8. विधि / प्रयोग" },
    { id: "content-9", title: "9. विभिन्न परंपराओं में अंतर" },
    { id: "content-10", title: "10. इतिहास एवं शोध" }
  ];

  const heroImage =
    CARD_IMAGES[foundNode?.imageKey] ||
    (category === "veda" && (subject === "rigveda" || article?.includes("rigveda") || article?.includes("aitareya"))
      ? cardRigvedaImg
      : category === "veda" && (subject === "yajurveda" || article?.includes("yajurveda") || article?.includes("taittiriya") || article?.includes("madhyandina") || article?.includes("kanva"))
      ? cardYajurvedaImg
      : category === "veda" && (subject === "samaveda" || article?.includes("samaveda") || article?.includes("chandogya") || article?.includes("kauthuma"))
      ? cardSamavedaImg
      : category === "veda" && (subject === "atharvaveda" || article?.includes("atharvaveda") || article?.includes("shaunaka") || article?.includes("mundaka"))
      ? cardAtharvavedaImg
      : cardPujaImg);

  return (
    <div className="bg-[#fffaf0] min-h-screen">
      {/* Top Breadcrumb & Article Header */}
      <div className="bg-white border-b border-amber-200/70 py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-medium text-stone-500 mb-3 flex-wrap">
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
              to={`/library/${category}`}
              className="hover:text-amber-800 transition-colors cursor-pointer"
            >
              {catData.name || "Category"}
            </Link>
            {subject && (
              <>
                <span>›</span>
                <Link
                  to={`/library/${category}/${subject}`}
                  className="hover:text-amber-800 transition-colors cursor-pointer"
                >
                  {subjectData ? `${subjectData.name} (${subjectData.enName})` : subject}
                </Link>
              </>
            )}
            {branchAncestors.map((branch) => (
              <React.Fragment key={branch.id}>
                <span>›</span>
                <span className="text-stone-600 font-medium">{branch.name}</span>
              </React.Fragment>
            ))}
            <span>›</span>
            <span className="text-amber-900 font-semibold">
              {articleData.hindiTitle || articleData.title}
            </span>
          </div>

          {/* Title & Status Strip (Matching Client Reference Image Bottom-Left) */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                  {articleData.title}
                </h1>
                <span className="font-devanagari text-xl font-bold text-amber-900">
                  {articleData.hindiTitle}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 mt-2">
                {articleData.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Status Badges (Matching Reference Image) */}
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

      {/* Main 3-Column Content Layout (Matching Client Reference Image Bottom-Left) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Table of Contents (Contents) */}
          <aside className="lg:col-span-3 bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs sticky top-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-2 mb-3">
              Contents (अनुक्रमणिका)
            </h3>
            <nav className="space-y-1">
              {contentsList.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                    activeTab === item.id
                      ? "bg-amber-100/90 text-amber-950 font-bold border-l-4 border-amber-600"
                      : "text-stone-600 hover:bg-amber-50 hover:text-stone-900"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Center Column: Detailed Article Body */}
          <main className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-8">
            {/* Hero Image in Article */}
            <div className="relative aspect-16/9 rounded-2xl overflow-hidden shadow-xs bg-stone-900">
              <img
                src={heroImage}
                alt={articleData.title}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-black/50 px-2.5 py-1 rounded backdrop-blur-xs font-devanagari">
                {articleData.hindiTitle} — मूल शास्त्रीय संदर्भ एवं व्याख्या
              </span>
            </div>

            {/* Section 1: विषय परिचय */}
            <div id="content-1" className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-amber-100 pb-2">
                1. विषय परिचय
              </h2>
              <p className="text-sm text-stone-700 font-devanagari leading-relaxed">
                {articleData.intro}
              </p>
            </div>

            {/* Section 2: शब्द का अर्थ एवं व्युत्पत्ति */}
            <div id="content-2" className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-amber-100 pb-2">
                2. शब्द का अर्थ एवं व्युत्पत्ति
              </h2>
              <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-100 text-xs font-devanagari space-y-2 text-stone-800">
                {articleData.etymology ? (
                  articleData.etymology.map((et, idx) => (
                    <p key={idx}>
                      • <strong>{et.term}:</strong> {et.meaning}
                    </p>
                  ))
                ) : (
                  <>
                    <p>
                      • <strong>मूल धातु:</strong> वैदिक संस्कृत व्याकरण एवं निरुक्त के अनुसार विशिष्ट व्युत्पत्ति।
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Section 3: शास्त्रीय आधार */}
            <div id="content-3" className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-amber-100 pb-2">
                3. शास्त्रीय आधार
              </h2>
              <p className="text-sm text-stone-700 font-devanagari leading-relaxed">
                {articleData.shastricBase || "प्रामाणिक वैदिक संहिताओं, ब्राह्मण ग्रंथों और उपनिषदों में विशद व्याख्या।"}
              </p>
            </div>

            {/* Section 4: मूल स्रोत (Structured Table) */}
            <div id="content-4" className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-amber-100 pb-2">
                4. मूल स्रोत (Source Metadata)
              </h2>
              <div className="border border-stone-200 rounded-xl overflow-hidden">
                <table className="w-full text-xs font-devanagari divide-y divide-stone-200">
                  <tbody className="divide-y divide-stone-100">
                    <tr className="bg-stone-50">
                      <td className="px-3 py-2 font-bold text-stone-700 w-1/3">ग्रंथ</td>
                      <td className="px-3 py-2 text-stone-900 font-semibold">
                        {articleData.sourceMeta?.grantha || "वैदिक संहिता"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold text-stone-700">शाखा</td>
                      <td className="px-3 py-2 text-stone-800">
                        {articleData.sourceMeta?.shakha || "प्रामाणिक शाखा"}
                      </td>
                    </tr>
                    <tr className="bg-stone-50">
                      <td className="px-3 py-2 font-bold text-stone-700">काण्ड / मण्डल</td>
                      <td className="px-3 py-2 text-stone-800">
                        {articleData.sourceMeta?.kanda || "काण्ड / मण्डल संदर्भ"}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-bold text-stone-700">अनुवाक / सूक्त</td>
                      <td className="px-3 py-2 text-stone-800">
                        {articleData.sourceMeta?.anuvaka || "सूक्त संदर्भ"}
                      </td>
                    </tr>
                    <tr className="bg-stone-50">
                      <td className="px-3 py-2 font-bold text-stone-700">ऋषि व देवता</td>
                      <td className="px-3 py-2 text-stone-800">
                        {articleData.sourceMeta?.rishi || "ऋषि परंपरा"} • {articleData.sourceMeta?.devata || "देवता"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 5: संबंधित मंत्र */}
            {articleData.primaryMantra && (
              <div id="content-5" className="space-y-3">
                <h2 className="font-serif text-xl font-bold text-stone-900 border-b border-amber-100 pb-2">
                  5. संबंधित प्रमुख मंत्र
                </h2>
                <div className="p-4 rounded-2xl bg-[#fff8ea] border border-amber-200 text-center space-y-2">
                  <p className="font-devanagari text-base font-bold text-amber-950 leading-relaxed whitespace-pre-line">
                    {articleData.primaryMantra.sanskrit}
                  </p>
                  <p className="text-xs text-stone-500 font-devanagari">
                    — {articleData.primaryMantra.ref}
                  </p>
                  {articleData.primaryMantra.translation && (
                    <p className="text-xs text-stone-700 font-devanagari pt-2 border-t border-amber-200/60 leading-relaxed">
                      <strong>भावार्थ:</strong> {articleData.primaryMantra.translation}
                    </p>
                  )}
                </div>
              </div>
            )}
          </main>

          {/* Right Column: Related Articles & Topics (Matching Reference Image) */}
          <aside className="lg:col-span-3 space-y-6">
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
                    className="p-2.5 rounded-xl border border-stone-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all cursor-pointer group"
                  >
                    <p className="text-xs font-bold text-stone-800 group-hover:text-amber-900">
                      {art.title}
                    </p>
                    <span className="text-[10px] text-stone-400">{art.tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Grantha */}
            {articleData.relatedGrantha && (
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-2">
                  Related Grantha
                </h3>
                <div className="p-3 rounded-xl bg-amber-50/50 border border-amber-200/60">
                  <p className="text-xs font-bold text-stone-900">{articleData.relatedGrantha.name}</p>
                  <p className="text-[11px] text-stone-500 font-devanagari">{articleData.relatedGrantha.desc}</p>
                </div>
              </div>
            )}

            {/* Related Topics Chips */}
            {articleData.relatedTopics && (
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-2">
                  Related Topics
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {articleData.relatedTopics.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 text-stone-700 hover:bg-amber-100 hover:text-amber-900 cursor-pointer transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
