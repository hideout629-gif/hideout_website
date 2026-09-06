import { useState } from 'react';
import type { Cottage, ToastMessage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CottagesSection } from './components/CottagesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { Footer } from './components/Footer';
import { CottageDetailModal } from './components/CottageDetailModal';
import { BookingModal } from './components/BookingModal';
import { ToastNotification } from './components/ToastNotification';
import './styles/index.css';

export function App() {
  const [selectedCottageForDetail, setSelectedCottageForDetail] = useState<Cottage | null>(null);
  const [selectedCottageForBooking, setSelectedCottageForBooking] = useState<Cottage | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (title: string, message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    setToast({ id: Date.now().toString(), title, message, type });
  };

  const handleSelectCottageDetail = (cottage: Cottage) => {
    setSelectedCottageForDetail(cottage);
  };

  const handleOpenBooking = (cottage?: Cottage | null) => {
    if (cottage) {
      setSelectedCottageForBooking(cottage);
    }
    setIsBookingModalOpen(true);
  };

  const handleBookingSubmit = (cottageName: string) => {
    showToast(
      'Reservation Request Sent! 🍃',
      `Thank you! Your booking inquiry for "${cottageName}" has been submitted. Our team will contact you within 15 minutes.`,
      'success'
    );
  };

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
        onOpenBooking={handleOpenBooking}
        onShowToast={showToast}
      />

      {/* Curated Resort Experiences Section */}
      <ExperiencesSection />

      {/* Photo Gallery & Lightbox */}
      <GallerySection 
        onShowToast={showToast}
      />

      {/* Guest Reviews & Ratings */}
      <ReviewsSection 
        onShowToast={showToast}
      />

      {/* Facilities & Amenities Grid */}
      <AmenitiesSection 
        onShowToast={showToast}
      />

      {/* Footer */}
      <Footer 
        onShowToast={showToast}
      />

      {/* Cottage Detail Modal */}
      <CottageDetailModal
        cottage={selectedCottageForDetail}
        onClose={() => setSelectedCottageForDetail(null)}
        onReserve={(cottage) => {
          setSelectedCottageForDetail(null);
          handleOpenBooking(cottage);
        }}
      />

      {/* Instant Booking Inquiry Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialCottage={selectedCottageForBooking}
        onBookingSubmit={handleBookingSubmit}
      />

      {/* Toast Notification */}
      <ToastNotification
        toast={toast}
        onClose={() => setToast(null)}
      />

    </div>
  );
}

export default App;
