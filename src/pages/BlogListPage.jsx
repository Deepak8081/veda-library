import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Search,
  BookOpen,
  Sparkles,
  Filter,
  ArrowRight,
  RefreshCw,
  Home,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  Tag,
  Check,
  X,
} from "lucide-react";
import BlogService from "../services/blogService.js";
import BlogCard from "../components/blog/BlogCard.jsx";
import FeaturedBlogCard from "../components/blog/FeaturedBlogCard.jsx";

const POPULAR_TAGS = [
  "Lord Shiva",
  "Rudrabhishek",
  "Navgrah",
  "Vedic Astrology",
  "Mantras",
  "Vastu Tips",
  "Ayurveda",
  "Daily Sadhana",
  "Rigveda",
];

export default function BlogListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";
  const currentTag = searchParams.get("tag") || "";
  const currentSearch = searchParams.get("search") || "";
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const currentSort = searchParams.get("sort") || "createdAt";

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 9,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);
  const [searchInput, setSearchInput] = useState(currentSearch);

  // Sync search input with url search param
  useEffect(() => {
    setSearchInput(currentSearch);
  }, [currentSearch]);

  // Load categories
  useEffect(() => {
    async function loadCategories() {
      try {
        const catList = await BlogService.getCategories();
        setCategories(catList);
      } catch (err) {
        console.error("Failed to load categories:", err);
      }
    }
    loadCategories();
  }, []);

  // Fetch blogs when filters change
  useEffect(() => {
    let isCancelled = false;

    async function fetchBlogs() {
      setLoading(true);
      try {
        const response = await BlogService.getBlogPosts({
          page: currentPage,
          limit: 9,
          category: currentCategory === "All" ? "" : currentCategory,
          tag: currentTag,
          search: currentSearch,
          sort: currentSort,
          order: currentSort === "title" ? "ASC" : "DESC",
        });

        if (!isCancelled && response) {
          setBlogs(response.blogs || []);
          setPagination(response.pagination || { total: 0, page: 1, totalPages: 1 });
          setIsLive(response.isLive);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    }

    fetchBlogs();
    return () => {
      isCancelled = true;
    };
  }, [currentCategory, currentTag, currentSearch, currentPage, currentSort]);

  // Update query params helper
  const updateParams = (newParams) => {
    const next = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "" || value === "All") {
        next.delete(key);
      } else {
        next.set(key, value);
      }
    });
    // Reset to page 1 unless page is explicitly changed
    if (!("page" in newParams)) {
      next.delete("page");
    }
    setSearchParams(next);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    updateParams({ search: searchInput.trim() });
  };

  const handleClearSearch = () => {
    setSearchInput("");
    updateParams({ search: "" });
  };

  const featuredBlog = blogs.find((b) => b.isFeatured) || (blogs.length > 0 ? blogs[0] : null);
  const regularBlogs = blogs.filter((b) => b.id !== featuredBlog?.id);

  return (
    <div className="bg-[#fffaf0] min-h-screen pb-20">
      {/* 1. Top Vedic Ribbon & Breadcrumb */}
      <div className="bg-[#fffdf8] border-b border-amber-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Breadcrumb Links */}
          <nav className="flex items-center gap-2 text-stone-500 font-medium">
            <Link
              to="/library"
              className="hover:text-amber-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Library</span>
            </Link>
            <span>›</span>
            <span className="text-amber-900 font-bold">Articles & Blogs (लेख संग्रह)</span>
          </nav>

          {/* Vedic Mantra Motto */}
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-devanagari font-semibold text-amber-900/90 bg-amber-100/70 border border-amber-300/60 px-3 py-0.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 animate-pulse" />
            <span>ऋग्वेदो यजुर्वेदः सामवेदोऽथर्वणस्तथा • ज्ञानं परमं बलम्</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-100/50 via-[#fff9ee] to-[#fffaf0] border-b border-amber-200/60 pt-10 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-100 border border-amber-300/80 text-amber-950 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span className="font-devanagari">वेद व्याख्या एवं शास्त्रीय आलेख</span>
            <span>•</span>
            <span>Scholarly Insights</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Veda Library Blogs & Articles
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-stone-600 leading-relaxed font-sans">
            Authentic commentary, Vedic research, ritual explanations, astrology guides, and shastric wisdom authored by seasoned scholars and practitioners.
          </p>

          {/* Search Bar & Instant Filter */}
          <div className="max-w-2xl mx-auto pt-3">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-md rounded-2xl">
              <div className="absolute left-4 text-amber-700 pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search articles, mantras, shlokas, topics or authors..."
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white border border-amber-300 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all shadow-2xs"
              />
              {searchInput && (
                <button
                  type="button"
                  onClick={handleClearSearch}
                  className="absolute right-24 p-1.5 rounded-full text-stone-400 hover:text-stone-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
              >
                Search
              </button>
            </form>
          </div>

          {/* Popular Tag Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
            <span className="text-xs font-semibold text-stone-500 flex items-center gap-1 mr-1">
              <Tag className="w-3 h-3 text-amber-700" />
              Trending Topics:
            </span>
            {POPULAR_TAGS.map((tag) => {
              const isActive = currentTag.toLowerCase() === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => updateParams({ tag: isActive ? "" : tag })}
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "bg-amber-800 text-white shadow-xs"
                      : "bg-white/80 hover:bg-amber-100 text-stone-700 border border-amber-200/80"
                  }`}
                >
                  #{tag}
                </button>
              );
            })}
            {currentTag && (
              <button
                onClick={() => updateParams({ tag: "" })}
                className="text-[11px] font-bold text-red-600 hover:text-red-700 ml-1 underline cursor-pointer"
              >
                Clear Tag
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3. Main Body Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Category Filter Pills & Sort Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-amber-200/70">
          {/* Scrollable Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => updateParams({ category: "All" })}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                currentCategory === "All"
                  ? "bg-amber-700 text-white shadow-sm"
                  : "bg-white text-stone-700 hover:bg-amber-100/70 border border-amber-200"
              }`}
            >
              All Categories (सभी श्रेणियाँ)
            </button>

            {categories.map((cat, idx) => {
              const catName = typeof cat === "string" ? cat : cat.category;
              if (!catName || catName === "All") return null;
              const isActive = currentCategory.toLowerCase() === catName.toLowerCase();
              return (
                <button
                  key={idx}
                  onClick={() => updateParams({ category: catName })}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-amber-700 text-white shadow-sm"
                      : "bg-white text-stone-700 hover:bg-amber-100/70 border border-amber-200"
                  }`}
                >
                  <span>{catName}</span>
                  {typeof cat.count !== "undefined" && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive ? "bg-amber-900 text-amber-200" : "bg-amber-100 text-amber-900"
                      }`}
                    >
                      {cat.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sort & Count Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-stone-600 flex-shrink-0">
            <span className="font-semibold text-stone-700">
              Showing {pagination.total} articles
            </span>

            <div className="flex items-center gap-1.5 bg-white border border-amber-200 rounded-xl px-2.5 py-1.5 shadow-2xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-amber-700" />
              <select
                value={currentSort}
                onChange={(e) => updateParams({ sort: e.target.value })}
                className="bg-transparent text-xs font-semibold text-stone-800 focus:outline-none cursor-pointer"
              >
                <option value="createdAt">Newest First (नवीनतम)</option>
                <option value="viewsCount">Most Read (लोकप्रिय)</option>
                <option value="title">Alphabetical (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 4. Active Filters Strip (if any) */}
        {(currentSearch || currentTag || (currentCategory && currentCategory !== "All")) && (
          <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs">
            <span className="font-bold text-amber-950 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-700" />
              Active Filters:
            </span>

            {currentCategory && currentCategory !== "All" && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-semibold text-stone-800">
                Category: {currentCategory}
                <button
                  onClick={() => updateParams({ category: "All" })}
                  className="text-stone-400 hover:text-stone-800 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {currentTag && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-semibold text-stone-800">
                Tag: #{currentTag}
                <button
                  onClick={() => updateParams({ tag: "" })}
                  className="text-stone-400 hover:text-stone-800 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            {currentSearch && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-semibold text-stone-800">
                Search: "{currentSearch}"
                <button
                  onClick={handleClearSearch}
                  className="text-stone-400 hover:text-stone-800 ml-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={() => {
                setSearchInput("");
                setSearchParams({});
              }}
              className="text-xs font-bold text-amber-900 hover:text-amber-950 underline ml-auto cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* 5. Featured Article Spotlight (shown on Page 1 if no filters or category only) */}
        {currentPage === 1 && !currentSearch && !currentTag && featuredBlog && (
          <div className="space-y-3">
            <FeaturedBlogCard blog={featuredBlog} />
          </div>
        )}

        {/* 6. Articles Grid / Loading / Empty States */}
        {loading ? (
          /* Loading Skeletons */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-amber-200/60 p-4 space-y-4 animate-pulse shadow-2xs"
              >
                <div className="aspect-[16/10] bg-amber-100/60 rounded-xl" />
                <div className="space-y-2">
                  <div className="h-4 bg-amber-100/80 rounded w-1/3" />
                  <div className="h-6 bg-amber-100 rounded w-4/5" />
                  <div className="h-4 bg-amber-100/60 rounded w-full" />
                </div>
                <div className="pt-4 border-t border-amber-100 flex justify-between items-center">
                  <div className="h-6 w-24 bg-amber-100/80 rounded-full" />
                  <div className="h-6 w-8 bg-amber-100 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : blogs.length === 0 ? (
          /* Empty State */
          <div className="py-16 text-center bg-white rounded-3xl border border-amber-200/80 p-8 space-y-4 shadow-sm max-w-xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mx-auto">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              No Articles Found (कोई लेख नहीं मिला)
            </h3>
            <p className="text-sm text-stone-600">
              We could not find any articles matching your search or filters. Try adjusting your search query or view all articles.
            </p>
            <button
              onClick={() => {
                setSearchInput("");
                setSearchParams({});
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Show All Articles</span>
            </button>
          </div>
        ) : (
          /* Grid of Articles */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-700" />
                <span>
                  {currentCategory !== "All" ? `${currentCategory} Articles` : "All Articles & Research"}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* If on page 1 with featured card shown, show other regular blogs; else show all blogs */}
              {(currentPage === 1 && !currentSearch && !currentTag ? regularBlogs : blogs).map(
                (blog) => (
                  <BlogCard key={blog.id || blog.slug} blog={blog} />
                ),
              )}
            </div>
          </div>
        )}

        {/* 7. Pagination Bar */}
        {pagination.totalPages > 1 && (
          <div className="pt-8 border-t border-amber-200 flex items-center justify-center gap-2">
            <button
              disabled={pagination.page <= 1}
              onClick={() => updateParams({ page: pagination.page - 1 })}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-amber-200 text-xs font-bold text-stone-700 hover:bg-amber-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => updateParams({ page: pageNum })}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    pagination.page === pageNum
                      ? "bg-amber-700 text-white shadow-xs"
                      : "bg-white text-stone-700 hover:bg-amber-50 border border-amber-200"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => updateParams({ page: pagination.page + 1 })}
              className="flex items-center gap-1 px-4 py-2 rounded-xl bg-white border border-amber-200 text-xs font-bold text-stone-700 hover:bg-amber-50 disabled:opacity-40 disabled:cursor-not-allowed shadow-2xs cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
