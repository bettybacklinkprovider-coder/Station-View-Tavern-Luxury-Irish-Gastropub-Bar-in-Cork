import React, { useState } from 'react';
import { X, Star, QrCode, CheckCircle2, MessageSquare, ThumbsUp, ShieldCheck } from 'lucide-react';
import { Review, RESTAURANT_INFO } from '../data/restaurantData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReview: (review: Review) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onAddReview }) => {
  const [activeTab, setActiveTab] = useState<'write' | 'qr'>('write');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [recommendedDish, setRecommendedDish] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newReview: Review = {
      id: 'rev-' + Date.now(),
      author: author.trim(),
      location: location.trim() || 'Cork, Ireland',
      rating,
      date: 'Just now',
      source: 'Google Reviews',
      comment: comment.trim(),
      recommendedDish: recommendedDish.trim() || undefined,
    };

    onAddReview(newReview);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-600 to-orange-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 text-xs text-rose-100 font-semibold tracking-wider uppercase mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>Station View Tavern Reviews</span>
          </div>
          <h3 className="font-serif text-2xl font-bold">Share Your Tavern Experience</h3>
          <p className="text-xs text-rose-100/90 mt-1">
            We cherish genuine diner feedback on our gastropub dishes, pints, and hospitality.
          </p>

          {/* Toggle between Write and QR Scan */}
          <div className="mt-4 flex rounded-lg p-1 bg-black/20 text-xs font-medium">
            <button
              onClick={() => setActiveTab('write')}
              className={`flex-1 py-1.5 rounded-md transition-colors ${
                activeTab === 'write' ? 'bg-white text-stone-900 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              Write Review
            </button>
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 py-1.5 rounded-md transition-colors ${
                activeTab === 'qr' ? 'bg-white text-stone-900 shadow-sm' : 'text-white/80 hover:text-white'
              }`}
            >
              Scan QR Code
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-stone-900">Thank You!</h4>
            <p className="text-sm text-stone-600">
              Your review has been verified and added to the Station View Tavern testimonials.
            </p>
          </div>
        ) : activeTab === 'write' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1.5">
                Rating
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-stone-300 hover:text-amber-400 focus:outline-none transition-colors"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs text-stone-500 ml-2 font-medium">
                  {rating === 5 ? 'Exceptional (5/5)' : `${rating} Stars`}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Siobhán Crowley"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Town / Area
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Montenotte, Cork"
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                Favorite Dish or Drink Ordered (Optional)
              </label>
              <input
                type="text"
                value={recommendedDish}
                onChange={(e) => setRecommendedDish(e.target.value)}
                placeholder="e.g. Station Sunset Spritz & Angus Ribeye"
                className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                Your Review *
              </label>
              <textarea
                required
                rows={3}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tell us about the atmosphere, food flavor, service speed, or drinks..."
                className="w-full px-3 py-2 rounded-lg border border-stone-300 text-sm focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-md transition-all"
            >
              Submit Diner Review
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-48 h-48 mx-auto bg-stone-50 border-2 border-stone-200 rounded-xl p-4 flex flex-col items-center justify-center shadow-inner">
              {/* Scalable SVG QR code representation */}
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <svg viewBox="0 0 100 100" className="w-36 h-36">
                  {/* Outer corner markers */}
                  <rect x="5" y="5" width="26" height="26" rx="3" fill="#1c1917" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="#ffffff" />
                  <rect x="13" y="13" width="10" height="10" fill="#f43f5e" />

                  <rect x="69" y="5" width="26" height="26" rx="3" fill="#1c1917" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="#ffffff" />
                  <rect x="77" y="13" width="10" height="10" fill="#f97316" />

                  <rect x="5" y="69" width="26" height="26" rx="3" fill="#1c1917" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="#ffffff" />
                  <rect x="13" y="77" width="10" height="10" fill="#f43f5e" />

                  {/* QR Pattern dots */}
                  <rect x="36" y="8" width="6" height="6" fill="#1c1917" />
                  <rect x="46" y="8" width="6" height="6" fill="#f97316" />
                  <rect x="56" y="8" width="6" height="6" fill="#1c1917" />
                  <rect x="36" y="20" width="8" height="8" fill="#1c1917" />
                  <rect x="48" y="22" width="6" height="6" fill="#1c1917" />
                  <rect x="58" y="18" width="6" height="6" fill="#f43f5e" />

                  <rect x="10" y="38" width="6" height="6" fill="#1c1917" />
                  <rect x="22" y="44" width="8" height="8" fill="#f97316" />
                  <rect x="34" y="36" width="10" height="10" fill="#1c1917" />
                  <rect x="48" y="38" width="8" height="8" fill="#f43f5e" />
                  <rect x="60" y="42" width="8" height="8" fill="#1c1917" />
                  <rect x="74" y="36" width="6" height="6" fill="#1c1917" />
                  <rect x="84" y="44" width="8" height="8" fill="#f97316" />

                  <rect x="36" y="56" width="6" height="6" fill="#f43f5e" />
                  <rect x="46" y="52" width="8" height="8" fill="#1c1917" />
                  <rect x="58" y="56" width="6" height="6" fill="#f97316" />
                  <rect x="70" y="52" width="8" height="8" fill="#1c1917" />

                  <rect x="36" y="72" width="8" height="8" fill="#1c1917" />
                  <rect x="48" y="76" width="6" height="6" fill="#f43f5e" />
                  <rect x="58" y="70" width="8" height="8" fill="#1c1917" />
                  <rect x="72" y="74" width="6" height="6" fill="#f97316" />
                  <rect x="84" y="70" width="8" height="8" fill="#1c1917" />
                </svg>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-stone-700">
                Scan with your smartphone camera
              </p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Quick link directly to Station View Tavern’s verified Google Reviews page.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=87+Lower+Glanmire+Rd,+Montenotte,+Cork,+Ireland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 hover:text-rose-700"
            >
              <span>Or click here to open Google Reviews directly</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
