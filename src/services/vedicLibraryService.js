import { VEDIC_MANTRAS, getMantraById, ALL_VEDIC_MANTRAS } from "../data/vedicMantrasData.js";
import { VEDA_HIERARCHY_TREE, findNodeById } from "../data/vedaHierarchyTree.js";
import { SUBJECTS_DATA, CATEGORIES_DATA } from "../data/categoryTemplatesData.js";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://api.vedastructure.com/api";

/**
 * Helper to fetch with timeout and JSON parsing
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

export const VedicLibraryService = {
  /**
   * Fetch all Vedas from backend (with offline fallback)
   */
  async getVedas() {
    const endpoints = [
      `${API_BASE_URL}/library/vedas`,
      `${API_BASE_URL}/vedas`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && Array.isArray(result.data) && result.data.length > 0) {
          return {
            vedas: result.data,
            isLive: true,
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    return {
      vedas: VEDA_HIERARCHY_TREE.children || [],
      isLive: false,
    };
  },

  /**
   * Fetch Veda by Slug with its complete tree & metadata from backend (with offline fallback)
   */
  async getVedaBySlug(slug = "rigveda") {
    if (!slug) return null;

    const endpoints = [
      `${API_BASE_URL}/library/vedas/${slug}`,
      `${API_BASE_URL}/vedas/${slug}`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && result.data) {
          const vedaData = result.data;
          const key = `veda/${slug}`;
          const fallbackSubject = SUBJECTS_DATA[key] || SUBJECTS_DATA["veda/rigveda"];

          // Merge backend data with any missing UI fields from fallback
          const mergedSubject = {
            ...fallbackSubject,
            name: vedaData.name || fallbackSubject.name,
            enName: vedaData.enName || fallbackSubject.enName,
            eyebrow: vedaData.eyebrow || fallbackSubject.eyebrow,
            intro: vedaData.intro || fallbackSubject.intro,
            overviewText: vedaData.overviewText || fallbackSubject.overviewText,
            desc: vedaData.desc || fallbackSubject.desc,
            stats: vedaData.stats || fallbackSubject.stats,
            priest: vedaData.priest || fallbackSubject.priest,
            badge: vedaData.badge || fallbackSubject.badge,
            quickInfo: vedaData.quickInfo || fallbackSubject.quickInfo,
            rishis: Array.isArray(vedaData.rishis) && vedaData.rishis.length > 0 ? vedaData.rishis : fallbackSubject.rishis,
            deities: Array.isArray(vedaData.deities) && vedaData.deities.length > 0 ? vedaData.deities : fallbackSubject.deities,
            availableTexts: Array.isArray(vedaData.availableTexts) && vedaData.availableTexts.length > 0 ? vedaData.availableTexts : fallbackSubject.availableTexts,
            relatedGranthas: Array.isArray(vedaData.relatedGranthas) && vedaData.relatedGranthas.length > 0 ? vedaData.relatedGranthas : fallbackSubject.relatedGranthas,
          };

          // Hierarchical tree
          const treeNode = {
            id: vedaData.id || slug,
            slug: vedaData.slug || slug,
            name: vedaData.name,
            enName: vedaData.enName,
            desc: vedaData.desc,
            stats: vedaData.stats,
            priest: vedaData.priest,
            badge: vedaData.badge,
            children: vedaData.tree || [],
          };

          return {
            subjectData: mergedSubject,
            treeNode: treeNode.children && treeNode.children.length > 0 ? treeNode : null,
            isLive: true,
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    // Local fallback
    const key = `veda/${slug}`;
    const subjectData = SUBJECTS_DATA[key] || SUBJECTS_DATA["veda/rigveda"];
    const treeNode =
      VEDA_HIERARCHY_TREE.children.find((v) => v.id === slug || v.slug === slug) ||
      VEDA_HIERARCHY_TREE.children[0];

    return {
      subjectData,
      treeNode,
      isLive: false,
    };
  },

  /**
   * Fetch single Mantra by ID from backend (with offline fallback)
   */
  async getMantraById(mantraId = "rv-1-1-1") {
    if (!mantraId) return null;

    const endpoints = [
      `${API_BASE_URL}/library/mantras/${mantraId}`,
      `${API_BASE_URL}/mantras/${mantraId}`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && result.data) {
          const liveMantra = result.data;
          return {
            mantra: {
              ...liveMantra,
              padapatha: liveMantra.padapatha || [],
              chapterMantraIds: liveMantra.chapterMantraIds || [],
              siblings: liveMantra.siblings || [],
            },
            isLive: true,
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    // Local fallback
    const localMantra = getMantraById(mantraId) || ALL_VEDIC_MANTRAS[0];
    return {
      mantra: localMantra,
      isLive: false,
    };
  },

  /**
   * Search Mantras (with offline fallback)
   */
  async searchMantras(params = {}) {
    const { query = "", vedaId = "all", page = 1, limit = 50 } = params;

    const queryParams = new URLSearchParams();
    if (query) queryParams.append("search", query);
    if (vedaId && vedaId !== "all") queryParams.append("vedaId", vedaId);
    if (page) queryParams.append("page", String(page));
    if (limit) queryParams.append("limit", String(limit));

    const endpoints = [
      `${API_BASE_URL}/library/mantras?${queryParams.toString()}`,
      `${API_BASE_URL}/mantras?${queryParams.toString()}`,
    ];

    for (const url of endpoints) {
      try {
        const result = await fetchWithTimeout(url);
        if (result && result.success && result.data && Array.isArray(result.data.mantras)) {
          return {
            mantras: result.data.mantras,
            pagination: result.data.pagination,
            isLive: true,
          };
        }
      } catch (err) {
        // Fallback
      }
    }

    // Local fallback search
    const filtered = ALL_VEDIC_MANTRAS.filter((m) => {
      if (vedaId !== "all" && m.vedaId !== vedaId) return false;
      if (!query.trim()) return true;
      const q = query.toLowerCase().trim();
      return (
        (m.id && m.id.toLowerCase().includes(q)) ||
        (m.textName && m.textName.toLowerCase().includes(q)) ||
        (m.sectionRef && m.sectionRef.toLowerCase().includes(q)) ||
        (m.sanskrit && m.sanskrit.toLowerCase().includes(q)) ||
        (m.hindiTranslation && m.hindiTranslation.toLowerCase().includes(q)) ||
        (m.englishTranslation && m.englishTranslation.toLowerCase().includes(q)) ||
        (m.hinglishTranslation && m.hinglishTranslation.toLowerCase().includes(q)) ||
        (m.rishi && m.rishi.toLowerCase().includes(q)) ||
        (m.devata && m.devata.toLowerCase().includes(q))
      );
    });

    return {
      mantras: filtered,
      pagination: {
        total: filtered.length,
        page: 1,
        limit: filtered.length,
        totalPages: 1,
      },
      isLive: false,
    };
  },
};

export default VedicLibraryService;
