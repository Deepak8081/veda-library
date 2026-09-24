import { FALLBACK_BLOGS, FALLBACK_BLOG_CATEGORIES } from "../data/blogFallbackData.js";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api.vedastructure.com/api";

/**
 * Helper to fetch with timeout and json parsing
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = 4000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
    });
    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export const BlogService = {
  /**
   * Fetch paginated blogs with search, filters & sort
   */
  async getBlogPosts(params = {}) {
    const {
      page = 1,
      limit = 9,
      category = "",
      tag = "",
      search = "",
      sort = "createdAt",
      order = "DESC",
      isFeatured = "",
    } = params;

    const query = new URLSearchParams();
    if (page) query.append("page", page);
    if (limit) query.append("limit", limit);
    if (category && category !== "All") query.append("category", category);
    if (tag) query.append("tag", tag);
    if (search) query.append("search", search);
    if (sort) query.append("sort", sort);
    if (order) query.append("order", order);
    if (typeof isFeatured === "boolean" || isFeatured === "true") {
      query.append("isFeatured", isFeatured);
    }

    const endpoints = [
      `${API_BASE_URL}/library/blogs?${query.toString()}`,
      `${API_BASE_URL}/blogs?${query.toString()}`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && result.data) {
          const rawBlogs = result.data.blogs || result.data.rows || [];
          const pagination = result.data.pagination || {
            total: rawBlogs.length,
            page: Number(page),
            limit: Number(limit),
            totalPages: Math.ceil(rawBlogs.length / limit) || 1,
          };

          // If backend returns blogs, return live data
          if (rawBlogs.length > 0 || (category || tag || search)) {
            return {
              blogs: rawBlogs,
              pagination,
              isLive: true,
            };
          }
        }
      } catch (err) {
        // Continue to fallback
        // console.warn("Live API fetch failed, falling back to local dataset:", err.message);
      }
    }

    // Client-side fallback filter
    let filtered = [...FALLBACK_BLOGS];

    if (category && category !== "All") {
      filtered = filtered.filter(
        (b) => b.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (tag) {
      const cleanTag = tag.replace(/^#/, "").toLowerCase();
      filtered = filtered.filter(
        (b) =>
          Array.isArray(b.tags) &&
          b.tags.some((t) => t.toLowerCase().includes(cleanTag)),
      );
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(
        (b) =>
          b.title?.toLowerCase().includes(q) ||
          b.titleHi?.toLowerCase().includes(q) ||
          b.subtitle?.toLowerCase().includes(q) ||
          b.subtitleHi?.toLowerCase().includes(q) ||
          b.excerpt?.toLowerCase().includes(q) ||
          b.excerptHi?.toLowerCase().includes(q) ||
          b.category?.toLowerCase().includes(q) ||
          b.author?.toLowerCase().includes(q),
      );
    }

    if (typeof isFeatured === "boolean" || isFeatured === "true") {
      filtered = filtered.filter((b) => b.isFeatured === true);
    }

    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 9;
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedBlogs = filtered.slice(startIndex, startIndex + limitNum);

    return {
      blogs: paginatedBlogs,
      pagination: {
        total: filtered.length,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(filtered.length / limitNum) || 1,
      },
      isLive: false,
    };
  },

  /**
   * Fetch single blog post by slug
   */
  async getBlogPostBySlug(slug) {
    if (!slug) return null;

    const endpoints = [
      `${API_BASE_URL}/library/blogs/${slug}`,
      `${API_BASE_URL}/blogs/${slug}`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && result.data) {
          return {
            blog: result.data,
            isLive: true,
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    // Local fallback search
    const localBlog = FALLBACK_BLOGS.find(
      (b) => b.slug === slug || b.id === slug,
    );
    if (localBlog) {
      return {
        blog: localBlog,
        isLive: false,
      };
    }

    return null;
  },

  /**
   * Fetch categories list with count
   */
  async getCategories() {
    const endpoints = [
      `${API_BASE_URL}/library/blogs/categories/list`,
      `${API_BASE_URL}/blogs/categories/list`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && Array.isArray(result.data)) {
          return result.data;
        }
      } catch (err) {
        // Fallback
      }
    }

    return FALLBACK_BLOG_CATEGORIES;
  },
};

export default BlogService;
