import React, { useState } from 'react';
import {
  Utensils,
  Search,
  SlidersHorizontal,
  Edit3,
  Check,
  RotateCcw,
  Sparkles,
  Calendar,
  Wine,
  Coffee,
  CheckCircle2,
} from 'lucide-react';
import { MenuItem, INITIAL_MENU_ITEMS } from '../data/restaurantData';

interface MenuPageProps {
  menuItems: MenuItem[];
  onUpdatePrice: (id: string, newPrice: number) => void;
  onResetPrices: () => void;
  onOpenBooking: () => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({
  menuItems,
  onUpdatePrice,
  onResetPrices,
  onOpenBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [editingPrices, setEditingPrices] = useState<Record<string, string>>({});
  const [saveToast, setSaveToast] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Menu' },
    { id: 'brunch', label: 'Brunch & Lunch' },
    { id: 'starters', label: 'Starters & Small Plates' },
    { id: 'mains', label: 'Main Courses' },
    { id: 'sides', label: 'Snacks & Sides' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'drinks', label: 'Drinks & Cocktails' },
  ];

  const handlePriceInputChange = (id: string, val: string) => {
    setEditingPrices((prev) => ({ ...prev, [id]: val }));
  };

  const handleSavePrice = (id: string) => {
    const rawVal = editingPrices[id];
    if (rawVal !== undefined) {
      const parsed = parseFloat(rawVal);
      if (!isNaN(parsed) && parsed >= 0) {
        onUpdatePrice(id, parsed);
        setSaveToast(`Updated price to €${parsed.toFixed(2)}`);
        setTimeout(() => setSaveToast(null), 2500);
      }
    }
  };

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.pairing && item.pairing.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDietary =
      dietaryFilter === 'all' || (item.dietary && item.dietary.includes(dietaryFilter as any));

    return matchesCategory && matchesSearch && matchesDietary;
  });

  return (
    <div className="bg-white text-stone-800 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/dish_signature_main_1793873206795.jpg"
            alt="Station View Tavern Plated Cuisine"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-orange-400 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md">
            <Utensils className="w-3.5 h-3.5 text-rose-400" />
            <span>Artisanal Gastropub Kitchen &amp; Cellar</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Our Food &amp; Drink Menu
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Crafted with passion using fresh ingredients from County Cork producers, wild Atlantic seafood, and traditional Irish heritage recipes.
          </p>

          {/* Quick Notice about Editable Prices */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                isEditMode
                  ? 'bg-rose-500 text-white shadow-lg'
                  : 'bg-white/10 hover:bg-white/20 text-rose-200 border border-white/20'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Exit Price Editor' : 'Enable Live Price Editor (Manager Tool)'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Toast notification for price update */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-xs font-medium border border-rose-500/40 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{saveToast}</span>
        </div>
      )}

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Manager Mode Banner */}
        {isEditMode && (
          <div className="mb-8 p-4 bg-rose-50 border border-rose-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-900">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
              <span>
                <strong>Price Editor Active:</strong> Type any updated price in the input boxes below and click the green checkmark to save. Changes persist locally.
              </span>
            </div>
            <button
              onClick={onResetPrices}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-rose-300 text-rose-700 hover:bg-rose-100 font-semibold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="space-y-6 mb-12">
          {/* Search & Dietary */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, burgers, stouts, or desserts..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              />
            </div>

            {/* Dietary Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-stone-500 font-medium">Dietary:</span>
              {[
                { id: 'all', label: 'All' },
                { id: 'GF', label: 'Gluten-Free' },
                { id: 'V', label: 'Vegetarian' },
                { id: 'VG', label: 'Vegan' },
                { id: 'DF', label: 'Dairy-Free' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors font-medium ${
                    dietaryFilter === opt.id
                      ? 'bg-rose-600 text-white font-semibold'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs (Segmented bar complying with zero-pill rule) */}
          <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 border-b border-stone-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-4 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-[2px] ${
                  activeCategory === cat.id
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-2xl border border-stone-200 p-8">
            <Utensils className="w-10 h-10 text-stone-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-stone-800">No dishes found</h3>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              We couldn't find items matching "{searchQuery}". Try selecting a different category or clearing your search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const currentInputVal =
                editingPrices[item.id] !== undefined
                  ? editingPrices[item.id]
                  : item.price.toString();

              return (
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

                      {/* Price Badge / Edit Input */}
                      <div className="absolute top-3 right-3 bg-stone-950/85 backdrop-blur-md text-white font-mono font-bold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5">
                        {isEditMode ? (
                          <div className="flex items-center gap-1">
                            <span className="text-rose-400 text-xs">€</span>
                            <input
                              type="number"
                              step="0.10"
                              value={currentInputVal}
                              onChange={(e) => handlePriceInputChange(item.id, e.target.value)}
                              className="w-16 px-1.5 py-0.5 rounded bg-stone-800 text-white text-xs text-right border border-rose-400 focus:outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => handleSavePrice(item.id)}
                              className="p-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs"
                              title="Save price"
                            >
                              <Check className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <span className="text-sm">€{item.price.toFixed(2)}</span>
                        )}
                      </div>

                      {/* Dietary Indicators */}
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
                          <span className="text-[11px] text-orange-600 font-medium">★ Signature</span>
                        )}
                      </div>

                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs text-stone-600 leading-relaxed">
                        {item.description}
                      </p>

                      {item.pairing && (
                        <p className="text-[11px] text-stone-500 pt-1 italic">
                          <span className="font-medium not-italic text-stone-700">Recommended Pairing:</span>{' '}
                          {item.pairing}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <button
                      onClick={onOpenBooking}
                      className="w-full py-2.5 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-600 hover:text-white transition-all text-center flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve Table to Enjoy</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Booking Prompt */}
        <div className="mt-16 bg-gradient-to-r from-rose-600 to-orange-500 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-rose-500/20">
          <div>
            <h3 className="font-serif text-2xl font-bold">Joining Us for Lunch or Dinner?</h3>
            <p className="text-xs sm:text-sm text-rose-100 mt-1 max-w-xl">
              We happily welcome walk-ins for drinks and bar food, but table bookings are strongly recommended during weekends and matchday broadcasts.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-7 py-3 rounded-xl bg-white text-stone-900 font-semibold text-sm hover:bg-stone-50 transition-colors shadow-md whitespace-nowrap"
          >
            Book a Table Online
          </button>
        </div>
      </div>
    </div>
  );
};
