import React, { useState } from 'react';
import {
  Sparkles,
  Award,
  Heart,
  Wine,
  Flame,
  CheckCircle2,
  Calendar,
  ArrowRight,
  Maximize2,
  Users,
} from 'lucide-react';
import { RESTAURANT_INFO, GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';

interface AboutPageProps {
  onOpenBooking: () => void;
  onOpenGalleryItem: (item: GalleryItem) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenBooking,
  onOpenGalleryItem,
}) => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');

  const filteredGallery = GALLERY_ITEMS.filter((item) => {
    if (selectedGalleryCategory === 'all') return true;
    return item.category === selectedGalleryCategory;
  });

  return (
    <div className="bg-white text-stone-800">
      {/* Page Hero Header */}
      <section className="relative py-20 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/interior_luxury_bar_1793873204937.jpg"
            alt="Station View Tavern Atmospheric Bar"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Our Cork Heritage &amp; Spirit</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto">
            The Story of Station View Tavern
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            A storied Victorian railway tavern on Lower Glanmire Road, reborn with modern culinary artistry, exceptional spirits, and unforgettable Irish warmth.
          </p>
        </div>
      </section>

      {/* Chapter 1: Introduction and History */}
      <section className="py-20 bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                01. Origins &amp; Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
                From 19th-Century Steam Travelers to Modern Gastropub Connoisseurs
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Established over a century ago along the bustling Lower Glanmire Road, Station View Tavern was named for its commanding vantage over Cork’s Kent Railway Station. For generations, weary passengers stepping off the Great Southern &amp; Western Railway locomotives were greeted by the golden glow of our tavern windows, a warm hearth, and a hearty meal.
              </p>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                While Cork evolved into Ireland’s premier culinary capital, Station View Tavern preserved its soul. We carefully restored the hand-carved mahogany back-bar, exposed the antique stone architecture, and introduced contemporary kitchen craftsmanship that celebrates the very best of County Cork.
              </p>
              <div className="pt-2 border-l-2 border-rose-400 pl-4 text-xs sm:text-sm text-stone-700 italic">
                “A tavern should never lose its hearth. Whether you come for a quick pint after the train or settle in for our 28-day dry-aged ribeye, you are family at Station View.”
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
                <img
                  src="/src/assets/images/hero_tavern_front_1793873205197.jpg"
                  alt="Historic Facade of Station View Tavern"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs text-orange-400 font-semibold uppercase">
                    Historic Lower Glanmire Road
                  </span>
                  <h4 className="font-serif text-lg font-bold">
                    Standing Proud in Montenotte Since 1883
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 2: Our Story and Hospitality */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img
                    src="/src/assets/images/dish_signature_main_1793873206795.jpg"
                    alt="Artisanal Steak & Salmon Dish"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] mt-6">
                  <img
                    src="/src/assets/images/cocktails_sunset_spritz_1793873207362.jpg"
                    alt="Signature Sunset Spritz Cocktails"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                02. Our Culinary Ethos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
                Hyper-Local Ingredients with Global Flair
              </h2>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Our kitchen is driven by the rich terroir of County Cork. We partner directly with artisan purveyors: Rosscarbery Clonakilty meats, Gubbeen and Ardsallagh farmhouse cheesemakers, Castletownbere day-boat fishermen, and small-batch produce growers from East Cork.
              </p>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Every dish honors authentic Irish gastropub tradition while incorporating modern techniques—from slow 8-hour braises to delicate house-made citrus reductions and pink peppercorn whiskey emulsions.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100">
                  <Heart className="w-5 h-5 text-rose-600 mb-2" />
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Farmhouse Partners</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Direct relationships with Cork farmers and producers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-orange-50/60 border border-orange-100">
                  <Wine className="w-5 h-5 text-orange-600 mb-2" />
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Craft &amp; Spirits</h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Over 35 fine Irish whiskeys and rotating local taps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Restaurant Interior Gallery */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600">
                03. Visual Atmosphere
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-1">
                Tavern Interior &amp; Dining Gallery
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Take a visual tour of our mahogany bar, dining salon, and signature creations. Click to view high resolution.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex items-center p-1 rounded-xl bg-white border border-stone-200 text-xs font-medium">
              {[
                { id: 'all', label: 'All Photos' },
                { id: 'interior', label: 'Tavern Interior' },
                { id: 'food', label: 'Food Artistry' },
                { id: 'drinks', label: 'Bar & Cocktails' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedGalleryCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    selectedGalleryCategory === cat.id
                      ? 'bg-stone-900 text-white font-semibold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenGalleryItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-stone-900 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300 aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-lg bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-bold text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-300 line-clamp-1 mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter 4: Why Customers Visit Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-md">
              04. The Station View Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
              Why Diners Return to Us
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              From matchday camaraderie to quiet candlelit dates and family Sunday feasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-rose-50/50 border border-rose-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Electric Matchday Energy
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                When Munster Rugby or Cork GAA take the field, there is no better atmosphere. Six 4K screens, crisp craft pints, and cheers echoing through the historic bar.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-orange-50/50 border border-orange-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Award-Winning Culinary Standard
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                We believe pub food deserves fine dining respect. Hand-cut chips, slow-simmered sauces, and prime Irish steaks butchered with precision every week.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-rose-50/50 border border-rose-100 space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                True Irish Hospitality
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                No aloof formality or rush. Our bartenders know your name, our servers recommend their personal favorites, and every guest is welcomed with open arms.
              </p>
            </div>
          </div>

          {/* Tavern Facilities Checklist */}
          <div className="mt-16 bg-stone-50 rounded-2xl p-8 border border-stone-200">
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-6 text-center">
              Tavern Facilities &amp; Amenities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RESTAURANT_INFO.facilities.map((fac, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">{fac.title}</h4>
                    <p className="text-xs text-stone-500 mt-0.5">{fac.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-lg shadow-rose-500/25 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Table at Station View Tavern</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
