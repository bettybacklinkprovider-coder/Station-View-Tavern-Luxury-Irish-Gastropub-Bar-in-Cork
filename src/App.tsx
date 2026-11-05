import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ContactPage } from './pages/ContactPage';
import { ReservationModal } from './components/ReservationModal';
import { ReviewModal } from './components/ReviewModal';
import { GalleryLightboxModal } from './components/GalleryLightboxModal';
import {
  INITIAL_MENU_ITEMS,
  CUSTOMER_REVIEWS,
  GALLERY_ITEMS,
  MenuItem,
  Review,
  GalleryItem,
  RESTAURANT_INFO,
} from './data/restaurantData';
import { MessageSquare, Phone, Calendar } from 'lucide-react';

export default function App() {
  // Page routing state synced with URL hash / pathname
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedOfferTitle, setSelectedOfferTitle] = useState<string | null>(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Persistent menu items state (with editable prices)
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem('svt_menu_items_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load saved menu prices', e);
    }
    return INITIAL_MENU_ITEMS;
  });

  // Customer reviews state (includes newly added verified reviews)
  const [reviews, setReviews] = useState<Review[]>(() => {
    try {
      const saved = localStorage.getItem('svt_reviews_v2');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load saved reviews', e);
    }
    return CUSTOMER_REVIEWS;
  });

  // URL synchronization
  useEffect(() => {
    const parseUrl = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      const path = window.location.pathname.replace(/^\//, '');

      const target = hash || path;
      if (target === 'about') {
        setCurrentPage('about');
      } else if (target === 'menu') {
        setCurrentPage('menu');
      } else if (target === 'contact' || target === 'booking') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
      }
    };

    parseUrl();
    window.addEventListener('hashchange', parseUrl);
    window.addEventListener('popstate', parseUrl);

    return () => {
      window.removeEventListener('hashchange', parseUrl);
      window.removeEventListener('popstate', parseUrl);
    };
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (offerTitle?: string) => {
    setSelectedOfferTitle(offerTitle || null);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedOfferTitle(null);
  };

  // Editable prices handler
  const handleUpdatePrice = (id: string, newPrice: number) => {
    setMenuItems((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, price: newPrice } : item
      );
      try {
        localStorage.setItem('svt_menu_items_v2', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save menu prices', e);
      }
      return updated;
    });
  };

  const handleResetPrices = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    try {
      localStorage.removeItem('svt_menu_items_v2');
    } catch (e) {
      console.warn('Failed to reset menu prices', e);
    }
  };

  // Add review handler
  const handleAddReview = (newReview: Review) => {
    setReviews((prev) => {
      const updated = [newReview, ...prev];
      try {
        localStorage.setItem('svt_reviews_v2', JSON.stringify(updated));
      } catch (e) {
        console.warn('Failed to save review', e);
      }
      return updated;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fffafb] text-stone-900 selection:bg-rose-500 selection:text-white">
      {/* Navigation Header adhering to 3-zone contract */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Rendering */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
            onOpenReviewModal={() => setIsReviewModalOpen(true)}
            menuItems={menuItems}
            reviews={reviews}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
            onOpenGalleryItem={(item) => setSelectedGalleryItem(item)}
          />
        )}

        {currentPage === 'menu' && (
          <MenuPage
            menuItems={menuItems}
            onUpdatePrice={handleUpdatePrice}
            onResetPrices={handleResetPrices}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Floating Action Bar for Mobile & Quick Access */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/353214506847?text=Hello%20Station%20View%20Tavern,%20I%20would%20like%20to%20inquire%20about%20a%20table"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg hover:shadow-xl transition-all group"
          title="WhatsApp Station View Tavern"
        >
          <MessageSquare className="w-4 h-4" />
          <span className="text-xs font-semibold hidden sm:inline whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        {/* Floating Reserve Button */}
        <button
          onClick={() => handleOpenBooking()}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-rose-600 to-orange-500 text-white shadow-xl hover:shadow-2xl transition-all hover:scale-105"
          title="Book a Table"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-xs font-bold whitespace-nowrap">Reserve Table</span>
        </button>
      </div>

      {/* Global Modals */}
      <ReservationModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedOffer={selectedOfferTitle}
      />

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onAddReview={handleAddReview}
      />

      <GalleryLightboxModal
        item={selectedGalleryItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedGalleryItem(null)}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />

      {/* Site Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
