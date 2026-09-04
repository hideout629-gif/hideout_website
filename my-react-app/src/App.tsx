import { useState } from 'react';
import type { Cottage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CottagesSection } from './components/CottagesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { Footer } from './components/Footer';
import { CottageDetailModal } from './components/CottageDetailModal';
import './styles/index.css';

export function App() {
  const [selectedCottageForDetail, setSelectedCottageForDetail] = useState<Cottage | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Open Cottage Details Modal
  const handleSelectCottageDetail = (cottage: Cottage) => {
    setSelectedCottageForDetail(cottage);
  };

  // Scroll to Cottages Section
  const handleExploreClick = () => {
    setActiveSection('cottages');
    const el = document.getElementById('cottages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF8F4] text-[#16241B] font-sans antialiased selection:bg-[#E5C158] selection:text-[#142E1F]">
      
      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* Hero Section */}
      <Hero
        onExploreClick={handleExploreClick}
      />

      {/* Cottages Showcase Section */}
      <CottagesSection
        onSelectDetail={handleSelectCottageDetail}
      />

      {/* Experiences Section */}
      <ExperiencesSection />

      {/* Photo Gallery & Lightbox */}
      <GallerySection />

      {/* Guest Reviews & Ratings */}
      <ReviewsSection />

      {/* Facilities & Amenities Grid */}
      <AmenitiesSection />

      {/* Footer */}
      <Footer />

      {/* Cottage Detail Modal */}
      <CottageDetailModal
        cottage={selectedCottageForDetail}
        onClose={() => setSelectedCottageForDetail(null)}
      />

    </div>
  );
}

export default App;
