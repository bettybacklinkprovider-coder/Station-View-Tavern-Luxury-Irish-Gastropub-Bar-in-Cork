import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu as MenuIcon, X, MessageSquare, ChevronRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'menu', label: 'Our Menu' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-2 px-4 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-rose-300">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>87 Lower Glanmire Rd, Montenotte, Cork</span>
            </span>
            <span className="hidden md:inline text-stone-600">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-400">
              <Clock className="w-3.5 h-3.5 text-orange-400" />
              <span>Kitchen open today from 12:00 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 text-orange-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-rose-400" />
              <span className="font-semibold">{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-stone-600">·</span>
            <a
              href="https://wa.me/353214506847?text=Hello%20Station%20View%20Tavern,%20I%20would%20like%20to%20inquire%20about%20a%20table"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header fulfilling the 3-Zone Top Bar Contract */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-rose-100'
            : 'bg-white border-b border-rose-100/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark in Display font */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm shadow-rose-500/20 group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-rose-600 transition-colors whitespace-nowrap">
                Station View Tavern
              </span>
              <span className="block text-[11px] tracking-wider text-rose-500 font-medium uppercase">
                Cork Gastropub &amp; Snug
              </span>
            </div>
          </button>

          {/* Zone 2: 4 single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 text-sm tracking-wide whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-rose-600 font-semibold'
                      : 'text-stone-700 hover:text-orange-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-md shadow-rose-500/20 hover:shadow-lg hover:shadow-orange-500/25 transition-all whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Table</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-stone-900/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-serif font-bold text-lg">
                    S
                  </div>
                  <span className="font-serif font-bold text-stone-900">Station View Tavern</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-800 rounded-md"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-base text-left font-medium transition-colors ${
                        isActive
                          ? 'bg-rose-50 text-rose-600 font-semibold'
                          : 'text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 text-stone-400" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 shadow-md shadow-rose-500/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Table</span>
                </button>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-rose-600" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 text-xs text-stone-500 space-y-1">
              <p className="font-medium text-stone-700">87 Lower Glanmire Rd, Cork</p>
              <p>2 mins from Kent Railway Station</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
