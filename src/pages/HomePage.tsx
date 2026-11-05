import React, { useState } from 'react';
import {
  Calendar,
  Utensils,
  MapPin,
  Phone,
  Clock,
  Star,
  ArrowRight,
  MessageSquare,
  Sparkles,
  QrCode,
  Tag,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import {
  RESTAURANT_INFO,
  MenuItem,
  SpecialOffer,
  Review,
  SPECIAL_OFFERS,
} from '../data/restaurantData';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onOpenBooking: (offerTitle?: string) => void;
  onOpenReviewModal: () => void;
  menuItems: MenuItem[];
  reviews: Review[];
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenReviewModal,
  menuItems,
  reviews,
}) => {
  const [selectedMenuCategory, setSelectedMenuCategory] = useState<string>('all');
  const [activeOffer, setActiveOffer] = useState<SpecialOffer | null>(null);

  // Filter popular/featured menu items
  const featuredMenu = menuItems.filter((item) => {
    if (selectedMenuCategory === 'all') return item.popular;
    return item.category === selectedMenuCategory;
  });

  return (
    <div className="space-y-0 text-stone-800">
      {/* ========================================================
          SECTION 1: HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[85vh] flex items-center bg-stone-950 text-white overflow-hidden">
        {/* Background Image with subtle luxury pink & orange gradient scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_tavern_front_1793873205197.jpg"
            alt="Station View Tavern Exterior Cork"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Dual luxury scrim: dark bottom + warm pink/amber overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-950/60 via-stone-950/50 to-orange-950/50 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl space-y-6">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-rose-200">
              <span className="text-orange-400 font-semibold tracking-wider uppercase">
                Lower Glanmire Road · Montenotte
              </span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span>Cork, Ireland</span>
              <span aria-hidden="true" className="text-stone-500">·</span>
              <span className="flex items-center gap-1 text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <span className="tabular-nums font-semibold">4.8</span> Rating
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-balance leading-tight">
              Where Irish Pub Warmth Meets{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-300 to-orange-400">
                Modern Gastropub Luxury
              </span>
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-stone-300 max-w-2xl leading-relaxed font-normal">
              Perched moments from Cork’s Kent Station on historic Lower Glanmire Road, Station View Tavern invites you to savor dry-aged Irish steaks, fresh Atlantic seafood, artisanal craft beers, and our signature sunset spritzes in an intimate, vibrant setting.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-xl shadow-rose-600/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                Book a Table Online
              </button>
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-stone-200 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all whitespace-nowrap flex items-center gap-2"
              >
                <Utensils className="w-4 h-4 text-orange-400" />
                <span>Explore Full Menu</span>
              </button>
            </div>

            {/* 3-Point Quick Proof Bar */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-xs sm:text-sm text-stone-300">
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-white tabular-nums">100%</p>
                <p className="text-stone-400 text-xs mt-0.5">Irish Beef &amp; Produce</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-white tabular-nums">14+ Taps</p>
                <p className="text-stone-400 text-xs mt-0.5">Cork Stouts &amp; Ales</p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-xl font-bold text-white tabular-nums">2 Mins</p>
                <p className="text-stone-400 text-xs mt-0.5">Walk from Kent Station</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 2: ABOUT US (LANDING HIGHLIGHT)
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-rose-50/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-100/60 px-3 py-1 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Our Montenotte Heritage</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
                A Celebrated Cork Tavern Built on True Irish Hospitality
              </h2>

              <p className="text-stone-600 text-base leading-relaxed">
                Nestled on Lower Glanmire Road where the historic pulse of Cork’s railway district meets the elevated grace of Montenotte, Station View Tavern has stood as a beloved gathering spot for travelers, locals, and sports enthusiasts alike.
              </p>

              <p className="text-stone-600 text-base leading-relaxed">
                Today, under passionate culinary leadership, our tavern blends genuine pub charm—crackling fires, laughter at the mahogany counter, and expertly pulled pints of Murphy’s—with an elevated dining experience crafted from County Cork’s finest farmsteads and coastal trawlers.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-rose-100 shadow-sm">
                  <h4 className="font-serif font-bold text-stone-900 text-base">Fireside Snug &amp; Bar</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Cosy dark mahogany woodwork, brass rails, and private corners for relaxed conversation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-sm">
                  <h4 className="font-serif font-bold text-stone-900 text-base">Heated Terrace</h4>
                  <p className="text-xs text-stone-500 mt-1">
                    Year-round alfresco dining overlooking the dynamic Lower Glanmire roadscape.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 hover:text-orange-600 group transition-colors"
                >
                  <span>Learn More About Our Story &amp; Hospitality</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
                <img
                  src="/src/assets/images/interior_luxury_bar_1793873204937.jpg"
                  alt="Station View Tavern Interior Bar and Velvet Booths"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider text-rose-300 font-semibold">
                    The Main Tavern Room
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-0.5">
                    Polished Mahogany, Velvet Booths &amp; Amber Glow
                  </h3>
                </div>
              </div>

              {/* Floating highlight badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-rose-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center font-serif font-bold text-lg shrink-0">
                    4.8
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900">Cork Gastropub Excellence</p>
                    <p className="text-[11px] text-stone-500">Over 380+ verified Google &amp; TripAdvisor reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 3: OUR MENU (FEATURED ITEMS)
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
              Handcrafted Food &amp; Drink
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
              Popular Tavern Selections
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-2">
              Every dish is freshly prepared using locally sourced West Cork meats, daily coastal catch, and seasonal garden botanicals.
            </p>

            {/* Interactive Filter Tabs (Buttons conforming to zero-pill rule) */}
            <div className="mt-8 inline-flex items-center p-1.5 rounded-xl bg-stone-100 border border-stone-200 text-xs font-medium">
              {[
                { id: 'all', label: 'Chef Favorites' },
                { id: 'mains', label: 'Main Courses' },
                { id: 'starters', label: 'Starters' },
                { id: 'brunch', label: 'Brunch & Lunch' },
                { id: 'drinks', label: 'Cocktails & Taps' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedMenuCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                    selectedMenuCategory === tab.id
                      ? 'bg-white text-rose-600 font-bold shadow-sm'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMenu.slice(0, 6).map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-md text-white font-mono font-bold text-sm px-3 py-1 rounded-lg">
                      €{item.price.toFixed(2)}
                    </div>
                    {item.dietary && item.dietary.length > 0 && (
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        {item.dietary.map((d) => (
                          <span
                            key={d}
                            className="text-[10px] font-bold bg-white/90 backdrop-blur-md text-stone-800 px-2 py-0.5 rounded shadow-sm"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-rose-500">
                        {item.category.toUpperCase()}
                      </span>
                      {item.popular && (
                        <span className="text-[11px] text-orange-600 font-medium">★ Guest Favorite</span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                    {item.pairing && (
                      <p className="text-[11px] text-stone-500 pt-1 italic">
                        <span className="font-medium not-italic text-stone-700">Pairing:</span> {item.pairing}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking()}
                    className="w-full py-2.5 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white transition-all text-center"
                  >
                    Reserve Table to Taste
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* View Complete Menu Call-to-action */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-md shadow-rose-500/20 transition-all"
            >
              <Utensils className="w-4 h-4" />
              <span>View Full Gastropub &amp; Drink Menu (20+ Items)</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 4: SPECIAL OFFERS & PACKAGES
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-rose-950 via-stone-900 to-orange-950 text-white relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md mb-3">
              <Tag className="w-3.5 h-3.5 text-orange-400" />
              <span>Seasonal Dining Specials</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Tavern Offers &amp; Packages
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2">
              From our famous Sunday Roast to midweek steak dinners and weekend matchday pints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SPECIAL_OFFERS.map((offer) => (
              <div
                key={offer.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 hover:border-rose-400/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:transform hover:-translate-y-1 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-400">
                      {offer.badge}
                    </span>
                    <span className="text-xs text-rose-200 bg-rose-500/20 px-2.5 py-1 rounded-md font-medium">
                      {offer.days}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">{offer.title}</h3>
                    <p className="text-xs font-medium text-rose-200 mt-0.5">{offer.tagline}</p>
                  </div>

                  <p className="text-sm text-stone-300 leading-relaxed">{offer.description}</p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 pt-2 border-t border-white/10 text-xs text-stone-300">
                    {offer.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-stone-400 block">Offer Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-bold text-white tabular-nums">
                        {offer.priceTag}
                      </span>
                      {offer.originalPrice && (
                        <span className="text-xs text-stone-400 line-through">
                          {offer.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenBooking(offer.title)}
                    className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 shadow-md shadow-rose-500/20 transition-all whitespace-nowrap"
                  >
                    Explore &amp; Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 5: CUSTOMER REVIEWS & RATINGS
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-rose-600 bg-rose-100/70 px-3 py-1 rounded-md">
                Verified Diner Feedback
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
                Loved by Locals &amp; Cork Visitors
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-xl">
                Read what guests say about our ribeye steaks, craft stouts, and Montenotte hospitality.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenReviewModal}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                <span>Write a Review</span>
              </button>
              <button
                onClick={onOpenReviewModal}
                className="px-4 py-2.5 rounded-lg text-xs font-semibold text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 transition-colors flex items-center gap-2"
              >
                <QrCode className="w-3.5 h-3.5 text-orange-500" />
                <span>Scan Review QR Code</span>
              </button>
            </div>
          </div>

          {/* Aggregate Rating Banner */}
          <div className="mb-10 bg-white rounded-2xl p-6 border border-rose-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="text-center sm:text-left">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 tabular-nums">
                  {RESTAURANT_INFO.stats.rating}
                </div>
                <div className="flex text-amber-400 mt-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <div className="border-l border-stone-200 pl-5 text-xs text-stone-600 space-y-1">
                <p className="font-bold text-stone-900 text-sm">
                  Overall Tavern Satisfaction
                </p>
                <p>Based on {RESTAURANT_INFO.stats.totalReviews} verified Cork customer reviews</p>
                <p className="text-rose-600 font-medium">Google Reviews (4.8 ★) · TripAdvisor Recommended</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Genuine Diner Ratings · No Fake Testimonials</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl p-6 border border-stone-200/80 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-stone-400">
                      {review.source}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    “{review.comment}”
                  </p>

                  {review.recommendedDish && (
                    <div className="text-[11px] text-rose-600 bg-rose-50/70 p-2 rounded-md">
                      <span className="font-semibold">Ordered:</span> {review.recommendedDish}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-stone-900">{review.author}</h4>
                    <p className="text-stone-500 text-[11px]">{review.location}</p>
                  </div>
                  <span className="text-stone-400 text-[11px]">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 6: CONTACT & LOCATION
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
                  Visit Us in Cork
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mt-3">
                  Find Station View Tavern
                </h2>
                <p className="text-stone-600 text-sm mt-2">
                  Conveniently situated on Lower Glanmire Road, Montenotte, just a two-minute stroll uphill from Cork Kent Train Station.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Tavern Address
                    </h4>
                    <p className="text-sm text-stone-700 font-medium mt-0.5">
                      {RESTAURANT_INFO.address.full}
                    </p>
                    <p className="text-xs text-stone-500 mt-1">Eircode: T23 A265</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      Phone Number
                    </h4>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-base text-rose-600 font-bold hover:text-rose-700 block mt-0.5"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-xs text-stone-500 mt-0.5">Call for instant table inquiries</p>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="px-3 py-1.5 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-800 text-xs font-semibold"
                  >
                    Click to Call
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/80 flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wide">
                      WhatsApp Messaging
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Instant chat with our front-of-house team
                    </p>
                  </div>
                  <a
                    href="https://wa.me/353214506847?text=Hello%20Station%20View%20Tavern,%20I%20would%20like%20to%20inquire%20about%20a%20table"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                  >
                    Chat Now
                  </a>
                </div>
              </div>

              {/* Opening Hours Schedule */}
              <div className="p-5 rounded-xl bg-rose-50/50 border border-rose-100">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wide mb-3">
                  <Clock className="w-4 h-4 text-rose-600" />
                  <span>Weekly Service Hours</span>
                </div>
                <div className="space-y-2 text-xs">
                  {RESTAURANT_INFO.openingHours.map((slot, index) => (
                    <div key={index} className="flex justify-between py-1 border-b border-rose-100 last:border-0">
                      <span className="font-medium text-stone-700">{slot.day}</span>
                      <span className="text-stone-600 tabular-nums">{slot.bar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Map & Direct Action Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Interactive Google Map Preview Container */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-lg bg-stone-100 aspect-[16/10] sm:aspect-[16/9]">
                <iframe
                  title="Station View Tavern Google Maps Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Station+View+Tavern+87+Lower+Glanmire+Rd+Montenotte+Cork+Ireland&t=&z=16&ie=UTF8&iwloc=&output=embed"
                />

                {/* Map Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-stone-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      S
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-stone-900 text-sm">
                        Station View Tavern
                      </h4>
                      <p className="text-[11px] text-stone-600 mt-0.5">
                        87 Lower Glanmire Rd, Montenotte, Cork
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <a
                          href="https://maps.google.com/?q=87+Lower+Glanmire+Rd,+Montenotte,+Cork,+Ireland"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-rose-600 hover:text-orange-600"
                        >
                          <span>Open in Google Maps</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Booking CTA banner */}
              <div className="bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-rose-500/15">
                <div>
                  <h3 className="font-serif text-xl font-bold">Planning a Visit to Cork?</h3>
                  <p className="text-xs text-rose-100 mt-1">
                    Guarantee your favorite fireside snug or terrace table in advance.
                  </p>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="px-6 py-3 rounded-xl bg-white text-stone-900 font-semibold text-xs sm:text-sm hover:bg-stone-50 transition-colors shadow-md whitespace-nowrap"
                >
                  Reserve Table Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
