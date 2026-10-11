import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { EKADASH_SKANDHA_CHAPTERS } from "../data/bhagavataEkadashaData.js";

const LABELS = {
  hindi: {
    back: "एकादश स्कंध की सूची",
    summary: "अध्याय का सार",
    previous: "पिछला अध्याय",
    next: "अगला अध्याय",
    section: "श्रीमद्भागवत महापुराण",
    home: "मुख्य पृष्ठ",
    purana: "पुराण",
    book: "श्रीमद्भागवत",
  },
  english: {
    back: "Chapter index",
    summary: "Lesson overview",
    previous: "Previous chapter",
    next: "Next chapter",
    section: "Srimad Bhagavata Purana",
    home: "Home",
    purana: "Purana",
    book: "Srimad Bhagavata",
  },
  hinglish: {
    back: "Ekadash Skandha suchi",
    summary: "Adhyay ka saar",
    previous: "Pichhla adhyay",
    next: "Agla adhyay",
    section: "Shrimad Bhagavat Mahapuran",
    home: "Home",
    purana: "Purana",
    book: "Shrimad Bhagavat",
  },
};

export default function BhagavataChapterDetailPage() {
  const { chapter: chapterParam } = useParams();
  const [language, setLanguage] = useState("hindi");
  const chapterNumber = Number(chapterParam);
  const chapter = EKADASH_SKANDHA_CHAPTERS[chapterNumber - 1];
  const labels = LABELS[language];
  const indexPath = "/library/purana/shrimad-bhagavata/skandha-11";

  if (!chapter || chapter.number !== chapterNumber) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-serif text-2xl font-bold text-stone-900">
          Chapter not found
        </h1>
        <Link
          to={indexPath}
          className="mt-4 inline-flex text-sm font-semibold text-amber-800"
        >
          {labels.back}
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-[#fffaf0] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={indexPath}
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-950"
          >
            <ArrowLeft className="h-4 w-4" /> {labels.back}
          </Link>
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

        <header className="border-b border-amber-200 pb-6">
          <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
            <BookOpen className="h-4 w-4" /> {labels.section}
          </div>
          <p className="text-xs font-semibold text-stone-500">
            Ekadash Skandha • {chapterNumber}/31
          </p>
          <h1 className="mt-2 font-serif text-3xl font-bold text-stone-900 sm:text-4xl">
            {language === "hindi" ? chapter.titleHi : chapter.title}
          </h1>
        </header>

        <article className="mt-6 border-y border-stone-200 bg-white px-5 py-6 sm:px-8">
          <h2 className="font-serif text-xl font-bold text-stone-900">
            {labels.summary}
          </h2>
          <p className="mt-3 text-base leading-8 text-stone-700">
            {chapter.summary[language]}
          </p>
        </article>

        <nav className="mt-6 flex flex-wrap justify-between gap-3">
          {chapterNumber > 1 ? (
            <Link
              to={`${indexPath}/${chapterNumber - 1}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-950"
            >
              <ArrowLeft className="h-4 w-4" /> {labels.previous}
            </Link>
          ) : (
            <span />
          )}
          {chapterNumber < EKADASH_SKANDHA_CHAPTERS.length && (
            <Link
              to={`${indexPath}/${chapterNumber + 1}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-800 hover:text-amber-950"
            >
              {labels.next} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
