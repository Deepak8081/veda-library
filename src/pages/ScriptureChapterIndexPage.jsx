import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, Home } from "lucide-react";
import { EKADASH_SKANDHA_CHAPTERS } from "../data/bhagavataEkadashaData.js";

const LABELS = {
  hindi: {
    home: "मुख्य पृष्ठ",
    purana: "पुराण",
    book: "श्रीमद्भागवत",
    back: "भागवत ग्रंथ पृष्ठ पर लौटें",
    title: "एकादश स्कंध — मुक्ति लीला",
    summary:
      "उद्धव गीता, नवयोगेश्वर संवाद, अवधूत के २४ गुरु और यदुवंश की अंतिम लीला।",
    count: "अध्याय",
    list: "अध्याय सूची",
    open: "पाठ खोलें",
  },
  english: {
    home: "Home",
    purana: "Purana",
    book: "Srimad Bhagavata",
    back: "Back to the Purana page",
    title: "Canto 11 — The Path to Liberation",
    summary:
      "Uddhava's teachings, the Nine Yogendras, the avadhūta's twenty-four teachers, and the close of the Yadu dynasty.",
    count: "chapters",
    list: "Chapter index",
    open: "Open lesson",
  },
  hinglish: {
    home: "Home",
    purana: "Purana",
    book: "Shrimad Bhagavat",
    back: "Bhagavat granth page par lautein",
    title: "Ekadash Skandha — Mukti Leela",
    summary:
      "Uddhav Gita, Nava Yogeshwar samvad, avadhut ke 24 guru aur Yadu vansh ki antim leela.",
    count: "adhyay",
    list: "Adhyay suchi",
    open: "Paath kholein",
  },
};

export default function ScriptureChapterIndexPage() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("hindi");
  const labels = LABELS[language];
  const chapterPath = "/library/purana/shrimad-bhagavata/skandha-11";

  return (
    <div className="min-h-screen bg-[#fffaf0]">
      <div className="border-b border-amber-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center gap-2 text-xs font-medium text-stone-500">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-amber-800"
          >
            <Home className="h-3.5 w-3.5" /> {labels.home}
          </Link>
          <span>›</span>
          <Link to="/library/purana" className="hover:text-amber-800">
            {labels.purana}
          </Link>
          <span>›</span>
          <Link
            to="/library/purana/shrimad-bhagavata"
            className="hover:text-amber-800"
          >
            {labels.book}
          </Link>
          <span>›</span>
          <span className="font-semibold text-amber-900">Ekadasha Skandha</span>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => navigate("/library/purana/shrimad-bhagavata")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-950"
          >
            <ArrowLeft className="h-4 w-4" /> {labels.back}
          </button>
          <div className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-white p-1 text-xs font-semibold">
            {["hindi", "english", "hinglish"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                aria-pressed={language === option}
                className={`rounded-md px-2.5 py-1.5 ${language === option ? "bg-amber-800 text-white" : "text-stone-600 hover:bg-stone-100"}`}
              >
                {option === "hindi"
                  ? "हिंदी"
                  : option === "english"
                    ? "English"
                    : "Hinglish"}
              </button>
            ))}
          </div>
        </div>

        <header className="mb-8 border-b border-amber-200 pb-6">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <BookOpen className="h-4 w-4" /> श्रीमद्भागवत महापुराण
          </div>
          <h1 className="font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            {labels.title}
          </h1>
          <p className="mt-2 max-w-3xl font-devanagari text-base leading-relaxed text-stone-700">
            {labels.summary}
          </p>
          <p className="mt-4 text-sm text-stone-600">
            {labels.list}:{" "}
            <strong className="text-stone-900">31 {labels.count}</strong>
            <span className="mx-2 text-stone-400">•</span>
            {language === "hindi"
              ? "श्रीमद्भागवत के प्रचलित अध्याय-विभाजन के अनुसार।"
              : language === "hinglish"
                ? "Shrimad Bhagavat ke prachalit adhyay-vibhajan ke anusaar."
                : "Following the commonly used chapter division."}
          </p>
        </header>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            {labels.list}
          </h2>
        </div>

        <ol className="divide-y divide-stone-200 border-y border-stone-200 bg-white">
          {EKADASH_SKANDHA_CHAPTERS.map((chapter) => (
            <li key={chapter.number}>
              <Link
                to={`${chapterPath}/${chapter.number}`}
                className="group flex min-h-14 items-center justify-between gap-4 px-4 py-3 transition-colors hover:bg-amber-50 sm:px-5"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-amber-100 text-xs font-bold text-amber-900">
                    {chapter.number}
                  </span>
                  <span className="text-sm font-semibold text-stone-800 group-hover:text-amber-900">
                    {language === "hindi"
                      ? `अध्याय ${chapter.number}: ${chapter.titleHi}`
                      : `${language === "hinglish" ? "Adhyay" : "Chapter"} ${chapter.number}: ${chapter.title}`}
                  </span>
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-amber-800">
                  {labels.open}{" "}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
