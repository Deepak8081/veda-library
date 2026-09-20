import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/home/HeroSection.jsx";
import ExploreKnowledgeSection from "../components/home/ExploreKnowledgeSection.jsx";
import FeaturedCollectionsSection from "../components/home/FeaturedCollectionsSection.jsx";
import RecentlyAddedSection from "../components/home/RecentlyAddedSection.jsx";
import BrowseBySourceSection from "../components/home/BrowseBySourceSection.jsx";
import SacredQuoteSection from "../components/home/SacredQuoteSection.jsx";
import FourVedasSection from "../components/home/FourVedasSection.jsx";
import GranthaArchiveSection from "../components/home/GranthaArchiveSection.jsx";
import MantraStotraSection from "../components/home/MantraStotraSection.jsx";
import TopicDiscoverySection from "../components/home/TopicDiscoverySection.jsx";
import KnowledgeConnectionSection from "../components/home/KnowledgeConnectionSection.jsx";
import ResearchSection from "../components/home/ResearchSection.jsx";
import AudiencePathsSection from "../components/home/AudiencePathsSection.jsx";
import PrinciplesSection from "../components/home/PrinciplesSection.jsx";
import RoadmapSection from "../components/home/RoadmapSection.jsx";
import NewsletterSection from "../components/home/NewsletterSection.jsx";
import FinalCtaSection from "../components/home/FinalCtaSection.jsx";

export default function HomePage({ onOpenSearch }) {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section + Prominent Search + Dual CTAs + 4 Trust Pillars Directly On Top */}
      <HeroSection
        onOpenSearch={onOpenSearch}
        onNavigateKnowledge={() => navigate("/library/veda")}
        onNavigateCollections={() => navigate("/library/collections")}
      />

      {/* 2. Explore Knowledge (12 Compact Pastel Cards with Bespoke Sacred SVGs) */}
      <ExploreKnowledgeSection
        onSelectCategory={(id) => navigate(`/library/${id}`)}
        onNavigateKnowledge={() => navigate("/library/knowledge")}
      />

      {/* 3. Featured Collections (4 Compact Widescreen Image Cards) */}
      <FeaturedCollectionsSection
        onNavigateCollections={() => navigate("/library/collections")}
      />

      {/* 4. Recently Added (Compact List with Verified Badges) */}
      <RecentlyAddedSection
        onSelectArticle={(id) => {
          if (id === "rudrabhisheka") {
            navigate("/library/puja/shaiva/rudrabhisheka");
          } else if (id === "agnihotra") {
            navigate("/library/yagya-sanskar");
          } else {
            navigate("/library/veda/rigveda/agnisukta");
          }
        }}
      />

      {/* 5. Browse by Source (10 Compact Rounded Pills) */}
      <BrowseBySourceSection
        onNavigateKnowledge={() => navigate("/library/veda")}
      />

      {/* 6. Sacred Upanishad Quote Card */}
      <SacredQuoteSection />

      {/* 7. The Four Vedas */}
      <FourVedasSection
        onNavigateKnowledge={() => navigate("/library/veda")}
      />

      {/* 8. Grantha Archive */}
      <GranthaArchiveSection
        onNavigateCollections={() => navigate("/library/collections")}
      />

      {/* 9. Mantra, Sukta & Stotra */}
      <MantraStotraSection
        onNavigateKnowledge={() => navigate("/library/mantra-stotra")}
      />

      {/* 10. Explore by Topic */}
      <TopicDiscoverySection
        onNavigateKnowledge={() => navigate("/library/veda")}
      />

      {/* 11. Knowledge Connection Graph */}
      <KnowledgeConnectionSection />

      {/* 12. Research & References */}
      <ResearchSection
        onNavigateKnowledge={() => navigate("/library/veda")}
      />

      {/* 13. Start Where You Are */}
      <AudiencePathsSection
        onNavigateKnowledge={() => navigate("/library/veda")}
      />

      {/* 14. Our Approach / Principles */}
      <PrinciplesSection />

      {/* 15. The Library is Growing (Roadmap) */}
      <RoadmapSection />

      {/* 16. Newsletter & Knowledge Updates */}
      <NewsletterSection />

      {/* 17. Final Call to Action */}
      <FinalCtaSection
        onOpenSearch={onOpenSearch}
        onNavigateKnowledge={() => navigate("/library/veda")}
      />
    </div>
  );
}
