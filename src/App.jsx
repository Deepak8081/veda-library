import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import VedaNavbar from "./components/navbar/VedaNavbar.jsx";
import SearchModal from "./components/common/SearchModal.jsx";
import VedaFooter from "./components/footer/VedaFooter.jsx";

// Pages
import HomePage from "./pages/HomePage.jsx";
import CategoryLandingPage from "./pages/CategoryLandingPage.jsx";
import SubjectDetailPage from "./pages/SubjectDetailPage.jsx";
import KnowledgePage from "./components/knowledge/KnowledgePage.jsx";
import CollectionsPage from "./components/collections/CollectionsPage.jsx";
import ArticleDetailPage from "./components/article/ArticleDetailPage.jsx";
import BlogListPage from "./pages/BlogListPage.jsx";
import BlogDetailPage from "./pages/BlogDetailPage.jsx";

// Helper component to ensure smooth scrolling to top on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

function MainLayout() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState("");

  const handleOpenSearch = (query = "") => {
    setSearchInitialQuery(typeof query === "string" ? query : "");
    setIsSearchOpen(true);
  };

  // Global Keyboard shortcut: ⌘K or Ctrl+K opens quick search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        handleOpenSearch("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fffaf0] text-[#171717] font-sans antialiased selection:bg-amber-200 selection:text-amber-950">
      {/* Scroll restoration */}
      <ScrollToTop />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        initialQuery={searchInitialQuery}
      />

      {/* Sticky Global Header with Direct Clean Page Navigation */}
      <VedaNavbar onOpenSearch={() => handleOpenSearch("")} />

      {/* Dynamic View Router */}
      <main className="flex-1">
        <Routes>
          {/* Page 1: Home Landing Page */}
          <Route
            path="/"
            element={<HomePage onOpenSearch={handleOpenSearch} />}
          />
          <Route
            path="/library"
            element={<HomePage onOpenSearch={handleOpenSearch} />}
          />

          {/* Blogs & Articles Hub */}
          <Route path="/library/articles" element={<BlogListPage />} />
          <Route path="/library/blogs" element={<BlogListPage />} />
          <Route path="/library/articles/:slug" element={<BlogDetailPage />} />
          <Route path="/library/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/articles" element={<BlogListPage />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/articles/:slug" element={<BlogDetailPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />

          {/* Knowledge & Collections Hubs */}
          <Route path="/library/knowledge" element={<KnowledgePage />} />
          <Route path="/library/collections" element={<CollectionsPage />} />
          <Route
            path="/library/collections/:collectionId"
            element={<CollectionsPage />}
          />

          {/* Page 2: Category Landing Page (e.g. /library/veda, /library/mantra-stotra, /library/puja) */}
          <Route
            path="/library/:category"
            element={
              <CategoryLandingPage
                onOpenSearch={() => setIsSearchOpen(true)}
              />
            }
          />

          {/* Page 3: Subject Detail Page (e.g. /library/veda/rigveda, /library/puja/shaiva) */}
          <Route
            path="/library/:category/:subject"
            element={
              <SubjectDetailPage
                onOpenSearch={() => setIsSearchOpen(true)}
              />
            }
          />

          {/* Page 4: Universal Detail Reader Page (e.g. /library/puja/shaiva/rudrabhisheka, /library/veda/rigveda/agnisukta) */}
          <Route
            path="/library/:category/:subject/:article"
            element={<ArticleDetailPage />}
          />

          {/* Fallback to Home */}
          <Route
            path="*"
            element={<HomePage onOpenSearch={() => setIsSearchOpen(true)} />}
          />
        </Routes>
      </main>

      {/* Global Scholarly Footer */}
      <VedaFooter onOpenSearch={() => setIsSearchOpen(true)} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
