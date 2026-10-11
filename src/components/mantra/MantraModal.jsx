import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Share2,
  ExternalLink,
  BookOpen,
  Sparkles,
  Sun,
  Flame,
  Languages,
  ArrowRight,
  Info
} from "lucide-react";
import { getMantraById } from "../../data/vedicMantrasData.js";
import VedicLibraryService from "../../services/vedicLibraryService.js";

// Clean Vedic svara marks (udatta, anudatta, accents, danda) for clear text-to-speech chanting
function cleanVedicTextForSpeech(text) {
  if (!text) return "";
  return text
    .replace(/[\u0951\u0952\u1CD0-\u1CFF]/g, "") // Vedic tone marks
    .replace(/[॥।]/g, " ") // Verse end markers
    .replace(/ॐ/g, "ओम् ") // Expand sacred Om syllable for smooth pronunciation
    .replace(/[0-9०-९]/g, "") // Remove verse numbers
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * MantraModal:
 * Highly accessible, responsive, user-friendly reading modal for sacred Vedic mantras & shlokas.
 * Features:
 * - Fluid backdrop blur & animated entrance
 * - Dynamic font sizing (A- / A / A+)
 * - Web Speech API authentic Sanskrit pronunciation with active audio indicator
 * - Prominent sacred Devanagari card with saffron border & golden accents
 * - Roman IAST transliteration toggle for easy chanting
 * - Clean Hindi and English translations with view selector
 * - Word-by-word padapatha pill chips (पदच्छेद एवं पदार्थ)
 * - Copy & Share capabilities
 * - Direct portal button to full Sanctuary page (/library/mantra/:id)
 */
export default function MantraModal({
  isOpen,
  onClose,
  mantraId = null,
  mantra: initialMantra = null
}) {
  const navigate = useNavigate();

  // Resolved mantra state
  const [currentMantra, setCurrentMantra] = useState(null);
  const [fontSizeLevel, setFontSizeLevel] = useState(1); // 0: standard, 1: large, 2: extra large
  const [langTab, setLangTab] = useState("both"); // 'hindi', 'english', 'both'
  const [showTransliteration, setShowTransliteration] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioSupported, setAudioSupported] = useState(true);

  // Resolve mantra from props or dataset
  useEffect(() => {
    if (!isOpen) {
      if (isPlayingAudio && typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      }
      return;
    }

    let active = true;
    let resolved = null;

    if (initialMantra && typeof initialMantra === "object" && initialMantra.sanskrit) {
      resolved = initialMantra;
    } else if (mantraId) {
      resolved = getMantraById(mantraId);
    }

    if (resolved) {
      setCurrentMantra(resolved);
    }

    // Attempt live fetch if we have an ID for extra details
    const targetId = mantraId || (initialMantra && (initialMantra.id || initialMantra.mantraId));
    if (targetId) {
      VedicLibraryService.getMantraById(targetId)
        .then((res) => {
          if (active && res && res.mantra) {
            setCurrentMantra((prev) => ({ ...(prev || {}), ...res.mantra }));
          }
        })
        .catch(() => {});
    }

    return () => {
      active = false;
    };
  }, [isOpen, mantraId, initialMantra]);

  // Check speech synthesis support on mount
  useEffect(() => {
    if (typeof window !== "undefined" && !("speechSynthesis" in window)) {
      setAudioSupported(false);
    }
  }, []);

  // Keyboard shortcut (Escape to close) and body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isOpen]);

  const handleClose = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    onClose?.();
  };

  const handleToggleAudio = () => {
    if (!audioSupported || typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("आपके ब्राउज़र में वाक् उच्चारण (Audio Speech) समर्थित नहीं है।");
      return;
    }

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    if (!currentMantra?.sanskrit) return;

    window.speechSynthesis.cancel();
    const spokenText = cleanVedicTextForSpeech(currentMantra.sanskrit);
    const utterance = new SpeechSynthesisUtterance(spokenText);

    // Pick Hindi/Sanskrit Indian accent if available
    const voices = window.speechSynthesis.getVoices();
    const bestVoice =
      voices.find((v) => v.lang.toLowerCase().includes("hi") || v.lang.toLowerCase().includes("sa")) ||
      voices.find((v) => v.lang.toLowerCase().includes("in"));

    if (bestVoice) {
      utterance.voice = bestVoice;
      utterance.lang = bestVoice.lang;
    } else {
      utterance.lang = "hi-IN";
    }

    utterance.rate = 0.82; // Reverent chanting cadence
    utterance.pitch = 0.98;

    utterance.onstart = () => setIsPlayingAudio(true);
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = () => {
    if (!currentMantra) return;
    const shareText = `${currentMantra.sanskrit}\n\n— ${currentMantra.textName || "वैदिक मंत्र"} (${currentMantra.sectionRef || currentMantra.mantraNumber || ""})\nभावार्थ: ${currentMantra.hindiTranslation || currentMantra.englishTranslation || ""}\n\nपवित्र वेदमंत्र संग्रह: Veda Library`;
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (!currentMantra) return;
    const shareTitle = `${currentMantra.textName || "वैदिक मंत्र"} - ${currentMantra.mantraNumber || ""}`;
    const targetUrl = `${window.location.origin}/library/mantra/${currentMantra.id || currentMantra.slug || "rv-1-1-1"}`;

    if (navigator.share) {
      navigator
        .share({
          title: shareTitle,
          text: currentMantra.sanskrit,
          url: targetUrl
        })
        .catch(() => {});
    } else {
      handleCopy();
    }
  };

  const handleOpenSanctuary = () => {
    handleClose();
    const targetId = currentMantra?.id || currentMantra?.slug || "rv-1-1-1";
    navigate(`/library/mantra/${targetId}`);
  };

  if (!isOpen || !currentMantra) return null;

  // Font size classes for the Devanagari verse
  const fontSizes = [
    "text-xl sm:text-2xl leading-relaxed sm:leading-loose", // A-
    "text-2xl sm:text-3xl lg:text-4xl leading-relaxed sm:leading-loose", // A (Default)
    "text-3xl sm:text-4xl lg:text-5xl leading-loose sm:leading-[2.4]" // A+ (Large)
  ];

  const sourceTitle =
    currentMantra.textName ||
    currentMantra.vedaName ||
    "वैदिक वांग्मय";

  const sourceSubtitle = [
    currentMantra.sectionRef,
    currentMantra.mantraNumber ? `मंत्र ${currentMantra.mantraNumber}` : null
  ]
    .filter(Boolean)
    .join(" • ");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      {/* 1. Backdrop Blur with smooth fade */}
      <div
        className="fixed inset-0 bg-stone-950/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={handleClose}
      />

      {/* 2. Main Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fffdfa] rounded-3xl border-2 border-amber-300/80 shadow-2xl overflow-hidden z-10 transition-all duration-300 animate-in zoom-in-95 fade-in">
        
        {/* TOP BAR: Source, Font size controls, Audio, Close */}
        <header className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-amber-50 via-[#fffaf0] to-amber-50/80 border-b border-amber-200/80 flex items-center justify-between gap-3 shrink-0">
          {/* Left: Source Meta */}
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-600 text-white shadow-2xs">
                <Flame className="w-3 h-3 text-amber-200" />
                <span>{sourceTitle}</span>
              </span>
              {currentMantra.devata && (
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded-full border border-amber-200 hidden sm:inline-block">
                  देवता: {currentMantra.devata}
                </span>
              )}
            </div>
            {sourceSubtitle && (
              <p className="text-xs text-stone-600 font-medium font-devanagari mt-0.5 truncate">
                {sourceSubtitle}
              </p>
            )}
          </div>

          {/* Right: Controls Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Font Size Adjuster (A- / A / A+) */}
            <div
              className="flex items-center bg-white rounded-xl border border-amber-200 p-0.5 shadow-2xs"
              title="अक्षर आकार बदलें (Adjust Font Size)"
            >
              <button
                type="button"
                onClick={() => setFontSizeLevel((prev) => Math.max(0, prev - 1))}
                disabled={fontSizeLevel === 0}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeLevel === 0
                    ? "text-stone-300 cursor-not-allowed"
                    : "text-stone-700 hover:text-amber-900 hover:bg-amber-50"
                }`}
                title="छोटा अक्षर (Smaller)"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSizeLevel(1)}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeLevel === 1
                    ? "bg-amber-600 text-white shadow-2xs"
                    : "text-stone-700 hover:text-amber-900 hover:bg-amber-50"
                }`}
                title="सामान्य अक्षर (Normal)"
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSizeLevel((prev) => Math.min(2, prev + 1))}
                disabled={fontSizeLevel === 2}
                className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  fontSizeLevel === 2
                    ? "text-stone-300 cursor-not-allowed"
                    : "text-stone-700 hover:text-amber-900 hover:bg-amber-50"
                }`}
                title="बड़ा अक्षर (Larger)"
              >
                A+
              </button>
            </div>

            {/* Audio Recitation Speaker Button */}
            {audioSupported && (
              <button
                type="button"
                onClick={handleToggleAudio}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-2xs ${
                  isPlayingAudio
                    ? "bg-amber-600 text-white border-amber-700 ring-2 ring-amber-400 animate-pulse"
                    : "bg-white border-amber-200 text-amber-900 hover:bg-amber-100/70"
                }`}
                title={isPlayingAudio ? "उच्चारण बंद करें (Stop Audio)" : "सस्वर पाठ सुनें (Listen Pronunciation)"}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">रोकें</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                    <span className="hidden sm:inline">उच्चारण</span>
                  </>
                )}
              </button>
            )}

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 rounded-xl text-stone-500 hover:text-stone-900 hover:bg-amber-100/60 border border-transparent hover:border-amber-200 transition-colors cursor-pointer"
              aria-label="बंद करें (Close Modal)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* MODAL BODY (Scrollable content) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 space-y-6 scrollbar-thin">
          
          {/* 1. SACRED DEVANAGARI SHLOKA CARD (Prominent Saffron Border & Large Crisp Typography) */}
          <div className="relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#fffaf0] via-[#fff8eb] to-[#fff4dd] border-2 border-amber-400/90 shadow-md overflow-hidden text-center">
            
            {/* Top Ornamental Header */}
            <div className="flex items-center justify-center gap-2 mb-4 text-amber-700/80 font-serif text-sm">
              <span className="h-px w-8 bg-amber-300"></span>
              <span className="font-bold tracking-widest">॥ ॐ तत्सत् ॥</span>
              <span className="h-px w-8 bg-amber-300"></span>
            </div>

            {/* Main Sacred Shloka in crisp Devanagari */}
            <div className="py-2 select-text">
              <p
                className={`font-devanagari font-bold text-[#2e1808] whitespace-pre-line tracking-wide drop-shadow-2xs transition-all ${fontSizes[fontSizeLevel]}`}
                style={{ wordBreak: "keep-all" }}
              >
                {currentMantra.sanskrit}
              </p>
            </div>

            {/* Roman IAST Transliteration (Toggleable or auto-shown) */}
            {currentMantra.transliteration && (
              <div className="mt-4 pt-3 border-t border-amber-200/70">
                <div className="flex items-center justify-center gap-2 mb-1.5">
                  <button
                    type="button"
                    onClick={() => setShowTransliteration((prev) => !prev)}
                    className="text-[11px] font-bold text-amber-800 hover:text-amber-950 underline cursor-pointer flex items-center gap-1"
                  >
                    <span>{showTransliteration ? "रोमन लिपि छुपाएँ" : "रोमन उच्चारण देखें (Roman IAST)"}</span>
                  </button>
                </div>
                {showTransliteration && (
                  <p className="font-serif italic text-stone-700 text-xs sm:text-sm whitespace-pre-line max-w-2xl mx-auto leading-relaxed select-text bg-white/70 p-2.5 rounded-xl border border-amber-200/60 mt-1">
                    {currentMantra.transliteration}
                  </p>
                )}
              </div>
            )}

            {/* Quick in-card Speaker Chanting Prompt */}
            {audioSupported && (
              <div className="mt-4 flex items-center justify-center">
                <button
                  type="button"
                  onClick={handleToggleAudio}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold border transition-all cursor-pointer shadow-xs ${
                    isPlayingAudio
                      ? "bg-amber-600 text-white border-amber-700 scale-105"
                      : "bg-white/90 border-amber-300 text-amber-900 hover:bg-amber-100 hover:scale-102"
                  }`}
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? "text-amber-100" : "text-amber-700"}`} />
                  <span>
                    {isPlayingAudio ? "उच्चारण चल रहा है (ध्वनि रोकें)" : "पवित्र उच्चारण सुनें (Chant Audio)"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* 2. SHASTTRIC ATTRIBUTES CHIP BAR (Rishi, Devata, Chhanda, Svara) */}
          {(currentMantra.rishi || currentMantra.devata || currentMantra.chhanda || currentMantra.svara) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-devanagari">
              {currentMantra.rishi && (
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-center">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">ऋषि (Sage)</span>
                  <span className="font-serif font-bold text-stone-900 text-xs truncate block">{currentMantra.rishi}</span>
                </div>
              )}
              {currentMantra.devata && (
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-center">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">देवता (Deity)</span>
                  <span className="font-serif font-bold text-stone-900 text-xs truncate block">{currentMantra.devata}</span>
                </div>
              )}
              {currentMantra.chhanda && (
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-center">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">छन्द (Meter)</span>
                  <span className="font-serif font-bold text-stone-900 text-xs truncate block">{currentMantra.chhanda}</span>
                </div>
              )}
              {currentMantra.svara && (
                <div className="p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/70 text-center">
                  <span className="block text-[10px] uppercase font-bold text-amber-800 tracking-wider">स्वर / पाठ</span>
                  <span className="font-serif font-bold text-stone-900 text-xs truncate block">{currentMantra.svara}</span>
                </div>
              )}
            </div>
          )}

          {/* 3. TRANSLATIONS SECTION (Hindi & English with switchable tab or unified view) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center justify-between border-b pb-3 border-amber-100 gap-2 flex-wrap">
              <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>प्रामाणिक अर्थ एवं व्याख्या (Translations)</span>
              </h3>

              {/* View Language Switcher Tabs */}
              <div className="flex items-center p-0.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLangTab("both")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    langTab === "both" ? "bg-amber-600 text-white shadow-2xs" : "text-stone-600 hover:text-amber-900"
                  }`}
                >
                  दोनों (Both)
                </button>
                <button
                  type="button"
                  onClick={() => setLangTab("hindi")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    langTab === "hindi" ? "bg-amber-600 text-white shadow-2xs" : "text-stone-600 hover:text-amber-900"
                  }`}
                >
                  हिंदी
                </button>
                <button
                  type="button"
                  onClick={() => setLangTab("english")}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    langTab === "english" ? "bg-amber-600 text-white shadow-2xs" : "text-stone-600 hover:text-amber-900"
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            {/* Hindi Translation Card */}
            {(langTab === "both" || langTab === "hindi") && currentMantra.hindiTranslation && (
              <div className="p-4 rounded-xl bg-[#fffcf7] border-l-4 border-amber-500 border border-amber-100 select-text">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-2 py-0.5 rounded mb-2">
                  सरल हिंदी भावार्थ
                </span>
                <p className="font-devanagari text-sm sm:text-base text-stone-800 leading-relaxed font-normal">
                  {currentMantra.hindiTranslation}
                </p>
              </div>
            )}

            {/* English Translation Card */}
            {(langTab === "both" || langTab === "english") && currentMantra.englishTranslation && (
              <div className="p-4 rounded-xl bg-[#fafafa] border-l-4 border-stone-400 border border-stone-200 select-text">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-stone-700 bg-stone-100 px-2 py-0.5 rounded mb-2">
                  English Meaning
                </span>
                <p className="font-serif text-sm sm:text-base text-stone-700 leading-relaxed italic">
                  "{currentMantra.englishTranslation}"
                </p>
              </div>
            )}

            {/* Shastric context & Viniyoga */}
            {(currentMantra.shastricContext || currentMantra.viniyoga || currentMantra.sadhanaPhala) && (
              <div className="space-y-2 text-xs font-devanagari leading-relaxed">
                {currentMantra.viniyoga && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-400/40 text-amber-950">
                    <strong className="text-amber-900 font-bold block mb-0.5">॥ प्रामाणिक वैदिक विनियोग ॥</strong>
                    <p className="font-mono text-[11px] sm:text-xs text-amber-950">{currentMantra.viniyoga}</p>
                  </div>
                )}
                {currentMantra.shastricContext && (
                  <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950">
                    <strong className="text-amber-900 font-bold block mb-0.5">शास्त्रीय संदर्भ व महत्व:</strong>
                    <p>{currentMantra.shastricContext}</p>
                  </div>
                )}
                {currentMantra.sadhanaPhala && (
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/70 text-emerald-950">
                    <strong className="text-emerald-900 font-bold block mb-0.5">॥ जप फल व साधना लाभ ॥</strong>
                    <p>{currentMantra.sadhanaPhala}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 4. WORD-BY-WORD PADAPATHA PILL CHIPS (पदच्छेद एवं पदार्थ) */}
          {currentMantra.padapatha && currentMantra.padapatha.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-2xs space-y-3">
              <div className="flex items-center justify-between border-b pb-2.5 border-amber-100">
                <h3 className="font-serif text-sm sm:text-base font-bold text-stone-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>पदच्छेद एवं प्रत्येक पद का अर्थ (Word-by-Word Padapatha)</span>
                </h3>
                <span className="text-[11px] font-semibold text-stone-500">
                  {currentMantra.padapatha.length} पद
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                {currentMantra.padapatha.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#fffbf2] border border-amber-200/80 hover:border-amber-400 hover:shadow-2xs transition-all font-devanagari flex flex-col justify-between"
                  >
                    <span className="font-bold text-amber-900 text-sm mb-0.5 tracking-wide">
                      {item.word}
                    </span>
                    <span className="text-xs text-stone-600 leading-snug">
                      {item.meaning}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* MODAL FOOTER: Copy, Share, & Primary Dedicated Sanctuary Button */}
        <footer className="px-4 sm:px-6 py-3.5 bg-gradient-to-r from-stone-50 via-[#fffcf7] to-stone-50 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          {/* Left Actions: Copy & Share */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-300 transition-colors cursor-pointer shadow-2xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-stone-500" />}
              <span>{copied ? "कॉपी हो गया!" : "मंत्र कॉपी करें"}</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-300 transition-colors cursor-pointer shadow-2xs"
              title="शेयर करें"
            >
              <Share2 className="w-3.5 h-3.5 text-stone-500" />
              <span>साझा करें</span>
            </button>
          </div>

          {/* Right Action: Primary Button to Open Dedicated Sanctuary */}
          <button
            type="button"
            onClick={handleOpenSanctuary}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>सम्पूर्ण पावन पठन पृष्ठ खोलें (Open Dedicated Sanctuary)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </footer>
      </div>
    </div>
  );
}
