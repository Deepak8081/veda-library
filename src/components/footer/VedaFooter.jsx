import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUp,
  Search,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Scroll,
} from "lucide-react";

export default function VedaFooter({ onOpenSearch }) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (path, e) => {
    if (e) e.preventDefault();
    if (path) navigate(path);
    scrollToTop();
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#140b06] via-[#1a0f08] to-[#0d0704] text-stone-300 pt-0 pb-10 border-t-2 border-amber-600/80 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Top Sacred Vedic Shanti Mantra Ribbon */}
      <div className="border-b border-amber-900/50 bg-[#1f120a]/80 py-3.5 px-4 sm:px-6 lg:px-8 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <p className="font-devanagari text-xs sm:text-sm font-semibold text-amber-200/90 tracking-wide">
              ॐ द्यौः शान्तिरन्तरिक्षं शान्तिः पृथिवी शान्तिरापः शान्तिरोषधयः शान्तिः वनस्पतयः शान्तिः ॥
            </p>
          </div>
          <span className="font-devanagari text-xs font-bold text-amber-400/90 px-3 py-0.5 rounded-full bg-amber-950/70 border border-amber-600/40">
            यजुर्वेद ३६.१७ • ॐ शान्तिः शान्तिः शान्तिः
          </span>
        </div>
      </div>

      {/* 2. Main 4-Column Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-stone-800/80">

          {/* Column 1: Brand Heritage & Purpose (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Logo Emblem */}
            <Link
              to="/library"
              onClick={(e) => handleLinkClick("/library", e)}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer inline-flex"
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 ring-2 ring-amber-300/40 group-hover:scale-105 transition-all">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    className="w-6 h-6 text-amber-50"
                  >
                    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    <path d="M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
                  </svg>
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#18110b] border border-amber-400/70 flex items-center justify-center text-[9px] font-bold text-amber-400 shadow-xs">
                  ॐ
                </span>
              </div>

              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.14em] text-white group-hover:text-amber-300 transition-colors leading-none block">
                  VEDA LIBRARY
                </span>
                <span className="block text-[10px] tracking-[0.08em] uppercase font-semibold text-amber-400/90 mt-1 leading-tight">
                  Vedic & Traditional Knowledge Archive
                </span>
              </div>
            </Link>

            <p className="text-xs font-devanagari text-stone-400 leading-relaxed max-w-sm">
              भारतीय वैदिक एवं शास्त्रीय ज्ञान का डिजिटल संग्रह।
            </p>

            {/* Trust Badges */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>100% Source-Verified Sanskrit Corpus</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Text-First Canonical Structure & Pada-Patha</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-amber-200/90">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Open Digital Heritage for Practitioners & Scholars</span>
              </div>
            </div>

            {/* Quick Search Trigger */}
            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                className="mt-3 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#24150b] border border-amber-600/40 hover:border-amber-400 text-stone-300 hover:text-white transition-all text-xs font-medium cursor-pointer shadow-xs group"
              >
                <Search className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>Quick Search Library</span>
                <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/50 text-amber-300 border border-amber-500/30">
                  ⌘K
                </kbd>
              </button>
            )}
          </div>

          {/* Column 2: Explore — 8 Doc-Specified Categories (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-amber-900/60 pb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-amber-500" />
              <span>Explore (ज्ञान शाखाएँ)</span>
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { label: "वेद (The Vedas)", path: "/library/veda" },
                { label: "वेदाङ्ग (Vedangas)", path: "/library/vedanga" },
                { label: "उपनिषद एवं दर्शन", path: "/library/upanishad" },
                { label: "पुराण एवं इतिहास", path: "/library/purana-itihasa" },
                { label: "मंत्र, सूक्त एवं स्तोत्र", path: "/library/mantra-stotra" },
                { label: "ज्योतिष (Jyotisha)", path: "/library/jyotisha" },
                { label: "वास्तु (Vastu Shastra)", path: "/library/vastu" },
                { label: "शास्त्र (Classical Shastras)", path: "/library/shastra" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className="hover:text-amber-300 hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-stone-300"
                  >
                    <span className="text-amber-500/70 text-[10px]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-amber-900/60 pb-2 flex items-center gap-1.5">
              <Scroll className="w-3.5 h-3.5 text-amber-500" />
              <span>Resources (संसाधन)</span>
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { label: "Grantha (ग्रंथ संग्रह)", path: "/library/collections" },
                { label: "Articles & Blogs (लेख व शोध)", path: "/library/articles" },
                { label: "Topics (विषय सूची)", path: "/library/knowledge" },
                { label: "Glossary (शब्दकोश)", path: "/library/knowledge" },
                { label: "Research (शोध)", path: "/library/knowledge" },
                { label: "References (संदर्भ)", path: "/library/knowledge" },
                { label: "Manuscripts & Rare Texts", path: "/library/knowledge" },
                { label: "Knowledge Connection Graph", path: "/library/knowledge" }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    onClick={(e) => handleLinkClick(link.path, e)}
                    className="hover:text-amber-300 hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-stone-300"
                  >
                    <span className="text-amber-500/70 text-[10px]">›</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Veda Structure (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-400 border-b border-amber-900/60 pb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Veda Structure</span>
            </h3>
            <ul className="space-y-2 text-xs font-medium text-stone-400">
              {[
                { label: "About Veda Structure", path: "/library" },
                { label: "Contact", path: "/library" },
                { label: "Privacy Policy", path: "/library" },
                { label: "Terms", path: "/library" },
                { label: "Our Principles & Methodology", path: "/library" },
                { label: "Library Growth Roadmap", path: "/library" },
                { label: "Newsletter Updates", path: "/library" }
              ].map((link, idx) => (
                <li
                  key={idx}
                  onClick={() => { navigate(link.path); scrollToTop(); }}
                  className="hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-amber-500/70 text-[10px]">›</span>
                  <span>{link.label}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3">
              <span className="inline-block text-[11px] font-semibold px-3 py-1 rounded-full bg-amber-950/80 border border-amber-600/50 text-amber-300 font-devanagari">
                धर्मो रक्षति रक्षितः
              </span>
            </div>
          </div>
        </div>

        {/* 3. Scholarly Trust Ribbon Strip */}
        <div className="py-6 border-b border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0" />
            <span><strong>Text-First:</strong> शुद्ध मूल पाठ एवं स्वर</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
            <span><strong>Source-Based:</strong> ग्रंथ व श्लोक प्रमाण</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 flex-shrink-0" />
            <span><strong>Non-Sectarian:</strong> सर्वसमावेशी निष्पक्ष शोध</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0" />
            <span><strong>Living Heritage:</strong> सनातन ज्ञान परंपरा</span>
          </div>
        </div>

        {/* 4. Bottom Copyright & Blessing Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-stone-400 font-medium">
              © 2026 Veda Library • Veda Structure Project. All Rights Reserved.
            </p>
            <p className="text-[11px] text-stone-500">
              Preserving and digitizing traditional knowledge for practitioners, researchers & humanity worldwide.
            </p>
          </div>

          <div className="text-center font-devanagari text-xs text-amber-300/80 font-semibold px-4 py-1.5 rounded-full bg-[#20120a] border border-amber-900/60">
            सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः • ॐ तत् सत्
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#24150b] hover:bg-amber-950/80 text-amber-300 hover:text-white border border-amber-600/40 hover:border-amber-400 transition-all cursor-pointer shadow-xs group"
          >
            <span className="font-semibold text-xs">Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
