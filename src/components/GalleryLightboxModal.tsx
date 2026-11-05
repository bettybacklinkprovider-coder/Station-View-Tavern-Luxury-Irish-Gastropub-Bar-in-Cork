import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../data/restaurantData';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-stone-950/70 hover:bg-rose-600 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-stone-950/70 hover:bg-rose-600 text-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-stone-950/70 hover:bg-rose-600 text-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="relative aspect-video sm:aspect-[16/10] bg-black">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 bg-stone-900 text-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-stone-800">
          <div>
            <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider block mb-1">
              Station View Tavern · {item.category}
            </span>
            <h4 className="font-serif text-xl font-bold text-white">{item.title}</h4>
            <p className="text-xs text-stone-400 mt-1">{item.description}</p>
          </div>
          <span className="text-xs text-stone-400 tabular-nums self-end sm:self-center font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};
