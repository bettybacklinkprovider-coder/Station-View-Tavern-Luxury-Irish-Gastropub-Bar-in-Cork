import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Star } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t-2 border-gradient relative overflow-hidden">
      {/* Top hairline gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-orange-500 to-rose-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-stone-800">
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center text-white font-serif font-bold text-xl shadow-md shadow-rose-500/20">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Station View Tavern
              </span>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Cork’s premier destination where authentic Irish pub warmth meets contemporary gastropub cuisine, artisan pints, and signature sunset spritzes.
            </p>

            {/* Rating trust badge */}
            <div className="pt-2 flex items-center gap-3 text-sm">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white font-semibold tabular-nums">4.8 / 5.0</span>
              <span className="text-xs text-stone-400">· 380+ Verified Cork Diners</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-rose-400 uppercase mb-4">
              Explore Our Tavern
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-orange-400 transition-colors text-stone-300 text-left"
                >
                  Home &amp; Highlights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-orange-400 transition-colors text-stone-300 text-left"
                >
                  About Us &amp; Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('menu')}
                  className="hover:text-orange-400 transition-colors text-stone-300 text-left"
                >
                  Gastropub &amp; Drink Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-orange-400 transition-colors text-stone-300 text-left"
                >
                  Contact &amp; Reservations
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-rose-400 hover:text-rose-300 font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>Book Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-orange-400 uppercase mb-4">
              Visit &amp; Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                <span className="text-stone-300">
                  87 Lower Glanmire Rd, Montenotte, Cork, T23 A265, Ireland
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  {RESTAURANT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/353214506847?text=Hello%20Station%20View%20Tavern,%20I%20would%20like%20to%20inquire%20about%20a%20table"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Direct WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h4 className="text-xs font-semibold tracking-wider text-rose-400 uppercase mb-4">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Mon – Thu</span>
                <span className="text-stone-200 tabular-nums">12:00 PM – 11:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Friday</span>
                <span className="text-stone-200 tabular-nums">12:00 PM – 12:30 AM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span className="text-stone-400">Saturday</span>
                <span className="text-stone-200 tabular-nums">11:00 AM – 12:30 AM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-stone-400">Sunday</span>
                <span className="text-stone-200 tabular-nums">11:00 AM – 11:00 PM</span>
              </div>
              <p className="text-[11px] text-orange-400/90 pt-2 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Kitchen serves food until 9:30 PM (10:00 PM Fri–Sat)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Station View Tavern, Cork, Ireland. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Kent Station Vicinity, Montenotte</span>
            <span>·</span>
            <button
              onClick={() => onNavigate('contact')}
              className="text-stone-400 hover:text-white transition-colors"
            >
              Directions &amp; Map
            </button>
            <span>·</span>
            <button
              onClick={onOpenBooking}
              className="text-rose-400 hover:text-rose-300 font-medium"
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
