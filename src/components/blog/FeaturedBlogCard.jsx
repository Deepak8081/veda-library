import React from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Clock,
  Eye,
  Calendar,
  ArrowRight,
  User,
  BookOpen,
} from "lucide-react";
import bannerFireRitualImg from "../../assets/images/library/banners/banner-fire-ritual.png";

export default function FeaturedBlogCard({ blog }) {
  if (!blog) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "विशेष संपादकीय";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "विशेष संपादकीय";
    }
  };

  const imageSrc = blog.featuredImage || bannerFireRitualImg;

  return (
    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#24130a] via-[#1a0e07] to-[#0f0703] border border-amber-600/40 shadow-xl shadow-amber-950/20 group">
      {/* Decorative Gold Radial Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* Left: Content Information (7 cols) */}
        <div className="p-6 sm:p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between space-y-6 z-10">
          <div className="space-y-4">
            {/* Top Pill / Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold shadow-md shadow-amber-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Insight • विशेष लेख</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                {blog.category || "Vedic Wisdom"}
              </span>
            </div>

            {/* Main Article Title */}
            <div>
              <Link
                to={`/library/articles/${blog.slug}`}
                className="group-hover:text-amber-300 transition-colors"
              >
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {blog.title}
                </h2>
              </Link>
              {blog.titleHi && (
                <p className="font-devanagari text-sm sm:text-base font-semibold text-amber-200/90 mt-2">
                  {blog.titleHi}
                </p>
              )}
            </div>

            {/* Subtitle / Excerpt */}
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed line-clamp-3">
              {blog.excerpt || blog.excerptHi || "Read the comprehensive scholarly treatise and sacred commentary from the traditional corpus."}
            </p>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {blog.tags.slice(0, 4).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-stone-900/80 text-amber-300/90 border border-amber-500/20"
                  >
                    #{tag.replace(/^#/, "")}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Bottom Row: Author + Read Button */}
          <div className="pt-4 border-t border-amber-900/50 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {blog.authorAvatar ? (
                <img
                  src={blog.authorAvatar}
                  alt={blog.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-amber-400"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-amber-900/80 border border-amber-400/50 flex items-center justify-center text-amber-300">
                  <User className="w-5 h-5" />
                </div>
              )}
              <div className="text-xs">
                <span className="font-bold text-white block">
                  {blog.author || "Veda Structure Team"}
                </span>
                <div className="flex items-center gap-2 text-stone-400 text-[11px] mt-0.5">
                  <span>{formatDate(blog.publishedAt || blog.createdAt)}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-amber-300 font-medium">
                    <Clock className="w-3 h-3" />
                    {blog.readTime || "7 min read"}
                  </span>
                  {typeof blog.viewsCount !== "undefined" && (
                    <>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {blog.viewsCount} views
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <Link
              to={`/library/articles/${blog.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/25 group-hover:scale-105 transition-all cursor-pointer"
            >
              <span>Read Full Article (संपूर्ण लेख पढ़ें)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right: Featured Thumbnail (5 cols) */}
        <div className="p-4 sm:p-6 lg:p-8 lg:col-span-5 relative h-full flex items-center">
          <Link
            to={`/library/articles/${blog.slug}`}
            className="block w-full relative rounded-2xl overflow-hidden aspect-[4/3] border-2 border-amber-500/40 group-hover:border-amber-400 transition-colors shadow-2xl"
          >
            <img
              src={imageSrc}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = bannerFireRitualImg;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140b06]/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-amber-200 font-devanagari font-semibold bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/30">
              <span>प्रामाणिक वैदिक शोध संग्रह</span>
              <span className="font-mono text-amber-400 font-bold">ॐ</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
