import React from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Eye,
  ArrowRight,
  BookOpen,
  User,
  Sparkles,
} from "lucide-react";
import bannerFireRitualImg from "../../assets/images/library/banners/banner-fire-ritual.png";

export default function BlogCard({ blog }) {
  if (!blog) return null;

  const formatDate = (dateString) => {
    if (!dateString) return "ज्ञान परंपरा";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return "ज्ञान परंपरा";
    }
  };

  const imageSrc = blog.featuredImage || bannerFireRitualImg;

  return (
    <article className="group bg-white rounded-2xl border border-amber-200/80 hover:border-amber-400/90 shadow-2xs hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1">
      {/* Image Container */}
      <Link
        to={`/library/articles/${blog.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-amber-50"
      >
        <img
          src={imageSrc}
          alt={blog.title || "Veda Library Article"}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            e.currentTarget.src = bannerFireRitualImg;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-950/85 text-amber-200 border border-amber-400/40 backdrop-blur-md shadow-xs">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{blog.category || "Vedic Wisdom"}</span>
          </span>
          {blog.isFeatured && (
            <span className="inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-xs">
              विशेष
            </span>
          )}
        </div>

        {/* Read Time Pill */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-stone-200 backdrop-blur-md">
            <Clock className="w-3 h-3 text-amber-300" />
            <span>{blog.readTime || "5 min read"}</span>
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {blog.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-200/60"
                >
                  #{tag.replace(/^#/, "")}
                </span>
              ))}
            </div>
          )}

          {/* Bilingual Title */}
          <div>
            <Link
              to={`/library/articles/${blog.slug}`}
              className="group-hover:text-amber-800 transition-colors"
            >
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 leading-snug line-clamp-2">
                {blog.title}
              </h3>
            </Link>
            {blog.titleHi && (
              <p className="font-devanagari text-xs font-semibold text-amber-900/80 mt-1 line-clamp-1">
                {blog.titleHi}
              </p>
            )}
          </div>

          {/* Excerpt */}
          <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
            {blog.excerpt || blog.excerptHi || "Read the detailed Vedic analysis and sacred spiritual commentary."}
          </p>
        </div>

        {/* Card Footer: Author & Meta Info */}
        <div className="pt-3 border-t border-amber-100/80 flex items-center justify-between text-xs text-stone-500">
          <div className="flex items-center gap-2">
            {blog.authorAvatar ? (
              <img
                src={blog.authorAvatar}
                alt={blog.author}
                className="w-6 h-6 rounded-full object-cover ring-1 ring-amber-300"
              />
            ) : (
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 ring-1 ring-amber-300">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
            <div className="text-[11px]">
              <span className="font-medium text-stone-800 block leading-tight">
                {blog.author || "Veda Structure Team"}
              </span>
              <span className="text-[10px] text-stone-400">
                {formatDate(blog.publishedAt || blog.createdAt)}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {typeof blog.viewsCount !== "undefined" && (
              <div className="flex items-center gap-1 text-[11px] text-stone-400">
                <Eye className="w-3.5 h-3.5 text-stone-400" />
                <span>{blog.viewsCount}</span>
              </div>
            )}

            <Link
              to={`/library/articles/${blog.slug}`}
              className="w-7 h-7 rounded-full bg-amber-50 group-hover:bg-amber-600 text-amber-800 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-2xs"
              aria-label="Read Article"
            >
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
